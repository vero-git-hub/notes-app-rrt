export interface Note {
    id: number;
    name: string;
    created: string;
    category: string;
    content: string;
    dates: string;
    [key: string]: any;
}

export interface AppState {
    notes: Note[];
    archivedNotes: Note[];
}