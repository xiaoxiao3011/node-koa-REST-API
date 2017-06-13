var products=[
	{
		name:'iPhone',
		prize:6999
	},{
		name:'Kindle',
		prize:999
	}
]

module.export={
	'GET/api/products':async(ctx,next)=>{
		ctx.response.type='application/json';
		ctx.response.body={
			products:products
		};
	}
}
