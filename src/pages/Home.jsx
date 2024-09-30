import React from 'react';
import { Box, Flex, Spinner } from '@chakra-ui/react';
import { useItemsCollection } from '../hooks/useItemsCollection';
import { ItemListContainer } from '../components';
import { HomeBanner } from '../components/HomeBanner/HomeBanner';
import { FeatureProducts } from '../components/FeatureProducts/FeatureProducts';

export const Home = () => {
    const { items, loading, error } = useItemsCollection('products');

    return loading ? (
        <Flex
            width={'100%'}
            height={'90vh'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <Spinner size={'xl'} />
        </Flex>
    ) : error ? (
        <Box>
            Error en la carga de productos.
        </Box>
    ) : (
        <Box>
            <HomeBanner />
            <FeatureProducts />
            <ItemListContainer products={items} />
        </Box>
    );
};