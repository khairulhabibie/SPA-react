import React from 'react'

const ArchiveButton = ({ archived, id, onToggleArchive }) => {
    return (
        <>
            {
                archived ? <button className='btn-active' onClick={() => onToggleArchive(id)}>
                    Active
                </button> : <button className='btn-archive' onClick={() => onToggleArchive(id)}>
                    Archive
                </button>
            }
        </>
    )
}

export default ArchiveButton
