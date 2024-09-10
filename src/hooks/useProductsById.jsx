import React from "react";
import { getProductsById } from '../services/products.service';

export const useProductsById = (id) => {
    const [product, setProduct] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const parsedId = parseInt(id, 10);
        if (parsedId) {
            getProductsById(parsedId)
                .then((res) => {
                    const foundProduct = res.data.find(item => item.id === parsedId);
                    setProduct(foundProduct);
                })
                .catch((err) => {
                    console.error(err);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [id]);

    return { product, loading };
};