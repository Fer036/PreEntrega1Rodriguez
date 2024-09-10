import React from "react";
import { getAllProducts } from '../services/products.service';

export const useProducts = () => {
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        getAllProducts()
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setLoading(false));
    }, []);

    return { products, loading };
};

