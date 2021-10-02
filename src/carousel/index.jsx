import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Ccc } from '.';
function Carousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay:true,

      };
    return(
     
 <Slider  {...settings}>
    <div style={{overflow:"hidden"}}>
        <img src="" alt="" />
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
    <div>
      <h3>5</h3>
    </div>
    <div>
      <h3>6</h3>
    </div>
  </Slider>
        
   
    )
}

export default Carousel
