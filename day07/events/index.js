// const EventEmitter = require('events');
// class CustomEvent extends EventEmitter{}
// const cb = new CustomEvent();
// cb.on('test', () => {
//     console.log('test on');
// });
// setInterval(() => {
//     cb.emit('test');
// }, 1000);

// const EventEmitter = require('events');
// class CustomEvent extends EventEmitter{}
// const cb = new CustomEvent();
// cb.on('test', (a) => {
//     console.log('test on' + a);
// });
// setInterval(() => {
//     cb.emit('test','some');
// }, 1000);

const EventEmitter = require('events');
class CustomEvent extends EventEmitter{}
const cb = new CustomEvent();
cb.once('test', (a) => {
    console.log('test on' + a);
});
setInterval(() => {
    cb.emit('test','some');
}, 1000);
function fn1 () {
    console.log('fn1');
}
function fn2 () {
    console.log('fn2');
}
cb.on('test2',fn1);
cb.on('test2',fn2);
setInterval(() => {
    cb.emit('test2');
}, 1000);
setTimeout(() => {
    cb.removeListener('test2',fn1);
}, 3000);
setTimeout(() => {
    cb.removeAllListeners('test2');
}, 5000);
