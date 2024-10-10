import { Api } from '@/services/api/api-client';
import { ArticleList, CreateArticleLink } from '@/components/shared';
import * as motion from 'framer-motion/client';

const ArticlesPage = async () => {
	const { data } = await Api.getArticles();

	return (
		<div className="mt-16 container mx-auto py-12 flex flex-col gap-8">
			<div className="flex justify-between items-center">
				<motion.h1
					className="text-4xl font-bold"
					whileInView={{ opacity: [0, 1], scale: [0.5, 1] }}
					viewport={{ once: true }}
					transition={{
						type: 'spring',
						stiffness: 100,
						damping: 10,
						duration: 0.6,
					}}
				>
					Articles
				</motion.h1>
				<CreateArticleLink />
			</div>
			<ArticleList initialData={data} />
		</div>
	);
};

export default ArticlesPage;
