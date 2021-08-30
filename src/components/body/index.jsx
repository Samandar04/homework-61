import React from 'react'
import { Carousel } from "react-carousel-minimal"
import { BodyText2, BodyText1, Bodycard2, Back, Bodycard1, BodyText, BodyWrap, Button, Container, Bodycard2img1, Card2Img, Cont, Card3text, Card3, Card3flex, Card3flextext, Flex, Card3ImgFlex, Card3img, Card3imgtext, Card3Span, Card3P, Card3Img2, Card3Img2text1, Card3Img2text2, Card3Img2span, Card3Img2Card1, Card3Img2textcard, Card4, Card4In, Card4card1, Card4Icon, Card4Card1text, Card4card2, Card4card2img, Card2But, Card2text, Card2flex, Card2fleximg, Card2flextext, Card5img, Card5, Card5card2, Card5card2img,Card5carusel } from '.'
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

function Bodyyy() {


    return (
        <BodyWrap>
            <Container>
                <Bodycard1>
                    <img src={Img2} alt="" />
                    <BodyText className="animate__animated animate__fadeInUp">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro?
                    </BodyText>
                    <Button className="animate__animated animate__fadeInUp">BUSINESS</Button>
                    <Back />
                </Bodycard1>
                <Bodycard2>
                    <Bodycard2img1>
                        <img src={Img7} alt="" />
                        <BodyText1 className="animate__animated animate__fadeInUp">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro?
                        </BodyText1>
                    </Bodycard2img1>
                    <Card2Img>
                        <img src={Img6} alt="" />
                        <BodyText2 className="animate__animated animate__fadeInUp">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro?
                        </BodyText2>
                    </Card2Img>
                </Bodycard2>
            </Container>
            <br /><br />
            <Cont>
                <Card3>
                    <Flex>
                        <Card3text>
                            whats new
                        </Card3text>
                        <Card3flex>
                            <Card3flextext>
                                <Link className="li">
                                    Lifestyle
                                </Link>

                            </Card3flextext>
                            <Card3flextext>
                                <Link className="li">
                                    travel
                                </Link>

                            </Card3flextext>
                            <Card3flextext>
                                <Link className="li">
                                    fashion
                                </Link>

                            </Card3flextext>
                            <Card3flextext>
                                <Link className="li">
                                    sports
                                </Link>

                            </Card3flextext>
                            <Card3flextext>
                                <Link className="li">
                                    technology
                                </Link>

                            </Card3flextext>
                        </Card3flex>
                    </Flex>
                    <br /><br />
                    <Card3ImgFlex>
                        <Card3img>
                            <img src={Img3} alt="" />
                            <Card3imgtext>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </Card3imgtext>
                            <br />
                            <Card3Span>
                                by Alice cloe-Jun 19,20
                            </Card3Span>

                            <Card3P>
                                <br />
                                Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.
                            </Card3P>
                        </Card3img>
                        <Card3Img2>
                            <Card3Img2Card1>
                                <img src={Img4} alt="" />
                            </Card3Img2Card1>
                            <Card3Img2textcard>
                                <Card3Img2text1>
                                    fashion
                                </Card3Img2text1>
                                <Card3Img2text2>
                                    Portrait of group of friends ting eat. market in.
                                </Card3Img2text2>
                                <Card3Img2span>
                                    Jun 19,20
                                </Card3Img2span>
                            </Card3Img2textcard>
                            <Card3Img2Card1>
                                <img src={Img5} alt="" />
                            </Card3Img2Card1>
                            <Card3Img2textcard>
                                <Card3Img2text1>
                                    fashion
                                </Card3Img2text1>
                                <Card3Img2text2>
                                    Portrait of group of friends ting eat. market in.
                                </Card3Img2text2>
                                <Card3Img2span>
                                    Jun 19,20
                                </Card3Img2span>
                            </Card3Img2textcard>
                            <Card3Img2Card1>
                                <img src={Img8} alt="" />
                            </Card3Img2Card1>
                            <Card3Img2textcard>
                                <Card3Img2text1>
                                    fashion
                                </Card3Img2text1>
                                <Card3Img2text2>
                                    Portrait of group of friends ting eat. market in.
                                </Card3Img2text2>
                                <Card3Img2span>
                                    Jun 19,20
                                </Card3Img2span>
                            </Card3Img2textcard>

                        </Card3Img2>
                    </Card3ImgFlex>
                </Card3>
                <Card4>
                    <Card4In>
                        <Card4card1>
                            <Card4Icon>
                                <img src={Icon1} alt="" />
                            </Card4Icon>
                            <Card4Card1text>
                                8,045

                                <span>Fans</span>
                            </Card4Card1text>
                        </Card4card1>
                        <Card4card1>
                            <Card4Icon>
                                <img src={Icon2} alt="" />
                            </Card4Icon>
                            <Card4Card1text>
                                8,045
                                <br />
                                <span>Fans</span>
                            </Card4Card1text>
                        </Card4card1>
                        <Card4card1>
                            <Card4Icon>
                                <img src={Icon3} alt="" />
                            </Card4Icon>
                            <Card4Card1text>
                                8,045
                                <br />
                                <span>Fans</span>
                            </Card4Card1text>
                        </Card4card1>
                        <Card4card1>
                            <Card4Icon>
                                <img src={Icon4} alt="" />
                            </Card4Icon>
                            <Card4Card1text>
                                8,045
                                <br />
                                <span>Fans</span>
                            </Card4Card1text>
                        </Card4card1>
                    </Card4In>
                    <br /><br />
                    <Card4card2>
                        <p>Most Recent</p>
                        <Card4card2img>
                            <img src="	https://tmb-01.github.io/news/assets/img/gallery/most_recent.png" />
                            <Card2But>Vogue</Card2But>
                            <Card2text>

                                What to Wear: 9+ Cute Work
                                Outfits to Wear This.
                                <span>Jhon | 2 hours ago</span>
                            </Card2text>
                        </Card4card2img>
                        <br /><br />
                        <Card2flex>
                            <Card2fleximg>
                                <img src="	https://tmb-01.github.io/news/assets/img/gallery/most_recent1.png
" alt="" />
                            </Card2fleximg>
                            <Card2flextext>
                                Scarlett’s disappointment at latest accolade
                                <span> Jhon | 2 hours ago</span>
                            </Card2flextext>
                        </Card2flex>
                        <Card2flex>
                            <Card2fleximg>
                                <img src="https://tmb-01.github.io/news/assets/img/gallery/most_recent2.png
" />
                            </Card2fleximg>
                            <Card2flextext>
                                Scarlett’s disappointment at latest accolade
                                <span> Jhon | 2 hours ago</span>
                            </Card2flextext>
                        </Card2flex>
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
                        <Card5carusel>
                            <img src="https://tmb-01.github.io/news/assets/img/gallery/weeklyNews2.png" alt="" />
                        Lorem ipsum dolor sit amet consectetur.
                        <p>Jhon|2 hours ago</p>
                        </Card5carusel>
                    
                   
                        <Card5carusel>
                            <img src="https://tmb-01.github.io/news/assets/img/gallery/weeklyNews2.png" alt="" />
                        Lorem ipsum dolor sit amet consectetur.
                        <p>Jhon|2 hours ago</p>
                        </Card5carusel>
                   
                   
                        <Card5carusel>
                            <img src="https://tmb-01.github.io/news/assets/img/gallery/weeklyNews2.png" alt="" />
                        Lorem ipsum dolor sit amet consectetur.
                        <p>Jhon|2 hours ago</p>
                        </Card5carusel>
                 
                     
                        </Card5card2img>
                </Card5>
            </Cont>

        </BodyWrap>
    )
}

export default Bodyyy
