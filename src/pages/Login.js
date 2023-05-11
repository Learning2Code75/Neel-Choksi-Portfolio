import React from 'react'
import {auth,provider} from '../firebase-config'
import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom';

function Login({isAuth,setIsAuth}) {
    let navigate = useNavigate();

    const signInWithGoogle = ()=>{
        signInWithPopup(auth,provider).then((result)=>{
            localStorage.setItem("isAuth",true)
            setIsAuth(true);
            navigate("/");
        })
    }

    return (
        <div className="loginPage">
            <p>Sign In with google to continue</p>
            <button className="btn" onClick={signInWithGoogle}>Login</button>
        </div>
    )
}

export default Login
