import React, { Suspense, useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

import { setMetaData } from '../../config/config';
import axios from 'axios';
import { useDispatch } from 'react-redux';
const LPhoneScreen = React.lazy(() => import('../../components/PhoneScreen'));
const LNotFound = React.lazy(() => import('../../components/NotFound'));

const Profile = (props) => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: '',
        bio: '',
        display: '',
    });
    const [links, setLinks] = useState([]);
    const {username} = useParams();
    const current = useSelector(state => state.auth);
    const [error, setError] = useState(false);
    const [id, setId] = useState(-1);

    const token = localStorage.getItem('token');
    document.body.style.paddingBottom = '0px';
    if(window.innerWidth <= 1024 && token) document.body.style.paddingBottom = '40px';

    useEffect(() => {
        axios.post('/getUserData', {username})
            .then(res => {
                if (res.status == 200) {
                    const _user = res.data.user;
                    if (res.data.user.username != current.username &&(!res.data.user.email_verified_at || !res.data.user.enable || res.data.user.deleted))
                        setError(true);
                    setMetaData(_user.display + " (@"+username+") - Cookie", _user.bio, `${username} Instagram, ${username} twitter, ${username} tiktok, ${username} website`, "index");
                    setUser({...res.data.user});
                    let _links = [];
                    Object.keys(res.data.links).map(key => [..._links, res.data.links[key]]);
                    setLinks([...res.data.links]);
                    
                    if (_user.username != current.username && !error) {
                        axios.post('/addhistory', {username: _user.username})
                            .then(res => {
                                setId(res.data.id)
                            })
                    }
                } else setError(true);
            });
    }, [current.username]);

    const linkVisit = (link) => {
        if (id != -1)
            axios.post('/click', {link, id, username});
    }

    const dispatch = useDispatch();

    const goHome = () => {
        dispatch({type: 'TOGGLE_BOTTOM'});
        navigate("/home");
    }

    return <div className="d-flex h-100">
        <div className='d-flex flex-column w-100 h-100 bg-white scroll home-layout' id="profile-content" style={{marginLeft: current.loggedin ? 400 : 0}}>
            <div className={`col-12 ${current.loggedin ? 'col-xl-7' : ''} divide-light-right p-0 h-100 d-flex flex-column`}>
                {current.loggedin ? <div className="profile-header w-100">
                    <div>{ username != current.username ? <a onClick={() => navigate(-1)} className='mr-4 text-dark'><i className="bi bi-arrow-left text-dark"></i></a> : ""}{username}</div>
                    {current.username == username ? <button onClick={() => goHome()}>Edit Profile</button> : ''}
                </div> : ''}
                <div className='d-flex justify-content-center w-100' style={{paddingTop: 0, height: !current.loggedin ? "100%" : "calc(100% - 70px)"}}>
                    <Suspense fallback={<div />}>
                        {error ? <LNotFound /> : <LPhoneScreen user={user} links={links} noborder fullscreen profile visit={linkVisit}/>}
                    </Suspense>
                </div>
            </div>
        </div>
    </div>
};

export default Profile;