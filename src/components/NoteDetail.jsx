import React from 'react'
import DeleteButton from './DeleteButton'

const NoteDetail = ({ id, title, body, createdAt, onDelete }) => {
    return (
        <>
            <section className='note-detail'>
                <h1>{title}</h1>
                <p className='date'>{createdAt}</p>
                <p>{body}</p>
            </section>

            <div className='pop-button'>
                <DeleteButton id={id} onDelete={onDelete} />

            </div>
        </>
    )
}

export default NoteDetail
