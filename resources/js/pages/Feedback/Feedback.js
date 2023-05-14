import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useToasts } from 'react-toast-notifications';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { setMetaData } from '../../config/config';
import { useNavigate } from 'react-router';

const Feedback = (props) => {

    useEffect(() => {
        setMetaData("Feedback - Cookie", "Write Feedback");
    }, []);

    const feedbackRef = React.useRef();
    const dispatch = useDispatch();
    const { addToast } = useToasts();
    const messages = useSelector(state => state.messages);

    const sendFeedback = () => {
        dispatch({type: 'START_LOADING'});
        axios.post('/feedback/add', {feedback: feedbackRef.current.value})
            .then(res => {
                if (res.status == 200) addToast('Feedback added successfully', {appearance: 'success'});
                else addToast(res.message, {appearance: 'error'});
                dispatch({type: 'STOP_LOADING'});
            });
    }

    const [length, setLength] = useState(0)

    const onChange = (event) => {
        setLength(event.target.value.length);
    }

    const navigate = useNavigate();

    return <div className="d-flex h-100">
        <div className='d-flex flex-column w-100 h-100 bg-white home-layout'>
            <div className="col-12 col-lg-7 divide-light-right p-0 h-100">
                <div className="settings-header">
                    <div>
                        <a onClick={() => navigate(-1)} className='mr-4 text-dark'><i className="bi bi-arrow-left text-dark"></i></a>
                        Feedback
                    </div>
                </div>
                <div className='feedback-content'>
                    <div>Do you have a question or feature suggestion? Get in touch!</div>
                    <div className='position-relative w-100'>
                        <textarea rows={10} ref={feedbackRef} onChange={onChange} style={{resize: 'none'}} maxLength={2000}></textarea>
                        <div className='position-absolute' style={{right: 10, bottom: 10}}>
                            {length} / 2000
                        </div>
                    </div>
                    <button className="btn btn-primary light-blue-button" onClick={sendFeedback}>Send</button>
                </div>
            </div>
        </div>
    </div>
};

export default Feedback;