module.exports = {
  entry: "./app.js",
  output: {    filename: "bundle.js"   },
  devServer: {
    inline:true,
    port: 1234
  },
  module: {
       loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ],
    },

  watch: true
}