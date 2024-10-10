/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
// import { Editor } from '@/components/shared/editor';
import { Api } from '@/services/api/api-client';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('@/components/shared/editor'), {
  ssr: false,
});
const CreateArticlePage = () => {
	const router = useRouter();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [editorContent, setEditorContent] = useState('');
	const [title, setTitle] = useState('');
	const [image, setImage] = useState('');
	const [description, setDescription] = useState('');

	const handleEditorChange = (content: any) => {
		setEditorContent(content);
	};

	const handleSubmit = async () => {
		try {
			setIsSubmitting(true);
			await Api.createArticle({
				title,
				content: editorContent,
				image,
				description,
			});
			router.push('/articles');
		} catch (error) {
			console.error('Create article failed:', error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="container mx-auto mt-20 p-4 flex flex-col items-center justify-center min-h-screen">
			<h1 className="text-5xl font-bold mb-12">Create new article</h1>
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
						<Editor value={editorContent} onChange={handleEditorChange} />
					</div>
				</div>
				<Button
					className="text-white"
					type="submit"
					variant="default"
					disabled={isSubmitting}
				>
					{isSubmitting ? (
						<Loader2 className="mr-2 h-4 w-4 animate-spin" />
					) : (
						'Create'
					)}
				</Button>
			</form>
		</div>
	);
};

export default CreateArticlePage;
