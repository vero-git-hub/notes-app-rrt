import {Note} from "./types";

export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const ARCHIVE_NOTE = 'ARCHIVE_NOTE';
export const MOVE_NOTE_FROM_ARCHIVE = 'MOVE_NOTE_FROM_ARCHIVE';


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

export interface MoveNoteFromArchiveAction {
    type: typeof MOVE_NOTE_FROM_ARCHIVE;
    payload: {
        noteId: number;
    };
}

export const moveNoteFromArchive = (noteId: number): MoveNoteFromArchiveAction => ({
    type: MOVE_NOTE_FROM_ARCHIVE,
    payload: {
        noteId,
    },
});
