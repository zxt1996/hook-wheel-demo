import React, { useRef } from 'react';
import useActive from '../hooks/useActive';

function ActiveDemo() {
    const elRef = useRef(null);
    const active = useActive(elRef);

    return (
        <div ref={elRef}>
            {
                active ? "active" : "nop"
            }
        </div>
    )
}

export default ActiveDemo;