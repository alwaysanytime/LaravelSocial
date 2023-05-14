import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { useDispatch } from 'react-redux';
import { registerAction } from '../../store/actions/auth';
import LoadingButton from '../LoadingButton/Button';
import { setMetaData } from '../../config/config';

const Register = (props) => {

    const user = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const [fields, setFields] = React.useState({
        email: {
            value: '',
            error: 0
        },
        password: {
            value: '',
            error: 0
        },
        username: {
            value: '',
            error: 0
        }
    })

    useEffect(() => {
        setFields({
            ...fields,
            username: {
                value: user.username,
                error: -1
            }
        })
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        let _user = {
            email: fields.email.value,
            username: fields.username.value,
            password: fields.password.value,
            follow: user.follow
        }

        const banned = ["login", "register", "admin", "settings", "setting", "profile", "analytics", "feedback", "forgot", "register"];
        const username = _user.username.toLowerCase();
        
        if (banned.indexOf(username) != -1) Swal.fire('The username already taken', '', 'error');
        else if (fields.email.error != -1 || fields.username.error != -1 || fields.password.error != -1) {
            Swal.fire('Check the error', '', 'error');
        }
        else {
            if (user.referr != "") _user = {..._user, referr: user.referr}
            dispatch(registerAction(_user));
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
        setMetaData("Signup - Cookie", "Create your Cookie account");
    }, []);

    return (
        <>
            <form onSubmit={handleSubmit}>
            <div className="d-flex align-items-center"><h1>Create An Account👋</h1></div>
            <Input title="username" inputChangeHandler = {inputChangeHandler} value={fields.username.value}/>
            <Input title="email" inputChangeHandler = {inputChangeHandler} />
            <Input title="password" inputChangeHandler = {inputChangeHandler} />
            <div className="mt-3 text-secondary"><span>By creating an account you are agreeing to our </span><span className="text-decoration-underline text-black">Terms and Conditions</span></div>
            <LoadingButton onClick={handleSubmit} title="Sign Up"/>
            </form>
            <div className="divider mt-3" />
            <div className="d-flex justify-content-center mt-3">
                <Link to="/login" className="text-secondary text-decoration-none">Already have an account?</Link>
            </div>
        </>
    )
};

export default Register;