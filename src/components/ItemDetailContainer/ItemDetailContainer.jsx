import { useContext, useState } from "react";
import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
} from '@chakra-ui/react';
import { CartContext } from "../../context/CartContext";

export const ItemDetailContainer = ({ product }) => {
    const [showCount, setShowCount] = useState(false);
    const [count, setCount] = useState(0);

    const { addItems, removeItem } = useContext(CartContext);

    const handleShowCount = () => {
        setShowCount(!showCount);
    };

    const handleIncrement = () => {
        if (count <= product.stock ) {
            const newCount = count + 1;
            setCount(newCount);
            addItems(product, newCount);
        }
    };

    const handleDecrement = () => {
        if (count > 0) {
            const newCount = count - 1;
            setCount(newCount);
            removeItem(product);
        }
    };

    if (!product) {
        return <p>Producto no encontrado.</p>;
    }

    return (
        <Container maxW={'7x1'}>
            <SimpleGrid
                columns={{base: 1, lg: 2}}
                spacing={{base: 6}}
                p={{base: 5}}
                mx={'auto'}
                my={'3rem'}
                border={'1px'}
                w={{base: '50%'}}
                borderRadius={'md'}
            >
                <Flex justifyContent={{base: 'center', lg: 'end'}} alignItems={{base:'center'}}>
                    <Image
                        rounded={'md'}
                        alt={'product image'}
                        src={product.image}
                        fit={'cover'}
                        w={{base: '90%'}}
                        h={{base: '90%'}}
                    ></Image>
                    
                </Flex>
                <Stack 
                    textAlign={{base: 'center', lg: 'start'}} 
                    spacing={{base: 2}} 
                    alignItems={{base: 'center', lg: 'start'}}
                >
                    <Box as={'header'}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{base: '2x1'}}
                        >
                            {product.name}
                        </Heading>
                        <Text
                            color={useColorModeValue('blue.500', 'orange.500')}
                            fontWeight={600}
                            fontSize={'1.3rem'}
                        >
                            {product.price}
                        </Text>
                    </Box>

                    <Stack
                        direction={'column'}
                        divider={
                            <StackDivider 
                                borderColor={useColorModeValue('white', 'gray.400')}
                            />
                        }
                    >
                        <VStack alignItems={{base: 'center', lg: 'start'}}>
                            <Text
                                color={useColorModeValue('gray.500', 'gray.400')}
                                fontSize={'1rem'}
                                fontWeight={'300'}
                                textTransform={'uppercase'}
                            >
                                {product.description}
                            </Text>
                        </VStack>
                    </Stack>

                    <Button
                        rounded={'md'}
                        w={'8rem'}
                        mt={6}
                        size={'sm'}
                        py={'7'}
                        bg={useColorModeValue('orange.600', 'gray.50')}
                        color={useColorModeValue('white', 'gray.900')}
                        textTransform={'uppercase'}
                        _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                        }}
                        onClick={handleShowCount}
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
                            <Button onClick={handleDecrement}> - </Button>
                            <Text fontSize={'1.6rem'}>{count}</Text>
                            <Button onClick={handleIncrement}>+</Button>
                        </Stack>
                    )}
                </Stack>
            </SimpleGrid>
        </Container>
    );
};