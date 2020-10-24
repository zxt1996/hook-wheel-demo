import React, { useCallback } from 'react';
import usePortal from '../hooks/usePortal';

const PortalDemo = () => {
    const { Protal, handleClose, handleShow } = usePortal();

    return (
        <div>
            <button onClick={handleShow}>弹窗</button>
            <Protal>
                <div>
                    <div>弹窗内容</div>
                    <button onClick={handleClose}>关闭</button>
                </div>
            </Protal>
        </div>
    )
}

export default PortalDemo;