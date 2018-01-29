//APP create@Pangys
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');


const controller = require('./controller'); 	//扫描控制器
const templating = require('./templating'); 	//模板编译
const rest = require('./rest');             	//restAPI

//const ws = require('./ws/jnbank');

const app = new Koa();

const isProduction = process.env.NODE_ENV === 'production';				//判断是否为生产环境

app.use(cors());  				//跨域-cors
app.use(bodyParser());          //解析请求

app.use(async (ctx, next) => {  //输出请求
    console.log(`${ctx.request.method} ${ctx.request.url}...`); //输出收到的请求
    await next();
});
if (! isProduction) {           //静态文件加载
    let staticFiles = require('./static-file');
    app.use(staticFiles('/static/', __dirname + '/static'));
}
app.use(templating('view', {    //模板加载
    noCache: !isProduction,	    //非生产->不缓存
    watch: !isProduction
}));
app.use(rest.restify());        //REST接口
app.use(controller());          //扫描加载控制器

//ws.ws();

app.listen(3000);   			// 在端口3000监听:
console.log('app started...');