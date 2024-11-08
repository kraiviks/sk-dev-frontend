'use client';

import { cn } from '@/lib/utils';
import {
	Container,
	ModeToggle,
	Logo,
	Sidebar,
	BetaLabel,
} from '@/components/shared';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ProfileDropdown } from './profile-dropdown';
interface Props {
	className?: string;
}

const ROUTES = [
	{
		label: 'Home',
		path: '/',
		beta: false,
	},
	{
		label: 'Articles',
		path: '/articles',
		beta: true,
	},
];

const noHeaderRoutes = ['/login', '/register'];

export const Header: React.FC<Props> = ({ className }) => {
	const pathname = usePathname();

	if (noHeaderRoutes.includes(pathname)) {
		return null;
	}

	return (
		<motion.header
			className={cn(
				'h-20 flex justify-center items-center backdrop-blur border-b border-gray-400 fixed top-0 left-0 right-0 z-50',
				className
			)}
			initial={{ opacity: 0, y: -100 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -100 }}
			transition={{ duration: 0.5 }}
		>
			<Container className="flex items-center justify-between flex-1">
				<div className="flex items-center gap-3">
					<Logo />
				</div>

				<div className="items-center justify-center flex-1 hidden gap-3 sm:flex">
					{ROUTES.map((route) => (
						<Link
							key={route.label}
							href={route.path}
							className={cn(
								'relative hover:text-brand transition-colors',
								pathname === route.path ? 'text-brand' : ''
							)}
						>
							{route.beta ? <BetaLabel>{route.label}</BetaLabel> : route.label}
						</Link>
					))}
				</div>

				<div className="flex items-center justify-center gap-3">
					<div className="hidden gap-3 justify-center items-center sm:flex mr-10">
						<ModeToggle />
						<ProfileDropdown />
					</div>
					<Sidebar routes={ROUTES} />
				</div>
			</Container>
		</motion.header>
	);
};
