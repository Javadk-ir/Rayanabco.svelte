import {S3Client, PutObjectCommand} from "@aws-sdk/client-s3"
import type { AwsCredentialIdentity } from "@aws-sdk/types";
import { LIARA_ENDPONT, LIARA_ACCESSKEYID, LIARA_SECRETACCESSKEY } from '$env/static/private'

export const UploadToCloud = async (fileBinary: any,fileName: any,endpoint: string ,bucket: string): Promise<any> => {

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
const client = new S3Client(clientConfig)

//Detail
const params = {
	Body: fileBinary,
	Bucket: bucket,
	Key: fileName,
};

try {
    //File Uploading
    await client.send(new PutObjectCommand(params));
  } catch (error) {
      console.log(error);
  }

};
