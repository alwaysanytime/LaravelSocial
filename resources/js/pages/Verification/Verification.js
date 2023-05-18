import React, {useState, useEffect, Suspense} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Avatar = React.lazy(() => import('../../components/Avatar/Avatar'));
import { useDispatch } from 'react-redux';

const Vericiation = (props) => {

    const user = useSelector(state => state.auth);
    const followers = useSelector(state => state.follow.follower.length);

    const [links, setLinks] = useState({link1: '', link2: ''});
    const dispatch = useDispatch();

    const changeHandler = (event) => {
        setLinks({...links, [event.target.id]: event.target.value});
    }

    const [status, setStatus] = useState("");

    useEffect(() => {
        axios.post('/get-verified')
            .then(res => {
                if (res.status == 200) {
                    setStatus(res.data);
                }
            })
    }, []);

    const verify = () => {
        if (links.link1.length == 0 || links.link2.length == 0) return dispatch({type: 'ADD_MESSAGE', payload: {appearance: 'error', content: 'Please add 2 links'}});
        if (followers < 500) return dispatch({type: 'ADD_MESSAGE', payload: {appearance: 'error', content: 'You need at least 500 followers'}});
        axios.post('/verifyuser', {link1: links.link1, link2: links.link2})
            .then(res => {
                if (res.status == 200) {
                    dispatch({type: 'ADD_MESSAGE', payload: {appearance: 'success', content: 'Request sent successfully'}});
                    setStatus("Waiting");
                }
                else dispatch({type: 'ADD_MESSAGE', payload: {appearance: 'error', content: 'Error while sending request'}});
            })
    }

    const mainlayout = <>
        <div className='gray-5 mt-3'>
            Help prevent identity and content theft by having a verified home on the internet.
        </div>
        <div className='gray-5 mt-3 divide-light-bottom pb-3'>
            Verified accounts get a number of benefits including dedicated support, showing top of suggested users, protection against any automated profile bans and much more.
        </div>
        <div className="mt-3">
            In order to verify your account, please share a link to (at least) two other online accounts of yours that show a link to <a href={`https://bookings247.co/${user.username}`} className="text-muted text-decoration-underline">bookings247.co/{user.username}</a>
        </div>
        <div className="p-2 light-bg-color w-100 custom-input position-relative text-left mt-2">
            <div className="title text-secondary text-left">Link1</div>
            <input className="w-100" type="text" onChange = {changeHandler} name={props.title} defaultValue={props.value} id="link1"/>
        </div>
        <div className="p-2 light-bg-color w-100 custom-input position-relative text-left mt-2">
            <div className="title text-secondary text-left">Link2</div>
            <input className="w-100" type="text" onChange = {changeHandler} name={props.title} defaultValue={props.value} id="link2"/>
        </div>
        <div className="mt-4 d-flex justify-content-between w-100">
            <h6 className="bold">Have at least 500 followers.</h6>
            <h6>{followers} / 500</h6>
        </div>
        <div className="mt-3">
            <div className="text-muted">
                Please note, as cookie continues to grow, the minimum required followers required to get verified will increase.
            </div>
            <div className='w-100 mt-2'>
                <button className="w-100 btn btn-primary p-2 bold" onClick={verify}>Get Verified</button>
            </div>
        </div>
    </>;

    return <Suspense fallback={<div />}><div className="d-flex h-100">
        <div className='w-100 d-flex flex-column bg-white home-layout color-style-container h-100 scroll '>
            <div className="settings-header col-xl-7">
                <div className="title divide-light-right"><Link to="/home" className='mr-4'><i className="bi bi-arrow-left text-dark"></i></Link>Verification</div>
            </div>
            <div className="row w-100 verification-container h-100">
                <div className="col-12 col-xl-7 divide-light-right pr-0 d-flex align-items-center flex-column pt-1 verification-content">
                    <Avatar username={user.username} avatar={user.avatar} />
                    <h4 className="text-muted mt-3 c-center">@{user.username} <img src="/images/badge.svg" className='badge-image ms-2' /></h4>
                    <h3 className='bold'>Get your blue tick!</h3>
                    {console.log(user)}
                    {status == "" || status == "Deny" || user.verified != 1 ? mainlayout : (status == "Waiting" ? <h3>Your application is pending admin approval.</h3> : <h3>Admin approved your verifcation.</h3>)}
                </div>
            </div>
        </div>
    </div></Suspense>
};

export default Vericiation;
