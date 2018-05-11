const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/App.jsx',
        vendor: ['react', 'react-dom', 'whatwg-fetch', 'babel-polyfill']
    },
    output: {
        path: '/home/antoine/dev/mern/static',
        filename: '[name].bundle.js'
    },

    //not valid in webPack 4
    // plugins: [
    //     new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
    // ],
    
   optimization: {
    splitChunks: {
        cacheGroups: {
            commons: {
                name: "vendor",   
                chunks: "all"
            }
        }
    }
   },

    module: {
        rules: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
    ,
    devServer: {
        port: 8000,
        contentBase: 'static',
        proxy: {
            '/api/*' : {
                target: 'http://localhost:3000'
            }
        } 
    }
    ,
    devtool: 'source-map'
};