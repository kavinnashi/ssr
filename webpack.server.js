const path = require("path");

module.exports={
// inform webpack , building node js bundle not for browser.
target:'node',
// tell the root entry file 
entry:'./src/index.js',
// tell where to put the out put 
output:{
    filename: 'bundle.js',
    path: path.resolve(__dirname,'build')
},
// tell webpack to run babel 
module:{
    rules:[{
        test:/\.js?$/,
        loader:'babel-loader',
        exclude:'/node_modules/',
        options:{
            presets:[
                'react',
                'stage-0',
                ['env',{targets:{browsers:['last 2 versions']}}]

            ]
        }
    }]
}
}