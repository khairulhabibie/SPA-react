import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const NoteItem = ({ title, body, createdAt, id }) => {
  return (
    <div className='note-item'>
      <h4>
        <Link to={`./note/${id}`}>{title}</Link>
      </h4>
      <p className='date'>{createdAt}</p>
      <p className='text-body'>{body}</p>
    </div>
  )
}

NoteItem.propType = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired
}

export default NoteItem
