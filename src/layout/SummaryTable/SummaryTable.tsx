import React from 'react';
import TableComponent from '../../components/TableComponent';
import {AppState} from "../../redux/types";
import {useSelector} from "react-redux";

const SummaryTable: React.FC = () => {
    const notes = useSelector((state: AppState) => state.notes);
    const archivedNotes = useSelector((state: AppState) => state.archivedNotes);

    const categoryCounts: { [category: string]: number } = {};
    notes.forEach((note) => {
        if (categoryCounts[note.category]) {
            categoryCounts[note.category]++;
        } else {
            categoryCounts[note.category] = 1;
        }
    });

    const archivedCategoryCounts: { [category: string]: number } = {};
    archivedNotes.forEach((note) => {
        if (archivedCategoryCounts[note.category]) {
            archivedCategoryCounts[note.category]++;
        } else {
            archivedCategoryCounts[note.category] = 1;
        }
    });

    const summaries = [
        {
            noteCategory: 'Task',
            active: categoryCounts['Task'] || 0,
            archived: archivedCategoryCounts['Task'] || 0,
        },
        {
            noteCategory: 'Random Thought',
            active: categoryCounts['Random Thought'] || 0,
            archived: archivedCategoryCounts['Random Thought'] || 0,
        },
        {
            noteCategory: 'Idea',
            active: categoryCounts['Idea'] || 0,
            archived: archivedCategoryCounts['Idea'] || 0,
        },
    ];

    const columns = [
        { label: 'Note Category', field: 'noteCategory' },
        { label: 'Active', field: 'active' },
        { label: 'Archived', field: 'archived' },
    ];

    const data = summaries.map((summary, index) => ({
        ...summary,
        id: index + 1,
    }));

    return (
        <div>
            <h2>Summary Table</h2>
            <TableComponent columns={columns} data={data} />
        </div>
    );
};

export default SummaryTable;
