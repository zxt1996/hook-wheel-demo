import React, { useState, useCallback } from 'react';
import useEventListener from '../hooks/useEventListener';

function EventListenerDemo() {
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const handler = useCallback(
        ({ clientX, clientY }) => {
            setCoords({
                x: clientX,
                y: clientY
            })
        },
        [setCoords],
    );

    useEventListener('mousemove', handler);

    return (
        <h1>
            the mouse position is ({coords.x}, {coords.y})
        </h1>
    )
}

export default EventListenerDemo;