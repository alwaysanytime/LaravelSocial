import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import { useNavigate } from 'react-router';
import { loginAction } from '../../store/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import LoadingButton from '../LoadingButton/Button';
import { setMetaData } from '../../config/config';
import ReCaptchaV2 from 'react-google-recaptcha';

const Login = (props) => {

    let navigate = useNavigate();
    const dispatch = useDispatch();

    const { addToast } = useToasts();
    const [count, setCount] = useState(0);
    const [token, setToken] = useState("");

    const handleToken = (_token) => {
        setToken(_token);
    }

    const handleExpire = () => {
        setToken("");
    }

    const user = useSelector(state => state.auth);

    const [fields, setFields] = React.useState({
        email: {
            value: '',
            error: 0
        },
        password: {
            value: '',
            error: 0
        },
    });

    const inputChangeHandler = (field, value, error) => {
        setFields({
            ...fields,
            [field]: {
                value,
                error
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const _user = {
            email: fields.email.value,
            password: fields.password.value,
            follow: user.follow
        }
        if (fields.email.error != -1 || fields.password.error != -1)
            dispatch({type: 'ADD_MESSAGE', payload: {appearance: 'error', content: 'Some fields are invalid'}});
        // else if (count >= 3 && token == "") dispatch({type: 'ADD_MESSAGE', payload: {appearance: 'error', content: 'You have to solve the captcha'}});
        else {
            dispatch(loginAction(_user));
        }
        setCount(count + 1);
    }

    useEffect(() => {
        setMetaData("Login - Cookie", "Log in to your Cookie account");
    }, []);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="d-flex align-items-center"><h1>Login</h1></div>
                <Input title="email" inputChangeHandler = {inputChangeHandler}/>
                <Input title="password" inputChangeHandler = {inputChangeHandler}/>
                {
                    count > 10 ? <div className="d-flex justify-content-center m-4">
                        <ReCaptchaV2 sitekey="6LefPncgAAAAAKIUIUGkRQbQhU_NKfo1sOAXV949"
                            onChange={handleToken}
                            onExpire={handleExpire} />
                    </div> : ''
                }
                <LoadingButton title="Login"/>
            </form>
            <div className="d-flex justify-content-center mt-2">
                <Link to="/forgot">Forgot Password?</Link>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <span className="text-secondary mr-1">Don't an account? </span> <Link to="/register" className="text-black">Create One</Link>
            </div>
        </>
    )
};

export default Login;
