import type { PageServerLoad } from './$types';
import { requestsModel } from '$lib/models/requestsModel'
export const load = (async (event) => {
    const request: any[] = await requestsModel.aggregate([{ $sort: { createdAt: -1 } }]).exec();
    const client: Object | any = event.locals.client

    return {
        client: structuredClone(client),
        request: structuredClone(request),
    }
}) satisfies PageServerLoad;

