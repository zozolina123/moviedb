import React, { Component } from 'react';
import './App.css';
import Carousel from  './carousel.js';
import Search from  './search.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input:''
    }
  }

  render(){
    if(!this.state.input)
      return (
        <div className="App">
          <Carousel title={"Trending"} url={'https://api.themoviedb.org/3/trending/movie/week?api_key=81513ffcd2dd02982ba2ca645d242d4f'}/>
          <Carousel title={"Popular"} url={'https://api.themoviedb.org/3/movie/popular?api_key=81513ffcd2dd02982ba2ca645d242d4f'}/>
          <Carousel title={"Upcoming"} url={'https://api.themoviedb.org/3/movie/upcoming?api_key=81513ffcd2dd02982ba2ca645d242d4f'}/>
          <Carousel title={"Top Rated"} url={'https://api.themoviedb.org/3/movie/top_rated?api_key=81513ffcd2dd02982ba2ca645d242d4f'}/>
        </div>
    );
  }
}

export default App;
