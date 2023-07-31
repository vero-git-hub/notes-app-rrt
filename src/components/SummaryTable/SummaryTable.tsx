import React from 'react';
import TableTemplate from '../TableTemplate';

const SummaryTable: React.FC = () => {
    const summaries = [
        {
            noteCategory: 'Row 1, Column 1',
            active: 'Row 1, Column 2',
            archived: 'Row 1, Column 3',
        },
        {
            noteCategory: 'Row 2, Column 1',
            active: 'Row 2, Column 2',
            archived: 'Row 2, Column 3',
        },
    ];

    const columns = [
        { label: 'Note Category', field: 'noteCategory' },
        { label: 'Active', field: 'active' },
        { label: 'Archived', field: 'archived' },
    ];

    const data = summaries;

    return <TableTemplate columns={columns} data={data} />;
};

export default SummaryTable;
