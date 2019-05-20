import React, {Component} from 'react';
import Display from './display.js';
class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
        }
    }
    getData = () =>{
        const that = this;
        const url="https://api.themoviedb.org/3/search/movie?api_key=81513ffcd2dd02982ba2ca645d242d4f&query="+this.props.match.params.query;
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
      componentDidMount(){
        this.getData();
      }
      componentWillReceiveProps(nextProps){
        if(nextProps!==this.props){
            this.setState({
                data: null
            });
        }
    }
      
    render(){
        if(!this.state.data)this.getData();
        if(this.state.data){
            return (
                <Display movies={this.state.data} title={"Results for: "+this.props.match.params.query} />
            );
        }
        else return null;
    }
}

export default Search;