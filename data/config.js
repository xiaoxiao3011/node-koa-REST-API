//数据库连接
const mysql      = require('mysql')
const sqlConnect = mysql.createConnection({
  host     : 'rm-bp10n327x7r49r628ko.mysql.rds.aliyuncs.com',   // 数据库地址
  user     : 'root',    // 数据库用户
  password : 'pys8315028-'   // 数据库密码
  database : 'koa'  // 选中数据库
})

module.exports=sqlConnect

