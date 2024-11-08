'use client';
import { useEffect } from 'react';
import { User, UserMinus2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuthStore } from '@/stores/useAuthStore';
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';
import { useUserStore } from '@/stores/useUserStore';
import { BetaLabel } from './beta-label';

export function ProfileDropdown() {
	const router = useRouter();
	const authStore = useAuthStore();
	const { user } = useUserStore();

	const login = () => {
		router.push('/login');
	};

	const logout = () => {
		authStore.logout();
	};

	const register = () => {
		router.push('/register');
	};

	const goToProfile = () => {
		router.push('/profile');
	};

	useEffect(() => {
		const accessToken = getCookie('accessToken');
		if (accessToken) {
			authStore.login(accessToken);
		}
	}, [authStore.accessToken]);
	return (
		<BetaLabel>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant={null} size="icon" className='focus:outline-none focus-visible:ring-0'>
						{authStore.accessToken ? (
							<div className="flex items-center gap-2 text-sm font-medium text-black dark:text-white">
								<User className="text-black dark:text-white" />
								<div className="truncate max-w-[100px]" title={user.username}>
									{user.username}
								</div>
							</div>
						) : (
							<UserMinus2 className="text-black dark:text-white" />
						)}
						<span className="sr-only">Profile dropdown</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					{authStore.accessToken ? (
						<>
							<DropdownMenuItem onClick={goToProfile}>Profile</DropdownMenuItem>
							<DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
						</>
					) : (
						<>
							<DropdownMenuItem onClick={login}>Login</DropdownMenuItem>
							<DropdownMenuItem onClick={register}>Register</DropdownMenuItem>
						</>
					)}
				</DropdownMenuContent>
			</DropdownMenu>
		</BetaLabel>
	);
}
