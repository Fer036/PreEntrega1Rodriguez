import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { MainRouter } from './routes';

function App() {
    return (
        <ChakraProvider>
            <MainRouter />
        </ChakraProvider>
    );
};

export default App; 