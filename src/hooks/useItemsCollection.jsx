import React from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export const useItemsCollection = (categoryName) => {
    const [items, setItems] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        if (!categoryName) {
            setLoading(false);
            setError(true);
            return;
        }

        const ItemsCollection = collection(db, categoryName);
        setLoading(true);
        getDocs(ItemsCollection)
            .then((snapshot) => {
                console.log(snapshot.docs.map((doc) => doc.data()))
                setItems(
                    snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                );
                setError(false);
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, [categoryName]);

    return { items, loading, error };
};
