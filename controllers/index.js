// index: 登录页面
module.exports = {
    'GET /': async (ctx, next) => {
        ctx.render('index.html', {
            title: 'KOA'
        });
    }
};
