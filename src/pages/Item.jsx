import React from "react";
import { useParams } from "react-router-dom";
import { useProductsById } from '../hooks';
import { ItemDetailContainer } from '../components';
import { Flex, Spinner } from '@chakra-ui/react';

export const Item = () => {
    const { id } = useParams();
    const { product, loading } = useProductsById(Number(id));

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
        <ItemDetailContainer product={product} />
    );
};