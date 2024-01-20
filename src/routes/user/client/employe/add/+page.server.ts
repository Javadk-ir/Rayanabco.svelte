import type { PageServerLoad, Actions } from './$types';
import {userModel} from '$lib/models/userModel'
import cryptr from "cryptr"
const Cryptr = new cryptr('myTotallySecretKey');
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

        //Define DB settings
        const newUploadedUserInformation = new userModel({
            name: data.get('name'),
            picture: "defualt-img.png",
            userID:  data.get('userID'),
            password: Cryptr.encrypt(data.get('password')),
            email:  data.get('email'),
            class:  data.get('class'),
            phoneNumber:  data.get('phoneNumber'),
            childProffesion:  data.get('childProffesion'),
            parentProffesion:  data.get('parentProffesion'),
        });
        try{
            // // added to Database
            await userModel.create(newUploadedUserInformation);
            // // added to Cloud Storage

            return { success: true }
        }catch(error){
            console.warn(error)
        }
    }
} satisfies Actions;
