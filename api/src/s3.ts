import S3 from 'aws-sdk/clients/s3';
import 'dotenv/config';
import fs from 'fs';

// upload file to s3
interface IUploadParams {
    Bucket: string,
    Body: any,
    Key: any
}

const bucketName: string = process.env.AWS_BUCKET_NAME!;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
})

// TODO: left with the api for images  from s3 and setting up the cloud environment 
export const uploadImage = async (file: any) => {
    const fileStream = fs.createReadStream(file.path);
    const uploadParams: IUploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename
    }

    return s3.upload(uploadParams).promise();
}

// download files
export const getFileStream = (fileKey: any) => {
    const downloadParams: any = {
        key: fileKey,
        Bucket: bucketName,
    }
    return s3.getObject(downloadParams).createReadStream();
}