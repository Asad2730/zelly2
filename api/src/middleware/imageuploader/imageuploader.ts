import multer from 'multer';

const fileTypeMap: any = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg',
}

export const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValid = fileTypeMap[file.mimetype];
        let uploadError: any = new Error('image file type invalid');
        if (isValid) {
            uploadError = null
        }

        cb(uploadError, 'uploads/')
    },
    filename: function (req, file, cb) {
        const filename = file.originalname.split(' ').join('-');
        const extension = fileTypeMap[file.mimetype];
        cb(null, `${filename}-${Date.now()}.${extension}`);
    }
})