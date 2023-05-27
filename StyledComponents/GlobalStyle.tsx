import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }
    body {
        font-family: 'Roboto', sans-serif;
    }
    .flex {
        display : flex;
        align-items : center;
    }
    .nav-item {
        text-decoration: none;
        color : #000;
        padding-inline : 20px;
    }
`