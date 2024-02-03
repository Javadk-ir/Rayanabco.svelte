import type { PageServerLoad, Actions } from './$types';
import { requnitsModel } from '$lib/models/requnitsModel';
import {DownloadFromCloud} from '$lib/Cloud/CloudDownloader'
export const load = (async ({params, locals}) => {
    const request: any = await requnitsModel.findOne({ number: params.requnitid });
    const client: any = locals.client
    return {request: JSON.parse(JSON.stringify(request)), client: structuredClone(client)};
}) satisfies PageServerLoad;


export const actions = {
    shopreject: async ({ cookies, request, locals, params }: any) => {
        const data: any = await request.formData();
        const client: any = locals.client
        const id = params.requnitid

        await requnitsModel.findOneAndUpdate({number: id}, {
            nextstep: 'رد شده',
            rejector: client.name,
            rejectreasson: await data.get('rejectreasson'),
            rejectbydate: new Date()
          });
          return{success: true}
    },
    download: async ({ cookies, request }) => {
        //Get Form Data
        const data: any = await request.formData();
        const fileInformation = data.get('ّFileToDownload')
        //Delete From Cloud Storage
        try {
            //Download File Form Cloud Storage
            let url: string = await DownloadFromCloud(fileInformation, 'Requnits', 'rayanab' )


            return { success: true as boolean, url: url as string }

        } catch (error) {
            console.warn(error)
        }
    },
    first: async ({ cookies, request, locals, params }: any) => {
        const data: any = await request.formData();
        const client: any = locals.client
        const id = params.requnitid

        await requnitsModel.findOneAndUpdate({number: id}, {
            nextstep: 'مجید سروری',
            info1: await data.get('caption'),
          });
          return{success: true}
    },
    second: async ({ cookies, request, locals, params }: any) => {
        const id = params.requnitid

        await requnitsModel.findOneAndUpdate({number: id}, {
            nextstep: 'اتمام',
          });
          return{success: true}
    },
} satisfies Actions;

