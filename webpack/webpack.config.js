module.exports = {
  context: __dirname,
  devtool: "source-map",
  entry: "./js/scripts.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  }
  // module:{
  //   loaders: [
  //     {test : /\.css$/, loader: 'style-loader!css-loader!'}
  //   ]
  // },
  // devServer: {
  //   inline:true,
  //   port: 10000
  // }
};
