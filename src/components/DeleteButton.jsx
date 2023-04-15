import React from 'react'

const DeleteButton = ({ id, onDelete }) => {
  return <button className='btn-delete' onClick={() => onDelete(id)}>Hapus</button>
}

export default DeleteButton
