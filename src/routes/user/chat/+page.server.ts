import type { PageServerLoad, Action } from './$types';
import { userModel } from '$lib/models/userModel'
import { chatModel } from '$lib/models/chatModel'

export const load = (async (event: { locals: { client: any; }; }, params: any) => {
        
    try {
        const users: any = await userModel.aggregate([{ $sort: { createdAt: -1 } }]).exec();
        const client: Object | any = event.locals.client

        //chek if client joined any groups or not 
        const GroupChat: any = await chatModel.find({ chatroom: client.name, "GPname": {$exists:true}});

        //chek if user visited page before or not 
        let chatroommessage : any = await chatModel.findOne({ chatroom: { $eq: [client.name, client.name] }});
        //if user not visited page before send him temporary message by system
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
            //then submit system message to db for next time user came to this page temporarily message dont be created
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
            //created
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



export const actions = {
    add: async ({ cookies, request, locals }: any) => {

        try {
            const data: any = await request.formData();
            const client: any = locals.client

            //get user save message pv from DB
            let chatroommessage: any = await chatModel.findOne({ $or: [{ chatroom: { $eq: [client.name, client.name] } }] });
            //if save message not founded it should create new one for him
            if (chatroommessage == null) {
                const newchatmesssage = new chatModel({
                    chatroom: [client, client.name],
                    "message": [
                        {
                            "send": client.name,
                            "body": data.get('messageSended'),
                            "time": new Date(),
                            "seen": false
                        }
                    ]

                });
                //created
                await chatModel.create(newchatmesssage);

            } else {
            //find save message and push new message
                await chatModel.findOneAndUpdate({ $or: [{ chatroom: { $eq: [client.name, client.name] } }] },
                    {
                        $push: {
                            "message": [
                                {
                                    "send": client.name,
                                    "body": data.get('messageSended'),
                                    "time": new Date(),
                                    "seen": false
                                }
                            ]
                        }

                    });
            }
            return{successfull: true}
        } catch (error) {
            console.log(error);
        }
    
    }
};