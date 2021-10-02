import React, { useEffect, useState } from 'react'
import { Carousel } from "react-carousel-minimal"
import { BodyText2, BodyText1, Bodycard2, Back, Bodycard1, BodyText, BodyWrap, Button, Container, Bodycard2img1, Card2Img, Cont, Card3text, Card3, Card3flex, Card3flextext, Flex, Card3ImgFlex, Card3img, Card3imgtext, Card3Span, Card3P, Card3Img2, Card3Img2text1, Card3Img2text2, Card3Img2span, Card3Img2Card1, Card3Img2textcard, Card4, Card4In, Card4card1, Card4Icon, Card4Card1text, Card4card2, Card4card2img, Card2But, Card2text, Card2flex, Card2fleximg, Card2flextext, Card5img, Card5, Card5card2, Card5card2img, Card5carusel } from '.'
import Icon1 from "../../images/free-icon-facebook-174848.svg"
import Icon2 from "../../images/free-icon-twitter-1409937.svg"
import Icon3 from "../../images/free-icon-instagram-179328.svg"
import Icon4 from "../../images/free-icon-youtube-174883.svg"
import Img2 from "../../images/tr.jpg"
import Img3 from "../../images/55518891_401.jpg"
import Img4 from "../../images/is.jpg"
import Img5 from "../../images/wh.jpg"
import Img6 from "../../images/Mo.jpg"
import Img7 from "../../images/man1.jpg"
import Img8 from "../../images/ww.jpg"

