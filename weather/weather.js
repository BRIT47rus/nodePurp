import { getArgs } from './helpers/getArgv.js';
import { printHelp } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

const initCli = () => {
    const arg = getArgs(process.argv);

    if (arg.h) {
        printHelp();
    }
    if (arg.s) {
    }
    if (arg.t) {
        saveKeyValue('token', arg.t);
    }
};

initCli();
