import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Avatar from '../Avatar/Avatar';
import styled from 'styled-components';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Modal from '../Modal/Modal';
import { followUserAction, unfollowUserAction } from '../../store/actions/follow';

const social = [
    {name: 'bi bi-twitter', include: "twitter.com"},
    {name: 'bi bi-instagram', include: "instagram.com"},
    {name: 'bi bi-facebook', include: "facebook.com"},
    {name: 'bi bi-reddit', include: "reddit.com"},
    {name: 'bi bi-snapchat', include: "snapchat.com"},
    {name: 'bi bi-tiktok', include: "tiktok.com"},
    {name: 'bi bi-discord', include: "discord.com"},
    {name: 'bi bi-linkedin', include: "linkedin.com"},
    {name: 'bi bi-spotify', include: "spotify.com"},
    {name: 'bi bi-youtube', include: "youtube.com"},
    {name: 'fa-brands fa-tumblr', include: "tumblr.com"},
    {name: 'bi bi-telegram', include: "telegram.org"},
    {name: 'bi bi-telegram', include: "telegram.me"},
    {name: 'bi bi-telegram', include: "t.me"},
    {name: 'bi bi-skype', include: "skype.com"},
];

const PhoneScreen = (props) => {

    const _links = useSelector(state => state.links);
    const _user = useSelector(state => state.auth);
    let user = _user;
    let links = _links;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    if ('user' in props) user = props.user;
    if ('links' in props) links = props.links;

    const phonestyle = useSelector(state => state.styles);
    let style = phonestyle.find(style => style.id == user.style);
    if (!style) style = {
        background: 'white',
        link: 'white',
        color: 'white',
        linkColor: 'black',
        buttonborder: 'black',
        buttonhover: 'blue'
    };
    const [height, setHeight] = useState(720);
    const [width, setWidth] = useState(380);

    useEffect(() => {
        if('fullscreen' in props) {
            setHeight('100%');
            setWidth('100%');
        }
    }, []);
    const Link = styled.a`
        background: ${style.link};
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${style.linkColor} !important;
        border-radius: 20px;
        padding: 15px;
        border: 1px solid ${style.buttonborder};
        text-align: center;
        font-size: 15px;
        font-weight: 600;
        &:hover {
            background-color: ${style.buttonhover};
        }
    `;

    const SocialLink = styled.a`
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${style.color} !important;
        border-radius: 5px;
        text-align: center;
        width: 50px;
        height: 50px;
        margin: 5px;
        font-size: 30px;
    `;
    
    useEffect(() => {
        // const width = document.getElementById('container').innerWidth;
        // console.log(width);
    }, []);

    const openWin = (event, url) => {
        event.preventDefault();
        if ('visit' in props)
            props.visit(url);
        window.open(url);
    }

    const displayLink = (link, index) => {
        const _link = social.reduce((prev, cur, index) => (!link.url || link.url.indexOf(cur.include) == -1) ? prev : index, -1);
        if (_link != -1 && user.social == 1) return '';
         return <Link className="link" key={'link' + index} target="_blank" href={link.mask ? '' : link.url} onClick={(event) => openWin(event, link.url)} style={{paddingLeft: _link != -1 ? 60 : 15, paddingRight: _link != -1 ? 60 : 15}}>
                { 
                    _link != -1 && user.showsocial ? <i className={social[_link].name}></i> : ''
                }
                <span>{link.title}</span>
            </Link>;
    }

    const randstr = () => {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            for (let i = 0; i < 64; i++ )
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
           return result;
    }

    const displaySocial = (link) => {
        const _link = social.reduce((prev, cur, index) => (link.url && link.url.indexOf(cur.include) == -1) ? prev : index, -1);
        if (_link == -1) return;
        return <SocialLink href={link.mask ? randstr() : link.url} onClick={(event) => openWin(event, link.url)}><i className={`${social[_link].name}`}></i></SocialLink>
    }

    const setReferer = () => {
        dispatch({type: 'SET_REFERR', payload: user.username});
    }

    const follow = () => {
        const follow = user.username;
        dispatch({type: 'SET_FOLLOW', payload: follow});
    }

    const followWithLogin = () => {
        follow();
        navigate('/login');
    }

    const followWithRegister = () => {
        follow();
        navigate('/register');
    }

    const followers = useSelector(state => state.follow.following);
    const {username} = useParams();
    let text = "Follow";
    const index = followers.findIndex(follow => follow.username == username);
    if (index != -1 && username != _user.username) text="Following";
    const FollowButton = styled.button`
        background: ${text == "Follow" ? style.followbutton : style.followingbutton};
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${text == "Follow" ? style.followbuttonfont : style.followingbuttonfont} !important;
        border-color: ${text == "Follow" ? style.followbuttonborder : style.followingbuttonborder};
        border-radius: 10px;
        text-align: center;
        width: 50px;
        height: 50px;
        margin: 5px;
        font-size: 15px;
        width: 120px;
        borderRadius: 10px;
        padding: 0;
        height: 40px;
        &:before {
            content: "${text}";
        }
        &:hover {
            background: ${text == "Follow" ? style.followbuttonhover : style.followingbuttonhover};
            &:before {
                content: "${text == "Follow" ? text : "Unfollow"}";
            }
        }
    `;
    const isLoading = useSelector(state => state.auth.isLoading);

    const showFollow = () => {
        if (!_user.loggedin)
            setFollowModal(true);
        else  if (username && username != "") {
            if (text=="Follow") dispatch(followUserAction(username));
            else {
                setUnfollowModal(true);
            }
        }
    }

    const unfollowUser = () => {
        dispatch(unfollowUserAction(username));
        setUnfollowModal(false);
    }

    const [followModal, setFollowModal] = useState(false);
    const [unfollowModal, setUnfollowModal] = useState(false);

    return <div className="d-flex flex-column align-items-center w-100 h-100 justify-content-center">
        <div style={{maxHeight: height, width: width, border: !('noborder' in props) ? '20px solid' : '', borderRadius: !('fullscreen' in props) ? 50 : 0, backgroundColor: style.background, paddingBottom: (_user.loggedin ? 0 : 20)}} className={`d-flex flex-column align-items-center h-100 scroll ${'profile' in props ? 'pt-4' : 'pt-3'}`}>
            <Modal visible={followModal} hideModal={() => setFollowModal(false)}>
                <div className='d-flex flex-column bg-white p-5 fade-in-down position-relative' style={{width: 500, borderRadius: 20}}>
                    <button type="button" className="close white position-absolute" aria-label="Close" onClick={props.hide} style={{top: 30, left: 30}}>
                        <span aria-hidden="true" className="text-black" style={{fontSize: 25}} onClick={()=>setFollowModal(false)}>&times;</span>
                    </button>
                    <div className='d-flex justify-content-center w-100 mb-3'><Avatar username={user.username} avatar={user.avatar}/></div>
                    <h3 className="text-center" style={{fontWeight: 700}}>Follow @{user.username} to stay updated</h3>
                    <div className="d-flex flex-column align-items-center">
                        <button className="btn btn-primary bold mb-2 mt-2 w-50 p-3" onClick={followWithRegister} style={{borderRadius: 50}}>Sign Up</button>
                        <button className="btn btn-outline-dark bold text-black border w-50 p-3 hover-white" onClick={followWithLogin} style={{borderRadius: 50}}>Log In</button>
                    </div>
                </div>
            </Modal>
            <Modal visible={unfollowModal} hideModal={() => setUnfollowModal(false)}>
                <div className='d-flex flex-column bg-white p-5 fade-in-down position-relative' style={{width: 500, borderRadius: 20}}>
                    <button type="button" className="close white position-absolute" aria-label="Close" onClick={props.hide} style={{top: 30, left: 30}}>
                        <span aria-hidden="true" className="text-black" style={{fontSize: 25}} onClick={()=>setUnfollowModal(false)}>&times;</span>
                    </button>
                    <div className='d-flex justify-content-center w-100 mb-3'><Avatar username={user.username} avatar={user.avatar}/></div>
                    <h3 className="text-center" style={{fontWeight: 700}}>Unfollow @{user.username}?</h3>
                    <div className="d-flex flex-column align-items-center">
                        <button className="btn btn-danger bold mb-2 mt-2 w-50 p-3" onClick={unfollowUser} style={{borderRadius: 50}}>Unfollow</button>
                        <button className="btn btn-outline-dark bold text-black border w-50 p-3 hover-white" onClick={() => setUnfollowModal(false)} style={{borderRadius: 50}}>Cancel</button>
                    </div>
                </div>
            </Modal>
            <div className={`d-flex align-items-center flex-column col-12 ${'profile' in props ? (_user.loggedin ? 'col-10 col-xl-9' : 'col-md-10 col-xl-6') : ''}`} id="container" style={{minHeight: "calc(100% - 50px)", paddingBottom: 10}}>
                <Avatar avatar={user.avatar} username={user.username} />
                <div className="text-center mt-3" style={{fontSize: 16, color: style.color}}>
                    {user.display != "My Name" ? <div style={{fontSize: 20, fontWeight: 700}} className="mt-n2 c-center">{user.display}{user.badge ? <img src="/images/badge.svg" className="badge-image ml-1" /> : ''}</div> : "" }
                    <div>@{user.username}</div>
                    {user.bio != "My Bio" ? <div>{user.bio}</div>: ""}
                </div>
                {
                    user.showfollow && username != _user.username ? <FollowButton className='btn mt-3 bold' onClick={showFollow} disabled={isLoading}></FollowButton> : ''
                }
                {user.social && user.showsocial ? <div className='d-flex flex-wrap justify-content-center align-items-center mt-3'>
                    {links.map(link => link.enable && link.title != "Title" && link.title != null && link.title != "" ? displaySocial(link) : '')}
                </div> : ''}
                <div className='w-100 p-2 mt-3 d-flex flex-column'>
                    <div className='d-flex flex-column justify-content-center mobile-links-container w-100'>
                        {
                            links.map((link, index) => link.enable && link.title != "Title" && link.title != null && link.title != "" ? displayLink(link, index) : "")
                        }
                    </div>
                </div>
            </div>
            {
                "profile" in props ? 
                        (
                            !_user.loggedin ?
                        <div className="d-flex mt-2 justify-content-center  ">
                            <NavLink to="/" onClick={setReferer}><img src="/images/logo/LogoBlack.png" style={{width: 40, height: 40, margin: 'auto'}}/></NavLink>
                        </div> : ''
                        )
                    : <div className="d-flex mt-2 justify-content-center">
                        <img src="/images/logo/LogoBlack.png" style={{width: 40, height: 40, margin: 'auto'}}/>
                    </div>
                }
        </div>
    </div>
};

export default PhoneScreen;