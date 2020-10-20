import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

function LocalStorageDemo() {
    const [name, setName] = useLocalStorage('name', 'Bob');

    return (
        <div>
            <input
                type="text"
                placeholder="enter your name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
        </div>
    )
}

export default LocalStorageDemo;