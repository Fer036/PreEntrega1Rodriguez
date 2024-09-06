import { useEffect, useState } from "react";
import { products } from '../services/products';

export const useProductsByCategory = (category) => {
    const [ productsData, setProductsData ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const getProductsByCategory = () => {
            const filteredProducts = products.filter(product => product.category.toLowerCase() === category);

            if(filteredProducts.length > 0) {
                setProductsData(filteredProducts);
                setError(null);
            } else {
                setProductsData([]);
                setError('Categoría inexistente');
            };

            setLoading(false);
        };
    }, []);

    return { productsData, loading, error };
};