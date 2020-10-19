import { useRef, useEffect } from 'react';

export default function useDebounce(fn, ms = 30, deps = []) {
    let timeout = useRef();

    useEffect(() => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }

        timeout.current = setTimeout(() => {
            fn();
        }, ms)

        return () => {
            clearTimeout(timeout.current);
        }
    }, deps);
}