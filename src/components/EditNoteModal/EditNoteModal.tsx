import React from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap';
import NoteForm from "../NoteForm/NoteForm";

interface EditNoteModalProps {
    isOpen: boolean;
    toggleModal: () => void;
    selectedNoteId: number | null;
}

const EditNoteModal: React.FC<EditNoteModalProps> = ({isOpen, toggleModal, selectedNoteId}) => {
    return (
        <Modal isOpen={isOpen} toggle={toggleModal}>
            <ModalHeader>Edit Note</ModalHeader>
            <ModalBody>
                Selected Note ID: {selectedNoteId}
                <NoteForm closeModal={toggleModal}/>
            </ModalBody>
            <ModalFooter>
                <Button onClick={toggleModal}>Cancel</Button>
                <Button color="primary">Save</Button>
            </ModalFooter>
        </Modal>
);
};

export default EditNoteModal;
