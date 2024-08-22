import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
    return (
        <ChakraProvider>
            <NavBar />
            <ItemListContainer greeting='Bienvenido a mi tienda!'/>
        </ChakraProvider>
    )
};

export default App; 