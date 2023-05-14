"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Auth_Login_js"],{

/***/ "./resources/js/components/Auth/Login.js":
/*!***********************************************!*\
  !*** ./resources/js/components/Auth/Login.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Input/Input */ "./resources/js/components/Input/Input.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/auth */ "./resources/js/store/actions/auth.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toast-notifications */ "./node_modules/react-toast-notifications/dist/index.js");
/* harmony import */ var _LoadingButton_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../LoadingButton/Button */ "./resources/js/components/LoadingButton/Button.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/config */ "./resources/js/config/config.js");
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var Login = function Login(props) {
  var navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_9__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();

  var _useToasts = (0,react_toast_notifications__WEBPACK_IMPORTED_MODULE_4__.useToasts)(),
      addToast = _useToasts.addToast;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      token = _useState4[0],
      setToken = _useState4[1];

  var handleToken = function handleToken(_token) {
    setToken(_token);
  };

  var handleExpire = function handleExpire() {
    setToken("");
  };

  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.auth;
  });

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    email: {
      value: '',
      error: 0
    },
    password: {
      value: '',
      error: 0
    }
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      fields = _React$useState2[0],
      setFields = _React$useState2[1];

  var inputChangeHandler = function inputChangeHandler(field, value, error) {
    setFields(_objectSpread(_objectSpread({}, fields), {}, _defineProperty({}, field, {
      value: value,
      error: error
    })));
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var _user = {
      email: fields.email.value,
      password: fields.password.value,
      follow: user.follow
    };
    if (fields.email.error != -1 || fields.password.error != -1) dispatch({
      type: 'ADD_MESSAGE',
      payload: {
        appearance: 'error',
        content: 'Some fields are invalid'
      }
    });else if (count >= 3 && token == "") dispatch({
      type: 'ADD_MESSAGE',
      payload: {
        appearance: 'error',
        content: 'You have to solve the captcha'
      }
    });else {
      dispatch((0,_store_actions_auth__WEBPACK_IMPORTED_MODULE_2__.loginAction)(_user));
    }
    setCount(count + 1);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_config_config__WEBPACK_IMPORTED_MODULE_6__.setMetaData)("Login - Cookie", "Log in to your Cookie account");
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "d-flex align-items-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h1", {
          children: "Login\uD83D\uDC4B"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Input_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: "email",
        inputChangeHandler: inputChangeHandler
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Input_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: "password",
        inputChangeHandler: inputChangeHandler
      }), count > 2 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "d-flex justify-content-center m-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_7__["default"], {
          sitekey: "6LefPncgAAAAAKIUIUGkRQbQhU_NKfo1sOAXV949",
          onChange: handleToken,
          onExpire: handleExpire
        })
      }) : '', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_LoadingButton_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: "Login"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "d-flex justify-content-center mt-2",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, {
        to: "/forgot",
        children: "Forgot Password?"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "d-flex justify-content-center mt-5",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
        className: "text-secondary mr-1",
        children: "Don't an account? "
      }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, {
        to: "/register",
        className: "text-black",
        children: "Create One"
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ "./resources/js/components/Input/Input.js":
/*!************************************************!*\
  !*** ./resources/js/components/Input/Input.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Input = function Input(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.title == "email" ? "email" : props.title == "username" ? "text" : "password"),
      _useState2 = _slicedToArray(_useState, 2),
      type = _useState2[0],
      setType = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      errorMessage = _useState6[0],
      setErrorMessage = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      editing = _useState8[0],
      setEditing = _useState8[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (props.value != "" && props.value != undefined && props.value != null) changeHandler(props.value);
  }, [props.value]);

  var changeHandler = function changeHandler(event) {
    var text;
    var _error = 0;
    if (_typeof(event) == 'object') text = event.target.value;else text = event || "";

    if (text == "") {
      _error = 1;
      setErrorMessage("This field is required");
    } else {
      if (props.title == "email") {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (text.match(validRegex)) _error = -1;else {
          _error = 1;
          setErrorMessage('Email is not valid');
        }
      } else {
        _error = -1;

        if (props.title == "password" && text.length < 6) {
          _error = 1;
          setErrorMessage('Password must be at least 6 characters');
        }

        if (props.title == "username") {
          if (text.length < 3 || text.length > 30) {
            _error = 1;
            setErrorMessage('Username must be between 3 - 30 characters');
          } else if (!/^[A-Za-z0-9_]*$/.test(text)) {
            _error = 1;
            setErrorMessage('Username must consist of digits and letters');
          }
        }
      }
    }

    setError(_error);
    props.inputChangeHandler(props.title, text, _error);
  };

  var focus = function focus() {
    setEditing(true);
  };

  var blur = function blur() {
    setEditing(false);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "mt-3",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "p-2 light-bg-color w-100 custom-input position-relative text-left",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "title text-secondary text-left",
        children: props.title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
        className: "w-100",
        type: type,
        onChange: changeHandler,
        name: props.title,
        defaultValue: props.value,
        onFocus: focus,
        onBlur: blur,
        maxLength: 30
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "position-absolute notify-icon",
        children: [props.title == 'password' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          onClick: function onClick() {
            return setType(type == 'password' ? 'text' : 'password');
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
            className: "bi text-muted ".concat(type == 'password' ? 'bi-eye-slash-fill' : 'bi-eye-fill', " mr-2"),
            style: {
              color: 'rgb(1, 214, 117)'
            }
          })
        }) : '', error == -1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
          className: "bi bi-check-circle-fill",
          style: {
            color: 'rgb(1, 214, 117)'
          }
        }) : error == 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
          className: "bi bi-x-circle-fill",
          style: {
            color: 'red'
          }
        }) : '']
      })]
    }), error == 1 && !editing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "text-danger mt-2 text-left",
      children: errorMessage
    }) : ""]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);

/***/ }),

