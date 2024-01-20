import type { PageServerLoad, Actions } from './$types';
import { fileModel } from '$lib/models/fileModel';
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
        const fileInformation = data.get('file')
        //Convert File to binary string
        const fileBinary = new Uint8Array(await fileInformation.arrayBuffer());
        //Set defualt name for Stroing into Cloud and DB
        const fileName = fileInformation.size + fileInformation.lastModified + new Date() + fileInformation.name

        //Define DB settings
        const newUploadedFileInformation = new fileModel({
            filetitle: data.get('filetitle'),
            filename: fileName,
            filesentby: data.get('filesentby'),
            filegoingto: data.getAll('filegoingto'),
            filesize: fileInformation.size,
            category: data.get('category'),
            filepath:  fileName,
        });
        try{
            // // added to Database
            await fileModel.create(newUploadedFileInformation);
            // // added to Cloud Storage
            await UploadToCloud(fileBinary, fileName, 'Files' , 'rayanab')
            return { success: true }
        }catch(error){
            console.warn(error)
        }
    }
} satisfies Actions;

