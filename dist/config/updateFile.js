"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
var multer_1 = __importDefault(require("multer"));
var path_1 = __importDefault(require("path"));
var mime_types_1 = __importDefault(require("mime-types"));
// SET STORAGE
var storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path_1.default.join(__dirname, '../../../update-convert-imagenkit/images'));
    },
    filename: function (req, file, cb) {
        var extencion = mime_types_1.default.extension(file.mimetype);
        //console.log(path.resolve(__dirname, '../../../update-convert-imagenkit/images'))
        cb(null, file.fieldname + "." + extencion);
    }
});
//tipo de imput
exports.upload = multer_1.default({ storage: storage }).fields([
    {
        name: 'portada', maxCount: 1
    }
]);
