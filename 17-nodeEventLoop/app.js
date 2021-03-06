/**
 * The loop gives priority to the call stack, 
 * and it first processes everything it finds in the call stack, 
 * and once there's nothing in there, it goes to pick up things in the message queue.
 */

/**
 * The Message Queue:
 * When setTimeout() is called, the Browser or Node.js starts the timer. 
 * Once the timer expires, in this case immediately as we put 0 as the timeout, 
 * the callback function is put in the Message Queue
 */

/**
 * ES6 Job Queue:
 * ECMAScript 2015 introduced the concept of the Job Queue, 
 * which is used by Promises (also introduced in ES6/ES2015). 
 * It's a way to execute the result of an async function as soon as possible, 
 * rather than being put at the end of the call stack.
 * Promises that resolve before the current function ends will be executed 
 * right after the current function.
 */

/**
 * Point to remember:
 * The event loop starts to pull functions from queues only when call stack is empty.
 * So even for promise it will pull when all synchronous tasks are done.
 * Just promise queue has more priority than callback queue(settimeout queue);
 */

 function callback(){
    console.log('executed by settimeout');
}

function promise(res){
    console.log(res);
}

function callAfterMain() {
    console.log('called after main');
}
function main(){
    console.log('first executed main');
    setTimeout(callback, 1000);
    Promise.resolve('executed by promise').then(promise);
}

main();

callAfterMain();

(()=>{
    console.log('iife');
})();