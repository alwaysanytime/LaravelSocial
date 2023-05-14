import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

const NotFound = (props) => {

    const loggedin = useSelector(state => state.auth.loggedin);
    const { username } = useParams();
    const dispatch = useDispatch();

    const register = () => {
        dispatch({type: 'SET_USERNAME', payload:username});
    }

    return <div className="w-100 d-flex flex-column align-items-center h-100 position-relative text-center" style={{paddingTop: 100, paddingBottom: 50}}>
        <img src="/images/logo/Logo.svg" style={{width: 100,height: 100}}/>
        <h3 className="mt-5 text-center" style={{fontWeight: 700}}>The page you are looking for doesn't exist</h3>
        {loggedin ? '' : <h4 className="mt-3 text-center" style={{fontWeight: 700}}>Want this to be your username? <Link onClick={register} to="/register" className="text-dark text-decoration-underline">Create your Cookie Now</Link></h4>}
        { loggedin ? '' :<div className='position-absolute' style={{bottom: 30}}>
            <Link to="/home"><img src="/images/logo/LogoBlack.svg" style={{width: 40, height: 40}}/></Link>
        </div>}
    </div>

};

export default NotFound;