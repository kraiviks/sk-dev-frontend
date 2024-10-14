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
			<head>
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
			<link rel="manifest" href="/site.webmanifest"/>
			</head>
			<body className={fonts.nunito.className}>
				<Providers>
					<Header className='w-screen'/>
					{children}
				</Providers>
			</body>
		</html>
	);
}
