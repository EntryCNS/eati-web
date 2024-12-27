import React from 'react';
import { BrowserRouter as AppRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import StoreReco from './pages/StoreReco';
import StoreInfo from './pages/StoreInfo';

const Router = () => {
  return (
    <AppRouter>
      <Routes>
        {/* <Route path='/' element={<App />} /> */}
        <Route path='/' element={<Main />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/recommend' element={<StoreReco />} />
        <Route path='/storeInfo' element={<StoreInfo />} />
      </Routes>
    </AppRouter>
  );
};

export default Router;