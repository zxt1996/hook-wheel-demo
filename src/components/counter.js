import React, { useCallback, useEffect } from 'react';
import useRefState from '../hooks/useRefState';

function Counter() {
    const [count, setCount, countRef] = useRefState(0);

    const handleIncr = useCallback(() => {
        setCount(countRef.current + 1);
    }, []);

    useEffect(() => {
        return () => {
            // 在组件卸载时保存当前的count
        }
    }, [])

    return (
        <div>
            {count} : 
            <button onClick={handleIncr}>increment</button>
        </div>
    )
}

export default Counter;