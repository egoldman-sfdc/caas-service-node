import * as dotenv from 'dotenv'
dotenv.config()

import express, {Application, Request, Response} from 'express'

const app: Application = express()
const port: string = process.env.PORT || '5000'

// register middlewares

// register routers

app.get('/', (req: Request, res: Response) => {
    res.json('Good')
})

app.listen(parseInt(port), () =>  {
    console.log(`Listening on port ${port}`)
})