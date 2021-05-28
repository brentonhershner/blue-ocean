import aws from "aws-sdk";
import config from '../../config.js';

const imagePath = `https://${config.aws.Bucket}.s3-${config.aws.region}.amazonaws.com/`;

const cloudStorage = {};

// const listObjects = async () => {
//   try {
//     const client = new aws.S3Client({ region: "us-west-2" });
//     const command = new aws.ListObjectsCommand({ Bucket: "hrseablueocean" });
//     const data = await client.send(command);
//     console.log('data');
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error(error);
//     const { requestId, cfId, extendedRequestId } = error.$metadata;
//     console.log({ requestId, cfId, extendedRequestId });
//   }
// }

cloudStorage.getAllUrls = async () => {
  try {
    aws.config.setPromisesDependency();
    aws.config.update(config.aws);

    const s3 = new aws.S3();
    const response = await s3.listObjectsV2({
      Bucket: config.aws.Bucket,
      Prefix: 'images'
    }).promise();

    return response.Contents
      .map((file) => `${imagePath}${file.Key}`)
      .filter((file) => file.slice(-1) !== '/')

  } catch (e) {
    console.error('error', e)
    throw e;
  }
};

cloudStorage.getOneUrl = (filename) => {
  return `${imagePath}${filename}`
}

cloudStorage.uploadPhoto = async (file) => {
  // try {
  //   aws.config.setPromisesDependency();
  //   aws.config.update(config);

  //   const s3 = new aws.S3();

  //   const response = await s3.upload({
  //     Bucket: config.Bucket,
  //     metadata: function(req, file, cb) {
  //       cb(null, {fieldName: file.fieldname});
  //     },
  //     key: function (req, file, cb) {
  //       cb(null, Date.now().toString())
  //   }

  //   return response.Contents
  //     .map((file) => `https://${config.Bucket}.s3-${config.region}.amazonaws.com/${file.Key}`)
  //     .filter((file) => file.slice(-1) !== '/')

  // } catch (e) {
  //   console.error('error', e)
  //   throw e;
  // }
};

// FYI this function returns a promise. Below is one example of how to use it. 👇
// (async () => {
//   const urls = await cloudStorage.getAllUrls();
//   console.log(urls);
// })();

// https://hrsea16blueocean.s3-us-west-2.amazonaws.com/download.jpeg

const commentMeOut = async () => {
    const urls = await cloudStorage.getAllUrls();
    console.log(urls);
};

// commentMeOut();

export default cloudStorage;
