'use client';

import { Spinner } from '../ui/spinner';

export const LoadingUi = () => {
	return (
		<div className="fixed inset-0 flex items-center justify-center">
			<Spinner />
		</div>
	);
};
