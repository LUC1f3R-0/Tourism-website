import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '../pages/user/Index';
import User from '../pages/user/User';
import Dashboard from '../pages/user/Dashboard';
import Settings from '../pages/user/Settings';
import Earnings from '../pages/user/Earnings';
import RootLayout from '../layout/RootLayout';
import Contact from '../pages/Contact';
import AboutUs from '../pages/AboutUs';
import Pricing from '../pages/Pricing';
import Services from '../pages/Services';
import Register from '../pages/auth/Register';
import Login from '../pages/auth/Login';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Index />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about-Us" element={<AboutUs />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="services" element={<Services />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="settings" element={<Settings />} />
            <Route path="earnings" element={<Earnings />} />
        </Routes>
    );
};

export default AppRoutes;
