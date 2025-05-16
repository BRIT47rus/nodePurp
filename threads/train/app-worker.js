const { Worker } = require('worker_threads');

const count = (array) => {
    return new Promise((res, rej) => {
        const worker = new Worker(`${__dirname}/worker.js`, {
            workerData: { array },
        });

        const id = worker.threadId;
        worker.on('message', (msg) => {
            console.log('Поток запустился ', id);
            res(msg);
        });
        worker.on('error', (e) => {
            console.log('Ошибка');
            rej(e);
        });
        worker.on('exit', () => {
            console.log('Завершился ', id);
        });
    });
};

const main = async () => {
    try {
        performance.mark('start');
        const result = await Promise.all([
            count([25, 38, 55, 3, 99, 10]),
            count([25, 38, 55, 3, 99, 10]),
            count([25, 38, 55, 3, 99, 10]),
            count([25, 38, 55, 3, 99, 10]),
            count([25, 38, 55, 3, 99, 10]),
        ]);
        console.log(result);
        performance.mark('end');
        performance.measure('main', 'start', 'end');
        console.log(performance.getEntriesByName('main').pop());
    } catch (error) {
        console.log('Ошибка в обработке', error);
    }
};
main();
