import * as motion from 'framer-motion/client';
import { getRandom } from '@/lib/utils';

export const AnimatedSpan = ({ children }: { children: React.ReactNode }) => {
	const randomX = getRandom(-50, 50);
	const randomY = getRandom(-50, 50);
	const randomDelay = getRandom(0.1, 1);
	const randomRotate = getRandom(-15, 15);

	return (
		<motion.span
			className="text-brand inline-block"
			initial={{
				opacity: 0,
				x: randomX,
				y: randomY,
				rotate: randomRotate,
				scale: 0.9,
			}}
			whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
			transition={{
				type: 'spring',
				stiffness: 100,
				damping: 10,
				duration: 0.6,
				delay: randomDelay,
			}}
		>
			{children}
		</motion.span>
	);
};