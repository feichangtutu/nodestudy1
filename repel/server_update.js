/**
 * Created by yanni on 2015/6/27.
 * ��ֲ��� by teacher
 */
var http = require('http');
//����������

var server = http.createServer(waiter);

function waiter(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    var url = req.url;
    var urlObj = {};
    var urls = url.split('?');
    var pathname = urls[0];
    if(url.indexOf('?')>0){

        var queries = urls[1].split('&');
        queries.forEach(function(query){
            var q = query.split('=');
            urlObj[q[0]] = q[1];
        })
    }
    if(pathname == '/menu'){
        res.end("<ul><li><a href='/yanni?"+urls[1]+"'>yanni</a></li><li><a href='/jia'>jia</a></li></ul>");
        //res.end('<ul><a href="/jia"><li>jiayanni</li></a><a href="/yanni?+'urls[1]'"><li>yanni</li></a></ul>')
    }else if(pathname == '/jia'){
        res.end("jia")
    }else if(pathname == '/yanni'){
        res.end('niaho你好'+urlObj['num']+'了');
    }else{
        res.end('end');
    }
}
server.listen(8080,'localhost');