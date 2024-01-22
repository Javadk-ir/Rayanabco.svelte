import type { PageServerLoad, Actions } from './$types';
import { orderModel } from '$lib/models/orderModel'
import { orderinfoModel } from '$lib/models/orderinfoModel'
import { orderNumberModel } from '$lib/models/orderNumberModel'
import { UploadToCloud } from '$lib/Cloud/CloudUploader'
import cryptr from "cryptr"
const Cryptr = new cryptr('myTotallySecretKey');

export const load = (async (event) => {
    const customer: any[] = await orderModel.aggregate([{ $sort: { createdAt: -1 } }]).exec();
    const client: any = event.locals.client
    return {
        customer: structuredClone(customer),
        client: structuredClone(client)
    }
}) satisfies PageServerLoad;




export const actions = {
    upload: async ({ cookies, request, locals }: any) => {
        //Get Form Data
        const data: any = await request.formData();
        const ordernumberr: any = await orderNumberModel.findOne({ _id: "652266a6a8fba3ec6aea446f" });
        const queyuser = data.get('name')
        let info: any = await orderModel.findOne({ name: queyuser });

        //Get images Data from Form
        const pishfactor = data.get('pishfactor')
        const pishfactor1 = data.get('pishfactor1')
        const pishfactor2 = data.get('pishfactor2')
        const pishfactor3 = data.get('pishfactor3')

        //set defualt value for images name
        let pishfactorName: any, 
        pishfactor1Name: any, 
        pishfactor2Name: any, 
        pishfactor3Name: any;

        if(pishfactor.size > 0){
            const productImageBinary0 = new Uint8Array(await pishfactor.arrayBuffer());
            pishfactorName = pishfactor.size + pishfactor.size+ 'Hop' + pishfactor.lastModified+ 'R' + pishfactor.name
            // added to Cloud Storage
            await UploadToCloud(productImageBinary0, pishfactorName, 'Orderinfo', 'rayanab')
        }else{
            pishfactorName = undefined
        }
        if(pishfactor1.size > 0){
            const productImageBinary1 = new Uint8Array(await pishfactor1.arrayBuffer());
            pishfactor1Name = pishfactor1.size + pishfactor1.size+ 'Hop' + pishfactor1.lastModified+ 'R' + pishfactor1.name
            // added to Cloud Storage
            await UploadToCloud(productImageBinary1, pishfactor1Name, 'Orderinfo', 'rayanab')
        }else{
            pishfactor1Name = undefined
        }
        if(pishfactor2.size > 0){
            const productImageBinary2 = new Uint8Array(await pishfactor2.arrayBuffer());
            pishfactor2Name = pishfactor2.size + pishfactor2.size+ 'Hop' + pishfactor2.lastModified+ 'R' + pishfactor2.name
            // added to Cloud Storage
            await UploadToCloud(productImageBinary2, pishfactor2Name, 'Orderinfo', 'rayanab')
        }else{
            pishfactor2Name = undefined
        }
        if(pishfactor3.size > 0){
            // image binary
            const productImageBinary3 = new Uint8Array(await pishfactor3.arrayBuffer());
            // image name
            pishfactor3Name = pishfactor3.size + pishfactor3.size+ 'Hop' + pishfactor3.lastModified+ 'R' + pishfactor3.name
            // // added to Cloud Storage
            await UploadToCloud(productImageBinary3, pishfactor3Name, 'Orderinfo', 'rayanab')
        }else{
            pishfactor3Name = undefined
        }

    
        console.log(info)
      
          // new user values
          const newhogogh = new orderinfoModel({
            ordernumber: ordernumberr.number,
            submittedby : locals.client.name,
            buyerinfo: data.get('buyerinfo'),
            buyername: data.get('name'),
            takhfif: data.get('takhfif'),
            price: data.get('price'),
            phoneNumber: info.phoneNumber,
            name : info.name,
            user: info.email,
            city: info.city,
            addressbar: info.addressbar,
            companyname: info.companyname,
            namecompany: info.namecompany,
            postcode: info.postcode,
            resphonenumber: info.resphonenumber,
            sentoption1: info.sentoption1,
            sentoptioncaption1: info.sentoptioncaption1,
            sentoption2: info.sentoption2,
            sentoptioncaption2: info.sentoptioncaption2,   
            sentoption3: info.sentoption3,
            sentoptioncaption3: info.sentoptioncaption3,
            nextstep: 'مدیریت فروش',
            pishfactor: pishfactorName,
            pishfactor1: pishfactor1Name,
            pishfactor2: pishfactor2Name,
            pishfactor3: pishfactor3Name
          });
      
          try {
            await orderinfoModel.create(newhogogh);
            console.log(newhogogh)
            return{success : true}
            
          } catch (error) {
            console.log(error);
          }

    }
} satisfies Actions;

