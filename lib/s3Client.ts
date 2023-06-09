// Create service client module using ES6 syntax.
import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
// Set the AWS Region.
const REGION = "ap-south-1";
// Create an Amazon S3 service client object.
const s3Client = new S3Client({ region: REGION });
export { s3Client, PutObjectCommand, GetObjectCommand };