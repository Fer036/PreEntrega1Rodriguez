import React from "react";
import { getCategories } from '../services/products.service';

export const useCategory = () => {
    const [category, setCategory] = React.useState([]);

    React.useEffect(() => {
        getCategories()
            .then((res) => {
                setCategory(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return { category };
};