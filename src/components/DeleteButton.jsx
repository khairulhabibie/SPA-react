import React from 'react'
import PropTypes from 'prop-types'

const DeleteButton = ({ id, onDelete }) => {
  return <button className='btn-delete' onClick={() => onDelete(id)}>Hapus</button>
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default DeleteButton
