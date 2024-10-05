import * as motion from 'framer-motion/client';
import { TypingText } from '@/components/animations';

type TextProps = {
	text: string;
	highlight?: string;
	wrap?: boolean;
};

export const MainText = ({ text }: { text: TextProps[] }) => {
	return (
		<div className="flex flex-col w-max">
			<motion.span
				className="text-brand"
				initial={{ opacity: 0, y: -20, x: -20 }}
				whileInView={{ opacity: 1, y: 0, x: 0 }}
				transition={{
					type: 'spring',
					stiffness: 100,
					damping: 10,
					duration: 0.5,
				}}
			>
				{'<h1>'}
			</motion.span>
			<h1 className="m-0 ml-5 text-xl md:text-4xl font-bold lg:text-6xl">
				{text.map((part, index) => {
					const Tag = part.wrap ? 'span' : 'p';
					return (
						<Tag key={index}>
							<TypingText
								text={part.text}
								highlight={part.highlight}
								delay={0.3}
								typingSpeed={0.05}
							/>
						</Tag>
					);
				})}
			</h1>
			<motion.span
				className="text-brand"
				initial={{ opacity: 0, y: 20, x: 20 }}
				whileInView={{ opacity: 1, y: 0, x: 0 }}
				transition={{
					type: 'spring',
					stiffness: 100,
					damping: 10,
					duration: 0.5,
					delay: 0.5,
				}}
			>
				{'</h1>'}
			</motion.span>
		</div>
	);
};
