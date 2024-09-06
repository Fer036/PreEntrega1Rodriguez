import { useEffect, useState } from "react";
import { products } from "../services/products";

export const useProducts = () => {
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducts = () => {
            setProductsData(products);
            setLoading(false);
        };

        setTimeout(getProducts, 500);
    }, []);

    return { productsData, loading };
};