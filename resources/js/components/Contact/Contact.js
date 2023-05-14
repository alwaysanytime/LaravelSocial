import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useToasts } from 'react-toast-notifications';
import { useDispatch } from 'react-redux';
import Input from '../Input/Input';
import { setMetaData } from '../../config/config';
import LoadingButton from '../LoadingButton/Button';
import ReCaptchaV2 from 'react-google-recaptcha';

const Contact = (props) => {

    useEffect(() => {
        setMetaData("Contact - Cookie", "Write Feedback");
    }, []);

    const feedbackRef = React.useRef();
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

    const sendFeedback = () => {
        const feedback = feedbackRef.current.value;
        if (fields.email.error != -1 || feedback.length < 5) {
            addToast("Check the inputs", {appearance: 'error'});
            return;
        }
        if (count >= 3 && token == "") {
            dispatch({type: 'ADD_MESSAGE', payload: {appearance: 'error', content: 'You have to solve the captcha'}});
            return;
        } 
        setCount(count+1);
        dispatch({type: 'START_LOADING'});
        axios.post('/feedback/add', {feedback, email: fields.email.value})
            .then(res => {
                feedbackRef.current.value = "";
                if (res.status == 200) addToast('Feedback added successfully', {appearance: 'success'});
                else addToast(res.message, {appearance: 'error'});
                dispatch({type: 'STOP_LOADING'});
            });
    }

    const [length, setLength] = useState(0)

    const onChange = (event) => {
        setLength(event.target.value.length);
    }

    const [fields, setFields] = React.useState({
        email: {
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

    return <div className="d-flex h-100">
        <div className='d-flex flex-column w-100 h-100 bg-white'>
            <div className="col-12 p-0 h-100">
                <div className="d-flex align-items-center mt-5"><h1>Contact</h1></div>
                <div className='feedback-content p-0 mt-0'>
                    <div className="text-left w-100">Do you have a question or feature suggestion? Get in touch!</div>
                    <div className='w-100 mb-3'>
                        <Input title="email" inputChangeHandler = {inputChangeHandler}/>
                    </div>
                    <div className='position-relative w-100 mt-1'>
                        <textarea className="mt-0 pt-2" rows={10} ref={feedbackRef} onChange={onChange} style={{resize: 'none', background: '#f5f6f8'}} maxLength={2000} placeholder="message"></textarea>
                        <div className='position-absolute' style={{right: 10, bottom: 10}}>
                            {length} / 2000
                        </div>
                    </div>
                    {
                        count > 2 ? <div className="d-flex justify-content-center m-4">
                            <ReCaptchaV2 sitekey="6LefPncgAAAAAKIUIUGkRQbQhU_NKfo1sOAXV949"
                                onChange={handleToken}
                                onExpire={handleExpire} />
                        </div> : ''
                    }
                    <LoadingButton title="Submit" onClick={sendFeedback}/>
                </div>
            </div>
        </div>
    </div>
};

export default Contact;