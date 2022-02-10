const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config.js')
const FileManagerPlugin = require('filemanager-webpack-plugin')

module.exports = merge(baseConfig, {
    plugins: [
        new FileManagerPlugin({ events: {
                onEnd: [{
                    copy: [
                        {
                            source: path.join(__dirname, 'www/js/main.js'),
                            destination: path.join(__dirname, 'platforms/android/app/src/main/assets/www/js/main.js')
                        }
                    ]
                }]
            }})
    ]
})
