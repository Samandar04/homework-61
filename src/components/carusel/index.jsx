import React from 'react';
import ReactDOM from 'react-dom';

import InfiniteCarousel from 'react-leaf-carousel';
import { CaruselC, Caruselwrap } from './main';
function Carusel(){
    return(
        <Caruselwrap>
            <br /><br />
        <CaruselC>
        <InfiniteCarousel 
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ]}
        dots={true}
        showSides={true}
        sidesOpacity={.5}
        sideSize={.1}
        slidesToScroll={4}
        slidesToShow={4}
        scrollOnDevice={true}
       >
         

          
        <div >
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
        </div>

        
      </InfiniteCarousel>
      <br /><br />
        </CaruselC>
        <br /><br />
        </Caruselwrap>


    )
}
export default Carusel
