'use client';

import { useEffect, useState } from 'react';
import  { Editor } from '@/components/shared/editor';
import { Api } from '@/services/api/api-client';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useRouter, useParams } from 'next/navigation';
import { ApiRoutes } from '@/services/api/constants';

const EditArticlePage = () => {
	const router = useRouter();
	const params = useParams();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [editorContent, setEditorContent] = useState('');
	const [title, setTitle] = useState('');
	const [image, setImage] = useState('');
	const [description, setDescription] = useState('');
	const [articleId, setArticleId] = useState<string>('');

	const slug = params.slug as string;

	const handleEditorChange = (content: any) => {
		setEditorContent(content);
	};

	const handleSubmit = async () => {
		try {
			setIsSubmitting(true);
			await Api.updateArticle(articleId, {
				title,
				content: editorContent,
				image,
				description,
			});
			router.push(ApiRoutes.ARTICLES + '/' + slug);
		} catch (error) {
			console.error('Create article failed:', error);
		} finally {
			setIsSubmitting(false);
		}
	};

	useEffect(() => {
		Api.getArticle(slug).then((res) => {
			console.log(res);
			setEditorContent(res.data.content);
			setTitle(res.data.title);
			setImage(res.data.image);
			setDescription(res.data.description);
			setArticleId(res.data.id);
		});
	}, []);

	return (
		<div className="container mx-auto mt-20 p-4 flex flex-col items-center justify-center min-h-screen">
			<h1 className="text-5xl font-bold mb-12">Edit article</h1>
			<form
				className="flex flex-col gap-6 w-full max-w-full"
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit();
				}}
			>
				<div className="max-w-full md:max-w-sm">
					<div className="flex flex-col gap-4">
						<label className="flex flex-col gap-2">
							<span className="text-2xl">Title</span>
							<input
								type="text"
								name="title"
								id=""
								className="w-full px-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
								onChange={(e) => setTitle(e.target.value)}
								value={title}
							/>
						</label>
						<label className="flex flex-col gap-2">
							<span className="text-2xl">Description</span>
							<textarea
								name="description"
								id=""
								className="w-full px-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
								onChange={(e) => setDescription(e.target.value)}
								value={description}
							/>
						</label>
						<label className="flex flex-col gap-2">
							<span className="text-2xl">Image url</span>
							<input
								type="text"
								name="image"
								id=""
								className="w-full px-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
								value={image}
								onChange={(e) => setImage(e.target.value)}
							/>
						</label>
					</div>
					<div className="mt-2">
						{image && <img src={image} alt="image preloaded" />}
					</div>
				</div>
				<div className="mt-6">
					<span className="text-2xl">Content</span>
					<div className="mt-2">
						<Editor
							value={editorContent}
							onChange={handleEditorChange}
						/>
					</div>
				</div>
				<Button
					type="submit"
					variant="default"
					disabled={isSubmitting}
					className="dark:text-white"
				>
					{isSubmitting ? (
						<Loader2 className="mr-2 h-4 w-4 animate-spin" />
					) : (
						'Save'
					)}
				</Button>
			</form>
		</div>
	);
};

export default EditArticlePage;
