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

        const ejarename = data.get('ejarename')
        const cartmeli = data.get('cartmeli')
        const shenasname = data.get('shenasname')
        const govvahimahzari = data.get('govvahimahzari')
        const parvaneh = data.get('parvaneh')
        //set defualt value for images name
        let ejarenameName: any, 
        cartmeliName: any , 
        shenasnameName: any, 
        govvahimahzariName: any,
        parvanehName: any;

        if(ejarename.size > 0){
            const productImageBinary0 = new Uint8Array(await ejarename.arrayBuffer());
            ejarenameName = ejarename.size + ejarename.size+ 'Hop' + ejarename.lastModified+ 'R' + ejarename.name
            // added to Cloud Storage
            await UploadToCloud(productImageBinary0, ejarenameName, 'Order', 'rayanab')
        }else{
            ejarenameName = undefined
        }
        if(cartmeli.size > 0){
            const productImageBinary1 = new Uint8Array(await cartmeli.arrayBuffer());
            cartmeliName = cartmeli.size + cartmeli.size+ 'Hop' + cartmeli.lastModified+ 'R' + cartmeli.name
            // added to Cloud Storage
            await UploadToCloud(productImageBinary1, cartmeliName, 'Order', 'rayanab')
        }else{
            cartmeliName = undefined
        }
        if(shenasname.size > 0){
            const productImageBinary2 = new Uint8Array(await shenasname.arrayBuffer());
            shenasnameName = shenasname.size + shenasname.size+ 'Hop' + shenasname.lastModified+ 'R' + shenasname.name
            // added to Cloud Storage
            await UploadToCloud(productImageBinary2, shenasnameName, 'Order', 'rayanab')
        }else{
            shenasnameName = undefined
        }
        if(govvahimahzari.size > 0){
            // image binary
            const productImageBinary3 = new Uint8Array(await govvahimahzari.arrayBuffer());
            // image name
            govvahimahzariName = govvahimahzari.size + govvahimahzari.size+ 'Hop' + govvahimahzari.lastModified+ 'R' + govvahimahzari.name
            // // added to Cloud Storage
            await UploadToCloud(productImageBinary3, govvahimahzariName, 'Order', 'rayanab')
        }else{
            govvahimahzariName = undefined
        }
        if(parvaneh.size > 0){
            // image binary
            const productImageBinary3 = new Uint8Array(await parvaneh.arrayBuffer());
            // image name
            parvanehName = parvaneh.size + parvaneh.size+ 'Hop' + parvaneh.lastModified+ 'R' + parvaneh.name
            // // added to Cloud Storage
            await UploadToCloud(productImageBinary3, parvanehName, 'Order', 'rayanab')
        }else{
            parvanehName = undefined
        }
    
      
          // new user values
          const newhogogh = new orderModel({
            type: 'haghighi',
            user: data.get('name'),
            userphoneNumber: data.get('phoneNumber'),
            ejarename: ejarenameName,
            cartmeli: cartmeliName,
            shenasname: shenasnameName,
            govvahimahzari: govvahimahzariName,
            parvaneh: parvanehName,
      
            info: data.get('info'),
      
            city: data.get('city'),
            name: data.get('name'),
            userID: data.get('userID'),
            password: Cryptr.encrypt(data.get('password')),
            email: data.get('email'),
            class: 'D',
            shomareeghtesadi: data.get('shomareeghtesadi'),
            cartmelineveshte: data.get('cartmelineveshte'),
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

