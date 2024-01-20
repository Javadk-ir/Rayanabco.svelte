import type { PageServerLoad, Actions } from './$types';
import { blogModel } from '$lib/models/blogModel';
import { UploadToCloud } from '$lib/Cloud/CloudUploader'
export const load: PageServerLoad = async function (event): Promise<any> {
    //user information
    const client: Object | any = event.locals.client

    return {
        client: structuredClone(client)
    }
}


export const actions = {
    upload: async ({ cookies, request }) => {
        //Get Form Data
        const data: any = await request.formData();
        //Get File Data from Form
        const blogImageInformation = data.get('image')
        //Convert File to binary string
        const blogImageBinary = new Uint8Array(await blogImageInformation.arrayBuffer());
        //Set defualt name for Stroing into Cloud and DB
        const blogImageName = blogImageInformation.size + blogImageInformation.size+ 'Hop' + blogImageInformation.lastModified+ 'R' + blogImageInformation.name

        //Define DB settings
        const newUploadedBlogInformation = new blogModel({
            title: data.get('title'),
            matn: data.get('matn'),
            tarikh: new Intl.DateTimeFormat("fa-IR").format(new Date()),
            submmitedby: data.get('sender'),
            images: blogImageName,
            matnkholase: data.get('kholasematn'),
            tags: data.getAll('tags'),
        });
        try{
            // // // added to Database
            await blogModel.create(newUploadedBlogInformation);
            // // // added to Cloud Storage
            await UploadToCloud(blogImageBinary, blogImageName, 'blog', 'rayanabcom')

            return { success: true }
        }catch(error){
            console.warn(error)
        }
    }
} satisfies Actions;

