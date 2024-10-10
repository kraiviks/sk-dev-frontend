'use client';

import { useEffect } from 'react';
import Prism from 'prismjs';

import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/show-language/prism-show-language';
import 'prismjs/plugins/toolbar/prism-toolbar.css';
import './code-toolbar.css';
import { setCookie } from 'cookies-next';

const ClientArticle = ({
	content,
	authorId,
}: {
	content: string;
	authorId: string;
}) => {
	useEffect(() => {
		Prism.highlightAll();
		setCookie('authorId', authorId);
	}, [authorId]);

	return (
		<article
			dangerouslySetInnerHTML={{ __html: content }}
			suppressHydrationWarning={true} // Suppress the hydration warning
			className='break-words'
		></article>
	);
};

export default ClientArticle;
