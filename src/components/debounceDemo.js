import React, { useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import useThrottle from '../hooks/useThrottle';

function DebounceDemo() {
    const [query, setQuery] = useState(false);

    const handleSearch = () => {
        console.log('防抖节流');
    }

    // useDebounce(handleSearch, 1000, [query]);
    useThrottle(handleSearch, 2000, [query])

    const handleCan = () => {
        setQuery(!query);
    }

    return (
        <div onClick={handleCan}>
            点击
        </div>
    )
}

export default DebounceDemo;
