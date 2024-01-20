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
            console.log(id)
                await productModel.findOneAndUpdate({title: id}, {
                    title: data.get('title'),
                    caption: data.getAll('caption'),
                    captionTitle: data.getAll('caption'),
                    keyinfo: data.getAll('keyinfo'),
              
                    cAG16B: data.get('cAG16B'),
                    cAG32B: data.get('cAG32B'),
                    cAG64B: data.get('cAG64B'),
                    cAG128B: data.get('cAG128B'),
                    cAG256B: data.get('cAG256B'),
                    cAG512B: data.get('cAG512B'),
                    cAT1B: data.get('cAT1B'),
                    cAT2B: data.get('cAT2B'),
                    
                    cBG16B: data.get('cBG16B'),
                    cBG32B: data.get('cBG32B'),
                    cBG64B: data.get('cBG64B'),
                    cBG128B: data.get('cBG128B'),
                    cBG256B: data.get('cBG256B'),
                    cBG512B: data.get('cBG512B'),
                    cBT1B: data.get('cBT1B'),
                    cBT2B: data.get('cBT2B'),
              
                    cCG16B: data.get('cCG16B'),
                    cCG32B: data.get('cCG32B'),
                    cCG64B: data.get('cCG64B'),
                    cCG128B: data.get('cCG128B'),
                    cCG256B: data.get('cCG256B'),
                    cCG512B: data.get('cCG512B'),
                    cCT1B: data.get('cCT1B'),
                    cCT2B: data.get('cCT2B'),
              
                    mG16B: data.get('mG16B'),
                    mG32B: data.get('mG32B'),
                    mG64B: data.get('mG64B'),
                    mG128B: data.get('mG128B'),
                    mG256B: data.get('mG256B'),
                    mG512B: data.get('mG512B'),
                    mT1B: data.get('mT1B'),
                    mT2B: data.get('mT2B'),
              
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
    