/**
 * Created by yanni on 2015/6/28.
 */
//�ڴ�ʹ����
//rss �ڴ�������� heapTotal ����  heapUsed �Ѿ�ʹ�õ���
console.log(process.memoryUsage());
//current workding directory ��ǰ����Ŀ¼
//var fs = require('fs');
//console.log(process.cwd());
//console.log(fs.readFileSync('1.txt'));

process.stdin.on('data',function(chunk){
    process.kill(chunk);
});