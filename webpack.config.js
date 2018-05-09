module.exports = [{
    devServer: {
        inline:true,
        port: 8008
    },
    entry: "./js/app.jsx",
    output: {
        path: __dirname + '/js',
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['babel-preset-latest', 'react']
            }
        }]
    }
}];