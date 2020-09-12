import React from 'react';
import {Input} from 'reactstrap'


const Search = () => {
  return (
    <div className="search">
        <Input
            type="search"
            name="search"
            id="searchBar"
            placeholder="Search for Launches here!"
          />
        </div>
  )
}






export default Search; 