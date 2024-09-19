import { Box, Icon, Text } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

export const CartWidget = () => {
    const { cartState } = useContext(CartContext);

    const qtyTotalItems = cartState.reduce((acc, item) => acc + item.qtyItem, 0);

    return (
        <Box position='relative' display='inline-block' ml={4}>
            <Icon as={FaShoppingCart} w={5} h={5} />
            <Text
                position={'absolute'}
                top={'-2'}
                right={'-2'}
                bg={'red.500'}
                borderRadius={'50px'}
                color={'white'}
                px={1}
                fontSize={'0.6rem'}
            >
                {qtyTotalItems}
            </Text>
        </Box>
    )
};