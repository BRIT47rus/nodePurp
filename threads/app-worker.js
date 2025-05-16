const { Worker } = require('worker_threads');
const compute = ({ arr }) => {
    return new Promise((res, rej) => {
        const worker = new Worker('./worker.js', {
            workerData: { arr },
        });

        worker.on('message', (msg) => {
            console.log('щапустился поток');
            resolve(msg);
        });
        worker.on('error', (err) => {
            rej(err);
        });
        worker.on('exit', () => {
            console.log('Выключился поток ');
        });
    });
};
const main = async () => {
    try {
        performance.mark('start');
        const result = await Promise.all([
            compute([25, 20, 19, 48, 30, 50]),
            compute([25, 20, 19, 48, 30, 50]),
            compute([25, 20, 19, 48, 30, 50]),
            compute([25, 20, 19, 48, 30, 50]),
        ]);
        console.log(result);
        performance.mark('end');
        performance.measure('main', 'start', 'end');
        console.log(performance.getEntriesByName('main').pop());
    } catch (error) {
        console.log('произошла ошибка', error);
    }
};
main();
