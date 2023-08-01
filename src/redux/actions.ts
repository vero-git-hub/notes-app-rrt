import {Note} from "./types";

export const ADD_NOTE = 'ADD_NOTE';

export const addNote = (noteData: Note) => ({
    type: ADD_NOTE,
    payload: noteData,
});
