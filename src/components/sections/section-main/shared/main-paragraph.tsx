import * as motion from 'framer-motion/client';
import { IBM_Plex_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';
import { AnimatedSpan } from '@/components/shared';

const ibm_plex_mono = IBM_Plex_Mono({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400'],
});

export const MainParagraph = () => {
	return (
		<motion.div
			className="flex flex-col"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1, delay: 1.3 }}
		>
			<motion.span
				className="text-brand"
				initial={{ opacity: 0, y: -20, x: -20 }}
				whileInView={{ opacity: 1, y: 0, x: 0 }}
				transition={{
					type: 'spring',
					stiffness: 100,
					damping: 10,
					duration: 0.5,
					delay: 1.3,
				}}
			>
				{'<p>'}
			</motion.span>
			<motion.p
				className={cn('ml-5 text-sm', ibm_plex_mono.className)}
				animate={{ opacity: [0, 1], scale: [0, 1], rotate: [180, 360] }}
				transition={{ type: 'spring', duration: 1.5, delay: 1.3 }}
			>
				I specialize in creating user-friendly interfaces using <br />
				<AnimatedSpan>JavaScript</AnimatedSpan>,
				<AnimatedSpan>TypeScript</AnimatedSpan>,
				<AnimatedSpan>React</AnimatedSpan>,
				<AnimatedSpan>Vue</AnimatedSpan>,
				<AnimatedSpan>HTML5</AnimatedSpan>,
				<AnimatedSpan>CSS3</AnimatedSpan> and more technologies.
			</motion.p>
			<motion.span
				className="text-brand"
				initial={{ opacity: 0, y: 20, x: 20 }}
				whileInView={{ opacity: 1, y: 0, x: 0 }}
				transition={{
					type: 'spring',
					stiffness: 100,
					damping: 10,
					duration: 2,
					delay: 1.3,
				}}
			>
				{'</p>'}
			</motion.span>
		</motion.div>
	);
};
