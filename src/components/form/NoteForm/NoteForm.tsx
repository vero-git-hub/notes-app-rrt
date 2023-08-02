import React, {useState} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addNote } from '../../../redux/actions';
import { Note } from '../../../redux/types';
import { formatDate, formatCurrentDate } from '../../../utils/utils';
import {CATEGORY_NAMES} from "../../../layout/constants";


interface NoteFormData {
    name: string;
    category: string;
    content: string;
}

interface FormErrors {
    name?: string | undefined;
    content?: string | undefined;
}

interface NoteFormProps {
    addNote: (note: Note) => void;
    closeModal: () => void;
}

const currentDate = new Date();
const formattedDate = formatCurrentDate(currentDate);

const NoteForm: React.FC<NoteFormProps> = ({ addNote, closeModal }) => {
    const [formData, setFormData] = useState({
        name: '',
        category: CATEGORY_NAMES.TASK,
        content: '',
    });

    const [formErrors, setFormErrors] = useState<FormErrors>({
        name: '',
        content: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        setFormErrors({
            ...formErrors,
            [name]: '',
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const errors = validateForm(formData);
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        const contentForm = formData.content;
        const newNote: Note = {
            id: 0,
            name: formData.name,
            category: formData.category,
            content: contentForm,
            created: formattedDate,
            dates: formatDate(contentForm),
        };

        addNote(newNote);
        closeModal();
    };

    const validateForm = (data: NoteFormData): FormErrors => {
        const errors: FormErrors = {};

        if (!data.name.trim()) {
            errors.name = 'Name is required';
        }

        if (!data.content.trim()) {
            errors.content = 'Content is required';
        }

        return errors;
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
                {formErrors.name && <span style={{ color: 'red' }}>{formErrors.name}</span>}
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
                    <option>{CATEGORY_NAMES.TASK}</option>
                    <option>{CATEGORY_NAMES.RANDOM_THOUGHT}</option>
                    <option>{CATEGORY_NAMES.IDEA}</option>
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
                {formErrors.content && <span style={{ color: 'red' }}>{formErrors.content}</span>}
            </FormGroup>
            <Button color="primary">Submit</Button>
        </Form>
    );
};

export default connect(null, { addNote })(NoteForm);