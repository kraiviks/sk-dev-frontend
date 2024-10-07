import * as motion from 'framer-motion/client';
import { Description, Modal } from '../shared';
import { AnimatedLine, YAnimation } from '../animations';
import { WORKS } from '@/data';
import Image from 'next/image';
import Link from 'next/link';

export const SectionWorks = () => {
	return (
		<section className="relative flex items-center">
			<div className="absolute inset-0 z-10 bg-slate"></div>
			<div className="z-20 flex flex-col items-center justify-center w-full min-h-screen py-12 text-white">
				{/* Works Header */}
				<div className="flex flex-col items-center justify-center mb-10">
					<div className="relative flex items-center justify-center mb-2 space-x-2 w-max">
						<h2 className="text-5xl font-bold text-brand !ml-0">
							<YAnimation>Works</YAnimation>
							<AnimatedLine />
						</h2>
					</div>
					<Description text='I had the pleasure of working with these awesome projects'/>
				</div>

				{/* Works */}
				<div className="flex flex-wrap justify-center w-full max-w-screen-xl gap-8">
					{WORKS.map((work, index) => (
						<motion.div
							key={work.title}
							className={`flex items-center min-w-[380px] w-[30%] bg-slate-500 bg-opacity-30 group cursor-pointer`}
							whileInView={{ opacity: [0, 1], scale: [0.5, 1] }}
							viewport={{ once: true }}
							transition={{
								delay: index * 0.3,
							}}
						>
							<div className="relative z-10 min-w-[180px] h-[180px]">
								<div className="absolute top-0 left-0 z-20 flex items-center justify-center w-full h-full transition-all bg-black opacity-0 group-hover:opacity-100 bg-opacity-60">
									<Modal
										title={work.title}
										desctiption={work.description}
										buttonText="View Details"
										buttonVariant="link"
										buttonClassName="text-brand font-bold text-xs"
									>
										<ul className="flex flex-wrap items-center justify-center gap-3">
											{work.technologies.map((tech, index) => (
												<li
													key={index}
													className="p-2 uppercase border-2 text-brand border-brand"
												>
													<YAnimation>{tech}</YAnimation>
												</li>
											))}
										</ul>
									</Modal>
								</div>
								<Image
									src={'/images/works/' + work.image}
									alt={work.title}
									width={180}
									height={180}
								/>
							</div>
							<Link
								href={work.href}
								target="_blank"
								className="relative flex items-center w-full h-full overflow-hidden text-xl pl-7"
							>
								<div className="absolute -left-[70%]  -bottom-[80%] group:hover:-left-[105%] group-hover:-bottom-[110%] rotate-45 bg-white bg-opacity-50 w-52 h-52 transition-all"></div>
								<div className="absolute -right-[60%] -bottom-[70%] group:hover:-right-[105%] group-hover:-bottom-[110%] rotate-45 bg-slate-600 w-52 h-52 opacity-50 transition-all"></div>
								{work.title}
							</Link>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
