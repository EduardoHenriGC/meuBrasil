import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
 
  --header: #172c3c;
  --blue: #274862;
  --background: #fafafa;
  --titulo: #240047;
  --subtitulo: #9720A0;
  
  

}

  
  body {
    
    background: var(--texto);
    font-family: 'Roboto', sans-serif;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
