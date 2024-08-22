import { Box } from "@chakra-ui/react";

const ItemListContainer = ({greeting}) => {
    return <Box margin={'50px'} display={'flex'}> {greeting} </Box>;
};

export default ItemListContainer;