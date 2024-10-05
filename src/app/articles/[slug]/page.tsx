import { Api } from '@/services/api/api-client';
import Link from 'next/link';
import ClientArticle from './article.client';
import { notFound } from 'next/navigation';
import { Comments, Delete, EditArticleLink, Likes } from '@/components/shared';

interface ArticlePageParams {
	slug: string;
}

export default async function ArticlePage({
	params,
}: {
	params: ArticlePageParams;
}) {
	const { data } = await Api.getArticle(params.slug).catch((err) => {
		return { data: null };
	});

	if (!data) {
		return notFound();
	}

	return (
		<div className="max-w-5xl mx-auto mt-10 py-16 px-4">
			<div className="flex flex-col">
				<div className="flex justify-between">
					<div className="flex flex-col">
						<Link
							href="/articles"
							className="text-blue-500 hover:underline mb-4 block"
						>
							&larr; Back to articles
						</Link>
						<EditArticleLink slug={data?.slug} authorId={data?.authorId} />
					</div>
					<Delete type="post" id={data?.id} authorId={data?.authorId} />
				</div>
				<h1 className="text-5xl font-bold mb-4">{data?.title}</h1>
			</div>
			<div className="flex items-center justify-between mb-8">
				<Link href={`/profile/${data?.authorId}`} className="flex gap-1">
					Author:
					<div className="text-blue-500 hover:underline">
						{data?.author?.username}
					</div>
				</Link>
				<div className="flex items-center gap-2">
					<Likes id={data.id} />
					{/* <p className="font-bold">
						{data?.comments.length}{' '}
						{data?.comments.length === 1 ? 'comment' : 'comments'}
					</p> */}
				</div>
			</div>

			<div className="prose prose-lg">
				<ClientArticle content={data?.content} />
				<Comments articleId={data?.id} />
			</div>
		</div>
	);
}
