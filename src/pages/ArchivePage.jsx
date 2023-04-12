import React, { Component } from 'react'
import { getArchivedNotes, deleteNote, unarchiveNote } from '../utils/local-data'
import NoteList from '../components/NoteList'

export default class ArchivePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getArchivedNotes()
    }
  }

  onDeleteNoteHandler = (id) => {
    deleteNote(id);
    this.setState(() => {
      return {
        notes: getArchivedNotes()
      }
    })
  }

  onToggleArchiveNoteHandler = (id) => {
    unarchiveNote(id)
    this.setState(() => {
      return {
        notes: getArchivedNotes()
      }
    })
  }


  render() {
    return (
      <section>
        <NoteList notes={this.state.notes} onDelete={this.onDeleteNoteHandler} onToggleArchive={this.onToggleArchiveNoteHandler} />
      </section>
    )
  }
}
