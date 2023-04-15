import React from 'react'
import NoteItem from './NoteItem'
import PropTypes from 'prop-types'

const NoteList = ({ notes, onDelete, onToggleArchive }) => {
  return (
    <div className="note-list">
      {
        notes.map((note) =>
          <NoteItem
            key={note.id}
            id={note.id}
            onDelete={onDelete} onToggleArchive={onToggleArchive}
            {...note} />)
      }
    </div>
  )
}


NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleArchive: PropTypes.func.isRequired
}

export default NoteList
