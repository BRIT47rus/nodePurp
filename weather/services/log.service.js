import chalk from 'chalk'; // красит текс\бг
import dedent from 'dedent-js'; //убирает табуляцию в консоле
const printError = (e) => {
    console.log(chalk.bgRed('ERROE') + ' ' + e);
};
const printSuccess = (m) => {
    console.log(chalk.bgGreen('SUCCESS') + ' ' + m);
};
const printHelp = () => {
    console.log(
        dedent`${chalk.bgGreen('HELP')}
            Без параметров - вывод погоды
            -s [CITY] для установки города
            -h помощь
            -t [API_KEY] сохранение токена
    `
    );
};
export { printError, printSuccess, printHelp };
