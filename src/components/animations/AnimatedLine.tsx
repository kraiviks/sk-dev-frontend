import * as motion from 'framer-motion/client';

export const AnimatedLine = () => {
	return (
		<motion.div
			className="h-[2px] w-full bg-brand absolute bottom-0"
			initial={{scaleX: 0 }}
			whileInView={{ scaleX: 1 }}
			transition={{
				type: 'spring',
				stiffness: 300,
				damping: 100,
				duration: 1.5,
			}}
		>
			<span className="w-3 h-3 rounded-full bg-brand absolute -top-[5px] left-0"></span>
			<span className="w-3 h-3 rounded-full bg-brand absolute -top-[5px] right-0"></span>
		</motion.div>
	);
};
