import * as motion from 'framer-motion/client';
import { MailIcon } from 'lucide-react';
import Link from 'next/link';

export const MainButton = () => {
	return (
		<motion.div
			className="text-3xl cursor-pointer text-brand w-max"
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, delay: 2 }}
		>
			<Link
				className="flex items-center gap-3"
				href="mailto:kostiv.serhii@gmail.com"
			>
				<motion.span
					animate={{
						opacity: [0, 1],
						x: [-100, 0],
					}}
					transition={{
						type: 'spring',
						stiffness: 100,
						damping: 10,
						duration: 0.5,
						delay: 2,
					}}
				>
					Let&apos;s
				</motion.span>
				<motion.span
					animate={{
						opacity: [0, 1],
						x: [100, 0],
					}}
					transition={{
						type: 'spring',
						stiffness: 100,
						damping: 10,
						duration: 0.5,
						delay: 2,
					}}
				>
					Talk
				</motion.span>
				<motion.div
					className="p-2 transition rounded-full hover:bg-slate-400 hover:bg-opacity-50"
					animate={{ opacity: [0, 1], y: [100, 0] }}
					transition={{
						duration: 0.5,
						delay: 2,
					}}
				>
					<MailIcon size={23} className="text-brand" />
				</motion.div>
			</Link>
		</motion.div>
	);
};
