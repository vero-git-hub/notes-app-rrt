import React from 'react';
import TableTemplate from '../TableTemplate';

interface Note {
    id: number;
    title: string;
    content: string;
}

interface NoteListProps {
    notes: Note[];
}

const NoteList: React.FC = () => {
    const notes = [
        {
            name: 'Row 1, Column 1',
            created: 'Row 1, Column 2',
            category: 'Row 1, Column 3',
            content: 'Row 1, Column 4',
            dates: 'Row 1, Column 5',
        },
        {
            name: 'Row 2, Column 1',
            created: 'Row 2, Column 2',
            category: 'Row 2, Column 3',
            content: 'Row 2, Column 4',
            dates: 'Row 2, Column 5',
        },
    ];

    const columns = [
        { label: 'Name', field: 'name' },
        { label: 'Created', field: 'created' },
        { label: 'Category', field: 'category' },
        { label: 'Content', field: 'content' },
        { label: 'Dates', field: 'dates' },
        { label: 'Actions', field: 'actions' },
    ];

    const data = notes.map((note) => ({
        ...note,
        actions: (
            <>
                <i className="bi bi-pencil-square"></i>
                <i className="bi bi-archive-fill"></i>
                <i className="bi bi-trash-fill"></i>
            </>
        ),
    }));

    return <TableTemplate columns={columns} data={data} />;
};

export default NoteList;
