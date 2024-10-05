'use client';
import { UserProvider } from '@/contexts/UserContext';
import { ThemeProvider } from './theme-providers';

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="dark"
			enableSystem
			disableTransitionOnChange
		>
			<UserProvider>{children}</UserProvider>
		</ThemeProvider>
	);
}