/***/ "./resources/js/components/LoadingButton/Button.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/LoadingButton/Button.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var LoadingButton = function LoadingButton(props) {
  var isLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.auth.isLoading;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
    className: "".concat('small' in props ? '' : 'w-100', " btn btn-primary ").concat('mt' in props ? '' : 'mt-3', " border-sm font-bold p-2 light-blue-button"),
    onClick: props.onClick,
    disabled: isLoading,
    style: {
      height: props.height ? props.height : 60,
      marginTop: 'mt' in props ? props.mt : 0
    },
    children: [props.title, isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
      "class": "fa fa-spinner fa-spin",
      style: {
        marginLeft: 15,
        fontSize: 20
      }
    }) : '']
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingButton);

/***/ }),

/***/ "./node_modules/react-async-script/lib/esm/async-script-loader.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-async-script/lib/esm/async-script-loader.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ makeAsyncScript)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var SCRIPT_MAP = {}; // A counter used to generate a unique id for each component that uses the function

var idCount = 0;
function makeAsyncScript(getScriptURL, options) {
  options = options || {};
  return function wrapWithAsyncScript(WrappedComponent) {
    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || "Component";

    var AsyncScriptLoader =
    /*#__PURE__*/
    function (_Component) {
      _inheritsLoose(AsyncScriptLoader, _Component);

      function AsyncScriptLoader(props, context) {
        var _this;

        _this = _Component.call(this, props, context) || this;
        _this.state = {};
        _this.__scriptURL = "";
        return _this;
      }

      var _proto = AsyncScriptLoader.prototype;

      _proto.asyncScriptLoaderGetScriptLoaderID = function asyncScriptLoaderGetScriptLoaderID() {
        if (!this.__scriptLoaderID) {
          this.__scriptLoaderID = "async-script-loader-" + idCount++;
        }

        return this.__scriptLoaderID;
      };

      _proto.setupScriptURL = function setupScriptURL() {
        this.__scriptURL = typeof getScriptURL === "function" ? getScriptURL() : getScriptURL;
        return this.__scriptURL;
      };

      _proto.asyncScriptLoaderHandleLoad = function asyncScriptLoaderHandleLoad(state) {
        var _this2 = this;

        // use reacts setState callback to fire props.asyncScriptOnLoad with new state/entry
        this.setState(state, function () {
          return _this2.props.asyncScriptOnLoad && _this2.props.asyncScriptOnLoad(_this2.state);
        });
      };

      _proto.asyncScriptLoaderTriggerOnScriptLoaded = function asyncScriptLoaderTriggerOnScriptLoaded() {
        var mapEntry = SCRIPT_MAP[this.__scriptURL];

        if (!mapEntry || !mapEntry.loaded) {
          throw new Error("Script is not loaded.");
        }

        for (var obsKey in mapEntry.observers) {
          mapEntry.observers[obsKey](mapEntry);
        }

        delete window[options.callbackName];
      };

      _proto.componentDidMount = function componentDidMount() {
        var _this3 = this;

        var scriptURL = this.setupScriptURL();
        var key = this.asyncScriptLoaderGetScriptLoaderID();
        var _options = options,
            globalName = _options.globalName,
            callbackName = _options.callbackName,
            scriptId = _options.scriptId; // check if global object already attached to window

        if (globalName && typeof window[globalName] !== "undefined") {
          SCRIPT_MAP[scriptURL] = {
            loaded: true,
            observers: {}
          };
        } // check if script loading already


        if (SCRIPT_MAP[scriptURL]) {
          var entry = SCRIPT_MAP[scriptURL]; // if loaded or errored then "finish"

          if (entry && (entry.loaded || entry.errored)) {
            this.asyncScriptLoaderHandleLoad(entry);
            return;
          } // if still loading then callback to observer queue


          entry.observers[key] = function (entry) {
            return _this3.asyncScriptLoaderHandleLoad(entry);
          };

          return;
        }
        /*
         * hasn't started loading
         * start the "magic"
         * setup script to load and observers
         */


        var observers = {};

        observers[key] = function (entry) {
          return _this3.asyncScriptLoaderHandleLoad(entry);
        };

        SCRIPT_MAP[scriptURL] = {
          loaded: false,
          observers: observers
        };
        var script = document.createElement("script");
        script.src = scriptURL;
        script.async = true;

        for (var attribute in options.attributes) {
          script.setAttribute(attribute, options.attributes[attribute]);
        }

        if (scriptId) {
          script.id = scriptId;
        }

        var callObserverFuncAndRemoveObserver = function callObserverFuncAndRemoveObserver(func) {
          if (SCRIPT_MAP[scriptURL]) {
            var mapEntry = SCRIPT_MAP[scriptURL];
            var observersMap = mapEntry.observers;

            for (var obsKey in observersMap) {
              if (func(observersMap[obsKey])) {
                delete observersMap[obsKey];
              }
            }
          }
        };

        if (callbackName && typeof window !== "undefined") {
          window[callbackName] = function () {
            return _this3.asyncScriptLoaderTriggerOnScriptLoaded();
          };
        }

        script.onload = function () {
          var mapEntry = SCRIPT_MAP[scriptURL];

          if (mapEntry) {
            mapEntry.loaded = true;
            callObserverFuncAndRemoveObserver(function (observer) {
              if (callbackName) {
                return false;
              }

              observer(mapEntry);
              return true;
            });
          }
        };

        script.onerror = function () {
          var mapEntry = SCRIPT_MAP[scriptURL];

          if (mapEntry) {
            mapEntry.errored = true;
            callObserverFuncAndRemoveObserver(function (observer) {
              observer(mapEntry);
              return true;
            });
          }
        };

        document.body.appendChild(script);
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        // Remove tag script
        var scriptURL = this.__scriptURL;

        if (options.removeOnUnmount === true) {
          var allScripts = document.getElementsByTagName("script");

          for (var i = 0; i < allScripts.length; i += 1) {
            if (allScripts[i].src.indexOf(scriptURL) > -1) {
              if (allScripts[i].parentNode) {
                allScripts[i].parentNode.removeChild(allScripts[i]);
              }
            }
          }
        } // Clean the observer entry


        var mapEntry = SCRIPT_MAP[scriptURL];

        if (mapEntry) {
          delete mapEntry.observers[this.asyncScriptLoaderGetScriptLoaderID()];

          if (options.removeOnUnmount === true) {
            delete SCRIPT_MAP[scriptURL];
          }
        }
      };

      _proto.render = function render() {
        var globalName = options.globalName; // remove asyncScriptOnLoad from childProps

        var _this$props = this.props,
            asyncScriptOnLoad = _this$props.asyncScriptOnLoad,
            forwardedRef = _this$props.forwardedRef,
            childProps = _objectWithoutPropertiesLoose(_this$props, ["asyncScriptOnLoad", "forwardedRef"]); // eslint-disable-line no-unused-vars


        if (globalName && typeof window !== "undefined") {
          childProps[globalName] = typeof window[globalName] !== "undefined" ? window[globalName] : undefined;
        }

        childProps.ref = forwardedRef;
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrappedComponent, childProps);
      };

      return AsyncScriptLoader;
    }(react__WEBPACK_IMPORTED_MODULE_0__.Component); // Note the second param "ref" provided by React.forwardRef.
    // We can pass it along to AsyncScriptLoader as a regular prop, e.g. "forwardedRef"
    // And it can then be attached to the Component.


    var ForwardedComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(AsyncScriptLoader, _extends({}, props, {
        forwardedRef: ref
      }));
    });
    ForwardedComponent.displayName = "AsyncScriptLoader(" + wrappedComponentName + ")";
    ForwardedComponent.propTypes = {
      asyncScriptOnLoad: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
    };
    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default()(ForwardedComponent, WrappedComponent);
  };
}

