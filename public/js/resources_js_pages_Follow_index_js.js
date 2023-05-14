"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Follow_index_js"],{

/***/ "./resources/js/pages/Follow/index.js":
/*!********************************************!*\
  !*** ./resources/js/pages/Follow/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config */ "./resources/js/config/config.js");
/* harmony import */ var _store_actions_follow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/follow */ "./resources/js/store/actions/follow.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var LAvatar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Avatar_Avatar_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/Avatar/Avatar */ "./resources/js/components/Avatar/Avatar.js"));
});
var LModal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Modal_Modal_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/Modal/Modal */ "./resources/js/components/Modal/Modal.js"));
});









var Follow = function Follow(props) {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  var follower = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.follow.follower;
  });
  var following = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.follow.following;
  });
  var tab = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.follow.tab;
  });
  var navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
  var showfollow = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.auth.showfollow;
  });
  var itemsPerPage = 20;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_store_actions_follow__WEBPACK_IMPORTED_MODULE_3__.getFollowInfoAction)());
    (0,_config_config__WEBPACK_IMPORTED_MODULE_2__.setMetaData)("Follows - Cookie", "Cookie Follows page");
  }, []);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      usernameSearch = _useState2[0],
      setUsernameSearch = _useState2[1];

  var onChange = function onChange(event) {
    setUsernameSearch(event.target.value);
  };

  var _current = tab == "follower" ? follower : following;

  var current = _current.filter(function (fol) {
    return fol.username.indexOf(usernameSearch) != -1;
  });

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      unfollowModal = _useState4[0],
      setUnfollowModal = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1),
      _useState6 = _slicedToArray(_useState5, 2),
      currentIndex = _useState6[0],
      setCurrentIndex = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      followerpage = _useState8[0],
      setFollowerPage = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState10 = _slicedToArray(_useState9, 2),
      followingpage = _useState10[0],
      setFollowingPage = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState12 = _slicedToArray(_useState11, 2),
      currentItems = _useState12[0],
      setCurrentItems = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
      _useState14 = _slicedToArray(_useState13, 2),
      currentpage = _useState14[0],
      setCurrentpage = _useState14[1];

  var unfollow = function unfollow() {
    axios__WEBPACK_IMPORTED_MODULE_1___default().post('/unfollow').then(function (res) {
      if (res.status == 200) {
        var _following = _toConsumableArray(following);

        _following.splice(currentIndex, 1);

        setFollowing(_following);
        setCurrentIndex(-1);
      }
    });
  };

  var unfollowUser = function unfollowUser(index) {
    // setCurrentIndex(index);
    // setUnfollowModal(true);
    if (tab == "following") navigate("/" + following[index].username);else navigate("/" + follower[index].username);
  };

  var toggleTab = function toggleTab() {
    dispatch({
      type: 'TOGGLE_TAB'
    });
  };

  var goHome = function goHome() {
    dispatch({
      type: 'TOGGLE_BOTTOM'
    });
    navigate("/home");
  };

  var scroll = function scroll(event) {
    var view = event.target;

    if (view.offsetHeight + view.scrollTop >= view.scrollHeight) {
      if (tab == 'follower' && (followerpage - 1) * itemsPerPage <= follower.length) {
        var _page = followerpage + 1;

        setFollowerPage(_page);
        setCurrentpage(_page);
      }

      if (tab == 'following' && (followingpage - 1) * itemsPerPage <= following.length) {
        var _page2 = followingpage + 1;

        setFollowingPage(_page2);
        setCurrentpage(_page2);
      }
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (currentpage) {
      var sub = current.slice(0, itemsPerPage * currentpage);
      setCurrentItems(_toConsumableArray(sub));
    }
  }, [currentpage, follower, tab, usernameSearch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setCurrentpage(1);
    setFollowingPage(1);
    setFollowerPage(1);
  }, [usernameSearch]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {}),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "d-flex h-100",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "d-flex flex-column w-100 h-100 bg-white home-layout",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "col-12 col-lg-7 divide-light-right p-0 h-100 d-flex flex-column pb-5",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(LModal, {
            visible: unfollowModal,
            hideModal: function hideModal() {
              return setUnfollowModal(false);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "d-flex flex-column bg-white p-5 fade-in-down position-relative",
              style: {
                width: 300,
                borderRadius: 20
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                className: "position-absolute",
                style: {
                  left: 20,
                  top: 20
                },
                onClick: function onClick() {
                  return setUnfollowModal(false);
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  "aria-hidden": "true",
                  className: "text-black",
                  style: {
                    fontSize: 25
                  },
                  children: "\xD7"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h3", {
                className: "text-center text-black",
                style: {
                  fontWeight: 700
                },
                children: ["Unfollow @", currentIndex != -1 ? following[currentIndex].username : 0, "?"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                className: "btn bg-dark border font-bold mt-3 mb-3 text-white",
                style: {
                  borderRadius: 50
                },
                onClick: function onClick() {
                  return unfollow();
                },
                children: "Unfollow"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                className: "btn btn-outline-dark font-bold",
                onClick: function onClick() {
                  return setUnfollowModal(false);
                },
                style: {
                  borderRadius: 50
                },
                children: "Cancel"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "row follow-header m-0",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "col-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h5", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
                  className: "bold ".concat(tab == "following" ? "active" : ""),
                  onClick: toggleTab,
                  children: [(0,_config_config__WEBPACK_IMPORTED_MODULE_2__.displayNumber)(following.length), " Following"]
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "col-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h5", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
                  className: "bold ".concat(tab == "follower" ? "active" : ""),
                  onClick: toggleTab,
                  children: [(0,_config_config__WEBPACK_IMPORTED_MODULE_2__.displayNumber)(follower.length), " Followers"]
                })
              })
            })]
          }), tab == "follower" && !showfollow ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "text-center bold p-4 follow-button-alert",
            children: ["You can't get new followers as your ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
              onClick: goHome,
              children: "follow button"
            }), " is hidden."]
          }) : '', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "search-bar d-flex pl-5 align-items-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: "bi bi-search mr-4 text-muted"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
              type: "text",
              placeholder: "Search Following",
              className: "transparent-input",
              onChange: onChange
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "scroll h-100",
            onScroll: scroll,
            children: [currentItems.map(function (current, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                onClick: function onClick() {
                  return unfollowUser(index);
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "d-flex follow-profile",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(LAvatar, {
                    username: current.username,
                    avatar: current.avatar,
                    sm: true
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "ml-3 text-dark",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                      className: "bold",
                      children: current.display != "My Name" ? current.display : ""
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      children: ["@", current.username]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                      children: current.bio != "My Bio" ? current.bio : ""
                    })]
                  })]
                })
              });
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
              className: "text-center mt-5",
              children: currentItems.length == 0 ? tab == "follower" ? "You have no followers" : "You are not following anyone" : ""
            })]
          })]
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Follow);

/***/ })

}]);