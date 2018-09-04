// 登录表单提交post接口
module.exports = {
    'POST /signin': async (ctx, next) => {
        var //获取用户名和密码
            email = ctx.request.body.email || '',
            password = ctx.request.body.password || '';

        if (email === '123@163.com' && password === '123456') { //判断是否正确
            //登录成功
            //设置cookie////////////////////
            // ctx.cookies.set(
            //     'cid',
            //     'hello world', {
            //         domain: 'localhost', //写cookie所在的域名
            //         path: '/', // 写cookie所在的路径
            //         maxAge: 10 * 60 * 1000, // cookie有效时长
            //         expires: new Date('2018-09-1'), // cookie失效时间
            //         httpOnly: false, // 是否只用于http请求中获取
            //         overwrite: false // 是否允许重写
            //     }
            // )
            //////////////////////////////////
            //设置session
            ctx.session.user = {
                email,
                password
            }
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
