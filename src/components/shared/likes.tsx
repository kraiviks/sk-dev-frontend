'use client';
import { useEffect, useState } from 'react';
import { Api } from '@/services/api/api-client';
import { useUser } from '@/contexts/UserContext';
import { Heart, HeartPulse } from 'lucide-react';
import useSWR from 'swr';

type Like = {
	commentId: string;
	createdAt: string;
	id: string;
	articleId: string;
	userId: string;
};

interface LikeProps {
	id: string;
}

const fetcher = async (id: string) => {
	const { data } = await Api.getArticleLikes(id);
	return data;
};

export const Likes = ({ id }: LikeProps) => {
	const { data, mutate } = useSWR(`likes-${id}`, () => fetcher(id));
	const user = useUser();
	const liked = data?.some((like: Like) => like.userId === user?.user?.id);
	const [isLiked, setIsLiked] = useState(liked);
	const [likesCount, setLikesCount] = useState(data?.length);

	const toggleLikeArticle = async () => {
		if (user?.user?.id) {
			await Api.likeArticle(id);
			mutate();
		} else {
			alert('You must be logged in to like an article');
		}
	};

	useEffect(() => {
		setIsLiked(liked);
		setLikesCount(data?.length);
	}, [data?.length, liked]);

	if (!data) {
		return null;
	}

	return (
		<div className="flex gap-3 items-center text-gray-500">
			{isLiked ? (
				<HeartPulse
					size={21}
					className="cursor-pointer text-red-500 hover:scale-110 transition-all"
					onClick={toggleLikeArticle}
				/>
			) : (
				<Heart
					size={21}
					className="cursor-pointer hover:scale-x-110 transition-all"
					onClick={toggleLikeArticle}
				/>
			)}
			{likesCount}
		</div>
	);
};
