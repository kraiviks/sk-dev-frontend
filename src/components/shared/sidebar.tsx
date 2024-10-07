'use client';

import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { Logo } from './logo';
import { motion } from 'framer-motion';

export const Sidebar = ({ routes }: { routes: any[] }) => {
	const [toggled, setToggled] = useState(false);

	return (
		<div className="flex sm:hidden">
			{/* Sidebar Toggle Button */}
			<motion.button
				initial={{ scale: 1 }}
				animate={toggled ? { scale: 1.2 } : { scale: 1 }}
				transition={{ duration: 0.2 }}
				className="sb-button"
				onClick={() => setToggled(!toggled)}
			>
				{toggled ? (
					<motion.span
						initial={{ rotate: 0 }}
						animate={{ rotate: 90 }}
						transition={{ duration: 0.2 }}
					>
						<FiX size={32} />
					</motion.span>
				) : (
					<motion.span
						initial={{ rotate: 90 }}
						animate={{ rotate: 0 }}
						transition={{ duration: 0.2 }}
					>
						<FiMenu size={32} />
					</motion.span>
				)}
			</motion.button>

			{/* Sidebar */}
			<motion.aside
				initial={{ x: '-100%' }}
				animate={toggled ? { x: 0 } : { x: '-100%' }}
				transition={{ duration: 0.5 }}
				className="fixed top-0 left-0 h-screen bg-primary-foreground min-w-[250px] p-10 z-50"
			>
				<nav className="flex flex-col items-start justify-start h-full w-full z-60">
					<Logo />
					<ul className="w-full">
						{routes.map((route) => (
							<SidebarItem
								key={route.label}
								href={route.path}
								handleClick={() => setToggled(false)}
							>
								{route.label}
							</SidebarItem>
						))}
					</ul>
				</nav>
			</motion.aside>

			{/* Overlay */}
			{toggled && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={toggled ? { opacity: 1 } : { opacity: 0 }}
					transition={{ duration: 0.5 }}
					className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-40"
					onClick={() => setToggled(false)}
				/>
			)}
		</div>
	);
};

{
	/** Sidebar Item Component */
}
function SidebarItem({
	href,
	children,
	handleClick,
}: {
	href: string;
	children: React.ReactNode;
	handleClick?: () => void;
}) {
	return (
		<li className="my-4">
			<Link
				href={href}
				className="block py-3 px-5 rounded-md text-white hover:bg-secondary hover:text-brand transition-colors duration-200 ease-in-out"
				onClick={handleClick}
			>
				{children}
			</Link>
		</li>
	);
}
