import type { PageServerLoad, Actions } from './$types';
import { requestsModel } from '$lib/models/requestsModel';

export const load = (async ({params, locals}) => {
    const request: any = await requestsModel.findOne({ reqnumber: params.reqid });
    const client: any = locals.client
    return {request: JSON.parse(JSON.stringify(request)), client: structuredClone(client)};
}) satisfies PageServerLoad;


export const actions = {
    sarparastaccept: async ({ cookies, request, locals, params }: any) => {
        const data: any = await request.formData();
        const client: any = locals.client
        const id = params.reqid

        await requestsModel.findOneAndUpdate({reqnumber: id}, {
            nextstep: 'مسئول',
            sarparastname: client.name,
            sarparast: await data.get('caption'),
          });
          return{success: true}
    },
    masolaccept: async ({ cookies, request, locals, params }: any) => {
        const data: any = await request.formData();
        const client: any = locals.client
        const id = params.reqid

        await requestsModel.findOneAndUpdate({reqnumber: id}, {
            nextstep: 'مدیر عامل',
            masolname: client.name,
            masol: await data.get('caption'),
          });
          return{success: true}
    },
    modiramelaccept: async ({ cookies, request, locals, params }: any) => {
        const id = params.reqid

        await requestsModel.findOneAndUpdate({reqnumber: id}, {
            nextstep: 'اتمام',
          });
          return{success: true}
    },
} satisfies Actions;

