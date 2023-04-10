import React from 'react'

const NoteDetail = ({ title, body, createdAt }) => {
    return (
        <>

            <h2>{title}</h2>
            <p className='date'>{createdAt}</p>
            <p>{body}</p>
        </>
    )
}

export default NoteDetail
