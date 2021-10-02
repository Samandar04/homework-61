import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Wrapcard1, Wrapcard1text, Wrapcontainer, Wraper, Wrapflex } from '.'
import { baseLink } from '../../baseLink'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Wrap() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,

    };
    const [Card, setCard] = useState([])
    const getCard = () => {
        axios.get(baseLink + "trending-news")
            .then((res) => {


                setCard(res.data)
            })
            .catch((err) => {

                console.log(err);
            })
    }
    useEffect(() => {
        getCard()
    }, [])
    return (
        <Wraper>
            <Wrapcontainer>
                <p>treding news</p>
                <br />
              
                    
                    {/* <Wrapflex> */}
                    <Slider {...settings}>
                        {

                            Card?.map(({ imageId, title, createdAt }) => (
                                <Wrapcard1 style={{marginRight:"10px"}}>
                                    <img src={`${baseLink}files/${imageId}`} alt="" />
                                    <Wrapcard1text>
                                        {title}
                                        <span>{createdAt}</span>
                                    </Wrapcard1text>
                                </Wrapcard1>
                            ))
                        }
                         </Slider>
                          {/* </Wrapflex> */}
                   



              
            </Wrapcontainer>
        </Wraper>
    )
}

export default Wrap
