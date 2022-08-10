const Koa = require('koa');
const app = new Koa();
const { play } = require('./tts-ws-node.js');
app.use(async ctx => {
    console.log('发起请求：' + ctx.url)
    let name = ctx.request.query.name || ''
    let res = false
    if (name) {
        res = await play(name)
    }
    ctx.body = res
})
app.listen(3000);
console.log('listening on port 3000');