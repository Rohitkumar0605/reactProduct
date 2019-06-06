import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <div style={{width: '100%', height: '20% !important'}}>
  <Carousel autoPlay >
    <div>
      <img style={{width: '100%', height: '20% !important'}} src="https://storage.googleapis.com/twg-content/original_images/ing_bank_logo.png"  />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src="https://secure.i.telegraph.co.uk/multimedia/archive/01011/ing2_1011842c.jpg" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img src="https://www.macobserver.com/wp-content/uploads/2019/05/ING-1200x630.jpg" />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img src="http://www.vccp.com.au/wp-content/uploads/sites/28/2018/09/ING-Website-Balloon-image.jpg" />
      <p className="legend">Legend 4</p>
    </div>
    <div>
    </div>
  </Carousel>
  </div>
);
