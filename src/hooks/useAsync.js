import { useState, useCallback, useEffect } from 'react';

const useAsync = (asyncFunction, immediate = true) => {
    // 闲置状态
    const [status, setStatus] = useState('idle');
    const [value, setValue] = useState(null);
    const [error, setError] = useState(null);

    const execute = useCallback(
        () => {
            setStatus('pending');
            setValue(null);
            setError(null);

            return asyncFunction()
                .then(response => {
                    setValue(response);
                    setStatus('success');
                })
                .catch(error => {
                    setError(error);
                    setStatus('error');
                })
        },
        [asyncFunction],
    );

    useEffect(() => {
        if (immediate) {
            execute()
        }
    }, [execute, immediate]);

    return {
        execute,
        status,
        value,
        error
    }
}

export default useAsync;