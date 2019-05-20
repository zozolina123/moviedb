import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import {Link} from 'react-router-dom';
import "react-alice-carousel/lib/alice-carousel.css";
import ReactImageFallback from "react-image-fallback";

class Carousel extends React.Component {
  state = {
    galleryItems: [1, 2, 3].map((i) => (<h2 key={i}>{i}</h2>)),
    data: ""
  }
  getData = () =>{
    const that = this;
    fetch(this.props.url)
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
 
  responsive = {
    0: { items: 1 },
    1024: { items: 3 },
  }
 
  componentDidMount(){
    this.getData();
  }
  render() {
      if(this.state.data){
      const items =this.state.data.results.map(item=>(
        <div className="carousel">
        <Link to={"/movie/"+item.id}>
             <div>
                <ReactImageFallback
                    src={"https://image.tmdb.org/t/p/w500/"+item.poster_path}
                    fallbackImage={process.env.PUBLIC_URL + '/my-backup.png'}
                    initialImage="loader.gif"
                    alt={"poster "+item.title}
                     />
            </div>
        <h3>{item.title}</h3>
        </Link>
        </div>
        )
      )
    return (
    <div className="carousel">
        <h1>{this.props.title}</h1>
        <p>
            <span className="arrow" onClick={() => this.Carousel._slidePrev()}>{"<"}</span>
            <span className="arrow" onClick={() => this.Carousel._slideNext()}>{">"}</span>
        </p>
        <AliceCarousel
            items={items}
            responsive={this.responsive}
            fadeOutAnimation={true}
            mouseDragEnabled={true}
            disableAutoPlayOnAction={true}
            dotsDisabled={true}
            buttonsDisabled={true}
            onSlideChange={this.onSlideChange}
            onSlideChanged={this.onSlideChanged}
            ref={(el) => (this.Carousel = el)}
        />
    </div>
    )
    
     }else return null;
  }
}
export default Carousel;