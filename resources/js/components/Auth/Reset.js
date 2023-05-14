import React, { useEffect, useRef } from 'react';
import Input from '../Input/Input';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useParams } from 'react-router';
import LoadingButton from '../LoadingButton/Button';
import { setMetaData } from '../../config/config';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

const Reset = (props) => {

    const [fields, setFields] = React.useState({
        password: {
            value: '',
            error: 0
        },
    })

    const {token} = useParams();
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (fields.password.error != -1) {
            Swal.fire('Check the error', '', 'error');
        }
        else {
            dispatch({type: 'START_LOADING'});
            axios.post("/reset", {token, password:fields.password.value})
                .then(res => {
                    dispatch({type: 'ADD_MESSAGE', payload: {appearance: 'success', content: 'Password reset successfully'}});
                    dispatch({type: 'STOP_LOADING'});
                    navigate('/login');
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
            <div className="d-flex align-items-center"><h1>Add Your New Password</h1></div>
            <Input title="password" inputChangeHandler = {inputChangeHandler} />
            <LoadingButton onClick={handleSubmit} title="Reset"/>
        </form>
    )
};

export default Reset;