var datas=[
        { "num":"a_detail","title": "比特币8年暴涨221万倍","tag": "新闻","details": "拉丝勒-豪涅茨成功用10000比特币换取了两块披萨","thumb": ["http://img1.gtimg.com/ninja/1/2017/05/ninja149492147959734.jpg" ]},
        { "num":"b_detail","title": "中美这些职业挣钱最多","tag": "新闻","details": "近日，英国薪资调查公司Emolument对华尔街840名专业","thumb": ["http://img1.gtimg.com/finance/pics/hv1/45/105/1984/129036420.jpg" ]},
        { "num":"a_detail","title": "比特币8年暴涨221万倍","tag": "新闻","details": "拉丝勒-豪涅茨成功用10000比特币换取了两块披萨","thumb": ["http://img1.gtimg.com/ninja/1/2017/05/ninja149492135055058.jpg","http://img1.gtimg.com/ninja/1/2017/05/ninja149492149562615.jpg","http://n.sinaimg.cn/tech/transform/20170515/p4PD-fyfeutp9562264.jpg"]},
        { "num":"b_detail","title": "中美这些职业挣钱最多","tag": "新闻","details": "近日，英国薪资调查公司Emolument对华尔街840名专业","thumb": ["http://img1.gtimg.com/finance/pics/hv1/45/105/1984/129036420.jpg","http://img1.gtimg.com/finance/pics/hv1/47/105/1984/129036422.jpg","http://img1.gtimg.com/finance/pics/hv1/48/105/1984/129036423.jpg"]},
        { "num":"a_detail","title": "标题","tag": "标签","details": "详情信息","thumb": ["http://img1.gtimg.com/ninja/1/2017/05/ninja149492147959734.jpg"] },
        { "num":"a_detail","title": "标题","tag": "标签","details": "详情信息","thumb": ["http://img1.gtimg.com/ninja/1/2017/05/ninja149492147959734.jpg"] },
        { "num":"a_detail","title": "标题","tag": "标签","details": "详情信息","thumb": ["http://img1.gtimg.com/ninja/1/2017/05/ninja149492147959734.jpg"] },
        { "num":"b_detail","title": "标题","tag": "标签","details": "详情信息","thumb": ["http://img1.gtimg.com/finance/pics/hv1/45/105/1984/129036420.jpg","http://img1.gtimg.com/finance/pics/hv1/47/105/1984/129036422.jpg","http://img1.gtimg.com/finance/pics/hv1/48/105/1984/129036423.jpg"]},
        { "num":"b_detail","title": "标题","tag": "标签","details": "详情信息","thumb": ["http://img1.gtimg.com/finance/pics/hv1/45/105/1984/129036420.jpg","http://img1.gtimg.com/finance/pics/hv1/47/105/1984/129036422.jpg","http://img1.gtimg.com/finance/pics/hv1/48/105/1984/129036423.jpg"]},
        { "num":"b_detail","title": "标题","tag": "标签","details": "详情信息","thumb": ["http://img1.gtimg.com/finance/pics/hv1/45/105/1984/129036420.jpg","http://img1.gtimg.com/finance/pics/hv1/47/105/1984/129036422.jpg","http://img1.gtimg.com/finance/pics/hv1/48/105/1984/129036423.jpg"]}
    ]

module.exports = {
    getNews: () => {
        return datas;
    },

    getNew: (id) => {
        console.log("^-^"+id);
        var id=parseInt(id);
        console.log(typeof(id));
        console.log(0 == id);
        for (var i = 0; i < datas.length; i++) {
            if (i == id) {
                return datas[i];
            }
        }
        return null;
    }
};