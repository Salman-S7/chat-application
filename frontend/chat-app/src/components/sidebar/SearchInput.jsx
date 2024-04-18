import React from 'react'

const SearchInput = () => {
  return (
    <div style={{width:"auto"}}>
         	<form style={{display:'flex', width:"380px"}}>
                <input type='text' placeholder='Search…'/>
                <button type='submit'>
                    search
                </button>
    		</form>
    </div>
  )
}

export default SearchInput