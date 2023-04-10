import React, { Component } from 'react'
import { getAllNotes } from '../utils/local-data'
import NoteList from '../components/NoteList'

export default class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getAllNotes()
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
