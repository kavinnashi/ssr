const path = require("path");

module.exports={

// tell the root entry file 
entry:'./src/client/client.js',
// tell where to put the out put 
output:{
    filename: 'bundle.js',
    path: path.resolve(__dirname,'public')
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