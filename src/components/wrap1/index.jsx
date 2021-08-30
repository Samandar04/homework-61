import React from 'react'
import { Wrapcard1, Wrapcard1text, Wrapcontainer, Wraper, Wrapflex } from '.'

function Wrap() {
    return (
        <Wraper>
            <Wrapcontainer>
                <p>treding news</p>
           <br />
            <Wrapflex>
                <Wrapcard1>
                    <img src="https://tmb-01.github.io/news/assets/img/gallery/tranding2.png" alt="" />
                    <Wrapcard1text>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        <span>Jun 19,20</span>
                    </Wrapcard1text>
                </Wrapcard1>
                <Wrapcard1>
                    <img src="https://tmb-01.github.io/news/assets/img/gallery/tranding1.png" alt="" />
                    <Wrapcard1text>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        <span>Jun 19,20</span>
                    </Wrapcard1text>
                </Wrapcard1>
                <Wrapcard1>
                    <img src="https://tmb-01.github.io/news/assets/img/gallery/tranding2.png" alt="" />
                    <Wrapcard1text>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        <span>Jun 19,20</span>
                    </Wrapcard1text>
                </Wrapcard1>
            </Wrapflex>
            </Wrapcontainer>
        </Wraper>
    )
}

export default Wrap
