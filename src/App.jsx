import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ProductsData } from './data/productData';
import { ItemListContainer, MainLayout } from './components';

function App() {
    return (
        <ChakraProvider>
                <MainLayout>
                    <ItemListContainer products={ProductsData} />
                </MainLayout>
        </ChakraProvider>
    )
};
    
export default App; 