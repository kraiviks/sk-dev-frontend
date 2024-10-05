import { axiosInstance } from './instance';
import { ApiRoutes } from './constants';
import { LoginData, RegisterData } from '@/types';

export const Api = {
	//USERS
	login: (data: LoginData) => {
		return axiosInstance.post(ApiRoutes.LOGIN, data);
	},

	register: (data: RegisterData) => {
		return axiosInstance.post(ApiRoutes.REGISTER, data);
	},

	getUserProfile: () => {
		return axiosInstance.get(ApiRoutes.USER_PROFILE);
	},

	getUserById: (id: string) => {
		return axiosInstance.get(`${ApiRoutes.USERS}/${id}`);
	},

	//Articles

	getArticles: () => {
		return axiosInstance.get(ApiRoutes.ARTICLES);
	},

	getArticle: (slug: string) => {
		return axiosInstance.get(`${ApiRoutes.ARTICLES}/${slug}`);
	},

	createArticle: (data: {
		title: string;
		content: string;
		image: string;
		description: string;
	}) => {
		return axiosInstance.post(ApiRoutes.ARTICLES, data);
	},

	updateArticle: (
		id: string,
		data: { title: string; content: string; image: string; description: string }
	) => {
		return axiosInstance.patch(`${ApiRoutes.ARTICLES}/${id}`, data);
	},

	deleteArticle: (id: string) => {
		return axiosInstance.delete(`${ApiRoutes.ARTICLES}/${id}`);
	},

	//COMMENTS

	createComment: (articleId: string, data: { content: string }) => {
		return axiosInstance.post(`${ApiRoutes.COMMENTS}/${articleId}`, data);
	},

	editComment: (id: string, data: { content: string }) => {
		return axiosInstance.patch(`${ApiRoutes.COMMENTS}/${id}`, data);
	},

	getCommentsByArticleId: (articleId: string) => {
		return axiosInstance.get(`${ApiRoutes.COMMENTS}/${articleId}`);
	},

	deleteComment: (id: string) => {
		return axiosInstance.delete(`${ApiRoutes.COMMENTS}/${id}`);
	},

	//LIKES

	likeArticle: (id: string) => {
		return axiosInstance.post(`${ApiRoutes.LIKES_ARTICLE}/${id}`);
	},

	likeComment: (id: string) => {
		return axiosInstance.post(`${ApiRoutes.LIKES_COMMENT}/${id}`);
	},

	getArticleLikes: (articleId: string) => {
		return axiosInstance.get(`${ApiRoutes.LIKES_ARTICLE}/${articleId}`);
	},
};
