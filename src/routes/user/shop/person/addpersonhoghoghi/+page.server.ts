import type { PageServerLoad, Actions } from './$types';
import { orderModel } from '$lib/models/orderModel'
import { UploadToCloud } from '$lib/Cloud/CloudUploader'
import cryptr from "cryptr"
const Cryptr = new cryptr('myTotallySecretKey');

export const actions = {
    upload: async ({ cookies, request }) => {
        //Get Form Data
        const data: any = await request.formData();
        
        //Get images Data from Form
        const asasname = await data.get('asasname')
        const agahitasis = await data.get('agahitasis')
        const taqiratmondarej = await data.get('taqiratmondarej')
        const arzeshafzode = await data.get('arzeshafzode')
        const sanadmalekiyat = await data.get('sanadmalekiyat')
        const copycardmeli = await data.get('sanadmalekiyat')

        //set defualt value for images name
        let asasnameName: any, 
        agahitasisName: any , 
        taqiratmondarejName: any, 
        arzeshafzodeName: any,
        sanadmalekiyatName: any,
        copycardmeliName: any;


        if(asasname.size > 0){
            const productImageBinary0 = new Uint8Array(await asasname.arrayBuffer());
            asasnameName = asasname.size + asasname.size+ 'Hop' + asasname.lastModified+ 'R' + asasname.name
            // added to Cloud Storage
            await UploadToCloud(productImageBinary0, asasnameName, 'Order', 'rayanab')
        }else{
            asasnameName = undefined
        }
        if(copycardmeli.size > 0){
            const productImageBinary0 = new Uint8Array(await copycardmeli.arrayBuffer());
            copycardmeliName = copycardmeli.size + copycardmeli.size+ 'Hop' + copycardmeli.lastModified+ 'R' + copycardmeli.name
            // added to Cloud Storage
            await UploadToCloud(productImageBinary0, copycardmeliName, 'Order', 'rayanab')
        }else{
            copycardmeliName = undefined
        }
        if(agahitasis.size > 0){
            const productImageBinary1 = new Uint8Array(await agahitasis.arrayBuffer());
            agahitasisName = agahitasis.size + agahitasis.size+ 'Hop' + agahitasis.lastModified+ 'R' + agahitasis.name
            // added to Cloud Storage
            await UploadToCloud(productImageBinary1, agahitasisName, 'Order', 'rayanab')
        }else{
            agahitasisName = undefined
        }
        if(taqiratmondarej.size > 0){
            const productImageBinary2 = new Uint8Array(await taqiratmondarej.arrayBuffer());
            taqiratmondarejName = taqiratmondarej.size + taqiratmondarej.size+ 'Hop' + taqiratmondarej.lastModified+ 'R' + taqiratmondarej.name
            // added to Cloud Storage
            await UploadToCloud(productImageBinary2, taqiratmondarejName, 'Order', 'rayanab')
        }else{
            taqiratmondarejName = undefined
        }
        if(arzeshafzode.size > 0){
            // image binary
            const productImageBinary3 = new Uint8Array(await arzeshafzode.arrayBuffer());
            // image name
            arzeshafzodeName = arzeshafzode.size + arzeshafzode.size+ 'Hop' + arzeshafzode.lastModified+ 'R' + arzeshafzode.name
            // // added to Cloud Storage
            await UploadToCloud(productImageBinary3, arzeshafzodeName, 'Order', 'rayanab')
        }else{
            arzeshafzodeName = undefined
        }
        if(sanadmalekiyat.size > 0){
            // image binary
            const productImageBinary3 = new Uint8Array(await sanadmalekiyat.arrayBuffer());
            // image name
            sanadmalekiyatName = sanadmalekiyat.size + sanadmalekiyat.size+ 'Hop' + sanadmalekiyat.lastModified+ 'R' + sanadmalekiyat.name
            // // added to Cloud Storage
            await UploadToCloud(productImageBinary3, sanadmalekiyatName, 'Order', 'rayanab')
        }else{
            sanadmalekiyatName = undefined
        }
    
      
          // new user values
    const newhogogh = new orderModel({
        type: 'hoghoghi',
        user: await data.get('name'),
  
        userphoneNumber: await data.get('phoneNumber'),
        copycardmeli: copycardmeliName,
        sanadmalekiyat: sanadmalekiyatName,
        arzeshafzode: arzeshafzodeName,
        taqiratmondarej: taqiratmondarejName,
        agahitasis: agahitasisName,
        asasname: asasnameName,
        info: await data.get('info'),
        shomareeghtesadi: await data.get('shomareeghtesadi'),
        agahitasisneveshte: await data.get('agahitasisneveshte'),
  
        city: await data.get('city'),
        name: await data.get('name'),
        userID: await data.get('userID'),
        password: Cryptr.encrypt(await data.get('password')),
        email: await data.get('email'),
        class: 'D',
        phoneNumber: await data.get('phoneNumber'),
        childProffesion: 'مشتری',
        parentProffesion: 'مشتری',
        isvalidclient: 'true',
        addressbar: await data.get('addressbar'),
        companyname: await data.get('companyname'),
        namecompany: await data.get('namecompany'),
        postcode: await data.get('postcode'),
        resphonenumber: await data.get('resphonenumber'),
        sentoption1: await data.get('sentoption1'),
        sentoptioncaption1: await data.get('sentoptioncaption1'),
        sentoption2: await data.get('sentoption2'),
        sentoptioncaption2: await data.get('sentoptioncaption2'),
        sentoption3: await data.get('sentoption3'),
        sentoptioncaption3: await data.get('sentoptioncaption3'),
  
  
      });
      
          try {
            await orderModel.create(newhogogh);
            console.log('Done.')
            return{success : true}
            
          } catch (error) {
            console.log(error);
          }

    }
} satisfies Actions;

