	import axios from 'axios';
	import { getCookie } from 'cookies-next';

	// Use the correct url depending on if it's server or public
	const apiUrl = typeof window === 'undefined' ? process.env.NEXT_SERVER_API_URL : process.env.NEXT_PUBLIC_API_URL ;

	// Create an axios instance
	export const axiosInstance = axios.create({
		baseURL: apiUrl,
		timeout: 5000,
		headers: {
			Accept: 'application/json',
		},
	});

	// Add an interceptor to automatically add the token to the request headers
	axiosInstance.interceptors.request.use(
		(config) => {
			const token = getCookie('accessToken');
			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
			}
			return config;
		},
		(error) => {
			return Promise.reject(error);
		}
	);
