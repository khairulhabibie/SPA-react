import React, { Component } from 'react'
import { getActiveNotes, deleteNote, archiveNote } from '../utils/local-data'
import NoteList from '../components/NoteList'

export default class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getActiveNotes()
    }
  }

  onDeleteNoteHandler = (id) => {
    deleteNote(id);
    this.setState(() => {
      return {
        notes: getActiveNotes()
      }

    })
  }

  onArchiveNoteHandler = (id) => {
    archiveNote(id)
    this.setState(() => {
      return {
        notes: getActiveNotes()
      }
    })
  }

  onToggleActiveNoteHandler = (id) => {
    console.log(id)
  }

  render() {
    return (
      <section>
        <NoteList notes={this.state.notes} onDelete={this.onDeleteNoteHandler} onToggleArchive={this.onToggleActiveNoteHandler} />
      </section>
    )
  }
}
