export interface Note {
    name: string;
    created: string;
    category: string;
    content: string;
    dates: string;
    icons: string;
}

export interface AppState {
    notes: Note[];
}