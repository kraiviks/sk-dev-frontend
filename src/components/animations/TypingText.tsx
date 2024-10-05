import * as motion from 'framer-motion/client';

export const TypingText = ({
	text,
	highlight = '',
	className = '',
	delay = 0,
	typingSpeed = 0.05, // New prop to control typing speed
}: {
	text: string;
	highlight?: string;
	className?: string;
	delay?: number;
	typingSpeed?: number; // Control speed of typing
}) => {
	const parts = text.split(highlight);

	return (
		<>
			{parts.map((part, index) => (
				<span key={index}>
					{/* Render each character of the part */}
					{part.split('').map((char, charIndex) => (
						<motion.span
							className={className}
							key={charIndex}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								delay: delay + index * typingSpeed + charIndex * typingSpeed,
							}} // Use typingSpeed here
						>
							{char}
						</motion.span>
					))}
					{/* Render highlighted text if there are more parts */}
					{index < parts.length - 1 &&
						highlight.split('').map((char, charIndex) => (
							<motion.span
								className={`text-brand ${className}`}
								key={charIndex}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									delay:
										delay +
										index * typingSpeed +
										part.length * typingSpeed +
										charIndex * typingSpeed,
								}}
							>
								{char}
							</motion.span>
						))}
				</span>
			))}
		</>
	);
};
