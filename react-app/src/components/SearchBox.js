import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className="pa2 pt4">
            <input className="pa3 br3 ba b--green bg-lightest-blue" type="search" placeholder="Search pokemon" onChange={searchChange}/>
        </div>
    );
}

export default SearchBox;