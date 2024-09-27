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
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

export const ItemListContainer = ({ products }) => {
    return (
        <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'}>
            {products.map((product) => (
                <Card
                    key={product.id}
                    w={'15rem'}
                    h={'25rem'}
                    margin={'1rem'}
                    borderRadius={'20px'}
                    bg={useColorModeValue('linear-gradient(315deg, #cacaca, #f0f0f0)', '#1A202C')}
                    boxShadow={useColorModeValue('-6px -6px 19px #b3b3b3, 6px 6px 19px #ffffff', '-5px -5px 10px #11151d, 5px 5px 10px #232b3b')}
                    _hover={{transform: 'translate(-5px, -5px)'}}
                >
                    <CardBody h={'20rem'}>
                        <Image
                            src={product.image}
                            alt={product.name}
                            borderRadius={'lg'}
                            w={'10rem'}
                            h={'10rem'}
                            objectFit={'cover'}
                            m={'auto'}
                        />

                        <Stack mt={2} spacing={1}>
                            <Heading size={'sm'}>
                                {product.name}
                            </Heading>
                            <Text h={'3rem'} fontSize={'0.8rem'}>
                                {product.description}
                            </Text>
                            <Text color={useColorModeValue('black', 'white')} fontSize={'1.4rem'} mx={'auto'}>
                                ${product.price}
                            </Text>
                        </Stack>
                    </CardBody>
                    <CardFooter>
                        <ButtonGroup spacing={'2'} m={'auto'}>
                            <Button
                                variant={'solid'}
                                borderRadius={'20px'}
                                bg={useColorModeValue('linear-gradient(315deg, #cacaca, #f0f0f0)', '#1A202C')}
                                boxShadow={useColorModeValue('-6px -6px 19px #b3b3b3, 6px 6px 19px #ffffff', '-5px -5px 10px #11151d, 5px 5px 10px #232b3b')} 
                                w={'7rem'} h={'2rem'}
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
        </Box>
    );
};