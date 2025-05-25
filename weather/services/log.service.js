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
const printWheather = (response, icon) => {
    console.log(
        dedent`${chalk.bgYellow('WEATHER')} Погода в городе ${response.name}
            ${icon} ${response.icon[0].description}
            Температура : ${response.main.temp} (ощущается как) ${
            response.main.feels_like
        }
           Влажность: ${response.main.humidity}%
           Скорость ветра : ${response.wind.speed}
    `
    );
};
export { printError, printSuccess, printHelp, printWheather };
