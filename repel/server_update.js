/**
 * Created by yanni on 2015/6/27.
 * 拆分参数 by teacher
 */
var http = require('http');
//建立服务器

var server = http.createServer(waiter);

function waiter(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    var url = req.url;
    var urlObj = {};
    if(url.indexOf('?')>0){
        var urls = url.split('?');
        var pathname = urls[0];
        var queries = urls[1].split('&');
        queries.forEach(function(query){
            var q = query.split('=');
            urlObj[q[0]] = q[1];
        })
    }
    if(pathname == '/menu'){
        res.end('<ul><a href="/jia"><li>jiayanni</li></a><a href="/yanni"><li>yanni</li></a></ul>')
    }else if(pathname == '/jia'){
        res.end("jia")
    }else if(pathname == '/yanni'){
        res.end("yanni")
    }else{
        res.end('end');
    }
}
server.listen(8080,'localhost');