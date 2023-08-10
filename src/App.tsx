import React from 'react';
import './App.css';
import NoteList from './layout/NoteList';
import ArchiveList from "./layout/ArchiveList";
import SummaryTable from "./layout/SummaryTable";

const App: React.FC = () => {
    return (
        <>
            <NoteList />
            <SummaryTable />
            <ArchiveList />
        </>
    );
};

export default App;