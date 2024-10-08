import React from "react";
import {
    Text,
    VStack,
    Heading,
    useColorModeValue,
    Box
} from '@chakra-ui/react';

export const HomeBanner = () => {
    const headerColor = useColorModeValue('gray.600', 'white');
    const lineHeader = useColorModeValue('orange.600', 'blue.700')
    const textColor = useColorModeValue('blue.700', 'orange.700');
    const shadowBanner = useColorModeValue('-6px -6px 19px #b3b3b3, 6px 6px 19px #ffffff', '-5px -5px 10px #11151d, 5px 5px 10px #232b3b');
    const bgBanner = useColorModeValue('linear-gradient(315deg, #cacaca, #f0f0f0)', '#1A202C');

    return (
        <Box
            w={'90%'}
            h={{ base: '13vh', sm: '17vh', md: '25vh' }}
            mx={'auto'}
            my={'2rem'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            boxShadow={shadowBanner}
            borderRadius={'20px'}
            bg={bgBanner}
        >
            <VStack>
                <Heading
                    lineHeight={1.1}
                >
                    <Text
                        as={'span'}
                        fontSize={'clamp(2rem, 5.5vw, 9rem)'}
                        color={headerColor}
                        position={'relative'}
                        zIndex={0}
                        whiteSpace={'normal'}
                        wordBreak={'break-word'}
                        overflow={'hidden'}
                        textOverflow={'ellipsis'}
                        fontWeight={900}
                        _after={{
                            content: "''",
                            width: 'full',
                            height: '30%',
                            position: 'absolute',
                            bottom: 1,
                            left: 0,
                            bg: lineHeader,
                            zIndex: -1,
                        }}
                    >
                        GeekStore.
                    </Text>
                    <Text
                        my={'1rem'}
                        color={textColor}
                        fontSize={'clamp(1rem, 2vw, 4rem)'}
                        fontWeight={900}
                    >
                        Encontrá todo para tu setup.
                    </Text>
                </Heading>
            </VStack>
        </Box>
    );
};