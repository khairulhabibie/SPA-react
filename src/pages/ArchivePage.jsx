import React, { Component } from 'react'
import { getArchivedNotes } from '../utils/local-data'
import NoteList from '../components/NoteList'

export default class ArchivePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getArchivedNotes()
    }
  }


  render() {
    return (
      <section>
        <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
      </section>
    )
  }
}
