'use client';

import { Api } from '@/services/api/api-client';
import { useAuthStore } from '@/stores/useAuthStore';
import { Comment } from '@/types/comment';
import { useState } from 'react';
import useSWR from 'swr';
import CommentItem from './comment-item';
import { Button } from '@/components/ui/button';

const fetcher = async (articleId: string) => {
	const { data } = await Api.getCommentsByArticleId(articleId);
	return data;
};

export const Comments = ({ articleId }: { articleId: string }) => {
	const [comment, setComment] = useState('');
	const { accessToken } = useAuthStore();

	const { data, mutate } = useSWR('comments', () => fetcher(articleId));

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (accessToken) {
			try {
				await Api.createComment(articleId, { content: comment });
				mutate();
				setComment('');
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<div className="mt-8">
			<h2 className="text-3xl font-bold mb-4">Comments</h2>
			<form onSubmit={handleSubmit}>
				<textarea
					className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
					value={comment}
					onChange={(e) => setComment(e.target.value)}
					placeholder="Leave a comment..."
				/>
				<Button type="submit">Submit</Button>
			</form>
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
		</div>
	);
};
