import {Note} from "./types";

export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const ARCHIVE_NOTE = 'ARCHIVE_NOTE';


export const addNote = (noteData: Note) => ({
    type: ADD_NOTE,
    payload: noteData,
});

export const deleteNote = (noteId: number): DeleteNoteAction => ({
    type: DELETE_NOTE,
    payload: {
        noteId,
    },
});

export const updateNote = (note: Note) => ({
    type: UPDATE_NOTE,
    payload: note,
});

export const archiveNote = (noteId: number) => ({
    type: ARCHIVE_NOTE,
    payload: { noteId },
});

export interface DeleteNoteAction {
    type: typeof DELETE_NOTE;
    payload: {
        noteId: number;
    };
}
