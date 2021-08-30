import styled from "styled-components";

export const Wraper=styled.div`
background: white;
overflow: hidden;
padding: 50px 0 ;
`
export const Wrapcontainer=styled.div`
width: 1200px;
margin: auto;
p{
    text-transform: capitalize;
    font-size: 30px;
    font-weight: bold;
}
`
export const Wrapflex=styled.div`
display: flex;
justify-content: space-between;
`
export const Wrapcard1=styled.div`
width: 31%;
overflow: hidden;
position: relative;
img{
    width: 100%;
    height: 100%;
}
`
export const Wrapcard1text=styled.div`
text-align: left;
background: white;
padding: 20px;
position: absolute;
left: 0;
right: 20%;
bottom: 0;
z-index: 8;
font-weight: bold;
span{
    display: block;
    font-weight: normal;
    color: gray;
}
`
