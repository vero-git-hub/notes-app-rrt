import React, {useState} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addNote } from '../../redux/actions';
import { Note } from '../../redux/types';

interface NoteFormProps {
    addNote: (note: Note) => void;
    closeModal: () => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ addNote, closeModal }) => {
    const [formData, setFormData] = useState({
        name: '',
        category: 'Task',
        content: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newNote: Note = {
            name: formData.name,
            category: formData.category,
            content: formData.content,
            created: '',
            dates: '',
        };

        addNote(newNote);
        closeModal();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="name">Name</Label>
                <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    placeholder="...enter note title"
                    type="text"
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for="category">Category</Label>
                <Input
                    id="category"
                    name="category"
                    value={formData.category}
                    type="select"
                    onChange={handleChange}
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
                    value={formData.content}
                    placeholder="...write about this"
                    type="textarea"
                    onChange={handleChange}
                />
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    );
};

export default connect(null, { addNote })(NoteForm);