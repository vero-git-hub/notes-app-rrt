import React from 'react';
import './App.css';
import NoteList from './layout/NoteList';
import ArchiveList from "./layout/ArchiveList";
import SummaryTable from "./layout/SummaryTable";
import {Container} from "reactstrap";

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