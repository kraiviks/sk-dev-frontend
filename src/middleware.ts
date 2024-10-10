import { jwtDecode } from 'jwt-decode';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// TYPES

type DecodedToken = {
	userId: string;
	username: string;
	iat: number;
};

// CONSTANTS
const AUTH_CONDITIONS = ['/login', '/register'];
const PRIVATE_CONDITIONS = ['/articles/create', '/articles/edit', '/profile'];

// MIDDLEWARE

export async function middleware(req: NextRequest) {
	const token = req.cookies.get('accessToken')?.value;

	// Check if the path matches the routes in PRIVATE_CONDITIONS
	if (
		PRIVATE_CONDITIONS.some((condition) =>
			req.nextUrl.pathname.startsWith(condition)
		)
	) {
		// If there is no token, redirect to the login page
		if (!token) {
			return redirectToLogin(req);
		}

		// If the article is being edited, check if the user is the author
		if (req.nextUrl.pathname.startsWith('/articles/edit')) {
			const authorId = req.cookies.get('authorId')?.value;
			if (authorId && !(await verifyAuthor(authorId, token))) {
				return redirectToArticle(req);
			}
		}
	}

	// If the user is trying to access the login or register page and already has a token, redirect to the home page
	if (AUTH_CONDITIONS.includes(req.nextUrl.pathname)) {
		if (token) {
			return redirectToHome(req);
		}
	}

	return NextResponse.next();
}

// FUNCTIONS

async function verifyAuthor(authorId: string, token: string): Promise<boolean> {
	const decodedToken = jwtDecode<DecodedToken>(token);
	return authorId === decodedToken.userId;
}

// REDIRECTS

function redirectToLogin(req: NextRequest) {
	const loginUrl = new URL('/login', req.url);
	return NextResponse.redirect(loginUrl);
}

function redirectToArticle(req: NextRequest) {
	const slug = req.nextUrl.pathname.split('/').pop();
	const articleUrl = new URL(`/articles/${slug}`, req.url);
	return NextResponse.redirect(articleUrl);
}

function redirectToHome(req: NextRequest) {
	const homeUrl = new URL('/', req.url);
	return NextResponse.redirect(homeUrl);
}

// CONFIG

export const config = {
	matcher: ['/login', '/register', '/articles/create', '/articles/edit:path*', '/profile'],
};
