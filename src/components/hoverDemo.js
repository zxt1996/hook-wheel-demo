import React from 'react';
import useHover from '../hooks/useHover';

function HoverDemo() {
    const [hoverRef, isHovered] = useHover();

    return (
        <div ref={hoverRef}>
            {isHovered ? '😁' : '☹️'}
        </div>
    )
}

export default HoverDemo;
