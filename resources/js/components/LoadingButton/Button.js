import React from "react";
import { useSelector } from "react-redux";

const LoadingButton = (props) => {

    const isLoading = useSelector(state => state.auth.isLoading);

    return <button className={`${'small' in props ? '' : 'w-100'} btn btn-primary ${'mt' in props ? '' : 'mt-3'} border-sm font-bold p-2 light-blue-button`} onClick={props.onClick} disabled={isLoading} style={{height: props.height?props.height: 60, marginTop: 'mt' in props ? props.mt : 0}}>{props.title}{isLoading ? <i class="fa fa-spinner fa-spin" style={{marginLeft: 15, fontSize: 20}}></i> : ''}</button>;
};

export default LoadingButton;