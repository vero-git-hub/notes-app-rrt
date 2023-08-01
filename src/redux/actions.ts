import {Note} from "./types";

export const ADD_NOTE = 'ADD_NOTE';

export const addNote = (noteData: Note) => ({
    type: ADD_NOTE,
    payload: noteData,
});

export const DELETE_NOTE = 'DELETE_NOTE';

export interface DeleteNoteAction {
    type: typeof DELETE_NOTE;
    payload: {
        noteId: number;
    };
}

export const deleteNote = (noteId: number): DeleteNoteAction => ({
    type: DELETE_NOTE,
    payload: {
        noteId,
    },
});
