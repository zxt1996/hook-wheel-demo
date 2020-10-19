import { useRef, useState, useEffect } from 'react';

const useThrottle = (fn, ms = 30, deps = []) => {
    let previous = useRef(0);

    useEffect(() => {
        let now = Date.now();
        console.log('now >>>', now);
        if (now - previous.current > ms) {
            fn();
            previous.current = now;
        }
    }, deps)
}

export default useThrottle;