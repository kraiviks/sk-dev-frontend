import { Api } from '@/services/api/api-client';
import { UserData } from '@/types';
import { create } from 'zustand';

interface UserState {
	user: UserData;
	getUserProfile: () => void;
}

export const useUserStore = create<UserState>()((set) => ({
	user: {
		id: '',
		username: '',
		email: '',
		firstname: '',
		lastname: '',
		bio: '',
		avatar: '',

		articles: [],
		likes: [],
		comments: [],
		followers: [],
		following: [],
		createdAt: '',
		updatedAt: '',
	},
	getUserProfile: async () => {
		const user = (await Api.getUserProfile()).data;
		set({ user });
	},
}));
