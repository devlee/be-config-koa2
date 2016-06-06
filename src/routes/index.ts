import * as Router from 'koa-router'

const testRouter: Function = require('./test')

const router = new Router()

router.get('/', (ctx, next) => {
  ctx.body = '<h1>be-config-koa2</h1><br>'
  ctx.body += '<h2>current api list:</h2><br>'
  ctx.body += '<a href="/api/testData">/api/testData</a>'
})

testRouter(router);

export = router
