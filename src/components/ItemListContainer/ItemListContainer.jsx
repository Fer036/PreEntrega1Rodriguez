import React from 'react';

import {
    Box,
    Card,
    CardBody,
    Image,
    Heading,
    Stack,
    Text,
    CardFooter,
    ButtonGroup,
    Button,
    useColorModeValue,
    Flex,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

export const ItemListContainer = ({ products }) => {
    const shadowItem = useColorModeValue('-6px -6px 19px #b3b3b3, 6px 6px 19px #ffffff', '-5px -5px 10px #11151d, 5px 5px 10px #232b3b');
    const bgItemList = useColorModeValue('linear-gradient(315deg, #cacaca, #f0f0f0)', '#1A202C');
    const colorText = useColorModeValue('blue.700', 'orange.700')

    return (
        <Flex
            w={'90%'}
            mx={'auto'}
            my={'2rem'}
            justifyContent={'center'}
            flexDir={'column'}
            boxShadow={shadowItem}
            borderRadius={'20px'}
            bg={bgItemList}
        >
            <Flex>
                <Heading
                    w={'100%'}
                    mx={'1rem'}
                    mt={'1rem'}
                    p={'1rem'}
                    textAlign={'center'}
                    color={'gray.600'}
                    borderRadius={'20px'}
                    boxShadow={shadowItem}
                    bg={bgItemList}
                >
                    Productos.
                </Heading>
            </Flex>

            <Flex
                mx={'1rem'}
                my={'0.6rem'}
                display={'flex'}
                flexWrap={'wrap'}
                justifyContent={'center'}
                boxShadow={shadowItem}
                borderRadius={'20px'}
            >

                {products.map((product) => (
                    <Card
                        key={product.id}
                        w={'15rem'}
                        h={'25rem'}
                        margin={'1rem'}
                        bg={bgItemList}
                        borderRadius={'20px'}
                        boxShadow={shadowItem}
                        _hover={{ transform: 'translate(-5px, -5px)' }}
                    >
                        <CardBody h={'20rem'}>
                            <Image
                                src={product.image}
                                alt={product.name}
                                m={'auto'}
                                w={'10rem'}
                                h={'10rem'}
                                borderRadius={'lg'}
                                boxShadow={shadowItem}
                                objectFit={'cover'}
                            />

                            <Stack mt={2} spacing={1}>
                                <Heading size={'sm'}>
                                    {product.name}
                                </Heading>
                                <Text h={'3rem'} fontSize={'0.8rem'}>
                                    {product.description}
                                </Text>
                                <Text 
                                    color={colorText}
                                    fontWeight={'900'}
                                    fontSize={'1.5rem'}
                                >
                                    ${product.price}
                                </Text>
                            </Stack>
                        </CardBody>
                        <CardFooter>
                            <ButtonGroup spacing={'2'} m={'auto'}>
                                <Button
                                    w={'7rem'} 
                                    h={'2rem'}
                                    bg={bgItemList}
                                    boxShadow={shadowItem}
                                    borderRadius={'20px'}
                                    variant={'solid'}
                                    _hover={{
                                        bg: 'orange.500',
                                    }}
                                    _focus={{
                                        bg: 'orange.700',
                                    }}
                                >
                                    <Link to={`/item/${product.id}`}>Detalle</Link>
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                ))}
            </Flex>
        </Flex>
    );
};