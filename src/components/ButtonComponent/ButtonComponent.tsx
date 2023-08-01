import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import NoteForm from '../NoteForm/NoteForm';

const ButtonComponent: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <div>
            <Button
                color="primary" onClick={toggleModal}>Click Me
            </Button>
            <Modal isOpen={modalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Create a new note</ModalHeader>
                <ModalBody>
                    <NoteForm closeModal={toggleModal}/>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default ButtonComponent;
