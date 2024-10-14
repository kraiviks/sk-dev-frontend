'use client';
import { SOCIAL_NETWORKS } from '@/data';
import { calculatePosition } from '@/lib/utils';
import { motion, useAnimation } from 'framer-motion';
import { MailIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useClickAway } from 'react-use';

export const LetsTalk = () => {
	const [show, setShow] = useState<boolean>(false);
	const controls = useAnimation();
	const ref = useRef(null);

	useClickAway(ref, () => {
		setShow(false);
	});

	useEffect(() => {
		if (show) {
			controls.start({
				opacity: 1,
				visibility: 'visible',
				transition: { duration: 0.5 },
			});
		} else {
			controls.start({
				opacity: 0,
				visibility: 'hidden',
				transition: { duration: 0.5 },
			});
		}
	}, [show, controls]);

	return (
		<motion.div
			className="relative text-3xl cursor-pointer text-brand w-max"
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, delay: 2 }}
			onClick={() => setShow(!show)}
		>
			<div className="flex items-center gap-3 select-none">
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
					animate={{ opacity: [0, 1], y: [100, 0] }}
					transition={{
						duration: 0.5,
						delay: 2,
					}}
				>
					<MailIcon size={23} className="text-brand" />
				</motion.div>
			</div>

			{/* Центрований контейнер із круглим фоном для всіх іконок */}
			<motion.div
				ref={ref}
				className="absolute w-[250px] h-[250px] shadow-lg rounded-full bg-slate-500 bg-opacity-70 backdrop-blur-xl flex items-center justify-center"
				style={{
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}
				animate={controls}
				transition={{ duration: 0.5 }}
				onMouseLeave={() => setShow(false)}
			>
				<motion.div
					className="select-none"
					initial={{ opacity: 0, scale: 0.5 }}
					animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
					transition={{ duration: 0.5, type: 'spring', stiffness: 100, damping: 10 }}
				>
					<Image
						src={'/android-chrome-512x512.png'}
						width={100}
						height={100}
						alt={'logo'}
					/>
				</motion.div>
				{SOCIAL_NETWORKS.map(({ title, icon, href }, index) => {
					const { x, y } = calculatePosition(
						index,
						SOCIAL_NETWORKS.length,
						100
					);
					return (
						<motion.div
							key={title}
							className="absolute"
							style={{
								left: `calc(50% + ${x}px)`,
								top: `calc(50% + ${y}px)`,
								transform: 'translate(-50%, -50%)',
							}}
							whileInView={{
								opacity: [0, 1],
							}}
							viewport={{ once: true }}
							transition={{
								duration: 1,
								delay: index * 0.2,
							}}
						>
							<Link
								className="p-2 rounded-full shadow-2xl flex items-center justify-center hover:shadow-lg hover:shadow-brand transition-all"
								href={href}
								target="_blank"
							>
								{icon}
							</Link>
						</motion.div>
					);
				})}
			</motion.div>
		</motion.div>
	);
};
