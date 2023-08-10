import React from 'react';
import TableComponent from '../../components/TableComponent';
import {AppState} from "../../redux/types";
import {useSelector} from "react-redux";
import { CATEGORY_NAMES } from '../constants';
import {Container} from "reactstrap";


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
            noteCategory: CATEGORY_NAMES.CATEGORY_1,
            active: categoryCounts[CATEGORY_NAMES.CATEGORY_1] || 0,
            archived: archivedCategoryCounts[CATEGORY_NAMES.CATEGORY_1] || 0,
        },
        {
            noteCategory: CATEGORY_NAMES.CATEGORY_2,
            active: categoryCounts[CATEGORY_NAMES.CATEGORY_2] || 0,
            archived: archivedCategoryCounts[CATEGORY_NAMES.CATEGORY_2] || 0,
        },
        {
            noteCategory: CATEGORY_NAMES.CATEGORY_3,
            active: categoryCounts[CATEGORY_NAMES.CATEGORY_3] || 0,
            archived: archivedCategoryCounts[CATEGORY_NAMES.CATEGORY_3] || 0,
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
        <Container>
            <h2>Summary Table</h2>
            <TableComponent columns={columns} data={data} />
        </Container>
    );
};

export default SummaryTable;
