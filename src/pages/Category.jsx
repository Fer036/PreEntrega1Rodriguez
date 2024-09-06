import { useParams } from "react-router-dom";
import { useProductsByCategory } from '../hooks';
import { ItemListContainer  } from '../components/ItemListContainer';
import { Flex, Spinner, Heading } from '@chakra-ui/react';

export const Category = () => {
    const { category } = useParams();
    const { productsData, loading } = useProductsByCategory(category);

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
        <div>
            <Heading m={'2rem'}>
                {`Productos categoría: ${category}`}
            </Heading>
            <ItemListContainer product={productsData} />
        </div>
    );
};