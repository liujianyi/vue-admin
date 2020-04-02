const KoaRouter = require('koa-router');

const router = new KoaRouter();

router
     
      .get('/api/',(ctx,next)=>{

          ctx.body="hell world I am liujianyi";

      })

      .get('/api/router/',(ctx,next)=>{
            ctx.body={
                msg:"here is router",

                query:ctx.query,

                queryStr:ctx.querystring
            }
      })

      .post('/api/users/',(ctx,next)=>{
          ctx.body="here is user"
      })


module.exports = router