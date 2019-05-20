import React, {Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import ReactImageFallback from "react-image-fallback";


class Display extends Component {
    render(){
        const items = this.props.movies.results.map(item =>{
            if(item.overview.length>150)
                item.overview=item.overview.slice(0,150)+'...';
            return (
            <Col md={4} className="cardCustom">
            <ReactImageFallback
                    src={"https://image.tmdb.org/t/p/w300/"+item.poster_path}
                    fallbackImage={process.env.PUBLIC_URL + '/my-backup.png'}
                    initialImage="loader.gif"
                    alt={"poster "+item.title}
                     />
            <h3>{item.original_title}</h3>
            <p>{item.overview}</p>
            <Link to={"../movie/"+item.id}><button className="btnCustom btn">See More</button></Link>
            </Col>)
        });
        return (<div className="App">
            <h1>{this.props.title}</h1>
            <Container fluid>
                <Row>
                    {items}
                </Row>
            </Container>
            </div>);
    }
}

export default Display;