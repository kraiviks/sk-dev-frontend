'use client';

import { useUser } from '@/contexts/UserContext';
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
		<Link
			href={`/articles/edit/${slug}`}
			className="text-blue-500 hover:underline"
		>
			Edit
		</Link>
	);
};
