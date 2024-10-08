'use client';

import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { Logo } from './logo';
import { motion } from 'framer-motion';
import { ModeToggle } from './mode-toggle';
import { ProfileDropdown } from './profile-dropdown';

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
				className="fixed top-0 left-0 h-screen bg-brandBg min-w-[250px] p-10 z-50"
			>
				<nav className="flex flex-col items-start justify-start w-full h-full z-60">
					{/* Header */}
					<div onClick={() => setToggled(false)}>
						<Logo />
					</div>
					<div className="flex flex-col justify-between w-full h-[90%]">
						{/* Routes */}
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

						{/* Actions */}
						<div className='flex items-center justify-between w-full'>
							<ModeToggle />
							<ProfileDropdown/>
						</div>
					</div>
				</nav>
			</motion.aside>

			{/* Overlay */}
			{toggled && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={toggled ? { opacity: 1 } : { opacity: 0 }}
					transition={{ duration: 0.5 }}
					className="fixed top-0 left-0 z-40 w-full h-screen bg-black bg-opacity-50"
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
				className="block px-5 py-3 text-white transition-colors duration-200 ease-in-out rounded-md hover:bg-secondary hover:text-brand"
				onClick={handleClick}
			>
				{children}
			</Link>
		</li>
	);
}
