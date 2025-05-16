const { workerData, parentPort } = require('worker_threads');
const factorial = require('./factorial');
const count = ({ array }) => {
    const arr = [];
    for (let i = 0; i < 10000000; i++) {
        arr.push(i * i);
    }
    return array.map((item) => factorial(item));
};
parentPort.postMessage(count(workerData));
