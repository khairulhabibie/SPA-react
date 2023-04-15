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
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmitEventHandler} >
        <h2>Tambah catatan baru !</h2>
        <input type="text" placeholder='Judul Catatan...' value={this.state.title} onChange={this.onTitleChangeHandler} autoComplete='off' className='title' />
        <textarea placeholder='Isi Catatan' value={this.state.body} onChange={this.onBodyChangeHandler} rows={13} className='body' />
        <button type='submit'>Simpan Catatan</button>
      </form>
    )
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired
};