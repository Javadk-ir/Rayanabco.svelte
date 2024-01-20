import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl }from "@aws-sdk/s3-request-presigner"
import type { AwsCredentialIdentity } from "@aws-sdk/types";
import { LIARA_ENDPONT, LIARA_ACCESSKEYID, LIARA_SECRETACCESSKEY } from '$env/static/private'

 // DownloadFromCloud middleware that download files from cloud storage

export const DownloadFromCloud = async (fileName: any,endpoint: string ,bucket: string): Promise<any> => {

   //Define Configs For AWS Client
   const clientConfig: any = {
      region: "default" as string,
      endpoint: LIARA_ENDPONT+endpoint,
      credentials: {
        accessKeyId: LIARA_ACCESSKEYID as string,
        secretAccessKey: LIARA_SECRETACCESSKEY as string,
      } as AwsCredentialIdentity,
   }

  //initialize client with credentials
   const client = new S3Client(clientConfig);
  
   //File Details
   const params = {
      Bucket: bucket as string,
      Key: fileName as string,
   };
   // GetObjectCommand with params
   const command = new GetObjectCommand(params);
   //Generating signed URL for Download and redirection
   const url : string = await getSignedUrl(client, command)
   return url as string
};



