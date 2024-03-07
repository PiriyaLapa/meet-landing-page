import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle<{}>`
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    body {
        // Mobile
        width:100%;
        height:100vh;
        @media screen and (max-width:767px){
            background-color:red;

        }

        // Tablet
        @media screen and (min-width:768px) and (max-width:1023px){
             background-color:orange;
            /* padding: 3% 5%; */
        }

        // Labtop
        @media screen and (min-width:1024px) and (max-width:1439px){
             background-color:yellow;
            /* padding: 5% 5%; */
        }

        // Desktop
        @media screen and (min-width:1440px){
             background-color:green;
            /* padding:5% 5%; */
        }
    }
`;

export default GlobalStyles;