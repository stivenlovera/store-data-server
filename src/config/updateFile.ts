import multer from 'multer';
import path from 'path'
import mime, { extension, types } from 'mime-types';
  // SET STORAGE
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../../update-convert-imagenkit/images'))
    },
    filename: function (req, file, cb) {
        const extencion = mime.extension(file.mimetype);
        //console.log(path.resolve(__dirname, '../../../update-convert-imagenkit/images'))
        cb(null,`${file.fieldname}.${extencion}`)
    }
})
//tipo de imput
export const upload = multer({ storage: storage }).fields(
    [
        {
            name: 'portada', maxCount: 1
        }
    ]
);
