import React, {Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import ReactImageFallback from "react-image-fallback";


class Show extends Component {
    render(){
            return (
                <Container className="containerCustom">
                <Row className="showC">
                    <Col md={6}>
                        <ReactImageFallback
                                src={"https://image.tmdb.org/t/p/w300/"+this.props.data.poster_path}
                                fallbackImage={process.env.PUBLIC_URL + '/my-backup.png'}
                                initialImage="loader.gif"
                                alt={"poster "+this.props.data.original_title}
                     />
                     </Col>
                     <Col md={6} className="details">
                        <h1>{this.props.data.original_title}</h1>
                         <p>{this.props.data.overview}</p>
                         <iframe src={'https://www.youtube.com/embed/'+this.props.data.videos.results[0].key}
                            frameBorder='0'
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'   
                         />
                    </Col>
            </Row>
            </Container>)
        }
}

export default Show;