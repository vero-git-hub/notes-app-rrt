import React, {useState} from 'react';
import TableComponent from '../TableComponent';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../../redux/types';
import ButtonComponent from "../ButtonComponent";
import { ImPencil, ImBin, ImDownload } from "react-icons/im";
import { deleteNote, archiveNote } from '../../redux/actions';
import EditNoteModal from '../EditNoteModal/EditNoteModal';

const NoteList: React.FC = () => {
    const notes = useSelector((state: AppState) => state.notes);
    const dispatch = useDispatch();

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedNoteId, setSelectedNoteId] = useState<number | null>(null);

    const toggleModal = (noteId: number | null) => {
        setModalOpen((prevState) => !prevState);
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
                <span><ImPencil onClick={() => toggleModal(note.id)} /></span>
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
            <ButtonComponent />
            <EditNoteModal isOpen={modalOpen} toggleModal={() => toggleModal(null)} selectedNoteId={selectedNoteId} />
        </div>
    );
};

export default NoteList;
