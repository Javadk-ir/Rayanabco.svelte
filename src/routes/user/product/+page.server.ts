import type { PageServerLoad, Actions } from './$types';
import { DeleteFromCloud } from '$lib/Cloud/CloudDeleter'

import { productModel } from '$lib/models/productModel'

export const load: PageServerLoad = async function (event): Promise<any> {

    const product: any[] = await productModel.aggregate([{ $sort: { createdAt: -1 } }]).exec();
    const client: Object | any = event.locals.client

    return {
        product: structuredClone(product),
        client: structuredClone(client)
    }
}

export const actions = {
    delete: async ({ cookies, request }) => {
    try{
        const data: any = await request.formData();
        const id: string =  data.get('name')
        const documentimage: any = await productModel.findOne({title: id})
        
        if(documentimage.image[0] != null) {
            await DeleteFromCloud(documentimage.image[0], 'mahsolat', 'rayanabcom' )
        }
        if(documentimage.image[1] != null) {
            await DeleteFromCloud(documentimage.image[1], 'mahsolat', 'rayanabcom' )
        }
        if(documentimage.image[2] != null) {
            await DeleteFromCloud(documentimage.image[2], 'mahsolat', 'rayanabcom' )
        }
        if(documentimage.image[3] != null) {
            await DeleteFromCloud(documentimage.image[3], 'mahsolat', 'rayanabcom' )
        }
        await productModel.findOneAndDelete({title: id})
        return { success: true }
        }catch(err){
            console.log(err)
        }
    }
} satisfies Actions;
