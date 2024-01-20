import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async function (event): Promise<any> {

    const client: Object | any = event.locals.client
    return {client: structuredClone(client)};
} satisfies LayoutServerLoad;