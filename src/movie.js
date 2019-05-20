import React, {Component} from 'react';
import ReactImageFallback from "react-image-fallback";
import Show from './show.js';
class Movie extends Component {
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
      componentWillReceiveProps(nextProps){
        if(nextProps!==this.props){
            this.setState({
                data: null
            });
        }
    }
    render(){
        if(!this.state.data)this.getData('https://api.themoviedb.org/3/movie/'+this.props.match.params.id+'?api_key=81513ffcd2dd02982ba2ca645d242d4f&append_to_response=videos');
        if(this.state.data){
            return (
                <div className="App">
                    <Show data={this.state.data} />
                </div> 
            );
        }
        else return null;
    }
}

export default Movie;