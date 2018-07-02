//江西农信server

//用户列表
const user=[
    {num:'105001',psw:'111111',name:'熊斌',pos:'行长',dep:'省联社',aut:'1'},
    {num:'114371',psw:'111111',name:'张晋',pos:'副主任',dep:'办公室',aut:'2'},//无开发测试
    {num:'106924',psw:'111111',name:'卫雨辰',pos:'文员',dep:'办公室',aut:'2'},
    {num:'106579',psw:'111111',name:'武文慧',pos:'科员',dep:'运营管理部',aut:'3'},//没哟代收发文
    {num:'108401',psw:'111111',name:'龚于洪',pos:'副总经理',dep:'运营管理部',aut:'3'},
    {num:'106211',psw:'111111',name:'万群',pos:'业务主管',dep:'营业部',aut:'4'},//无收发文，开发
    {num:'106009',psw:'111111',name:'赵淑军',pos:'总经理',dep:'营业部',aut:'4'}
]
//新闻列表
const news= [
    //要闻
	{"tim":"2018-5-1","title": "江西农商银行召开首次政策信息发布会","type":"1","thumb1": "http://img1.gtimg.com/ninja/1/2017/05/ninja149492147959734.jpg" },
	{"tim":"2018-5-2","title": "不忘初心忆峥嵘，牢记使命勇担当","type":"1","thumb1": "http://img1.gtimg.com/finance/pics/hv1/45/105/1984/129036420.jpg" },
	{"tim":"2018-5-3","title": "江西农信开展“强健体魄”活动","type":"1","thumb1": "http://img1.gtimg.com/finance/pics/hv1/45/105/1984/129036420.jpg"},
	{"tim":"2018-5-2","title": "省联社领导深入井冈山农商调研","type":"1","thumb1": "http://img1.gtimg.com/finance/pics/hv1/45/105/1984/129036420.jpg"},
    {"tim":"2018-4-16","title": "江西农信2018第一季度形式分析","type":"1","thumb1": "http://img1.gtimg.com/finance/pics/hv1/45/105/1984/129036420.jpg"},
    {"tim":"2018-5-22","title": "省联社领导赴各地开展调研工作","type":"1","thumb1": "http://img1.gtimg.com/finance/pics/hv1/45/105/1984/129036420.jpg"},
    {"tim":"2018-4-2","title": "学习贯彻十九大精神专题活动","type":"1","thumb1": "http://img1.gtimg.com/finance/pics/hv1/45/105/1984/129036420.jpg"},
    {"tim":"2018-5-12","title": "江西农信2018第1次会议","type":"1","thumb1": "http://img1.gtimg.com/finance/pics/hv1/45/105/1984/129036420.jpg"},
    {"tim":"2018-4-3","title": "江西农信2018第2次会议","type":"1","thumb1": "http://img1.gtimg.com/finance/pics/hv1/45/105/1984/129036420.jpg"},
    {"tim":"2018-5-3","title": "江西农信2018第3次会议","type":"1","thumb1": "http://img1.gtimg.com/finance/pics/hv1/45/105/1984/129036420.jpg"},
    //通知
    {"tim":"2018-5-1","title": "省联社《农商银行》第32期征稿通知","type":"2"},
	{"tim":"2018-4-20","title": "省联社《农商银行》第31期征稿通知","type":"2"},
	{"tim":"2018-4-15","title": "省联社《农商银行》第30期征稿通知","type":"2"},
	{"tim":"2018-4-14","title": "省联社客户服务中心招聘公告"},
    {"tim":"2018-4-16","title": "关于成立十九大期间网络安全保障的通知","type":"2" },
    {"tim":"2018-5-22","title": "省联社《农商银行》第29期征稿通知","type":"2" },
    {"tim":"2018-4-2","title": "省联社《农商银行》第28期征稿通知","type":"2" },
    {"tim":"2018-5-12","title": "省联社《农商银行》第27期征稿通知","type":"2" },
    {"tim":"2018-4-3","title": "省联社《农商银行》第26期征稿通知","type":"2" },
    {"tim":"2018-5-3","title": "省联社《农商银行》第25期征稿通知","type":"2"},
    //领导批示
    {"tim":"2018-5-1","title": "省联社领导对业务优化的批示","type":"3" },
	{"tim":"2018-5-2","title": "省联社领导对综合工作的批示","type":"3" },
	{"tim":"2018-5-3","title": "省联社领导对业务优化的批示","type":"3" },
	{"tim":"2018-5-2","title": "省联社领导对2017年上半年信息宣传的批示","type":"3" },
    {"tim":"2018-4-16","title": "省联社领导对2017年上第一季度宣传的批示","type":"3" },
    {"tim":"2018-5-22","title": "省联社领导对业务优化的批示","type":"3" },
    {"tim":"2018-4-2","title": "省联社领导对业务优化的批示","type":"3" },
    {"tim":"2018-5-12","title": "省联社领导对业务优化的批示","type":"3" },
    {"tim":"2018-4-3","title": "省联社领导对业务优化的批示","type":"3" },
    {"tim":"2018-5-3","title": "省联社领导对业务优化的批示","type":"3" },
    //工作动态
    {"tim":"2018-5-1","title": "江西农商银行移动支付便民支付工程","type":"4" },
	{"tim":"2018-5-2","title": "财富惠农信贷通","type":"4" },
	{"tim":"2018-5-3","title": "于都农商银行开展“建设”活动","type":"4" },
	{"tim":"2018-5-2","title": "发扬背包精神","type":"4" },
    {"tim":"2018-4-16","title": "广昌农商银行认真履行贯彻省联社关于","type":"4" },
    {"tim":"2018-5-22","title": "江西农商银行移动支付便民支付工程","type":"4" },
    {"tim":"2018-4-2","title": "江西农商银行移动支付便民支付工程","type":"4" },
    {"tim":"2018-5-12","title": "江西农商银行移动支付便民支付工程","type":"4" },
    {"tim":"2018-4-3","title": "江西农商银行移动支付便民支付工程","type":"4" },
    {"tim":"2018-5-3","title": "江西农商银行移动支付便民支付工程","type":"4" },
    //工作动态
    {"tim":"2018-5-1","title": "2016制度汇编","type":"5" },
	{"tim":"2018-5-2","title": "2016制度汇编","type":"5" },
	{"tim":"2018-5-3","title": "2016制度汇编","type":"5" },
	{"tim":"2018-5-2","title": "202016制度汇编","type":"5" },
    {"tim":"2018-4-16","title": "202016制度汇编","type":"5" },
    {"tim":"2018-5-22","title": "2016制度汇编","type":"5" }
]
//省联社文档

