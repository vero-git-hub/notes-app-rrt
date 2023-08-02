import React from 'react';
import TableTemplate from '../TableTemplate';
import { useSelector } from 'react-redux';
import {AppState, Note} from '../../redux/types';
import {ImUpload} from "react-icons/im";

const ArchiveList: React.FC = () => {
    const archivedNotes = useSelector((state: AppState) => state.archivedNotes);

    const columns = [
        { label: 'Name', field: 'name' },
        { label: 'Created', field: 'created' },
        { label: 'Category', field: 'category' },
        { label: 'Content', field: 'content' },
        { label: 'Dates', field: 'dates' },
        { label: 'Actions', field: 'icons' },
    ];
    const data = archivedNotes.map((note: Note) => ({
        ...note,
        icons: (
            <>
                <ImUpload />
            </>
        )
    }));

    return (
        <div>
            <h2>Archive Table</h2>
            <TableTemplate columns={columns} data={data} />
        </div>
    );
};

export default ArchiveList;
