process.on('message', (msg) => {
    if (msg === 'disconnect') {
        process.disconnect();
    }
    console.log(` Сообщение получено : ${msg}`);
    process.send('Pong');
});
