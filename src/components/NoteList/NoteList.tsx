import React from 'react';
import TableTemplate from '../TableTemplate';
import {useDispatch, useSelector} from 'react-redux';
import { AppState } from '../../redux/types';
import ButtonComponent from "../ButtonComponent";
import { ImPencil, ImBin, ImDownload} from "react-icons/im";
import { deleteNote } from '../../redux/actions';

const NoteList: React.FC = () => {
    const notes = useSelector((state: AppState) => state.notes);
    const dispatch = useDispatch();

    const columns = [
        { label: 'Name', field: 'name' },
        { label: 'Created', field: 'created' },
        { label: 'Category', field: 'category' },
        { label: 'Content', field: 'content' },
        { label: 'Dates', field: 'dates' },
        { label: 'Actions', field: 'icons' },
    ];

    const data = notes.map((note) => ({
        ...note,
        icons: (
            <>
                <span><ImPencil /></span>
                <span><ImDownload /></span>
                <span><ImBin onClick={() => handleDelete(note.id)} /></span>
            </>
        ),
    }));

    const handleDelete = (noteId: number) => {
        dispatch(deleteNote(noteId));
    };

    return (
        <div>
            <h2>List of notes</h2>
            <TableTemplate columns={columns} data={data} />
            <ButtonComponent />
        </div>
    );
};

export default NoteList;
