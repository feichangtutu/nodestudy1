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

//setTimeout(say,0);//加入队列 延迟作用

process.nextTick(say);//优先级比immediate高

setImmediate(say(sf));

//捕获错误
process.on('uncaughtException',function(err){
    //console.log(err)
})


var util = require('util')
util.inherits()