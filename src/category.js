import React, {Component} from 'react';
import Display from './display';
class Category extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null
        }
    }

    getData = (url) =>{
        const that=this;
        fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            that.setState({
                data: myJson
              })
        });
      }

      getGenreId = () => {
        const that=this;
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=81513ffcd2dd02982ba2ca645d242d4f')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            myJson.genres.map((item)=>{
                if(item.name.toLowerCase() == that.props.match.params.category){
                    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=81513ffcd2dd02982ba2ca645d242d4f&sort_by=popularity.desc&with_genres='+item.id;
                    that.getData(url);
                }
            })
        });
          
      }
      componentWillReceiveProps(nextProps){
        if(nextProps!==this.props){
            this.setState({
                data: null
            });
        }
    }
    render(){
        if(!this.state.data)this.getGenreId('https://api.themoviedb.org/3/genre/movie/list?api_key=81513ffcd2dd02982ba2ca645d242d4f');
        if(this.state.data){
            return (
                <div className="App">
                    <Display movies={this.state.data} title={this.props.match.params.category}/>
                </div> 
            );
        }
        else return null;
    }
}

export default Category;