const doc={
        "code": "0",
        "msg": "success",
        "page": {
            "totalCount": "3",
            "totalPages": "1"
        },
        "data":[
            {
                "rows": [
        		     {
    		            "item": {
    		                "type": "string",
    		                "value": "001"
    		            }
    		        },
    		        {
    		            "item": {
    		                "type": "string",
    		                "value": "关于xxx的任职通知"
    		            }
    		        },
    		        {
    		            "item": {
    		                "type": "string",
    		                "value": "办公室文印岗"
    		            }
    		        },
    		        {
    		            "item": {
    		                "type": "Date",
    		                "value": "2018年5月3日"
    		            }
    		        },
    		        {
    		            "item": {
    		                "type": "string",
    		                "value": "江西农信"
    		            }
    		        },
    		        {
    		            "item": {
    		                "type": "string",
    		                "value": "发文密级"
    		            }
    		        },
                    {
    		            "item": {
    		                "type": "string",
    		                "value": "作者(发文人)"
    		            }
    		        }
		         ]
             },
             {
                 "rows": [
         		     {
     		            "item": {
     		                "type": "string",
     		                "value": "002"
     		            }
     		        },
     		        {
     		            "item": {
     		                "type": "string",
     		                "value": "关于XX的处理意见"
     		            }
     		        },
     		        {
     		            "item": {
     		                "type": "string",
     		                "value": "办公室"
     		            }
     		        },
     		        {
     		            "item": {
     		                "type": "Date",
     		                "value": "2015年5月3日"
     		            }
     		        },
     		        {
     		            "item": {
     		                "type": "string",
     		                "value": "江西农信"
     		            }
     		        },
     		        {
     		            "item": {
     		                "type": "string",
     		                "value": "发文密级"
     		            }
     		        },
                     {
     		            "item": {
     		                "type": "string",
     		                "value": "作者(发文人)"
     		            }
     		        }
 		         ]
             },
             {
                 "rows": [
                    {
                       "item": {
                           "type": "string",
                           "value": "002"
                       }
                   },
                   {
                       "item": {
                           "type": "string",
                           "value": "关于XX的处理意见"
                       }
                   },
                   {
                       "item": {
                           "type": "string",
                           "value": "办公室"
                       }
                   },
                   {
                       "item": {
                           "type": "Date",
                           "value": "2015年5月3日"
                       }
                   },
                   {
                       "item": {
                           "type": "string",
                           "value": "江西农信"
                       }
                   },
                   {
                       "item": {
                           "type": "string",
                           "value": "发文密级"
                       }
                   },
                     {
                       "item": {
                           "type": "string",
                           "value": "作者(发文人)"
                       }
                   }
                ]
              }
       ]
   }


//办公收文
const sw={}

module.exports={
    //登录
    login:(v)=>{
        return user.filter(function(ele){
            return ele.num == v.account_
        })
    },
    //新闻动态
    news:(v)=>{
        // console.log(v);
        // console.log(v.type);
        var i=parseInt(v.type);
        //console.log(i);
        return news.filter(function(ele){
            return ele.type ==i
        })
    },
    //文档列表
    docs:(v)=>{
        return doc
    }
    //收文列表
}
