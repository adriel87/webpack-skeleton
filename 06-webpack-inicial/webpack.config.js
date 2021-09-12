const htmlWebPackPlugin = require ('html-webpack-plugin')

module.exports={

    mode: 'development',
    module:{
        rules:[
            {
                test: /\.html$/,
                loader: 'html-loader',
                options:{
                    sources:false,
                    minimize:false,
                },
            }
        ]
    },
    plugins:[
        new htmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
    ]









}