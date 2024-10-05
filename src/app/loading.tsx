'use client';

import { Spinner } from '@/components/ui/spinner';

export default function Page() {
	return (
		<div className="fixed inset-0 flex items-center justify-center">
			<Spinner />
		</div>
	);
}
