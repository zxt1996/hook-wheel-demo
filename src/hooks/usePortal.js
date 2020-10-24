import React, { useCallback, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const usePortal = ( rootContainer = document.body, defaultShow = false ) => {
   const [isShow, setShow] = useState(defaultShow);

   const handleClose = useCallback(() => {
        setShow(false);
    }, []);

    const handleShow = useCallback(() => {
        setShow(true);
    }, []);

    const Protal = useCallback(
        ({children}) => {
            if (!isShow) return null;

            return ReactDOM.createPortal(
                <div>
                    {children}
                </div>,
                rootContainer
            )
        },
        [isShow, rootContainer],
    );

    return {
        Protal,
        isShow,
        handleClose,
        handleShow
    }
}

export default usePortal;