import type { PageServerLoad } from './$types';
import { userModel } from '$lib/models/userModel'
export const load = (async () => {
    const users: any[] = await userModel.aggregate([{ $sort: { createdAt: -1 } }]).exec();
    
    return {
        users: structuredClone(users)
    }
}) satisfies PageServerLoad;