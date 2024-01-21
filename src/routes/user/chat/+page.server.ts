import type { PageServerLoad } from './$types';
import { userModel } from '$lib/models/userModel'
import { chatModel } from '$lib/models/chatModel'

export const load = (async (event: { locals: { client: any; }; }, params: any) => {
        
    try {
        const users: any = await userModel.aggregate([{ $sort: { createdAt: -1 } }]).exec();
        const client: Object | any = event.locals.client

        const GroupChat: any = await chatModel.find({ chatroom: client.name, "GPname": {$exists:true}});
        let chatroommessage : any = await chatModel.findOne({ chatroom: { $eq: [client.name, client.name] }});
        if (chatroommessage == null) {
            chatroommessage = {
                "message": [
                    {
                        "send": 'sys',
                        "body": "خوش امدید! از منو سمت راست میتونی لیست کاربران رو ببینی و با فرد مورد نظرت مکالمه داشته باشی. تازشم اگه بخوای متنی ذخیره کنی میتونی اینجا بفرستی تا هرموقعه خواستی سریع بهش دسترسی داشته باشی, دقیقا مثله سیو مسیج عمل میکنه",
                        "time": new Date(),
                        "seen": true
                    }
                ]
            }
            const newchatmesssage = new chatModel({
                chatroom: [client.name, client.name],
                "message": [
                    {
                        "send": 'sys',
                        "body": "خوش امدید! از منو سمت راست میتونی لیست کاربران رو ببینی و با فرد مورد نظرت مکالمه داشته باشی. تازشم اگه بخوای متنی ذخیره کنی میتونی اینجا بفرستی تا هرموقعه خواستی سریع بهش دسترسی داشته باشی, دقیقا مثله سیو مسیج عمل میکنه",
                        "time": new Date(),
                        "seen": true
                    }
                ]

            });
            await chatModel.create(newchatmesssage);

        }

        return {
            client: structuredClone(client),
            users: structuredClone(users),
            chatroommessage: JSON.parse(JSON.stringify(chatroommessage)),
            GroupChat: GroupChat


        }
    }catch (error) {
        console.log(error)
    }
});