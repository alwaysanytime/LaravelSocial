import React, {useEffect, useState} from 'react';

const Input = (props) => {

    const [type, setType] = useState(props.title == "email" ? "email" : (props.title == "username" ? "text" : "password"));
    const [error, setError] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const [editing, setEditing] = useState(0);

    useEffect(() => { if (props.value != "" && props.value != undefined && props.value != null) changeHandler(props.value) }, [props.value]);

    const changeHandler = (event) => {
        let text;
        let _error = 0;
        if (typeof event == 'object')
            text = event.target.value;
        else text = event || "";
        if (text == "") {
            _error = 1;
            setErrorMessage("This field is required");
        }
        else {
            if (props.title == "email") {
                const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                if (text.match(validRegex))
                    _error = -1;
                else {
                    _error = 1;
                    setErrorMessage('Email is not valid');
                }
            } else {
                _error = -1;
                if (props.title == "password" && text.length < 6) {
                    _error = 1;
                    setErrorMessage('Password must be at least 6 characters');
                }
                if (props.title == "username") {
                    if (text.length < 3 || text.length > 30) {_error = 1;setErrorMessage('Username must be between 3 - 30 characters');}
                    else if (!/^[A-Za-z0-9_]*$/.test(text)) {_error = 1;setErrorMessage('Username must consist of digits and letters');}
                }
            }
        }
        setError(_error);
        props.inputChangeHandler(props.title, text, _error);
    }

    const focus = () => {
        setEditing(true);
    }

    const blur = () => {
        setEditing(false);
    }

    return <div className="mt-3">
        <div className="p-2 light-bg-color w-100 custom-input position-relative text-left">
            <div className="title text-secondary text-left">{props.title}</div>
            <input className="w-100" type={type} onChange = {changeHandler} name={props.title} defaultValue={props.value} onFocus={focus} onBlur={blur} maxLength = {30}/>
            <div className="position-absolute notify-icon">
                {
                    props.title == 'password' ? <a onClick={() => setType(type == 'password' ? 'text' : 'password')}><i className={`bi text-muted ${type == 'password' ? 'bi-eye-slash-fill' : 'bi-eye-fill'} mr-2`} style={{color: 'rgb(1, 214, 117)'}}></i></a> : ''
                }
                {
                    error == -1 ?
                        <i className="bi bi-check-circle-fill" style={{color: 'rgb(1, 214, 117)'}}></i>
                    : (error == 1 ? 
                        <i className="bi bi-x-circle-fill" style={{color: 'red'}}></i> : '')
                }
            </div>
            
        </div>
        {error == 1 && !editing ? <div className="text-danger mt-2 text-left">
            {errorMessage}
        </div>: ""}
    </div>
};

export default Input;