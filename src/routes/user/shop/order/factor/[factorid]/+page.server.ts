import type { PageServerLoad } from './$types';
import { orderinfoModel } from '$lib/models/orderinfoModel'
export const load = (async ({ params }) => {
    const id = params.factorid
    const factor: any = await orderinfoModel.findOne({ ordernumber: id });

    return {factor: JSON.parse(JSON.stringify(factor))};
}) satisfies PageServerLoad;