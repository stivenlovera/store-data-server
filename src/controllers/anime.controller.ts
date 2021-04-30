import { Request, Response } from 'express';
import { upload } from '../config/updateFile';
import spawn  from 'cross-spawn'
export class AnimeController {
    constructor() {

    }
    oneFilePortada(req: Request, res: Response) {
        console.log("pasa");
        upload(req, res, (err: any) => {
            if (err) {
                res.json({ status: err})
                return
            }
            const child=spawn("node",["-v"]);
            res.json({ status: {
                "message": "Achivo recibido",
                "code": "200",
                "field": "original",
            } })
        });
        
    }
}