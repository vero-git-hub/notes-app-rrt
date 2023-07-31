import React from 'react';
import Table from '../Table/Table';

const ArchiveList: React.FC = () => {
    // Sample data for the archive table
    const archiveColumns: any = ['Name', 'Created', 'Category', 'Content', 'Dates', ''];
    const archiveData: any = [
        ['Row 1, Column 1', 'Row 1, Column 2', 'Row 1, Column 3', 'Row 1, Column 4', 'Row 1, Column 5'],
        ['Row 2, Column 1', 'Row 2, Column 2', 'Row 2, Column 3', 'Row 2, Column 4', 'Row 2, Column 5'],
        // Add more data as needed
    ];

    return (
        <div>
            <h2>Archive Note Table</h2>
            <p id="hiddenMessage">The table is hidden. Click on the eye next to "Archived" to open the table.</p>
            <Table columns={archiveColumns} data={archiveData} />
        </div>
    );
};

export default ArchiveList;
