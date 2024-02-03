import type { PageServerLoad, Actions } from './$types';
import {requnitsModel} from '$lib/models/requnitsModel'
export const load = (async (event) => {
    const units: any[] = await requnitsModel.aggregate([{ $sort: { createdAt: -1 } }]).exec();
    const client: Object | any = event.locals.client

    return {
        client: structuredClone(client),
        units: structuredClone(units),
    }
}) satisfies PageServerLoad;

