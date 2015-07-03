var http = require('http');
var fs = require('fs');
var path = require('path');


//当连接到来的时候要执行的回调函数
function waiter(req,res){
    //向客户端写响应码和头信息 设置内容类型为 html格式，并设置字符编码
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html;charset=utf-8');
    //res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    //得到请求的URL
    var url = req.url;

    var urlObj = {};
    //解析URL，得到查询对易用 ? 用来分隔路径和查询字符串 比如中    /post?name=zfpx&age=6
    if(url.indexOf('?')>0){
        var urls = url.split('?');
        var pathname = urls[0];
        var queries = urls[1].split('&');//&用来分割不同的字段
        queries.forEach(function(query){
            var q = query.split('=');
            urlObj[q[0]] = q[1];
        })
    } else {
        var pathname = url;
    }

    var filename = './';
    if (pathname != '/') {
        filename = '.' + pathname;
    }

    fs.stat(filename,function(err,stat){
        if (stat && stat.isDirectory()) {
            list(filename, function(files) {
                files.forEach(function(file){
                    //过滤.开头的系统文件
                    if (!/^\./.test(file)) {

                        res.write('<a href="' + path.join(filename,file) + '">' + file + '</a>');
                        res.write('</br>');
                    }
                });
                res.end('');
            });
        } else if (stat && stat.isFile()) {
            console.log('xiiixv'+path.extname(filename))
            if(path.extname(filename)=='.rar'){
                res.setHeader('Content-Type','application/octet-stream');
                res.setHeader('Content-Disposition', 'attachment; filename=jyn.rar');
                fs.createReadStream(filename).pipe(res);

            }else{
                fs.readFile(filename, {flag: "r"}, function (err, data) {
                    if (err) {
                        res.end(err);
                    } else {
                        res.end(data);
                    }

                });
            }
        }
    });
}

function list(filename, callback)
{
    var result = [];
    fs.readdir(filename,function(err,files){
        if(err){
            console.log(err);
        }else{
            //console.log(files);
            callback(files);
        }
    });
}

//建立服务器
var server = http.createServer(waiter);
//在本机的8080端口上进行监听客户端请求
server.listen(8080,'localhost');