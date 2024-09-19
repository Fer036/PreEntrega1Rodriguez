import products from '../data/products';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

export async function createProductsFirestore(collectionName) {
    try {
        const fetchedProducts = products;

        if (!Array.isArray(fetchedProducts)) {
            throw new Error('No corresponde a un array');
        };

        const productsCollection = collection(db, collectionName);

        const addPromises = fetchedProducts.map((product) => {
            delete (product.id);
            addDoc(productsCollection, {
                ...product,
                createAt: new Date(),
            })
        }
        );

        await Promise.all(addPromises);

        console.log(`${fetchedProducts.length} productos añadidos a Firestore.`);
    } catch (err) {
        console.error('Error al obtener los productos.', err);
    };
};