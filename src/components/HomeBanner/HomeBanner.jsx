import React from "react";
import {
    Flex,
    Text,
    VStack,
    Heading,
    useColorModeValue
} from '@chakra-ui/react';

export const HomeBanner = () => {
    const bgColor = 'rgba(255, 255, 255, 0.1)';
    const backdropFilter = 'blur(15px)';
    const borderStyle = '1px solid rgba(255, 255, 255, 0.2)';
    const textColor = useColorModeValue('white', 'white');

    return (
        <Flex
            mx={'auto'}
            my={'4rem'}
            w={'50%'}
            h={{ base: '15vh', sm: '23vh', md: '27vh' }}
            borderRadius={'20px'}
            bg={bgColor}
            backdropFilter={backdropFilter}
            border={borderStyle}
            boxShadow={'0 4px 30px rgba(0, 0, 0, 0.1)'}
            alignItems="center"
            justifyContent={'center'}
            p={5}
            backgroundImage={`url('https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}
            backgroundSize="cover"
            backgroundPosition="center"
        >
            <VStack
                alignItems="center"
                spacing={2}
                textAlign="center"
            >
                {/* Título */}
                <Heading
                    lineHeight={1.1}
                    fontSize={{ base: '1rem', sm: '2rem', lg: '4rem', xl: '5rem' }}
                    color={textColor}
                >
                    <Text
                        as={'span'}
                        position={'relative'}
                        zIndex={1}
                        whiteSpace="normal"
                        wordBreak="break-word"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        fontWeight={900}
                        _after={{
                            content: "''",
                            width: 'full',
                            height: '30%',
                            position: 'absolute',
                            bottom: 1,
                            left: 0,
                            bg: 'blue.700',
                            zIndex: -1,
                        }}
                    >
                        GeekStore
                    </Text>
                </Heading>
            </VStack>
        </Flex>
    );
};
