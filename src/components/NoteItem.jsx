import React from 'react'


const NoteItem = ({ id, title, body, createdAt, archived }) => {
  return (
    <div className='contact-Item'>
      <h3>{title}</h3>
      <p>{id}</p>
      {/* <p>{body}</p> */}
      <p>{createdAt}</p>
      <p>{archived}</p>

    </div>
  )
}

export default NoteItem
