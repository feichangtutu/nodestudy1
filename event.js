/**
 * Created by yanni on 2015/6/28.
 */
function Emitter(){

}
Emitter.prototype.addListener = function addListener(type,listener){
    if(typeof listener != 'function'){
        throw  TypeError('must be function')
    }
//    如果此属性不存在，则进行初始化
    if(!this._events){
        this._events = {};
    }
    if(this._events[type]){
        this._events[type].push(listener);
    }else{
        this._events[type]= [listener];
    }
}

Emitter.prototype.emit =function emit(type){
    if(!this._events){
        this._events = {};
    }
    var listeners = this._events[type];
    if(listeners)
    listeners.forEach(function(listener){
        listener.apply(this);
    })
}


//function Sleep(){
//
//}
//Sleep.prototype = new Emitter();
//var sleep = new Sleep();

function Person(){

}
Person.prototype = new Emitter()
var me = new Person();

me.addListener('workday',function(){
    console.log('I must get up')
})
me.emit('workday')













