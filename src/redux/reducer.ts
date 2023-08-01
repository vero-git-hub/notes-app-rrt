import {AppState, Note} from './types';
import {ADD_NOTE, DELETE_NOTE, UPDATE_NOTE} from './actions';

const generateUniqueId = (() => {
    let counter = 0;
    return () => {
        counter += 1;
        return counter;
    };
})();

const formatCurrentDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
};

const formatDate = (content: string): string => {
    const dateRegex = /(\d{1,2}\/\d{1,2}\/\d{4})/g;
    const findDates = content.match(dateRegex);
    let formattedDates: string = "";

    if (findDates) {
        formattedDates = findDates.join(', ');
    }

    return formattedDates;
};

const currentDate = new Date();
const formattedDate = formatCurrentDate(currentDate);

const content: string = "I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021";

const initialState: AppState = {
    notes: [
        {
            id: generateUniqueId(),
            name: "Dentist",
            created: formattedDate,
            category: "Task",
            content: content,
            dates: formatDate(content),
        },
    ],
};

const reducer = (state: AppState = initialState, action: any) => {
    switch (action.type) {
        case ADD_NOTE:
            const newNoteId = generateUniqueId();

            const contentForNewNote = action.payload.content;

            const newNote: Note = {
                id: newNoteId,
                name: action.payload.name,
                created: formattedDate,
                category: action.payload.category,
                content: contentForNewNote,
                dates: formatDate(contentForNewNote),
            };

            return {
                ...state,
                notes: [...state.notes, newNote],
            };

        case DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter((note) => note.id !== action.payload.noteId),
            };

        case UPDATE_NOTE:
            return {
                ...state,
                notes: state.notes.map((note) =>
                    note.id === action.payload.id ? { ...note, ...action.payload } : note
                ),
            };

        default:
            return state;
    }
};

export default reducer;
