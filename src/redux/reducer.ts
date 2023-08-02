import {AppState, Note} from './types';
import {ADD_NOTE, DELETE_NOTE, UPDATE_NOTE, ARCHIVE_NOTE, MOVE_NOTE_FROM_ARCHIVE} from './actions';
import { formatDate, formatCurrentDate } from '../utils/utils';
import {CATEGORY_NAMES} from "../layout/constants";

const generateUniqueId = (() => {
    let counter = 0;
    return () => {
        counter += 1;
        return counter;
    };
})();

const currentDate = new Date();
const formattedDate = formatCurrentDate(currentDate);

const content: string = "I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021";

const initialState: AppState = {
    notes: [
        {
            id: generateUniqueId(),
            name: "Dentist",
            created: formattedDate,
            category: CATEGORY_NAMES.TASK,
            content: content,
            dates: formatDate(content),
        },
    ],
    archivedNotes: [],
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

        case ARCHIVE_NOTE:
            return handleArchiveNote(state, action.payload.noteId);

        case MOVE_NOTE_FROM_ARCHIVE:
            const noteToMove = state.archivedNotes.find((note) => note.id === action.payload.noteId);
            if (!noteToMove) return state;

            return {
                ...state,
                notes: [...state.notes, noteToMove],
                archivedNotes: state.archivedNotes.filter((note) => note.id !== action.payload.noteId),
            };

        default:
            return state;
    }
};

const handleArchiveNote = (state: AppState, noteId: number) => {
    const noteToArchive = state.notes.find((note) => note.id === noteId);

    if (!noteToArchive) {
        return state;
    }

    const updatedNotes = state.notes.filter((note) => note.id !== noteId);
    const updatedArchivedNotes = [...state.archivedNotes, { ...noteToArchive, archived: true }];

    return {
        ...state,
        notes: updatedNotes,
        archivedNotes: updatedArchivedNotes,
    };
};

export default reducer;
