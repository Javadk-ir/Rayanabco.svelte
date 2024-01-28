import type { PageServerLoad, Actions} from './$types';
import { orderinfoModel } from '$lib/models/orderinfoModel'
import { UploadToCloud } from '$lib/Cloud/CloudUploader'


export const load = (async ({ params,locals }) => {
    const id = params.viewid
    const order: any = await orderinfoModel.findOne({ ordernumber: id });
    const client: any = locals.client


    return {order: JSON.parse(JSON.stringify(order)), client: JSON.parse(JSON.stringify(client))};
}) satisfies PageServerLoad;




export const actions = {
    shopManangementAccept: async ({ cookies, request, locals, params }: any) => {
        const data: any = await request.formData();
        const client: any = locals.client
        const id = params.viewid

        await orderinfoModel.findOneAndUpdate({ordernumber: id}, {
            sellcaption: data.get('sellcaption'),
            sellaccept: client.name,
            nextstep: 'اپلودمالی',
            sellacceptdate: new Date()
          });
          return{success: true}
    },
    shopcalcaccept: async ({ cookies, request, locals, params }: any) => {
        console.log('shopcalcaccept')
        const data: any = await request.formData();
        const client: any = locals.client
        const id = params.viewid

        let factor1Name: any,
        factor2Name: any,
        factor3Name: any,
        factor4Name: any;

        const factor1 = data.get('factor1')
        const factor2 = data.get('factor2')
        const factor3 = data.get('factor3')
        const factor4 = data.get('factor4')


        
        if(factor1.size > 0){
            const factor = new Uint8Array(await factor1.arrayBuffer());
            factor1Name = factor1.size + factor1.size+ 'Hop' + factor1.lastModified+ 'R' + factor1.name
            // added to Cloud Storage
            await UploadToCloud(factor, factor1Name, 'Orderinfo', 'rayanab')
        }else{
            factor1Name = undefined
        }
        if(factor2.size > 0){
            const factor = new Uint8Array(await factor2.arrayBuffer());
            factor2Name = factor2.size + factor2.size+ 'Hop' + factor2.lastModified+ 'R' + factor2.name
            // added to Cloud Storage
            await UploadToCloud(factor, factor2Name, 'Orderinfo', 'rayanab')
        }else{
            factor2Name = undefined
        }
        if(factor3.size > 0){
            const factor = new Uint8Array(await factor3.arrayBuffer());
            factor3Name = factor1.size + factor3.size+ 'Hop' + factor3.lastModified+ 'R' + factor3.name
            // added to Cloud Storage
            await UploadToCloud(factor, factor3Name, 'Orderinfo', 'rayanab')
        }else{
            factor3Name = undefined
        }
        if(factor4.size > 0){
            const factor = new Uint8Array(await factor4.arrayBuffer());
            factor4Name = factor4.size + factor4.size+ 'Hop' + factor4.lastModified+ 'R' + factor4.name
            // added to Cloud Storage
            await UploadToCloud(factor, factor4Name, 'Orderinfo', 'rayanab')
        }else{
            factor4Name = undefined
        }
        await orderinfoModel.findOneAndUpdate({ordernumber: id}, {
            calccaption: data.get('calccaption'),
            calcaccept: client.name,
            factor: factor1Name,
            factor1: factor2Name,
            factor2: factor3Name,
            factor3: factor4Name,
            nextstep: 'انبار',
            calcacceptdate: new Date()
    
    
          });
          return{success: true}
    },
    shopacceptmali: async ({ cookies, request, locals, params }: any) => {
        const data: any = await request.formData();
        const client: any = locals.client
        const id = params.viewid

        let factor1Name: any,
        factor2Name: any,
        havalebaz:any = 'بله';
        let havalebaztarikh: any = data.get('havalebaztarikh')

        const factor1 = data.get('factor1')
        const factor2 = data.get('factor2')

        if(havalebaztarikh.length < 4) {
            havalebaztarikh = undefined
            havalebaz = 'خیر'
        }
        console.log(factor1)
        if(factor1.size > 0){
            const factor = new Uint8Array(await factor1.arrayBuffer());
            factor1Name = factor1.size + factor1.size+ 'Hop' + factor1.lastModified+ 'R' + factor1.name
            // added to Cloud Storage
            await UploadToCloud(factor, factor1Name, 'Orderinfo', 'rayanab')
        }else{
            factor1Name = undefined
        }
        if(factor2.size > 0){
            const factor = new Uint8Array(await factor2.arrayBuffer());
            factor2Name = factor2.size + factor2.size+ 'Hop' + factor2.lastModified+ 'R' + factor2.name
            // added to Cloud Storage
            await UploadToCloud(factor, factor2Name, 'Orderinfo', 'rayanab')
        }else{
            factor2Name = undefined
        }

        await orderinfoModel.findOneAndUpdate({ordernumber: id}, {
            havale: factor1Name,
            chek: factor2Name,
            havalebaz: havalebaz,
            havalebaztarikh: havalebaztarikh,
            userwhoupload: client.name,
            tarikhupload: new Date(),
            nextstep: 'تاییدمالی',
          });
          return{success: true}
    }
} satisfies Actions;

