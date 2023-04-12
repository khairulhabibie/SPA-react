import React from 'react'

const ArchiveButton = ({ id, onArchive, onActive }) => {
    return (
        <>
            {
                onActive === true ? <button className='btn-archive' onClick={() => onArchive(id)}>
                    Archive
                </button> : <button className='btn-active' onClick={() => onActive(id)}>
                    Active
                </button>
            }
        </>
    )
}

export default ArchiveButton
