const { Worker } = require('worker_threads');

const compute = (arr) => {
    return new Promise((res, rej) => {
        const worker = new Worker(`${__dirname}/worker.js`, {
            workerData: { arr },
        });
        const id = worker.threadId;

        worker.on('message', (msg) => {
            console.log('щапустился поток ', id);
            res(msg);
        });
        worker.on('error', (err) => {
            rej(err);
        });
        worker.on('exit', () => {
            console.log('Выключился поток ', id);
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
