import type { PageServerLoad, Actions } from './$types';
import { productModel} from '$lib/models/productModel'
import { orderModel } from '$lib/models/orderModel'
import { orderNumberModel } from '$lib/models/orderNumberModel'
import { orderinfoModel } from '$lib/models/orderinfoModel';


export const load = (async (event) => {

    const product: any[] = await productModel.aggregate([{ $sort: { createdAt: -1 } }]).exec();
    const customer: any[] = await orderModel.aggregate([{ $sort: { createdAt: -1 } }]).exec();
    const client: Object | any = event.locals.client


    return {
        product: structuredClone(product),
        customer: structuredClone(customer),
        client: structuredClone(client)
    }
}) satisfies PageServerLoad;




export const actions = {
    upload: async ({ cookies, request, locals }: any) => {
        const client = locals.client
        const data: any = await request.formData();
        const id: any = data.get('name')
        const ordernumberr: any = await orderNumberModel.findOne({ _id: "652266a6a8fba3ec6aea446f" });

        let info: any = await orderModel.findOne({ name: id });
        
        //get mahsolat and turn into string first then split string from , and turn it to array again
        function stringify(obj: any) {
          let okeyer = []
          for (let i = 0; i < obj.length; i++) {
            okeyer.push(obj[i].toString().split(","));
          }
          return okeyer
        }
    
        //i dont remember what the accutal fuck this function does here but its working so dont touch it
        function PLUS(obj: string | any[]) {
          let Multiplyer = []
          let finalObject = []
          for (let i = 0; i < obj.length; i++) {
            finalObject.push(obj[i])
            Multiplyer.push(obj[i][1] * obj[i][2]);
            finalObject[i].push(Multiplyer[i])
          }
          return finalObject
        }
    
    
        //get last index of array( its unit price ) and plus them togheter
        function ALLpricer(obj: string | any[]) {
          let finaler: number = 0
          for (let i = 0; i < obj.length; i++) {
            finaler = Number(finaler) + Number(obj[i][3])
          }
          return finaler
        }
    

        //first turn object into array then clean empty array 
        let arr: any = Object.fromEntries(data.entries());
        delete arr.takhfif
        delete arr.name
        delete arr.buyerinfo
        arr = Object.entries(arr)

        // Split array into smaller parts
        let mahsolat = stringify(arr)

        // Multiply Price with unit
        let mahsolatWithFinalPrice = PLUS(mahsolat)

        // Final Price
        let finalprice = ALLpricer(mahsolatWithFinalPrice)

        // new user values
        const newhogogh = new orderinfoModel({
          pishfactor: undefined,
          pishfactor1: undefined,
          pishfactor2: undefined,
          pishfactor3: undefined,
          ordernumber: ordernumberr.number,
          submittedby : client.name,
          buyerinfo: data.get('buyerinfo'),
          buyername: data.get('name'),
          takhfif: data.get('takhfif'),
          price: Number(finalprice),
          phoneNumber: info.phoneNumber,
          name : info.name,
          user: info.email,
          city: info.city,
          addressbar: info.addressbar,
          companyname: info.companyname,
          namecompany: info.namecompany,
          postcode: info.postcode,
          resphonenumber: info.resphonenumber,
          sentoption1: info.sentoption1,
          sentoptioncaption1: info.sentoptioncaption1,
          sentoption2: info.sentoption2,
          sentoptioncaption2: info.sentoptioncaption2,   
          sentoption3: info.sentoption3,
          sentoptioncaption3: info.sentoptioncaption3,
          nextstep: 'مدیریت فروش',
          mahsolat: mahsolatWithFinalPrice,
        });
    
        try {
    
          await orderinfoModel.create(newhogogh);
          await orderNumberModel.findByIdAndUpdate("652266a6a8fba3ec6aea446f", {
            $inc: {
              number: 1,
            },
          });

          return{success: true}
        } catch (error) {
          console.log(error);
        }
      
    }
} satisfies Actions;

