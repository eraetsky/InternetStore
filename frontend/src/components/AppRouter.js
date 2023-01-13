import React from 'react';
import {Routes, Route, Redirect} from 'react-router-dom';
import {ADMIN_ROUTE,SHOP_ROUTE,LOGIN_ROUTE,REGISTRATION_ROUTE,DEVICE_ROUTE,BASKET_ROUTE} from "../utils/consts";
import Auth from "../pages/Auth";
import Admin from "../pages/Admin";
import Basket from "../pages/Basket";
import Shop from "../pages/Shop";
import DevicePage from "../pages/DevicePage";

const routes = (auth) => {
    if (auth) {return(
        <Routes>
            <Route key={ADMIN_ROUTE} path={ADMIN_ROUTE} element={<Admin/>} exact/>
            <Route key={BASKET_ROUTE} path={BASKET_ROUTE} element={<Basket/>} exact/>
            <Route key={SHOP_ROUTE} path={SHOP_ROUTE} element={<Shop/>} exact/>
            <Route key={LOGIN_ROUTE} path={LOGIN_ROUTE} element={<Auth/>} exact/>
            <Route key={REGISTRATION_ROUTE} path={REGISTRATION_ROUTE} element={<Auth/>} exact/>
            <Route key={DEVICE_ROUTE + '/:id'} path={DEVICE_ROUTE + '/:id'} element={<DevicePage/>} exact/>
        </Routes>
    );}
    else {return (
        <Routes>
            <Route key={SHOP_ROUTE} path={SHOP_ROUTE} element={<Shop/>} exact/>
            <Route key={LOGIN_ROUTE} path={LOGIN_ROUTE} element={<Auth/>} exact/>
            <Route key={REGISTRATION_ROUTE} path={REGISTRATION_ROUTE} element={<Auth/>} exact/>
            <Route key={DEVICE_ROUTE + '/:id'} path={DEVICE_ROUTE + '/:id'} element={<DevicePage/>} exact/>
        </Routes>
    );}
}

const AppRouter = () => {
    const isAuth = false
    return routes(isAuth);
};

export default AppRouter;

