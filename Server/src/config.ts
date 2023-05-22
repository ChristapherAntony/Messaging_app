import dotenv from 'dotenv';

dotenv.config();

const config = {
    port: process.env.PORT || 3000,
    mongo: {
        uri: process.env.MONGO_URL as string,
    },
    JWT_SECRET: process.env.JWT_SECRET as string,
    aws_access_key_id: process.env.AWS_ACCESS_KEY_ID as string,
    aws_secret_access_key: process.env.AWS_SECRET_ACCESS_KEY as string,
    s3_bucket_name: process.env.S3_BUCKET_NAME as string,
    bucket_region: process.env.BUCKET_REGION as string,
    cloudfront_private_key: process.env.CLOUDFRONT_PRIVATE_KEY as string,
    cloudfront_key_pair_id: process.env.CLOUDFRONT_KEY_PAIR_ID as string,
    cloudfront_Distribution_Id: process.env.CLOUDFRONT_DISTRIBUTION_ID as string,
    authRoles: {
        admin: "admin",
        user: "user",
    },

};
export type ConfigType = typeof config;

export default config;


