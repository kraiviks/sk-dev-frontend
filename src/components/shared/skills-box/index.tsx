'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Hexagon from './components/hexagon';
import { cn } from '@/lib/utils';
import { SkillInterface } from '@/types/skill';

type ActiveSkillData = {
	name: string;
	position: { x: number; y: number };
} | null;

type Props = {
	title?: string;
	skills: SkillInterface[];
	delay?: number;
};

export const SkillsBox = ({
	title = '',
	skills,
	delay = 0.3,
}: Props): JSX.Element | null => {
	const [activeSkillData, setActiveSkillData] = useState<ActiveSkillData>(null);
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const [stopAutoChangeIndex, setStopAutoChangeIndex] =
		useState<boolean>(false);

	const radius = 120; // Distance from the center of the hexagon to the skill
	const skillsCount = skills.length;

	// Calculate the position of each skill
	const calculatePosition = (
		index: number,
		skillsCount: number,
		radius: number
	) => {
		// Shift the angle by -90 degrees so that the first element is at the top
		const angle = (index / skillsCount) * 2 * Math.PI - Math.PI / 2;
		const x = radius * Math.cos(angle); // Calculate the x position
		const y = radius * Math.sin(angle); // Calculate the y position

		const roundToTwoDecimal = (num: number) => Math.round(num * 100) / 100;

		return {
			x: roundToTwoDecimal(x),
			y: roundToTwoDecimal(y),
		};
	};

	// Auto change active skill
	useEffect(() => {
		let interval: NodeJS.Timeout;

		if (!stopAutoChangeIndex) {
			interval = setInterval(() => {
				setActiveIndex((prevIndex) => (prevIndex + 1) % skillsCount);
			}, 5000);
		}

		return () => clearInterval(interval);
	}, [skillsCount, stopAutoChangeIndex]);

	// Calculate the position of the active skill
	useEffect(() => {
		const { x, y } = calculatePosition(activeIndex, skillsCount, radius);

		setActiveSkillData({
			name: skills[activeIndex]?.name,
			position: { x, y },
		});
	}, [activeIndex, skills, skillsCount]);

	if (!skills.length) return null;
	return (
		<motion.div
			className="flex items-center justify-center relative w-[250px] h-[250px] sm:h-[300px] sm:w-[300px]"
			whileInView={{ opacity: [0, 1] }}
			viewport={{ once: true }}
			transition={{
				duration: 1,
				delay: delay,
			}}
		>
			{/* Main Hexagon */}
			<motion.div
				whileInView={{ opacity: [0, 1], scale: [0, 1] }}
				transition={{
					duration: 0.5,
				}}
			>
				<Hexagon
					text={title}
					activeSkillData={activeSkillData}
					className="w-[200px] h-[200px] drop-shadow-lg"
				/>
			</motion.div>

			{/* Border Hexagons */}
			<motion.div
				className="absolute top-0 left-0 w-[100%] h-[100%]"
				whileInView={{ opacity: [0, 1], scale: [0, 1] }}
				transition={{
					duration: 0.5,
					delay: 0.6,
				}}
			>
				<motion.div
					className="w-[100%] h-[100%] bg-[url(/images/hexagon-border.svg)] bg-contain bg-center bg-no-repeat"
					animate={{ rotate: [0, 360] }}
					transition={{
						repeat: Infinity,
						repeatType: 'loop',
						duration: 20,
						ease: 'linear',
					}}
				/>
			</motion.div>
			<motion.div
				className="absolute bottom-0 right-0 w-[100%] h-[100%]"
				whileInView={{ opacity: [0, 1], scale: [0, 1] }}
				transition={{
					duration: 0.5,
					delay: 1,
				}}
			>
				<motion.div
					className="w-[100%] h-[100%] bg-[url(/images/hexagon-border.svg)] bg-contain bg-center bg-no-repeat"
					animate={{ rotate: [360, 90] }}
					transition={{
						repeat: Infinity,
						repeatType: 'loop',
						duration: 20,
						ease: 'linear',
					}}
				/>
			</motion.div>

			{/* Skills */}
			<div className="absolute w-full h-full">
				{skills.map((skill, index) => {
					const { x, y } = calculatePosition(index, skillsCount, radius);
					return (
						<motion.div
							key={skill.name}
							className="absolute"
							style={{
								left: `calc(50% + ${x}px)`, // Setting the left position
								top: `calc(50% + ${y}px)`, // Setting the top position
								transform: 'translate(-50%, -50%)', // Centering
							}}
							whileInView={{
								opacity: [0, 1],
							}}
							viewport={{ once: true }}
							transition={{
								duration: 1,
								delay: index * 0.2 + delay,
							}}
						>
							<div
								className={cn(
									'rounded-full p-2 w-max bg-opacity-50 hover:scale-150 transition-all duration-500 opacity-50',
									{
										'scale-150 opacity-100 shadow-md shadow-brand':
											activeIndex === index,
									}
								)}
								style={{ backgroundColor: skill.color }}
								onMouseEnter={() => {
									setStopAutoChangeIndex(true);
									setActiveIndex(index);
									setActiveSkillData({
										name: skill.name,
										position: { x, y },
									});
								}}
								onMouseLeave={() => setStopAutoChangeIndex(false)}
							>
								{skill.icon}
							</div>
						</motion.div>
					);
				})}
			</div>
		</motion.div>
	);
};
