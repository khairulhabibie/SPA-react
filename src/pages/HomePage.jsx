import React, { Component } from 'react'
import { getActiveNotes, deleteNote, archiveNote } from '../utils/local-data'
import NoteList from '../components/NoteList'
import SearchBar from '../components/SearchBar'
import { useSearchParams } from 'react-router-dom'

const HomePageWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  )
}

class HomePage extends Component {
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

  onToggleArchiveNoteHandler = (id) => {
    archiveNote(id)
    this.setState(() => {
      return {
        notes: getActiveNotes(),
        keyword: this.props.defaultKeyword || ""
      }
    })
  }

  onKeywordChangeHandler = (keyword) => {
    this.setState(() => {
      return {
        keyword
      }
    })
    this.props.keywordChange(keyword)
  }

  render() {
    // const notes = this.state.notes.filter((note) => {
    //   return note.title
    //     .toLowerCase()
    //     .includes(this.state.keyword.toLowerCase());
    // });

    return (
      <section>
        <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
        <br />
        <NoteList notes={this.state.notes} onDelete={this.onDeleteNoteHandler} onToggleArchive={this.onToggleArchiveNoteHandler} />
      </section>
    )
  }
}

export default HomePageWrapper