'use client';

import { useUser } from '@/contexts/UserContext';
import { FileEditIcon } from 'lucide-react';
import Link from 'next/link';

export const EditArticleLink = ({
	slug,
	authorId,
}: {
	slug: string;
	authorId: string;
}) => {
	const userId = useUser().user?.id;

	if (userId !== authorId) {
		return null;
	}
	return (
		<Link href={`/articles/edit/${slug}`}>
			<FileEditIcon
				className="hover:text-brand transition-colors cursor-pointer"
				size={16}
			/>
		</Link>
	);
};
