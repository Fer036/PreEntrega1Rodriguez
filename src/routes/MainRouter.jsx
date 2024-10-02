import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Category, Home, Item, Contact, Checkout, Payment, Login } from '../pages';
import { Navbar } from '../components';
import { Footer } from '../components/Footer/Footer';

export const MainRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/item/:id' element={<Item />} />
                <Route path='/category/:categoryName' element={<Category label='Category' />} />
                <Route path='/contact' element={<Contact label='Contact' />} />
                <Route path='/login' element={<Login label='Login' />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/payment" element={<Payment />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};