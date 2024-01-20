import type { PageServerLoad, Actions } from './$types';
import {orderModel} from '$lib/models/orderModel'
export const load = (async (event) => {
    const user: any[] = await orderModel.aggregate([{ $sort: { createdAt: -1 } }]).exec();
    
    const client: Object | any = event.locals.client

    let allUsers: number = user.length,
    morekhasi: number = 0,
    highPermission: number = 0

    
    for (var val of user) {
        if(val.morekhasi){
            morekhasi = Number(morekhasi) + Number(val.morekhasi)
        }
        if(val.class == "A" || val.class == "B"){
            highPermission = highPermission + 1
        }
    }


    return {
        client: structuredClone(client),
        user: structuredClone(user),
        allUsers: allUsers,
        morekhasi: morekhasi,
        highPermission: highPermission
    }
}) satisfies PageServerLoad;



export const actions = {
    delete: async ({ cookies, request }) => {
    try{
        const data: any = await request.formData();
        const id: string =  data.get('name')

        await orderModel.findOneAndDelete({name: id})
        return { success: true }
        }catch(err){
            console.log(err)
        }
    }
} satisfies Actions;