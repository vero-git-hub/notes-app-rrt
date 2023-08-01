export interface Note {
    id: number;
    name: string;
    created: string;
    category: string;
    content: string;
    dates: string;
}

export interface AppState {
    notes: Note[];
}