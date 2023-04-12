import React from 'react'
import DeleteButton from './DeleteButton'
import ArchiveButton from './ArchiveButton'

const NoteDetail = ({ id, title, body, createdAt, archived, onDelete, onToggleArchive, }) => {
    return (
        <>
            <section className='note-detail'>
                <h1>{title}</h1>
                <p className='date'>{createdAt}</p>
                <p>{body}</p>
            </section>

            <div className='pop-button'>
                <DeleteButton id={id} onDelete={onDelete} />
                <ArchiveButton id={id} onToggleArchive={onToggleArchive} archived={archived} />

            </div>
        </>
    )
}

export default NoteDetail
