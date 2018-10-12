/*
 * Returns API data
 */
import axios from 'axios';

const api = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

export const getData = async () => {
        return (axios.get(api)
                         .then(response => {
                             return ( response );
                         })
                         .catch(err => {
                             console.warn(`Unable to fetch data from API, sending backup data --> ${err.message || err}`);
                             return backupData;
                         }));
};
export const RawData = getData();

const backupData = {
    "response_code": 0,
    "results": [
        {
            "category": "Entertainment: Video Games",
            "type": "boolean",
            "difficulty": "hard",
            "question": "In &quot;The Sims&quot; series, the most members in a household you can have is 8.",
            "correct_answer": "True",
            "incorrect_answers": [ "False" ],
        },
        {
            "category": "Science: Mathematics",
            "type": "boolean",
            "difficulty": "hard",
            "question": "The binary number &quot;101001101&quot; is equivalent to the Decimal number &quot;334&quot;",
            "correct_answer": "False",
            "incorrect_answers": [ "True" ],
        },
        { "category": "Science & Nature", "type": "boolean", "difficulty": "hard", "question": "Scientists can grow teeth from urine.", "correct_answer": "True", "incorrect_answers": [ "False" ] },
        {
            "category": "History",
            "type": "boolean",
            "difficulty": "hard",
            "question": "The fourth funnel of the RMS Titanic was fake designed to make the ship look more powerful and symmetrical.",
            "correct_answer": "True",
            "incorrect_answers": [ "False" ],
        },
        { "category": "Geography", "type": "boolean", "difficulty": "hard", "question": "Switzerland has four national languages, English being one of them.", "correct_answer": "False", "incorrect_answers": [ "True" ] },
        { "category": "Politics", "type": "boolean", "difficulty": "hard", "question": "Joko Widodo has appeared in the cover of a TIME magazine.", "correct_answer": "True", "incorrect_answers": [ "False" ] },
        {
            "category": "Entertainment: Video Games",
            "type": "boolean",
            "difficulty": "hard",
            "question": "All of these maps were in &quot;Tom Clancy&#039;s Rainbow Six Siege&quot; on its initial release: House, Clubhouse, Border, Consulate.",
            "correct_answer": "False",
            "incorrect_answers": [ "True" ],
        },
        { "category": "Entertainment: Television", "type": "boolean", "difficulty": "hard", "question": "The Klingon home planet is Qo&#039;noS.", "correct_answer": "True", "incorrect_answers": [ "False" ] },
        { "category": "Science & Nature", "type": "boolean", "difficulty": "hard", "question": "The value of one Calorie is different than the value of one calorie.", "correct_answer": "True", "incorrect_answers": [ "False" ] },
        {
            "category": "General Knowledge",
            "type": "boolean",
            "difficulty": "hard",
            "question": "Spoon theory is a theory, utilizing &quot;Spoons&quot; as a metaphor for energy they can use in a day.",
            "correct_answer": "True",
            "incorrect_answers": [ "False" ],
        },
    ],
};