import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as notesAPI from '../../utilities/notes-api';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import AddForm from '../../components/AddForm/AddForm';
import NotePage from '../NotePage/NotePage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([]);

  
  async function addNote(note) {
    const addedNote = await notesAPI.create(note);
    setNotes([...notes, addedNote])
  }

  useEffect(function() {
  async function getNotes() {
    const notes = await notesAPI.getAll();
    setNotes(notes);
  }

  getNotes()

}, [])


  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/new" element={<AddForm addNotes={addNote} />} />
              <Route path="/" element={<NotePage notes={notes} user={user} />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}