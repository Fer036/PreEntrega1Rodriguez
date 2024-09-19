import React from 'react';
import './App.css'
import { ChakraProvider } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainRouter } from './routes';
import { CartProvider } from './context/CartContext';

function App() {
    return (
        <ChakraProvider>
            <CartProvider>
                <MainRouter />
            </CartProvider>
        </ChakraProvider>
    );
};

export default App; 