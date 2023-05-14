"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Profile_Profile_js"],{

/***/ "./resources/js/pages/Profile/Profile.js":
/*!***********************************************!*\
  !*** ./resources/js/pages/Profile/Profile.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config */ "./resources/js/config/config.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var LPhoneScreen = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_PhoneScreen_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/PhoneScreen */ "./resources/js/components/PhoneScreen/index.js"));
});
var LNotFound = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_NotFound_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/NotFound */ "./resources/js/components/NotFound/index.js"));
});

var Profile = function Profile(props) {
  var navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    username: '',
    bio: '',
    display: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      links = _useState4[0],
      setLinks = _useState4[1];

  var _useParams = (0,react_router__WEBPACK_IMPORTED_MODULE_5__.useParams)(),
      username = _useParams.username;

  var current = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.auth;
  });

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1),
      _useState8 = _slicedToArray(_useState7, 2),
      id = _useState8[0],
      setId = _useState8[1];

  var token = localStorage.getItem('token');
  document.body.style.paddingBottom = '0px';
  if (window.innerWidth <= 1024 && token) document.body.style.paddingBottom = '40px';
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_3___default().post('/getUserData', {
      username: username
    }).then(function (res) {
      if (res.status == 200) {
        var _user = res.data.user;
        if (res.data.user.username != current.username && (!res.data.user.email_verified_at || !res.data.user.enable || res.data.user.deleted)) setError(true);
        (0,_config_config__WEBPACK_IMPORTED_MODULE_2__.setMetaData)(_user.display + " (@" + username + ") - Cookie", _user.bio, "".concat(username, " Instagram, ").concat(username, " twitter, ").concat(username, " tiktok, ").concat(username, " website"), "index");
        setUser(_objectSpread({}, res.data.user));
        var _links = [];
        Object.keys(res.data.links).map(function (key) {
          return [].concat(_links, [res.data.links[key]]);
        });
        setLinks(_toConsumableArray(res.data.links));

        if (_user.username != current.username && !error) {
          axios__WEBPACK_IMPORTED_MODULE_3___default().post('/addhistory', {
            username: _user.username
          }).then(function (res) {
            setId(res.data.id);
          });
        }
      } else setError(true);
    });
  }, [current.username]);

  var linkVisit = function linkVisit(link) {
    if (id != -1) axios__WEBPACK_IMPORTED_MODULE_3___default().post('/click', {
      link: link,
      id: id,
      username: username
    });
  };

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var goHome = function goHome() {
    dispatch({
      type: 'TOGGLE_BOTTOM'
    });
    navigate("/home");
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "d-flex h-100",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "d-flex flex-column w-100 h-100 bg-white scroll home-layout",
      id: "profile-content",
      style: {
        marginLeft: current.loggedin ? 400 : 0
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "col-12 ".concat(current.loggedin ? 'col-xl-7' : '', " divide-light-right p-0 h-100 d-flex flex-column"),
        children: [current.loggedin ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "profile-header w-100",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            children: [username != current.username ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
              onClick: function onClick() {
                return navigate(-1);
              },
              className: "mr-4 text-dark",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                className: "bi bi-arrow-left text-dark"
              })
            }) : "", username]
          }), current.username == username ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            onClick: function onClick() {
              return goHome();
            },
            children: "Edit Profile"
          }) : '']
        }) : '', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "d-flex justify-content-center w-100",
          style: {
            paddingTop: 0,
            height: !current.loggedin ? "100%" : "calc(100% - 70px)"
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
            fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {}),
            children: error ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(LNotFound, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(LPhoneScreen, {
              user: user,
              links: links,
              noborder: true,
              fullscreen: true,
              profile: true,
              visit: linkVisit
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

/***/ })

}]);