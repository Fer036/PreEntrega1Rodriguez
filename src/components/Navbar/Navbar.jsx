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
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';
import myLogo2 from '/src/assets/img/myLogo2.png';
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

    const boxShadowStyle = {
        boxShadow: '0px 8px 8px -8px rgba(71,70,70,1)',
        WebkitBoxShadow: '0px 8px 8px -8px rgba(71,70,70,1)',
        MozBoxShadow: '0px 8px 8px -8px rgba(71,70,70,1)'
    };

    const colorText = useColorModeValue('black', 'white');

    return (
        <Box bg={useColorModeValue('gray.700', 'gray.900')} px={4} style={boxShadowStyle}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                {/* Logo de la empresa */}
                <Box>
                    <Link to={`/`}>
                        <img width={'250px'} src={myLogo2} alt="logo" />
                    </Link>
                </Box>

                {/* Secciones */}
                <Flex display={{ base: 'none', md: 'flex' }} flex={1} justifyContent={'center'} color={'white'}>
                    <HStack as={'nav'} spacing={9} alignItems={'center'}>
                        {menuOptions.map((option) => (
                            option.label === 'Productos' ? (
                                /* Menú desplegable para las categorías */
                                <Menu key={option.id} isLazy>
                                    <MenuButton
                                        justifyContent={'center'}
                                        as={Button}
                                        variant="link"
                                        color={'white'}
                                        style={{ textTransform: 'uppercase' }}
                                        _hover={{ color: 'orange.400' }}
                                    >
                                        {option.label}
                                    </MenuButton>
                                    <MenuList>
                                        {loading ? (
                                            <MenuItem>Cargando...</MenuItem>
                                        ) : (
                                            categories.map((category) => (
                                                <MenuItem key={category.id} _hover={{ color: 'orange.500' }} color={colorText} style={{ textTransform: 'uppercase' }}>
                                                    <Link to={`/category/${category.slug}`}>{category.name}</Link>
                                                </MenuItem>
                                            ))
                                        )}
                                    </MenuList>
                                </Menu>
                            ) : (
                                /* Botón Inicio y Contacto */
                                <Link key={option.id} to={option.path}>
                                    <Button
                                        variant="link"
                                        color={'white'}
                                        m={'auto'}
                                        _hover={{ color: 'orange.400' }}
                                        style={{ textTransform: 'uppercase' }}
                                    >
                                        {option.label}
                                    </Button>
                                </Link>
                            )
                        ))}
                    </HStack>
                </Flex>
                {/* Botón modo oscuro/claro */}
                <Flex alignItems={'center'} ml={9} display={{ base: 'none', md: 'flex' }}>
                    <Button
                        onClick={toggleColorMode}
                        variant={'outline'}
                        colorScheme='blue'
                        borderRadius={'20px'}
                        width={'40px'}
                    >
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                    <Box mx={6} color={'white'}>
                        <CartWidget />
                    </Box>
                </Flex>
                {/* Menú hamburguesa */}
                <Flex alignItems={'center'} display={{ base: 'flex', md: 'none' }}>
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
                        placement="left"
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
                                                    color={colorText}
                                                    _hover={{ color: 'orange.400' }}
                                                    style={{ textTransform: 'uppercase' }}
                                                >
                                                    {option.label}
                                                </MenuButton>
                                                <MenuList>
                                                    {
                                                        categories.map((category) => (
                                                            <MenuItem
                                                                color={colorText}
                                                                key={category.id}
                                                                _hover={{ color: 'orange.500' }}
                                                                style={{ textTransform: 'uppercase' }}
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
                                                    color={colorText}
                                                    _hover={{ color: 'orange.400' }}
                                                    style={{ textTransform: 'uppercase' }}
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
                                    colorScheme='blue'
                                    borderRadius={'20px'}
                                    width={'40px'}
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