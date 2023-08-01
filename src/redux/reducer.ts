import { AppState } from './types';


const currentDate = new Date();
const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = new Intl.DateTimeFormat('en-US', options).format(currentDate);

const content: string = "I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021";
const content1: string = "";
const content2: string = "I am planning a vacation from 1/1/2024 to 5/1/2024";
const content3: string = "Moving to the movies from 30/8/2023 to 1/9/2023";
const content4: string = "Go shopping in a new mall";
const content5: string = "Programming a new game in javascript up to 20/8/2023";
const content6: string = "Buy a new computer";

const dateRegex = /(\d{1,2}\/\d{1,2}\/\d{4})/g;
const findDates = content.match(dateRegex);
let formattedDates: string = "";
if (findDates) {
    formattedDates = findDates.join(', ');
}
const dateRegex1 = /(\d{1,2}\/\d{1,2}\/\d{4})/g;
const findDates1 = content1.match(dateRegex1);
let formattedDates1: string = "";
if (findDates1) {
    formattedDates1 = findDates1.join(', ');
}
const dateRegex2 = /(\d{1,2}\/\d{1,2}\/\d{4})/g;
const findDates2 = content2.match(dateRegex2);
let formattedDates2: string = "";
if (findDates2) {
    formattedDates2 = findDates2.join(', ');
}
const dateRegex3 = /(\d{1,2}\/\d{1,2}\/\d{4})/g;
const findDates3 = content3.match(dateRegex3);
let formattedDates3: string = "";
if (findDates3) {
    formattedDates3 = findDates3.join(', ');
}
const dateRegex4 = /(\d{1,2}\/\d{1,2}\/\d{4})/g;
const findDates4 = content4.match(dateRegex4);
let formattedDates4: string = "";
if (findDates4) {
    formattedDates4 = findDates4.join(', ');
}
const dateRegex5 = /(\d{1,2}\/\d{1,2}\/\d{4})/g;
const findDates5 = content5.match(dateRegex5);
let formattedDates5: string = "";
if (findDates5) {
    formattedDates5 = findDates5.join(', ');
}
const dateRegex6 = /(\d{1,2}\/\d{1,2}\/\d{4})/g;
const findDates6 = content6.match(dateRegex6);
let formattedDates6: string = "";
if (findDates6) {
    formattedDates6 = findDates6.join(', ');
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
        // {
        //     name: "Row 2, Column 1",
        //     created: formattedDate,
        //     category: "Task",
        //     content: content1,
        //     dates: formattedDates1,
        //     icons: "icons",
        // },
        // {
        //     name: "Row 3, Column 1",
        //     created: formattedDate,
        //     category: "Idea",
        //     content: content2,
        //     dates: formattedDates2,
        //     icons: "icons",
        // },
        // {
        //     name: "Row 4, Column 1",
        //     created: formattedDate,
        //     category: "Random Thought",
        //     content: content3,
        //     dates: formattedDates3,
        //     icons: "icons",
        // },
        // {
        //     name: "Row 5, Column 1",
        //     created: formattedDate,
        //     category: "Random Thought",
        //     content: content4,
        //     dates: formattedDates4,
        //     icons: "icons",
        // },
        // {
        //     name: "Row 6, Column 1",
        //     created: formattedDate,
        //     category: "Random Thought",
        //     content: content5,
        //     dates: formattedDates5,
        //     icons: "icons",
        // },
        // {
        //     name: "Row 7, Column 1",
        //     created: formattedDate,
        //     category: "Idea",
        //     content: content6,
        //     dates: formattedDates6,
        //     icons: "icons",
        // },
    ],
};

const reducer = (state: AppState = initialState) => {
    return state;
};

export default reducer;
