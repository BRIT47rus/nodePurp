const { workerData, parentPort } = require('worker_threads');
const factorial = require('./factorial.js');
const compute = ({ arr }) => {
    const array = [];
    for (let i = 0; i < 10000000; i++) {
        array.push(i * i);
    }
    return arr.map((el) => factorial(el));
};
parentPort.postMessage(compute(workerData));
