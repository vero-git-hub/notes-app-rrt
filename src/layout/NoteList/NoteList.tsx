import React, {useState} from 'react';
import TableComponent from '../../components/TableComponent';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../../redux/types';
import { ImPencil, ImBin, ImDownload } from "react-icons/im";
import { deleteNote, archiveNote } from '../../redux/actions';
import EditNoteModal from '../../components/modal/EditNoteModal/EditNoteModal';
import {Button, Col, Container, Row} from "reactstrap";
import CreateNoteModal from '../../components/modal/CreateNoteModal/CreateNoteModal';

const NoteList: React.FC = () => {
    const notes = useSelector((state: AppState) => state.notes);
    const dispatch = useDispatch();

    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [selectedNoteId, setSelectedNoteId] = useState<number | null>(null);

    const toggleCreateModal = () => {
        setCreateModalOpen(!createModalOpen);
    };

    const toggleEditModal = (noteId: number | null) => {
        setEditModalOpen((prevState) => !prevState);
        setSelectedNoteId(noteId);
    };

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
                <span className="iconActions"><ImPencil onClick={() => toggleEditModal(note.id)} /></span>
                <span className="iconActions"><ImDownload onClick={() => handleArchive(note.id)}/></span>
                <span className="iconActions"><ImBin onClick={() => handleDelete(note.id)} /></span>
            </>
        ),
    }));

    const handleDelete = (noteId: number) => {
        dispatch(deleteNote(noteId));
    };

    const handleArchive  = (noteId: number) => {
        dispatch(archiveNote(noteId));
    };

    return (
        <Container>
            <h2>List of notes</h2>
            <TableComponent columns={columns} data={data} />
            <div className="createBtnDiv">
                <Button color="primary" onClick={toggleCreateModal}>
                    Create Note
                </Button>
            </div>
            <CreateNoteModal isOpen={createModalOpen} toggleModal={toggleCreateModal} />
            <EditNoteModal isOpen={editModalOpen} toggleModal={() => toggleEditModal(null)} selectedNoteId={selectedNoteId} />
        </Container>
    );
};

export default NoteList;
