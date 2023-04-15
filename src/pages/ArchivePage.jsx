import React, { Component } from 'react'
import { getArchivedNotes, deleteNote, unarchiveNote } from '../utils/local-data'
import NoteList from '../components/NoteList'
import { useSearchParams } from 'react-router-dom'
import SearchBar from '../components/SearchBar'

const ArchivePageWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword')

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  )
}


class ArchivePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || ""
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
  onKeywordChangeHandler = (keyword) => {
    this.setState(() => {
      return {
        keyword
      }
    })
  }


  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
    })

    return (
      <section>
        <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
        <NoteList notes={notes} onDelete={this.onDeleteNoteHandler} onToggleArchive={this.onToggleArchiveNoteHandler} />
      </section>
    )
  }
}

export default ArchivePageWrapper