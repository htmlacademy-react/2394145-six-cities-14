import MainPage from '../pages/MainPage/MainPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../consts';
import { ReactElement } from 'react';
import Layout from './layout/layout';
import Login from '../pages/Login/Login';
import NotFound from '../pages/NotFound/NotFound';
import Favorites from '../pages/Favorites/Favorites';
import Offer from '../pages/Offer/Offer';
import PrivateRoute from './private/private';
type AppProps = {
  placesCount: number;
}

function App({placesCount}: AppProps):ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={<MainPage offersCount={placesCount}/>}/>
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Favorites/>
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Offer} element={<Offer/>}/>
        </Route>
        <Route path={AppRoute.Login} element={<Login/>}/>
        <Route path='*' element={<NotFound/>}/>


      </Routes>
    </BrowserRouter>

  );
}

export default App;
