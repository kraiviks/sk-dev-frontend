'use client';
import { motion } from 'framer-motion';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface Props {
	className?: string;
}

export const Logo: React.FC<Props> = ({ className }) => {
	const { resolvedTheme } = useTheme();
	const [color, setColor] = useState('black');

	useEffect(() => {
		if (resolvedTheme) {
			setColor(resolvedTheme === 'dark' ? 'white' : 'black');
		}
	}, [resolvedTheme]);

	return (
		<Link href="/">
			<div className="flex items-center text-3xl font-moto">
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{
						type: 'spring',
						stiffness: 100,
						damping: 10,
						duration: 0.6,
						delay: 0.5,
					}}
				>
					{'<'}
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: -50, y: -50 }}
					whileInView={{ opacity: 1, x: 0, y: 0 }}
					transition={{
						type: 'spring',
						stiffness: 100,
						damping: 10,
						duration: 0.6,
					}}
				>
					SK
				</motion.div>
				<motion.div
					className="text-brand text-xl"
					initial={{ opacity: 0, x: 50, y: -50 }}
					whileInView={{ opacity: 1, x: 0, y: 0 }}
					transition={{
						type: 'spring',
						stiffness: 100,
						damping: 10,
						duration: 0.6,
					}}
				>
					.DEV
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{
						type: 'spring',
						stiffness: 100,
						damping: 10,
						duration: 0.6,
						delay: 0.5,
					}}
				>
					{'/>'}
				</motion.div>
			</div>
		</Link>
	);
};
