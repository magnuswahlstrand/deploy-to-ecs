import { Context, Hono } from './deps.ts'

const app = new Hono()

app.get('/', (c: Context) => {
  return c.text('Hello Hono & Deno!')
})

export default app
