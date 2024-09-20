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
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

export const ItemListContainer = ({ products }) => {
    return (
        <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'}>
            {products.map((product) => (
                <Card key={product.id} w={'15rem'} h={'25rem'} margin={'1rem'}>
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
                        
                        <Stack mt={3} spacing={1}>
                            <Heading size={'sm'}>
                                {product.name}
                            </Heading>
                            <Text h={'3rem'} fontSize={'0.8rem'}>
                                {product.description}
                            </Text>
                            <Text color={'white'} fontSize={'1.4rem'}>
                                {product.price}
                            </Text>
                        </Stack>
                    </CardBody>
                    <CardFooter>
                        <ButtonGroup spacing={'2'} m={'auto'}>
                            <Button
                                variant={'solid'}
                                bg={'orange.400'}
                                w={'5rem'} h={'2rem'}
                                rounded={'full'}
                                boxShadow={'1px 2px 25px -6px rgb(255 255 255 / 48%), 0 10px 10px -5px rgb(0 0 0 / 43%)'}
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