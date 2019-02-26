module.exports={
	lintOnSave: false,
	indexPath: './../../Views/Shared/_Layout.cshtml',
	chainWebpack: config=>{
		config.plugin('html').tap(args=>{
			return[{
				filename: './../../Views/Shared/_Layout.cshtml',
				template: '../Views/Shared/_LayoutTemplate.cshtml'
			},
			]
		});
	}
}