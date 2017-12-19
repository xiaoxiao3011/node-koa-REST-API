// 登录表单提交post接口

module.exports = {
    'POST /signin': async (ctx, next) => {
        var                                                              //获取用户名和密码
            email = ctx.request.body.email || '',
            password = ctx.request.body.password || '';

        if (email === '123@163.com' && password === '123456') {         //判断是否正确
            //console.log('signin ok!');
            ctx.render('signin-ok.html', {
                title: '登录成功',
                name: email
            });
        } else {
            //console.log('signin failed!');
            ctx.render('signin-failed.html', {
                title: '登录失败'
            });
        }
    }
};
