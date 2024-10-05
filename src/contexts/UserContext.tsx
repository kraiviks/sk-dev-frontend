'use client';
import { useAuthStore } from '@/stores/useAuthStore';
import { useUserStore } from '@/stores/useUserStore';
import { UserData } from '@/types';
import { createContext, useContext, useEffect } from 'react';
export type UserContextType = {
	user: UserData | null;
};

const UserContext = createContext<UserContextType>({} as UserContextType);

export function UserProvider({ children }: React.PropsWithChildren<{}>) {
	const accessToken = useAuthStore((state) => state.accessToken);
	const userStore = useUserStore();

	useEffect(() => {
		if (accessToken) {
			userStore.getUserProfile();
		}
	}, [accessToken]);

	return (
		<UserContext.Provider value={{ user: userStore.user }}>
			{children}
		</UserContext.Provider>
	);
}

export function useUser() {
	return useContext(UserContext);
}
