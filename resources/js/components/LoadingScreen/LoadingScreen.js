import React from "react";
import { useSelector } from "react-redux";

const LoadingScreen = (props) => {

    // const isLoading = useSelector(state => state.auth.isLoading);

    return <div className="loading-screen flex-column">
        <img style={{width: 200, height: 200}} src="/images/logo/Logo.svg" />
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>;
};

export default LoadingScreen;