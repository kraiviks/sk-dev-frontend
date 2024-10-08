import * as motion from 'framer-motion/client';
import React from 'react';
import { ArticleList, Container, Description, Title } from '../shared';
import { Button } from '../ui/button';
import { ListViewType } from '@/types';
import { AnimatedLine, YAnimation } from '../animations';
import Link from 'next/link';

export const SectionBlog = (): React.ReactElement => {
	return (
		<section className="flex items-center justify-center h-screen">
			<Container className="flex flex-col justify-center w-full py-12 text-white">
				{/* Blog Header */}
				<div className="flex flex-col items-center justify-center mb-10">
					<div className="relative flex items-center justify-center mb-2 space-x-2 w-max">
						<Title text="Blog" size="lg" />
						<AnimatedLine />
					</div>
					<Description text="My thoughts on technology and business" />
				</div>
				<div className="w-full">
					<ArticleList type={ListViewType.LIST} max={2} />
				</div>

				<motion.div
					className="flex justify-center gap-4 mt-16"
					whileInView={{ opacity: [0, 1], y: [100, 0], scale: [0.5, 1] }}
					transition={{
						type: 'spring',
						stiffness: 50,
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
