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

        const asasname = data.get('asasname')
        const agahitasis = data.get('agahitasis')
        const taqiratmondarej = data.get('taqiratmondarej')
        const arzeshafzode = data.get('arzeshafzode')
        const sanadmalekiyat = data.get('sanadmalekiyat')
        const copycardmeli = data.get('sanadmalekiyat')

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
        user: data.get('name'),
  
        userphoneNumber: data.get('phoneNumber'),
        copycardmeli: copycardmeliName,
        sanadmalekiyat: sanadmalekiyatName,
        arzeshafzode: arzeshafzodeName,
        taqiratmondarej: taqiratmondarejName,
        agahitasis: agahitasisName,
        asasname: asasnameName,
        info: data.get('info'),
        shomareeghtesadi: data.get('shomareeghtesadi'),
        agahitasisneveshte: data.get('agahitasisneveshte'),
  
        city: data.get('city'),
        name: data.get('name'),
        userID: data.get('userID'),
        password: Cryptr.encrypt(data.get('password')),
        email: data.get('email'),
        class: 'D',
        phoneNumber: data.get('phoneNumber'),
        childProffesion: 'مشتری',
        parentProffesion: 'مشتری',
        isvalidclient: 'true',
        addressbar: data.get('addressbar'),
        companyname: data.get('companyname'),
        namecompany: data.get('namecompany'),
        postcode: data.get('postcode'),
        resphonenumber: data.get('resphonenumber'),
        sentoption1: data.get('sentoption1'),
        sentoptioncaption1: data.get('sentoptioncaption1'),
        sentoption2: data.get('sentoption2'),
        sentoptioncaption2: data.get('sentoptioncaption2'),
        sentoption3: data.get('sentoption3'),
        sentoptioncaption3: data.get('sentoptioncaption3'),
  
  
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

