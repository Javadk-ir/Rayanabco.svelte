import type { PageServerLoad } from './$types';
import { orderinfoModel } from '$lib/models/orderinfoModel'

export const load = (async (event) => {
    const client: object | any = event.locals.client;
    const orderinfos: any[] = await orderinfoModel.aggregate([{ $sort: { createdAt: -1 } }]).exec();

    return {
        client: structuredClone(client),
        orderinfo: structuredClone(orderinfos)
    };
}) satisfies PageServerLoad;