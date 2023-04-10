import React from 'react'

const NoteItem = ({ title, body, createdAt }) => {
  return (
    <div className='note-item'>
      <h4>{title}</h4>
      <p className='date'>{createdAt}</p>
      <p className='text-body'>{body}</p>
    </div>
  )
}

export default NoteItem
