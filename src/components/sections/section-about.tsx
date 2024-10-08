import * as motion from 'framer-motion/client';
import Image from 'next/image';
import { AnimatedSpan, Container } from '../shared';
import { Profile } from './section-main/shared';

export const SectionAbout = (): React.ReactElement => {
	return (
		<section className="flex items-center bg-[url('/images/about-me-bg.svg')] bg-cover bg-center min-h-720:h-screen">
			<Container className="flex flex-col items-center justify-between gap-32 min-h-720:flex-row">
				<div className="flex flex-col gap-16 max-w-[880px] items-center">
					<motion.h2
						className="px-10 py-4 text-5xl border-4 border-brand w-max rounded-tl-3xl rounded-br-3xl"
						whileInView={{ scaleX: [0.3, 1] }}
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
						className="px-10 py-6 bg-background rounded-xl"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
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
								className="text-3xl text-brand"
								initial={{ opacity: 0, y: -100 }}
								whileInView={{ opacity: 1, y: 0 }}
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
				<Profile />
			</Container>
		</section>
	);
};
