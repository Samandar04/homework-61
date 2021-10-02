import React from 'react'
import { Big, Btn, Inputflex, Inputwrap } from './style'

function Inputs() {
    return (
        <Inputwrap>
            <textarea cols="30" rows="9"  placeholder="Enter Message" />
            <Inputflex>
            <input type="text" placeholder="Enter You Name" />
            <input type="text" placeholder="Email" />
            </Inputflex>
            <Big placeholder="Enter Subject">
                
            </Big>
            <Btn>S E N D</Btn>
        </Inputwrap>
    )
}

export default Inputs
