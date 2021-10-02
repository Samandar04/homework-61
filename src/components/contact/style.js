import styled from "styled-components";

export const Contactflex=styled.div`
display: flex;
justify-content: space-between;
`
export const Contactcard1=styled.div`
width: 60%;
textarea{
    width: 100%;
    height: 200px;
    padding: 15px;
}
input{
    width: 100%;
    padding: 15px;
}
button{
    width: 100px;
    text-align: center;
    padding: 15px 0;
    background: white;
    border: 1px solid #fe2144;
    color: #fe2144;
    &:hover{
        background: #fe2144;
        color: white;
    }
}
`
export const Conflex=styled.div`
display: flex;

justify-content: space-between;
margin-top: 15px;
input{
    width: 48%;
}
`
export const Concard2=styled.div`
width: 35%;
`
export const Concard2flex=styled.div`
display: flex;
margin-left: 100px;
margin-bottom: 50px;
i{
    color: gray;
    margin-top: 10px;
    font-size: 30px;
}
p{
    margin-left: 15px;
    span{
        display: block;
        color: gray;
    }
}
`
