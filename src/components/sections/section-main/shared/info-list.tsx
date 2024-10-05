import { cn } from '@/lib/utils';
import * as motion from 'framer-motion/client';

export const InfoList = ({ className }: { className?: string }) => {
	const transition = {
		type: 'spring',
		stiffness: 60,
		damping: 5,
		duration: 1,
		delay: 1.5,
	};
	return (
		<motion.ul
			className={cn(
				'flex flex-col gap-12 bg-brandBg py-12 px-8 max-w-[275px]',
				className
			)}
			initial={{ opacity: 0, borderRadius: -200, y: 300 }}
			animate={{ opacity: 1, borderRadius: 30, y: 0 }}
			transition={transition}
		>
			<motion.li
				className="flex"
				initial={{ opacity: 0, y: -100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={transition}
			>
				<span className="text-brand text-5xl min-w-[80px]">3</span>
				Programming Language
			</motion.li>
			<motion.li
				className="flex"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={transition}
			>
				<span className="text-brand text-5xl min-w-[80px]">3+</span>
				Years of Expirience
			</motion.li>
		</motion.ul>
	);
};
