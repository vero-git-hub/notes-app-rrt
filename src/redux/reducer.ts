import { AppState } from './types';


const initialState: AppState = {
    notes: [
        {
            name: "Row 1, Column 1",
            created: "Row 1, Column 2",
            category: "Task",
            content: "Row 1, Column 4",
            dates: "dates",
            icons: "icons",
        },
        {
            name: "Row 2, Column 1",
            created: "Row 2, Column 2",
            category: "Task",
            content: "Row 2, Column 4",
            dates: "dates",
            icons: "icons",
        },
        {
            name: "Row 3, Column 1",
            created: "Row 3, Column 2",
            category: "Idea",
            content: "Row 3, Column 4",
            dates: "dates",
            icons: "icons",
        },
        {
            name: "Row 4, Column 1",
            created: "Row 4, Column 2",
            category: "Random Thought",
            content: "Row 4, Column 4",
            dates: "dates",
            icons: "icons",
        },
        {
            name: "Row 5, Column 1",
            created: "Row 5, Column 2",
            category: "Random Thought",
            content: "Row 5, Column 4",
            dates: "dates",
            icons: "icons",
        },
        {
            name: "Row 6, Column 1",
            created: "Row 6, Column 2",
            category: "Random Thought",
            content: "Row 6, Column 4",
            dates: "dates",
            icons: "icons",
        },
        {
            name: "Row 7, Column 1",
            created: "Row 7, Column 2",
            category: "Idea",
            content: "Row 7, Column 4",
            dates: "dates",
            icons: "icons",
        },
    ],
};

const reducer = (state: AppState = initialState) => {
    return state;
};

export default reducer;
