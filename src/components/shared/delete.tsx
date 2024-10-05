'use client';

import React from 'react';
import { Modal } from './modal';
import { Button } from '../ui/button';
import { Api } from '@/services/api/api-client';
import { useUser } from '@/contexts/UserContext';
import { useRouter } from 'next/navigation';
import { Trash } from 'lucide-react';
import { useSWRConfig } from 'swr';

type DeleteProps = {
	type: 'post' | 'comment';
	id: string;
	authorId: string;
	buttonVariant?: 'destructive' | 'ghost' | null | undefined;
};

export const Delete = ({
	type,
	id,
	authorId,
	buttonVariant = 'destructive',
}: DeleteProps) => {
	const { mutate } = useSWRConfig()

	const userId = useUser().user?.id;
	const router = useRouter();
	const onDelete = async () => {
		if (type === 'post') {
			try {
				await Api.deleteArticle(id);
				router.push('/articles');
			} catch (error) {
				console.log(error);
			}
		}
		if (type === 'comment') {
			await Api.deleteComment(id);
			mutate('comments');
		}
	};

	if (userId !== authorId) {
		return null;
	}
	return (
		<Modal
			title="Are you sure?"
			desctiption="This action cannot be undone."
			buttonText="Delete"
			buttonVariant={buttonVariant}
			icon={<Trash size={16}/>}
		>
			<div className="flex flex-col gap-3">
				<p>Are you sure you want to delete this?</p>
				<Button variant="destructive" onClick={onDelete}>
					Delete
				</Button>
			</div>
		</Modal>
	);
};
