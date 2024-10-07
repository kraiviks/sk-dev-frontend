import * as motion from 'framer-motion/client';
import { cn } from '@/lib/utils';

type Props = {
	text: string;
	className?: string;
};

export const Description = ({ text, className }: Props): JSX.Element => {
	return (
		<motion.p
			className={cn('text-lg text-gray-400 text-center px-4', className)}
			whileInView={{ opacity: [0, 1], y: [100, 0], scale: [0.5, 1] }}
			viewport={{ once: true }}
			transition={{
				duration: 1,
			}}
		>
			{text}
		</motion.p>
	);
};
