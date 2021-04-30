import express, { Application } from 'express';
import compresion from 'compression';
import morgan from 'morgan';
import cors from 'cors';
import { animeRouter } from './routers/anine.router';
import helmet from 'helmet';
class Server {
    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routers();
    }
    config(): void {

        this.app.set('port', process.env.PORT || 3300);
        this.app.use(morgan('dev'));

        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        //compresion
        this.app.use(compresion());
    }
    routers(): void {
        //general
        this.app.use('/anime', animeRouter.router);
    }


    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('server iniciado en port ', this.app.get('port'));
        });
    }
}

const servidor = new Server();
servidor.start();