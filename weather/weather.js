import { getArgs } from './helpers/getArgv.js';
import {
    printError,
    printHelp,
    printSuccess,
    printWheather,
} from './services/log.service.js';
import {
    saveKeyValue,
    TOKEN_DICTIONARY,
    getKeyValue,
} from './services/storage.service.js';
import { getWeather } from './services/api.service.js';
const saveToken = async (token) => {
    if (!token.length) {
        printError('Не передан токен');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('Токен сохранен');
    } catch (error) {
        printError(error.message);
    }
};
const saveCity = async (city) => {
    if (!city.length) {
        printError('Не передан город');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city);
        printSuccess('Город сохранен');
    } catch (error) {
        printError(error.message);
    }
};
const getForcast = async () => {
    try {
        const city =
            process.env.CITY ?? (await getKeyValue(TOKEN_DICTIONARY.city));
        const weather = await getWeather(city);
        printWheather(weather, '');
    } catch (error) {
        if (error?.response?.status == 404) {
            printError('Неверно указан город');
        } else if (error?.response?.status == 401) {
            printError('Неверно указан token');
        } else {
            printError(error.message);
        }
    }
};
const initCli = () => {
    const arg = getArgs(process.argv);

    if (arg.h) {
        printHelp();
    }
    if (arg.s) {
        saveCity(arg.s);
    }
    if (arg.t) {
        return saveToken(arg.t);
    }
    getForcast();
};

initCli();
