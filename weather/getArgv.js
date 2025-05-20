export const getArgs = (argv) => {
    const [executer, file, ...rest] = argv;
    const res = {};

    rest.forEach((item, index, array) => {
        if (item.charAt(0) == '-') {
            if (index == array.length - 1) {
                res[item.substring(1)] = true;
            } else if (array[index + 1].charAt(0) != '-') {
                res[item.substring(1)] = array[index + 1];
            } else {
                res[item.substring(1)] = true;
            }
        }
    });
    console.log(res);
    return res;
};

// node weather.js -s fff
