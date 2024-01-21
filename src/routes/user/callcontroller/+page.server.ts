import type { PageServerLoad } from './$types';
import puppeteer, {Puppeteer} from 'puppeteer'
import {ISSABLE, ISSABLEWEB, ISSABLEPASS} from '$env/static/private'
export const load: PageServerLoad = async function (event): Promise<any> {

    try {


        const browser = await puppeteer.launch({headless: 'new',ignoreHTTPSErrors: true});
        const page = await browser.newPage();
        await page.goto(ISSABLEWEB as string)

        
        await page.type('[name=input_user]', ISSABLE as string)
        await page.type('[name=input_pass]', ISSABLEPASS as string)
        await page.click('[type=submit]')
        await page.waitForTimeout(500);
        await page.goto(`${ISSABLEWEB as string}index.php?menu=cdrreport`)
        await page.waitForTimeout(500);
        
        const data: any = await page.evaluate(() => {
            const el: any = document.getElementById('JColResizer0');
            return el.querySelector('tbody').innerHTML;
        })
        


        await browser.close();


  
        const client: any = event.locals.client
        return{
            client: structuredClone(client),
            data: data,

        }

    } catch (error) {
        console.log(error);
    }
} satisfies PageServerLoad;