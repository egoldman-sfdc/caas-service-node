import express, { Request, Response } from 'express'
import { Express } from 'express-serve-static-core'

export async function createServer(port: number): Promise<Express> {
    const app = express();
    
    // register middlewares

    // register routers

    app.head('/', (req: Request, res: Response) => {
        res.json('Heartbeat good')
    });

    return app;
}