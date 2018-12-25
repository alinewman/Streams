import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import D3Sample from './D3Sample';

class App extends Component {

  state = { images: [] };

 onSearchSubmit =async (term)=>{
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params:{ query: term },
    headers:{
      Authorization: 'Client-ID 7bbfc495040e04ed671b97ee3e0e372ea5f4596a02af816e96895a9bef723a57',
    }
  });
  this.setState({images: response.data.results})
}

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
      <D3Sample />
        <SearchBar onSubmit={this.onSearchSubmit}/>
      <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
