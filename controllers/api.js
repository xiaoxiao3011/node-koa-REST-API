const APIError = require('../rest').APIError;   //错误请求处理

//服务...
const userlist=require('../server/user');

//请求接口配置...
module.exports = {

    //userlist全部
    'GET /api/userlist':async(ctx,next)=>{
        ctx.rest({
            userlist:userlist.getAllUser()
        })
    },
    //选择男
    'GET /api/userlist/m':async(ctx,next)=>{
        ctx.rest({
            userlist:userlist.getUserSex('男')
        })
    },
    //选择女
    'GET /api/userlist/f':async(ctx,next)=>{
        ctx.rest({
            userlist:userlist.getUserSex('女')
        })
    },
    //姓名搜索
    'GET /api/userlist:name':async(ctx,next)=>{
        ctx.rest({
            userlist:userlist.getUserName(ctx.params.name)
        });
    },
    //删除用户
    'DELETE /api/userlist:id':async(ctx,next)=>{
        ctx.rest({
            userlist:userlist.deleteUser(ctx.params.id)
        })
    },
    //添加用户
    'PUT /api/adduser':async(ctx,next)=>{
        //console.log("put");
        ctx.rest({
            userlist:userlist.addUser(ctx.request.body)
        })
    },
    //修改用户信息
    'POST /api/edituser':async(ctx,next)=>{
        ctx.rest({
            userlist:userlist.editUser(ctx.request.body)
        })
    }


}
