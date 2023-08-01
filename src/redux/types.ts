export interface Note {
    name: string;
    created: string;
    category: string;
    content: string;
    dates: string;
}

export interface AppState {
    notes: Note[];
}