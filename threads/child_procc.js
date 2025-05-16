const { exec } = require('child_process');
const { stdout, stderr } = require('process');
const childProcess = exec('dir', (err, stdout, stderr) => {
    if (err) {
        console.log(err);
    }
    console.log(stdout);
    console.log(stderr);
});
childProcess.on('exit', (code) => {
    console.log('Код выхода', code);
});
