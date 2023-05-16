import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debValue, setDebValue] = useState<string>(value);

    useEffect(() => {
        const timeout = setTimeout(() => setDebValue(value), delay);

        return () => clearTimeout(timeout);
    }, [value, delay])

    return debValue;
}

export default useDebounce;
