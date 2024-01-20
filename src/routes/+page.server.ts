import type { PageServerLoad, Actions } from './$types';
import { user } from '$lib/db/collections'
import cryptr from "cryptr"
const Cryptr = new cryptr('myTotallySecretKey');
import { signJWT } from '$lib/token';

export const actions = {
	login: async ({ cookies, request }) => {

        const data : any = await request.formData();
		const email: any = data.get('email');
		const password: any = data.get('password');
        const  Client: any = await user.findOne({email: email})

        if (Client){
            const passwordDecrypted = Cryptr.decrypt(Client.password)
            if(passwordDecrypted === password && Client.email === email){
                const token: string = await signJWT(Client, { exp: `24h` });
                const cookieOptions : any = {
                    httpOnly: true,
                    samesite: 'strict',
                    path: '/',
                    secure: 'N12fa%1$16%%62e@',
                    maxAge: 60 * 60 * 24 
                };
        
                cookies.set('token', token, cookieOptions);
                cookies.set('logged-in', 'true', {
                    ...cookieOptions,
                    httpOnly: false
                });

                
                return { success: true };
            }else{
                return{
                    error : 'ایمیل یا نام کاربری اشتباه است'
                }
            }
        }else {
            return{
                error : 'ایمیل یا نام کاربری اشتباه است'
            }
        }
        
	}
} satisfies Actions;

