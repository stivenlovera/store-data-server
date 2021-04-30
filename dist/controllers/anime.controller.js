"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimeController = void 0;
var updateFile_1 = require("../config/updateFile");
var cross_spawn_1 = __importDefault(require("cross-spawn"));
var AnimeController = /** @class */ (function () {
    function AnimeController() {
    }
    AnimeController.prototype.oneFilePortada = function (req, res) {
        console.log("pasa");
        updateFile_1.upload(req, res, function (err) {
            if (err) {
                res.json({ status: err });
                return;
            }
            var child = cross_spawn_1.default("node", ["-v"]);
            res.json({ status: {
                    "message": "Achivo recibido",
                    "code": "200",
                    "field": "original",
                } });
        });
    };
    return AnimeController;
}());
exports.AnimeController = AnimeController;
