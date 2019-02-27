module.exports={
	lintOnSave: false,
	indexPath: './../../Views/Shared/_Layout.cshtml',
	chainWebpack: config=>{
		config.plugin('html').tap(args=>{
            args[0].filename = './../../Views/Shared/_Layout.cshtml';
            args[0].template= '../Views/Shared/_LayoutTemplate.cshtml';
            return args;
			//return[{
			//	filename: './../../Views/Shared/_Layout.cshtml',
			//	template: '../Views/Shared/_LayoutTemplate.cshtml'
			//},
			//]
		});
	}
}