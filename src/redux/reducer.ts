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

const content: string = "Rescheduled hang gliding from 3/10/2023 to 5/10/2023";
const content1: string = "Started programming on 14/02/1946 and continue to this day 02/08/2023";
const content2: string = "Going to the movies on Shrek";
const content3: string = "Swimming lessons - better coordination (23/09/2023, 26/09/2023, 29/09/2023)";

const initialState: AppState = {
    notes: [
        {
            id: generateUniqueId(),
            name: "Flight",
            created: formattedDate,
            category: CATEGORY_NAMES.CATEGORY_1,
            content: content,
            dates: formatDate(content),
        },
        {
            id: generateUniqueId(),
            name: "Programming",
            created: formattedDate,
            category: CATEGORY_NAMES.CATEGORY_3,
            content: content1,
            dates: formatDate(content1),
        },
        {
            id: generateUniqueId(),
            name: "Movie",
            created: formattedDate,
            category: CATEGORY_NAMES.CATEGORY_2,
            content: content2,
            dates: formatDate(content2),
        },
        {
            id: generateUniqueId(),
            name: "Pool",
            created: formattedDate,
            category: CATEGORY_NAMES.CATEGORY_1,
            content: content3,
            dates: formatDate(content3),
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
