import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('Content-Type', 'application/json');

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  if (request.nextUrl.pathname.endsWith('/information')) {
    return NextResponse.redirect(
      new URL('/information/characters', request.url)
    );
  }

  if (request.nextUrl.pathname.startsWith('/information')) {
    const user = {
      name: 'John Doe',
      authenticated: process.env.NEXT_PUBLIC_AUTHENTICATED,
    };
    if (user.authenticated !== 'true') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return response;
}

// the middleware will act in the routes that matches with routes included in the matcher
export const config = {
  matcher: [
    '/information/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico).*)', // don't act in static content
  ],
};
