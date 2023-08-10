import React from 'react';
import TableComponent from '../../components/TableComponent';
import {useDispatch, useSelector} from 'react-redux';
import {AppState, Note} from '../../redux/types';
import {ImUpload} from "react-icons/im";
import { moveNoteFromArchive } from '../../redux/actions';
import {Container} from "reactstrap";
import {columns} from "../../components/TableComponent/TableComponent";


const ArchiveList: React.FC = () => {
    const archivedNotes = useSelector((state: AppState) => state.archivedNotes);
    const dispatch = useDispatch();

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
        <Container>
            <h2>Archive Table</h2>
            <TableComponent columns={columns} data={data} />
        </Container>
    );
};

export default ArchiveList;
