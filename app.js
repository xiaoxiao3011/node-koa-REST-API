//APP
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const jsonp = require('koa-jsonp')

const controller = require('./controller');
const templating = require('./templating');
const rest = require('./rest');

const app = new Koa();

const isProduction = process.env.NODE_ENV === 'production';	//判断是否为生产环境

app.use(async (ctx, next) => {  //输出请求
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    //记录请求时间
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

app.use(bodyParser());  //报文

app.use(templating('view', {    //模板加载
    noCache: !isProduction,	//非生产->不缓存
    watch: !isProduction
}));

app.use(rest.restify());    //REST接口

app.use(controller());  //扫描加载控制器

app.use(cors({
  origin: function(ctx) {
    if (ctx.url === '/test') {
      return false;
    }
    return '*';
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));  //跨域-cors

app.use(jsonp());

app.listen(3000);   // 在端口3000监听:
console.log('app started at port 3000...');