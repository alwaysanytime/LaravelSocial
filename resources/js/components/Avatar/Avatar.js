import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SERVER_URL from '../../config/config';
import Modal from '../Modal/Modal';

const Avatar = (props) => {

    const _avatar = useSelector(state => state.auth.avatar);
    let avatar = _avatar;
    if ('avatar' in props) avatar = props.avatar;
    const hasAvatar = avatar != SERVER_URL && avatar != "" ? true: false;

    const [zoom, setZoom] = useState(false);

    const hideModal = () => {
        setZoom(false);
    };

    const showModal = (event) => {
        setZoom(true);
        event.stopPropagation();
    }

    const length = props.sm ? 50 : 100;

    return <>
        <Modal visible={zoom} hideModal = {hideModal} hide={hideModal} showHideIcon>
            <div className={'d-flex justify-content-center align-items-center text-white ' + (!hasAvatar ? 'bg-dark' : '')} style={{minWidth: 300, minHeight: 300, fontSize: 60, textTransform: 'capitalize', overflow: 'hidden', maxWidth: 300, maxHeight: 300}}>
                {hasAvatar ? <img className='w-100' src={avatar} style={{width: 300, height: 300}} alt={props.username.substr(0, 1) || "T"}/> : props.username.substr(0, 1) || "T"}
            </div>
        </Modal>
        <div onClick={showModal} className={'d-flex justify-content-center align-items-center text-white ' + (!hasAvatar ? 'bg-dark' : '')} style={{minWidth: length, minHeight: length, fontSize: length * 0.6, textTransform: 'capitalize', borderRadius: 50, overflow: 'hidden', maxWidth: length, maxHeight: length, cursor: 'pointer'}}>
            {hasAvatar ? <img className='w-100' src={avatar} style={{width: length, height: length}} alt={props.username.substr(0, 1) || "T"}/> : props.username.substr(0, 1) || "T"}
        </div>
    </>

};

export default Avatar;