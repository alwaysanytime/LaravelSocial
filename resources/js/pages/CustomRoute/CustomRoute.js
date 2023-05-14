import React, { useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router';

const CustomRoute = ({component, ...props}) => {
    
    const dispatch = useDispatch();

    const loggedIn = useSelector(state => state.auth.loggedin);
    const token = localStorage.getItem('token');
    const { addToast } = useToasts();
    const messages = useSelector(state => state.messages);
    useEffect(() => {
        messages.forEach(message => addToast(message.content, {appearance: message.appearance}));
        if (messages.length != 0)
            dispatch({type:'CLEAR_MESSAGES'});
    }, [messages]);

    if ('protect' in props && !props.protect) return component;
    if ('guard' in props && !props.guard && loggedIn) return <Navigate to="/home" />;
    if ('guard' in props && !props.guard && !loggedIn) return component;

    document.body.style.paddingBottom = '0px';
    if(window.innerWidth <= 1024 && token) document.body.style.paddingBottom = '40px';

    return token ? component : <Navigate to="/login" />
};

export default CustomRoute;