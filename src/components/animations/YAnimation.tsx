import * as motion from 'framer-motion/client';
import React from 'react';

export const YAnimation = ({
	children,
	type = 'string',
	delay = 0.2,
}: {
	children: React.ReactNode;
	type?: 'string' | 'node';
	delay?: number;
}) => {
	if (type === 'string') {
		const text = String(children);
		const letters = text.split('').map((letter, index) => {
			const yOffset = index % 2 === 0 ? -50 : 50;
			return (
				<motion.span
					className="inline-block"
					key={index}
					initial={{ y: yOffset, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{
						type: 'spring',
						stiffness: 200,
						damping: 20,
						delay: index * delay,
					}}
				>
					{letter === ' ' ? '\u00A0' : letter}{' '}
				</motion.span>
			);
		});
		return <>{letters}</>;
	}

	const nodes = React.Children.map(children, (child, index) => {
		const yOffset = index % 2 === 0 ? -50 : 50;
		return (
			<motion.div
				className="inline-block"
				key={index}
				initial={{ y: yOffset, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{
					type: 'spring',
					stiffness: 100,
					damping: 20,
					delay: index * delay,
				}}
			>
				{child}
			</motion.div>
		);
	});

	return <>{nodes}</>;
};
