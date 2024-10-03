import React, { useContext, useState } from "react";
import {
    Flex,
    Button,
    useColorModeValue,
    Heading,
    Box,
    FormControl,
    FormLabel,
    Input,
    RadioGroup,
    Radio,
    HStack,
    Text,
    Alert,
    AlertTitle,
    AlertDescription,
    AlertIcon
} from "@chakra-ui/react";
import { CartContext } from '../context';
import { db, auth } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { BsCash, BsFillCreditCard2FrontFill } from "react-icons/bs";

export const Payment = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [orderSuccess, setOrderSuccess] = useState(false);
    const [orderId, setOrderId] = useState('');

    const { cartState } = useContext(CartContext);
    const total = cartState.reduce(
        (acc, item) => acc + item.price * item.qtyItem, 0
    );

    const shadowPayment = useColorModeValue('-6px -6px 19px #b3b3b3, 6px 6px 19px #ffffff', '-5px -5px 10px #11151d, 5px 5px 10px #232b3b');
    const bgPayment = useColorModeValue('linear-gradient(315deg, #cacaca, #f0f0f0)', '#1A202C');
    const colorText = useColorModeValue('gray.500', 'white');

    const handleCreateOrder = async () => {
        if (!name || !lastName || !email) {
            alert('Tenés que completar los campos obligatorios');
            return;
        };

        try {
            const user = auth.currentUser;
            if (!user) {
                alert('Primero ingresa o registrate para comprar');
                return;
            };

            const orderObj = {
                buyer: {
                    uid: user.uid,
                    name: name,
                    lastName: lastName,
                    email: email,
                },
                items: cartState.map((item) => ({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.qtyItem,
                })),
                total: total,
                date: new Date().toISOString()
            };

            const ordersCollection = collection(db, 'orders');
            const docRef = await addDoc(ordersCollection, orderObj);

            if (docRef.id) {
                setOrderId(docRef.id);
                setOrderSuccess(true);
                CartContext.clearCart();
            }
        } catch (error) {
            alert('No se pudo crear la orden', error);
        }
    };

    return (
        <Flex
            w={'90%'}
            my={'3rem'}
            mx={'auto'}
            p={'2rem'}
            flexDir={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            bg={bgPayment}
            shadow={shadowPayment}
            borderRadius={'20px'}
        >
            <Box
                w={'90%'}
                h={'6vh'}
                mx={'auto'}
                mb={'1rem'}
                color={colorText}
                bg={bgPayment}
                shadow={shadowPayment}
                borderRadius={'20px'}
            >
                <Heading
                    textAlign={'center'}
                >
                    Pago
                </Heading>
            </Box>

            {!orderSuccess ? (
                <Box
                    w={'90%'}
                    p={{ base: '1rem', sm: '1rem', md: '2rem', lg: '4rem' }}
                    mx={'auto'}
                    bg={bgPayment}
                    shadow={shadowPayment}
                    borderRadius={'20px'}
                >
                    <FormControl isRequired id="username" mb={'1rem'}>
                        <FormLabel color={'orange.600'} fontWeight={'900'} fontSize={'clamp(0.1rem, 1vw + 0.2rem, 2rem)'}>
                            Nombre:
                        </FormLabel>
                        <Input type="text" placeholder="Nombre" onChange={(e) => setName(e.target.value)} />
                    </FormControl>

                    <FormControl isRequired id="lastname" mb={'1rem'}>
                        <FormLabel color={'orange.600'} fontWeight={'900'} fontSize={'clamp(0.1rem, 1vw + 0.2rem, 2rem)'}>
                            Apellido:
                        </FormLabel>
                        <Input type="text" placeholder="Apellido" onChange={(e) => setLastName(e.target.value)} />
                    </FormControl>

                    <FormControl isRequired id="email" mb={'1rem'}>
                        <FormLabel color={'orange.600'} fontWeight={'900'} fontSize={'clamp(0.1rem, 1vw + 0.2rem, 2rem)'}>
                            Email:
                        </FormLabel>
                        <Input type="email" placeholder="Correo electronico" onChange={(e) => setEmail(e.target.value)} />
                    </FormControl>

                    <FormControl isRequired as={'fieldset'}>
                        <FormLabel color={'orange.600'} fontWeight={'900'} fontSize={'clamp(0.1rem, 1vw + 0.2rem, 2rem)'}>
                            Medio de pago:
                        </FormLabel>
                        <RadioGroup defaultValue="creditCard" my={'1rem'}>
                            <HStack spacing={6} align={'center'}>
                                <Radio value="creditCard">
                                    < BsFillCreditCard2FrontFill
                                        style={{
                                            display: 'inline',
                                            marginLeft: '0.4rem',
                                            marginRight: '0.6rem',
                                            fontSize: '1.5rem',
                                        }}
                                    />
                                    Tarjeta de Crédito
                                </Radio>
                                <Radio value="cash">
                                    <BsCash
                                        style={{
                                            display: 'inline',
                                            marginLeft: '0.4rem',
                                            marginRight: '0.6rem',
                                            fontSize: '1.5rem'
                                        }}
                                    />
                                    Efectivo
                                </Radio>
                            </HStack>
                        </RadioGroup>
                    </FormControl>
                </Box>
            ) : (
                <Alert
                    status='success'
                    variant='subtle'
                    height='10rem'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                    textAlign='center'
                    bg={bgPayment}
                    boxShadow={shadowPayment}
                    color={colorText}
                >
                    <AlertIcon boxSize='40px' mr={0} />
                    <AlertTitle mt={4} mb={1} fontSize='lg'>
                        ¡Registraste tu compra!
                    </AlertTitle>
                    <AlertDescription maxWidth='sm'>
                        Tu número de orden: {orderId}
                    </AlertDescription>
                </Alert>
            )}

            {!orderSuccess && (
                <Button
                    mt={'1rem'}
                    onClick={handleCreateOrder}
                    color={colorText}
                    bg={bgPayment}
                    boxShadow={shadowPayment}
                    borderRadius={'20px'}
                >
                    CONFIRMAR COMPRA
                </Button>
            )}

            <Box>
                <Text mt={'2rem'}>
                    * Al llenar este formulario, está de acuerdo con nuestros términos y condiciones.
                </Text>
            </Box>
        </Flex>
    );
};
