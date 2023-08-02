import React from 'react';
import TableTemplate from '../TableTemplate';
import {useDispatch, useSelector} from 'react-redux';
import {AppState, Note} from '../../redux/types';
import {ImUpload} from "react-icons/im";
import { moveNoteFromArchive } from '../../redux/actions';


const ArchiveList: React.FC = () => {
    const archivedNotes = useSelector((state: AppState) => state.archivedNotes);
    const dispatch = useDispatch();

    const columns = [
        { label: 'Name', field: 'name' },
        { label: 'Created', field: 'created' },
        { label: 'Category', field: 'category' },
        { label: 'Content', field: 'content' },
        { label: 'Dates', field: 'dates' },
        { label: 'Actions', field: 'icons' },
    ];

    const handleMoveNoteFromArchive = (noteId: number) => {
        dispatch(moveNoteFromArchive(noteId));
    };

    const data = archivedNotes.map((note: Note) => ({
        ...note,
        icons: (
            <>
                <ImUpload onClick={() => handleMoveNoteFromArchive(note.id)}/>
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
