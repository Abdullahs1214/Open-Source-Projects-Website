import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function LoginPage() {
    const [alreadyUser, setAlreadyUser] = useState(1);

    function Output() {
        if (alreadyUser) {
            return(
                <div>
                    <LoginForm/>
                    <p onClick={() => setAlreadyUser(0)}>Not a user yet?</p>
                </div>
            );
        }
        else {
            return(
                <div>
                    <RegisterForm/>
                    <p onClick={() => setAlreadyUser(1)}>Already a user?</p>
                </div>
            );
        }
    }

    return(
        <div>
            <Output/>
        </div>
    );
}

export default LoginPage;

