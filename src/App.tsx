import React from 'react';
import './App.css';
import NoteList from './components/NoteList';
import SummaryTable from './components/SummaryTable';
import ArchiveList from "./components/ArchiveList";

const App: React.FC = () => {
  return (
      <div>
        <h1>My App</h1>
        <NoteList />
        <SummaryTable />
        <ArchiveList />
      </div>
  );
};

export default App;
