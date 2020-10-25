import React, { useState } from 'react';
import usePrevious from '../hooks/usePrevious';

function PreviousDemo() {
    const [count, setCount] = useState(0);

    // 获取之前的值（在上一次渲染时传递到了Hook中）
    const prevCount = usePrevious(count);

    return (
        <div>
            <h1>Now: {count}, before: {prevCount}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default PreviousDemo;