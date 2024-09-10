import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Category, Home, Item, Events, Contact } from '../pages';
import { Navbar } from '../components';

export const MainRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/item/:id' element={<Item />} />
                <Route path='/category/:category' element={<Category label='Category' />} />
                <Route path='/events' element={<Events label='Events' />} />
                <Route path='/contact' element={<Contact label='Contact' />} />
            </Routes>
        </BrowserRouter>
    );
};