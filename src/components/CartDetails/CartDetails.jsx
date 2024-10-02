import React, { useContext } from "react";
import { CartContext } from '../../context';

import {
    Box,
    Flex,
    Image,
    Text,
    Heading,
    Divider,
    VStack,
    HStack,
    Spacer,
    Alert,
    AlertIcon,
    IconButton,
    useColorModeValue,
} from "@chakra-ui/react";
import { DeleteIcon, AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export const CartDetails = () => {
    const { cartState, addItem, removeItem, deleteItem } = useContext(CartContext);
    const total = cartState.reduce((acc, item) => acc + item.price * item.qtyItem, 0);

    const shadowCartDetail = useColorModeValue('-6px -6px 19px #b3b3b3, 6px 6px 19px #ffffff', '-5px -5px 10px #11151d, 5px 5px 10px #232b3b');
    const bgCartDetail = useColorModeValue('linear-gradient(315deg, #cacaca, #f0f0f0)', '#1A202C');
    const colorText = useColorModeValue('gray.500', 'white');

    const handleDeleteItem = (item) => {
        deleteItem(item);
    };

    return (
        <Box
            p={6}
            w={'80%'}
            mx={'auto'}
            my={'3rem'}
            borderRadius={'20px'}
            bg={bgCartDetail}
            boxShadow={shadowCartDetail}
            color={colorText}
        >
            <Heading
                as={"h2"}
                size={"lg"}
                mb={6}
                textAlign={"center"}
            >
                DETALLES DE TU COMPRA
            </Heading>

            {cartState.length === 0 ? (
                <Alert
                    status="info"
                    borderRadius={"20px"}
                    bg={bgCartDetail}
                    boxShadow={shadowCartDetail}
                >
                    <AlertIcon />
                    ¡Carrito vacío!
                </Alert>
            ) : (
                <VStack spacing={4} align="stretch">
                    {cartState.map((item) => (
                        <Flex
                            key={item.id}
                            p={4}
                            borderRadius={"20px"}
                            alignItems={"center"}
                            boxShadow={shadowCartDetail}
                            bg={bgCartDetail}
                        >
                            <Image
                                src={item.image}
                                alt={item.name}
                                boxSize={"100px"}
                                objectFit={"cover"}
                                borderRadius={"20px"}
                                mr={4}
                                boxShadow={shadowCartDetail}
                            />
                            <Box flex={"1"}>
                                <Text
                                    fontSize={"xl"}
                                    fontWeight={"bold"}
                                >
                                    {item.name}
                                </Text>
                                <HStack
                                    spacing={4}
                                    mt={2}
                                >
                                    <Text mx={'1rem'}>Precio: ${item.price.toFixed(2)}</Text>
                                    <HStack>
                                        <IconButton
                                            aria-label="Disminuir cantidad"
                                            icon={<MinusIcon />}
                                            size={"sm"}
                                            onClick={() => removeItem(item)}
                                            isDisabled={item.qtyItem === 1}
                                            bg={bgCartDetail}
                                            boxShadow={shadowCartDetail}
                                        />
                                        <Text my={'auto'}>
                                            {item.qtyItem}
                                        </Text>
                                        <IconButton
                                            aria-label="Aumentar cantidad"
                                            icon={<AddIcon />}
                                            size={"sm"}
                                            onClick={() => addItem(item)}
                                            isDisabled={item.qtyItem >= item.stock}
                                            bg={bgCartDetail}
                                            boxShadow={shadowCartDetail}
                                        />
                                    </HStack>
                                </HStack>
                            </Box>
                            <Spacer />
                            <HStack>
                                <Text
                                    my={'auto'}
                                    fontWeight={"bold"}
                                    mx={'1rem'}
                                >
                                    Subtotal: ${(item.price * item.qtyItem).toFixed(2)}
                                </Text>
                                <IconButton
                                    aria-label="Eliminar producto"
                                    icon={<DeleteIcon />}
                                    bg={bgCartDetail}
                                    boxShadow={shadowCartDetail}
                                    color={'orange.600'}
                                    onClick={() => handleDeleteItem(item)}
                                />
                            </HStack>
                        </Flex>
                    ))}
                    <Divider />
                    <Flex alignItems="center">
                        <Text
                            fontSize="2xl"
                            fontWeight="bold"
                            color={'blue.700'}
                        >
                            Total: ${total.toFixed(2)}
                        </Text>
                        <Spacer />
                        <Box
                            bg={bgCartDetail}
                            boxShadow={shadowCartDetail}
                            py={'1rem'}
                            px={'1.2rem'}
                            borderRadius={'20px'}
                        >
                            <Link to="/payment">
                                PAGAR
                            </Link>
                        </Box>
                    </Flex>
                </VStack>
            )}
        </Box>
    );
};