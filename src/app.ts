import * as dotenv from 'dotenv'
dotenv.config()

import express, {Application, Request, Response} from 'express'
import { createServer } from './utils/server'

const app: Application = express()
const port: string = process.env.PORT || '5000'

createServer(parseInt(port))
    .then(server => {
        server.listen(parseInt(port), () =>  {
            console.log(`Listening on port ${port}`)
        })
    })
    .catch(err => {
        console.error(err)
    })