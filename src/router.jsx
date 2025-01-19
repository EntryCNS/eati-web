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
        {/* <Route path='/' element={<App />} /> */}
        <Route path='/Inputname' element={<InputName />} />
        <Route path='/' element={<Main />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/SelectKeyword' element={<SelectKeyword/>}/>
        <Route path='/CreatingGroup' element={<CreatingGroup/>}/>
        <Route path='/Recommend' element={<StoreReco />} />
        <Route path='/Product/:id' element={<StoreInfo />} />
      </Routes>
    </AppRouter>
  );
};

export default Router;