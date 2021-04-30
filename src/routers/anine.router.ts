import multer from 'multer';
import { Router } from 'express';
import {AnimeController} from '../controllers/anime.controller'
import { upload } from '../config/updateFile';

class RouterAnime {
    public router = Router();
    private animeController=new AnimeController();
    constructor() {
        
        this.updatePortada();
    }
    async updatePortada() {
        this.router.route('/portada').post(
            (req, res) => {
                this.animeController.oneFilePortada(req, res)
            }
        );
    }
    
}



/*index*/
/*router.route('/anime').get((req, res) => {
    const anime = new Controller(req, res);
    anime.function();
});*/

export const animeRouter=new RouterAnime();