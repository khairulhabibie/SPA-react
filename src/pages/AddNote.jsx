import React from 'react'
import NoteInput from '../components/NoteInput'
import { addNote } from '../utils/local-data'
import { Navigate } from 'react-router-dom';

const AddNote = () => {

  function onAddNoteHadler(contact) {
    addNote(contact);
    Navigate('/');
  }

  return (
    <>
      <h2>Tambah Note</h2>
      <NoteInput addNote={onAddNoteHadler} />
    </>
  )
}

export default AddNote
