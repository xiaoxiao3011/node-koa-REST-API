const news = require('./data-new');

const APIError = require('../rest').APIError;


module.exports = {
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

    'POST /api/news':async(ctx,next)=>{
       
    },

    'DELETE /api/news/:id': async (ctx, next) => {
      
    }
}