/***/ }),

/***/ "./node_modules/react-google-recaptcha/lib/esm/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-google-recaptcha/lib/esm/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReCAPTCHA": () => (/* reexport safe */ _recaptcha__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _recaptcha_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recaptcha-wrapper */ "./node_modules/react-google-recaptcha/lib/esm/recaptcha-wrapper.js");
/* harmony import */ var _recaptcha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/recaptcha.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_recaptcha_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/react-google-recaptcha/lib/esm/recaptcha-wrapper.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-google-recaptcha/lib/esm/recaptcha-wrapper.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _recaptcha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/recaptcha.js");
/* harmony import */ var react_async_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-async-script */ "./node_modules/react-async-script/lib/esm/async-script-loader.js");


var callbackName = "onloadcallback";
var globalName = "grecaptcha";

function getOptions() {
  return typeof window !== "undefined" && window.recaptchaOptions || {};
}

function getURL() {
  var dynamicOptions = getOptions();
  var hostname = dynamicOptions.useRecaptchaNet ? "recaptcha.net" : "www.google.com";
  return "https://" + hostname + "/recaptcha/api.js?onload=" + callbackName + "&render=explicit";
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_async_script__WEBPACK_IMPORTED_MODULE_1__["default"])(getURL, {
  callbackName: callbackName,
  globalName: globalName
})(_recaptcha__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./node_modules/react-google-recaptcha/lib/esm/recaptcha.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-google-recaptcha/lib/esm/recaptcha.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReCAPTCHA)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var ReCAPTCHA =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReCAPTCHA, _React$Component);

  function ReCAPTCHA() {
    var _this;

    _this = _React$Component.call(this) || this;
    _this.handleExpired = _this.handleExpired.bind(_assertThisInitialized(_this));
    _this.handleErrored = _this.handleErrored.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleRecaptchaRef = _this.handleRecaptchaRef.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = ReCAPTCHA.prototype;

  _proto.getValue = function getValue() {
    if (this.props.grecaptcha && this._widgetId !== undefined) {
      return this.props.grecaptcha.getResponse(this._widgetId);
    }

    return null;
  };

  _proto.getWidgetId = function getWidgetId() {
    if (this.props.grecaptcha && this._widgetId !== undefined) {
      return this._widgetId;
    }

    return null;
  };

  _proto.execute = function execute() {
    var grecaptcha = this.props.grecaptcha;

    if (grecaptcha && this._widgetId !== undefined) {
      return grecaptcha.execute(this._widgetId);
    } else {
      this._executeRequested = true;
    }
  };

  _proto.executeAsync = function executeAsync() {
    var _this2 = this;

    return new Promise(function (resolve, reject) {
      _this2.executionResolve = resolve;
      _this2.executionReject = reject;

      _this2.execute();
    });
  };

  _proto.reset = function reset() {
    if (this.props.grecaptcha && this._widgetId !== undefined) {
      this.props.grecaptcha.reset(this._widgetId);
    }
  };

  _proto.handleExpired = function handleExpired() {
    if (this.props.onExpired) {
      this.props.onExpired();
    } else {
      this.handleChange(null);
    }
  };

  _proto.handleErrored = function handleErrored() {
    if (this.props.onErrored) {
      this.props.onErrored();
    }

    if (this.executionReject) {
      this.executionReject();
      delete this.executionResolve;
      delete this.executionReject;
    }
  };

  _proto.handleChange = function handleChange(token) {
    if (this.props.onChange) {
      this.props.onChange(token);
    }

    if (this.executionResolve) {
      this.executionResolve(token);
      delete this.executionReject;
      delete this.executionResolve;
    }
  };

  _proto.explicitRender = function explicitRender() {
    if (this.props.grecaptcha && this.props.grecaptcha.render && this._widgetId === undefined) {
      var wrapper = document.createElement("div");
      this._widgetId = this.props.grecaptcha.render(wrapper, {
        sitekey: this.props.sitekey,
        callback: this.handleChange,
        theme: this.props.theme,
        type: this.props.type,
        tabindex: this.props.tabindex,
        "expired-callback": this.handleExpired,
        "error-callback": this.handleErrored,
        size: this.props.size,
        stoken: this.props.stoken,
        hl: this.props.hl,
        badge: this.props.badge
      });
      this.captcha.appendChild(wrapper);
    }

    if (this._executeRequested && this.props.grecaptcha && this._widgetId !== undefined) {
      this._executeRequested = false;
      this.execute();
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    this.explicitRender();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.explicitRender();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this._widgetId !== undefined) {
      this.delayOfCaptchaIframeRemoving();
      this.reset();
    }
  };

  _proto.delayOfCaptchaIframeRemoving = function delayOfCaptchaIframeRemoving() {
    var temporaryNode = document.createElement("div");
    document.body.appendChild(temporaryNode);
    temporaryNode.style.display = "none"; // move of the recaptcha to a temporary node

    while (this.captcha.firstChild) {
      temporaryNode.appendChild(this.captcha.firstChild);
    } // delete the temporary node after reset will be done


    setTimeout(function () {
      document.body.removeChild(temporaryNode);
    }, 5000);
  };

  _proto.handleRecaptchaRef = function handleRecaptchaRef(elem) {
    this.captcha = elem;
  };

  _proto.render = function render() {
    // consume properties owned by the reCATPCHA, pass the rest to the div so the user can style it.

    /* eslint-disable no-unused-vars */
    var _this$props = this.props,
        sitekey = _this$props.sitekey,
        onChange = _this$props.onChange,
        theme = _this$props.theme,
        type = _this$props.type,
        tabindex = _this$props.tabindex,
        onExpired = _this$props.onExpired,
        onErrored = _this$props.onErrored,
        size = _this$props.size,
        stoken = _this$props.stoken,
        grecaptcha = _this$props.grecaptcha,
        badge = _this$props.badge,
        hl = _this$props.hl,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["sitekey", "onChange", "theme", "type", "tabindex", "onExpired", "onErrored", "size", "stoken", "grecaptcha", "badge", "hl"]);
    /* eslint-enable no-unused-vars */


    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({}, childProps, {
      ref: this.handleRecaptchaRef
    }));
  };

  return ReCAPTCHA;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


ReCAPTCHA.displayName = "ReCAPTCHA";
ReCAPTCHA.propTypes = {
  sitekey: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  grecaptcha: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["dark", "light"]),
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["image", "audio"]),
  tabindex: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  onExpired: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onErrored: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["compact", "normal", "invisible"]),
  stoken: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  hl: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  badge: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["bottomright", "bottomleft", "inline"])
};
ReCAPTCHA.defaultProps = {
  onChange: function onChange() {},
  theme: "light",
  type: "image",
  tabindex: 0,
  size: "normal",
  badge: "bottomright"
};

/***/ })

}]);