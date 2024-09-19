import React from "react";

export const useCategory = () => {
    const [categories, setCategories] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        getCategories()
            .then((res) => {
                setCategories(res.data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => setLoading(false));
    }, []);

    return { categories, loading, error };
};