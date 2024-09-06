import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { MainRouter } from './routes';
import MainLayout from './layout/MainLayout';

function App() {
    return (
        <ChakraProvider>
                <MainLayout>
                    <MainRouter />
                </MainLayout>
        </ChakraProvider>
    );
};
    
export default App; 