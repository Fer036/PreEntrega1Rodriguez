import React from 'react';
import { Flex, Spinner } from '@chakra-ui/react';
import { useProducts } from '../hooks/useProducts';
import { ItemListContainer } from '../components';

export const Home = () => {
    const { products, loading } = useProducts();
    return loading ? (
        <Flex
            width={'100%'}
            height={'90vh'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <Spinner size={'xl'} />
        </Flex>
    ) : (
        <ItemListContainer products={products} />
    );
};