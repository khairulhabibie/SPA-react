import React from 'react'
import PropTypes from 'prop-types'

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

ArchiveButton.propTypes = {
    archived: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    onToggleArchive: PropTypes.func.isRequired
}

export default ArchiveButton
