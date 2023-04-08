import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class NoteInput extends Component {
  constructor(props) {
    super(props)

    // inisialisasi state
    this.state = {
      title: "",
      body: ""

    }
  }

  onTitleChangeHandler = (event) => {
    this.setState(() => {
      return {
        title: event.target.value
      }
    })
  }
  onBodyChangeHandler = (event) => {
    this.setState(() => {
      return {
        body: event.target.value
      }
    })
  }

  onSubmitEventHandler = (event) => {
    event.preventDefault();
    this.props.addNote(this.state)
  }


  render() {
    return (
      <form onSubmit={this.onSubmitEventHandler}>
        <input type="text" placeholder='title' value={this.state.title} onChange={this.onTitleChangeHandler} />
        <input type="textarea" placeholder='body' value={this.stat
          .body} onChange={this.onBodyChangeHandler} />
        <button type='submit'>Add Note</button>
      </form>
    )
  }
}

// check type
NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired
};