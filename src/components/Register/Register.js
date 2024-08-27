import React, { useEffect, useState } from 'react';
import './Register.scss';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import formatHelpers from '../../helpers/strUtility';
import userService from '../../services/userService';

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

    const defaultCheckValidInputs = {
        isValidateEmail: true,
        isValidatePhone: true,
        isValidateUsername: true,
        isValidatePassword: true,
        isValidateRePassword: true
    };

    const [objCheckValidInputs, setObjCheckValidInputs] = useState(defaultCheckValidInputs)
    var inputs = [];

    useEffect(() => {
        // axios.get('http://localhost:8082/api/test-api').then(rs => {
        //     console.log('check data call api: ', rs);
        // });

        // axios.post('http://localhost:8082/api/register', {
        //     fname: 'beckham', lname: 'david'
        // }).then(rs => {
        //     console.log('check data call api: ', rs);
        // });

    }, []);


    const handleRegister = async () => {
        let registerData = {
            email: email,
            username: username,
            phone: phone,
            password: password,
            repassword: repassword,
            gender: gender
        };
        console.log('> check register data: ', registerData);

        //? Check validate
        if (!isValidate())
            return;

        //? Call api to register new user
        let response = await userService.registerNewUser(registerData);
        console.log('>>>> response: ', response);
        if (response.code > 0) {
            toast.success('Register successful.');
            //? delay 2s to navigate the login page
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        }
        else
            toast.error(response.message);

    }


    //? Function check validation
    const isValidate = () => {
        setObjCheckValidInputs(defaultCheckValidInputs);
        inputs = [];
        var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!username) {
            // setObjCheckValidInputs({ ...defaultCheckValidInputs, isValidateUsername: false });
            toast.error("Username is required.");
            inputs.push('username');
        }

        if (!phone) {
            setObjCheckValidInputs({ ...defaultCheckValidInputs, isValidatePhone: false });
            toast.error("Phone is required.");
            inputs.push('phone');
        }

        if (!email) {
            // setObjCheckValidInputs({ ...defaultCheckValidInputs, isValidateEmail: false });
            toast.error("Email is required.");
        }

        if (!regexEmail.test(email)) {
            // setObjCheckValidInputs({ ...defaultCheckValidInputs, isValidateEmail: false });
            toast.error("You are writing invalid email address");
        }

        if (!email || !regexEmail.test(email)) {
            inputs.push('email');
        }

        if (!password) {
            // setObjCheckValidInputs({ ...defaultCheckValidInputs, isValidatePassword: false });
            toast.error("Password is required.");
            inputs.push('password');
        }

        if ((password != repassword) || !repassword) {
            toast.error("Repassword should be the same with password.");
            inputs.push('repassword');
        }

        if (inputs.length > 0)
            console.log('Inputs: ', inputs);

        if (!username || !email || !regexEmail.test(email) || !password || !phone || (password != repassword)) {
            setObjCheckValidInputs({
                ...defaultCheckValidInputs,
                isValidateUsername: !inputs.includes('username'),
                isValidatePhone: !inputs.includes('phone'),
                isValidateEmail: !inputs.includes('email'),
                isValidatePassword: !inputs.includes('password'),
                isValidateRePassword: !inputs.includes('repassword')
            });
            return false;
        }

        return true;
    }


    return (
        <div className='register-container'>
            <div className='d-flex flex-nowrap justify-content-center'>

                <div className='register-border col-xl-3 col-xxl-3 col-12 col-sm-6 p-3 shadow'>
                    <div className='d-flex flex-column gap-2'>
                        <div className='d-flex flex-column gap-0'>
                            <label>Sign Up</label>
                            <span className='title-small-text'>Easy to create new account</span>
                        </div>



                        <input type='text'
                            className={objCheckValidInputs.isValidateUsername ? 'form-control' : 'form-control is-invalid'}
                            placeholder='Username...'
                            value={username}
                            onChange={(event) => { setUsername(event.target.value); }}
                            aria-describedby="validationServerUsernameFeedback" required />
                        {/* alert require fields */}
                        {/* <span id="validationServerUsernameFeedback" class="mt-0 invalid-feedback">
                            Please choose a username.
                        </span> */}

                        <input type='email'
                            className={objCheckValidInputs.isValidateEmail ? 'form-control' : 'form-control is-invalid'}
                            placeholder='Email address...'
                            value={email}
                            onChange={(event) => { setEmail(event.target.value); }} />

                        <input type='tel'
                            className={objCheckValidInputs.isValidatePhone ? 'form-control' : 'form-control is-invalid'}
                            placeholder='Phone number...'
                            value={phone}
                            onChange={(event) => { setPhone(formatHelpers.PhoneFormat(event.target.value, phone)); }} />

                        <input type='password'
                            className={objCheckValidInputs.isValidatePassword ? 'form-control' : 'form-control is-invalid'}
                            placeholder='New passoword...'
                            value={password}
                            onChange={(event) => { setPassword(event.target.value); }} />

                        <input type='password'
                            className={objCheckValidInputs.isValidateRePassword ? 'form-control' : 'form-control is-invalid'}
                            placeholder='Re-enter passoword...'
                            value={repassword}
                            onChange={(event) => { setRepassword(event.target.value); }} />

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