import React from 'react';

export const BetaLabel = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="relative inline-block">
			{children}
			<span className="absolute -top-2 ml-1.5 px-1 rounded-2xl text-[10px] font-bold text-black uppercase bg-yellow-500">
				beta
			</span>
		</div>
	);
};
