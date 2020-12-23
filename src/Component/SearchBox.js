import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2 '>
            <input
            className='bg-light-green pa3 ba' 
            type = 'search' 
            placeholder = 'Search robot' 
            onChange={ searchChange }
            />
        </div>
        );   
}
 



export default SearchBox;