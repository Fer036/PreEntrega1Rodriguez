import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Category, Home, Item, Contact, Checkout, Payment } from '../pages';
import { Navbar } from '../components';

export const MainRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/item/:id' element={<Item />} />
                <Route path='/category/:categoryName' element={<Category label='Category' />} />
                <Route path='/contact' element={<Contact label='Contact' />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/payment" element={<Payment />} />
            </Routes>
        </BrowserRouter>
    );
};