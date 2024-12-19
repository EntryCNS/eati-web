import React from 'react'
import Router from '../src/router';
import styled from 'styled-components';
import { BrowserRouter} from "react-router-dom";

const AppContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
  min-height: 100vh;
  background-color: #f8f9fa;
  position: relative;
  border-left: 1px solid #e9ecef;
  border-right: 1px solid #e9ecef;
`

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
