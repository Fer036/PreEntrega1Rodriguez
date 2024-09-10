import React from "react";
import { getProductsByCategory } from '../services/products.service';

export const useProductsByCategory = (category) => {
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        if (category) {
            getProductsByCategory(category)
                .then((res) => {
                    setProducts(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => setLoading(false));
        }
    }, [category]);

    return { products, loading };
};
