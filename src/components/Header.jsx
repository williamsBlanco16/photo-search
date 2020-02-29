import React from 'react'

import SearchForm from './SearchForm'

const Header = ({onSearch}) =>{
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light col-12">
      <a className="navbar-brand" href="#">500px Unsplash</a>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation">

        <span className="navbar-toggler-icon"></span>
      </button>

      <SearchForm onSearch = {onSearch}/>
    </nav>
  );
}

export default Header;