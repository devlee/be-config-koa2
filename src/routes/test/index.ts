import * as Router from 'koa-router'

const testRouter: Function = (router: Router) => {
  router.get('/api/testData', (ctx, next) => {
    ctx.body = {
      data: 'TEST DATA'
    }
  })
}

export = testRouter
