import { jwtDecode } from 'jwt-decode';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// TYPES

type DecodedToken = {
	userId: string;
	username: string;
	iat: number;
};

// MIDDLEWARE

export async function middleware(req: NextRequest) {
	const token = req.cookies.get('accessToken')?.value;

	if (!token) {
		return redirectToLogin(req);
	}

	if (req.nextUrl.pathname.startsWith('/articles/edit')) {
		const authorId = req.cookies.get('authorId')?.value;
		if (authorId && !(await verifyAuthor(authorId, token))) {
			return redirectToArticle(req);
		}
	}

	return NextResponse.next();
}

// FUNCTIONS

async function verifyAuthor(authorId: string, token: string): Promise<boolean> {
	const decodedToken = jwtDecode<DecodedToken>(token);
	return authorId === decodedToken.userId;
}

// REGIRECTS

function redirectToLogin(req: NextRequest) {
	const loginUrl = new URL('/login', req.url);
	return NextResponse.redirect(loginUrl);
}

function redirectToArticle(req: NextRequest) {
	const slug = req.nextUrl.pathname.split('/').pop();
	const articleUrl = new URL(`/articles/${slug}`, req.url);
	return NextResponse.redirect(articleUrl);
}

// CONFIG

export const config = {
	matcher: ['/articles/create', '/articles/edit/:path*', '/profile'],
};
