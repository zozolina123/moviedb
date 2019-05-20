import React, {Component} from 'react';
class NoMatch extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null
        }
    }
   
    render(){
        return <h1>Sorry, this page is unavailable.</h1>
    }
}

export default NoMatch;