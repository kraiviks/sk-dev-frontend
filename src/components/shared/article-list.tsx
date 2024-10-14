/* eslint-disable @next/next/no-img-element */
'use client';

import useSWR from 'swr';
import { cn, formatDate } from '@/lib/utils';
import { Api } from '@/services/api/api-client';
import Link from 'next/link';
import React from 'react';
import { Likes } from '@/components/shared/likes';
import { ListViewType } from '@/types/article';
import { YAnimation } from '../animations';

type ArticleListProps = {
	initialData?: article[];
	type?: ListViewType;
	max?: number;
};
interface article {
	id: string;
	slug: string;
	title: string;
	description: string;
	image: string;
	createdAt: string;
}

const fetcher = async () => {
	const response = await Api.getArticles();
	return response.data;
};

export const ArticleList = ({
	initialData,
	type = ListViewType.GRID,
	max,
}: ArticleListProps) => {
	const isListView = type === ListViewType.LIST;
	const { data, error } = useSWR('articles', fetcher, {
		fallbackData: initialData,
	});

	if (error)
		return (
			<div className="w-full py-4 mb-4 text-xl font-bold text-center text-red-500 bg-red-100 rounded shadow">
				Error loading articles
			</div>
		);
	if (!data || !data.length)
		return (
			<div className="w-full py-4 mb-4 text-xl font-bold text-center">
				Not found
			</div>
		);

	return (
		<ul
			className={cn('grid gap-4', isListView ? 'grid-cols-1' : 'grid-cols-2')}
		>
			<YAnimation type="node" delay={0.7}>
				{data.slice(0, max || data.length).map((article: article) => (
					<li
						key={article.slug}
						className={cn('p-4', !isListView && 'rounded-lg hover:shadow-lg')}
					>
						<Link href={`/articles/${article.slug}`}>
							<div
								className={cn(
									'flex',
									isListView
										? 'gap-2 items-center'
										: 'flex-col gap-4 items-center'
								)}
							>
								<img
									src={article.image}
									alt={article.title}
									width={320}
									height={170}
									className={cn(
										'h-[170px] object-contain',
										!isListView ? '' : 'min-w-36 w-36 h-20'
									)}
								/>
								<div className="flex flex-col gap-2 w-full max-w-[50%] md:max-w-[70%] lg:max-w-[80%]">
									<div className="text-xl md:text-2xl font-medium text-brand hover:text-cyan-500 truncate">
										{article.title}
									</div>
									<p
										className="text-sm md:text-base text-gray-500 truncate max-w-[950px]"
										title={article.description}
									>
										{article.description}
									</p>
								</div>
							</div>
						</Link>
						<div
							className={cn(
								'flex items-center',
								isListView ? 'justify-end mt-3 gap-3' : ' justify-between'
							)}
						>
							<div className="text-xs text-gray-500">
								{formatDate(article.createdAt)}
							</div>
							<Likes id={article.id} />
						</div>
					</li>
				))}
			</YAnimation>
		</ul>
	);
};
