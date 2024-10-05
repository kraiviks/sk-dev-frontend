'use client';

import { formatDate } from '@/lib/utils';
import { useAuthStore } from '@/stores/useAuthStore';
import { useUserStore } from '@/stores/useUserStore';
import { Loader2 } from 'lucide-react';
import { useEffect } from 'react';

const ProfilePage = () => {
	const { accessToken, logout } = useAuthStore();
	const userStore = useUserStore();

	useEffect(() => {
		if (accessToken) {
			userStore.getUserProfile();
		}
	}, [accessToken]);

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-secondary">
			<h1 className="text-6xl font-bold mb-4">Profile</h1>
			{/* Ensure user data is loaded */}
			{userStore.user ? (
				<div className="flex gap-4">
					<div className="bg-white dark:bg-gray-500 p-6 rounded-lg shadow-lg">
						<img
							src={userStore.user.avatar}
							alt="User Avatar"
							className="h-32 w-32 rounded-full mb-4 mx-auto shadow-xl"
						/>
						<p className="text-2xl font-bold mb-2">{userStore.user.username}</p>
						<p className="text-lg mb-4">{userStore.user.bio}</p>
						<div className="grid grid-cols-2 gap-4">
							<p className="font-bold">
								First Name:{' '}
								<span className="font-normal">{userStore.user.firstname}</span>
							</p>
							<p className="font-bold">
								Last Name:{' '}
								<span className="font-normal">{userStore.user.lastname}</span>
							</p>
							<p className="font-bold">
								Email:{' '}
								<span className="font-normal">{userStore.user.email}</span>
							</p>
							<p className="font-bold">
								Articles:{' '}
								<span className="font-normal">
									{userStore.user.articles.length}
								</span>
							</p>
							<p className="font-bold">
								Likes:{' '}
								<span className="font-normal">
									{userStore.user.likes.length}
								</span>
							</p>
							<p className="font-bold">
								Comments:{' '}
								<span className="font-normal">
									{userStore.user.comments.length}
								</span>
							</p>
							<p className="font-bold">
								Followers:{' '}
								<span className="font-normal">
									{userStore.user.followers.length}
								</span>
							</p>
							<p className="font-bold">
								Following:{' '}
								<span className="font-normal">
									{userStore.user.following.length}
								</span>
							</p>
							<p className="font-bold">
								Account Created:{' '}
								<span className="font-normal">
									{/* {formatDate(userStore.user.createdAt)} */}
								</span>
							</p>
							<p className="font-bold">
								Last Updated:{' '}
								<span className="font-normal">
									{new Date(userStore.user.updatedAt).toLocaleDateString()}
								</span>
							</p>
						</div>
						<button
							className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-6"
							onClick={logout}
						>
							Logout
						</button>
					</div>
				</div>
			) : (
				<p>
					<Loader2 className="animate-spin h-20 w-20" />
				</p>
			)}
		</div>
	);
};

export default ProfilePage;
