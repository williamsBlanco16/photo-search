import React from "react";

import Header from './Header'
import Thumbnails from './Thumbnails'


class App extends React.Component{
  constructor(){
    super();

    this.state={
      photos:[]
    }
  }

  search = (query) =>{
    const CONSUMER_KEY =  '4fSXqi6J98nRqYqqzwL7MnnuIyCeX9GvfM-IP54nR3g';
    const apiUrl = `https://api.unsplash.com//search/photos/?client_id=${CONSUMER_KEY}&query=${query}`;
    
    fetch(apiUrl)
    .then((response)=>response.json())
    .then(json => this.setState({photos:json.results}))
    .catch(error =>{
      console.log(error);
    })
  }

  render (){
    const {photos} = this.state;

    return( 
    <div className="container">
      <div className="row">
        <Header onSearch={this.search}/>
      </div>

      <div className="row">
        <Thumbnails photos={photos}/>
      </div>

    </div>
    );
  }
}

export default App;