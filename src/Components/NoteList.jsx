// NoteList.jsx

import React, { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Alert } from '@mui/material';
import './Styles/NoteList.css';

function NoteList() {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState("");
    const [noteAlert, setNoteAlert] = useState(false);

    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
        setNotes(storedNotes);
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            addNote();
        }
    };

    const addNote = () => {
        if (newNote.trim() !== "") {
            if (notes.length === 0 && newNote.length <= 250) {
                setNotes([newNote]);
                setNewNote("");
            } else {
                setNoteAlert(true);
            }
        }
    };

    const deleteNote = () => {
        setNotes([]);
        setNoteAlert(false);
    };

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    return (
        <div className="note-container">
            {noteAlert && (
                <Alert className='noteAlert' severity="info" onClose={() => setNoteAlert(false)}>
                    Only one note is allowed, and it should be up to 250 characters.
                </Alert>
            )}
            <div className='input-container'>
                <input
                    type="text"
                    placeholder="New Note (up to 250 characters)"
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className='note-input'
                />
            </div>
            {notes.map((note, index) => (
                <div key={index} className="note">
                    <span>{note}</span>
                    <div className="note-footer">
                        <DeleteIcon
                            className='deleteIcon'
                            fontSize='small'
                            onClick={deleteNote}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NoteList;