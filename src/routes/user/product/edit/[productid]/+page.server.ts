import type { PageServerLoad, Actions } from './$types';
import {productModel} from '$lib/models/productModel'


    export const load: PageServerLoad = async function({ params}): Promise<any> {
        
        const id = params.productid
        const product = await productModel.findOne({ title: id })

        return {
            product: JSON.parse(JSON.stringify(product)),
        }
    
    }


    export const actions = {
        edit: async ({ cookies, request, params }) => {
        const data: any = await request.formData();
        try{
            const id = params.productid
                await productModel.findOneAndUpdate({title: id}, {
                    title: data.get('title'),
                    caption: data.getAll('caption'),
                    captionTitle: data.getAll('caption'),
                    keyinfo: data.getAll('keyinfo'),
              
                    cAG16B: Number(data.get('cAG16B')),
                    cAG32B: Number(data.get('cAG32B')),
                    cAG64B: Number(data.get('cAG64B')),
                    cAG128B: Number(data.get('cAG128B')),
                    cAG256B: Number(data.get('cAG256B')),
                    cAG512B: Number(data.get('cAG512B')),
                    cAT1B: Number(data.get('cAT1B')),
                    cAT2B: Number(data.get('cAT2B')),
                    
                    cBG16B: Number(data.get('cBG16B')),
                    cBG32B: Number(data.get('cBG32B')),
                    cBG64B: Number(data.get('cBG64B')),
                    cBG128B: Number(data.get('cBG128B')),
                    cBG256B: Number(data.get('cBG256B')),
                    cBG512B: Number(data.get('cBG512B')),
                    cBT1B: Number(data.get('cBT1B')),
                    cBT2B: Number(data.get('cBT2B')),
              
                    cCG16B: Number(data.get('cCG16B')),
                    cCG32B: Number(data.get('cCG32B')),
                    cCG64B: Number(data.get('cCG64B')),
                    cCG128B: Number(data.get('cCG128B')),
                    cCG256B: Number(data.get('cCG256B')),
                    cCG512B: Number(data.get('cCG512B')),
                    cCT1B: Number(data.get('cCT1B')),
                    cCT2B: Number(data.get('cCT2B')),
              
                    mG16B: Number(data.get('mG16B')),
                    mG32B: Number(data.get('mG32B')),
                    mG64B: Number(data.get('mG64B')),
                    mG128B: Number(data.get('mG128B')),
                    mG256B: Number(data.get('mG256B')),
                    mG512B: Number(data.get('mG512B')),
                    mT1B: Number(data.get('mT1B')),
                    mT2B: Number(data.get('mT2B')),
              
                    detail: {
                      SpeedStandard: data.get('SpeedStandard'),
                      osSupport: data.get('osSupport'),
                      waterprof: data.get('waterprof'),
                      ghobarprof: data.get('ghobarprof'),
                      zarbeprof: data.get('zarbeprof'),
                      light: data.get('light'),
                      steeltype: data.get('steeltype'),
                      canotg: data.get('canotg'),
                      color: data.get('color'),
                      writingspeed: data.get('writingspeed'),
                      Readingspeed: data.get('Readingspeed'),
                      type: data.get('type'),
                      Capacity: data.get('Capacity'),
                      formdactor: data.get('formdactor'),
                      connector: data.get('connector'),
                      weight: data.get('weight'),
                      size: data.get('size'),
                    },
                })

                return { success: true }
            }catch(err){
                console.log(err)
            }
        }
    } satisfies Actions;
    