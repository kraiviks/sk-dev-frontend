import * as motion from 'framer-motion/client';
import { SendIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Container, Title } from '../shared';
import { AnimatedLine, YAnimation } from '../animations';

export const SectionContact = (): React.ReactElement => {
	return (
		<section className="relative flex items-center h-screen">
			<Container className="z-10 flex justify-between gap-32">
				<div className="flex flex-col justify-center min-h-screen py-12 text-white">
					{/* Contact Header */}
					<div className="flex flex-col items-center justify-center mb-28">
						<div className="relative flex items-center justify-center mb-2 space-x-2 w-max">
							<Title text="Contact" size="lg" />
							<AnimatedLine />
						</div>
					</div>
					<div className="flex flex-col items-center">
						<motion.h3
							className="px-10 py-4 mb-16 text-3xl font-medium border-4 text-brand border-brand w-max rounded-tl-3xl rounded-br-3xl"
							initial={{ opacity: 0, y: -300, scale: 0 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							viewport={{ once: true }}
							transition={{
								duration: 1,
								delay: 0.3,
							}}
						>
							Send me a message
						</motion.h3>

						<form className="grid grid-cols-2 gap-x-32 gap-y-16">
							<motion.div
								className="flex flex-col"
								whileInView={{ opacity: [0, 1], x: [-300, 0], scale: [0.5, 1] }}
								transition={{
									type: 'spring',
									stiffness: 100,
									damping: 10,
									duration: 1,
									delay: 0.5,
								}}
							>
								<label htmlFor="form-name" className="text-xs text-brand">
									Your name *
								</label>
								<input
									id="form-name"
									type="text"
									placeholder="Name"
									className="py-4 pr-8 bg-transparent border-b outline-none border-brand"
								/>
							</motion.div>
							<motion.div
								className="flex flex-col"
								whileInView={{ opacity: [0, 1], x: [300, 0], scale: [0.5, 1] }}
								transition={{
									type: 'spring',
									stiffness: 100,
									damping: 10,
									duration: 1,
									delay: 0.7,
								}}
							>
								<label htmlFor="form-email" className="text-xs text-brand">
									Your email *
								</label>
								<input
									id="form-email"
									type="text"
									placeholder="Email"
									className="py-4 pr-8 bg-transparent border-b outline-none border-brand"
								/>
							</motion.div>
							<motion.div
								className="flex flex-col col-span-2"
								initial={{ opacity: 0, y: 100, scale: 0.5 }}
								whileInView={{ opacity: 1, y: 0, scale: 1 }}
								transition={{
									type: 'spring',
									stiffness: 100,
									damping: 10,
									duration: 0.7,
									delay: 0.9,
								}}
							>
								<label htmlFor="form-message" className="text-xs text-brand">
									Your message *
								</label>
								<textarea
									id="form-message"
									placeholder="Message"
									className="py-4 pr-8 bg-transparent border-b outline-none border-brand"
								/>
							</motion.div>

							<motion.div
								className="col-span-2"
								initial={{ opacity: 0, y: 100, scale: 0.5 }}
								whileInView={{ opacity: 1, y: 0, scale: 1 }}
								transition={{
									type: 'spring',
									stiffness: 100,
									damping: 10,
									duration: 0.7,
									delay: 1.1,
								}}
							>
								<Button
									type="submit"
									variant="outline"
									className="flex items-center gap-2 mx-auto rounded-full border-brand hover:bg-brand hover:text-black max-w-[200px] "
								>
									Send Message <SendIcon size={16} />
								</Button>
							</motion.div>
						</form>
					</div>
				</div>
			</Container>
		</section>
	);
};
