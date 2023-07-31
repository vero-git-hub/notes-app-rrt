import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { AppState } from './redux/types';

const App = () => {
    const notes = useSelector((state: AppState) => state.notes);
    return (
        <div>
            {notes.map((note) => (
                <div key={note.id}>
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                </div>
            ))}
        </div>
    );
};

export default App;