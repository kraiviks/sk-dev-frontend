/* eslint-disable @next/next/no-img-element */
'use client';

import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { Delete } from '../delete';
import { formatDate } from '@/lib/utils';
import { Comment } from '@/types/comment';
import { Api } from '@/services/api/api-client';
import { useClickAway } from 'react-use';
import { useUser } from '@/contexts/UserContext';

const CommentItem = ({
	id,
	author,
	content,
	createdAt,
	updatedAt,
	handleUpdate,
}: Comment & { handleUpdate: () => void }) => {
	const user = useUser().user;
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const [editing, setEditing] = useState(false);
	const [comment, setComment] = useState(content);

	const editComment = async (id: string, content: string) => {
		try {
			await Api.editComment(id, { content });
			handleUpdate();
		} catch (error) {
			console.log(error);
		}
	};

	useClickAway(textareaRef, () => {
		setEditing(false);
		editComment(id, comment);
	});

	const editActive = () => {
		setEditing(true);
		textareaRef.current?.focus();
	};
	return (
		<li className="border-b border-gray-300 py-4">
			<div className="flex items-start gap-4">
				<img
					src={author.avatar}
					alt="Commenter Avatar"
					className="h-12 w-12 rounded-full bg-gray-100 p-1"
				/>
				<div className="flex flex-col flex-1 w-[85%]">
					<p className="font-bold text-lg">{author.username}</p>
					<p className="text-gray-500 break-words">
						{editing ? (
							<textarea
								ref={textareaRef}
								value={comment}
								onChange={(e) => setComment(e.target.value)}
								className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
							/>
						) : (
							content
						)}
					</p>
					<p className="text-xs text-gray-500">
						{createdAt === updatedAt ? (
							formatDate(createdAt)
						) : (
							<span>
								{formatDate(updatedAt)}{' '}
								<span className="text-gray-400">(Edited)</span>
							</span>
						)}
					</p>
				</div>

				{author.id === user?.id && (
					<>
						{' '}
						{!editing ? (
							<Button variant={null} size={'icon'} onClick={editActive}>
								<Edit size={16} />
							</Button>
						) : (
							<span className="text-sm text-gray-500 ml-auto">editing...</span>
						)}
					</>
				)}
				<Delete type="comment" id={id} authorId={author.id} />
			</div>
		</li>
	);
};

export default CommentItem;
