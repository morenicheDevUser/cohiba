const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'public/src'),
    entry: {
        app: './app.js',
    },
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        publicPath: '/public/dist/',
        filename: '[name].bundle.js',
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "window.Tether": 'tether',
            tether: 'tether',
            Tether: 'tether'
        })
    ]
};