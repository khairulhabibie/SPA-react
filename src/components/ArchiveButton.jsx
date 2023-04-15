import React from 'react'

const ArchiveButton = ({ archived, id, onToggleArchive }) => {
    return (
        <>
            {
                archived ? <button className='btn-active' onClick={() => onToggleArchive(id)}>
                    Aktifkan
                </button> : <button className='btn-archive' onClick={() => onToggleArchive(id)}>
                    Arsipkan
                </button>
            }
        </>
    )
}

export default ArchiveButton
