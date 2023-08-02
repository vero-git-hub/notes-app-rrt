// src/components/CreateNoteModal/CreateNoteModal.tsx
import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import NoteForm from '../NoteForm/NoteForm';

interface CreateNoteModalProps {
    isOpen: boolean;
    toggleModal: () => void;
}

const CreateNoteModal: React.FC<CreateNoteModalProps> = ({ isOpen, toggleModal }) => {
    return (
        <Modal isOpen={isOpen} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Create a new note</ModalHeader>
            <ModalBody>
                <NoteForm closeModal={toggleModal} />
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggleModal}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateNoteModal;
