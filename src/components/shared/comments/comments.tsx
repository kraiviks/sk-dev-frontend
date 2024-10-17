'use client';
import { FC, useState } from 'react';
import useSWR from 'swr';
import { Api } from '@/services/api/api-client';
import { useAuthStore } from '@/stores/useAuthStore';
import { Comment } from '@/types/comment';
import { Button } from '@/components/ui/button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { cn } from '@/lib/utils';
import CommentItem from './comment-item';

const fetcher = async (articleId: string) => {
	const { data } = await Api.getCommentsByArticleId(articleId);
	return data;
};

interface CommentFormValue {
	comment: string;
	parentId?: string;
}

const validationSchema = Yup.object({
	comment: Yup.string()
		.required('Enter comment')
		.min(2, 'Comment must be at least 2 characters')
		.max(1000, 'Comment must be less than 1000 characters'),
});

export const Comments: FC<{ articleId: string }> = ({ articleId }) => {
	const { accessToken } = useAuthStore();
	const { data: comments, mutate } = useSWR(`comments-${articleId}`, () =>
		fetcher(articleId)
	);

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<CommentFormValue>({
		mode: 'onChange',
		resolver: yupResolver(validationSchema),
	});

	const submitComment: SubmitHandler<CommentFormValue> = async (
		data,
		parentId?: string
	) => {
		if (accessToken) {
			try {
				await Api.createComment(articleId, { content: data.comment, parentId });
				mutate();
				reset();
			} catch (error) {
				console.log(error);
			}
		}
	};

	const filteredComments = comments?.filter(
		(comment:Comment) => comment.parentId === null
	);

	return (
		<div className="mt-8">
			<h2 className="mb-4 text-3xl font-bold">Comments</h2>
			{/* Форма для нового коментаря */}
			{accessToken && (
				<form
					onSubmit={handleSubmit((data) => submitComment(data))}
					className="mb-4"
				>
					<textarea
						className={cn(
							'w-full p-4 rounded-lg border-2 bg-slate-500 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300',
							{ 'focus:ring-red-500 border-red-500': errors.comment }
						)}
						placeholder="Leave a comment..."
						{...register('comment')}
					/>
					<p className="h-10 text-red-500">{errors.comment?.message}</p>
					<Button
						disabled={!isValid}
						type="submit"
						className="text-white bg-slate-500 hover:bg-slate-600"
					>
						Submit
					</Button>
				</form>
			)}

			{/* Відображення коментарів */}
			{filteredComments?.length ? (
				<ul className="space-y-4">
					{filteredComments.map((comment: Comment) => (
						<CommentItem
							key={comment.id}
							articleId={articleId}
							id={comment.id} // Додаємо id коментаря
							author={comment.author} // Передаємо автора коментаря
							content={comment.content} // Передаємо контент коментаря
							createdAt={comment.createdAt} // Передаємо дату створення
							updatedAt={comment.updatedAt} // Передаємо дату оновлення
							replies={comment.replies} // Передаємо вкладені коментарі, якщо є
							handleUpdate={mutate} // Використовуємо mutate для оновлення після змін
						/>
					))}
				</ul>
			) : (
				<p className="mt-4 text-lg font-bold text-center text-gray-500">
					No comments yet
				</p>
			)}
		</div>
	);
};
