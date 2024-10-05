'use client';

export const Spinner = () => {
	return (
		<div className="flex justify-center items-center">
			<div className="w-16 h-16 border-4 border-t-transparent border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin"></div>
		</div>
	);
};
