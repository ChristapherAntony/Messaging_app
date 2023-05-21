

import { DeleteObjectCommand, GetObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import config, { ConfigType } from '../../config';
// import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { getSignedUrl } from '@aws-sdk/cloudfront-signer';

import { CloudFrontClient, CreateInvalidationCommand } from "@aws-sdk/client-cloudfront"

const s3 = new S3Client({
    credentials: {
        accessKeyId: config.aws_access_key_id,
        secretAccessKey: config.aws_secret_access_key,
    },
    region: config.bucket_region
})

const cloudFront = new CloudFrontClient({
    credentials: {
        accessKeyId: config.aws_access_key_id,
        secretAccessKey: config.aws_secret_access_key,
    },
    region: config.bucket_region
});
// const cloudFront = new CloudFrontClient({ region: config.bucket_region });


const s3StorageServiceImpl = () => {
    const uploadFile = async (fileKey: string, contentType: string, fileBuffer: Buffer) => {
        const uploadParams = {
            Bucket: config.s3_bucket_name,
            Key: fileKey,
            Body: fileBuffer,
            ContentType: contentType
        };
        const command = new PutObjectCommand(uploadParams)

        return await s3.send(command);
    }



    const getFile = async (fileKey: string) => {
        // const getObjectParams = {
        //     Bucket: config.s3_bucket_name,
        //     Key: fileKey
        // }
        // const command = new GetObjectCommand(getObjectParams)
        // return await getSignedUrl(s3, command, { expiresIn: 3600 })   // aws s3 bucket way
        //----------------------------------------------------------------------------------------------------------------
        //  return `https://d1dxz3jhvy4aqa.cloudfront.net/${fileKey}`    //--cloudfront not signed way
        //----------------------------------------------------------------------------------------------------------------

        return getSignedUrl({
            url: `https://d1dxz3jhvy4aqa.cloudfront.net/${fileKey}`,
            dateLessThan: new Date(Date.now() + 1000 * 60 * 60 * 2).toISOString(), // expires in2 hours
            privateKey: config.cloudfront_private_key,
            keyPairId: config.cloudfront_key_pair_id,
        })
    };



    const removeFile = async (fileKey: string) => {
        const params = {
            Bucket: config.s3_bucket_name,
            Key: fileKey
        }
        const command = new DeleteObjectCommand(params)
        return await s3.send(command)



        // //after deleting Invalidate cloud front cache for that image
        // const cfCommand = new CreateInvalidationCommand({
        //     DistributionId: config.cloudfront_Distribution_Id,
        //     InvalidationBatch: {
        //         CallerReference: fileKey,
        //         Paths: {
        //             Quantity: 1,
        //             Items: [
        //                 "/" + fileKey,

        //             ]
        //         }
        //     } 
        // })



        // const h = await cloudFront.send(cfCommand)
        // console.log(h);

        // return
    }

    return { uploadFile, getFile, removeFile }
}


type s3StorageServiceImpl = ReturnType<typeof s3StorageServiceImpl>;
export default s3StorageServiceImpl;