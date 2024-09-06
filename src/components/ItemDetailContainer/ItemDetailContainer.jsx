import { useState } from "react";
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

export const ItemDetailContainer = ({ product }) => {
    const [showCount, setShowCount] = useState(false);
    const [count, setCount] = useState(0);

    const handleShowCount = () => {
        setShowCount(!showCount);
    };

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <Container maxW={'7x1'}>
            <SimpleGrid
                columns={{base: 1, lg: 2}}
                spacing={{base: 6}}
                py={{base: 10}}
                mx={'auto'}
                my={'3rem'}
                border={'1px'}
                w={{base: '50%'}}
                borderRadius={'md'}
            >
                <Flex justifyContent={{base: 'center', lg: 'end'}}>
                    <Image
                        rounded={'md'}
                        alt={'product image'}
                        src={product.image}
                        fit={'cover'}
                        w={{base: '80%'}}
                        h={{base: '100%'}}
                    / >
                </Flex>
                <Stack textAlign={{base: 'center', lg: 'start'}} spacing={{base: 2}} alignItems={{base: 'center', lg: 'start'}}>
                    <Box as={'header'}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{base: '2x1', sm: '4x1', lg: '5x1'}}
                        >
                            {product.name}
                        </Heading>
                        <Text
                            color={useColorModeValue('blue.500', 'orange.500')}
                            fontWeight={600}
                            fontSize={'2rem'}
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
                                fontSize={'1.4rem'}
                                fontWeight={'300'}
                                textTransform={'uppercase'}
                            >
                                {product.description}
                            </Text>
                        </VStack>
                    </Stack>

                    <Button
                        rounded={'md'}
                        w={'10rem'}
                        mt={6}
                        size={'lg'}
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