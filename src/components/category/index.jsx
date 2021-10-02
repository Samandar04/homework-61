import React, { useState } from 'react'
import { Aboutcon } from '../about/style'
import Footer from '../footer'
import Icons from '../icons'
import { Card1flex, Card1text, Categorycard1, Categorycard1flex, Categorycard1flextext, Categorycard2, Categorycard2img, Categoryflex, Categorywrap, Icons1, Icons2, Iconsflex, Img1, Imgcardtext, Imgflex, ImginImg, Imgp, Number, Number1 } from './style'

function Category() {
    const [state, setstate] = useState([
        {
            img: "https://tmb-01.github.io/news/assets/img/gallery/whats_news_details1.png",
            title: "secretart for economic air plane that looks like",
            time: "by Alice cloe - Jun 19,2020",
            text: "Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.",
        },
        {
            img: "https://tmb-01.github.io/news/assets/img/gallery/whats_news_details2.png",
            title: "secretart for economic air plane that looks like",
            time: "by Alice cloe - Jun 19,2020",
            text: "Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.",
        },
        {
            img: "https://tmb-01.github.io/news/assets/img/gallery/whats_news_details3.png",
            title: "secretart for economic air plane that looks like",
            time: "by Alice cloe - Jun 19,2020",
            text: "Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.",
        },
        {
            img: "https://tmb-01.github.io/news/assets/img/gallery/whats_news_details4.png",
            title: "secretart for economic air plane that looks like",
            time: "by Alice cloe - Jun 19,2020",
            text: "Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.",
        },
        {
            img: "https://tmb-01.github.io/news/assets/img/gallery/whats_news_details5.png",
            title: "secretart for economic air plane that looks like",
            time: "by Alice cloe - Jun 19,2020",
            text: "Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.",
        },
        {
            img: "https://tmb-01.github.io/news/assets/img/gallery/whats_news_details6.png",
            title: "secretart for economic air plane that looks like",
            time: "by Alice cloe - Jun 19,2020",
            text: "Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.",
        },
    ],
        [
            {
                img: "https://tmb-01.github.io/news/assets/img/gallery/whats_news_details4.png",
                title: "secretart for economic air plane that looks like",
                time: "by Alice cloe - Jun 19,2020",
                text: "Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.",
            },
            {
                img: "https://tmb-01.github.io/news/assets/img/gallery/whats_news_details6.png",
                title: "secretart for economic air plane that looks like",
                time: "by Alice cloe - Jun 19,2020",
                text: "Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.",
            },
        ]
    )
    return (
        <Categorywrap>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous"></link>
            <Aboutcon>
                <Categoryflex>
                    <Categorycard1>
                        <Card1flex>
                            <Card1flex>
                                <Card1text>
                                    Whats New
                                </Card1text>
                                <Categorycard1flex>
                                    <Categorycard1flextext>
                                        lifestyle
                                    </Categorycard1flextext>
                                    <Categorycard1flextext>
                                        travel
                                    </Categorycard1flextext>
                                    <Categorycard1flextext>
                                        fashion
                                    </Categorycard1flextext>
                                    <Categorycard1flextext>
                                        sports
                                    </Categorycard1flextext>
                                    <Categorycard1flextext>
                                        technology
                                    </Categorycard1flextext>
                                </Categorycard1flex>
                            </Card1flex>
                        </Card1flex>
                        <br /><br />
                        <Imgflex>
                            {
                                state.map((value) => (
                                    <Img1>
                                        <ImginImg>
                                            <img src={value.img} alt="" />
                                        </ImginImg>
                                        <Imgcardtext>
                                            {value.title}
                                            <br /> <span>{value.time}</span>

                                        </Imgcardtext>
                                        <Imgp>
                                            {value.text}
                                        </Imgp>
                                    </Img1>
                                ))
                            }

                        </Imgflex>
                    </Categorycard1>
                    <Categorycard2>
                        <Icons />
                        <Categorycard2img>
                            <img src="https://tmb-01.github.io/news/assets/img/news/news_card.jpg" alt="" />
                        </Categorycard2img>
                    </Categorycard2>

                </Categoryflex>
                <br />
                <Iconsflex>
                    <Icons1><i class="fas fa-arrow-left"></i></Icons1>
                    <Number>01</Number>
                    <Number1>02</Number1>
                    <Number1>03
                    </Number1>
                    <Icons2><i class="fas fa-arrow-right"></i></Icons2>
                </Iconsflex>
            </Aboutcon>
            <br /><br />
            <Footer />
        </Categorywrap>
    )
}

export default Category
