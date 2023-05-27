import styled from "styled-components";

const colors = {
    primaryColor : "#00BFFF"
}

export const Wrapper = styled.div`
    width : 1200px;
    margin : auto;
`

export const Headers = styled.header`
    width : 100%;
    position: fixed;
    top: 0;
    z-index: 99;
    left: 0%;
    padding : 10px 0;
`

export const Logo = styled.img`
    width : 5%;
`

export const Button = styled.button<{bg:string,text:string}> `
    padding: 8px 30px;
    border-radius: 4px;
    border: 1px solid #00BFFF;
    color: ${({text})=>text};
    background-color : ${({bg})=>bg};
`

export const BigTextSection = styled.div`
    width : 50%;
    p {
        padding : 30px 0 50px 0;
    }
`

export const H1 = styled.h1`
    border-left: 4px solid ${colors.primaryColor};
    font-size: 50px;
    font-weight: 700;
    color: ${colors.primaryColor};
    padding : 0 10px;
    line-height : 70px;
`;

export const Para = styled.p`
    font-weight : 400;
    font-size : 15px;
`

export const Image1 = styled.img`
    width : 500px;
`