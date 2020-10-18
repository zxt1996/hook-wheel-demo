import React from 'react';
import useTimeout from '../hooks/useTimeout';

function TimeoutDemo() {
    const [disabled, start] = useTimeout(5000);

    const handleClick = () => {
        start();

        console.log('超时', disabled);
    }

    return (
        <div onClick={handleClick}>点击</div>
    )
}

export default TimeoutDemo;