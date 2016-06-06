import * as Koa from 'koa'

import * as Router from 'koa-router'

const router: Router = require('./src/routes')

const app = new Koa()

app.use(router.routes()).use(router.allowedMethods());

app.listen(3456, () => {
  console.log('app server started at http://localhost:3456');
})
