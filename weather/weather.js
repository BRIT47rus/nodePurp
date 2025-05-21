import { getArgs } from './helpers/getArgv.js';
import { printError, printHelp, printSuccess } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';
const saveToken = async (token) => {
    try {
        await saveKeyValue('token', token);
        printSuccess('Токен сохранен');
    } catch (error) {
        printError(error.message);
    }
};
const initCli = () => {
    const arg = getArgs(process.argv);

    if (arg.h) {
        printHelp();
    }
    if (arg.s) {
    }
    if (arg.t) {
        return saveToken(arg.t);
    }
};

initCli();
