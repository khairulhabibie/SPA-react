import React from 'react'

const SearchBar = ({ keyword, keywordChange }) => {
  return (
    <input className='search-bar' type='text' placeholder='Search note by title'
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)}
    />
  )
}

export default SearchBar
