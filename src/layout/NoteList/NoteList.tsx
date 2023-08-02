import React, {useState} from 'react';
import TableComponent from '../../components/TableComponent';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../../redux/types';
import { ImPencil, ImBin, ImDownload } from "react-icons/im";
import { deleteNote, archiveNote } from '../../redux/actions';
import EditNoteModal from '../../components/EditNoteModal/EditNoteModal';
import {Button} from "reactstrap";
import CreateNoteModal from '../../components/CreateNoteModal/CreateNoteModal';

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
                <span><ImPencil onClick={() => toggleEditModal(note.id)} /></span>
                <span><ImDownload onClick={() => handleArchive(note.id)}/></span>
                <span><ImBin onClick={() => handleDelete(note.id)} /></span>
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
        <div>
            <h2>List of notes</h2>
            <TableComponent columns={columns} data={data} />
            <Button
                color="primary" onClick={toggleCreateModal}>Create Note
            </Button>
            <CreateNoteModal isOpen={createModalOpen} toggleModal={toggleCreateModal} />
            <EditNoteModal isOpen={editModalOpen} toggleModal={() => toggleEditModal(null)} selectedNoteId={selectedNoteId} />
        </div>
    );
};

export default NoteList;
