import React, { Suspense, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logoutAction } from '../../store/actions/auth';
import { useDispatch } from 'react-redux';
import { setMetaData } from '../../config/config';

const Login = React.lazy(() => import('../../components/Auth/Login'));
const Register = React.lazy(() => import('../../components/Auth/Register'));
const Forgot = React.lazy(() => import('../../components/Auth/Forgot'));
const Contact = React.lazy(() => import('../../components/Contact/Contact'));
const Reset = React.lazy(() => import('../../components/Auth/Reset'));


const HomeScreen = () => {

    useEffect(() => {
        setMetaData("Booking", "Make the most of your social traffic", "cookie, bookings247.co, cookie link, link in bio, bio link, linkinbio", "index");
    }, []);

    const user = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [valid, setValid] = useState(false);
    const navigate = useNavigate();

    const onChangeHandler = (event) => {
        dispatch({type: 'SET_USERNAME', payload:event.target.value});
        setUsername(event.target.value);
        if (event.target.value.length > 3) setValid(true);
        else setValid(false);
    }

    const navigateToRegister = (event) => {
        if (event.keyCode == 13)
            navigate('/register');
    }

    const focusUsername = () => {
        document.getElementById('username-input').focus();
    }

    const inputFocus = () => {
        document.getElementById('username-input').placeholder = "";
    }

    const inputBlur = () => {
        document.getElementById('username-input').placeholder = "username";
    }

    return <>
        <h1 className="start-desc text-mobile-center" style={{fontWeight: 700, fontSize: 60}}>Booking Site</h1>
        <h1 className="mt-3 text-secondary text-mobile-center" style={{fontWeight: 700, fontSize: 25}}>Wake Up Rentals – Jet Ski Rentals</h1>
        <div className="d-flex w-100 mt-3 start-page-input">
            {/* <div style={{borderRadius: 15, fontWeight: 700, fontSize: 20, padding: 10}} className="light-bg-color d-flex" onClick={focusUsername}>
                <span>bookings247.co/</span>
                <input id="username-input" className="transparent-input w-100" placeholder='username' value={username} onChange = {onChangeHandler} style={{width: 100, marginTop: -2}} onKeyUp={(event) => navigateToRegister(event)} onFocus={inputFocus} onBlur={inputBlur}/>
            </div> */}
            <button className="btn btn-primary px-5 ml-2" style={{borderRadius: 15, fontWeight: 700, fontSize: 20, height: 54}} to="/register" onClick={() => navigate('/register')}>
                Book Now
            </button>
        </div>
    </>;
}

const StartScreen = (props) => {
    const loggedin = useSelector(state => state.auth.loggedin);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutAction());
    }

    let display = <HomeScreen />;
    if (props.url == "login") display = <Login />
    else if (props.url == "register") display = <Register />
    else if (props.url == "forgot") display = <Forgot />
    else if (props.url == "contact") display = <Contact />
    else if (props.url == "reset") display = <Reset />

    return <Suspense fallback={<div />}><div className="row h-100 m-0 bg-white">
        <div className="col-12 col-lg-7 h-100 p-2 p-xl-5 start-container">
            <div className="d-flex justify-content-between" style={{height: 50}}>
                <Link to="/"><img className="size-50" src="/images/logo/Logo.svg"/></Link>
                <div style={{fontSize: 30}} className="text-secondary">
                    <Link className="btn btn-link text-secondary text-decoration-none" to="/contact"><h3 style={{fontWeight: 700}}>Contact</h3></Link>
                    {
                        !loggedin ? <Link className="btn btn-link text-secondary text-decoration-none" to="/login"><h3 style={{fontWeight: 700}}>Login <i className="bi bi-box-arrow-in-right"></i></h3></Link>
                                  : <button className="btn btn-link text-secondary text-decoration-none" onClick={logout}><h3 style={{fontWeight: 700}}>Logout <i className="bi bi-box-arrow-in-right"></i></h3></button>
                    }
                </div>
            </div>
            <div className="d-flex flex-column justify-content-center start-comp" style={{height: 'calc(100% - 50px)'}}>
                { display }
            </div>
        </div>
        <div className={`${props.url == "home" ? "d-flex pt-5" : "d-none"} phone-cont d-lg-flex col-12 col-lg-5 h-100 p-2 p-xl-5 d-flex justify-content-center align-items-center`} style={{backgroundColor: 'rgb(245, 246, 248)'}}>
            <img src="/images/phone.png" style={{maxWidth: "100%", maxHeight: '100%'}}/>
        </div>
    </div></Suspense>
};

export default StartScreen;
