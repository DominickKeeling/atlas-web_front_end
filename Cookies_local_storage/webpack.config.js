const path = require('path');

module.exports = {
    mode: 'development', // Set mode to development
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/'),
        },
        port: 8080,
        hot: true,
    },
};