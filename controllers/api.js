const APIError = require('../rest').APIError;   //错误请求处理

//数据项...
const news = require('../data/data-new');
const user = require('../data/data-user');

//请求借口配置...
module.exports = {

    //get请求
    'GET /api/news':async(ctx,next)=>{
        ctx.rest({
            news:news.getNews()
        });
    },
    'GET /api/new:id':async(ctx,next)=>{
        ctx.rest({
            news:news.getNew(ctx.params.id)
        });
    },

    //user
    'GET /api/user':async(ctx,next)=>{
        ctx.rest({
            news:user.getUser()
        });
    },

    //post请求
    'POST /api/news':async(ctx,next)=>{
       
    },
    
    //DELETE
    'DELETE /api/news/:id': async (ctx, next) => {
      
    }
}