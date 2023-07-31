export interface Note {
    id: number;
    title: string;
    content: string;
}

export interface AppState {
    notes: Note[];
}