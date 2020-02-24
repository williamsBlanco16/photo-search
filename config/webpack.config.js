const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: "development", // "production" | "development" | "none"
  //which file types are in our project, and where they are located
  resolve:{
    extensions:['.js','.jsx','.json'],
    modules:[path.resolve(__dirname, "src"),'node_modules']
  },

  module:{
    //how to process project files files with loader
    rules:[
      {
        //Process any .js and .jsx file with babel
        test:/\.jsx?$/,
        loader:"babel-loader"
      }
      
    ]
    
  },
  //default ./src
  entry:[
    './src/index.jsx'
  ],

  //where to output the final bundle code to
  output:{
    filename: 'app.js',
    path: path.resolve(__dirname, "../dist")
  }
  
};