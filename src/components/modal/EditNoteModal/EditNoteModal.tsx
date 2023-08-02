import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button, FormGroup, Label, Input, Form} from 'reactstrap';
import { AppState, Note } from '../../../redux/types';
import {useDispatch, useSelector} from "react-redux";
import { updateNote } from '../../../redux/actions';
import {CATEGORY_NAMES} from "../../../layout/constants";
import EditNoteForm from "../../form/EditNoteForm/EditNoteForm";

interface EditNoteModalProps {
    isOpen: boolean;
    toggleModal: () => void;
    selectedNoteId: number | null;
}

const EditNoteModal: React.FC<EditNoteModalProps> = ({isOpen, toggleModal, selectedNoteId}) => {
    const dispatch = useDispatch();

    const note: Note | undefined = useSelector((state: AppState) =>
        state.notes.find((note) => note.id === selectedNoteId)
    );

    if (!note || !isOpen) return null;

    const handleSubmit = (updatedNote: Note) => {
        dispatch(updateNote(updatedNote));
        toggleModal();
    };

    return (
        <Modal isOpen={isOpen} toggle={toggleModal}>
            <ModalHeader>Edit Note</ModalHeader>
            <ModalBody>
                <EditNoteForm note={note} handleSubmit={handleSubmit} />
            </ModalBody>
            <ModalFooter>
                <Button onClick={toggleModal}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default EditNoteModal;
