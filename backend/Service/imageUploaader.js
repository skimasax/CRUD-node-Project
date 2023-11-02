const cloudinary = require("cloudinary").v2;
const fs = require("fs");

const uploadImage = async (req, res, name) => {
  const image = req.files?.image;
  const maxSize = 1024 * 1024 * 10;

  try {
    if (!image) {
      throw new Error("Please upload an image");
    }

    if (image.size > maxSize) {
      throw new Error(`Image must not be larger than ${maxSize}`);
    }

    if (!image.mimetype.startsWith("image")) {
      throw new Error("You can only upload a file of type image");
    }

    const { public_id, secure_url } = await cloudinary.uploader.upload(
      req.files.image.tempFilePath,
      { use_filename: true, folder: name }
    );

    fs.unlinkSync(req.files.image.tempFilePath);
    return { public_id, secure_url };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = uploadImage;
