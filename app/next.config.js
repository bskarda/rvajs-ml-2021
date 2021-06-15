const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    future: {
        webpack5: true,
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        if (dev) {
            // TODO: for some reason we need the extra /pages/ when running in dev mode
            config.plugins.push(
                new CopyPlugin({
                    // Use copy plugin to copy *.wasm to output folder.
                    patterns: [{ from: 'node_modules/onnxruntime-web/dist/*.wasm', to: 'static/chunks/pages/[name][ext]' }]
                })
            )
        } else {
            config.plugins.push(
                new CopyPlugin({
                    // Use copy plugin to copy *.wasm to output folder.
                    patterns: [{ from: 'node_modules/onnxruntime-web/dist/*.wasm', to: 'static/chunks/[name][ext]' }]
                })
            )
        }

        return config
    },
}