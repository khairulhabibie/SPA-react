import React from 'react'

const NoteDetail = ({ title, body, createdAt }) => {
    return (
        <section className='note-detail'>
            <h2>{title}</h2>
            <p className='date'>{createdAt}</p>
            <p>{body}</p>
        </section>
    )
}

export default NoteDetail
