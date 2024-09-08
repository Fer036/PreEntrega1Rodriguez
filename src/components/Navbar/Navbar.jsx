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

export const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    
    const menuOptions = [
        { id: 1, label: 'Inicio', path: '/' },
        { id: 2, label: 'Productos', path: '/category' },
        { id: 3, label: 'Contacto', path: '/contact' },
    ];

    const productOptions = [
        { id: 4, label: 'Coleccionables', path: '/category/:categoryId' },
        { id: 5, label: 'Periféricos', path: '/category/:categoryId' },
        { id: 6, label: 'Sillas Gamer', path: '/category/:categoryId' },
        { id: 7, label: 'PC armadas', path: '/category/:categoryId' },
    ];

    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const boxShadowStyle = {
        boxShadow: '0px 8px 8px -8px rgba(71,70,70,1)',
        WebkitBoxShadow: '0px 8px 8px -8px rgba(71,70,70,1)',
        MozBoxShadow: '0px 8px 8px -8px rgba(71,70,70,1)'
    }

    return (
        <>
            <Box bg={useColorModeValue('blue.800', 'gray.900')} px={4} style={boxShadowStyle}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    {/* Logo */}
                    <Box>
                        <img width={'250px'} src={myLogo2} alt="logo" />
                    </Box>

                    {/* Secciones */}
                    <Flex display={{ base: 'none', md: 'flex' }} flex={1} justifyContent={'center'} color={'white'}>
                        <HStack as={'nav'} spacing={4} alignItems={'center'}>
                            {menuOptions.map((option) => (
                                option.label === 'Productos' ? (
                                    <Menu key={option.id} isLazy>
                                        <MenuButton
                                            as={Button}
                                            variant="link"
                                            color="white"
                                        >
                                            {option.label}
                                        </MenuButton>
                                        <MenuList>
                                            {productOptions.map((prodOption) => (
                                                <MenuItem key={prodOption.id} as={Link} to={prodOption.path}>
                                                    {prodOption.label}
                                                </MenuItem>
                                            ))}
                                        </MenuList>
                                    </Menu>
                                ) : (
                                    <Link key={option.id} to={option.path}>
                                        <Button variant="link" color="white">{option.label}</Button>
                                    </Link>
                                )
                            ))}
                        </HStack>
                    </Flex>

                    {/* Icono cartwidget y botón modo oscuro y claro */}
                    <Flex alignItems={'center'} ml={4} display={{ base: 'none', md: 'flex' }}>
                        <Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>
                        <Box ml={4} color={'white'}>
                            <CartWidget />
                        </Box>
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
                                <DrawerHeader>Menú</DrawerHeader>

                                <DrawerBody>
                                    <Stack direction={'column'} spacing={4}>
                                        {menuOptions.map((option) => (
                                            option.label === 'Productos' ? (
                                                <Menu key={option.id} isLazy>
                                                    <MenuButton as={Button} variant="link" width="full">
                                                        {option.label}
                                                    </MenuButton>
                                                    <MenuList>
                                                        {productOptions.map((prodOption) => (
                                                            <MenuItem key={prodOption.id} as={Link} to={prodOption.path}>
                                                                {prodOption.label}
                                                            </MenuItem>
                                                        ))}
                                                    </MenuList>
                                                </Menu>
                                            ) : (
                                                <Link key={option.id} to={option.path}>
                                                    <Button width="full" variant="link">{option.label}</Button>
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
