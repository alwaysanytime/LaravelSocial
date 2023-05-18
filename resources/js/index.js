import React, { useEffect, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';

const LSidebar = React.lazy(() => import('./components/Sidebar/Sidebar'));
const LStartScreen = React.lazy(() => import('./pages/Start/Start'));
const LHome = React.lazy(() => import('./pages/Home/Home'));
const LProfile = React.lazy(() => import('./pages/Profile/Profile'));
const LFeedback = React.lazy(() => import('./pages/Feedback/Feedback'));
const LSetting = React.lazy(() => import('./pages/Setting/Setting'));
const LAnalytics = React.lazy(() => import('./pages/Analytics/Analytics'));
const LColorStyle = React.lazy(() => import('./pages/ColorStyle/ColorStyle'));
const LFollow = React.lazy(() => import('./pages/Follow'));
const LAdminFollow = React.lazy(() => import('./pages/AdminFollow'));
const LVerification = React.lazy(() => import('./pages/Verification/Verification'));
const LEditUser = React.lazy(() => import('./pages/EditUser/EditUser'));
const LEmailNotification = React.lazy(() => import('./pages/EmailNotification'));

import SERVER_URL from './config/config';
import { setAuthToken } from './config/config';
import {linkListAction} from './store/actions/link';
import { styleListAction } from './store/actions/style';
import CustomRoute from './pages/CustomRoute/CustomRoute';
import { getFollowInfoAction } from './store/actions/follow';
import Loading from './pages/Loading/Loading';

// axios.defaults.baseURL = SERVER_URL+"/api"
axios.defaults.baseURL = SERVER_URL+"/api";

axios.interceptors.response.use(
    function(successRes) {
      return successRes;
    },
    function(error) {
      if (error.response.status === 401) {
        store.dispatch({type: 'LOGOUT'});
        store.dispatch({type: 'STOP_LOADING'});
      }
      return error;
    }
);

const token = localStorage.getItem('token')
if (token)
    setAuthToken(token);

import store from './store';
import { getCurrentUserAction, verifyCheckAction } from './store/actions/auth';

function App() {

    const dispatch = useDispatch();
    const loggedin = useSelector(state => state.auth.loggedin);
    const user = useSelector(state => state.auth);

    useEffect(() => {
        if (token) {
            dispatch(getCurrentUserAction());
            dispatch(linkListAction());
        }
        dispatch(styleListAction());
        dispatch(getFollowInfoAction());
    }, []);

    return (
        <ToastProvider
            autoDismiss
            autoDismissTimeout={3000}
        >
        <Suspense fallback={<Loading />}>
            {loggedin ? <LSidebar /> : '' }
            <Routes>
                {
                    !loggedin ? <>
                    <Route path = "/" element={<LStartScreen url="home"/>}/>
                    </> : ''
                }
                <Route path = "/login" element={<CustomRoute component={<LStartScreen url="login"/>} guard={false}/>} />
                <Route path = "/register" element={<CustomRoute component={<LStartScreen url="register"/>} guard={false}/>}/>
                <Route path = "/forgot" element={<CustomRoute component={<LStartScreen url="forgot"/>} guard={false}/>} />
                <Route path = "/reset/:token" element={<CustomRoute component={<LStartScreen url="reset"/>} guard={false}/>}/>
                <Route path = "/contact" element={<CustomRoute component={<LStartScreen url="contact"/>} guard={false}/>}/>

                <Route path = "/" element={<Navigate to="/home"/>} />
                <Route path = "/home" element={<CustomRoute component={<LHome />} />} />
                <Route path = "/profile" element={<LProfile /> } />
                <Route path = "/settings" element={<CustomRoute component={<LSetting />} />} />
                <Route path = "/settings/emailnotification" element={<CustomRoute component={<LEmailNotification />} />} />
                <Route path = "/feedback" element={<CustomRoute component={<LFeedback />} />} />
                <Route path = "/analytics" element={<CustomRoute component={<LAnalytics user={user} />} />} />
                <Route path = "/colorstyle" element={<CustomRoute component={<LColorStyle />} />} />
                <Route path = "/follow" element={<CustomRoute component={<LFollow />} />} />
                <Route path = "/verification" element={<CustomRoute component={<LVerification />} />} />
                <Route path = "/:username" element={<CustomRoute component={<LProfile />} protect={false}/>} />

                <Route path = "/admin/edit/:username" element={<LEditUser />} />
                <Route path = "/admin/analytics/:username" element={<LAnalytics admin />} />
                <Route path = "/admin/follow/:username" element={<LAdminFollow />} />
            </Routes>
        </Suspense>
        </ToastProvider>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
}
