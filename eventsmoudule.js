import EventEmitter from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterfull', () => {
  console.log('please turn off the motor');
  setTimeout(() => {
    console.log("please turn off the motor! its a gentle remainder");
  }, 3000);
});

console.log("The script is running");
myEmitter.emit('waterfull');
console.log("The script is still running");

// Corrected code with import