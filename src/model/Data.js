/*
 * Returns API data
 */
import axios from 'axios';


const api = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

export const getData = () => {
    return new Promise(( resolve, reject ) => {
        axios.get(api)
             .then(response => {
                 resolve(response);
             })
             .catch(err => {
                 resolve(err);
             });
    });
};

export const getQuestions = async () => {
    return Promise.resolve(getData()
            .then(data => data.data.results))
            .catch(err => err.message);
};