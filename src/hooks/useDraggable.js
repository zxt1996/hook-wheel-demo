import { useState, useEffect } from 'react';

export default function useDraggable(ref) {
    const [{ dx, dy }, setOffset] = useState({ dx: 0, dy: 0 });

    useEffect(() => {
        if (ref.current == null) {
            throw new Error(`[useDraggable] ref未注册到组件中`);
        }

        const el = ref.current;

        const handleMouseDown = (event) => {
            // pageX:相对于整个文档的x（水平）坐标以像素为单位的只读属性
            const startX = event.pageX - dx;
            const startY = event.pageY - dy;

            const handleMouseMove = (event) => {
                const newDx = event.pageX - startX;
                const newDy = event.pageY - startY;
                setOffset({ dx: newDx, dy: newDy });
            }

            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', () => {
                document.removeEventListener('mousemove', handleMouseMove);
            },
            { once: true },
            )
        }

        el.addEventListener('mousedown', handleMouseDown);

        return () => {
            el.removeEventListener('mousedown', handleMouseDown);
        }
    }, [dx, dy]);

    useEffect(() => {
        if (ref.current) {
            ref.current.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
        }
    }, [dx, dy])
}