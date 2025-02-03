import React from 'react';
import { BrowserRouter as AppRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import CreatingGroup from './pages/CreatingGroup'
import SelectKeyword from './pages/SelectKeyword';
import StoreReco from './pages/StoreReco';
import StoreInfo from './pages/StoreInfo';
import InputName from './pages/InputName';

const Router = () => {
  return (
    <AppRouter>
      <Routes>
        <Route path='/' element={<InputName />} />
        <Route path='/main' element={<Main />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/recommend' element={<StoreReco />} />
        <Route path='/product/:id' element={<StoreInfo />} />
        <Route path='/select-keyword' element={<SelectKeyword/>}/>
        <Route path='/creating-group' element={<CreatingGroup/>}/>
      </Routes>
    </AppRouter>
  );
};

export default Router;