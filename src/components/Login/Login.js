
import React from 'react';
import './Login.scss'

import { useNavigate, useParams } from 'react-router-dom';


const Login = (props) => {
    const navigate = useNavigate();
    const handleCreateNewAccount = () => {

        navigate('/register');
    }


    return (
        <div className='login-container'>
            <div className='container'>
                <div className='row px-3 px-sm-0'>
                    <div className='content-left col-12 col-sm-7 d-none d-sm-block m-auto'>
                        <div className='d-flex flex-column'>
                            <span className='brand'>USER ROLE</span>
                            <label>
                                Managment and setup user role.
                            </label>
                        </div>
                    </div>
                    <div className='content-right col-sm-5 col-12 shadow px-sm-3 px-3'>
                        <div className='d-flex flex-column gap-3'>
                            <span className='d-sm-none'>USER ROLE</span>
                            <input placeholder='Enter username...' className='form-control' type='text'></input>
                            <input placeholder='Enter password...' className='form-control' type='password'></input>
                            <button className='btn btn-primary'>Login</button>
                            <a className='forgot-password text-center'>Forgot your password?</a>
                            <div className='line'></div>
                            <div className='text-center'>
                                <button className='btn btn-success'
                                    onClick={() => { handleCreateNewAccount(); }}>
                                    Create new account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;