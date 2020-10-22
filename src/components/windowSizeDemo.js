import React from 'react';
import useWindowSize from '../hooks/useWindowSize';

function WindowSizeDemo () {
    const size = useWindowSize();

    return (
        <div>
            {size.width}px / {size.height}px
        </div>
    )
}

export default WindowSizeDemo;