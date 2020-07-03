import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

*{
    font-family: 'ProximaNova', 'serif';
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

body{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    overflow: hidden;
    
}

svg:hover{
    cursor: pointer;
}

button:hover{
    cursor: pointer;
}

`
