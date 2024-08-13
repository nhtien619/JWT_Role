import React, { useEffect, useState } from 'react';
import './Register.scss';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';



const Register = (props) => {
    const navigate = useNavigate();
    const handleBackToLogin = () => {

        navigate('/login');
    }

    //? use useState
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [gender, setGender] = useState('Female');

    const handleRegister = () => {
        let registerData = {
            email: email,
            username: username, phone: phone,
            password: password, repassword: repassword
        };
        console.log('> check register data: ', registerData);

        //? Check validate
        if (!isValidate(registerData))
            return;


        toast('OK !!');
    }


    //? Function check validation
    const isValidate = () => {
        var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!email)
            toast.error("Email is required.");

        if (!regexEmail.test(email))
            toast.error("You are writing invalid email address");


        if (!username)
            toast.error("Username is required.");

        if (!password)
            toast.error("Password is required.");

        if (password != repassword)
            toast.error("Repassword should be the same with password.");

        if (!email || !regexEmail.test(email) || !username || !password
            || !repassword)
            return false;

        return true;
    }

    useEffect(() => {
        // axios.get('http://localhost:8082/api/test-api').then(rs => {
        //     console.log('check data call api: ', rs);
        // });
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
                        <input type='text' className='form-control' placeholder='Username...'
                            value={username} onChange={(event) => { setUsername(event.target.value); }} />
                        <input type='tel' className='form-control' placeholder='Phone number...'
                            value={phone} onChange={(event) => { setPhone(event.target.value); }} />
                        <input type='email' className='form-control' placeholder='Email address...'
                            value={email} onChange={(event) => { setEmail(event.target.value); }} />
                        <input type='password' className='form-control' placeholder='New passoword...'
                            value={password} onChange={(event) => { setPassword(event.target.value); }} />
                        <input type='password' className='form-control' placeholder='Re-enter passoword...'
                            value={repassword} onChange={(event) => { setRepassword(event.target.value); }} />
                        <div className='d-flex flex-column gap-0'>
                            <span className='title-small-text'>Gender</span>
                            <div className='d-flex'>
                                <div className="border-radio form-check me-2">
                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                        Female
                                    </label>
                                    <input onChange={(event) => { if (event.target.checked) setGender('Female') }}
                                        className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                                        value="Female" checked={(gender === 'Female')} />
                                </div>

                                <div className="border-radio form-check">
                                    <label className="form-check-label" htmlFor="exampleRadios2">
                                        Male
                                    </label>
                                    <input onChange={(event) => { if (event.target.checked) setGender('Male') }}
                                        className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                                        value="Male" checked={(gender === 'Male')} />
                                </div>

                            </div>
                        </div>
                        <div className='line'></div>
                        <button className='btn btn-success' onClick={() => { handleRegister(); }}>
                            Register
                        </button>
                        <div className='line'></div>
                        <div className='text-center'>
                            <button className='btn btn-primary'
                                onClick={() => { handleBackToLogin(); }}>
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