import { Link } from 'react-router-dom'
import "../../App.css"
import Icons from '../icons'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios'
import WhatsNew from '../whatsNew'
import Category from '../category'
function Bodyyy() {
    const [Carusel, setCarusel] = useState([])
    const getCarusel = () => {
        setProcess({
            loading: true,
            error: false,
            success: false,
        })
        axios.get(baseLink + "most-popular")
            .then((res) => {
                setProcess({
                    loading: false,
                    error: false,
                    success: true,
                })
                console.log(res.data);
                setCarusel(res.data)
            })
            .catch((err) => {
                setProcess({
                    loading: false,
                    error: true,
                    success: false,
                })
                console.log(err);
            })
    }
    const [Card, setCard] = useState([])
    const getWhats = () => {
        setProcess({
            loading: true,
            error: false,
            success: false,
        })
        axios.get(baseLink + "most-recent")
            .then((res) => {
                setProcess({
                    loading: false,
                    error: false,
                    success: true,
                })
                console.log(res.data);
                setCard(res.data)
            })
            .catch((err) => {
                setProcess({
                    loading: false,
                    error: true,
                    success: false,
                })
                console.log(err);
            })
    }
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,


    };
    var settingscarusel = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,


    };
    const [Header, setHeader] = useState([])
    const [process, setProcess] = useState({
        loading: false,
        error: false,
        success: false
    })
    const baseLink = "https://ibs-school-news.herokuapp.com/api/v1/"
    const getDate = () => {
        setProcess({
            loading: true,
            error: false,
            success: false,
        })
        axios.get(baseLink + "header-news")
            .then((res) => {
                setProcess({
                    loading: false,
                    error: false,
                    success: true,
                })

                setHeader(res.data)
            })
            .catch((err) => {
                setProcess({
                    loading: false,
                    error: true,
                    success: false,
                })
                console.log(err);
            })
    }
    useEffect(() => {
        getDate()
        getWhats()
        getCarusel()
    }, [])

    return (
        <BodyWrap>
            <Container>
                <Bodycard1>
                    {process.loading ? <h1>loading...</h1> : ""}
                    {process.error ? <h1>Error</h1> : ""}
                    {

                        <Slider  {...settings}>
                            <img src={`${baseLink}files/${Header.length > 0 ? Header[0].imageLink : ""}`} alt="" />
                            <img src={`${baseLink}files/${Header.length > 0 ? Header[1].imageLink : ""}`} alt="" />
                        </Slider>

                    }

                    {

                        <BodyText className="animate__animated animate__fadeInUp">
                            {Header.length > 0 ? Header[0].title : ""}
                            <p style={{ fontSize: "16px", color: "white" }}>{Header.length > 0 ? Header[0].title : ""}</p>
                        </BodyText>

                    }

                    <Button className="animate__animated animate__fadeInUp">{Header.length > 0 ? Header[0].category : ""}</Button>
                    <Back />
                </Bodycard1>
                <Bodycard2>
                    {process.loading ? <h1>loading...</h1> : ""}
                    {process.error ? <h1>Error</h1> : ""}
                    {
                        <Bodycard2img1>
                            <img onLoadStart={(e) => { console.log(e); }} src={`${baseLink}files/${Header?.[2]?.imageLink}`} alt="" />
                            <BodyText1 className="animate__animated animate__fadeInUp">
                                {Header.length > 0 ? Header[2].title : ""}
                                <p style={{ fontSize: "16px", color: "white" }}>by Alice cloe-Jun 19,20</p>
                            </BodyText1>
                        </Bodycard2img1>
                    }

                    <Card2Img>
                        {process.loading ? <h1>loading...</h1> : ""}
                        {process.error ? <h1>Error</h1> : ""}
                        <img src={`${baseLink}files/${Header?.[3]?.imageLink}`} alt="" />
                        <BodyText2 className="animate__animated animate__fadeInUp">
                            {Header?.[3]?.title}
                            <p style={{ fontSize: "16px", color: "white" }}>by Alice cloe-Jun 19,20</p>
                        </BodyText2>
                    </Card2Img>
                </Bodycard2>
            </Container>
                    
            <br /><br />
            <Cont>
                
                <WhatsNew />
                <Card4>
                    <Icons />
                    <br /><br />
                    <Card4card2>
                        <p>Most Recent</p>
                        {process.loading ? <h4>loading...</h4> : ""}
                        {process.error ? <h4>Error</h4> : ""}

                        {

                            <Card4card2img>
                                <img src={`${baseLink}files/${Card?.[0]?.image}`} />
                                <Card2But>{Card?.[0]?.category}</Card2But>
                                <Card2text>

                                    {Card?.[0]?.title}
                                    <span>{Card?.[0]?.author} | {Card?.[0]?.hoursAgo} hours ago</span>
                                </Card2text>
                            </Card4card2img>
                        }

                        <br /><br />
                        {process.loading ? <h4>loading...</h4> : ""}
                        {process.error ? <h4>Error</h4> : ""}
                        {
                            <Card2flex>
                                <Card2fleximg>
                                    <img src={`${baseLink}files/${Card?.[1]?.image}`} alt="" />
                                </Card2fleximg>
                                <Card2flextext>
                                    {Card?.[1]?.title}
                                    <span> {Card?.[1]?.author} | {Card?.[1]?.hoursAgo} hours ago</span>
                                </Card2flextext>
                            </Card2flex>
                        }

                        {process.loading ? <h4>loading...</h4> : ""}
                        {process.error ? <h4>Error</h4> : ""}
                        {
                            <Card2flex>
                                <Card2fleximg>
                                    <img src={`${baseLink}files/${Card?.[2]?.image}`} alt="" />
                                </Card2fleximg>
                                <Card2flextext>
                                    {Card?.[2]?.title}
                                    <span> {Card?.[2]?.author} | {Card?.[2]?.hoursAgo} hours ago</span>
                                </Card2flextext>
                            </Card2flex>
                        }
                    </Card4card2>
                </Card4>

                <Card5img>
                    <img src="	https://tmb-01.github.io/news/assets/img/gallery/body_card2.png" alt="" />
                </Card5img>
                <Card5>
                    <Card5card2>
                        <p>Most Popular</p>
                    </Card5card2>
                    <br />
                    <Card5card2img>
                        <Slider {...settingscarusel}>
                            {
                                Carusel?.map(({ imageId, id, title, author, crearedAt }) => (



                                    <Card5carusel key={id}>
                                        <img src={`${baseLink}files/${imageId}`} alt="444444" />
                                        {title}
                                        <p>{author}|{crearedAt} </p>
                                    </Card5carusel>





                                ))
                            }
                        </Slider>
                    </Card5card2img>





                </Card5>
            </Cont>

        </BodyWrap>
    )
}

export default Bodyyy
