/**
 * Created by yanni on 2015/6/27.
 */
var http = require('http');

var server = http.createServer(waiter);

function waiter(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    //res.end('welcomeÄãºÃ')
    var url = req.url;
    if(url == '/menu'){
        res.end('<ul><a href="/jia"><li>jiayanni</li></a><a href="/yanni"><li>yanni</li></a></ul>')
    }else if(url == '/jia'){
        res.end("jia")
    }else if(url == '/yanni'){
        res.end("yanni")
    }else{
        res.end('end');
    }
}
//var waiter = function(req,res){
//
//}


server.listen(8080,'localhost');