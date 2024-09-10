import React from "react";
import { getCategories } from '../services/products.service';

export const useCategory = () => {
    const [categories, setCategories] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        getCategories()
            .then((res) => {
                console.log(res.data)
                setCategories(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setLoading(false));
    }, []);

    return { categories, loading };
};