import React from 'react'
import Icon1 from "../../images/free-icon-facebook-174848.svg"
import Icon2 from "../../images/free-icon-twitter-1409937.svg"
import Icon3 from "../../images/free-icon-instagram-179328.svg"
import Icon4 from "../../images/free-icon-youtube-174883.svg"
import Icons from "../icons/index.jsx" 
import { Latestcard1, Latestcard2, Latestflex, Latesth1, Latesticon, Latesticonflex, Latestp, Latestshare, Latestwrap } from '.'
import { Aboutcon } from '../about/style'
import Inputs from '../input'
import Footer from '../footer'
function Latest() {
    return (
        <Latestwrap>
            <Aboutcon>
                <Latestflex>
                    <Latestcard1>
                        <img src="https://tmb-01.github.io/news/assets/img/trending/trending_top.jpg" alt="" />
                        <br /><br />
                        <Latesth1>
                            Here come the moms in space
                        </Latesth1>
                        <br /><br />
                        <Latestp>Moms are like…buttons? Moms are like glue. Moms are like pizza crusts. Moms are the ones who make sure things happen—from birth to school lunch.
                            <br /><br />
                            Moms are like…buttons? Moms are like glue. Moms are like pizza crusts. Moms are the ones who make sure things happen—from birth to school lunch.
                            <br /><br />
                            My hero when I was a kid was my mom. Same for everyone I knew. Moms are untouchable. They’re elegant, smart, beautiful, kind…everything we want to be. At 29 years old, my favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top, makes me so proud of how far I’ve come, and so thankful for where I come from. the refractor telescope uses a convex lens to focus the light on the eyepiece. The reflector telescope has a concave lens which means it telescope sits on. The mount is the actual tripod and the wedge is the device that lets you attach the telescope to the mount. Moms are like…buttons? Moms are like glue. Moms are like pizza crusts. Moms are the ones who make sure things happen—from birth to school lunch.</Latestp>
                            <br /><br />
                        <Latesth1>
                            Unordered list style?
                        </Latesth1>
                        <br /><br />
                        <Latestp>
                            Moms are like…buttons? Moms are like glue. Moms are like pizza crusts. Moms are the ones who make sure things happen—from birth to school lunch.
                            <br /><br />
                            Moms are like…buttons? Moms are like glue. Moms are like pizza crusts. Moms are the ones who make sure things happen—from birth to school lunch.
                            <br /><br />
                            My hero when I was a kid was my mom. Same for everyone I knew. Moms are untouchable. They’re elegant, smart, beautiful, kind…everything we want to be. At 29 years old, my favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top, makes me so proud of how far I’ve come, and so thankful for where I come from. the refractor telescope uses a convex lens to focus the light on the eyepiece. The reflector telescope has a concave lens which means it telescope sits on. The mount is the actual tripod and the wedge is the device that lets you attach the telescope to the mount. Moms are like…buttons? Moms are like glue. Moms are like pizza crusts. Moms are the ones who make sure things happen—from birth to school lunch.
                        </Latestp>
                        <br /><br />
                        <Latesticonflex>
                            <Latestshare>
                                Share:
                            </Latestshare>
                            <Latesticon>
                                <img src={Icon3} alt="" />
                            </Latesticon>
                            <Latesticon>
                                <img src={Icon1} alt="" />
                            </Latesticon>
                            <Latesticon>
                                <img src={Icon2} alt="" />
                            </Latesticon>
                            <Latesticon>
                                <img src={Icon4} alt="" />
                            </Latesticon>

                        </Latesticonflex>
                    </Latestcard1>
                    <Latestcard2>
                        <Icons/>
                        <img src="https://tmb-01.github.io/news/assets/img/news/news_card.jpg" alt="" />
                    </Latestcard2>
                </Latestflex>
                <br /><br /><br />
                <Inputs/>
            </Aboutcon>
            <br /><br /><br /><br />
            <Footer/>

        </Latestwrap>
    )
}

export default Latest
