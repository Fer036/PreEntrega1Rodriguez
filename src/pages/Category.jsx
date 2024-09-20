import React from "react";
import { useParams } from "react-router-dom";
import { ItemListContainer } from '../components';
import { useProductsByCategory } from '../hooks';
import { Flex, Spinner } from '@chakra-ui/react';

export const Category = () => {
    const { categoryName } = useParams();
    console.log(categoryName)
    const { products, loading } = useProductsByCategory(categoryName);

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
