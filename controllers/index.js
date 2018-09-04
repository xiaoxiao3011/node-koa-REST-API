// index: 登录页面
module.exports = {
    'GET /': async (ctx, next) => {
    	var a=ctx.cookies.get('cid');	//注释部分为判断是否有登录cookie,如果有则跳转至登录成功页面
    	console.log(a);
    	if(a=='helloworld'){
    			ctx.render('signin-ok.html', {
     	           title: '登录成功',
     	           name: email
     			});
    	}else{
    		ctx.render('index.html', {
            	title: 'KOA'
        	});
    	}

    }
};
