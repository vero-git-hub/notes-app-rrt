import React from 'react';
import './App.css';
import NoteList from './components/NoteList';
import ArchiveList from "./components/ArchiveList";
import SummaryTable from "./components/SummaryTable";

const App: React.FC = () => {
    return (
        <div>
            <NoteList />
            <SummaryTable />
            <ArchiveList />
        </div>
    );
};

export default App;