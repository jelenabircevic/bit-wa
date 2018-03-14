import { getData } from './data.js';
import { displayData } from './ui.js';

const url = 'http://127.0.0.1:3002'

export const startGettingData = () => {
    return getData(url)
        .then((obj) => {
            displayData(obj);
        })
        .catch((error) => {
            console.log(`Something went wrong! ${error.message}`);
        })
}