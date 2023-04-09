import React, { Component } from 'react'
import { getAllNotes } from '../utils/local-data'



export default class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getAllNotes()
    }
  }

  render() {
    return (
      <div>
        {
          this.state.notes.map(note => {
            return (console.log(note.title))
          })
        }
      </div>
    )
  }
}
