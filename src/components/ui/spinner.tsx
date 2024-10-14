'use client';

export const Spinner = () => {
	return (
		<div className="flex justify-center items-center">
			<div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
				<div className="w-16 h-16 border-4 border-transparent text-yellow-400 text-2xl animate-spin flex items-center justify-center border-t-yellow-400 rounded-full" />
			</div>
		</div>
	);
};
