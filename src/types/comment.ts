export interface Author {
	id: string;
	username: string;
	firstname: string;
	lastname: string;
	avatar: string;
}

export interface Comment {
	id: string;
	articleId: string;
	content: string;
	author: Author;
	createdAt: string;
	updatedAt: string;
	replies?: Comment[];
	parentId?: string;
}
