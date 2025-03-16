import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from '../components/ProductList/ProductList';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Cart from '../pages/Cart/Cart';
import Profile from '../pages/Profile/Profile';
import Orders from '../pages/Orders/Orders';
import Favorites from '../pages/Favorites/Favorites';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/favorites" element={<Favorites />} />
        </Routes>
    );
};

export default AppRoutes; 