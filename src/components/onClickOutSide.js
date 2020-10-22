import React, { useState, useRef } from 'react';
import useOnClickOutSide from '../hooks/useOnClickOutSide';

function OnClickOutSide() {
    const ref = useRef();
    const [isModalOpen, setModalOpen] = useState(false);
    useOnClickOutSide(ref, () => setModalOpen(false));

    return (
        <div>
            {
                isModalOpen ? (
                    <div ref={ref}>
                        👋 Hey, I'm a modal. Click anywhere outside of me to close.
                    </div>
                ) : (
                    <button onClick={() => setModalOpen(true)}>
                        open modal
                    </button>
                )
            }
        </div>
    )
}

export default OnClickOutSide;