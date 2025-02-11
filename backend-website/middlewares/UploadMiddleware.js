const multer = require('multer');
const path = require('path');

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save images in 'uploads' folder
  },
  filename: (req, file, cb) => {
    const nameParts = file.originalname.split(' ');
    const lastName = nameParts[nameParts.length - 1]; // Get the last word
   const uniqueName = `${Date.now()}-${lastName}`;
    cb(null, uniqueName);
  }
});

// File filter (Only images)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPEG, PNG, and JPG are allowed!'), false);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
