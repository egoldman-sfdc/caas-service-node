import request from 'supertest'
import {Express} from 'express-serve-static-core'

import { createServer } from '../src/utils/server'

let server: Express

beforeAll(async () => {
    server = await createServer(5000)
})

describe('HEAD /', () => {
    it('should return 200', async () => {
        const t = await request(server)
            .head(`/`)
            .expect('Content-Type', /json/)
            .expect(200)
            // .end((err, res) => {
            //     console.log(res.body)
            // })
    })
})