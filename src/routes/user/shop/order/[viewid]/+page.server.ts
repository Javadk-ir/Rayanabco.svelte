import type { PageServerLoad, Actions} from './$types';
import { orderinfoModel } from '$lib/models/orderinfoModel'
import { UploadToCloud } from '$lib/Cloud/CloudUploader'
import { DownloadFromCloud } from '$lib/Cloud/CloudDownloader'



export const load = (async ({ params,locals }) => {
    const id = params.viewid
    const order: any = await orderinfoModel.findOne({ ordernumber: id });
    const client: any = locals.client


    return {order: JSON.parse(JSON.stringify(order)), client: JSON.parse(JSON.stringify(client))};
}) satisfies PageServerLoad;




export const actions = {
    shopreject: async ({ cookies, request, locals, params }: any) => {
        const data: any = await request.formData();
        const client: any = locals.client
        const id = params.viewid

        await orderinfoModel.findOneAndUpdate({ordernumber: id}, {
            nextstep: 'رد شده',
            bywho: client.name,
            rejectby: client.parentProffesion,
    
            rejectbydate: new Date()
          });
          return{success: true}
    },
    shopManangementAccept: async ({ cookies, request, locals, params }: any) => {
        const data: any = await request.formData();
        const client: any = locals.client
        const id = params.viewid

        await orderinfoModel.findOneAndUpdate({ordernumber: id}, {
            sellcaption: await data.get('sellcaption'),
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

        const factor1 = await data.get('factor1')
        const factor2 = await data.get('factor2')
        const factor3 = await data.get('factor3')
        const factor4 = await data.get('factor4')


        
        if(factor1.size > 0){
            const factor = new Uint8Array(await factor1.arrayBuffer());
            factor1Name = factor1.size + factor1.size+ 'Hodp' + factor1.lastModified+ 'R' + factor1.name
            // added to Cloud Storage
            await UploadToCloud(factor, factor1Name, 'Orderinfo', 'rayanab')
        }else{
            factor1Name = undefined
        }
        if(factor2.size > 0){
            const factor = new Uint8Array(await factor2.arrayBuffer());
            factor2Name = factor2.size + factor2.size+ 'Hoyp' + factor2.lastModified+ 'R' + factor2.name
            // added to Cloud Storage
            await UploadToCloud(factor, factor2Name, 'Orderinfo', 'rayanab')
        }else{
            factor2Name = undefined
        }
        if(factor3.size > 0){
            const factor = new Uint8Array(await factor3.arrayBuffer());
            factor3Name = factor1.size + factor3.size+ 'Hopp' + factor3.lastModified+ 'R' + factor3.name
            // added to Cloud Storage
            await UploadToCloud(factor, factor3Name, 'Orderinfo', 'rayanab')
        }else{
            factor3Name = undefined
        }
        if(factor4.size > 0){
            const factor = new Uint8Array(await factor4.arrayBuffer());
            factor4Name = factor4.size + factor4.size+ 'Hojp' + factor4.lastModified+ 'R' + factor4.name
            // added to Cloud Storage
            await UploadToCloud(factor, factor4Name, 'Orderinfo', 'rayanab')
        }else{
            factor4Name = undefined
        }
        await orderinfoModel.findOneAndUpdate({ordernumber: id}, {
            calccaption: await data.get('calccaption'),
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
    shopuploadmali: async ({ cookies, request, locals, params }: any) => {
        const data: any = await request.formData();
        const client: any = locals.client
        const id = params.viewid

        let factor1Name: any,
        factor2Name: any,
        havalebaz:any = 'بله';
        let havalebaztarikh: any = await data.get('havalebaztarikh')

        const factor1 = await data.get('factor1')
        const factor2 = await data.get('factor2')

        if(havalebaztarikh.length < 4) {
            havalebaztarikh = undefined
            havalebaz = 'خیر'
        }
        if(factor1.size > 0){
            const factor = new Uint8Array(await factor1.arrayBuffer());
            factor1Name = factor1.size + factor1.size+ 'Hopap' + factor1.lastModified+ 'R' + factor1.name
            // added to Cloud Storage
            await UploadToCloud(factor, factor1Name, 'Orderinfo', 'rayanab')
        }else{
            factor1Name = undefined
        }
        if(factor2.size > 0){
            const factor = new Uint8Array(await factor2.arrayBuffer());
            factor2Name = factor2.size + factor2.size+ 'Howap' + factor2.lastModified+ 'R' + factor2.name
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
    },
    shopacceptmali: async ({ cookies, request, locals, params }: any) => {
        
        const client: any = locals.client
        const id = params.viewid

        await orderinfoModel.findOneAndUpdate({ordernumber: id}, {
            tayidby: client.name,
            tarikhtayid: new Date(),
            nextstep: 'حسابداری',
          });
          return{success: true}
    },
    shopacceptanbar: async ({ cookies, request, locals, params }: any) => {
        
        const client: any = locals.client
        const id = params.viewid

        await orderinfoModel.findOneAndUpdate({ordernumber: id}, {
            storageaccept: client.name,
            nextstep: 'تحویل',
            storageacceptdate: new Date()
    
          });
          return{success: true}
    },
    shopaccepttahvil: async ({ cookies, request, locals, params }: any) => {
        
        const client: any = locals.client
        const id = params.viewid

        await orderinfoModel.findOneAndUpdate({ordernumber: id}, {
            tahvilaccept: client.name,
            nextstep: 'رهگیری',
            tahvilacceptdate: new Date()
    
          });
          return{success: true}
    },
    shopacceptrahgiri: async ({ cookies, request, locals, params }: any) => {
        const data: any = await request.formData();
        const client: any = locals.client
        const id = params.viewid

        let factorName: any;

        const factor1 = await data.get('file')

        if(factor1.size > 0){
            const factor = new Uint8Array(await factor1.arrayBuffer());
            factorName = factor1.size + factor1.size+ 'Hforp' + factor1.lastModified+ 'R' + factor1.name
            // added to Cloud Storage
            await UploadToCloud(factor, factorName, 'Orderinfo', 'rayanab')
        }else{
            factorName = undefined
        }

        await orderinfoModel.findOneAndUpdate({ordernumber: id}, {
            anbar: factorName,
            rahaccept: client.name,
            nextstep: 'اتمام',
            rahacceptdate: new Date()
          });
          return{success: true}
    },
    download: async ({ cookies, request }) => {
        //Get Form Data
        const data: any = await request.formData();
        //Delete From Cloud Storage
        try {
            const fileInformation = await data.get('ّFileToDownload')
            //Download File Form Cloud Storage
            let url: string = await DownloadFromCloud(fileInformation, 'Orderinfo', 'rayanab' )
            return { success: true as boolean, url: url as string }

        } catch (error) {
            console.warn(error)
        }
    }
} satisfies Actions;

