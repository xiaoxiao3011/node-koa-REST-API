// userlist :列表页
module.exports = {
    'GET /user': async (ctx, next) => {
        ctx.render('userList.html', {
            title: '用户列表'
        });
    }
};