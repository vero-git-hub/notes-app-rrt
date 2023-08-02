import React from 'react';
import './App.css';
import NoteList from './components/NoteList';
import ArchiveList from "./components/ArchiveList";

const App: React.FC = () => {
    return (
        <div>
            <NoteList />
            <ArchiveList />
        </div>
    );
};

export default App;