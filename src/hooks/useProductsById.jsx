import React from "react";
import { getProductsById } from '../services/products.service';

export const useProductsById = (id) => {
    const [product, setProduct] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        getProductsById(id)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return { product, loading };
};