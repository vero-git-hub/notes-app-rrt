import { AppState } from './types';
import { ADD_NOTE } from './actions';

const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
};

const currentDate = new Date();
const formattedDate = formatDate(currentDate);

const content: string = "I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021";

const dateRegex = /(\d{1,2}\/\d{1,2}\/\d{4})/g;
const findDates = content.match(dateRegex);
let formattedDates: string = "";
if (findDates) {
    formattedDates = findDates.join(', ');
}

const initialState: AppState = {
    notes: [
        {
            name: "Dentist",
            created: formattedDate,
            category: "Task",
            content: content,
            dates: formattedDates,
        },
    ],
};

const reducer = (state: AppState = initialState, action: any) => {
    switch (action.type) {
        case ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, action.payload],
            };

        default:
            return state;
    }
};

export default reducer;
