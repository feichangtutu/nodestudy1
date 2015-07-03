var fs = require('fs');
var path = require('path');

var filename = './';
fs.readdir(filename,function(err,files){
    if(err){
        console.log(err);
    }else{
        console.log(files);
        files.forEach(function(file){
            console.log(file);
            //fs.stat(path.join(filename,file),function(err,stat){
            //    console.log(stat.isDirectory());
            //    console.log(stat);
            //    console.log(stat.isFile());
            //});
        });
    }
});