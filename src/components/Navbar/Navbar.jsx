import React from 'react';

import {
    Box,
    Flex,
    Button,
    useColorModeValue,
    Stack,
    useColorMode,
    HStack,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react';

import myLogo2 from '/src/assets/img/myLogo2.png';

import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';
import { CartWidget } from '../index';
import { Link } from 'react-router-dom';
import { useItemsCollection } from '../../hooks';

export const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { items: categories, loading } = useItemsCollection('categories');
    const { isOpen, onOpen, onClose } = useDisclosure();

    const menuOptions = [
        { id: 1, label: 'Inicio', path: '/' },
        { id: 2, label: 'Productos', path: `/category` },
        { id: 3, label: 'Contacto', path: '/contact' },
    ];

    const boxShadow = useColorModeValue('-6px -6px 19px #b3b3b3, 6px 6px 19px #ffffff', '-5px -5px 10px #11151d, 5px 5px 10px #232b3b');
    const colorText = useColorModeValue('gray.500', 'white');
    const navBg = useColorModeValue('gray.800', '#1A202C');

    return (
        <Box
            zIndex={0}
            h={'4.5rem'}
            m={'0.4rem'}
            px={5}
            justifyContent={'center'}
            boxShadow={boxShadow}
            bg={navBg}
            borderRadius={'20px'}
            alignItems={'center'}
        >
            <Flex
                h={16}
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <Box>
                    <Link to={`/`}>
                        <img width={'250px'} src={myLogo2} alt="logo" />
                    </Link>
                </Box>

                <Flex
                    display={{ base: 'none', md: 'flex' }}
                    flex={1}
                    justifyContent={'center'}
                >
                    <HStack
                        as={'nav'}
                        spacing={9}
                        alignItems={'center'}
                    >
                        {menuOptions.map((option) => (
                            option.label === 'Productos' ? (
                                <Menu key={option.id} isLazy>
                                    <MenuButton
                                        justifyContent={'center'}
                                        py={'0.6rem'}
                                        px={'1rem'}
                                        as={Button}
                                        variant="link"
                                        color={colorText}
                                        style={{ textTransform: 'uppercase' }}
                                        _hover={{ boxShadow: '-5px -5px 10px #11151d, 5px 5px 10px #232b3b' }}
                                    >
                                        {option.label}
                                    </MenuButton>
                                    <MenuList>
                                        {loading ? (
                                            <MenuItem>...</MenuItem>
                                        ) : (
                                            categories.map((category) => (
                                                <MenuItem
                                                    key={category.id}
                                                    _hover={{ boxShadow: boxShadow }}
                                                    color={colorText}
                                                    style={{ textTransform: 'uppercase' }}
                                                >
                                                    <Link to={`/category/${category.slug}`}>{category.name}</Link>
                                                </MenuItem>
                                            ))
                                        )}
                                    </MenuList>
                                </Menu>
                            ) : (
                                <Link
                                    key={option.id}
                                    to={option.path}
                                >
                                    <Button
                                        variant="link"
                                        m={'auto'}
                                        _hover={{ boxShadow: '-5px -5px 10px #11151d, 5px 5px 10px #232b3b' }}
                                        style={{ textTransform: 'uppercase' }}
                                        px={'1rem'}
                                        py={'0.6rem'}
                                    >
                                        {option.label}
                                    </Button>
                                </Link>
                            )
                        ))}
                    </HStack>
                </Flex>
                <Flex
                    ml={9}
                    display={{ base: 'none', md: 'flex' }}
                    alignItems={'center'}
                >
                    <Button
                        onClick={toggleColorMode}
                        variant={'outline'}
                        colorScheme={'blue'}
                        borderRadius={'20px'}
                        width={'40px'}
                    >
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                    <Box mx={6} color={'white'}>
                        <CartWidget />
                    </Box>
                </Flex>
                <Flex
                    alignItems={'center'}
                    display={{ base: 'flex', md: 'none' }}
                >
                    <IconButton
                        size={'md'}
                        icon={<HamburgerIcon />}
                        aria-label={'Open Menu'}
                        onClick={onOpen}
                    />
                    <Box ml={4}>
                        <CartWidget />
                    </Box>
                    <Drawer
                        isOpen={isOpen}
                        placement={'left'}
                        onClose={onClose}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>GeekStore</DrawerHeader>
                            <DrawerBody>
                                <Stack direction={'column'} spacing={4}>
                                    {menuOptions.map((option) => (
                                        option.label === 'Productos' ? (
                                            <Menu key={option.id} isLazy>
                                                <MenuButton
                                                    as={Button}
                                                    variant="link"
                                                    width="full"
                                                    style={{ textTransform: 'uppercase' }}
                                                    color={colorText}
                                                    py={'0.6rem'}
                                                    px={'1rem'}
                                                    _hover={{ boxShadow: boxShadow }}
                                                >
                                                    {option.label}
                                                </MenuButton>
                                                <MenuList>
                                                    {
                                                        categories.map((category) => (
                                                            <MenuItem
                                                                key={category.id}
                                                                color={colorText}
                                                                py={'0.6rem'}
                                                                px={'1rem'}
                                                                style={{ textTransform: 'uppercase' }}
                                                                _hover={{ boxShadow: boxShadow }}
                                                            >
                                                                <Link to={`/category/${category.slug}`}>{category.name}</Link>
                                                            </MenuItem>
                                                        ))
                                                    }
                                                </MenuList>
                                            </Menu>
                                        ) : (
                                            <Link key={option.id} to={option.path}>
                                                <Button
                                                    width="full"
                                                    variant="link"
                                                    style={{ textTransform: 'uppercase' }}
                                                    color={colorText}
                                                    py={'0.6rem'}
                                                    px={'1rem'}
                                                    _hover={{ boxShadow: boxShadow }}
                                                >
                                                    {option.label}
                                                </Button>
                                            </Link>
                                        )
                                    ))}
                                </Stack>
                            </DrawerBody>
                            <DrawerFooter justifyContent={'center'}>
                                <Button
                                    onClick={toggleColorMode}
                                    variant={'outline'}
                                    width={'40px'}
                                    borderRadius={'20px'}
                                    colorScheme='blue'
                                >
                                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                                </Button>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </Flex>
            </Flex>
        </Box>
    );
};