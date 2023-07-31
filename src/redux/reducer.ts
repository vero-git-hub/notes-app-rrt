// src/redux/reducer.js
import { AppState } from './types';


const initialState: AppState = {
    notes: [
        { id: 1, title: 'Note 1', content: 'Content of Note 1' },
        { id: 2, title: 'Note 2', content: 'Content of Note 2' },
    ],
};

const reducer = (state: AppState = initialState) => {
    return state;
};

export default reducer;
