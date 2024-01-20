import type { PageServerLoad, Actions } from './$types';
import { productModel } from '$lib/models/productModel';
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
        //Get images Data from Form
        const productImageInformation0 = data.get('image0')
        const productImageInformation1 = data.get('image1')
        const productImageInformation2 = data.get('image2')
        const productImageInformation3 = data.get('image3')
        //set defualt value for images name
        let productImageName0: any, 
        productImageName1: any , 
        productImageName2: any, 
        productImageName3: any;

        if(productImageInformation0.size > 0){
            const productImageBinary0 = new Uint8Array(await productImageInformation0.arrayBuffer());
            productImageName0 = productImageInformation0.size + productImageInformation0.size+ 'Hop' + productImageInformation0.lastModified+ 'R' + productImageInformation0.name
            // added to Cloud Storage
            await UploadToCloud(productImageBinary0, productImageName0, 'mahsolat', 'rayanabcom')
        }else{
            productImageName0 = undefined
        }
        if(productImageInformation1.size > 0){
            const productImageBinary1 = new Uint8Array(await productImageInformation1.arrayBuffer());
            productImageName1 = productImageInformation1.size + productImageInformation1.size+ 'Hop' + productImageInformation1.lastModified+ 'R' + productImageInformation1.name
            // added to Cloud Storage
            await UploadToCloud(productImageBinary1, productImageName1, 'mahsolat', 'rayanabcom')
        }else{
            productImageName1 = undefined
        }
        if(productImageInformation2.size > 0){
            const productImageBinary2 = new Uint8Array(await productImageInformation2.arrayBuffer());
            productImageName2 = productImageInformation2.size + productImageInformation2.size+ 'Hop' + productImageInformation2.lastModified+ 'R' + productImageInformation2.name
            // added to Cloud Storage
            await UploadToCloud(productImageBinary2, productImageName2, 'mahsolat', 'rayanabcom')
        }else{
            productImageName2 = undefined
        }
        if(productImageInformation3.size > 0){
            // image binary
            const productImageBinary3 = new Uint8Array(await productImageInformation3.arrayBuffer());
            // image name
            productImageName3 = productImageInformation3.size + productImageInformation3.size+ 'Hop' + productImageInformation3.lastModified+ 'R' + productImageInformation3.name
            // // added to Cloud Storage
            await UploadToCloud(productImageBinary3, productImageName3, 'mahsolat', 'rayanabcom')
        }else{
            productImageName3 = undefined
        }
        
          // new product values
          const newUploadedproductInformation = new productModel({
            title: data.get('title'),
            image: [
                productImageName0,
                productImageName1,
                productImageName2,
                productImageName3
            ],
            caption: data.getAll('caption'),
            captionTitle: data.getAll('captionTitle'),
            keyinfo: data.getAll('keyinfo'),
            category: data.get('category'),
        
            G16B: data.get('G16B'),
            G32B: data.get('G32B'),
            G64B: data.get('G64B'),
            G128B: data.get('G128B'),
            G256B: data.get('G256B'),
            G512B: data.get('G512B'),
            T1B: data.get('T1B'),
            T2B: data.get('T2B'),
        
        
        
            detail: {
              SpeedStandard: data.get('SpeedStandard'),
              osSupport: data.get('osSupport'),
              waterprof: data.get('waterprof'),
              ghobarprof: data.get('ghobarprof'),
              zarbeprof: data.get('zarbeprof'),
              light: data.get('light'),
              steeltype: data.get('steeltype'),
              canotg: data.get('canotg'),
              color: data.get('color'),
              writingspeed: data.get('writingspeed'),
              Readingspeed: data.get('Readingspeed'),
              type: data.get('type'),
              Capacity: data.get('Capacity'),
              formdactor: data.get('formdactor'),
              connector: data.get('connector'),
              weight: data.get('weight'),
              size: data.get('size'),
            },
          });
        try{
            // // added to Database
            await productModel.create(newUploadedproductInformation);

            return { success: true }
        }catch(error){
            console.warn(error)
        }
    }
} satisfies Actions;

