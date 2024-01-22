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
		throw error(401, 'وارد حساب کاربری خود نشده اید. وارد صفحه ورود شده و اطلاعات خودرا تکمیل کنید.');
	}
    
	try {
		if (authToken) {
			const  sub  = await verifyJWT<any>(authToken);
			const user2 = await user.findOne({ email: sub.email});

			if (!user2) {
				throw error(401, 'محتویات وصل شده به این کاربر نامعتبر میباشد');
			}

			event.locals.client = user2;
		}
	} catch (err: any) {
		if (url.pathname.startsWith('/user')) {
			throw error(401, "کلید نا معتبر است یا کاربر غیر مجاز است");
		}
	}

	const response = await resolve(event);

	return response;
}