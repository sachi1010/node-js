var events = require('events')
var eventEmiiter = new events.EventEmitter();


// first event
var listen1 =function listen1(){
    console.log('First event');
}

//second event
var listen2 = function listen2() {
    console.log('Second event');
}

//bind the connection 
eventEmiiter.addListener('connection',listen1);

//another method to connect
eventEmiiter.on('connection', listen2);

var eventListeners =require('events').EventEmitter.listenerCount
(eventEmiiter,'connection');
console.log(eventListeners +'listerns')

//start the connection
eventEmiiter.emit('connection');

//remove the connection
eventEmiiter.removeListener('connection',listen1);
console.log('listen1 is remove')

//start the connection
eventEmiiter.emit('connection');


eventListeners =require('events').EventEmitter.listenerCount
(eventEmiiter,'connection');
console.log(eventListeners  + 'listens')

console.log('program end')
