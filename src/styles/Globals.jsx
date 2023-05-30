import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


* {
    margin: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins';
}


button {
    cursor: pointer;
    background: none;
    border: none;
}

a {
    text-decoration: none;
    cursor: pointer;
}

@media(max-width: 992px) {
  h1 {
    font-size: 93%;
  }

  h2 {
    font-size: 100%;
  }

  p {
    font-size: 93%;
  }
}

`;

export const Theme = {
  colors: {
    primary: "#DB4444",
    white: "#fafafa",
    background: "#F5F5F5",
    gray: "#7D8184",
    grey: "#f5f5f5",
    black: "#000",
    secondary: "#00FF66",
  },
};
