import React from 'react'

const ArchiveButton = ({ id, onToggleArchive }) => {
    return (
        <>
            {
                onToggleArchive ? <button className='btn-archive' onClick={() => onToggleArchive(id)}>
                    Archive
                </button> : <button className='btn-active' onClick={() => onToggleArchive(id)}>
                    Active
                </button>
            }
        </>
    )
}

export default ArchiveButton
