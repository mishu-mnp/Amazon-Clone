import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import images from './components/images';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';
import './Login.css';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Sign In
    const signIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                navigate('/')
            })
            .catch((error) => alert(error.message))
    }

    // Register
    const register = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                console.log(auth)
                if (auth) {
                    navigate('/')
                }
            })
            .catch((error) => alert(error.message))
    }


    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src={images.logo2} alt='amazon_logo' />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email} id='email' onChange={(e) => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} id='password' onChange={(e) => setPassword(e.target.value)} />

                    <button className='login__signInButton' onClick={signIn} type='submit'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the Amazon Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>


                <strong><p>New to Amazon ?</p></strong>
                <button className='login__registerButton' onClick={register} >Create Account</button>
            </div>
        </div>
    )
}

export default Login
