import React, { Suspense, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const LPhoneScreen = React.lazy(() => import('../../components/PhoneScreen'));

import { updateaccountAction } from '../../store/actions/auth';
import { useToasts } from 'react-toast-notifications';
import { styleListAction } from '../../store/actions/style';
import { setMetaData } from '../../config/config';

const ColorSelector = (props) => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.auth);

    const changeStyle = () => {
        dispatch(updateaccountAction({style: props.style.id}));
    }

    return <div className={`color-selector ${props.index + 1 == user.style ? 'active': ''}`} style={{backgroundColor: props.style.background}} onClick={changeStyle}>
        {[...Array(3)].map((val, index) => <div key={'link' + index} className='link-position' style={{backgroundColor: props.style.link}}></div>)}
    </div>
}

const ColorStyle = () => {

    const user = useSelector(state => state.auth);
    const { addToast } = useToasts();
    const styles = useSelector(state => state.styles);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(styleListAction());
        setMetaData("ColorStyle - Cookie", "Change your color style");
    }, []);

    const copyLink = () => {
        let textArea = document.createElement("textarea");
        textArea.value = "bookings247.co/" + user.username;
        // make the textarea out of viewport
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();

        textArea.select();
        document.execCommand('copy');
        textArea.remove();
        addToast('Link Copied', {appearance: 'success'});
    }

    return <div className="d-flex h-100">
        <div className='w-100 d-flex flex-column bg-white home-layout color-style-container'>
            <div className="header">
                <div className="d-none d-xl-flex col-xl-7 title"><Link to="/home" className='mr-4 text-dark'><i className="bi bi-arrow-left text-dark"></i></Link>Color Style</div>
                <div className="col-12 col-xl-5 d-flex justify-content-between">
                    <span className='d-flex align-items-center'><span className='desc'>My Cookie:</span><span className='text-decoration-underline ml-2'>bookings247.co/{user.username}</span></span>
                    <a className='text-decoration-none' onClick={copyLink}>copy link</a>
                </div>
            </div>
            <div className="row w-100 links-container">
                <div className="col-12 col-xl-7 divide-light-right pr-0 scroll h-100">
                    <div className="d-flex style-container">
                        {
                            styles.map((style, index) => <ColorSelector key={index} style={style} index={index}/>)
                        }
                    </div>
                </div>
                <div className="col-12 col-xl-5 p-5 phone-container">
                    <Suspense fallback={<div />}><LPhoneScreen /></Suspense>
                </div>
            </div>
        </div>
    </div>
};

export default ColorStyle;
