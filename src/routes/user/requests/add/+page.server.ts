import type { PageServerLoad, Actions } from './$types';
import { requestsModel } from '$lib/models/requestsModel';
import { envelopeNumberModel } from '$lib/models/envelopeNumberModel';


export const load: PageServerLoad = async function (event): Promise<any> {
    //user information
    const client: Object | any = event.locals.client

    return {
        client: structuredClone(client)
    }
}


export const actions = {
    upload: async ({ cookies, request, locals }) => {
        //Get Form Data
        const data: any = await request.formData();
        const client:any = locals.client

        const reqnumbere: any = await envelopeNumberModel.findOne({ _id: "64d4870e4e36481cd858e835" });

        let start = await data.get('morekhasistart')
        let end = await data.get('morekhasiend')

        if (start.length < 2) {
            start = undefined
        }
        if (end.length < 2) {
            end = undefined
        }
        const newRequestsModel = new requestsModel({
            type: await data.get('category'),
            caption: await data.get('caption'),
            reqnumber: reqnumbere.number,
            nextstep: 'سرپرست',
            bywho: client.name,
            bywhochildprofession: client.childProffesion,
            bywhoparentprofession: client.parentProffesion,
            startdate: start,
            enddate: end,
            priority: await data.get('priority'),
        });

        try{
            // added to Database
            await requestsModel.create(newRequestsModel);
            await envelopeNumberModel.findByIdAndUpdate("64d4870e4e36481cd858e835", {
                $inc: {
                  number: 1,
                },
              });
            return { success: true }
        }catch(error){
            console.warn(error)
        }
    }
} satisfies Actions;

