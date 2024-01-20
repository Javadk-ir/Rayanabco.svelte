import type { PageServerLoad, Actions } from './$types';
import { fileModel } from '$lib/models/fileModel';
import { DeleteFromCloud } from '$lib/Cloud/CloudDeleter'
import { DownloadFromCloud } from '$lib/Cloud/CloudDownloader'


export const load: PageServerLoad = async function (event): Promise<any> {

    //defining client information
    const client: Object | any = event.locals.client

    //query all file share DB
    const fileshares = await fileModel.aggregate([{ $sort: { createdAt: -1 } }]).exec();

    //define empty values for file sending and reciving
    let fileInbox: number = 0,
        fileOutbox: number = 0;

    //count how many file sended and recived
    for (let file of fileshares) {

        //-- sended files
        if (file.filesentby == client.userID) {
            fileInbox++
        }
        //-- recived files
        for (let file2 of file.filegoingto) {
            if (file2 == client.userID) {
                fileOutbox++
            }
        }
    }

    return {
        client: structuredClone(client),
        fileshare: structuredClone(fileshares),
        fileInbox: fileInbox,
        fileOutbox: fileOutbox,

    }
}

export const actions = {
    //delete button
    delete: async ({ cookies, request }) => {
        //Get Form Data
        const data: any = await request.formData();
        const fileInformation = data.get('FileToDelete')
        try {
            //Delete File From DataBase
            await fileModel.deleteOne({ filepath: fileInformation });
            //Delete File From Cloud Storage
            await DeleteFromCloud(fileInformation, 'Files', 'rayanab' )

            return { success: true as boolean }
        } catch (error) {
            console.warn(error)
        }
    },
    download: async ({ cookies, request }) => {
        //Get Form Data
        const data: any = await request.formData();
        const fileInformation = data.get('ّFileToDownload')
        //Delete From Cloud Storage
        try {
            //Download File Form Cloud Storage
            let url: string = await DownloadFromCloud(fileInformation, 'Files', 'rayanab' )


            return { success: true as boolean, url: url as string }

        } catch (error) {
            console.warn(error)
        }
    }
} satisfies Actions;

