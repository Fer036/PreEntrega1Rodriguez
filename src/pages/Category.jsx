import React from "react";
import { useParams } from "react-router-dom";
import { ItemListContainer  } from '../components';
import { useProductsByCategory } from '../hooks';
import { Flex, Spinner, Heading } from '@chakra-ui/react';

export const Category = () => {
    const { categoryId } = useParams();
    const { products, loading } = useProductsByCategory(categoryId);

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
            <ItemListContainer product={products} />
    );
};