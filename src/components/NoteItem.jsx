import React from 'react'
import { Link } from 'react-router-dom'

const NoteItem = ({ title, body, createdAt, id }) => {
  return (
    <div className='note-item'>
      <h4><Link to={`/note/${id}`}>{title}</Link></h4>
      <p className='date'>{createdAt}</p>
      <p className='text-body'>{body}</p>
    </div>
  )
}

export default NoteItem
