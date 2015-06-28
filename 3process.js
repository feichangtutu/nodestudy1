/**
 * Created by yanni on 2015/6/28.
 */
//内存使用量
//rss 内存的消耗量 heapTotal 总量  heapUsed 已经使用的量
console.log(process.memoryUsage());
//current workding directory 当前工作目录
//var fs = require('fs');
//console.log(process.cwd());
//console.log(fs.readFileSync('1.txt'));

process.stdin.on('data',function(chunk){
    process.kill(chunk);
});