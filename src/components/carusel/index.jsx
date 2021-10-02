import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import InfiniteCarousel from 'react-leaf-carousel';
import { CaruselC, Caruselwrap } from './main';
import { baseLink } from '../../baseLink';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Carusel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,

  };
  const [state, setstate] = useState([])
  const getVideo = () => {
    axios.get(baseLink + "carousel-news")
      .then((res) => {
        setstate(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }
  useEffect(() => {
    getVideo()
  }, [])
  return (
    <Caruselwrap>
      <br /><br />
      <CaruselC>


        <Slider {...settings}>
          {
            state?.map(({ imageId, title, createdAt }) => (

              <div >
                <img
                  alt="" 
                  src={`${baseLink} files/ ${imageId}`}
                />
                <p>{title}</p>
                <br />
                <small>{createdAt}</small>
              </div>

            ))
          }
        </Slider>

        {/* <div >
          <img
            alt=''
            src='https://tmb-01.github.io/news/assets/img/gallery/weekly2News4.png'
          />
        </div>
        <div>
          <img
            alt=''
            src='https://tmb-01.github.io/news/assets/img/gallery/weekly2News2.png'
          />
        </div>
        <div>
          <img
            alt=''
            src='https://tmb-01.github.io/news/assets/img/gallery/weekly2News1.png'
          />
        </div>
        <div>
          <img
            alt=''
            src='https://tmb-01.github.io/news/assets/img/gallery/weekly2News2.png'
          />
        </div>
        <div>
          <img
            alt=''
            src='https://tmb-01.github.io/news/assets/img/gallery/weekly2News3.png'
          />
        </div>
        <div>
          <img
            alt=''
            src='https://tmb-01.github.io/news/assets/img/gallery/weekly2News1.png'
          />
        </div>
        <div>
          <img
            alt=''
            src='https://tmb-01.github.io/news/assets/img/gallery/weekly2News3.png'
          />
        </div>
        <div>
          <img
            alt=''
            src='https://tmb-01.github.io/news/assets/img/gallery/weekly2News4.png'
          />
        </div> */}



        <br /><br />
      </CaruselC>
      <br /><br />
    </Caruselwrap>


  )
}
export default Carusel
