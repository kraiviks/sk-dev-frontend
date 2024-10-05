import * as motion from 'framer-motion/client';
import Image from 'next/image';
import { AnimatedSpan, Container } from '../shared';

export const SectionAbout = (): React.ReactElement => {
	return (
		<section
			key="2"
			className="flex items-center bg-[url('/images/about-me-bg.svg')] bg-cover bg-center h-screen"
		>
			<Container className="flex gap-32 justify-between">
				<div className="flex flex-col gap-16 max-w-[880px]">
					<motion.h2
						className="text-5xl border-brand w-max py-4 px-10 border-4 rounded-tl-3xl rounded-br-3xl"
						whileInView={{ x: [-300, 0], scale: [0.3, 1] }}
						transition={{
							type: 'spring',
							stiffness: 100,
							damping: 10,
							duration: 1,
						}}
					>
						<motion.span
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.3 }}
						>
							About me
						</motion.span>
					</motion.h2>
					<motion.div
						className="bg-background py-6 px-10 rounded-xl"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							type: 'spring',
							stiffness: 100,
							damping: 10,
							delay: 0.5,
						}}
					>
						<motion.div
							className="text-brand"
							whileInView={{ opacity: [0, 1], y: [-20, 0], x: [-20, 0] }}
							transition={{
								type: 'spring',
								stiffness: 100,
								damping: 10,
								duration: 0.5,
								delay: 0.5,
							}}
						>
							{'<p>'}
						</motion.div>
						<div className="ml-5">
							<motion.p
								className="text-brand text-3xl"
								initial={{ opacity: 0, x: 100, y: -100 }}
								whileInView={{ opacity: 1, x: 0, y: 0 }}
								transition={{
									type: 'spring',
									stiffness: 100,
									damping: 10,
									delay: 0.5,
								}}
							>
								Hello!
							</motion.p>
							My name is <AnimatedSpan>Serhii</AnimatedSpan>. I am a{' '}
							<AnimatedSpan>professional front-end developer</AnimatedSpan>. In
							development since 2021. I have experience in creating
							<AnimatedSpan>
								beautiful and functional user interfaces
							</AnimatedSpan>{' '}
							using a variety of <AnimatedSpan>web technologies</AnimatedSpan>,
							including <AnimatedSpan>JavaScript</AnimatedSpan>,{' '}
							<AnimatedSpan>React</AnimatedSpan>,{' '}
							<AnimatedSpan>Vue</AnimatedSpan>,{' '}
							<AnimatedSpan>Redux</AnimatedSpan>,{' '}
							<AnimatedSpan>HTML5</AnimatedSpan>,{' '}
							<AnimatedSpan>CSS3</AnimatedSpan>, and more. I use JavaScript
							professionally, always ready to delve into other languages and
							technologies if the need arises. In my work, I always focus on{' '}
							<AnimatedSpan>business</AnimatedSpan> and try to find the most
							effective solutions, solving the most{' '}
							<AnimatedSpan>priority tasks</AnimatedSpan>.{' '}
							<AnimatedSpan>Highly responsible</AnimatedSpan>, think{' '}
							<AnimatedSpan>two steps ahead</AnimatedSpan>, and have not met in
							a long time with an issue that I cannot solve.
						</div>

						<motion.div
							className="text-brand"
							whileInView={{ opacity: [0, 1], y: [30, 0], x: [30, 0] }}
							transition={{
								type: 'spring',
								stiffness: 100,
								damping: 10,
								duration: 0.5,
								delay: 0.5,
							}}
						>
							{'</p>'}
						</motion.div>
					</motion.div>
				</div>
				<motion.div
					className="w-[462px] h-[556px]"
					initial={{ opacity: 0, scale: 0.8, x: 100 }}
					whileInView={{ opacity: 1, scale: 1, x: 0 }}
					transition={{
						type: 'spring',
						stiffness: 100,
						damping: 20,
						duration: 0.8,
						delay: 0.5,
					}}
				>
					<Image
						src="/images/about-img.png"
						alt="About me image"
						width={462}
						height={556}
						className="!w-[462px] !h-[556px] max-w-max"
					/>
				</motion.div>
			</Container>
		</section>
	);
};
