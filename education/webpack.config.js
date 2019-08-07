var path = require('path')  // 引入操作路径模块
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    mode: 'development',
    // 输入文件
    entry: './src/main.js',
    output: {
        // 输出目录
        path: path.resolve(__dirname, './dist'),
        // 静态目录,从这里取文件
        publicPath: './dist/',
        // 文件名
        filename: 'index.js',
    },
    watch:true,//自動更新
    module: {
        rules: [
            
            //解析vue后缀文件
            {
                test: /\.vue$/, 
                use: [
                  {loader: 'vue-loader'}
                ]
            },
            //用巴babel解析js文件 排除模块安装目录的文件
            {
                test: /\.js$/, 
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                include: '/src',
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                  )
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: { appendTsSuffixTo: [/\.vue$/] }
              },
              {
                test: /\.pug$/,
                loader: 'pug-plain-loader'
              },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ],
              },
            {
 
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader',
                },
                {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpe?g|gif)(\?\S*)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options:{
                            
                        }
                }
                ]
                
            },
            {
                test: /\.(eot|ttf|woff|woff2|png|jpe?g|gif|svg)(\?.*)?$/, //
                loader: 'url-loader',
                options: {
                  limit: 10000000,
        
                }
              },
        ]
    },
    plugins: [
        // 请确保引入这个插件！
        new VueLoaderPlugin()
      ]
}