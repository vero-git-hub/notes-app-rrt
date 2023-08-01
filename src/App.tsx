import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { AppState } from './redux/types';

const App = () => {
    const notes = useSelector((state: AppState) => state.notes);
    return (
        <div>
            {notes.map((note) => (
                <div>
                    <h3>{note.name}</h3>
                    <p>{note.created}</p>
                    <p>{note.category}</p>
                    <p>{note.content}</p>
                    <p>{note.dates}</p>
                    <p>{note.icons}</p>
                </div>
            ))}
        </div>
    );
};

export default App;