const isClient = typeof window !== 'undefined';

export const getSessionsStorage = (key, initalValue) => {
    if (isClient) return initalValue;

    const stored = sessionStorage.getItem(key);

    return stored ? JSON.parse(stored) : initalValue;
}

export const setSessionsStorage = (key, value) => {
    if (!isClient) {
        setSessionsStorage.setItem(key, JSON.stringify(value));
    }
}