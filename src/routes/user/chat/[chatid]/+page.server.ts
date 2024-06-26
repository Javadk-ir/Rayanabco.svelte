import type { PageServerLoad, Actions } from './$types';
import { userModel } from '$lib/models/userModel'
import { chatModel } from '$lib/models/chatModel'

export const load = (async ({ params, locals }) => {
    const client: Object | any = locals.client

    try {
        const users: any = await userModel
            .aggregate([{ $sort: { createdAt: -1 } }])
            .exec();
            const client: any = {
                name: 'محمد جواد کرمی'
            }

            let selectedChat = params.chatid
        const chatroom: any = await userModel.findOne({ name: selectedChat });
        //chek if client joined any groups or not 
        const GroupChat: any = await chatModel.find({ chatroom: client.name, "GPname": {$exists:true}});
        //chek if user visited page before or not 
        let chatroommessage: any = await chatModel.findOne({ $or: [{ chatroom: { $eq: [client.name, selectedChat] } }, { chatroom: { $eq: [selectedChat, client.name] } }] });
        //if user not visited page before send him temporary message by system

        if (chatroommessage == null) {
            chatroommessage = {
                "message": [
                    {
                        "send": 'sys',
                        "body": "تمامی پیام ها به صورت رمزنگاری شده ذخیره میشوند ",
                        "time": new Date(),
                        "seen": true
                    }
                ]
            }
            //then submit system message to db for next time user came to this page temporarily message dont be created
            const newchatmesssage = new chatModel({
                chatroom: [client.name, selectedChat],
                "message": [
                    {
                        "send": 'sys',
                        "body": "تمامی پیام ها به صورت رمزنگاری شده ذخیره میشوند",
                        "time": new Date(),
                        "seen": true
                    }
                ]

            });
                        //created

            await chatModel.create(newchatmesssage);

        }


return {
    users: structuredClone(users),
    GroupChat: structuredClone(GroupChat),
    chatroom: structuredClone(chatroom),
    chatroommessage: JSON.parse(JSON.stringify(chatroommessage)),
    selectedChat:selectedChat
}
    } catch (error) {
        console.log(error);
    }
});



export const actions = {
    add: async ({ cookies, request, params, locals }: any) => {


        try {
            const data: any = await request.formData();
            const client: any = locals.client

            let selectedChat = params.chatid
            //if  message not founded it should create new one for him

            let chatroommessage: any = await chatModel.findOne({ $or: [{ chatroom: { $eq: [client, selectedChat] } }, { chatroom: { $eq: [selectedChat, client] } }] });
            if (chatroommessage == null) {
                const newchatmesssage = new chatModel({
                    chatroom: [client, selectedChat],
                    "message": [
                        {
                            "send": client,
                            "body": data.get('messageSended'),
                            "time": new Date(),
                            "seen": false
                        }
                    ]

                });
                await chatModel.create(newchatmesssage);

            } else {
            //find  message and push new message

                await chatModel.findOneAndUpdate({ $or: [{ chatroom: { $eq: [client, selectedChat] } }, { chatroom: { $eq: [selectedChat, client] } }] },
                    {
                        $push: {
                            "message": [
                                {
                                    "send": client,
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
