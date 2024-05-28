import {Context, Hono} from './deps.ts'

const app = new Hono()

app.get('/', (c: Context) => {
    return c.text('Hello Hono & Deno!')
})

app.get('/api', (c: Context) => {
    return c.json({message: 'Hello from the Deno API!'})
})

export default app
