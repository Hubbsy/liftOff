import React from 'react';
import {Input} from 'reactstrap'


const Search = (props) => {
 

 
  return (
    <div className="search">
      <Input
        type="search"
        name="search"
        id="searchBar"
        placeholder="Search YouTube for all things Space!"
        onChange={(e) => {
          props.handleSearchInput(e.target.value)
        }}
        onKeyDown={props.keyPress}
      />
    </div>
    )
}






export default Search; 