import { formatDate } from '@/lib/utils';
import { Api } from '@/services/api/api-client';
import { Loader2 } from 'lucide-react';

const ProfilePage = async ({ params: { id } }: { params: { id: string } }) => {
	const { data } = await Api.getUserById(id);
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-secondary">
			<h1 className="text-6xl font-bold mb-4">Profile</h1>
			{/* Ensure user data is loaded */}
			{data ? (
				<div className="flex gap-4">
					<div className="bg-white dark:bg-gray-500 p-6 rounded-lg shadow-lg">
						<img
							src={data.avatar}
							alt="User Avatar"
							className="h-32 w-32 rounded-full mb-4 mx-auto shadow-xl"
						/>
						<p className="text-2xl font-bold mb-2">{data.username}</p>
						<p className="text-lg mb-4">{data.bio}</p>
						<div className="grid grid-cols-2 gap-4">
							<p className="font-bold">
								First Name:{' '}
								<span className="font-normal">{data.firstname}</span>
							</p>
							<p className="font-bold">
								Last Name: <span className="font-normal">{data.lastname}</span>
							</p>
							<p className="font-bold">
								Email: <span className="font-normal">{data.email}</span>
							</p>
							<p className="font-bold">
								Articles: <span className="font-normal">{data.articles.length}</span>
							</p>
							<p className="font-bold">
								Likes: <span className="font-normal">{data.likes.length}</span>
							</p>
							<p className="font-bold">
								Comments:{' '}
								<span className="font-normal">{data.comments.length}</span>
							</p>
							<p className="font-bold">
								Followers:{' '}
								<span className="font-normal">{data.followers.length}</span>
							</p>
							<p className="font-bold">
								Following:{' '}
								<span className="font-normal">{data.following.length}</span>
							</p>
							<p className="font-bold">
								Account Created:{' '}
								<span className="font-normal">
									{formatDate(data.createdAt)}
								</span>
							</p>
							<p className="font-bold">
								Last Updated:{' '}
								<span className="font-normal">
									{new Date(data.updatedAt).toLocaleDateString()}
								</span>
							</p>
						</div>
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
