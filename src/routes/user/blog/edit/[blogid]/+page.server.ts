import type { PageServerLoad, Actions } from './$types';
import {blogModel} from '$lib/models/blogModel'


    export const load: PageServerLoad = async function({ params}): Promise<any> {
        
        const id = params.blogid
        const blog = await blogModel.findOne({ title: id })

        return {
            blog: JSON.parse(JSON.stringify(blog)),
        }
    
    }

    export const actions = {
        edit: async ({ cookies, request }) => {
        const data: any = await request.formData();
        try{
            const id: any = data.get('titlemain')
                await blogModel.findOneAndUpdate({title: id}, {
                    title: data.get('title'),
                    matn: data.get('matn'),
                    matnkholase: data.get('kholasematn'),
                    tags: data.getAll('tags'),
                })

                return { success: true }
            }catch(err){
                console.log(err)
            }
        }
    } satisfies Actions;
    