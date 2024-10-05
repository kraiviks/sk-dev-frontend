'use client';

import { cn } from '@/lib/utils';
import { Container, ModeToggle, Logo } from '@/components/shared';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ProfileDropdown } from './profile-dropdown';

interface Props {
	className?: string;
}

const ROUTES = [
	{
		label: 'Home',
		path: '/',
	},
	{
		label: 'Articles',
		path: '/articles',
	},
];

const noHeaderRoutes = ['/login', '/register'];

export const Header: React.FC<Props> = ({ className }) => {
	const pathname = usePathname();

	if (noHeaderRoutes.includes(pathname)) {
		return null;
	}

	return (
		<header
			className={cn(
				'h-20 flex justify-center items-center shadow-sm shadow-gray-400 fixed top-0 left-0 right-0 z-50',
				className
			)}
		>
			<Container className="flex items-center justify-between flex-1">
				<div className="flex gap-3 items-center">
					<Logo />
				</div>
				<div className="flex gap-3 items-center">
					{ROUTES.map((route) => (
						<Link
							key={route.label}
							href={route.path}
							className={cn(
								'hover:text-brand transition-colors',
								pathname === route.path ? 'text-brand' : ''
							)}
						>
							{route.label}
						</Link>
					))}
				</div>
				<div className="flex gap-3 items-center">
					<ModeToggle />
					<ProfileDropdown />
				</div>
			</Container>
		</header>
	);
};
