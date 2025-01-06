import React from 'react';

function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {

        let parsedItem = [];

        try {
            const localStorageItem = localStorage.getItem(itemName);

            if (localStorageItem) {
                parsedItem = JSON.parse(localStorageItem);
                setItem(parsedItem);
            } else {
                localStorage.setItem(itemName, JSON.stringify(initialValue));
            }

            setLoading(false);

        } catch (error) {
            setLoading(false);
            setError(true);
        }

    }, []);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }

    return {
        item,
        saveItem,
        loading,
        error
    }
}

export { useLocalStorage };