import React from 'react'
// import PropTypes from 'prop-types'
import NoteItem from './NoteItem'

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


// NoteList.propTypes = {
//   notes: PropTypes.arrayOf(PropTypes.object).isRequired,
//   onDelete: PropTypes.func.isRequired
// }

export default NoteList
