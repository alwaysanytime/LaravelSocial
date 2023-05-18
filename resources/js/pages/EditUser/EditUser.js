import React, { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const LPhoneScreen = React.lazy(() => import('../../components/PhoneScreen'));
const LEdit = React.lazy(() => import('../../components/Edit/Edit'));
import { addLinkAction, updateLinkAction, removeLinkAction, toggleLinkAction, swapLinkAction } from '../../store/actions/link';
const LAvatar = React.lazy(() => import('../../components/Avatar/Avatar'));
const LModal = React.lazy(() => import('../../components/Modal/Modal'));
import { setMetaData } from '../../config/config';

const EditUser = () => {

    const links = useSelector(state => state.links);
    const [user, setUser] = useState({username: '', email: '', display: '', bio: '', avatar: '', style: 1});
    const dispatch = useDispatch();
    const [deleteModal, setDeleteModal] = useState(false);
    const [linkid, setLinkId] = useState(-1);

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

    const {username} = useParams();

    useEffect(() => {
        setMetaData("Edit User Profile", "Cookie Home page");
        axios.post('/getUserData', {username})
            .then(res => {
                setUser({...res.data.user});
                let _links = [];
                Object.keys(res.data.links).map(key => _links = [..._links, res.data.links[key]]);
                dispatch({type:'SET_LINKS', payload: _links});
            });
    }, []);

    const addNewLink = () => {
        dispatch(addLinkAction(username));
    }

    const updateLinkTitle = (text, link) => {
        dispatch(updateLinkAction(link.id, text, link.url, 1));
    }

    const updateLinkUrl = (text, link) => {
        dispatch(updateLinkAction(link.id, link.title, text, 1));
    }

    const removeLink = () => {
        dispatch(removeLinkAction(linkid, 1));
        setDeleteModal(false);
    }

    const toggleLink = (id) => {
        dispatch(toggleLinkAction(id, 1));
    }

    const updateAccount = (field, value) => {
        axios.post('/admin/updateaccount', {[field]: value, username: user.username})
        .then(res => {setUser({...user, [field]: value})});
    }

    const handleOnDragEnd = (result) => {
        const from = links[result.source.index].id;
        const to = links[result.destination.index].id;
        dispatch(swapLinkAction({from, to, _from: result.source.index, _to: result.destination.index}));
    }

    const uploadAvatar = () => {
        document.getElementById('avatar').click();
    }

    const readImage = (e) => {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
            return;
        let reader = new FileReader();
        reader.onload = (e) => {
            axios.post('/admin/avatar', {avatar: e.target.result, username: user.username})
                .then(res => { setUser({...user, avatar: res.data.link}) });
        };
        reader.readAsDataURL(files[0]);
    }

    return <Suspense fallback={<div />}><div className="d-flex h-100">
        <LModal visible={deleteModal} hideModal={() => setDeleteModal(false)}>
            <div className='d-flex flex-column bg-white p-5 fade-in-down' style={{width: 300, borderRadius: 20}}>
                <h3 className="text-center" style={{fontWeight: 700}}>Delete this link?</h3>
                <button className="btn btn-danger mb-2" onClick={removeLink}>Confirm</button>
                <button className="btn btn-outline-white text-black border" onClick={() => setDeleteModal(false)}>Cancel</button>
            </div>
        </LModal>
        <div className='w-100 d-flex flex-column bg-white'>
            <div className="header">
                <div className="d-none d-xl-block col-xl-7 title">Edit User Profile</div>
                <div className="col-12 col-xl-5 d-flex justify-content-between">
                    <span className='d-flex align-items-center'><span className='desc'>User Cookie:</span><span className='text-decoration-underline ml-2'>bookings247.co/{user.username}</span></span>
                    <a className='text-decoration-none' onClick={copyLink}>copy link</a>
                </div>
            </div>
            <div className="row w-100 links-container">
                <div className="col-12 col-xl-7 divide-light-right pl-0 pr-0 scroll h-100">
                    <div className="links">
                        <div className="links-header">
                            <span>Links</span>
                            <button className='btn btn-primary' onClick={addNewLink}>Add New Link</button>
                        </div>
                        <DragDropContext onDragEnd={handleOnDragEnd}>
                            <Droppable droppableId="links-body">
                                {(provided) => (
                                    <div className="links-body" {...provided.droppableProps} ref={provided.innerRef}>
                                        {links.map((link, index) =>
                                            <Draggable key={"link" + link.id} draggableId={"link" + link.id} index={index}>
                                                {(provided) => (
                                                <div className="link" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                    <div className="dot-container">
                                                        <i className="bi bi-three-dots-vertical"></i>
                                                    </div>
                                                    <div className="link-container">
                                                        <div className='d-flex justify-content-between'>
                                                            <div>
                                                                <LEdit value={link.title} size={20} weight={700} color='black' link={link} changeHandler = {updateLinkTitle} />
                                                                <LEdit value={link.url} size={14} weight={600} color='rgb(140, 140, 141)' link={link} changeHandler = {updateLinkUrl} type="url"/>
                                                            </div>
                                                            <div className="form-check form-switch link-disable toggle" style={{marginRight: 25}}>
                                                                <input className="form-check-input" type="checkbox" role="switch" id="disable-link" checked={link.enable} onChange={() => toggleLink(link.id)}/>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex justify-content-between mt-3'>
                                                            <i className="bi bi-shield-check"></i>
                                                            <button className='transparent-input bg-transparent' onClick={() => showModal(link.id)} style={{marginRight: 19}}><i className="bi bi-trash3"></i></button>
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
                            <div className="appearance-display">
                                <LAvatar username={user.username} avatar={user.avatar} />
                                <div className='ml-3'>
                                    <input type="file" style={{display: 'none'}} onChange={readImage} id="avatar" />
                                    <a className='btn btn-link p-0' onClick={uploadAvatar}>Upload Image</a>
                                    <LEdit value={user.display} color='rgb(140, 140, 141)' onChange={updateAccount} field="display" maxLength={160}/>
                                    <LEdit value={user.bio} color='rgb(140, 140, 141)' onChange={updateAccount} field="bio" maxLength={40}/>
                                </div>
                            </div>
                            <div className="appearance-control">
                                <div className="appearance-color">
                                    <span>Color Style:</span>
                                    <Link className="btn btn-click p-0" to="/colorstyle">Change Color</Link>
                                </div>
                                <div className="appearance-disable">
                                    <span>Compact social icons:</span>
                                    <div className="form-check form-switch link-disable toggle">
                                        <input className="form-check-input" type="checkbox" role="switch" id="disable-social"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-none d-xl-block col-5 p-5">
                    <LPhoneScreen user={user} links={links}/>
                </div>
            </div>
        </div>
    </div></Suspense>
};

export default EditUser;
