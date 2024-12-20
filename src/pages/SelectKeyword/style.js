import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'yg-jalnan';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;


export const FoodQuestion = styled.div`
    font-size: 24px;
    font-family: 'yg-jalnan', sans-serif;
`