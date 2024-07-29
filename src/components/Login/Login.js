
import React from 'react';
import './Login.scss'
const Login = (props) => {
    return (
        <div className='login-container'>
            <div className='container'>
                <div className='row'>
                    <div className='content-left col-md-7'>
                        <div className='d-flex flex-column'>
                            <h2>USER ROLE</h2>
                            <label>
                                Managment and setup user role.
                            </label>
                        </div>
                    </div>
                    <div className='content-right col-md-5'>
                        <div className='d-flex flex-column  gap-3'>
                            <input placeholder='Enter username...' className='form-control' type='text'></input>
                            <input placeholder='Enter password...' className='form-control' type='password'></input>
                            <button className='btn btn-primary'>Login</button>
                            <a className='text-center'>Forgot your password?</a>
                            <div className='text-center'>
                                <button className='w-fit btn btn-success'>Create new account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;