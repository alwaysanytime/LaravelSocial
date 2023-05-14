import React, { Suspense, useEffect, useState } from 'react';
import axios from 'axios';
const LAvatar = React.lazy(() => import('../../components/Avatar/Avatar'));
const LModal = React.lazy(() => import('../../components/Modal/Modal'));

import { setMetaData } from '../../config/config';
import { getFollowInfoAction } from '../../store/actions/follow';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { displayNumber } from '../../config/config';

const Follow = (props) => {

    const dispatch = useDispatch();
    const follower = useSelector(state => state.follow.follower);
    const following = useSelector(state => state.follow.following);
    const tab = useSelector(state => state.follow.tab);
    const navigate = useNavigate();
    const showfollow = useSelector(state => state.auth.showfollow);
    const itemsPerPage = 20;

    useEffect(() => {
        dispatch(getFollowInfoAction());
        setMetaData("Follows - Cookie", "Cookie Follows page");
    }, []);

    const [usernameSearch, setUsernameSearch] = useState("");

    const onChange = (event) => {
        setUsernameSearch(event.target.value);
    }

    let _current = tab == "follower" ? follower : following;
    const current = _current.filter(fol => fol.username.indexOf(usernameSearch) != -1);

    const [unfollowModal, setUnfollowModal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [followerpage, setFollowerPage] = useState(0);
    const [followingpage, setFollowingPage] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
    const [currentpage, setCurrentpage] = useState(1);
    const unfollow = () => {
        axios.post('/unfollow')
            .then(res => {
                if (res.status == 200) {
                    const _following = [...following];
                    _following.splice(currentIndex, 1);
                    setFollowing(_following);
                    setCurrentIndex(-1);
                }
            });
    }

    const unfollowUser = (index) => {
        // setCurrentIndex(index);
        // setUnfollowModal(true);
        if (tab == "following") navigate("/"+following[index].username);
        else navigate("/"+follower[index].username);
    }

    const toggleTab = () => {
        dispatch({type: 'TOGGLE_TAB'});
    }

    const goHome = () => {
        dispatch({type: 'TOGGLE_BOTTOM'});
        navigate("/home");
    }

    const scroll = (event) => {
        const view = event.target;
        if (view.offsetHeight + view.scrollTop >= view.scrollHeight) {
            if (tab == 'follower' && (followerpage - 1) * itemsPerPage <= follower.length ) {
                const _page = followerpage + 1;
                setFollowerPage(_page);
                setCurrentpage(_page);
            } 
            if (tab == 'following' && (followingpage - 1) * itemsPerPage <= following.length ) {
                const _page = followingpage + 1;
                setFollowingPage(_page);
                setCurrentpage(_page);
            }
        }
    }

    useEffect(() => {
        if (currentpage) {
            const sub = current.slice(0, itemsPerPage * currentpage);
            setCurrentItems([...sub]);
        }
    }, [currentpage, follower, tab, usernameSearch]);

    useEffect(() => {
        setCurrentpage(1);
        setFollowingPage(1);
        setFollowerPage(1);
    }, [usernameSearch]);

    return <Suspense fallback={<div />}><div className="d-flex h-100">
        <div className='d-flex flex-column w-100 h-100 bg-white home-layout'>
            <div className="col-12 col-lg-7 divide-light-right p-0 h-100 d-flex flex-column pb-5">
                <LModal visible={unfollowModal} hideModal={() => setUnfollowModal(false)}>
                    <div className='d-flex flex-column bg-white p-5 fade-in-down position-relative' style={{width: 300, borderRadius: 20}}>
                        <a className="position-absolute" style={{left: 20, top: 20}} onClick={() => setUnfollowModal(false)}><span aria-hidden="true" className="text-black" style={{fontSize: 25}}>&times;</span></a>
                        <h3 className="text-center text-black" style={{fontWeight: 700}}>Unfollow @{currentIndex != -1 ? following[currentIndex].username : 0}?</h3>
                        <button className="btn bg-dark border font-bold mt-3 mb-3 text-white" style={{borderRadius: 50}} onClick={() => unfollow()}>Unfollow</button>
                        <button className="btn btn-outline-dark font-bold" onClick={() => setUnfollowModal(false)} style={{borderRadius: 50}}>Cancel</button>
                    </div>
                </LModal>
                <div className="row follow-header m-0">
                    <div className="col-6">
                        <h5><a className={`bold ${tab == "following" ? "active" : ""}`} onClick={toggleTab}>{displayNumber(following.length)} Following</a></h5>
                    </div>
                    <div className='col-6'>
                        <h5><a className={`bold ${tab == "follower" ? "active" : ""}`} onClick={toggleTab}>{displayNumber(follower.length)} Followers</a></h5>
                    </div>
                </div>
                {
                    tab == "follower" && !showfollow ?
                    <div className="text-center bold p-4 follow-button-alert">
                        You can't get new followers as your <a onClick={goHome}>follow button</a> is hidden.
                    </div> : ''
                }
                <div className='search-bar d-flex pl-5 align-items-center'>
                    <i className="bi bi-search mr-4 text-muted"></i>
                    <input type="text" placeholder="Search Following" className='transparent-input' onChange={onChange}/>
                </div>
                <div className='scroll h-100' onScroll={scroll}>
                    {
                        currentItems.map((current, index) => <a onClick={() => unfollowUser(index)}><div className="d-flex follow-profile">
                                <LAvatar username={current.username} avatar = {current.avatar} sm/>
                                <div className='ml-3 text-dark'>
                                    <div className="bold">{current.display != "My Name" ? current.display : ""}</div>
                                    <div>@{current.username}</div>
                                    <div>{current.bio != "My Bio" ? current.bio : ""}</div>
                                </div>
                            </div></a>
                        )
                    }
                    <h3 className="text-center mt-5">{
                        currentItems.length == 0 ? (tab == "follower" ? "You have no followers" : "You are not following anyone") : ""
                    }</h3>
                </div>
            </div>
        </div>
    </div></Suspense>;
};

export default Follow;