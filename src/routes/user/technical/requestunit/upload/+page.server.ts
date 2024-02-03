import type { PageServerLoad, Actions } from './$types';
import {productModel} from '$lib/models/productModel'
import {requnitsModel} from '$lib/models/requnitsModel'
import { UploadToCloud } from '$lib/Cloud/CloudUploader'
import { envelopeNumberModel } from '$lib/models/envelopeNumberModel';

export const load = (async (event) => {
    const products: any[] = await productModel.aggregate([{ $sort: { createdAt: -1 } }]).exec();
    const client: Object | any = event.locals.client

    return {
        client: structuredClone(client),
        product: structuredClone(products),
    }
}) satisfies PageServerLoad;


export const actions = {
    upload: async ({ cookies, request, locals }: any) => {
        //Get Form Data
        const data: any = await request.formData();
        const reqnumbere: any = await envelopeNumberModel.findOne({ _id: "64d4870e4e36481cd858e835" });

        let uni:any = [];
        let unuits:any = unuitser(uni)

        // make array of all unuits
        function unuitser(uni:any): any {
            for (let i = 0; i < data.getAll('counter'); i++){
                let unit = data.getAll(`unit${i}`)
                uni.push(unit);
            }
        }
        //Get File Data from Form
        const fileInformation = data.get('file')
        //Convert File to binary string
        const fileBinary = new Uint8Array(await fileInformation.arrayBuffer());
        //Set defualt name for Stroing into Cloud and DB
        const fileName = fileInformation.size + fileInformation.lastModified + new Date() + fileInformation.name

        //Define DB settings
        const newUploadedFileInformation = new requnitsModel({
            fromwehre: data.get('fromwhere'),
            towhere: data.get('towhere'),
            bywho: locals.client.name,
            caption: data.get('caption'),
            caption2: data.get('caption2'),
            caption2Image: fileName,
            units:  uni,
            nextstep: 'فاطمه خندانی',
            number: reqnumbere.number


        });
        try{
            console.log(newUploadedFileInformation)
            // added to Database
            await requnitsModel.create(newUploadedFileInformation);
            // added to Cloud Storage
            await envelopeNumberModel.findByIdAndUpdate("64d4870e4e36481cd858e835", {
                $inc: {
                  number: 1,
                },
              });
            await UploadToCloud(fileBinary, fileName, 'Requnits' , 'rayanab')
            return { success: true }
        }catch(error){
            console.warn(error)
        }
    }
} satisfies Actions;


