import * as motion from 'framer-motion/client';
import { Logo, Modal } from '../shared';
import { AnimatedLine, YAnimation } from '../animations';
import { PERSONAL_PROJECTS } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import { SiGithub } from 'react-icons/si';

export const SectionPersonalProjects = () => {
	return (
		<section className="relative flex items-center ttbg-[url('/images/works-bg.jpg')] bg-cover bg-center">
			<div className="absolute inset-0 bg-emerald-900 bg-opacity-10 backdrop-blur-sm z-10"></div>
			<div className="flex flex-col items-center justify-center w-full text-white min-h-screen py-12 z-20">
				{/* Works Header */}
				<div className="flex flex-col items-center justify-center mb-10">
					<div className="flex justify-center items-center w-max space-x-2 mb-2 relative">
						<AnimatedLine />
						<h2 className="text-5xl font-bold text-brand !ml-0">
							<YAnimation>Personal projects</YAnimation>
						</h2>
					</div>
					<motion.p
						className="text-lg text-gray-400"
						whileInView={{ opacity: [0, 1], y: [100, 0], scale: [0.5, 1] }}
						transition={{
							duration: 1.5,
						}}
					>
						I explore new technologies and ideas in my personal projects,
						pushing my skills further.
					</motion.p>
				</div>

				{/* PERSONAL_PROJECTS */}
				<motion.div className="flex flex-wrap justify-center gap-8 max-w-screen-xl w-full">
					{PERSONAL_PROJECTS.map((work, index) => (
						<motion.div
							key={index}
							className={`flex items-center min-w-[380px] w-[30%] bg-slate-500 bg-opacity-30 group cursor-pointer`}
							whileInView={{ opacity: [0, 1], scale: [0.5, 1] }}
							transition={{
								delay: index * 0.4,
							}}
						>
							<div className="relative flex justify-center items-center z-10 min-w-[180px] h-[180px]">
								<div className="flex justify-center items-center absolute group-hover:opacity-100 opacity-0 bg-black bg-opacity-60 top-0 left-0 w-full h-full z-20 transition-all">
									<Modal
										title={work.title}
										desctiption={work.description}
										buttonText="View Details"
										buttonVariant="link"
										buttonClassName="text-brand font-bold text-xs"
									>
										<ul className="flex items-center justify-center flex-wrap gap-3 mb-3">
											{work.technologies.map((tech, index) => (
												<li
													key={index}
													className="text-brand border-brand border-2 uppercase p-2"
												>
													<YAnimation>{tech}</YAnimation>
												</li>
											))}
										</ul>

										<YAnimation type="node">
											<Link href={work.source} target="_blank">
												<SiGithub
													size={30}
													className="hover:text-brand hover:scale-125 transition-all"
												/>
											</Link>
										</YAnimation>
									</Modal>
								</div>
								{work.image ? (
									<Image
										src={'/images/works/' + work.image}
										alt={work.title}
										width={180}
										height={180}
									/>
								) : (
									<Logo />
								)}
							</div>
							<Link
								href={work.href}
								target="_blank"
								className="flex items-center w-full h-full pl-7 text-xl relative overflow-hidden"
							>
								<div className="absolute -left-[70%]  -bottom-[80%] group:hover:-left-[105%] group-hover:-bottom-[110%] rotate-45 bg-white bg-opacity-50 w-52 h-52 transition-all"></div>
								<div className="absolute -right-[60%] -bottom-[70%] group:hover:-right-[105%] group-hover:-bottom-[110%] rotate-45 bg-slate-600 w-52 h-52 opacity-50 transition-all"></div>
								{work.title}
							</Link>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};
