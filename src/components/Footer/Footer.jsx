import React from "react";
import {
    Box,
    Flex,
    Text,
    IconButton,
    useColorModeValue,
    Stack
} from '@chakra-ui/react';

import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
    const shadowFooter = useColorModeValue('-6px -6px 19px #b3b3b3, 6px 6px 19px #ffffff', '-5px -5px 10px #11151d, 5px 5px 10px #232b3b');
    const bgFooter = useColorModeValue('linear-gradient(315deg, #cacaca, #f0f0f0)', '#1A202C');
    const colorText = useColorModeValue('gray.500', 'white');

    return (
        <Box
            m={'0.6rem'}
            p={'1rem'}
            alignItems={'center'}
            bg={bgFooter}
            boxShadow={shadowFooter}
            borderRadius={'20px'}
        >
            <Flex
                flexDir={'column'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Flex>
                    <Box as="a" target='_blank' href="https://github.com/Fer036">
                        <IconButton
                            aria-label='github'
                            variant='ghost'
                            size='md'
                            fontSize='lg'
                            icon={<FaGithub />}
                            _hover={{
                                bg: 'gray.500',
                                color: { colorText }
                            }}
                            isRound
                        />
                    </Box>
                    <Box as="a" target='_blank' href="https://www.instagram.com/mfer.rod/">
                        <IconButton
                            aria-label='instagram'
                            variant='ghost'
                            size='md'
                            fontSize='lg'
                            icon={<FaInstagram />}
                            _hover={{
                                bg: 'gray.500',
                                color: { colorText }
                            }}
                            isRound
                        />
                    </Box>
                    <Box as="a" target='_blank' href="https://www.linkedin.com/in/fernanda-rodriguez036/">
                        <IconButton
                            aria-label='linkedin'
                            variant='ghost'
                            size='md'
                            fontSize='lg'
                            icon={<FaLinkedin />}
                            _hover={{
                                bg: 'gray.500',
                                color: { colorText }
                            }}
                            isRound
                        />
                    </Box>
                </Flex>
                <Text
                    color={colorText}
                >
                    © 2024 Made by Maria Rodriguez. All rights reserved
                </Text>
            </Flex>
        </Box>
    );
};