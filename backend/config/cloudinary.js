const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

const uploadToCloudinary = (buffer) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
        {
            folder: "Garage_Img",
            allowed_formats: ["png", "jpg", "jpeg"],
        },
        (error, result) => {
            if(error) reject(error);
            else resolve(result);
        }
    );
    stream.end(buffer);
    })
}


module.exports = {
    cloudinary,
    uploadToCloudinary,
  }