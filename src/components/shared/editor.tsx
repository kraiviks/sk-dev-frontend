'use client';
import { Editor as TinyMCEEditor } from '@tinymce/tinymce-react';

export const Editor = ({ value, onChange }: any) => {
	return (
		<TinyMCEEditor
			apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
			value={value}
			init={{
				height: 500,
				plugins: [
					'advlist',
					'autolink',
					'link',
					'image',
					'lists',
					'charmap',
					'preview',
					'anchor',
					'pagebreak',
					'searchreplace',
					'wordcount',
					'visualblocks',
					'visualchars',
					'code',
					'fullscreen',
					'insertdatetime',
					'media',
					'table',
					'emoticons',
					'help',
					'codesample',
				],
				toolbar:
					'undo redo | styles | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | ' +
					'bullist numlist outdent indent | link image | print preview media fullscreen | codesample ' +
					'emoticons | help',
				menubar: 'file edit view insert format tools table help',
			}}
			onEditorChange={onChange}
		/>
	);
};

export default Editor;
