"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Start_Start_js"],{

/***/ "./resources/js/pages/Start/Start.js":
/*!*******************************************!*\
  !*** ./resources/js/pages/Start/Start.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/auth */ "./resources/js/store/actions/auth.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/config */ "./resources/js/config/config.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var Login = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Auth_Login_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/Auth/Login */ "./resources/js/components/Auth/Login.js"));
});
var Register = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Auth_Register_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/Auth/Register */ "./resources/js/components/Auth/Register.js"));
});
var Forgot = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Auth_Forgot_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/Auth/Forgot */ "./resources/js/components/Auth/Forgot.js"));
});
var Contact = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Contact_Contact_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/Contact/Contact */ "./resources/js/components/Contact/Contact.js"));
});
var Reset = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Auth_Reset_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/Auth/Reset */ "./resources/js/components/Auth/Reset.js"));
});

var HomeScreen = function HomeScreen() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_config_config__WEBPACK_IMPORTED_MODULE_3__.setMetaData)("Cookie", "Make the most of your social traffic", "cookie, cookie.link, cookie link, link in bio, bio link, linkinbio", "index");
  }, []);
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.auth;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      username = _useState2[0],
      setUsername = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      valid = _useState4[0],
      setValid = _useState4[1];

  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();

  var onChangeHandler = function onChangeHandler(event) {
    dispatch({
      type: 'SET_USERNAME',
      payload: event.target.value
    });
    setUsername(event.target.value);
    if (event.target.value.length > 3) setValid(true);else setValid(false);
  };

  var navigateToRegister = function navigateToRegister(event) {
    if (event.keyCode == 13) navigate('/register');
  };

  var focusUsername = function focusUsername() {
    document.getElementById('username-input').focus();
  };

  var inputFocus = function inputFocus() {
    document.getElementById('username-input').placeholder = "";
  };

  var inputBlur = function inputBlur() {
    document.getElementById('username-input').placeholder = "username";
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
      className: "start-desc text-mobile-center",
      style: {
        fontWeight: 700,
        fontSize: 60
      },
      children: "Make the most of your social traffic"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
      className: "mt-3 text-secondary text-mobile-center",
      style: {
        fontWeight: 700,
        fontSize: 25
      },
      children: "Track which of your social pages are generating you the most traffic and drive that audience to the right place."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "d-flex w-100 mt-3 start-page-input",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        style: {
          borderRadius: 15,
          fontWeight: 700,
          fontSize: 20,
          padding: 10
        },
        className: "light-bg-color d-flex",
        onClick: focusUsername,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          children: "cookie.link/"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
          id: "username-input",
          className: "transparent-input w-100",
          placeholder: "username",
          value: username,
          onChange: onChangeHandler,
          style: {
            width: 100,
            marginTop: -2
          },
          onKeyUp: function onKeyUp(event) {
            return navigateToRegister(event);
          },
          onFocus: inputFocus,
          onBlur: inputBlur
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        className: "btn btn-primary px-5 ml-2",
        style: {
          borderRadius: 15,
          fontWeight: 700,
          fontSize: 20,
          height: 54
        },
        to: "/register",
        onClick: function onClick() {
          return navigate('/register');
        },
        children: "Start My Page"
      })]
    })]
  });
};

var StartScreen = function StartScreen(props) {
  var loggedin = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.auth.loggedin;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var logout = function logout() {
    dispatch((0,_store_actions_auth__WEBPACK_IMPORTED_MODULE_2__.logoutAction)());
  };

  var display = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(HomeScreen, {});

  if (props.url == "login") display = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Login, {});else if (props.url == "register") display = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Register, {});else if (props.url == "forgot") display = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Forgot, {});else if (props.url == "contact") display = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Contact, {});else if (props.url == "reset") display = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Reset, {});
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {}),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "row h-100 m-0 bg-white",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "col-12 col-lg-7 h-100 p-2 p-xl-5 start-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "d-flex justify-content-between",
          style: {
            height: 50
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
            to: "/",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
              className: "size-50",
              src: "/images/logo/Logo.svg"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            style: {
              fontSize: 30
            },
            className: "text-secondary",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
              className: "btn btn-link text-secondary text-decoration-none",
              to: "/contact",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                style: {
                  fontWeight: 700
                },
                children: "Contact"
              })
            }), !loggedin ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
              className: "btn btn-link text-secondary text-decoration-none",
              to: "/login",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h3", {
                style: {
                  fontWeight: 700
                },
                children: ["Login ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                  className: "bi bi-box-arrow-in-right"
                })]
              })
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              className: "btn btn-link text-secondary text-decoration-none",
              onClick: logout,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h3", {
                style: {
                  fontWeight: 700
                },
                children: ["Logout ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                  className: "bi bi-box-arrow-in-right"
                })]
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "d-flex flex-column justify-content-center start-comp",
          style: {
            height: 'calc(100% - 50px)'
          },
          children: display
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "".concat(props.url == "home" ? "d-flex pt-5" : "d-none", " phone-cont d-lg-flex col-12 col-lg-5 h-100 p-2 p-xl-5 d-flex justify-content-center align-items-center"),
        style: {
          backgroundColor: 'rgb(245, 246, 248)'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
          src: "/images/phone.png",
          style: {
            maxWidth: "100%",
            maxHeight: '100%'
          }
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StartScreen);

/***/ })

}]);