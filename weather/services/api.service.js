import https from 'https';
import { getKeyValue } from './storage.service';

const getCity = async (city) => {
    // const url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    const token = await getKeyValue(TOKEN_DICTIONARY.token);

    const url = new URL('https://api.openweathermap.org/data/2.5/weather');
    url.searchParams.append('q', token);
    url.searchParams.append('city', city);
    https.get();
};
//10 минута
