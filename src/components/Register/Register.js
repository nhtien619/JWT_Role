import React, { useEffect } from 'react';
import './Register.scss';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const Register = (props) => {
    const navigate = useNavigate();
    const handleLogin = () => {

        navigate('/login');
    }

    useEffect(() => {
        axios.get('http://localhost:8082/api/test-api').then(rs => {
            console.log('check data call api: ', rs);
        });
    }, []);

    return (
        <div className='register-container'>
            <div className='d-flex flex-nowrap justify-content-center'>

                <div className='register-border col-xl-3 col-xxl-3 col-12 col-sm-6 p-3 shadow'>
                    <div className='d-flex flex-column gap-3'>
                        <div className='d-flex flex-column gap-0'>
                            <label>Sign Up</label>
                            <span className='title-small-text'>Easy to create new account</span>
                        </div>
                        <input type='text' className='form-control' placeholder='Username...'></input>
                        <input type='email' className='form-control' placeholder='Email address...'></input>
                        <input type='password' className='form-control' placeholder='New passoword...'></input>
                        <input type='password' className='form-control' placeholder='Re-enter passoword...'></input>
                        <div className='d-flex flex-column gap-0'>
                            <span className='title-small-text'>Gender</span>
                            <div className='d-flex'>
                                <div className="border-radio form-check me-2">
                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                        Female
                                    </label>
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="Female"></input>
                                </div>

                                <div className="border-radio form-check">
                                    <label className="form-check-label" htmlFor="exampleRadios2">
                                        Male
                                    </label>
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="Male"></input>
                                </div>

                            </div>
                        </div>
                        <div className='line'></div>
                        <button className='btn btn-success'>
                            Register
                        </button>
                        <div className='line'></div>
                        <div className='text-center'>
                            <button className='btn btn-primary'
                                onClick={() => { handleLogin(); }}>
                                Already have an account. Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Register;