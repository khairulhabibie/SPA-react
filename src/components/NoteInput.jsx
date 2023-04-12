import React, { Component } from 'react';
// import PropTypes from 'prop-types'

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
    this.props.addNote(this.state);
    // event.target.reset();
  }


  render() {
    return (
      <form onSubmit={this.onSubmitEventHandler}>
        <input type="text" placeholder='title' value={this.state.title} onChange={this.onTitleChangeHandler} />
        <textarea placeholder='body' value={this.state.body} onChange={this.onBodyChangeHandler} cols={5} rows={4} />
        <button type='submit'>Add Note</button>
      </form>
    )
  }
}

// check type
// NoteInput.propTypes = {
//   addNote: PropTypes.func.isRequired
// };