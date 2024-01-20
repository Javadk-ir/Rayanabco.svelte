import type { PageServerLoad, Actions } from './$types';
import {orderModel} from '$lib/models/orderModel'
import cryptr from "cryptr"
const Cryptr = new cryptr('myTotallySecretKey');

export const load: PageServerLoad = async function({ params}): Promise<any> {
        
    const id: string = params.userid
    const user: any = await orderModel.findOne({ name: id })

    const password: any = Cryptr.decrypt(user.password)
    return {
        user: JSON.parse(JSON.stringify(user)),
        password: password
    }

}


    export const actions = {
        edit: async ({ cookies, request, params }) => {
        const data: any = await request.formData();
        try{
            const id = params.userid
  
                await orderModel.findOneAndUpdate({name: id}, {
                name: data.get('name'),
                userID:  data.get('userID'),
                password: Cryptr.encrypt(data.get('password')),
                email:  data.get('email'),
                postcode:  data.get('postcode'),
                addressbar:  data.get('addressbar'),
                info:  data.get('info'),
                class:  data.get('class'),
                phoneNumber:  data.get('phoneNumber'),
                childProffesion:  data.get('childProffesion'),
                parentProffesion:  data.get('parentProffesion'),
                })

                return { success: true }
            }catch(err){
                console.log(err)
            }
        }
    } satisfies Actions;
    