import type { PageServerLoad, Actions } from './$types';
import { userModel } from '$lib/models/userModel'
import { orderModel } from '$lib/models/orderModel'

import  soapRequest  from 'easy-soap-request';

export const load = (async () => {
    const order: any[] = await orderModel.aggregate([{ $sort: { createdAt: -1 } }]).exec();
    const employe: any[] = await userModel.aggregate([{ $sort: { createdAt: -1 } }]).exec();

    return {order: structuredClone(order),employe: structuredClone(employe)};
}) satisfies PageServerLoad;

async function sendMultipleSms(phoneNumbers: string | any[], messages: string | any[]) {
    try {
      const url = 'http://www.ahra.ir/webservice/AhraUsersWebService.asmx';
      const headers = {
        'Content-Type': 'text/xml;charset=UTF-8',
        'SOAPAction': 'http://tempuri.org/SendSms',
        'Cache-Control': 'no-cache',
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
      };
  
      const promises = [];
  
      for (let i = 0; i < phoneNumbers.length; i++) {
        const phoneNumber = phoneNumbers[i];
        const message = messages;
  
        const xml = `
          <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
            <soap:Body>
              <SendSms xmlns="http://tempuri.org/">
                <cDomainName>rayanab</cDomainName>
                <cUserName>rayanab</cUserName>
                <cPassword>r@66A82N2</cPassword>
                <cBody>${message}</cBody>
                <cMobileNo>${phoneNumber}</cMobileNo>
                <nRecieveType>1</nRecieveType>
              </SendSms>
            </soap:Body>
          </soap:Envelope>
        `;
  
        promises.push(soapRequest({ url, headers, xml }));
      }
  
      await Promise.all(promises);
      return {success: true}
    } catch (err) {
      console.log(err);
    }
  }

export const actions = {
    solo: async ({ request }) => {
        try {
            const data: any = await request.formData();
            const phoneNumber = data.get('phoneNumber').split(',') as string;
            const message = data.getAll('message') as string;

        await sendMultipleSms(phoneNumber, message).then(() => {
            console.log('success');
        }).catch((err) => {
            console.log(err.message);
        });
        return{success: true}
    } catch (err) {
      console.log(err);
    }
  },
      multy: async ({ request }) => {
        try {
              const data: any = await request.formData();
              const phoneNumber = data.get('phoneNumber').split(',') as string;
              const message = data.get('message') as string;

            await sendMultipleSms(phoneNumber, message).then(() => {
                console.log('success');
            }).catch((err) => {
             console.log(err.message);
            });
        return{success: true}

    } catch (err) {
      console.log(err);
    }
  },
  employe: async ({ request }) => {
    try {
          const data: any = await request.formData();
          const message = data.get('message') as string;

          const employe: any[] = await userModel.aggregate([{ $sort: { createdAt: -1 } }]).exec();
          let phoneNumber: any[] = []

          for(let i = 0; i < employe.length; i++) {
            phoneNumber.push(employe[i].phoneNumber);
          }

        await sendMultipleSms(phoneNumber, message).then(() => {
            console.log('success');

        }).catch((err) => {
         console.log(err.message);
        });
        return{success: true}

} catch (err) {
  console.log(err);
}
},
customer: async ({ request }) => {
    try {
          const data: any = await request.formData();
          const message = data.get('message') as string;

          const order: any[] = await orderModel.aggregate([{ $sort: { createdAt: -1 } }]).exec();
          let phoneNumber: any[] = []

          for(let i = 0; i < order.length; i++) {
            if(order[i].phoneNumber){
                phoneNumber.push(order[i].phoneNumber);
            }
          }

        await sendMultipleSms(phoneNumber, message).then(() => {
            console.log('success');

        }).catch((err) => {
         console.log(err.message);
        });
        return{success: true}

} catch (err) {
  console.log(err);
}
},
customerandemploye: async ({ request }) => {
    try {
          const data: any = await request.formData();
          const message = data.get('message') as string;

          const order: any[] = await orderModel.aggregate([{ $sort: { createdAt: -1 } }]).exec();
          let phoneNumber1: any[] = []
          const employe: any[] = await userModel.aggregate([{ $sort: { createdAt: -1 } }]).exec();
          let phoneNumber2: any[] = []



          for(let i = 0; i < order.length; i++) {
            if(order[i].phoneNumber){
                phoneNumber1.push(order[i].phoneNumber);
            }
          }
          for(let i = 0; i < employe.length; i++) {
            phoneNumber2.push(employe[i].phoneNumber);
          }

          let phoneNumber: any[] = phoneNumber1.concat(phoneNumber2);

        await sendMultipleSms(phoneNumber, message).then(() => {
            console.log('success');

        }).catch((err) => {
         console.log(err.message);
        });
        return{success: true}

} catch (err) {
  console.log(err);
}
},
} satisfies Actions;