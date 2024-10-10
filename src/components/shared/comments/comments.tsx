'use client';

import { Api } from '@/services/api/api-client';
import { useAuthStore } from '@/stores/useAuthStore';
import { Comment } from '@/types/comment';
import { FC, useState } from 'react';
import useSWR from 'swr';
import CommentItem from './comment-item';
import { Button } from '@/components/ui/button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { cn } from '@/lib/utils';

const fetcher = async (articleId: string) => {
	const { data } = await Api.getCommentsByArticleId(articleId);
	return data;
};

interface CommentFormValue {
	comment: string;
}

const validationSchema = Yup.object({
	comment: Yup.string()
		.required('Enter comment')
		.min(2, 'Comment must be at least 2 characters')
		.max(1000, 'Comment must be less than 1000 characters'),
});

export const Comments: FC<{ articleId: string }> = ({ articleId }) => {
	const { accessToken } = useAuthStore();

	const { data, mutate } = useSWR('comments', () => fetcher(articleId));

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<CommentFormValue>({
		mode: 'onChange',
		resolver: yupResolver(validationSchema),
	});

	const submit: SubmitHandler<CommentFormValue> = async (data) => {
		if (accessToken) {
			try {
				await Api.createComment(articleId, { content: data.comment });
				mutate();
				reset();
			} catch (error) {
				console.log(error);
			}
		}
	};
	return (
		<div className="mt-8">
			<h2 className="text-3xl font-bold mb-4">Comments</h2>
			{accessToken && (
				<form onSubmit={handleSubmit(submit)} className='mb-4'>
					<textarea
						className={cn(
							'w-full p-4 rounded-lg border-2 bg-slate-500 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300',
							{ 'focus:ring-red-500 border-red-500': errors.comment }
						)}
						placeholder="Leave a comment..."
						{...register('comment')}
					/>
					<p className="text-red-500 h-10">{errors.comment?.message}</p>
					<Button
						disabled={!isValid}
						type="submit"
						className="bg-slate-500 text-white hover:bg-slate-600"
					>
						Submit
					</Button>
				</form>
			)}
			{data?.length ? (
				<ul className="space-y-4">
					{data?.map((comment: Comment) => (
						<CommentItem
							key={comment.id}
							id={comment.id}
							author={comment.author}
							content={comment.content}
							createdAt={comment.createdAt}
							updatedAt={comment.updatedAt}
							handleUpdate={() => mutate()}
						/>
					))}
				</ul>
			) : (
				<p className="text-center text-gray-500 mt-4 text-lg font-bold">
					No comments yet
				</p>
			)}
		</div>
	);
};
