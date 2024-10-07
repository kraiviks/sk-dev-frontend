'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useSwiper } from 'swiper/react';

const Scroll = ({ className }: { className?: string }): JSX.Element => {
	const swiper = useSwiper();

	return (
		<motion.div
			className={cn(
				'relative w-[30px] h-[50px] border-[3px] border-brand rounded-[50px] box-border mb-4 cursor-pointer hidden min-h-720:lg:block',
				className
			)}
			whileInView={{ opacity: [0, 1], scale: [0.3, 1], y: [-100, 0] }}
			viewport={{ once: true }}
			transition={{
				duration: 1,
				delay: 2,
			}}
			onClick={() => swiper.slideNext()}
		>
			<div className="absolute bottom-[30px] left-1/2 w-[6px] h-[6px] -ml-[3px] bg-brand rounded-full shadow-[0_-5px_3px_1px_#13f6d447] animate-scroll" />
			<div className="chevrons flex flex-col items-center mt-12 pt-[6px]">
				<div className="chevrondown mt-[-6px] w-[10px] h-[10px] border-r-[3px] border-b-[3px] border-brand rotate-45 animate-pulse-odd" />
				<div className="chevrondown mt-[-6px] w-[10px] h-[10px] border-r-[3px] border-b-[3px] border-brand rotate-45 animate-pulse-even" />
			</div>
		</motion.div>
	);
};

export default Scroll;
