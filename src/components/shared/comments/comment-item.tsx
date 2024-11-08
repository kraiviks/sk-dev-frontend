/* eslint-disable @next/next/no-img-element */
import { FC, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';
import { Comment as CommentType } from '@/types/comment';
import { Api } from '@/services/api/api-client';
import { useClickAway } from 'react-use';
import { useUser } from '@/contexts/UserContext';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { cn, formatDate } from '@/lib/utils';
import { Delete } from '../delete';

interface CommentItemProps extends CommentType {
	handleUpdate: () => void;
}

const validationSchema = Yup.object({
	comment: Yup.string()
		.required('Enter comment')
		.min(2, 'Comment must be at least 2 characters')
		.max(1000, 'Comment must be less than 1000 characters'),
});

const CommentItem: FC<CommentItemProps> = ({
	id,
	articleId,
	author,
	content,
	createdAt,
	updatedAt,
	replies = [], // Replies for nested comments
	handleUpdate,
}) => {
	const user = useUser().user;

	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const [editing, setEditing] = useState(false);
	const [comment, setComment] = useState(content);
	const [showReplyForm, setShowReplyForm] = useState(false); // Logic for reply form

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<{ comment: string }>({
		mode: 'onChange',
		resolver: yupResolver(validationSchema),
	});

	const editComment = async (id: string, content: string) => {
		try {
			await Api.editComment(id, { content });
			handleUpdate();
		} catch (error) {
			console.log(error);
		}
	};

	const submitReply: SubmitHandler<{ comment: string }> = async (data) => {
		try {
			await Api.createComment(articleId, {
				content: data.comment,
				parentId: id,
			}); // Adding parentId
			handleUpdate();
			reset();
			setShowReplyForm(false);
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
		<li className="p-4 shadow-sm shadow-white">
			<div className="flex items-start gap-4">
				<img
					src={author.avatar}
					alt="Commenter Avatar"
					className="w-12 h-12 p-1 bg-gray-100 rounded-full"
				/>
				<div className="flex flex-col flex-1 w-[85%]">
					<p className="text-lg font-bold">{author.username}</p>
					<p className="text-gray-500 break-words">
						{editing ? (
							<textarea
								ref={textareaRef}
								value={comment}
								onChange={(e) => setComment(e.target.value)}
								className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
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
						{!editing ? (
							<Button variant={null} size={'icon'} onClick={editActive}>
								<Edit size={16} />
							</Button>
						) : (
							<span className="ml-auto text-sm text-gray-500">editing...</span>
						)}
					</>
				)}
				<Delete type="comment" id={id} authorId={author.id} />
			</div>
			{user?.id && author.id !== user.id && (
				<>
					{/* Reply button */}
					<div
						onClick={() => setShowReplyForm(!showReplyForm)}
						className="mt-2 text-xs text-white cursor-pointer hover:text-gray-300"
					>
						Reply
					</div>

					{/* Reply form */}
					{showReplyForm && (
						<form onSubmit={handleSubmit(submitReply)} className="mt-4">
							<textarea
								className={cn(
									'w-full p-4 rounded-lg border-2 bg-slate-500 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300',
									{ 'focus:ring-red-500 border-red-500': errors.comment }
								)}
								placeholder="Write a reply..."
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
				</>
			)}
			{/* Nested comments */}
			{replies.length > 0 && (
				<ul className="mt-4 ml-8 space-y-4">
					{replies.map((reply: CommentType) => (
						<CommentItem
							key={reply.id}
							{...reply} // Spread the reply props
							id={reply.id}
							articleId={articleId}
							handleUpdate={handleUpdate}
						/>
					))}
				</ul>
			)}
		</li>
	);
};

export default CommentItem;
