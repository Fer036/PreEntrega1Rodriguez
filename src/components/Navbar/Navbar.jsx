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
} from '@chakra-ui/react';

import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';
import myLogo2 from '/src/assets/img/myLogo2.png';
import { CartWidget } from '../index';

const Links = ['Inicio', 'Productos', 'Contacto'];

const NavLink = ({ children }) => {
    return (
        <Box
            as="a"
            px={3}
            py={3}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            href={'#'}>
            {children}
        </Box>
    );
};

export const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                {/* Logo */}
                <Box>
                    <img width={'250px'} src={myLogo2} alt="logo" />
                </Box>

                {/* Secciones */}
                <Flex display={{ base: 'none', md: 'flex' }} flex={1} justifyContent={'center'}>
                    <HStack as={'nav'} spacing={4} alignItems={'center'}>
                        {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
                        ))}
                    </HStack>
                </Flex>

                {/* Icono cartwidget y botón modo oscuro y claro */}
                <Flex alignItems={'center'} ml={4} display={{ base: 'none', md: 'flex' }}>
                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                    <Box ml={4}>
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
                                    {Links.map((link) => (
                                        <NavLink key={link}>{link}</NavLink>
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
    );
};

export default Navbar;