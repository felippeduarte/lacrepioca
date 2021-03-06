const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //ponto de entrada. O processo começará aqui e todas as importações a partir deste arquivo
    entry: './src/index.js',
    output: {
        //caminho do arquivo "compilado"
        path: path.join(__dirname, '/dist'),
        //nome do arquivo
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                //irá verificar todos os arquivos que terminem com .js
                test: /\.js$/,
                //ignora a pasta node_modules
                exclude: /node_modules/,
                use: {
                    //utiliza o compilador babel
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ],
                include: path.join(__dirname, 'assets/css'),
            },
            {
                test: /\.(png|jpg)$/,
                include: path.join(__dirname, 'assets/img'),
                loader: 'file-loader',
                options: {
                    name: '[path][name]-[hash:8].[ext]'
                },
             }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}