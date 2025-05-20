import { getArgs } from './getArgv.js';
const initCli = () => {
    const arg = process.argv;
    getArgs(arg);
};

initCli();
