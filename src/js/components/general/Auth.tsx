import React, { useState } from 'react';

const Auth = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [authSuccesful, setAuthSuccesful] = useState<boolean>(false);

    const usernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const submit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const response = await fetch('/api/auth', {
            method: 'POST',
            body: JSON.stringify({ username: username, password: password }),
        });
        const json = await response.json();

        if (json.success) {
            setAuthSuccesful(true);
        } else {
            setUsername('');
            setPassword('');
        }
    };

    return (
        <div
            className="auth"
            style={{ display: authSuccesful ? 'none' : 'block' }}
        >
            <label htmlFor="username">Username:</label>
            <input
                value={username}
                type="text"
                id="username"
                onChange={usernameChange}
            />
            <label htmlFor="password">Password:</label>
            <input
                value={password}
                type="password"
                id="password"
                onChange={passwordChange}
            />
            <button onClick={submit}>Log In</button>
        </div>
    );
};

export default Auth;
