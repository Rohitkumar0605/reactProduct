import React ,{Component} from 'react';
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
class Home extends Component {
render() {
  return (
    <div>
      <Carousel style={{ width: "100px",height:"100px" }}/>
          </div>    
    );
  }
}

export default Home;