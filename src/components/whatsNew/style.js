import styled from "styled-components";

export const WhatsNewwrapper=styled.div`

border-radius: 10px;
background: white;
width: 770px;
padding: 20px;
height: fit-content;
`
export const Navs=styled.ul`
display: flex;
text-decoration: none;
list-style: none;
padding: 0;
margin-bottom: 20px;
li{
    text-transform: capitalize;
    cursor: pointer ;
    margin: 0 20px;
    &:hover{
        transform: scale(1.1);
    }
    &.active{
        background: transparent;
        color: #fe2144;
    }
}
`
export const Dflex=styled.div`
display: flex;
justify-content: space-between;
`
export const Maincard=styled.div`
width: 48%;
img{
    width: 100%;
}
`
export const Rightcards=styled.div`
width: 48%;

img{
    margin-bottom: 20px;
    width: 30%;
}

`
