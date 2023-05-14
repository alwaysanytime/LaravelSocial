import React, { Suspense, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { logoutAction } from '../../store/actions/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { updateaccountAction, updatePasswordAction } from '../../store/actions/auth';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { setMetaData } from '../../config/config';
const Modal = React.lazy(() => import('../../components/Modal/Modal'));

const Setting = (props) => {

    const user = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [fields, setFields] = useState({
        username: '',
        email: '',
        oldpassword: '',
        newpassword: '',
        confirmpassword: ''
    });

    const deleteAccount = () => {
        axios.post('/delete')
            .then(res => {
                dispatch({type: 'LOGOUT'});
            })
    }

    useEffect(() => {
        setFields({
            ...fields,
            username: user.username,
            email: user.email
        })
    }, [user]);

    useEffect(() => {
        setMetaData("Settings - Cookie", "Settings Page");
    }, []);

    const logout = () => {
        dispatch(logoutAction());
    }

    const updateAccount = () => {
        dispatch(updateaccountAction({username: fields.username, email: fields.email}));
    }

    const updatePassword = () => {
        dispatch(updatePasswordAction({oldpassword: fields.oldpassword, newpassword: fields.newpassword}));
    }

    const changeHandler = (event) => {
        event.preventDefault();
        setFields({
            ...fields,
            [event.target.id]: event.target.value
        })
    }

    const [modal ,setModal] = useState(false);

    return <Suspense fallback={<div />}><div className="d-flex h-100">
        <div className='d-flex flex-column w-100 h-100 bg-white scroll home-layout'>
            <div className="col-12 col-xl-7 divide-light-right p-0 h-100 d-flex flex-column">
                <div className="settings-header">
                    <div>Settings</div>
                    <button onClick={logout}>Logout <i className="bi bi-box-arrow-right"></i></button>
                </div>
                <div className='d-flex d-lg-none feedback-link'>
                    <Link to="/feedback"><i className="bi bi-chat-left-text"></i> <span style={{fontSize: 16}}>Feedback</span></Link>
                </div>
                <div className='d-flex feedback-link'>
                    <Link to="/settings/emailnotification"><i className="bi bi-envelope"></i> <span style={{fontSize: 16}}>Email Notifications</span></Link>
                </div>
                <div className='settings-content'>
                    <div className='panel'>
                        <div className='account-information-header'>Account Information</div>
                        <div className="form-field">
                            <label>Username</label>
                            <input className='form-control' value={fields.username} id="username" onChange={changeHandler}/>
                        </div>
                        <div className="form-field">
                            <label>Email</label>
                            <input className='form-control' value={fields.email} id="email" onChange={changeHandler}/>
                        </div>
                        <button className="gray-button mt-3" onClick={updateAccount}>Save Details</button>
                    </div>
                    <div className='panel mt-3'>
                        <div className='account-information-header'>Change Password</div>
                        <div className="form-field">
                            <label>Old Password</label>
                            <input className='form-control'  id="oldpassword" onChange={changeHandler} type="password"/>
                        </div>
                        <div className="form-field">
                            <label>New Password</label>
                            <input className='form-control' id="newpassword" onChange={changeHandler} type="password"/>
                        </div>
                        <div className="form-field">
                            <label>Confirm Password</label>
                            <input className='form-control' id="confirmpassword" onChange={changeHandler} type="password"/>
                        </div>
                        <button className="gray-button mt-3" onClick={updatePassword}>Update Password</button>
                    </div>
                    <button className="gray-button mt-5" onClick={() => setModal(true)}>Delete Account</button>
                    <Modal visible={modal} hideModal={() => setModal(false)}>
                        <div className='d-flex flex-column bg-white p-5 fade-in-down' style={{width: 300, borderRadius: 20}}>
                            <h3 className="text-center text-black" style={{fontWeight: 700}}>Delete account?</h3>
                            <h5 className="text-muted mt-3">Are you sure you want to delete the account? This can't be undone.</h5>
                            <button className="btn bg-dark text-white border font-bold mt-3 mb-3" style={{borderRadius: 50}} onClick={() => setModal(false)}>Cancel</button>
                            <button className="btn btn-outline-dark font-bold" onClick={deleteAccount} style={{borderRadius: 50}}>Yes Delete My Account</button>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    </div></Suspense>
};

export default Setting;