import globe from '../assets/globe.gif'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SignIn } from '@clerk/clerk-react';
import './Styles/login.css'

function Login() {
    const navigate = useNavigate();

    const handleAuthentication = () => {
        console.log('User logged in');
        navigate('/');
    };

    return (
        <>
            <img src={globe} alt='globe' className='globe' />
            <div className='loginPage'>
                <div className='centerContainer'>

                    <SignIn onSuccess={handleAuthentication}>
                        {({ form }) => (
                            <form className="loginForm">
                                {form.username && (
                                    <label className='username'>
                                        Username
                                        {form.username}
                                    </label>
                                )}
                                {form.password && (
                                    <label className='pass' required>
                                        Password
                                        {form.password}
                                    </label>
                                )}
                                {form.errorMessage && (
                                    <div className="error-message">{form.errorMessage}</div>
                                )}
                                <button className='custom-button' type="submit">
                                    Login
                                </button>
                                <span>
                                    <p>New user? </p>
                                    <a className='a' href='/signup'>Sign Up</a>
                                </span>
                            </form>
                        )}
                    </SignIn>
                </div>
                <div className="dropShadow">
                </div>
            </div>
        </>
    );
}

export default Login;
