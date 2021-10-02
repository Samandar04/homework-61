import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card4In, Card4card1, Card4Icon, Card4Card1text } from './style'
import Icon1 from "../../images/free-icon-facebook-174848.svg"
import Icon2 from "../../images/free-icon-twitter-1409937.svg"
import Icon3 from "../../images/free-icon-instagram-179328.svg"
import Icon4 from "../../images/free-icon-youtube-174883.svg"

function Icons() {
    const [Icons, setIcons] = useState([])
    const iconLink = "https://ibs-school.herokuapp.com/api/v1/"
    const geticons = () => {
        axios.get(iconLink + "social-media")
            .then((res) => {
                console.log(res.data);
                setIcons(res.data)
            })
    }
    useEffect(() => {
        geticons()
    }, [])
    return (
        <Card4In>

            {
                Icons?.map(({ socialMediaName, id,numberOfFollowers }) => (
                    <Card4card1>
                        <Card4Icon key={id}>
                            <img src={socialMediaName==="facebook"? `${Icon1}`:""|| socialMediaName==="twitter"?`${Icon2}`:""|| socialMediaName==="instagram"? `${Icon3}`:""|| socialMediaName==="youtube"? `${Icon4}`:"" } alt="" />
                        </Card4Icon>
                        <Card4Card1text>
                            {[numberOfFollowers]}


                        </Card4Card1text>
                    </Card4card1>

                ))
            }

            {/* <Card4card1>
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
            </Card4card1> */}
        </Card4In>
    )
}

export default Icons
