import React from "react";
import { getProductsByCategory } from '../services/products.service';

export const useProductsByCategory = (id) => {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        getProductsByCategory(id)
            .then((res) => {
                console.log(res);
                setProducts(response.data.products);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return { products };
};