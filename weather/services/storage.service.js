import { homedir } from 'os';
import { join } from 'path';
const filePath = join(homedir(), 'weather-storage.json');
export const saveKeyValue = (key, value) => {
    console.log(fileStorage);
};
