import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LAvatar = React.lazy(() => import('../../components/Avatar/Avatar'))
import { toggleSocialAction } from "../../store/actions/auth";
import { useDispatch } from "react-redux";
import { Suspense, useEffect, useState } from "react";
import axios from "axios";

const EmailNotification = () => {

    const following = useSelector(state => state.follow.following);
    const suggest = useSelector(state => state.auth.suggest);
    const dispatch = useDispatch();
    const [notify, setNotify] = useState([...Array(following.length)]);

    useEffect(() => {
        if (following.length == 0)
            return;
        const ids = following.map(user => user.id);
        axios.post('/follow-notify', {ids})
            .then(res => {
                if (res.status == 200) {
                    setNotify(res.data.alert);
                }
            })
    }, [following]);

    const toggleNotify = (index) => {
        axios.post('/toggle-notify', {follow: following[index].username})
            .then(res => {
                if (res.status == 200) {
                    const _notify = notify.map((not, _index) => index == _index ? !not : not);
                    setNotify(_notify);
                }
            })
    }

    const suggestToggle = () => {
        dispatch(toggleSocialAction("suggest"));
    }

    return <div className="d-flex h-100">
        <div className='w-100 d-flex flex-column bg-white home-layout color-style-container'>
            <div className="header col-xl-7">
                <div className="title"><Link to="/settings" className='mr-4 text-dark'><i className="bi bi-arrow-left text-dark"></i></Link>Email Notifications</div>
            </div>
            <div className="row w-100 links-container">
                <div className="col-12 col-xl-7 divide-light-right pr-0 scroll h-100 pl-0">
                    <div className="d-flex justify-content-between align-items-center p-4 divide-light-bottom">
                        <div style={{marginRight: 50}}>
                            <h4 className="bold font-16">Suggested Users</h4>
                            <h6 className="text-secondary">From time to time we will email you with users we think you might like based on who you are following.</h6>
                        </div>
                        <div>
                            <div className="form-check form-switch link-disable toggle">
                                <input className="form-check-input" type="checkbox" role="switch" id="disable-link" checked={suggest} onClick={suggestToggle} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="bold font-16 mt-4 p-4">Updates</h4>
                        <div>
                            {
                                following.map((user, index) => <Link to={`/${user.username}`}><div className="d-flex p-4 justify-content-between align-items-center hover-list">
                                    <div className="d-flex">
                                        <Suspense fallback={<div />}><LAvatar username={user.username} avatar={user.avatar} sm/></Suspense>
                                        <div className="ml-3 text-dark">
                                            <h5 className="bold m-0 font-14">{user.display}</h5>
                                            <h5 className="m-0 font-14 weight-400">@{user.username}</h5>
                                        </div>
                                    </div>
                                    <div className="form-check form-switch link-disable toggle">
                                        <input className="form-check-input" type="checkbox" role="switch" id="disable-link" checked={notify[index]} onClick = {() => toggleNotify(index)}/>
                                    </div>
                                </div>
                                </Link>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;

};

export default EmailNotification;