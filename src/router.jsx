import React from 'react';
import { BrowserRouter as AppRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import CreatingGroup from './pages/CreatingGroup'
import SelectKeyword from './pages/SelectKeyword';

const Router = () => {
  return (
    <AppRouter>
      <Routes>
        {/* <Route path='/' element={<App />} /> */}
        <Route path='/' element={<Main />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/select-keyword' element={<SelectKeyword/>}/>
        <Route path='/creating-group' element={<CreatingGroup/>}/>
      </Routes>
    </AppRouter>
  );
};

export default Router;