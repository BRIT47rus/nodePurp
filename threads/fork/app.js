const { fork } = require('child_process');

const forkProcess = fork(__dirname + '\\' + 'fork.js');

forkProcess.on('message', (msg) => {
    console.log(` Сообщение отправлено ${msg}`);
});
forkProcess.on('close', (code) => {
    console.log(code);
});
forkProcess.send('Pink!');
forkProcess.send('disconnect');
