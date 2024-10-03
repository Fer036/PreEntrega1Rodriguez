import React from 'react';
import {
    Flex,
    useClipboard,
    useColorModeValue,
    Box,
    VStack,
    Heading,
    Stack,
    Tooltip,
    IconButton,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Button,
    Textarea
} from '@chakra-ui/react';
import { BsGithub, BsInstagram, BsLinkedin, BsPerson } from 'react-icons/bs';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';

export const Contact = () => {
    const { hasCopied, onCopy } = useClipboard('rodriguezfer2811@gmail.com');

    const shadowContact = useColorModeValue('-6px -6px 19px #b3b3b3, 6px 6px 19px #ffffff', '-5px -5px 10px #11151d, 5px 5px 10px #232b3b');
    const bgContact = useColorModeValue('linear-gradient(315deg, #cacaca, #f0f0f0)', '#1A202C');
    const colorText = useColorModeValue('gray.500', 'white');

    return (
        <Flex
        id='contact'
        w={'90%'}
        mx={'auto'}
        my={'3rem'}
        bg={bgContact}
        boxShadow={shadowContact}
        borderRadius={'20px'}
        justifyContent={'center'}
        alignItems={'center'}
        >
            <Box
                borderRadius={'lg'}
                m={{ nase: 5, md: 16, lg: 10 }}
                p={{ base: 5, lg: 5 }}
            >
                <Box>
                    <VStack
                        spacing={{ base: 4, md: 8, lg: 15 }}
                    >
                        <Heading color={colorText}>
                            ¡Contactanos!
                        </Heading>
                        <Stack
                            spacing={{ base: 4, md: 8, lg: 20 }}
                            direction={{ base: 'column', md: 'row' }}
                        >
                            <Stack
                                align={'center'}
                                justify={'space-around'}
                                direction={{ base: 'row', md: 'column' }}
                            >
                                <Tooltip
                                    label={hasCopied ? 'EmailCopied' : 'Copy Email'}
                                    closeOnClick={false}
                                    hasArrow
                                >
                                    <IconButton
                                        aria-label='email'
                                        variant={'ghost'}
                                        bg={bgContact}
                                        boxShadow={shadowContact}
                                        size={'lg'}
                                        fontSize={'3x1'}
                                        icon={<MdEmail />}
                                        _hover={{
                                            bg: 'blue.500',
                                            color: { colorText }
                                        }}
                                        onClick={onCopy}
                                        isRound
                                    />
                                </Tooltip>
                                <Box
                                    as='a'
                                    href='https://github.com/Fer036'
                                >
                                    <IconButton
                                        aria-label='github'
                                        variant={'ghost'}
                                        bg={bgContact}
                                        boxShadow={shadowContact}
                                        size={'lg'}
                                        fontSize={'lg'}
                                        icon={<BsGithub />}
                                        _hover={{
                                            bg: 'blue.500',
                                            color: { colorText }
                                        }}
                                        isRound
                                    />
                                </Box>
                                <Box
                                    as='a'
                                    href='https://www.linkedin.com/in/fernanda-rodriguez036/'
                                >
                                    <IconButton
                                        aria-label='linkedin'
                                        variant={'ghost'}
                                        bg={bgContact}
                                        boxShadow={shadowContact}
                                        size={'lg'}
                                        icon={<BsLinkedin />}
                                        _hover={{
                                            bg: 'blue.500',
                                            color: { colorText }
                                        }}
                                        isRound
                                    />
                                </Box>
                                <Box
                                    as='a'
                                    href='https://www.instagram.com/mfer.rod/'
                                >
                                    <IconButton
                                        aria-label='instagram'
                                        variant={'ghost'}
                                        bg={bgContact}
                                        boxShadow={shadowContact}
                                        size={'lg'}
                                        icon={<BsInstagram />}
                                        _hover={{
                                            bg: 'blue.500',
                                            color: { colorText }
                                        }}
                                        isRound
                                    />
                                </Box>
                            </Stack>
                            <Box
                                w={'90%'}
                                bg={bgContact}
                                borderRadius={'20px'}
                                p={8}
                                color={colorText}
                                boxShadow={shadowContact}
                            >
                                <VStack 
                                    spacing={5}
                                >
                                    <FormControl isRequired>
                                        <FormLabel>Nombre:</FormLabel>
                                        <InputGroup>
                                            <InputLeftElement>
                                                <BsPerson />
                                            </InputLeftElement>
                                            <Input
                                                type='text'
                                                name='name'
                                                placeholder='Tu nombre'
                                            />
                                        </InputGroup>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Email:</FormLabel>
                                        <InputGroup>
                                            <InputLeftElement>
                                                <MdOutlineEmail />
                                            </InputLeftElement>
                                            <Input
                                                type='email'
                                                name='email'
                                                placeholder='Tu email'
                                            />
                                        </InputGroup>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Mensaje:</FormLabel>
                                        <Textarea
                                            name='message'
                                            placeholder='Escribí tu consulta'
                                            rows={6}
                                            resize='none'
                                        />
                                    </FormControl>
                                    <Button
                                        bg={bgContact}
                                        color={colorText}
                                        boxShadow={shadowContact}
                                        borderRadius={'20px'}
                                        _hover={{
                                            bg: 'orange.700'
                                        }}
                                        width={'full'}
                                    >
                                        Enviar
                                    </Button>
                                </VStack>
                            </Box>
                        </Stack>
                    </VStack>
                </Box>
            </Box>
        </Flex>
    );
};