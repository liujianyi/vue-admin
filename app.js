const Koa = require('koa');
 
const app = new Koa();

const static = require('koa-static');

const router = require("./api/router");

const path = require('path');
 
app.use(static(path.resolve(__dirname,'./static')));

app.use(async (ctx,next)=>{
    
   const start = Date.now();

     await next();
    
   ctx.ms = Date.now() - start;

    console.log(`${ctx.method} ${ctx.url} - ${ctx.ms} ms`)
});
app.use(router.routes());

app.listen(8000,()=>{
    console.log("this server listening 8000 port ")
})