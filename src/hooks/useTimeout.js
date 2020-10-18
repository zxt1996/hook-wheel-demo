import { useState, useRef, useCallback, useEffect } from 'react';

export default function useTimeout(ms) {
    const [ready, setReady] = useState(false);
    const timeRef = useRef();

    const start = useCallback(
        () => {
            clearTimeout(timeRef.current);
            setReady(true);
            timeRef.current = setTimeout(() => {
                setReady(false);
            }, ms)
        },
        [ms],
    )

    const stop = useCallback(
        () => {
            clearTimeout(timeRef.current);
        },
        [],
    );

    useEffect(() => {
        return () => {
            stop();
        }
    }, [])

    return [ready, start, stop];
}