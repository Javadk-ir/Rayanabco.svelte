import type { PageServerLoad, Actions } from './$types';
import { DeleteFromCloud } from '$lib/Cloud/CloudDeleter'

import { blogModel } from '$lib/models/blogModel'

export const load: PageServerLoad = async function (event): Promise<any> {

    const blog: any[] = await blogModel.aggregate([{ $sort: { createdAt: -1 } }]).exec();
    const client: Object | any = event.locals.client

    return {
        blog: structuredClone(blog),
        client: structuredClone(client)
    }
}

export const actions = {
    delete: async ({ cookies, request }) => {
    try{
        const data: any = await request.formData();
        const id: string =  data.get('name')
        const documentimage: any = await blogModel.findOne({title: id})
        

        await DeleteFromCloud(documentimage.images, 'blog', 'rayanabcom' )
        await blogModel.findOneAndDelete({title: id})
        return { success: true }
        }catch(err){
            console.log(err)
        }
    }
} satisfies Actions;
