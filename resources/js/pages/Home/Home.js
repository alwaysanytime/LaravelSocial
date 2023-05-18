import React, { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { linkListAction, addLinkAction, updateLinkAction, removeLinkAction, toggleLinkAction, swapLinkAction, toggleMaskAction } from '../../store/actions/link';
import { toggleCompactAction, toggleSocialAction, updateaccountAction, verificationAction } from '../../store/actions/auth';
import { uploadAction } from '../../store/actions/auth';
import { setMetaData } from '../../config/config';
import ReactTooltip from 'react-tooltip';
import { cutAmazonTag } from '../../config/config';

const ReactAvatarEditor = React.lazy(() => import('../../components/ReactAvatarEditor/ReactAvatarEditor'));
const LoadingButton = React.lazy(() => import('../../components/LoadingButton/Button'));
const Avatar = React.lazy(() => import('../../components/Avatar/Avatar'));
const Modal = React.lazy(() => import('../../components/Modal/Modal'));
const PhoneScreen = React.lazy(() => import('../../components/PhoneScreen'));
const Edit = React.lazy(() => import('../../components/Edit/Edit'));

const Home = () => {

    const links = useSelector(state => state.links);
    const user = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addNewLink = () => {
        dispatch(addLinkAction());
    }

    const updateLinkTitle = (text, link) => {
        dispatch(updateLinkAction(link.id, text, link.url));
    }

    const updateLinkUrl = (text, link) => {
        dispatch(updateLinkAction(link.id, link.title, text));
    }

    const removeLink = () => {
        dispatch(removeLinkAction(linkid));
        setDeleteModal(false);
    }

    const toggleLink = (id) => {
        dispatch(toggleLinkAction(id));
    }

    useEffect(() => {
        dispatch(linkListAction());
    }, []);

    const updateAccount = (field, value) => {
        dispatch(updateaccountAction({[field]: value}));
    }

    const handleOnDragEnd = (result) => {
        const from = links[result.source.index].id;
        const to = links[result.destination.index].id;
        dispatch(swapLinkAction({from, to, _from: result.source.index, _to: result.destination.index}));
    }

    const sendVerification = () => {
        dispatch(verificationAction());
    }

    const uploadAvatar = () => {
        document.getElementById('profile-avatar').click();
    }

    const imageSelect = (event) => {
        setAvatar(event.target.files[0]);
        setAvatarModal(true);
    }

    const readImage = (avatar) => {
        dispatch(uploadAction({avatar}));
    }

    const [avatar, setAvatar] = useState(null);
    const [deleteModal, setDeleteModal] = useState(false);
    const [linkid, setLinkId] = useState(-1);
    const [emailAlert, setEmailAlert] = useState([]);

    const showModal = (id) => {
        setLinkId(id);
        setDeleteModal(true);
    }

    const { addToast } = useToasts();

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

    const toBottom = useSelector(state => state.follow.bottom);

    useEffect(() => {
        setMetaData("Home - Cookie", "Cookie Home page");
        if (toBottom) {
            const objDiv = document.getElementById("home-scroll");
            objDiv.scrollTop = objDiv.scrollHeight;
            dispatch({type: 'TOGGLE_BOTTOM'});
        }
    }, []);

    const [maskV, setMaskV] = useState([]);

    useEffect(() => {
        let _maskV = [...Array(links.length)];
        _maskV.fill(false);
        setMaskV(_maskV);
        setEmailAlert([..._maskV]);
    }, [links.length]);

    const showMask = (index) => {
        const _maskV = maskV.map((val, _index) => index == _index ? !val : false);
        setMaskV([..._maskV]);
        hideEmail();
    }

    const hideMask = (index) => {
        let _maskV = [...Array(links.length)];
        _maskV.fill(false);
        setMaskV(_maskV);
    }

    const showEmail = (index) => {
        const _maskV = emailAlert.map((val, _index) => index == _index ? !val : false);
        setEmailAlert([..._maskV]);
        hideMask();
    }

    const hideEmail = (index) => {
        let _maskV = [...Array(links.length)];
        _maskV.fill(false);
        setEmailAlert(_maskV);
    }

    const toggleMask = (index) => {
        dispatch(toggleMaskAction(index));
    }

    const toggleSocial = () => {
        dispatch(toggleCompactAction());
    }

    const toggleSocialView = () => {
        dispatch(toggleSocialAction());
    }

    const toggleShowFollow = () => {
        dispatch(toggleSocialAction('showfollow'));
    }

    const toggleBadge = () => {
        if (user.verified == 1) dispatch(toggleSocialAction('badge'));
        else navigate('/verification');
    }

    const [avatarModal, setAvatarModal] = useState(false);

    const [emailModal, setEmailModal] = useState(false);

    const [currentLink, setCurrentLink] = useState(-1);

    const sendEmail = (index) => {
        setCurrentLink(index);
        setEmailModal(true);
    }

    const sendEmailRequest = () => {
        setEmailModal(false);
        const index = currentLink;
        axios.post('/sendemail', {id: links[index].id})
            .then(res => {
                if (res.status == 200) {
                    dispatch({type: 'ADD_MESSAGE', payload: {appearance: 'success', content: 'Email Sent Successfully'}});
                    dispatch({type: 'MESSAGE_SEND', payload: index});
                }
                else dispatch({type: 'ADD_MESSAGE', payload: {appearance: 'error', content: 'Error while sending emails'}});
            });
    }

    const closeAlert = () => {
        toggleSocialAction('suggest');
    }

    return <Suspense fallback={<div />} ><div className="d-flex h-100 home-container">
        <ReactAvatarEditor avatar = {avatar} visible={avatarModal} hideModal={() => setAvatarModal(false)} upload={readImage}></ReactAvatarEditor>
        <Modal visible={deleteModal} hideModal={() => setDeleteModal(false)}>
            <div className='d-flex flex-column bg-white p-5 fade-in-down position-relative' style={{width: 400, borderRadius: 20}}>
                <a className="position-absolute" style={{left: 20, top: 20}} onClick={() => setDeleteModal(false)}><span aria-hidden="true" className="text-black" style={{fontSize: 25}}>&times;</span></a>
                <h3 className="text-center text-black" style={{fontWeight: 700}}>Delete this link?</h3>
                <button className="btn bg-danger border font-bold mt-3 p-3 mb-3 text-white" style={{borderRadius: 50}} onClick={removeLink}>Confirm</button>
                <button className="btn btn-outline-dark font-bold p-3" onClick={() => setDeleteModal(false)} style={{borderRadius: 50}}>Cancel</button>
            </div>
        </Modal>
        <Modal visible={emailModal} hideModal={() => setEmailModal(false)}>
            <div className='d-flex flex-column bg-white p-5 fade-in-down' style={{width: 400, borderRadius: 20}}>
                <h3 className="w-100 text-left" style={{fontWeight: 700}}>Send Email?</h3>
                <h5 style={{wordBreak: 'break-all'}}>Send an email to all of your followers for link {links[currentLink] && links[currentLink].title} - {links[currentLink] && cutAmazonTag(links[currentLink].url)}?</h5>
                <button className="btn btn-primary mb-2 border-50px p-3 bold mt-2" onClick={sendEmailRequest}>Send</button>
                <button className="btn btn-outline-white text-black border border-50px p-3 bold hover-white hover-bg-black" onClick={() => setEmailModal(false)}>Cancel</button>
            </div>
        </Modal>
        <div className='w-100 d-flex flex-column bg-white home-layout' style={{marginLeft: 400}}>
            <div className="header">
                <div className="d-none d-xl-block col-xl-7 title">Home</div>
                <div className="col-12 col-xl-5 d-flex justify-content-between">
                    <span className='d-flex align-items-center'><span className='desc'>My Cookie:</span><span className='text-decoration-underline ml-2'>bookings247.co/{user.username}</span></span>
                    <a className='text-decoration-none' onClick={copyLink}>copy link</a>
                </div>
            </div>
            <div className="row w-100 links-container">
                <div className="col-12 col-xl-7 divide-light-right pl-0 pr-0 scroll h-100" id="home-scroll">
                    {
                        user.email_verified_at === null || user.email_verified_at == '' || user.email_verified_at == 'null' ?
                        <div className="email-verify-alert">
                            To publish your profile please verify your account by clicking the link we've sent to your email ({user.email}). <a className="text-danger text-decoration-underline font-bold" onClick={sendVerification}>Resend verification link</a> or <Link to="/settings" className='text-black text-decoration-underline font-bold'>update email address</Link>
                        </div> : (user.suggest ? <div>Please share your Tripp profile on your social pages and travel groups. The more people that join Tripp, the more travel matches you will get. <a onClick={closeAlert}>Close</a></div>: '')
                    }
                    <div className="links">
                        <div className="links-header">
                            <span>Links</span>
                            <LoadingButton title="Add New Link" onClick={addNewLink} small height="auto" mt={0}/>
                        </div>
                        <ReactTooltip id='protectroute' type='dark' place="bottom">
                            <span>Protect Link</span>
                        </ReactTooltip>
                        <ReactTooltip id='emailalert' type='dark' place="bottom" >
                            <span>Email Alert.</span>
                        </ReactTooltip>
                        <ReactTooltip id='deleteroute' type='dark' place="bottom">
                            <span>Delete Link</span>
                        </ReactTooltip>
                        <ReactTooltip id='show-follow' type='dark' place="bottom" className='d-flex flex-column tootip-width'>
                            <p className="bold text-center">Never lose your audience!</p>
                            <p className='text-center'>If you lose access to any of your social media accounts, you can send<br />your cookie followers your new account details.</p>
                        </ReactTooltip>
                        <DragDropContext onDragEnd={handleOnDragEnd}>
                            <Droppable droppableId="links-body">
                                {(provided) => (
                                    <div className="links-body" {...provided.droppableProps} ref={provided.innerRef}>
                                        {links.map((link, index) =>
                                            <Draggable key={"link" + link.id} draggableId={"link" + link.id} index={index}>
                                                {(provided) => (
                                                    <div>
                                                        <div className="link" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                            <div className="dot-container">
                                                                <i className="bi bi-three-dots-vertical"></i>
                                                            </div>
                                                            <div className="link-container">
                                                                <div className='d-flex justify-content-between'>
                                                                    <div className='w-100'>
                                                                        <Edit value={link.title} size={20} weight={600} color='black' link={link} changeHandler = {updateLinkTitle} placeholder="Title" maxLength={40} />
                                                                        <Edit value={link.url} size={14} weight={400} color='rgb(60, 62, 65)' link={link} changeHandler = {updateLinkUrl} type="url" placeholder="Link" maxLength={160}/>
                                                                    </div>
                                                                    <div className="form-check form-switch link-disable toggle" style={{marginRight: 25}}>
                                                                        <input className="form-check-input" type="checkbox" role="switch" id="disable-link" checked={link.enable} onChange={() => toggleLink(link.id)}/>
                                                                    </div>
                                                                </div>
                                                                <div className='d-flex justify-content-between mt-2'>
                                                                    <div>
                                                                        <button data-tip data-for='protectroute' className='transparent-input pl-0 gray-dark-icon' onClick={() => showMask(index)} data-toggle="tooltip" data-placement="bottom" title="Protect Link"><i className="bi bi-shield-check" style={{color: link.mask ? 'rgb(0, 215, 116)' : '#BABBBD'}}></i></button>
                                                                        <button data-tip data-for='emailalert' className='transparent-input ml-1 gray-dark-icon' onClick={() => showEmail(index)} data-toggle="tooltip" data-placement="bottom" title="Email Alert"><i class="bi bi-envelope" style={{color: link.alert ? 'rgb(0, 215, 116)' : '#BABBBD'}}></i></button>
                                                                    </div>
                                                                    <button data-tip data-for='deleteroute' title="Delete Link" className='transparent-input bg-transparent gray-dark-icon' onClick={() => showModal(link.id)} style={{marginRight: 19}}><i className="bi bi-trash3" style={{color: '#BABBBD'}}></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="link-mask" style={{display: maskV[index] ? 'block' : 'none'}}>
                                                                <div className='link-mask-title'>
                                                                    Link masking and redirect
                                                                    <button className='transparent-input' onClick={() => hideMask(index)}><i className="bi bi-x"></i></button>
                                                                </div>
                                                                <div className='link-mask-content'>
                                                                    Protect your privacy. Turn this on to mask and hide the link from bots and crawlers.
                                                                </div>
                                                                <div className='link-mask-action d-flex'>
                                                                    Mask this link
                                                                    <div className="form-check form-switch link-disable toggle">
                                                                        <input className="form-check-input position-relative ml-1" type="checkbox" role="switch" onChange={() => toggleMask(link.id)} checked={link.mask}/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="link-mask" style={{display: emailAlert[index] ? 'block' : 'none'}}>
                                                                <div className='link-mask-title'>
                                                                    Email Alert
                                                                    <button className='transparent-input' onClick={() => hideEmail(index)}><i className="bi bi-x"></i></button>
                                                                </div>
                                                                <div className='link-mask-content'>
                                                                    Click below to send an email to all your followers asking them to visit this link.
                                                                </div>
                                                                <div className='link-mask-action d-flex'>
                                                                    <button className='btn btn-primary bold' onClick={() => sendEmail(index)}>Send Email</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>)}
                                            </Draggable>
                                        )}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
                    </div>
                    <div className="appearance">
                        <div className="appearance-title">
                            Appearance
                        </div>
                        <div className="appearance-container">
                            <div className="appearance-display w-100">
                                <Avatar username={user.username} url={user.avatar} />
                                <div className='ml-3 w-100'>
                                    <input type="file" id="profile-avatar" style={{display: 'none'}} onChange={imageSelect}/>
                                    <a className='btn btn-link p-0' onClick={uploadAvatar}>Upload Image</a>
                                    <Edit value={user.display} color='rgb(60, 62, 65)' onChange={updateAccount} field="display" maxLength={40} placeholder="My Name"/>
                                    <Edit value={user.bio} color='rgb(60, 62, 65)' onChange={updateAccount} field="bio" maxLength={160} placeholder="My Bio"/>
                                </div>
                            </div>
                            <div className="appearance-control">
                                <div className="appearance-color">
                                    <span>Color Style:</span>
                                    <Link className="btn btn-click p-0" to="/colorstyle">Change Color</Link>
                                </div>
                                <div className="appearance-disable">
                                    <span>Show verified badge <img src="/images/badge.svg" className="badge-image"/></span>
                                    <div className="form-check form-switch link-disable toggle">
                                        <input className="form-check-input" type="checkbox" role="switch" id="badge" checked={user.badge} onChange={toggleBadge}/>
                                    </div>
                                </div>
                                <div className="appearance-disable">
                                    <span>Show follow button <a data-tip data-for="show-follow" ><i class="font-bold bi bi-info-circle text-dark"></i></a></span>
                                    <div className="form-check form-switch link-disable toggle">
                                        <input className="form-check-input" type="checkbox" role="switch" id="disable-social" checked={user.showfollow} onChange={toggleShowFollow}/>
                                    </div>
                                </div>
                                <div className="appearance-disable">
                                    <span>Show social icons:</span>
                                    <div className="form-check form-switch link-disable toggle">
                                        <input className="form-check-input" type="checkbox" role="switch" id="disable-social" checked={user.showsocial} onChange={toggleSocialView}/>
                                    </div>
                                </div>
                                <div className="appearance-disable">
                                    <span>Compact social icons:</span>
                                    <div className="form-check form-switch link-disable toggle">
                                        <input className="form-check-input" type="checkbox" role="switch" id="disable-social" checked={user.social} onChange={toggleSocial}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-none d-xl-block col-5 p-5 h-100">
                    <PhoneScreen />
                </div>
            </div>
        </div>
    </div></Suspense>
};

export default Home;
