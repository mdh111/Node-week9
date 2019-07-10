var events = require('events');

var eventEmitter = new events.EventEmitter();

var lateBy5 = () => { console.log('You are late by 5 minutes!') };
var lateBy10 = () => { console.log('You are late by 10 minutes!!!!') };
var lateBy15 = () => { console.log('You are late by 15 minutes!!!!!!!!') };

eventEmitter.on('late5', lateBy5);
eventEmitter.on('late10', lateBy10);
eventEmitter.on('late15', lateBy15);

var minutes = 18;

if(minutes>=15) {
    eventEmitter.emit('late15');
} else if(minutes>=10) {
    eventEmitter.emit('late10');
} else if(minutes>=5) {
    eventEmitter.emit('late5');
}
