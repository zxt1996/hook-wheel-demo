import React from 'react';
import useAsync from '../hooks/useAsync';

function AsyncDemo() {
    const { execute, status, value, error } = useAsync(myFunction, false);

    return (
        <div>
          {status === 'idle' && <div>Start your journey by clicking a button</div>}
          {status === 'success' && <div>{value}</div>}
          {status === 'error' && <div>{error}</div>}
          <button onClick={execute} disabled={status === 'pending'}>
            {status !== 'pending' ? 'Click me' : 'Loading...'}
          </button>
        </div>
      );
}

const myFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rnd = Math.random() * 10;
            rnd <= 5
                ? resolve('Submitted successfully 🙌')
                : reject('Oh no there was an error 😞');
        }, 2000);
    })
}

export default AsyncDemo;