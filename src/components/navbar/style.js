import styled from "styled-components";

export const NavbarWrap = styled.nav`
width: 100vw;
background: red;

padding: 20px;
`
export const Container = styled.div`
width: 1200px;
margin: auto;
display: flex;
`
export const Ulist = styled.ul`
display: flex;
list-style: none;
font-size: 20px;
color: white;
text-decoration: none;
`
export const List = styled.li`
text-decoration: none;
color: white;
padding: 0 25px;
font-size: 20px;
cursor: pointer;
animation-duration: 1s;
`
export const Link = styled.a`
color: white;
font-size: 20px;
`
export const Border = styled.div`
border-left: 1px solid white;
height: 30px;
`
export const NavBorder = styled.div`
height:70px;
border-left: 1px solid #f4f4f4;
position: absolute;
top: 0;
left: 65%;

`
export const NavIcon = styled.div`
color: white;
margin-left: 12%;
cursor: pointer;
animation-duration: 2s;
&:hover{
    transform: rotateY(180deg);
        transition: all 0.4s ease-out 0s;
}

`
export const NavIcon1 = styled.div`
color: white;
margin-left: 3%;
cursor: pointer;
animation-duration: 2s;
&:hover{
    transform: rotateY(180deg);
        transition: all 0.4s ease-out 0s;
}

`
export const NavBorder1=styled.div`
position: absolute;
height: 70px;
border-left: 1px solid #f4f4f4;
top: 0;
left: 80%;
`

export const NavIcon2 = styled.div`
color: white;
margin-left: 5%;
cursor: pointer;
animation-duration: 2s;
&:hover{
    transform: rotateY(180deg);
        transition: all 0.4s ease-out 0s;
}

`
export const Navbarbor=styled.div`
position: absolute;
left: 85%;
height: 70px;
top: 0;
border-left: 1px solid #f4f4f4;
`