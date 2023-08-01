import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const NoteForm: React.FC = () => {
    return (
        <Form>
            <FormGroup>
                <Label for="nameText">Name</Label>
                <Input
                    id="nameText"
                    name="text"
                    placeholder="...enter note title"
                />
            </FormGroup>
            <FormGroup>
                <Label for="categorySelect">Category</Label>
                <Input id="categorySelect" name="select" type="select">
                    <option>Task</option>
                    <option>Random Thought</option>
                    <option>Idea</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="contentText">Content</Label>
                <Input
                    id="contentText"
                    name="text"
                    placeholder="...write about this"
                    type="textarea"
                />
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    );
};

export default NoteForm;
