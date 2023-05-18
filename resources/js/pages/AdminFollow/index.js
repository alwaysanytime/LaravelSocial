import React, { Suspense, useEffect, useState } from 'react';
import axios from 'axios';

const LAvatar = React.lazy(() => import('../../components/Avatar/Avatar'));

import { setMetaData } from '../../config/config';
import { displayNumber } from '../../config/config';
import { useParams } from 'react-router';

const Follow = (props) => {

    const [follower, setFollower] = useState([]);
    const [following, setFollowing] = useState([]);
    const {username} = useParams();
    const [tab, setTab] = useState("follower");

    const current  = tab == "follower" ? follower : following;

    const [usernameSearch, setUsernameSearch] = useState("");

    useEffect(() => {
        setMetaData("Follows - Cookie", "Cookie Follows page");
        axios.post('/follow-data', {username})
            .then(res => {
                if (res.status == 200) {
                    setFollower(res.data.follower);
                    setFollowing(res.data.following);
                }
            })
    }, []);

    const onChange = (event) => {
        setUsernameSearch(event.target.value);
    }

    const toggleTab = () => {
        setTab(tab == "follower" ? "following" : "follower");
    }

    return <div className="d-flex h-100">
        <div className='d-flex flex-column w-100 h-100 bg-white home-layout'>
            <div className="col-12 col-lg-7 divide-light-right p-0 h-100">
                <div className="row follow-header m-0">
                    <div className="col-6">
                        <h5><a className={`bold ${tab == "following" ? "active" : ""}`} onClick={toggleTab}>{displayNumber(following.length)} Following</a></h5>
                    </div>
                    <div className='col-6'>
                        <h5><a className={`bold ${tab == "follower" ? "active" : ""}`} onClick={toggleTab}>{displayNumber(follower.length)} Followers</a></h5>
                    </div>
                </div>
                <div className='search-bar d-flex pl-5 align-items-center'>
                    <i className="bi bi-search mr-4 text-muted"></i>
                    <input type="text" placeholder="Search Following" className='transparent-input' onChange={onChange}/>
                </div>
                <div>
                    {
                        current.map((current, index) => current.username.indexOf(usernameSearch) != -1 ? <a target="_blank" href={"https://bookings247.co/"+current.username}><div className="d-flex follow-profile">
                                <Suspense fallback={<div />}><LAvatar username={current.username} avatar = {current.avatar} sm/></Suspense>
                                <div className='ml-3 text-dark'>
                                    <div className="bold">{current.display != "My Name" ? current.display : ""}</div>
                                    <div>@{current.username}</div>
                                    <div>{current.bio != "My Bio" ? current.bio : ""}</div>
                                </div>
                            </div></a> : ""
                        )
                    }
                    <h3 className="text-center mt-5">{
                        current.length == 0 ? (tab == "follower" ? "No followers" : "No following") : ""
                    }</h3>
                </div>
            </div>
        </div>
    </div>;
};

export default Follow;
