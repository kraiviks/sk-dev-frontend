export interface LoginData {
	email: string;
	password: string;
}

export interface RegisterData {
	username: string;
	email: string;
	password: string;
	firstname: string;
	lastname: string;
	bio?: string;
	avatar?: string;
}
