import React from 'react'

const SearchBar = ({ keyword, keywordChange }) => {
  return (
    <>
      <input className='search-bar' type='text' placeholder='Cari berdasarkan Judul...'
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </>
  )
}

export default SearchBar
