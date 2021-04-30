"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var compression_1 = __importDefault(require("compression"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var anine_router_1 = require("./routers/anine.router");
var helmet_1 = __importDefault(require("helmet"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.config();
        this.routers();
    }
    Server.prototype.config = function () {
        this.app.set('port', process.env.PORT || 3300);
        this.app.use(morgan_1.default('dev'));
        this.app.use(helmet_1.default());
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        //compresion
        this.app.use(compression_1.default());
    };
    Server.prototype.routers = function () {
        //general
        this.app.use('/anime', anine_router_1.animeRouter.router);
    };
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get('port'), function () {
            console.log('server iniciado en port ', _this.app.get('port'));
        });
    };
    return Server;
}());
var servidor = new Server();
servidor.start();
