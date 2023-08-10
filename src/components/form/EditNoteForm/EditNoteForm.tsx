import React, {useState} from 'react';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import { Note } from '../../../redux/types';
import { CATEGORY_NAMES } from "../../../layout/constants";

interface EditNoteFormProps {
    note: Note;
    handleSubmit: (updatedNote: Note) => void;
}

const formatDate = (content: string): string => {
    const dateRegex = /(\d{1,2}\/\d{1,2}\/\d{4})/g;
    const findDates = content.match(dateRegex);
    let formattedDates: string = "";

    if (findDates) {
        formattedDates = findDates.join(', ');
    }

    return formattedDates;
};

const EditNoteForm: React.FC<EditNoteFormProps> = ({ note, handleSubmit }) => {
    const [nameError, setNameError] = useState('');
    const [contentError, setContentError] = useState('');

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const contentForNewNote = formData.get('content');
        const nameValue = formData.get('name') as string;
        const contentValue = formData.get('content') as string;

        if (!nameValue.trim()) {
            setNameError('Name is required');
            return;
        }
        if (!contentValue.trim()) {
            setContentError('Content is required');
            return;
        }

        const updatedNote: Note = {
            ...note,
            name: nameValue,
            category: formData.get('category') as string,
            content: contentValue,
            dates: formatDate(contentForNewNote as string),
        };
        handleSubmit(updatedNote);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setNameError(value.trim() ? '' : 'Name is required');
    };

    const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setContentError(value.trim() ? '' : 'Content is required');
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <FormGroup>
                <Label for="name">Name</Label>
                <Input
                    id="name"
                    name="name"
                    defaultValue={note.name}
                    placeholder="...enter note title"
                    type="text"
                    onChange={handleNameChange}
                />
                {nameError && <span style={{ color: 'red' }}>{nameError}</span>}
            </FormGroup>
            <FormGroup>
                <Label for="category">Category</Label>
                <Input
                    id="category"
                    name="category"
                    defaultValue={note.category}
                    type="select"
                >
                    <option>{CATEGORY_NAMES.CATEGORY_1}</option>
                    <option>{CATEGORY_NAMES.CATEGORY_2}</option>
                    <option>{CATEGORY_NAMES.CATEGORY_3}</option>
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
                    onChange={handleContentChange}
                />
                {contentError && <span style={{ color: 'red' }}>{contentError}</span>}
            </FormGroup>
            <Button color="primary" type="submit">Save</Button>
        </form>
    );
};

export default EditNoteForm;
