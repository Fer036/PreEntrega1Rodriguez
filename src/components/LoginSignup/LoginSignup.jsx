import React, { useEffect, useContext } from 'react';
import { auth, db } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { CartContext } from '../../context';
import { useNavigate } from 'react-router-dom';
import {
    Alert,
    AlertIcon,
    Box,
    Flex,
    Heading,
    Text,
    FormControl,
    FormLabel,
    Input,
    Button,
    Link,
    useColorModeValue,
    FormErrorMessage
} from '@chakra-ui/react';

export const LoginSignup = () => {
    const [isSignup, setSignup] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [error, setError] = React.useState('');
    const [activeUser, setActiveUser] = React.useState(null);
    const navigate = useNavigate();

    const { clearCart } = useContext(CartContext);

    const shadowLoginPage = useColorModeValue('-6px -6px 19px #b3b3b3, 6px 6px 19px #ffffff', '-5px -5px 10px #11151d, 5px 5px 10px #232b3b');
    const bgLoginPage = useColorModeValue('linear-gradient(315deg, #cacaca, #f0f0f0)', '#1A202C');
    const colorText = useColorModeValue('gray.500', 'white');


    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setActiveUser(user.email);
            } else {
                setActiveUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const validatePassword = (password) => {
        return password.length >= 6;
    };

    const handleSignup = async () => {
        if (!validatePassword(password)) {
            setError('La contraseña debe contener 6 o más caracteres');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await setDoc(doc(db, 'users', user.uid), {
                username: username,
                email: user.email
            });
            setError('');
            setActiveUser(user.email);
        } catch (error) {
            setError(`Ocurrió un error: ${error.message}`);
        };
    };

    const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setError('');
            setActiveUser(userCredential.user.email);
        } catch (error) {
            setError('El nombre de usuario o la contraseña es incorrecta.');
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setActiveUser(null);
            navigate('/');
            clearCart();
        } catch (error) {
            setError(`Error al cerrar sesión: ${error.message}`);
        }
    };


    return (
        <Box
            w={'90%'}
            mx={'auto'}
            my={'2rem'}
            p={{ base: '1rem', sm: '1rem', md: '2rem', lg: '4rem' }}
            bg={bgLoginPage}
            boxShadow={shadowLoginPage}
            borderRadius={'20px'}
        >
            {activeUser ? (
                <Alert
                    status='success'
                    mb={'1rem'}
                    bg={bgLoginPage}
                    justifyContent={'space-between'}
                    color={colorText}
                    boxShadow={shadowLoginPage}
                    fontSize={'clamp(0.2rem, 1vw + 0.3rem, 1rem)'}
                    flexWrap={{ base: 'wrap', sm: 'wrap', md: 'wrap', lg: 'wrap', xl: 'nowrap' }}
                >
                    <Flex
                        alignItems={'center'}
                        mr={'1rem'}
                    >
                        <AlertIcon />
                        Usuario activo: <br /> {activeUser} <br /> ¿Cerrar sesión?
                    </Flex>
                    <Button
                        my={{ base: '0.3rem', sm: '0.3rem', md: '0.3rem' }}
                        ml={4}
                        onClick={handleLogout}
                        bg={bgLoginPage}
                        boxShadow={shadowLoginPage}
                        color={colorText}
                        fontSize={'clamp(0.1rem, 2vw + 0.4rem, 1rem)'}
                    >
                        Cerrar sesión
                    </Button>
                </Alert>
            ) : (
                <>
                    <Heading
                        color={colorText}
                        mb={'2rem'}
                        textAlign={'center'}
                        fontSize={'clamp(0.2rem, 1vw + 1rem, 3rem)'}
                    >
                        {isSignup ? 'Registro' : 'Iniciar sesión'}
                    </Heading>
                    {error && <Text color='red.500'>{error}</Text>}

                    {isSignup && (
                        <FormControl id='username' isInvalid={!!error}>
                            <FormLabel
                                color={colorText}
                                fontSize={'clamp(0.1rem, 1vw + 0.2rem, 1rem)'}
                            >
                                Usuario:
                            </FormLabel>
                            <Input
                                type='text'
                                placeholder='Nombre de usuario'
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                bg={bgLoginPage}
                                color={colorText}
                                boxShadow={shadowLoginPage}
                                borderRadius={'20px'}
                            />
                            <FormErrorMessage>{error}</FormErrorMessage>
                        </FormControl>
                    )}

                    <FormControl id='email' isInvalid={!!error}>
                        <FormLabel color={colorText}>Email:</FormLabel>
                        <Input
                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            mb={'1rem'}
                            bg={bgLoginPage}
                            color={colorText}
                            boxShadow={shadowLoginPage}
                            borderRadius={'20px'}
                        />
                    </FormControl>

                    <FormControl id='password' isInvalid={!!error}>
                        <FormLabel color={colorText}>Contraseña:</FormLabel>
                        <Input
                            type='password'
                            placeholder='Contraseña'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            mb={'3rem'}
                            bg={bgLoginPage}
                            color={colorText}
                            boxShadow={shadowLoginPage}
                            borderRadius={'20px'}
                        />
                    </FormControl>

                    <Button
                        onClick={isSignup ? handleSignup : handleLogin}
                        mb={'1rem'}
                        bg={bgLoginPage}
                        color={colorText}
                        boxShadow={shadowLoginPage}
                        borderRadius={'20px'}
                    >
                        {isSignup ? 'Registrarse' : 'Ingresar'}
                    </Button>

                    <Text>
                        {isSignup ? 'Ingresar' : '¿No tenés cuenta? '}
                        <Link onClick={() => setSignup(!isSignup)}>
                            {isSignup ? ' Iniciar sesión ' : 'Registrarse'}
                        </Link>
                    </Text>
                </>
            )}
        </Box>
    );
};