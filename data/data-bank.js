var datas=[
        {name:'王',serv:'开卡',time:'03:30',down:true},
        {name:'高',serv:'xxxxx',time:'02:30',down:true},
        {name:'王',serv:'开卡',time:'03:30',down:false},
        {name:'高',serv:'开卡',time:'00:30',down:true},
        {name:'高',serv:'开卡',time:'00:30',down:true},
        {name:'高',serv:'开卡',time:'00:30',down:true},
        {name:'高',serv:'转账',time:'00:30',down:true},
        {name:'高',serv:'开卡',time:'00:30',down:true}
    ]

module.exports = {
    getUser: () => {
        return datas;
    }
};