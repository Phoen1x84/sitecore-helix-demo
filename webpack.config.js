const path = require('path');
const webpack = require('webpack');
const WebpackMSBuildPlugin = require('webpack-msbuild-plugin'); // module does not work as expected

module.exports = {    
    entry: {
        main: './src/Project/TeaRoom/code/Sitecore.TeaRoom.Website/src/scripts/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './[name]-bundle.js',
        publicPath: '/dist'
    },

    plugins: []
}