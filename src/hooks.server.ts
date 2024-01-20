import { start_mongo } from '$lib/db/mongo'
import { user } from '$lib/db/collections'

import { verifyJWT } from '$lib/token';
import { error, type Handle } from '@sveltejs/kit';

start_mongo().then(():void => {
    console.log('Mongo Started successfully');
})


export const handle: Handle =  async ({ event, resolve}): Promise<any> => {
    const { url, locals, request, cookies } = event;
	let authToken: string | undefined;

	if (cookies.get('token')) {
		authToken = cookies.get('token');
	} else if (request.headers.get('Authorization')?.startsWith('Bearer ')) {
		authToken = request.headers.get('Authorization')?.substring(7);
	}

    if (
		!authToken &&
		(url.pathname.startsWith('/user') || url.pathname.startsWith('/logout'))
	) {
		throw error(401, 'You are not logged in. Please provide a Email and Password to gain access.');
	}
    
	try {
		if (authToken) {
			const  sub  = await verifyJWT<any>(authToken);
			const user2 = await user.findOne({ email: sub.email});

			if (!user2) {
				throw error(401, 'User belonging to this token no longer exists');
			}

			event.locals.client = user2;
		}
	} catch (err: any) {
		if (url.pathname.startsWith('/user')) {
			throw error(401, "Token is invalid or user doesn't exists");
		}
	}

	const response = await resolve(event);

	return response;
}