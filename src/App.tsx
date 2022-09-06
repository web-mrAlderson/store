import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { FC, useContext } from 'react';
import { Context } from '.';
import { Home, Listing, Basket, Login, Admin } from './pages';
import { Header, Footer } from './components';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

const App: FC = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, [store])

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path={'/store'} element={<Home />} />
        <Route path={'/store/basket'} element={<Basket />} />
        <Route path={'/store/listing'} element={<Listing />} />
        <Route path={'/store/login'} element={<Login />} />
        <Route path={'/store/admin'} element={<Admin />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default observer(App);
