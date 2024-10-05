'use client';

import { useEffect } from 'react';
import Prism from 'prismjs';

import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/show-language/prism-show-language';
import 'prismjs/plugins/toolbar/prism-toolbar.css';
import './code-toolbar.css';

const ClientArticle = ({ content }: { content: string }) => {
	useEffect(() => {
		Prism.highlightAll();
	}, []);

	return (
		<article
			dangerouslySetInnerHTML={{ __html: content }}
			suppressHydrationWarning={true} // Suppress the hydration warning
		></article>
	);
};

export default ClientArticle;
