import type { PageServerLoad, Actions } from './$types';
import {productModel} from '$lib/models/productModel'
export const load = (async (event) => {
    const products: any[] = await productModel.aggregate([{ $sort: { createdAt: -1 } }]).exec();
    const client: Object | any = event.locals.client

    return {
        client: structuredClone(client),
        product: structuredClone(products),
    }
}) satisfies PageServerLoad;




// fromwehre: { type: String },
// towhere: { type: String },
// bywho: { type: String },
// caption: { type: String },
// caption2: { type: String },
// caption2Image: { type: String },
// units: { type: String },