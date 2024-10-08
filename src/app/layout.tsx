import type { Metadata } from 'next';
import './globals.css';

import { fonts } from './fonts';
import { Header } from '@/components/shared';
import Providers from './providers';

export const metadata: Metadata = {
	title: 'SK-Dev',
	description: 'SK-Dev - Personal Site',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={fonts.nunito.className}>
				<Providers>
					<Header className='w-screen'/>
					{children}
				</Providers>
			</body>
		</html>
	);
}
