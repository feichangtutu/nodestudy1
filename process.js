/**
 * Created by yanni on 2015/6/28.
 */
//console.log(process);
var fs = require('fs');
console.log(process.memoryUsage())
console.log(process.cwd())//当前工作目录
console.log(fs.readFileSync('a.md'));
console.log(process.pid);

//挂起程序，执行完后不退出
process.stdin.on('data',function(chunk){
    process.stdout.write(chunk);
});
///挂起程序

process.on("SIGTERM",function(){
    console.log("无法自杀");
});