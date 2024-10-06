import * as motion from 'framer-motion/client';
import Link from 'next/link';

export const Logo: React.FC = () => {
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
