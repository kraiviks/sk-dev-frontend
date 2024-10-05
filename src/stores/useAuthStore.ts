import { setCookie, deleteCookie } from 'cookies-next';
import { create } from 'zustand';
interface AuthState {
	accessToken: string | null;
	logout: () => void;
	login: (accessToken: string) => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
	username: null,
	accessToken: null,
	logout: () => {
		set({ accessToken: null });
		deleteCookie('accessToken');
	},
	login: (accessToken: string) => {
		set({ accessToken });
		setCookie('accessToken', accessToken, {
			maxAge: 60 * 60 * 24 * 365,
			path: '/',
		});
	},
}));
