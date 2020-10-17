import React, { useRef } from 'react';
import useDraggable from '../hooks/useDraggable';

function Draggable() {
    const el = useRef();
    useDraggable(el);

    return (
        <div className="box" ref={el}>jojo</div>
    )
}

export default Draggable;