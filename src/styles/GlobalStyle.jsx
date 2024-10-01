import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    

}

body {
    -webkit-font-smoothing: antialiased;
   width: 100vw;

  
}

body, input , header {
    font-family: 'Poppins', sans-serif;
}
`