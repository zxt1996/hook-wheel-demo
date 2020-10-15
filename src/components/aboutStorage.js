import React, {useEffect, useCallback} from 'react';
import useStorage from '../hooks/useStorage';

function AboutStorage() {
    // 保存登录状态
    const [use, setUser, clearUser] = useStorage('user');

    const handleLogin = (user) => {
        setUser(user)
    }

    const handleLogout = () => {
        clearUser()
    }

    return (
        <div>
            <h3>
                {`存储hook`}
            </h3>
            <h4>保存的状态</h4>
            {use ? `${use}` : '没有保存'}
            <button onClick={handleLogout}>清除存储</button>
            <button onClick={() => handleLogin('now')}>保存</button>
        </div>
    )
}

export default AboutStorage;