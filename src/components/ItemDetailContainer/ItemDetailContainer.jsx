import { useContext, useState } from "react";
import {
    Stack,
    Text,
    Image,
    Flex,
    Button,
    Heading,
    useColorModeValue,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Box
} from '@chakra-ui/react';
import { CartContext } from "../../context/CartContext";

export const ItemDetailContainer = ({ product }) => {
    const [showCount, setShowCount] = useState(false);
    const [count, setCount] = useState(0);

    const { addItem, removeItem } = useContext(CartContext);

    const handleShowCount = () => {
        setShowCount(!showCount);
    };

    const handleIncrement = () => {
        if (count <= product.stock) {
            const newCount = count + 1;
            setCount(newCount);
            addItem(product, newCount);
        };
    };

    const handleDecrement = () => {
        if (count > 0) {
            const newCount = count - 1;
            setCount(newCount);
            removeItem(product);
        };
    };

    if (!product) {
        return (
            <Alert status='error'>
                <AlertIcon />
                <AlertTitle>¡Producto no encontrado!</AlertTitle>
                <AlertDescription>Ups... parece que ese producto no existe.</AlertDescription>
            </Alert>
        );
    };

    const bgItemDetail = useColorModeValue('linear-gradient(315deg, #cacaca, #f0f0f0)', '#1A202C');
    const shadowItemDetail = useColorModeValue('-6px -6px 19px #b3b3b3, 6px 6px 19px #ffffff', '-5px -5px 10px #11151d, 5px 5px 10px #232b3b');
    const textColor = useColorModeValue('blue.700', 'orange.700');

    return (
        <Flex
            w={'70%'}
            py={'3rem'}
            px={'1rem'}
            mx={'auto'}
            my={'2rem'}
            flexWrap={'wrap'}
            justifyContent={'space-evenly'}
            alignItems={'center'}
            boxShadow={shadowItemDetail}
            bg={bgItemDetail}
            borderRadius={'20px'}
        >
            <Flex>
                <Image
                    w={{ base: '12rem', sm: '20rem', md: '25rem' }}
                    boxShadow={shadowItemDetail}
                    borderRadius={'20px'}
                    alt={'product image'}
                    src={product.image}
                    fit={'fill'}
                />
            </Flex>
            <Flex
                m={'1rem'}
                flexWrap={'wrap'}
            >
                <Box mx={'2rem'}>
                    <Stack>
                        <Heading color={'gray.500'}>
                            {product.name}
                        </Heading>
                        <Text
                            color={textColor}
                            fontWeight={'900'}
                            fontSize={'2rem'}
                        >
                            ${product.price}
                        </Text>
                    </Stack>
                    <Stack>
                        <Text>
                            {product.description}
                        </Text>
                    </Stack>
                </Box>
                <Box
                    mx={'2rem'}
                    display={'flex'}
                    flexDir={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Button
                        mx={'auto'}
                        onClick={handleShowCount}
                        color={textColor}
                        bg={bgItemDetail}
                        boxShadow={shadowItemDetail}
                    >
                        Agregar
                    </Button>
                    {showCount && (
                        <Stack
                            direction={'row'}
                            spacing={4}
                            align={'center'}
                            mt={4}
                        >
                            <Button
                                onClick={handleDecrement}
                                bg={bgItemDetail}
                                shadow={shadowItemDetail}
                            >
                                -
                            </Button>
                            <Text
                                my={'auto'}
                                fontSize={'1.2rem'}
                            >
                                {count}
                            </Text>

                            <Button
                                onClick={handleIncrement}
                                bg={bgItemDetail}
                                boxShadow={shadowItemDetail}
                            >
                                +
                            </Button>
                        </Stack>
                    )}
                </Box>
            </Flex>
        </Flex>
    );
};