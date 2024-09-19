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

import { createProductsFirestore } from '../../helpers'
import { CartWidget } from '../index';
import { Link } from 'react-router-dom';
/* import { useCategory } from '../../hooks'; */

export const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
/*     const { categories, loading } = useCategory();
 */    const { isOpen, onOpen, onClose } = useDisclosure();

    const menuOptions = [
        { id: 1, label: 'Inicio', path: '/' },
        { id: 2, label: 'Productos', path: '/products' },
        { id: 3, label: 'Contacto', path: '/contact' },
    ];

    const boxShadowStyle = {
        boxShadow: '0px 8px 8px -8px rgba(71,70,70,1)',
        WebkitBoxShadow: '0px 8px 8px -8px rgba(71,70,70,1)',
        MozBoxShadow: '0px 8px 8px -8px rgba(71,70,70,1)'
    }

    return (
        <>
            <Box bg={useColorModeValue('blue.800', 'gray.900')} px={4} style={{ boxShadowStyle }} justifyContent={'center'}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    {/* Logo */}
                    <Box>
                        <img width={'250px'} src={myLogo2} alt="logo" />
                    </Box>

                    {/* Secciones */}
                    <Flex display={{ base: 'none', md: 'flex' }} flex={1} justifyContent={'center'} color={'white'}>
                        <HStack as={'nav'} spacing={7} alignItems={'center'}>
                            {menuOptions.map((option) => (
                                option.label === 'Productos' ? (
                                    <Menu key={option.id} isLazy>
                                        <MenuButton
                                            as={Button}
                                            variant="link"
                                            color="white"
                                            style={{ textTransform: 'uppercase' }}
                                            _hover={{ color: 'orange.400' }}
                                        >
                                            {option.label}
                                        </MenuButton>
                                        {/*                                         <MenuList>
                                            {loading ? (
                                                <MenuItem>Cargando...</MenuItem>
                                            ) : (
                                                categories.map((category) => (
                                                    <MenuItem key={category} _hover={{ color: 'orange.500' }} style={{ textTransform: 'uppercase' }}>
                                                        <Link to={`/category/${category}`}>{category}</Link>
                                                    </MenuItem>
                                                ))
                                            )}
                                        </MenuList> */}
                                    </Menu>
                                ) : (
                                    <Link key={option.id} to={option.path}>
                                        <Button
                                            variant="link"
                                            color="white"
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

                    {/* Icono cartwidget y botón modo oscuro y claro */}
                    <Flex alignItems={'center'} ml={3} display={{ base: 'none', md: 'flex' }}>
                        <Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>
                        <Box mx={4} color={'white'}>
                            <CartWidget />
                        </Box>
                        <Button mx={2} onClick={() => createProductsFirestore('products')}> Crear </Button>
                    </Flex>

                    {/* Menú hamburguesa para pantalla sm */}
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
                                                        _hover={{ color: 'orange.400' }}
                                                        style={{ textTransform: 'uppercase' }}
                                                    >
                                                        {option.label}
                                                    </MenuButton>
                                                    {/*                                                     <MenuList>
                                                        {loading ? (
                                                            <MenuItem>Cargando...</MenuItem>
                                                        ) : (
                                                            categories.map((category) => (
                                                                <MenuItem
                                                                    key={category}
                                                                    _hover={{ color: 'orange.500' }}
                                                                    style={{ textTransform: 'uppercase' }}
                                                                >
                                                                    <Link to={`/category/${category}`}>{category}</Link>
                                                                </MenuItem>
                                                            ))
                                                        )}
                                                    </MenuList> */}
                                                </Menu>
                                            ) : (
                                                <Link key={option.id} to={option.path}>
                                                    <Button
                                                        width="full"
                                                        variant="link"
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
                                <DrawerFooter>
                                    <Button onClick={toggleColorMode} width='full'>
                                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                                    </Button>
                                </DrawerFooter>
                            </DrawerContent>
                        </Drawer>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
};
