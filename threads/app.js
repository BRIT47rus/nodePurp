const factorial = require('./factorial.js');
const compute = (arr) => {
    const array = [];
    for (let i = 0; i < 10000000; i++) {
        array.push(i * i);
    }
    return arr.map((el) => factorial(el));
};
const main = () => {
    performance.mark('start');
    const result = [
        compute([25, 20, 19, 48, 30, 50]),
        compute([25, 20, 19, 48, 30, 50]),
        compute([25, 20, 19, 48, 30, 50]),
        compute([25, 20, 19, 48, 30, 50]),
    ];
    console.log(result);
    performance.mark('end');
    performance.measure('main', 'start', 'end');
    console.log(performance.getEntriesByName('main').pop());
};
main();
