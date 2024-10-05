import * as motion from 'framer-motion/client';
import React from 'react';
import { ArticleList, Container } from '../shared';
import { Button } from '../ui/button';
import { ListViewType } from '@/types';
import { AnimatedLine, YAnimation } from '../animations';
import Link from 'next/link';

export const SectionBlog = (): React.ReactElement => {
	return (
		<section className="flex items-center justify-center h-screen">
			<Container className="flex flex-col justify-center text-white py-12 w-full">
				{/* Blog Header */}
				<div className="flex flex-col items-center justify-center mb-10">
					<div className="flex justify-center items-center w-max space-x-2 mb-2 relative">
						<AnimatedLine />
						<h2 className="text-5xl font-bold text-brand !ml-0">
							<YAnimation>Blog</YAnimation>
						</h2>
					</div>
					<motion.p
						className="text-lg text-gray-400"
						whileInView={{ opacity: [0, 1], y: [100, 0], scale: [0.5, 1] }}
						transition={{
							duration: 1,
						}}
					>
						My thoughts on technology and business
					</motion.p>
				</div>
				<div className=" py-16 w-full">
					<ArticleList type={ListViewType.LIST} max={2} />
				</div>

				<motion.div
					className="flex justify-center gap-4 mt-16"
					whileInView={{ opacity: [0, 1], y: [100, 0], scale: [0.5, 1] }}
					transition={{
						type: 'spring',
						stiffness: 100,
						damping: 10,
						duration: 1,
					}}
				>
					<Button
						variant="outline"
						className="rounded-full border-brand hover:bg-brand hover:text-black"
					>
						<Link href="/articles">View all</Link>
					</Button>
				</motion.div>
			</Container>
		</section>
	);
};
