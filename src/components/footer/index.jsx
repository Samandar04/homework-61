import React from 'react'
import { Footercard1, Footercard1img, Footercard1text, Footercard2, Footercard2flex, Footercard2img, Footercard2text, Footercard3, Footercon, Footerwrap } from './main'

function Footer() {
    return (
        <Footerwrap>
            <br /><br /><br />
            <Footercon>
                <br /><br />
                <Footercard1>
                    <Footercard1img>
                        <img src="https://tmb-01.github.io/news/assets/img/logo/logo2_footer.png" alt="" />
                    </Footercard1img>
                    <br /><br />
                    <Footercard1text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum corporis unde perferendis.
                        <br /><br /><br />
                        198 West 21th Street, Suite 721 New York,NY 10010
                        <br /><br />
                        Phone: +95 (0) 123 456 789 Cell: +95 (0) 123 456 789
                    </Footercard1text>

                </Footercard1>
                <Footercard2>
                    <p>Popular Post</p>
                    <br /><br />
                    <Footercard2flex>
                        <Footercard2img>
                            <img src="https://tmb-01.github.io/news/assets/img/gallery/footer_post1.png" alt="" />

                        </Footercard2img>
                        <Footercard2text>

                            Scarlett’s disappointment at latest accolade
                            <span>Jhon | 2 hours ago</span>
                        </Footercard2text>
                        <Footercard2img>
                            <img src="https://tmb-01.github.io/news/assets/img/gallery/footer_post1.png" alt="" />

                        </Footercard2img>
                        <Footercard2text>

                            Scarlett’s disappointment at latest accolade
                            <span>Jhon | 2 hours ago</span>
                        </Footercard2text>
                        <Footercard2img>
                            <img src="https://tmb-01.github.io/news/assets/img/gallery/footer_post1.png" alt="" />

                        </Footercard2img>
                        <Footercard2text>

                            Scarlett’s disappointment at latest accolade
                            <span>Jhon | 2 hours ago</span>
                        </Footercard2text>
                    </Footercard2flex>
                </Footercard2>
                <Footercard3>
                    <img src="https://tmb-01.github.io/news/assets/img/gallery/body_card4.png" alt="" />
                </Footercard3>
            </Footercon>
        </Footerwrap>
    )
}

export default Footer
