import type { PageServerLoad } from './$types';
import { orderinfoModel } from '$lib/models/orderinfoModel'
import { orderModel } from '$lib/models/orderModel'


export const load = (async ({ params,locals }) => {

    const id = params.viewid
    const howtosend = params.howtosendbarname
    const cityname = params.citybarname
    let adress: string = 'مشکلی در دریافت اطلاعات وجود دارد! به پشتیبانی گزارش دهید',
    postcode:string = 'مشکلی در دریافت اطلاعات وجود دارد! به پشتیبانی گزارش دهید',
    howtosell:string = 'مشکلی در دریافت اطلاعات وجود دارد! به پشتیبانی گزارش دهید'
    let factor: any = await orderinfoModel.findOne({ ordernumber: id });
    if(!factor){
    factor = await orderModel.findOne({ name: id });
    }
    const client: any = locals.client

    if(howtosend == 'pish' && cityname =='rasht'){
            adress= 'ادرس: استان گیلان، شهر رشت، ,خیابان رازی, روبروی بیمارستان رازی, ساختمان اسپیناس, طبقه سوم واحد نهم',
            postcode= 'کد پستی: 4144716428',
            howtosell= 'نحوه پرداخت: پیش کرایه'
    }
    if(howtosend == 'pas' && cityname =='rasht'){
            adress= 'ادرس: استان گیلان، شهر رشت، ,خیابان رازی, روبروی بیمارستان رازی, ساختمان اسپیناس, طبقه سوم واحد نهم',
            postcode= 'کد پستی: 4144716428',
            howtosell= 'نحوه پرداخت: پس کرایه' 
    }
    if(howtosend == 'pish' && cityname =='tehran'){

        adress = 'ادرس: تهران، خیابان ولیعصر،تقاطع طالقانی،مجتمع تجاری نور،طبقه سوم،واحد 11010'
        postcode = 'کد پستی: 1416799443'
        howtosell = 'نحوه پرداخت: پیش کرایه'
    }
    if(howtosend == 'pas' && cityname =='tehran'){

        adress = 'ادرس: تهران، خیابان ولیعصر،تقاطع طالقانی،مجتمع تجاری نور،طبقه سوم،واحد 11010'
            postcode = 'کد پستی: 1416799443'
            howtosell = 'نحوه پرداخت: پس کرایه'
    }

    return {factor: JSON.parse(JSON.stringify(factor)), client: JSON.parse(JSON.stringify(client)), adress: adress, postcode: postcode,howtosell: howtosell};
}) satisfies PageServerLoad;