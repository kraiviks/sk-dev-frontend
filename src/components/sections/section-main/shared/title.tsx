import { cn } from '@/lib/utils';
import * as motion from 'framer-motion/client';

export const Title = ({
	text,
	className,
}: {
	text: string;
	className?: string;
}): React.ReactElement => {
	return (
		<motion.h1
			className={cn(
				'flex justify-center text-5xl font-bold text-center item lg:text-7xl xl:text-7xl text-brandForeground',
				className
			)}
			initial={{ opacity: 0, y: -100, scale: 0.8 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			transition={{
				type: 'spring',
				stiffness: 100,
				damping: 10,
				duration: 0.6,
			}}
		>
			<motion.div
				initial={{ opacity: 0, x: -100 }}
				whileInView={{ opacity: 1, x: 30, y: -30 }}
				transition={{
					type: 'spring',
					stiffness: 100,
					damping: 10,
					duration: 0.6,
					delay: 0.5,
				}}
			>
				<motion.div
					className="text-3xl text-brand"
					initial={{ rotate: 10 }}
					whileInView={{ rotate: -10 }}
					transition={{
						duration: 1,
						repeat: Infinity,
						repeatType: 'reverse',
					}}
				>
					{'<Title>'}
				</motion.div>
			</motion.div>
			{text}
			<motion.div
				className="self-end"
				initial={{ opacity: 0, x: 100 }}
				whileInView={{ opacity: 1, x: -30, y: 30 }}
				transition={{
					type: 'spring',
					stiffness: 100,
					damping: 10,
					duration: 0.6,
					delay: 0.5,
				}}
			>
				<motion.div
					className="text-3xl text-brand"
					initial={{ rotate: -10 }}
					whileInView={{ rotate: 10 }}
					transition={{
						duration: 1,
						repeat: Infinity,
						repeatType: 'reverse',
					}}
				>
					{'</Title>'}
				</motion.div>
			</motion.div>
		</motion.h1>
	);
};
