const userData= require('../data/data-userlist');

module.exports={
	//返回全部数据
	getAllUser:()=>{
		return userData;
	},
	//性别选择
	getUserSex:(sex)=>{
		return userData.filter(function(ele){
			return ele.sex==sex;
		})
	},
	//姓名搜索
	getUserName:(name)=>{
		return userData.filter(function(ele){
			return ele.name.indexOf(name) != -1;
		})
	},
	//删除
	deleteUser:(name)=>{
		userData.forEach(function(el,index,arr){
			if(el.id==name){
				arr.splice(index,1);
			}
		})
	},
	//添加
	addUser:async(v)=>{
		var u={
			id:0,
			name:v.name,
			sex:v.sex,
			age:v.age

		}
		userData.forEach(function(el,index,arr){
			if(parseInt(el.id)>u.id){
				u.id=parseInt(el.id)+1;
			};
		});
		userData.push(u);
	},
	//修改
	editUser:async(v)=>{
		//console.log(v);
		userData.forEach(function(el,index,arr){
			if(parseInt(el.id)==parseInt(v.id)){
				userData[index].name=v.name;
				userData[index].sex=v.sex;
				userData[index].age=v.age;
				return;
			}
		})
	}

}