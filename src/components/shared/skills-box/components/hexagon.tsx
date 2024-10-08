import * as motion from 'framer-motion/client';

const Hexagon = ({
	text,
	activeSkillData,
	className,
}: {
	text: string;
	activeSkillData: {
		name: string;
		position: { x: number; y: number } | null;
	} | null;
	className?: string;
}) => {
	return (
		<svg
			width="100%"
			height="100%"
			viewBox="0 0 300 300"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M262.5 200V100C262.496 95.6159 261.338 91.3101 259.144 87.5145C256.95 83.7189 253.797 80.567 250 78.375L162.5 28.375C158.7 26.1808 154.388 25.0256 150 25.0256C145.612 25.0256 141.3 26.1808 137.5 28.375L50 78.375C46.2033 80.567 43.0498 83.7189 40.8558 87.5145C38.6618 91.3101 37.5045 95.6159 37.5 100V200C37.5045 204.384 38.6618 208.69 40.8558 212.485C43.0498 216.281 46.2033 219.433 50 221.625L137.5 271.625C141.3 273.819 145.612 274.974 150 274.974C154.388 274.974 158.7 273.819 162.5 271.625L250 221.625C253.797 219.433 256.95 216.281 259.144 212.485C261.338 208.69 262.496 204.384 262.5 200Z"
				fill="url(#paint0_linear_1_24)"
			/>
			<text
				x="150"
				y="140"
				textAnchor="middle"
				alignmentBaseline="middle"
				fill="#FFFFFF"
				fontSize="32"
				fontWeight="bold"
			>
				{text}
			</text>
			{activeSkillData && (
				<motion.text
					x="150"
					y="180"
					textAnchor="middle"
					alignmentBaseline="middle"
					fill="#FFFFFF"
					fontSize="21"
					animate={{
						opacity: [0, 1],
						y: [activeSkillData.position?.y, 0],
						x: [activeSkillData.position?.x, 0],
						scale: [0.5, 1],
					}}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
				>
					{activeSkillData.name}
				</motion.text>
			)}
			<defs>
				<linearGradient
					id="paint0_linear_1_24"
					x1="37.5"
					y1="87.75"
					x2="258.75"
					y2="212.25"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#13F6D4" />
					<stop offset="1" stopColor="#0B907C" />
				</linearGradient>
			</defs>
		</svg>
	);
};

export default Hexagon;
