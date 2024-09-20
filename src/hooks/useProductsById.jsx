import React from "react";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

export const useProductsById = (id) => {
    const [product, setProduct] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        const productItem = doc(db, 'products', id);
        getDoc(productItem)
            .then((snapshot) => {
                setProduct({ id: snapshot.id, ...snapshot.data() });
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => setLoading(false));
    }, [id]);

    return { product, loading, error };
};