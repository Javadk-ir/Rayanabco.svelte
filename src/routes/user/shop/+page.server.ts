import type { PageServerLoad,Actions } from './$types';
import { orderinfoModel } from '$lib/models/orderinfoModel'
import { DownloadFromCloud } from '$lib/Cloud/CloudDownloader'

export const load = (async (event) => {
    const client: object | any = event.locals.client;
    const orderinfos: any[] = await orderinfoModel.aggregate([{ $sort: { createdAt: -1 } }]).exec();

    return {
        client: structuredClone(client),
        orderinfo: structuredClone(orderinfos)
    };
}) satisfies PageServerLoad;


export const actions = {
    download: async ({ cookies, request }) => {
        //Get Form Data
        const data: any = await request.formData();
        //download From Cloud Storage
        const fileInformation = await data.get('ّFileToDownload')
        try {
            //Download File Form Cloud Storage
            let url: string = await DownloadFromCloud(fileInformation, 'Orderinfo', 'rayanab' )
            return { success: true as boolean, url: url as string }

        } catch (error) {
            console.warn(error)
        }
    },
    baygani: async ({ cookies, request }) => {
        //Get Form Data
        const data: any = await request.formData();
        const id = await data.get('bayganiid')
        //Delete From Cloud Storage
        try {
            await orderinfoModel.findOneAndUpdate({ordernumber: id}, {
                nextstep: 'بایگانی',
              });
              return { success: true as boolean}
        } catch (error) {
            console.warn(error)
        }
    }
} satisfies Actions;

