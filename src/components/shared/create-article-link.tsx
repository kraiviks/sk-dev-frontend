'use client';

import { useUser } from '@/contexts/UserContext';
import Link from 'next/link';
import { Button } from '../ui/button';

export const CreateArticleLink = () => {
	const user = useUser().user?.id;

	if (!user) {
		return null;
	}
	return (
		<Link href="/articles/create">
			<Button variant="link">Create</Button>
		</Link>
	);
};
