import React from 'react';
import PropTypes from 'prop-types'

import Thumbnails from './Thumbnails'

class SearchForm extends React.Component {
  
  constructor() {
    super();

    this.state = {
      query:'',
      photos:[]
    };
  }

  handlerOnSubmit = (e) => {
    e.preventDefault();
    
    const query = e.target.txtSearch.value;

    this.props.onSearch(query);
  }

 

  render(){
    const {photos} = this.state;
    return(
      <div>
        <div 
          className="collapse navbar-collapse" 
          id="navbarSupportedContent">

        <form 
          className="form-inline my-2 my-lg-0"
          onSubmit={this.handlerOnSubmit}>

          <input
            name='txtSearch' 
            className="form-control mr-sm-2" 
            type="text" 
            placeholder="Search" 
            aria-label="Search"
            onChange =  {(e) => this.setState({query:e.target.value})}
          />

          <button 
            className="btn btn-outline-success my-2 my-sm-0" 
            type="submit">
              Search
          </button>
        </form>
      </div>

      <Thumbnails photos = {photos}/>
      </div>
         
    );
  } 
}

SearchForm.proptypes = {
  OnSearch: PropTypes.func.isRequired
}

export default SearchForm;