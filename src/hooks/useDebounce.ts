import { useEffect, useState } from "react";

export function useDebounce<T>(vvalue: T, delay: number = 500) {
    const [debaouncedValue, setDebaouncedValue] = useState(vvalue)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebaouncedValue(vvalue)
        }, delay);

        return () => {
            clearTimeout(handler)
        }
    },[vvalue, delay])

    return debaouncedValue
}