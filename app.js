//APP
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');

const controller = require('./controller');
const templating = require('./templating');
const rest = require('./rest');

const app = new Koa();

const isProduction = process.env.NODE_ENV === 'production';	//判断是否为生产环境

app.use(async (ctx, next) => {  //计算响应时间
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    // var
    //     start = new Date().getTime(),
    //     execTime;
    await next();
    // execTime = new Date().getTime() - start;
    // ctx.response.set('X-Response-Time', `${execTime}ms`);
});

if (! isProduction) {   //静态文件加载
    let staticFiles = require('./static-file');
    app.use(staticFiles('/static/', __dirname + '/static'));
}

app.use(bodyParser()); 

app.use(templating('view', {
    noCache: !isProduction,	//非生产->不缓存
    watch: !isProduction
}));

app.use(rest.restify());    //REST接口

app.use(controller());  //扫描控制器

app.use(cors());  //跨域

app.listen(3000);   // 在端口3000监听:
console.log('app started at port 3000...');