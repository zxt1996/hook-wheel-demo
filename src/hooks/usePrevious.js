import { useEffect, useRef } from 'react';

 export default function usePrevious(value) {
    const ref = useRef('前一个值');

    useEffect(() => {
        ref.current = value;
    }, [value]);

    // 返回上一个值（上面的useEffect中发生更新之前的情况）
    return ref.current;
}