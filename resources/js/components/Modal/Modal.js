import React from 'react';

const Modal = (props) => {

    const hide = (event) => {
        event.stopPropagation();
        props.hideModal();
    }

    return props.visible ? <div className="modal">
        <div className="modal-behide" onClick={hide}></div>
        {
            props.showHideIcon ? <button type="button" className="close position-fixed white" aria-label="Close" onClick={props.hide} style={{top: 30, left: 30}}>
                <span aria-hidden="true" className="text-white">&times;</span>
            </button> : ''
        }
        {props.children}
    </div> : '';
}

export default Modal;