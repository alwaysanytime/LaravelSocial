import React from "react";
import { useState, useRef } from "react";
import OnOutsiceClick from 'react-outclick';

const Edit = (props) => {

    let value = props.value || "";

    const pos = value.indexOf('?tag=');
    if (pos != -1)
        value = value.substring(0, pos);
    if (value == "My Name" || value == "Link" || value == "Title" || value == "My Bio")
        value = "";

    const [editing, setEditing] = useState(false);
    const inputRef = useRef();
    const [length, setLength] = useState(value.length);

    const setEdit = (event) => {
        setEditing(true);
    }    
    const stopEdit = () => {
        setEditing(false);
        if (props.placeholder == "Link")
            inputRef.current.value = inputRef.current.value.toLowerCase();
        const value = inputRef.current.value;
        if (props.type && props.type == "url" && value != "") if (value.indexOf('http://') == -1 && value.indexOf('https://') == -1) inputRef.current.value  = "https://" + value;
        if (props.link)
            props.changeHandler(inputRef.current.value, props.link);
        else
            props.onChange(props.field, inputRef.current.value);
    }

    const setCurrentLength = (ev) => {
        if (ev.keyCode == 13) stopEdit();
        setLength(ev.target.value.length);
    }

    const maxlen = window.innerWidth >= 768 ? 60 : 30;

    return <div className="edit-container d-flex w-100 align-items-center">
            {editing ? <input onKeyUp={setCurrentLength} autoFocus={true} defaultValue={value} className="transparent-input w-100" ref={inputRef} style={{height: 40, fontSize: 14, fontWeight: props.weight, color: props.color}} onBlur = {stopEdit} maxLength={props.maxLength || 50}/> : <div className="transparent-input d-flex align-items-center"  style={{paddingLeft: 2,paddingTop: 3, height: 40, fontSize: 14, fontWeight: props.weight, color: props.color}}>{value == "" || value == "null" || !value ? props.placeholder : value.length >maxlen ? value.substring(0, maxlen - 3) + "..." : value }</div> }
            {!editing ? <button onClick={setEdit} className="ml-3"><i className="bi bi-pencil-fill" style={{fontSize: 16}}></i></button> : ''}
            {editing ? <span className="transparent-input d-flex align-items-center"  style={{minWidth: 70,paddingLeft: 2,paddingTop: 1, height: 40, fontSize: 14, fontWeight: props.weight, color: props.color}}>{length} / {props.maxLength || 50}</span> : ''}
        </div>
};

export default Edit;