/**
 * Created by yanni on 2015/6/28.
 */
/*
* nextTick
*
* */

function say(){
    console.log('first')
}
console.log('next');

//setTimeout(say,0);//������� �ӳ�����

process.nextTick(say);//���ȼ���immediate��

setImmediate(say(sf));

//�������
process.on('uncaughtException',function(err){
    //console.log(err)
})


var util = require('util')
util.inherits()