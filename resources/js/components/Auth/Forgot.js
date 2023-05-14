import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import Input from '../Input/Input';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import LoadingButton from '../LoadingButton/Button';
import { setMetaData } from '../../config/config';
import ReCaptchaV2 from 'react-google-recaptcha';

const Forgot = (props) => {

    const [sent, setSent] = useState(false);

    const [fields, setFields] = React.useState({
        email: {
            value: '',
            error: 0
        },
    })

    const [count, setCount] = useState(0);
    const [token, setToken] = useState("");

    const handleToken = (_token) => {
        setToken(_token);
    }

    const handleExpire = () => {
        setToken("");
    }

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (fields.email.error != -1) {
            Swal.fire('Check the error', '', 'error');
        }
        else if (count >= 3 && token == "") dispatch({type: 'ADD_MESSAGE', payload: {appearance: 'error', content: 'You have to solve the captcha'}});
        else {
            setSent(false);
            dispatch({type: 'START_LOADING'});
            setCount(count+1);
            axios.post("/forgot", {email: fields.email.value})
                .then(res => {
                    setSent(true);
                    dispatch({type: 'STOP_LOADING'});
                });
        }
    }

    const inputChangeHandler = (field, value, error) => {
        setFields({
            ...fields,
            [field]: {
                value,
                error
            }
        })
    }

    useEffect(() => {
        setMetaData("Forgot Password - Cookie", "Send Email If you forgot your password");
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <div className="d-flex align-items-center"><h1>Forgot Your Password</h1></div>
            <Input title="email" inputChangeHandler = {inputChangeHandler} />
            {
                sent ? <div className="mt-2 mb-2" style={{color: "rgb(91, 135, 70)"}}>If this email address exists we will send an email to it. Please check the spam folders.</div> : ''
            }
            {
                count > 2 ? <div className="d-flex justify-content-center m-4">
                    <ReCaptchaV2 sitekey="6LefPncgAAAAAKIUIUGkRQbQhU_NKfo1sOAXV949"
                        onChange={handleToken}
                        onExpire={handleExpire} />
                </div> : ''
            }
            <LoadingButton onClick={handleSubmit} title="Submit"/>
        </form>
    )
};

export default Forgot;