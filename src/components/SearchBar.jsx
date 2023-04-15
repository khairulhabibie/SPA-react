import React from 'react'

const SearchBar = ({ keyword, keywordChange }) => {
  return (
    <>
      <h3>Cari Catatan</h3>
      <input className='search-bar' type='text' placeholder='Cari berdasarkan Judul...'
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </>
  )
}

export default SearchBar
