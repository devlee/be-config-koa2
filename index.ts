import * as Koa from 'koa'

import * as Router from 'koa-router'

import demo1 = require('./src/routes/demo1')

const app = new Koa()

const devlee = demo1.devlee

const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = 'Hello World!'
  await next()
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('app server started ....localhost:3000');
})
