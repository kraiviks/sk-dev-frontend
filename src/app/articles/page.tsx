import { Api } from '@/services/api/api-client';
import { ArticleList, CreateArticleLink } from '@/components/shared';

const ArticlesPage = async () => {
	const { data } = await Api.getArticles();

	return (
		<div className="mt-16 container mx-auto py-12 flex flex-col gap-8">
			<div className="flex justify-between items-center">
				<h1 className="text-4xl font-bold">Articles</h1>
				<CreateArticleLink />
			</div>
			<ArticleList initialData={data} />
		</div>
	);
};

export default ArticlesPage;
