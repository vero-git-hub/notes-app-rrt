import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button, FormGroup, Label, Input, Form} from 'reactstrap';
import { AppState, Note } from '../../redux/types';
import {useDispatch, useSelector} from "react-redux";
import { updateNote } from '../../redux/actions';

interface EditNoteModalProps {
    isOpen: boolean;
    toggleModal: () => void;
    selectedNoteId: number | null;
}

const EditNoteModal: React.FC<EditNoteModalProps> = ({isOpen, toggleModal, selectedNoteId}) => {
    const [updatedData, setUpdatedData] = useState({ name: '', category: '', content: '' });
    const dispatch = useDispatch();

    const note: Note | undefined = useSelector((state: AppState) =>
        state.notes.find((note) => note.id === selectedNoteId)
    );

    if (!note || !isOpen) return null;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const updatedNote: Note = {
            ...note,
            name: formData.get('name') as string,
            category: formData.get('category') as string,
            content: formData.get('content') as string,
        };
        console.log('Updated note:', updatedNote);
        dispatch(updateNote(updatedNote));
        toggleModal();
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setUpdatedData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <Modal isOpen={isOpen} toggle={toggleModal}>
            <ModalHeader>Edit Note</ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input
                            id="name"
                            name="name"
                            defaultValue={note.name}
                            placeholder="...enter note title"
                            type="text"
                            onChange={handleInputChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="category">Category</Label>
                        <Input
                            id="category"
                            name="category"
                            defaultValue={note.category}
                            type="select"
                            onChange={handleInputChange}
                        >
                            <option>Task</option>
                            <option>Random Thought</option>
                            <option>Idea</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="content">Content</Label>
                        <Input
                            id="content"
                            name="content"
                            defaultValue={note.content}
                            placeholder="...write about this"
                            type="textarea"
                            onChange={handleInputChange}
                        />
                    </FormGroup>
                    <Button color="primary" type="submit">Save</Button>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button onClick={toggleModal}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default EditNoteModal;