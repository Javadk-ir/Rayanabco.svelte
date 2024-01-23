import type { PageServerLoad } from './$types';
import puppeteer, {Puppeteer} from 'puppeteer'
import {ISSABLE, ISSABLEWEB, ISSABLEPASS} from '$env/static/private'
export const load: PageServerLoad = async function (event): Promise<any> {

    try {

        //initialize new browser instance
        const browser = await puppeteer.launch({headless: 'new',ignoreHTTPSErrors: true});
        //open new page
        const page = await browser.newPage();
        //go to issable page
        await page.goto(ISSABLEWEB as string)
        //type username
        await page.type('[name=input_user]', ISSABLE as string)
        //type password
        await page.type('[name=input_pass]', ISSABLEPASS as string)
        //click on submit button
        await page.click('[type=submit]')
        //wait 500ms
        await page.waitForTimeout(500);
        // go to call history page
        await page.goto(`${ISSABLEWEB as string}index.php?menu=cdrreport`)
        //wait 500ms
        await page.waitForTimeout(500);
        //copy table data
        const data: any = await page.evaluate(() => {
            const el: any = document.getElementById('JColResizer0');
            return el.querySelector('tbody').innerHTML;
        })
        

        //close browser
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