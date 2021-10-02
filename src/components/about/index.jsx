import React from 'react'
import Footer from '../footer'
import { Aboutb, Aboutborder, Aboutbtn, Aboutcard, AboutCard1, Aboutcon, Aboutflex, AboutH1, AboutH2, AboutLorem, Aboutour, Abouttestimonials, AboutText, Abouttextflex, Abouttextlorem, Color1, Color2, Colorflex, Img, Rek, Testcard, Testcard1, Testtext, Testtext1 } from './style'

function About() {
    return (
        <div style={{ marginTop: "200px" }}>
            <Aboutcard>
                <Aboutflex>
                    <Aboutborder />
                    <AboutH1>our mission</AboutH1>
                </Aboutflex>
                <br /><br />
                <AboutLorem>
                    Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
                    <br /><br />
                    Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.
                </AboutLorem>

            </Aboutcard>
            <Aboutcard>
                <Aboutflex>
                    <Aboutborder />
                    <AboutH1>our mission</AboutH1>
                </Aboutflex>
                <br /><br />
                <AboutLorem>
                    Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
                    <br /><br />
                    Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.
                </AboutLorem>

            </Aboutcard>
            <br /><br /><br /><br />
            <Colorflex>
                <Color1 />
                <Color2 />
                <AboutCard1>
                    <img src="https://tmb-01.github.io/news/assets/img/gallery/about.png" alt="" />
                </AboutCard1>
                <AboutText>
                    <Abouttextflex>
                        <Aboutb />
                        <Aboutour>OUR TOP SERVICES</Aboutour><br /><br />
                    </Abouttextflex>
                    <AboutH2>Our Best Services</AboutH2>
                    <br /><br />
                    <Abouttextlorem>Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess cillum dolore egru lofrre dsu quality mollit anim laborumuis au dolor in voluptate velit cillu. <br /><br />
                        <span>Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt moll.</span>
                    </Abouttextlorem>
                    <br /><br /><br /><br /><br />
                    <Aboutbtn>more about us</Aboutbtn>
                </AboutText>
            </Colorflex>

            
            <div style={{background:"#f7f7f7"}}>
            <Aboutcon>
                <br /><br /><br />
            <Abouttestimonials>
                <Aboutb />
                <Aboutour>OUR PROFESSIONAL MEMBERS</Aboutour>
            </Abouttestimonials>
            <br />
            <Testtext>Our Team Mambers</Testtext>
            <br /><br />
            <Testcard>
                <Testcard1>
                <Img> <img src="https://tmb-01.github.io/news/assets/img/gallery/team2.png" alt="" />
                    </Img>
                    <Testtext1>Ethan Welch
                    <Abouttestimonials>
                        <Aboutb/>
                        <span>ux designer</span>
                    </Abouttestimonials>
                    </Testtext1>
                   
                </Testcard1>
                <Testcard1>
                <Img> <img src="https://tmb-01.github.io/news/assets/img/gallery/team3.png" alt="" />
                    </Img>
                    <Testtext1>Ethan Welch
                    <Abouttestimonials>
                        <Aboutb/>
                        <span>ux designer</span>
                    </Abouttestimonials>
                    </Testtext1>
                   
                </Testcard1>
                <Testcard1>
                    <Img> <img src="https://tmb-01.github.io/news/assets/img/gallery/team1.png" alt="" />
                    </Img>
                   
                    <Testtext1>Ethan Welch
                    <Abouttestimonials>
                        <Aboutb/>
                        <span>ux designer</span>
                    </Abouttestimonials>
                    </Testtext1>
                   
                </Testcard1>
            </Testcard>
            <br /><br /><br /><br /><br /><br />
            <Rek>
                <img src="https://tmb-01.github.io/news/assets/img/gallery/body_card3.png" alt="" />
            </Rek>
            </Aboutcon>
            <br /><br /><br /><br /><br />

            </div>
            <Footer/>
           
           
          

        </div>
    )
}

export default About
