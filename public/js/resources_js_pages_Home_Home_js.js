"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Home_Home_js"],{

/***/ "./node_modules/css-box-model/dist/css-box-model.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-box-model/dist/css-box-model.esm.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateBox: () => (/* binding */ calculateBox),
/* harmony export */   createBox: () => (/* binding */ createBox),
/* harmony export */   expand: () => (/* binding */ expand),
/* harmony export */   getBox: () => (/* binding */ getBox),
/* harmony export */   getRect: () => (/* binding */ getRect),
/* harmony export */   offset: () => (/* binding */ offset),
/* harmony export */   shrink: () => (/* binding */ shrink),
/* harmony export */   withScroll: () => (/* binding */ withScroll)
/* harmony export */ });
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/esm/tiny-invariant.js");


var getRect = function getRect(_ref) {
  var top = _ref.top,
      right = _ref.right,
      bottom = _ref.bottom,
      left = _ref.left;
  var width = right - left;
  var height = bottom - top;
  var rect = {
    top: top,
    right: right,
    bottom: bottom,
    left: left,
    width: width,
    height: height,
    x: left,
    y: top,
    center: {
      x: (right + left) / 2,
      y: (bottom + top) / 2
    }
  };
  return rect;
};
var expand = function expand(target, expandBy) {
  return {
    top: target.top - expandBy.top,
    left: target.left - expandBy.left,
    bottom: target.bottom + expandBy.bottom,
    right: target.right + expandBy.right
  };
};
var shrink = function shrink(target, shrinkBy) {
  return {
    top: target.top + shrinkBy.top,
    left: target.left + shrinkBy.left,
    bottom: target.bottom - shrinkBy.bottom,
    right: target.right - shrinkBy.right
  };
};

var shift = function shift(target, shiftBy) {
  return {
    top: target.top + shiftBy.y,
    left: target.left + shiftBy.x,
    bottom: target.bottom + shiftBy.y,
    right: target.right + shiftBy.x
  };
};

var noSpacing = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
var createBox = function createBox(_ref2) {
  var borderBox = _ref2.borderBox,
      _ref2$margin = _ref2.margin,
      margin = _ref2$margin === void 0 ? noSpacing : _ref2$margin,
      _ref2$border = _ref2.border,
      border = _ref2$border === void 0 ? noSpacing : _ref2$border,
      _ref2$padding = _ref2.padding,
      padding = _ref2$padding === void 0 ? noSpacing : _ref2$padding;
  var marginBox = getRect(expand(borderBox, margin));
  var paddingBox = getRect(shrink(borderBox, border));
  var contentBox = getRect(shrink(paddingBox, padding));
  return {
    marginBox: marginBox,
    borderBox: getRect(borderBox),
    paddingBox: paddingBox,
    contentBox: contentBox,
    margin: margin,
    border: border,
    padding: padding
  };
};

var parse = function parse(raw) {
  var value = raw.slice(0, -2);
  var suffix = raw.slice(-2);

  if (suffix !== 'px') {
    return 0;
  }

  var result = Number(value);
  !!isNaN(result) ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_0__["default"])(false, "Could not parse value [raw: " + raw + ", without suffix: " + value + "]") : 0 : void 0;
  return result;
};

var getWindowScroll = function getWindowScroll() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
};

var offset = function offset(original, change) {
  var borderBox = original.borderBox,
      border = original.border,
      margin = original.margin,
      padding = original.padding;
  var shifted = shift(borderBox, change);
  return createBox({
    borderBox: shifted,
    border: border,
    margin: margin,
    padding: padding
  });
};
var withScroll = function withScroll(original, scroll) {
  if (scroll === void 0) {
    scroll = getWindowScroll();
  }

  return offset(original, scroll);
};
var calculateBox = function calculateBox(borderBox, styles) {
  var margin = {
    top: parse(styles.marginTop),
    right: parse(styles.marginRight),
    bottom: parse(styles.marginBottom),
    left: parse(styles.marginLeft)
  };
  var padding = {
    top: parse(styles.paddingTop),
    right: parse(styles.paddingRight),
    bottom: parse(styles.paddingBottom),
    left: parse(styles.paddingLeft)
  };
  var border = {
    top: parse(styles.borderTopWidth),
    right: parse(styles.borderRightWidth),
    bottom: parse(styles.borderBottomWidth),
    left: parse(styles.borderLeftWidth)
  };
  return createBox({
    borderBox: borderBox,
    margin: margin,
    padding: padding,
    border: border
  });
};
var getBox = function getBox(el) {
  var borderBox = el.getBoundingClientRect();
  var styles = window.getComputedStyle(el);
  return calculateBox(borderBox, styles);
};




/***/ }),

/***/ "./resources/js/pages/Home/Home.js":
/*!*****************************************!*\
  !*** ./resources/js/pages/Home/Home.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toast-notifications */ "./node_modules/react-toast-notifications/dist/index.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_actions_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/link */ "./resources/js/store/actions/link.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/auth */ "./resources/js/store/actions/auth.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/config */ "./resources/js/config/config.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.es.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
















var ReactAvatarEditor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_ReactAvatarEditor_ReactAvatarEditor_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/ReactAvatarEditor/ReactAvatarEditor */ "./resources/js/components/ReactAvatarEditor/ReactAvatarEditor.js"));
});
var LoadingButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_LoadingButton_Button_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/LoadingButton/Button */ "./resources/js/components/LoadingButton/Button.js"));
});
var Avatar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Avatar_Avatar_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/Avatar/Avatar */ "./resources/js/components/Avatar/Avatar.js"));
});
var Modal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Modal_Modal_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/Modal/Modal */ "./resources/js/components/Modal/Modal.js"));
});
var PhoneScreen = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_PhoneScreen_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/PhoneScreen */ "./resources/js/components/PhoneScreen/index.js"));
});
var Edit = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Edit_Edit_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/Edit/Edit */ "./resources/js/components/Edit/Edit.js"));
});
var Home = function Home() {
  var links = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.links;
  });
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.auth;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useNavigate)();
  var addNewLink = function addNewLink() {
    dispatch((0,_store_actions_link__WEBPACK_IMPORTED_MODULE_4__.addLinkAction)());
  };
  var updateLinkTitle = function updateLinkTitle(text, link) {
    dispatch((0,_store_actions_link__WEBPACK_IMPORTED_MODULE_4__.updateLinkAction)(link.id, text, link.url));
  };
  var updateLinkUrl = function updateLinkUrl(text, link) {
    dispatch((0,_store_actions_link__WEBPACK_IMPORTED_MODULE_4__.updateLinkAction)(link.id, link.title, text));
  };
  var removeLink = function removeLink() {
    dispatch((0,_store_actions_link__WEBPACK_IMPORTED_MODULE_4__.removeLinkAction)(linkid));
    setDeleteModal(false);
  };
  var toggleLink = function toggleLink(id) {
    dispatch((0,_store_actions_link__WEBPACK_IMPORTED_MODULE_4__.toggleLinkAction)(id));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_store_actions_link__WEBPACK_IMPORTED_MODULE_4__.linkListAction)());
  }, []);
  var updateAccount = function updateAccount(field, value) {
    dispatch((0,_store_actions_auth__WEBPACK_IMPORTED_MODULE_5__.updateaccountAction)(_defineProperty({}, field, value)));
  };
  var handleOnDragEnd = function handleOnDragEnd(result) {
    var from = links[result.source.index].id;
    var to = links[result.destination.index].id;
    dispatch((0,_store_actions_link__WEBPACK_IMPORTED_MODULE_4__.swapLinkAction)({
      from: from,
      to: to,
      _from: result.source.index,
      _to: result.destination.index
    }));
  };
  var sendVerification = function sendVerification() {
    dispatch((0,_store_actions_auth__WEBPACK_IMPORTED_MODULE_5__.verificationAction)());
  };
  var uploadAvatar = function uploadAvatar() {
    document.getElementById('profile-avatar').click();
  };
  var imageSelect = function imageSelect(event) {
    setAvatar(event.target.files[0]);
    setAvatarModal(true);
  };
  var readImage = function readImage(avatar) {
    dispatch((0,_store_actions_auth__WEBPACK_IMPORTED_MODULE_5__.uploadAction)({
      avatar: avatar
    }));
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    avatar = _useState2[0],
    setAvatar = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    deleteModal = _useState4[0],
    setDeleteModal = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1),
    _useState6 = _slicedToArray(_useState5, 2),
    linkid = _useState6[0],
    setLinkId = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    emailAlert = _useState8[0],
    setEmailAlert = _useState8[1];
  var showModal = function showModal(id) {
    setLinkId(id);
    setDeleteModal(true);
  };
  var _useToasts = (0,react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__.useToasts)(),
    addToast = _useToasts.addToast;
  var copyLink = function copyLink() {
    var textArea = document.createElement("textarea");
    textArea.value = "bookings247.co/" + user.username;
    // make the textarea out of viewport
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
    addToast('Link Copied', {
      appearance: 'success'
    });
  };
  var toBottom = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.follow.bottom;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_config_config__WEBPACK_IMPORTED_MODULE_6__.setMetaData)("Home - Cookie", "Cookie Home page");
    if (toBottom) {
      var objDiv = document.getElementById("home-scroll");
      objDiv.scrollTop = objDiv.scrollHeight;
      dispatch({
        type: 'TOGGLE_BOTTOM'
      });
    }
  }, []);
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    maskV = _useState10[0],
    setMaskV = _useState10[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _maskV = _toConsumableArray(Array(links.length));
    _maskV.fill(false);
    setMaskV(_maskV);
    setEmailAlert(_toConsumableArray(_maskV));
  }, [links.length]);
  var showMask = function showMask(index) {
    var _maskV = maskV.map(function (val, _index) {
      return index == _index ? !val : false;
    });
    setMaskV(_toConsumableArray(_maskV));
    hideEmail();
  };
  var hideMask = function hideMask(index) {
    var _maskV = _toConsumableArray(Array(links.length));
    _maskV.fill(false);
    setMaskV(_maskV);
  };
  var showEmail = function showEmail(index) {
    var _maskV = emailAlert.map(function (val, _index) {
      return index == _index ? !val : false;
    });
    setEmailAlert(_toConsumableArray(_maskV));
    hideMask();
  };
  var hideEmail = function hideEmail(index) {
    var _maskV = _toConsumableArray(Array(links.length));
    _maskV.fill(false);
    setEmailAlert(_maskV);
  };
  var toggleMask = function toggleMask(index) {
    dispatch((0,_store_actions_link__WEBPACK_IMPORTED_MODULE_4__.toggleMaskAction)(index));
  };
  var toggleSocial = function toggleSocial() {
    dispatch((0,_store_actions_auth__WEBPACK_IMPORTED_MODULE_5__.toggleCompactAction)());
  };
  var toggleSocialView = function toggleSocialView() {
    dispatch((0,_store_actions_auth__WEBPACK_IMPORTED_MODULE_5__.toggleSocialAction)());
  };
  var toggleShowFollow = function toggleShowFollow() {
    dispatch((0,_store_actions_auth__WEBPACK_IMPORTED_MODULE_5__.toggleSocialAction)('showfollow'));
  };
  var toggleBadge = function toggleBadge() {
    if (user.verified == 1) dispatch((0,_store_actions_auth__WEBPACK_IMPORTED_MODULE_5__.toggleSocialAction)('badge'));else navigate('/verification');
  };
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    avatarModal = _useState12[0],
    setAvatarModal = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    emailModal = _useState14[0],
    setEmailModal = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1),
    _useState16 = _slicedToArray(_useState15, 2),
    currentLink = _useState16[0],
    setCurrentLink = _useState16[1];
  var sendEmail = function sendEmail(index) {
    setCurrentLink(index);
    setEmailModal(true);
  };
  var sendEmailRequest = function sendEmailRequest() {
    setEmailModal(false);
    var index = currentLink;
    axios__WEBPACK_IMPORTED_MODULE_3___default().post('/sendemail', {
      id: links[index].id
    }).then(function (res) {
      if (res.status == 200) {
        dispatch({
          type: 'ADD_MESSAGE',
          payload: {
            appearance: 'success',
            content: 'Email Sent Successfully'
          }
        });
        dispatch({
          type: 'MESSAGE_SEND',
          payload: index
        });
      } else dispatch({
        type: 'ADD_MESSAGE',
        payload: {
          appearance: 'error',
          content: 'Error while sending emails'
        }
      });
    });
  };
  var closeAlert = function closeAlert() {
    (0,_store_actions_auth__WEBPACK_IMPORTED_MODULE_5__.toggleSocialAction)('suggest');
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {}),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "d-flex h-100 home-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ReactAvatarEditor, {
        avatar: avatar,
        visible: avatarModal,
        hideModal: function hideModal() {
          return setAvatarModal(false);
        },
        upload: readImage
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Modal, {
        visible: deleteModal,
        hideModal: function hideModal() {
          return setDeleteModal(false);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "d-flex flex-column bg-white p-5 fade-in-down position-relative",
          style: {
            width: 400,
            borderRadius: 20
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
            className: "position-absolute",
            style: {
              left: 20,
              top: 20
            },
            onClick: function onClick() {
              return setDeleteModal(false);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
              "aria-hidden": "true",
              className: "text-black",
              style: {
                fontSize: 25
              },
              children: "\xD7"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
            className: "text-center text-black",
            style: {
              fontWeight: 700
            },
            children: "Delete this link?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
            className: "btn bg-danger border font-bold mt-3 p-3 mb-3 text-white",
            style: {
              borderRadius: 50
            },
            onClick: removeLink,
            children: "Confirm"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
            className: "btn btn-outline-dark font-bold p-3",
            onClick: function onClick() {
              return setDeleteModal(false);
            },
            style: {
              borderRadius: 50
            },
            children: "Cancel"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Modal, {
        visible: emailModal,
        hideModal: function hideModal() {
          return setEmailModal(false);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "d-flex flex-column bg-white p-5 fade-in-down",
          style: {
            width: 400,
            borderRadius: 20
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
            className: "w-100 text-left",
            style: {
              fontWeight: 700
            },
            children: "Send Email?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("h5", {
            style: {
              wordBreak: 'break-all'
            },
            children: ["Send an email to all of your followers for link ", links[currentLink] && links[currentLink].title, " - ", links[currentLink] && (0,_config_config__WEBPACK_IMPORTED_MODULE_6__.cutAmazonTag)(links[currentLink].url), "?"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
            className: "btn btn-primary mb-2 border-50px p-3 bold mt-2",
            onClick: sendEmailRequest,
            children: "Send"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
            className: "btn btn-outline-white text-black border border-50px p-3 bold hover-white hover-bg-black",
            onClick: function onClick() {
              return setEmailModal(false);
            },
            children: "Cancel"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "w-100 d-flex flex-column bg-white home-layout",
        style: {
          marginLeft: 400
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "d-none d-xl-block col-xl-7 title",
            children: "Home"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "col-12 col-xl-5 d-flex justify-content-between",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
              className: "d-flex align-items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                className: "desc",
                children: "My Cookie:"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
                className: "text-decoration-underline ml-2",
                children: ["bookings247.co/", user.username]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
              className: "text-decoration-none",
              onClick: copyLink,
              children: "copy link"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "row w-100 links-container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "col-12 col-xl-7 divide-light-right pl-0 pr-0 scroll h-100",
            id: "home-scroll",
            children: [user.email_verified_at === null || user.email_verified_at == '' || user.email_verified_at == 'null' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "email-verify-alert",
              children: ["To publish your profile please verify your account by clicking the link we've sent to your email (", user.email, "). ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
                className: "text-danger text-decoration-underline font-bold",
                onClick: sendVerification,
                children: "Resend verification link"
              }), " or ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, {
                to: "/settings",
                className: "text-black text-decoration-underline font-bold",
                children: "update email address"
              })]
            }) : user.suggest ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              children: ["Please share your Tripp profile on your social pages and travel groups. The more people that join Tripp, the more travel matches you will get. ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
                onClick: closeAlert,
                children: "Close"
              })]
            }) : '', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "links",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "links-header",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                  children: "Links"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(LoadingButton, {
                  title: "Add New Link",
                  onClick: addNewLink,
                  small: true,
                  height: "auto",
                  mt: 0
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_tooltip__WEBPACK_IMPORTED_MODULE_7__["default"], {
                id: "protectroute",
                type: "dark",
                place: "bottom",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                  children: "Protect Link"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_tooltip__WEBPACK_IMPORTED_MODULE_7__["default"], {
                id: "emailalert",
                type: "dark",
                place: "bottom",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                  children: "Email Alert."
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_tooltip__WEBPACK_IMPORTED_MODULE_7__["default"], {
                id: "deleteroute",
                type: "dark",
                place: "bottom",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                  children: "Delete Link"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_tooltip__WEBPACK_IMPORTED_MODULE_7__["default"], {
                id: "show-follow",
                type: "dark",
                place: "bottom",
                className: "d-flex flex-column tootip-width",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                  className: "bold text-center",
                  children: "Never lose your audience!"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
                  className: "text-center",
                  children: ["If you lose access to any of your social media accounts, you can send", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("br", {}), "your cookie followers your new account details."]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_11__.DragDropContext, {
                onDragEnd: handleOnDragEnd,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_11__.Droppable, {
                  droppableId: "links-body",
                  children: function children(provided) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", _objectSpread(_objectSpread({
                      className: "links-body"
                    }, provided.droppableProps), {}, {
                      ref: provided.innerRef,
                      children: links.map(function (link, index) {
                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_11__.Draggable, {
                          draggableId: "link" + link.id,
                          index: index,
                          children: function children(provided) {
                            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", _objectSpread(_objectSpread(_objectSpread({
                                className: "link",
                                ref: provided.innerRef
                              }, provided.draggableProps), provided.dragHandleProps), {}, {
                                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                                  className: "dot-container",
                                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
                                    className: "bi bi-three-dots-vertical"
                                  })
                                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                                  className: "link-container",
                                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                                    className: "d-flex justify-content-between",
                                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                                      className: "w-100",
                                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Edit, {
                                        value: link.title,
                                        size: 20,
                                        weight: 600,
                                        color: "black",
                                        link: link,
                                        changeHandler: updateLinkTitle,
                                        placeholder: "Title",
                                        maxLength: 40
                                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Edit, {
                                        value: link.url,
                                        size: 14,
                                        weight: 400,
                                        color: "rgb(60, 62, 65)",
                                        link: link,
                                        changeHandler: updateLinkUrl,
                                        type: "url",
                                        placeholder: "Link",
                                        maxLength: 160
                                      })]
                                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                                      className: "form-check form-switch link-disable toggle",
                                      style: {
                                        marginRight: 25
                                      },
                                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                                        className: "form-check-input",
                                        type: "checkbox",
                                        role: "switch",
                                        id: "disable-link",
                                        checked: link.enable,
                                        onChange: function onChange() {
                                          return toggleLink(link.id);
                                        }
                                      })
                                    })]
                                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                                    className: "d-flex justify-content-between mt-2",
                                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
                                        "data-tip": true,
                                        "data-for": "protectroute",
                                        className: "transparent-input pl-0 gray-dark-icon",
                                        onClick: function onClick() {
                                          return showMask(index);
                                        },
                                        "data-toggle": "tooltip",
                                        "data-placement": "bottom",
                                        title: "Protect Link",
                                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
                                          className: "bi bi-shield-check",
                                          style: {
                                            color: link.mask ? 'rgb(0, 215, 116)' : '#BABBBD'
                                          }
                                        })
                                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
                                        "data-tip": true,
                                        "data-for": "emailalert",
                                        className: "transparent-input ml-1 gray-dark-icon",
                                        onClick: function onClick() {
                                          return showEmail(index);
                                        },
                                        "data-toggle": "tooltip",
                                        "data-placement": "bottom",
                                        title: "Email Alert",
                                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
                                          "class": "bi bi-envelope",
                                          style: {
                                            color: link.alert ? 'rgb(0, 215, 116)' : '#BABBBD'
                                          }
                                        })
                                      })]
                                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
                                      "data-tip": true,
                                      "data-for": "deleteroute",
                                      title: "Delete Link",
                                      className: "transparent-input bg-transparent gray-dark-icon",
                                      onClick: function onClick() {
                                        return showModal(link.id);
                                      },
                                      style: {
                                        marginRight: 19
                                      },
                                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
                                        className: "bi bi-trash3",
                                        style: {
                                          color: '#BABBBD'
                                        }
                                      })
                                    })]
                                  })]
                                })]
                              })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                                  className: "link-mask",
                                  style: {
                                    display: maskV[index] ? 'block' : 'none'
                                  },
                                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                                    className: "link-mask-title",
                                    children: ["Link masking and redirect", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
                                      className: "transparent-input",
                                      onClick: function onClick() {
                                        return hideMask(index);
                                      },
                                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
                                        className: "bi bi-x"
                                      })
                                    })]
                                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                                    className: "link-mask-content",
                                    children: "Protect your privacy. Turn this on to mask and hide the link from bots and crawlers."
                                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                                    className: "link-mask-action d-flex",
                                    children: ["Mask this link", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                                      className: "form-check form-switch link-disable toggle",
                                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                                        className: "form-check-input position-relative ml-1",
                                        type: "checkbox",
                                        role: "switch",
                                        onChange: function onChange() {
                                          return toggleMask(link.id);
                                        },
                                        checked: link.mask
                                      })
                                    })]
                                  })]
                                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                                  className: "link-mask",
                                  style: {
                                    display: emailAlert[index] ? 'block' : 'none'
                                  },
                                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                                    className: "link-mask-title",
                                    children: ["Email Alert", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
                                      className: "transparent-input",
                                      onClick: function onClick() {
                                        return hideEmail(index);
                                      },
                                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
                                        className: "bi bi-x"
                                      })
                                    })]
                                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                                    className: "link-mask-content",
                                    children: "Click below to send an email to all your followers asking them to visit this link."
                                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                                    className: "link-mask-action d-flex",
                                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
                                      className: "btn btn-primary bold",
                                      onClick: function onClick() {
                                        return sendEmail(index);
                                      },
                                      children: "Send Email"
                                    })
                                  })]
                                })]
                              })]
                            });
                          }
                        }, "link" + link.id);
                      })
                    }));
                  }
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "appearance",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "appearance-title",
                children: "Appearance"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "appearance-container",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "appearance-display w-100",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Avatar, {
                    username: user.username,
                    url: user.avatar
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "ml-3 w-100",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                      type: "file",
                      id: "profile-avatar",
                      style: {
                        display: 'none'
                      },
                      onChange: imageSelect
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
                      className: "btn btn-link p-0",
                      onClick: uploadAvatar,
                      children: "Upload Image"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Edit, {
                      value: user.display,
                      color: "rgb(60, 62, 65)",
                      onChange: updateAccount,
                      field: "display",
                      maxLength: 40,
                      placeholder: "My Name"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Edit, {
                      value: user.bio,
                      color: "rgb(60, 62, 65)",
                      onChange: updateAccount,
                      field: "bio",
                      maxLength: 160,
                      placeholder: "My Bio"
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "appearance-control",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "appearance-color",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                      children: "Color Style:"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, {
                      className: "btn btn-click p-0",
                      to: "/colorstyle",
                      children: "Change Color"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "appearance-disable",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
                      children: ["Show verified badge ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
                        src: "/images/badge.svg",
                        className: "badge-image"
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                      className: "form-check form-switch link-disable toggle",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                        className: "form-check-input",
                        type: "checkbox",
                        role: "switch",
                        id: "badge",
                        checked: user.badge,
                        onChange: toggleBadge
                      })
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "appearance-disable",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
                      children: ["Show follow button ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
                        "data-tip": true,
                        "data-for": "show-follow",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
                          "class": "font-bold bi bi-info-circle text-dark"
                        })
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                      className: "form-check form-switch link-disable toggle",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                        className: "form-check-input",
                        type: "checkbox",
                        role: "switch",
                        id: "disable-social",
                        checked: user.showfollow,
                        onChange: toggleShowFollow
                      })
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "appearance-disable",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                      children: "Show social icons:"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                      className: "form-check form-switch link-disable toggle",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                        className: "form-check-input",
                        type: "checkbox",
                        role: "switch",
                        id: "disable-social",
                        checked: user.showsocial,
                        onChange: toggleSocialView
                      })
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "appearance-disable",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                      children: "Compact social icons:"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                      className: "form-check form-switch link-disable toggle",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                        className: "form-check-input",
                        type: "checkbox",
                        role: "switch",
                        id: "disable-social",
                        checked: user.social,
                        onChange: toggleSocial
                      })
                    })]
                  })]
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "d-none d-xl-block col-5 p-5 h-100",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(PhoneScreen, {})
          })]
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoizeOne);


/***/ }),

/***/ "./node_modules/raf-schd/dist/raf-schd.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/raf-schd/dist/raf-schd.esm.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var rafSchd = function rafSchd(fn) {
  var lastArgs = [];
  var frameId = null;

  var wrapperFn = function wrapperFn() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    lastArgs = args;

    if (frameId) {
      return;
    }

    frameId = requestAnimationFrame(function () {
      frameId = null;
      fn.apply(void 0, lastArgs);
    });
  };

  wrapperFn.cancel = function () {
    if (!frameId) {
      return;
    }

    cancelAnimationFrame(frameId);
    frameId = null;
  };

  return wrapperFn;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rafSchd);


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragDropContext: () => (/* binding */ DragDropContext),
/* harmony export */   Draggable: () => (/* binding */ PublicDraggable),
/* harmony export */   Droppable: () => (/* binding */ ConnectedDroppable),
/* harmony export */   resetServerContext: () => (/* binding */ resetServerContext),
/* harmony export */   useKeyboardSensor: () => (/* binding */ useKeyboardSensor),
/* harmony export */   useMouseSensor: () => (/* binding */ useMouseSensor),
/* harmony export */   useTouchSensor: () => (/* binding */ useTouchSensor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/index.js");
/* harmony import */ var use_memo_one__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! use-memo-one */ "./node_modules/use-memo-one/dist/use-memo-one.esm.js");
/* harmony import */ var css_box_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! css-box-model */ "./node_modules/css-box-model/dist/css-box-model.esm.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var raf_schd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raf-schd */ "./node_modules/raf-schd/dist/raf-schd.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");











var isProduction = "development" === 'production';
var spacesAndTabs = /[ \t]{2,}/g;
var lineStartWithSpaces = /^[ \t]*/gm;

var clean = function clean(value) {
  return value.replace(spacesAndTabs, ' ').replace(lineStartWithSpaces, '').trim();
};

var getDevMessage = function getDevMessage(message) {
  return clean("\n  %creact-beautiful-dnd\n\n  %c" + clean(message) + "\n\n  %c\uD83D\uDC77\u200D This is a development only message. It will be removed in production builds.\n");
};

var getFormattedMessage = function getFormattedMessage(message) {
  return [getDevMessage(message), 'color: #00C584; font-size: 1.2em; font-weight: bold;', 'line-height: 1.5', 'color: #723874;'];
};
var isDisabledFlag = '__react-beautiful-dnd-disable-dev-warnings';
function log(type, message) {
  var _console;

  if (isProduction) {
    return;
  }

  if (typeof window !== 'undefined' && window[isDisabledFlag]) {
    return;
  }

  (_console = console)[type].apply(_console, getFormattedMessage(message));
}
var warning = log.bind(null, 'warn');
var error = log.bind(null, 'error');

function noop() {}

function getOptions(shared, fromBinding) {
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, shared, {}, fromBinding);
}

function bindEvents(el, bindings, sharedOptions) {
  var unbindings = bindings.map(function (binding) {
    var options = getOptions(sharedOptions, binding.options);
    el.addEventListener(binding.eventName, binding.fn, options);
    return function unbind() {
      el.removeEventListener(binding.eventName, binding.fn, options);
    };
  });
  return function unbindAll() {
    unbindings.forEach(function (unbind) {
      unbind();
    });
  };
}

var isProduction$1 = "development" === 'production';
var prefix = 'Invariant failed';
function RbdInvariant(message) {
  this.message = message;
}

RbdInvariant.prototype.toString = function toString() {
  return this.message;
};

function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction$1) {
    throw new RbdInvariant(prefix);
  } else {
    throw new RbdInvariant(prefix + ": " + (message || ''));
  }
}

var ErrorBoundary = function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ErrorBoundary, _React$Component);

  function ErrorBoundary() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.callbacks = null;
    _this.unbind = noop;

    _this.onWindowError = function (event) {
      var callbacks = _this.getCallbacks();

      if (callbacks.isDragging()) {
        callbacks.tryAbort();
         true ? warning("\n        An error was caught by our window 'error' event listener while a drag was occurring.\n        The active drag has been aborted.\n      ") : 0;
      }

      var err = event.error;

      if (err instanceof RbdInvariant) {
        event.preventDefault();

        if (true) {
          error(err.message);
        }
      }
    };

    _this.getCallbacks = function () {
      if (!_this.callbacks) {
        throw new Error('Unable to find AppCallbacks in <ErrorBoundary/>');
      }

      return _this.callbacks;
    };

    _this.setCallbacks = function (callbacks) {
      _this.callbacks = callbacks;
    };

    return _this;
  }

  var _proto = ErrorBoundary.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unbind = bindEvents(window, [{
      eventName: 'error',
      fn: this.onWindowError
    }]);
  };

  _proto.componentDidCatch = function componentDidCatch(err) {
    if (err instanceof RbdInvariant) {
      if (true) {
        error(err.message);
      }

      this.setState({});
      return;
    }

    throw err;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unbind();
  };

  _proto.render = function render() {
    return this.props.children(this.setCallbacks);
  };

  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var dragHandleUsageInstructions = "\n  Press space bar to start a drag.\n  When dragging you can use the arrow keys to move the item around and escape to cancel.\n  Some screen readers may require you to be in focus mode or to use your pass through key\n";

var position = function position(index) {
  return index + 1;
};

var onDragStart = function onDragStart(start) {
  return "\n  You have lifted an item in position " + position(start.source.index) + "\n";
};

var withLocation = function withLocation(source, destination) {
  var isInHomeList = source.droppableId === destination.droppableId;
  var startPosition = position(source.index);
  var endPosition = position(destination.index);

  if (isInHomeList) {
    return "\n      You have moved the item from position " + startPosition + "\n      to position " + endPosition + "\n    ";
  }

  return "\n    You have moved the item from position " + startPosition + "\n    in list " + source.droppableId + "\n    to list " + destination.droppableId + "\n    in position " + endPosition + "\n  ";
};

var withCombine = function withCombine(id, source, combine) {
  var inHomeList = source.droppableId === combine.droppableId;

  if (inHomeList) {
    return "\n      The item " + id + "\n      has been combined with " + combine.draggableId;
  }

  return "\n      The item " + id + "\n      in list " + source.droppableId + "\n      has been combined with " + combine.draggableId + "\n      in list " + combine.droppableId + "\n    ";
};

var onDragUpdate = function onDragUpdate(update) {
  var location = update.destination;

  if (location) {
    return withLocation(update.source, location);
  }

  var combine = update.combine;

  if (combine) {
    return withCombine(update.draggableId, update.source, combine);
  }

  return 'You are over an area that cannot be dropped on';
};

var returnedToStart = function returnedToStart(source) {
  return "\n  The item has returned to its starting position\n  of " + position(source.index) + "\n";
};

var onDragEnd = function onDragEnd(result) {
  if (result.reason === 'CANCEL') {
    return "\n      Movement cancelled.\n      " + returnedToStart(result.source) + "\n    ";
  }

  var location = result.destination;
  var combine = result.combine;

  if (location) {
    return "\n      You have dropped the item.\n      " + withLocation(result.source, location) + "\n    ";
  }

  if (combine) {
    return "\n      You have dropped the item.\n      " + withCombine(result.draggableId, result.source, combine) + "\n    ";
  }

  return "\n    The item has been dropped while not over a drop area.\n    " + returnedToStart(result.source) + "\n  ";
};

var preset = {
  dragHandleUsageInstructions: dragHandleUsageInstructions,
  onDragStart: onDragStart,
  onDragUpdate: onDragUpdate,
  onDragEnd: onDragEnd
};

var origin = {
  x: 0,
  y: 0
};
var add = function add(point1, point2) {
  return {
    x: point1.x + point2.x,
    y: point1.y + point2.y
  };
};
var subtract = function subtract(point1, point2) {
  return {
    x: point1.x - point2.x,
    y: point1.y - point2.y
  };
};
var isEqual = function isEqual(point1, point2) {
  return point1.x === point2.x && point1.y === point2.y;
};
var negate = function negate(point) {
  return {
    x: point.x !== 0 ? -point.x : 0,
    y: point.y !== 0 ? -point.y : 0
  };
};
var patch = function patch(line, value, otherValue) {
  var _ref;

  if (otherValue === void 0) {
    otherValue = 0;
  }

  return _ref = {}, _ref[line] = value, _ref[line === 'x' ? 'y' : 'x'] = otherValue, _ref;
};
var distance = function distance(point1, point2) {
  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
};
var closest = function closest(target, points) {
  return Math.min.apply(Math, points.map(function (point) {
    return distance(target, point);
  }));
};
var apply = function apply(fn) {
  return function (point) {
    return {
      x: fn(point.x),
      y: fn(point.y)
    };
  };
};

var executeClip = (function (frame, subject) {
  var result = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.getRect)({
    top: Math.max(subject.top, frame.top),
    right: Math.min(subject.right, frame.right),
    bottom: Math.min(subject.bottom, frame.bottom),
    left: Math.max(subject.left, frame.left)
  });

  if (result.width <= 0 || result.height <= 0) {
    return null;
  }

  return result;
});

var offsetByPosition = function offsetByPosition(spacing, point) {
  return {
    top: spacing.top + point.y,
    left: spacing.left + point.x,
    bottom: spacing.bottom + point.y,
    right: spacing.right + point.x
  };
};
var getCorners = function getCorners(spacing) {
  return [{
    x: spacing.left,
    y: spacing.top
  }, {
    x: spacing.right,
    y: spacing.top
  }, {
    x: spacing.left,
    y: spacing.bottom
  }, {
    x: spacing.right,
    y: spacing.bottom
  }];
};
var noSpacing = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};

var scroll = function scroll(target, frame) {
  if (!frame) {
    return target;
  }

  return offsetByPosition(target, frame.scroll.diff.displacement);
};

var increase = function increase(target, axis, withPlaceholder) {
  if (withPlaceholder && withPlaceholder.increasedBy) {
    var _extends2;

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, target, (_extends2 = {}, _extends2[axis.end] = target[axis.end] + withPlaceholder.increasedBy[axis.line], _extends2));
  }

  return target;
};

var clip = function clip(target, frame) {
  if (frame && frame.shouldClipSubject) {
    return executeClip(frame.pageMarginBox, target);
  }

  return (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.getRect)(target);
};

var getSubject = (function (_ref) {
  var page = _ref.page,
      withPlaceholder = _ref.withPlaceholder,
      axis = _ref.axis,
      frame = _ref.frame;
  var scrolled = scroll(page.marginBox, frame);
  var increased = increase(scrolled, axis, withPlaceholder);
  var clipped = clip(increased, frame);
  return {
    page: page,
    withPlaceholder: withPlaceholder,
    active: clipped
  };
});

var scrollDroppable = (function (droppable, newScroll) {
  !droppable.frame ?  true ? invariant(false) : 0 : void 0;
  var scrollable = droppable.frame;
  var scrollDiff = subtract(newScroll, scrollable.scroll.initial);
  var scrollDisplacement = negate(scrollDiff);

  var frame = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, scrollable, {
    scroll: {
      initial: scrollable.scroll.initial,
      current: newScroll,
      diff: {
        value: scrollDiff,
        displacement: scrollDisplacement
      },
      max: scrollable.scroll.max
    }
  });

  var subject = getSubject({
    page: droppable.subject.page,
    withPlaceholder: droppable.subject.withPlaceholder,
    axis: droppable.axis,
    frame: frame
  });

  var result = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, droppable, {
    frame: frame,
    subject: subject
  });

  return result;
});

function isInteger(value) {
  if (Number.isInteger) {
    return Number.isInteger(value);
  }

  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}
function values(map) {
  if (Object.values) {
    return Object.values(map);
  }

  return Object.keys(map).map(function (key) {
    return map[key];
  });
}
function findIndex(list, predicate) {
  if (list.findIndex) {
    return list.findIndex(predicate);
  }

  for (var i = 0; i < list.length; i++) {
    if (predicate(list[i])) {
      return i;
    }
  }

  return -1;
}
function find(list, predicate) {
  if (list.find) {
    return list.find(predicate);
  }

  var index = findIndex(list, predicate);

  if (index !== -1) {
    return list[index];
  }

  return undefined;
}
function toArray(list) {
  return Array.prototype.slice.call(list);
}

var toDroppableMap = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (droppables) {
  return droppables.reduce(function (previous, current) {
    previous[current.descriptor.id] = current;
    return previous;
  }, {});
});
var toDraggableMap = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (draggables) {
  return draggables.reduce(function (previous, current) {
    previous[current.descriptor.id] = current;
    return previous;
  }, {});
});
var toDroppableList = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (droppables) {
  return values(droppables);
});
var toDraggableList = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (draggables) {
  return values(draggables);
});

var getDraggablesInsideDroppable = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (droppableId, draggables) {
  var result = toDraggableList(draggables).filter(function (draggable) {
    return droppableId === draggable.descriptor.droppableId;
  }).sort(function (a, b) {
    return a.descriptor.index - b.descriptor.index;
  });
  return result;
});

function tryGetDestination(impact) {
  if (impact.at && impact.at.type === 'REORDER') {
    return impact.at.destination;
  }

  return null;
}
function tryGetCombine(impact) {
  if (impact.at && impact.at.type === 'COMBINE') {
    return impact.at.combine;
  }

  return null;
}

var removeDraggableFromList = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (remove, list) {
  return list.filter(function (item) {
    return item.descriptor.id !== remove.descriptor.id;
  });
});

var moveToNextCombine = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      draggable = _ref.draggable,
      destination = _ref.destination,
      insideDestination = _ref.insideDestination,
      previousImpact = _ref.previousImpact;

  if (!destination.isCombineEnabled) {
    return null;
  }

  var location = tryGetDestination(previousImpact);

  if (!location) {
    return null;
  }

  function getImpact(target) {
    var at = {
      type: 'COMBINE',
      combine: {
        draggableId: target,
        droppableId: destination.descriptor.id
      }
    };
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, previousImpact, {
      at: at
    });
  }

  var all = previousImpact.displaced.all;
  var closestId = all.length ? all[0] : null;

  if (isMovingForward) {
    return closestId ? getImpact(closestId) : null;
  }

  var withoutDraggable = removeDraggableFromList(draggable, insideDestination);

  if (!closestId) {
    if (!withoutDraggable.length) {
      return null;
    }

    var last = withoutDraggable[withoutDraggable.length - 1];
    return getImpact(last.descriptor.id);
  }

  var indexOfClosest = findIndex(withoutDraggable, function (d) {
    return d.descriptor.id === closestId;
  });
  !(indexOfClosest !== -1) ?  true ? invariant(false, 'Could not find displaced item in set') : 0 : void 0;
  var proposedIndex = indexOfClosest - 1;

  if (proposedIndex < 0) {
    return null;
  }

  var before = withoutDraggable[proposedIndex];
  return getImpact(before.descriptor.id);
});

var isHomeOf = (function (draggable, destination) {
  return draggable.descriptor.droppableId === destination.descriptor.id;
});

var noDisplacedBy = {
  point: origin,
  value: 0
};
var emptyGroups = {
  invisible: {},
  visible: {},
  all: []
};
var noImpact = {
  displaced: emptyGroups,
  displacedBy: noDisplacedBy,
  at: null
};

var isWithin = (function (lowerBound, upperBound) {
  return function (value) {
    return lowerBound <= value && value <= upperBound;
  };
});

var isPartiallyVisibleThroughFrame = (function (frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function (subject) {
    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);

    if (isContained) {
      return true;
    }

    var isPartiallyVisibleVertically = isWithinVertical(subject.top) || isWithinVertical(subject.bottom);
    var isPartiallyVisibleHorizontally = isWithinHorizontal(subject.left) || isWithinHorizontal(subject.right);
    var isPartiallyContained = isPartiallyVisibleVertically && isPartiallyVisibleHorizontally;

    if (isPartiallyContained) {
      return true;
    }

    var isBiggerVertically = subject.top < frame.top && subject.bottom > frame.bottom;
    var isBiggerHorizontally = subject.left < frame.left && subject.right > frame.right;
    var isTargetBiggerThanFrame = isBiggerVertically && isBiggerHorizontally;

    if (isTargetBiggerThanFrame) {
      return true;
    }

    var isTargetBiggerOnOneAxis = isBiggerVertically && isPartiallyVisibleHorizontally || isBiggerHorizontally && isPartiallyVisibleVertically;
    return isTargetBiggerOnOneAxis;
  };
});

var isTotallyVisibleThroughFrame = (function (frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function (subject) {
    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    return isContained;
  };
});

var vertical = {
  direction: 'vertical',
  line: 'y',
  crossAxisLine: 'x',
  start: 'top',
  end: 'bottom',
  size: 'height',
  crossAxisStart: 'left',
  crossAxisEnd: 'right',
  crossAxisSize: 'width'
};
var horizontal = {
  direction: 'horizontal',
  line: 'x',
  crossAxisLine: 'y',
  start: 'left',
  end: 'right',
  size: 'width',
  crossAxisStart: 'top',
  crossAxisEnd: 'bottom',
  crossAxisSize: 'height'
};

var isTotallyVisibleThroughFrameOnAxis = (function (axis) {
  return function (frame) {
    var isWithinVertical = isWithin(frame.top, frame.bottom);
    var isWithinHorizontal = isWithin(frame.left, frame.right);
    return function (subject) {
      if (axis === vertical) {
        return isWithinVertical(subject.top) && isWithinVertical(subject.bottom);
      }

      return isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    };
  };
});

var getDroppableDisplaced = function getDroppableDisplaced(target, destination) {
  var displacement = destination.frame ? destination.frame.scroll.diff.displacement : origin;
  return offsetByPosition(target, displacement);
};

var isVisibleInDroppable = function isVisibleInDroppable(target, destination, isVisibleThroughFrameFn) {
  if (!destination.subject.active) {
    return false;
  }

  return isVisibleThroughFrameFn(destination.subject.active)(target);
};

var isVisibleInViewport = function isVisibleInViewport(target, viewport, isVisibleThroughFrameFn) {
  return isVisibleThroughFrameFn(viewport)(target);
};

var isVisible = function isVisible(_ref) {
  var toBeDisplaced = _ref.target,
      destination = _ref.destination,
      viewport = _ref.viewport,
      withDroppableDisplacement = _ref.withDroppableDisplacement,
      isVisibleThroughFrameFn = _ref.isVisibleThroughFrameFn;
  var displacedTarget = withDroppableDisplacement ? getDroppableDisplaced(toBeDisplaced, destination) : toBeDisplaced;
  return isVisibleInDroppable(displacedTarget, destination, isVisibleThroughFrameFn) && isVisibleInViewport(displacedTarget, viewport, isVisibleThroughFrameFn);
};

var isPartiallyVisible = function isPartiallyVisible(args) {
  return isVisible((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, args, {
    isVisibleThroughFrameFn: isPartiallyVisibleThroughFrame
  }));
};
var isTotallyVisible = function isTotallyVisible(args) {
  return isVisible((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, args, {
    isVisibleThroughFrameFn: isTotallyVisibleThroughFrame
  }));
};
var isTotallyVisibleOnAxis = function isTotallyVisibleOnAxis(args) {
  return isVisible((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, args, {
    isVisibleThroughFrameFn: isTotallyVisibleThroughFrameOnAxis(args.destination.axis)
  }));
};

var getShouldAnimate = function getShouldAnimate(id, last, forceShouldAnimate) {
  if (typeof forceShouldAnimate === 'boolean') {
    return forceShouldAnimate;
  }

  if (!last) {
    return true;
  }

  var invisible = last.invisible,
      visible = last.visible;

  if (invisible[id]) {
    return false;
  }

  var previous = visible[id];
  return previous ? previous.shouldAnimate : true;
};

function getTarget(draggable, displacedBy) {
  var marginBox = draggable.page.marginBox;
  var expandBy = {
    top: displacedBy.point.y,
    right: 0,
    bottom: 0,
    left: displacedBy.point.x
  };
  return (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.getRect)((0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.expand)(marginBox, expandBy));
}

function getDisplacementGroups(_ref) {
  var afterDragging = _ref.afterDragging,
      destination = _ref.destination,
      displacedBy = _ref.displacedBy,
      viewport = _ref.viewport,
      forceShouldAnimate = _ref.forceShouldAnimate,
      last = _ref.last;
  return afterDragging.reduce(function process(groups, draggable) {
    var target = getTarget(draggable, displacedBy);
    var id = draggable.descriptor.id;
    groups.all.push(id);
    var isVisible = isPartiallyVisible({
      target: target,
      destination: destination,
      viewport: viewport,
      withDroppableDisplacement: true
    });

    if (!isVisible) {
      groups.invisible[draggable.descriptor.id] = true;
      return groups;
    }

    var shouldAnimate = getShouldAnimate(id, last, forceShouldAnimate);
    var displacement = {
      draggableId: id,
      shouldAnimate: shouldAnimate
    };
    groups.visible[id] = displacement;
    return groups;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}

function getIndexOfLastItem(draggables, options) {
  if (!draggables.length) {
    return 0;
  }

  var indexOfLastItem = draggables[draggables.length - 1].descriptor.index;
  return options.inHomeList ? indexOfLastItem : indexOfLastItem + 1;
}

function goAtEnd(_ref) {
  var insideDestination = _ref.insideDestination,
      inHomeList = _ref.inHomeList,
      displacedBy = _ref.displacedBy,
      destination = _ref.destination;
  var newIndex = getIndexOfLastItem(insideDestination, {
    inHomeList: inHomeList
  });
  return {
    displaced: emptyGroups,
    displacedBy: displacedBy,
    at: {
      type: 'REORDER',
      destination: {
        droppableId: destination.descriptor.id,
        index: newIndex
      }
    }
  };
}

function calculateReorderImpact(_ref2) {
  var draggable = _ref2.draggable,
      insideDestination = _ref2.insideDestination,
      destination = _ref2.destination,
      viewport = _ref2.viewport,
      displacedBy = _ref2.displacedBy,
      last = _ref2.last,
      index = _ref2.index,
      forceShouldAnimate = _ref2.forceShouldAnimate;
  var inHomeList = isHomeOf(draggable, destination);

  if (index == null) {
    return goAtEnd({
      insideDestination: insideDestination,
      inHomeList: inHomeList,
      displacedBy: displacedBy,
      destination: destination
    });
  }

  var match = find(insideDestination, function (item) {
    return item.descriptor.index === index;
  });

  if (!match) {
    return goAtEnd({
      insideDestination: insideDestination,
      inHomeList: inHomeList,
      displacedBy: displacedBy,
      destination: destination
    });
  }

  var withoutDragging = removeDraggableFromList(draggable, insideDestination);
  var sliceFrom = insideDestination.indexOf(match);
  var impacted = withoutDragging.slice(sliceFrom);
  var displaced = getDisplacementGroups({
    afterDragging: impacted,
    destination: destination,
    displacedBy: displacedBy,
    last: last,
    viewport: viewport.frame,
    forceShouldAnimate: forceShouldAnimate
  });
  return {
    displaced: displaced,
    displacedBy: displacedBy,
    at: {
      type: 'REORDER',
      destination: {
        droppableId: destination.descriptor.id,
        index: index
      }
    }
  };
}

function didStartAfterCritical(draggableId, afterCritical) {
  return Boolean(afterCritical.effected[draggableId]);
}

var fromCombine = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      destination = _ref.destination,
      draggables = _ref.draggables,
      combine = _ref.combine,
      afterCritical = _ref.afterCritical;

  if (!destination.isCombineEnabled) {
    return null;
  }

  var combineId = combine.draggableId;
  var combineWith = draggables[combineId];
  var combineWithIndex = combineWith.descriptor.index;
  var didCombineWithStartAfterCritical = didStartAfterCritical(combineId, afterCritical);

  if (didCombineWithStartAfterCritical) {
    if (isMovingForward) {
      return combineWithIndex;
    }

    return combineWithIndex - 1;
  }

  if (isMovingForward) {
    return combineWithIndex + 1;
  }

  return combineWithIndex;
});

var fromReorder = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      isInHomeList = _ref.isInHomeList,
      insideDestination = _ref.insideDestination,
      location = _ref.location;

  if (!insideDestination.length) {
    return null;
  }

  var currentIndex = location.index;
  var proposedIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;
  var firstIndex = insideDestination[0].descriptor.index;
  var lastIndex = insideDestination[insideDestination.length - 1].descriptor.index;
  var upperBound = isInHomeList ? lastIndex : lastIndex + 1;

  if (proposedIndex < firstIndex) {
    return null;
  }

  if (proposedIndex > upperBound) {
    return null;
  }

  return proposedIndex;
});

var moveToNextIndex = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      isInHomeList = _ref.isInHomeList,
      draggable = _ref.draggable,
      draggables = _ref.draggables,
      destination = _ref.destination,
      insideDestination = _ref.insideDestination,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport,
      afterCritical = _ref.afterCritical;
  var wasAt = previousImpact.at;
  !wasAt ?  true ? invariant(false, 'Cannot move in direction without previous impact location') : 0 : void 0;

  if (wasAt.type === 'REORDER') {
    var _newIndex = fromReorder({
      isMovingForward: isMovingForward,
      isInHomeList: isInHomeList,
      location: wasAt.destination,
      insideDestination: insideDestination
    });

    if (_newIndex == null) {
      return null;
    }

    return calculateReorderImpact({
      draggable: draggable,
      insideDestination: insideDestination,
      destination: destination,
      viewport: viewport,
      last: previousImpact.displaced,
      displacedBy: previousImpact.displacedBy,
      index: _newIndex
    });
  }

  var newIndex = fromCombine({
    isMovingForward: isMovingForward,
    destination: destination,
    displaced: previousImpact.displaced,
    draggables: draggables,
    combine: wasAt.combine,
    afterCritical: afterCritical
  });

  if (newIndex == null) {
    return null;
  }

  return calculateReorderImpact({
    draggable: draggable,
    insideDestination: insideDestination,
    destination: destination,
    viewport: viewport,
    last: previousImpact.displaced,
    displacedBy: previousImpact.displacedBy,
    index: newIndex
  });
});

var getCombinedItemDisplacement = (function (_ref) {
  var displaced = _ref.displaced,
      afterCritical = _ref.afterCritical,
      combineWith = _ref.combineWith,
      displacedBy = _ref.displacedBy;
  var isDisplaced = Boolean(displaced.visible[combineWith] || displaced.invisible[combineWith]);

  if (didStartAfterCritical(combineWith, afterCritical)) {
    return isDisplaced ? origin : negate(displacedBy.point);
  }

  return isDisplaced ? displacedBy.point : origin;
});

var whenCombining = (function (_ref) {
  var afterCritical = _ref.afterCritical,
      impact = _ref.impact,
      draggables = _ref.draggables;
  var combine = tryGetCombine(impact);
  !combine ?  true ? invariant(false) : 0 : void 0;
  var combineWith = combine.draggableId;
  var center = draggables[combineWith].page.borderBox.center;
  var displaceBy = getCombinedItemDisplacement({
    displaced: impact.displaced,
    afterCritical: afterCritical,
    combineWith: combineWith,
    displacedBy: impact.displacedBy
  });
  return add(center, displaceBy);
});

var distanceFromStartToBorderBoxCenter = function distanceFromStartToBorderBoxCenter(axis, box) {
  return box.margin[axis.start] + box.borderBox[axis.size] / 2;
};

var distanceFromEndToBorderBoxCenter = function distanceFromEndToBorderBoxCenter(axis, box) {
  return box.margin[axis.end] + box.borderBox[axis.size] / 2;
};

var getCrossAxisBorderBoxCenter = function getCrossAxisBorderBoxCenter(axis, target, isMoving) {
  return target[axis.crossAxisStart] + isMoving.margin[axis.crossAxisStart] + isMoving.borderBox[axis.crossAxisSize] / 2;
};

var goAfter = function goAfter(_ref) {
  var axis = _ref.axis,
      moveRelativeTo = _ref.moveRelativeTo,
      isMoving = _ref.isMoving;
  return patch(axis.line, moveRelativeTo.marginBox[axis.end] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
};
var goBefore = function goBefore(_ref2) {
  var axis = _ref2.axis,
      moveRelativeTo = _ref2.moveRelativeTo,
      isMoving = _ref2.isMoving;
  return patch(axis.line, moveRelativeTo.marginBox[axis.start] - distanceFromEndToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
};
var goIntoStart = function goIntoStart(_ref3) {
  var axis = _ref3.axis,
      moveInto = _ref3.moveInto,
      isMoving = _ref3.isMoving;
  return patch(axis.line, moveInto.contentBox[axis.start] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveInto.contentBox, isMoving));
};

var whenReordering = (function (_ref) {
  var impact = _ref.impact,
      draggable = _ref.draggable,
      draggables = _ref.draggables,
      droppable = _ref.droppable,
      afterCritical = _ref.afterCritical;
  var insideDestination = getDraggablesInsideDroppable(droppable.descriptor.id, draggables);
  var draggablePage = draggable.page;
  var axis = droppable.axis;

  if (!insideDestination.length) {
    return goIntoStart({
      axis: axis,
      moveInto: droppable.page,
      isMoving: draggablePage
    });
  }

  var displaced = impact.displaced,
      displacedBy = impact.displacedBy;
  var closestAfter = displaced.all[0];

  if (closestAfter) {
    var closest = draggables[closestAfter];

    if (didStartAfterCritical(closestAfter, afterCritical)) {
      return goBefore({
        axis: axis,
        moveRelativeTo: closest.page,
        isMoving: draggablePage
      });
    }

    var withDisplacement = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.offset)(closest.page, displacedBy.point);
    return goBefore({
      axis: axis,
      moveRelativeTo: withDisplacement,
      isMoving: draggablePage
    });
  }

  var last = insideDestination[insideDestination.length - 1];

  if (last.descriptor.id === draggable.descriptor.id) {
    return draggablePage.borderBox.center;
  }

  if (didStartAfterCritical(last.descriptor.id, afterCritical)) {
    var page = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.offset)(last.page, negate(afterCritical.displacedBy.point));
    return goAfter({
      axis: axis,
      moveRelativeTo: page,
      isMoving: draggablePage
    });
  }

  return goAfter({
    axis: axis,
    moveRelativeTo: last.page,
    isMoving: draggablePage
  });
});

var withDroppableDisplacement = (function (droppable, point) {
  var frame = droppable.frame;

  if (!frame) {
    return point;
  }

  return add(point, frame.scroll.diff.displacement);
});

var getResultWithoutDroppableDisplacement = function getResultWithoutDroppableDisplacement(_ref) {
  var impact = _ref.impact,
      draggable = _ref.draggable,
      droppable = _ref.droppable,
      draggables = _ref.draggables,
      afterCritical = _ref.afterCritical;
  var original = draggable.page.borderBox.center;
  var at = impact.at;

  if (!droppable) {
    return original;
  }

  if (!at) {
    return original;
  }

  if (at.type === 'REORDER') {
    return whenReordering({
      impact: impact,
      draggable: draggable,
      draggables: draggables,
      droppable: droppable,
      afterCritical: afterCritical
    });
  }

  return whenCombining({
    impact: impact,
    draggables: draggables,
    afterCritical: afterCritical
  });
};

var getPageBorderBoxCenterFromImpact = (function (args) {
  var withoutDisplacement = getResultWithoutDroppableDisplacement(args);
  var droppable = args.droppable;
  var withDisplacement = droppable ? withDroppableDisplacement(droppable, withoutDisplacement) : withoutDisplacement;
  return withDisplacement;
});

var scrollViewport = (function (viewport, newScroll) {
  var diff = subtract(newScroll, viewport.scroll.initial);
  var displacement = negate(diff);
  var frame = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.getRect)({
    top: newScroll.y,
    bottom: newScroll.y + viewport.frame.height,
    left: newScroll.x,
    right: newScroll.x + viewport.frame.width
  });
  var updated = {
    frame: frame,
    scroll: {
      initial: viewport.scroll.initial,
      max: viewport.scroll.max,
      current: newScroll,
      diff: {
        value: diff,
        displacement: displacement
      }
    }
  };
  return updated;
});

function getDraggables(ids, draggables) {
  return ids.map(function (id) {
    return draggables[id];
  });
}

function tryGetVisible(id, groups) {
  for (var i = 0; i < groups.length; i++) {
    var displacement = groups[i].visible[id];

    if (displacement) {
      return displacement;
    }
  }

  return null;
}

var speculativelyIncrease = (function (_ref) {
  var impact = _ref.impact,
      viewport = _ref.viewport,
      destination = _ref.destination,
      draggables = _ref.draggables,
      maxScrollChange = _ref.maxScrollChange;
  var scrolledViewport = scrollViewport(viewport, add(viewport.scroll.current, maxScrollChange));
  var scrolledDroppable = destination.frame ? scrollDroppable(destination, add(destination.frame.scroll.current, maxScrollChange)) : destination;
  var last = impact.displaced;
  var withViewportScroll = getDisplacementGroups({
    afterDragging: getDraggables(last.all, draggables),
    destination: destination,
    displacedBy: impact.displacedBy,
    viewport: scrolledViewport.frame,
    last: last,
    forceShouldAnimate: false
  });
  var withDroppableScroll = getDisplacementGroups({
    afterDragging: getDraggables(last.all, draggables),
    destination: scrolledDroppable,
    displacedBy: impact.displacedBy,
    viewport: viewport.frame,
    last: last,
    forceShouldAnimate: false
  });
  var invisible = {};
  var visible = {};
  var groups = [last, withViewportScroll, withDroppableScroll];
  last.all.forEach(function (id) {
    var displacement = tryGetVisible(id, groups);

    if (displacement) {
      visible[id] = displacement;
      return;
    }

    invisible[id] = true;
  });

  var newImpact = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, impact, {
    displaced: {
      all: last.all,
      invisible: invisible,
      visible: visible
    }
  });

  return newImpact;
});

var withViewportDisplacement = (function (viewport, point) {
  return add(viewport.scroll.diff.displacement, point);
});

var getClientFromPageBorderBoxCenter = (function (_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      draggable = _ref.draggable,
      viewport = _ref.viewport;
  var withoutPageScrollChange = withViewportDisplacement(viewport, pageBorderBoxCenter);
  var offset = subtract(withoutPageScrollChange, draggable.page.borderBox.center);
  return add(draggable.client.borderBox.center, offset);
});

var isTotallyVisibleInNewLocation = (function (_ref) {
  var draggable = _ref.draggable,
      destination = _ref.destination,
      newPageBorderBoxCenter = _ref.newPageBorderBoxCenter,
      viewport = _ref.viewport,
      withDroppableDisplacement = _ref.withDroppableDisplacement,
      _ref$onlyOnMainAxis = _ref.onlyOnMainAxis,
      onlyOnMainAxis = _ref$onlyOnMainAxis === void 0 ? false : _ref$onlyOnMainAxis;
  var changeNeeded = subtract(newPageBorderBoxCenter, draggable.page.borderBox.center);
  var shifted = offsetByPosition(draggable.page.borderBox, changeNeeded);
  var args = {
    target: shifted,
    destination: destination,
    withDroppableDisplacement: withDroppableDisplacement,
    viewport: viewport
  };
  return onlyOnMainAxis ? isTotallyVisibleOnAxis(args) : isTotallyVisible(args);
});

var moveToNextPlace = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      draggable = _ref.draggable,
      destination = _ref.destination,
      draggables = _ref.draggables,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport,
      previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
      previousClientSelection = _ref.previousClientSelection,
      afterCritical = _ref.afterCritical;

  if (!destination.isEnabled) {
    return null;
  }

  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var isInHomeList = isHomeOf(draggable, destination);
  var impact = moveToNextCombine({
    isMovingForward: isMovingForward,
    draggable: draggable,
    destination: destination,
    insideDestination: insideDestination,
    previousImpact: previousImpact
  }) || moveToNextIndex({
    isMovingForward: isMovingForward,
    isInHomeList: isInHomeList,
    draggable: draggable,
    draggables: draggables,
    destination: destination,
    insideDestination: insideDestination,
    previousImpact: previousImpact,
    viewport: viewport,
    afterCritical: afterCritical
  });

  if (!impact) {
    return null;
  }

  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact: impact,
    draggable: draggable,
    droppable: destination,
    draggables: draggables,
    afterCritical: afterCritical
  });
  var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
    draggable: draggable,
    destination: destination,
    newPageBorderBoxCenter: pageBorderBoxCenter,
    viewport: viewport.frame,
    withDroppableDisplacement: false,
    onlyOnMainAxis: true
  });

  if (isVisibleInNewLocation) {
    var clientSelection = getClientFromPageBorderBoxCenter({
      pageBorderBoxCenter: pageBorderBoxCenter,
      draggable: draggable,
      viewport: viewport
    });
    return {
      clientSelection: clientSelection,
      impact: impact,
      scrollJumpRequest: null
    };
  }

  var distance = subtract(pageBorderBoxCenter, previousPageBorderBoxCenter);
  var cautious = speculativelyIncrease({
    impact: impact,
    viewport: viewport,
    destination: destination,
    draggables: draggables,
    maxScrollChange: distance
  });
  return {
    clientSelection: previousClientSelection,
    impact: cautious,
    scrollJumpRequest: distance
  };
});

var getKnownActive = function getKnownActive(droppable) {
  var rect = droppable.subject.active;
  !rect ?  true ? invariant(false, 'Cannot get clipped area from droppable') : 0 : void 0;
  return rect;
};

var getBestCrossAxisDroppable = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      source = _ref.source,
      droppables = _ref.droppables,
      viewport = _ref.viewport;
  var active = source.subject.active;

  if (!active) {
    return null;
  }

  var axis = source.axis;
  var isBetweenSourceClipped = isWithin(active[axis.start], active[axis.end]);
  var candidates = toDroppableList(droppables).filter(function (droppable) {
    return droppable !== source;
  }).filter(function (droppable) {
    return droppable.isEnabled;
  }).filter(function (droppable) {
    return Boolean(droppable.subject.active);
  }).filter(function (droppable) {
    return isPartiallyVisibleThroughFrame(viewport.frame)(getKnownActive(droppable));
  }).filter(function (droppable) {
    var activeOfTarget = getKnownActive(droppable);

    if (isMovingForward) {
      return active[axis.crossAxisEnd] < activeOfTarget[axis.crossAxisEnd];
    }

    return activeOfTarget[axis.crossAxisStart] < active[axis.crossAxisStart];
  }).filter(function (droppable) {
    var activeOfTarget = getKnownActive(droppable);
    var isBetweenDestinationClipped = isWithin(activeOfTarget[axis.start], activeOfTarget[axis.end]);
    return isBetweenSourceClipped(activeOfTarget[axis.start]) || isBetweenSourceClipped(activeOfTarget[axis.end]) || isBetweenDestinationClipped(active[axis.start]) || isBetweenDestinationClipped(active[axis.end]);
  }).sort(function (a, b) {
    var first = getKnownActive(a)[axis.crossAxisStart];
    var second = getKnownActive(b)[axis.crossAxisStart];

    if (isMovingForward) {
      return first - second;
    }

    return second - first;
  }).filter(function (droppable, index, array) {
    return getKnownActive(droppable)[axis.crossAxisStart] === getKnownActive(array[0])[axis.crossAxisStart];
  });

  if (!candidates.length) {
    return null;
  }

  if (candidates.length === 1) {
    return candidates[0];
  }

  var contains = candidates.filter(function (droppable) {
    var isWithinDroppable = isWithin(getKnownActive(droppable)[axis.start], getKnownActive(droppable)[axis.end]);
    return isWithinDroppable(pageBorderBoxCenter[axis.line]);
  });

  if (contains.length === 1) {
    return contains[0];
  }

  if (contains.length > 1) {
    return contains.sort(function (a, b) {
      return getKnownActive(a)[axis.start] - getKnownActive(b)[axis.start];
    })[0];
  }

  return candidates.sort(function (a, b) {
    var first = closest(pageBorderBoxCenter, getCorners(getKnownActive(a)));
    var second = closest(pageBorderBoxCenter, getCorners(getKnownActive(b)));

    if (first !== second) {
      return first - second;
    }

    return getKnownActive(a)[axis.start] - getKnownActive(b)[axis.start];
  })[0];
});

var getCurrentPageBorderBoxCenter = function getCurrentPageBorderBoxCenter(draggable, afterCritical) {
  var original = draggable.page.borderBox.center;
  return didStartAfterCritical(draggable.descriptor.id, afterCritical) ? subtract(original, afterCritical.displacedBy.point) : original;
};
var getCurrentPageBorderBox = function getCurrentPageBorderBox(draggable, afterCritical) {
  var original = draggable.page.borderBox;
  return didStartAfterCritical(draggable.descriptor.id, afterCritical) ? offsetByPosition(original, negate(afterCritical.displacedBy.point)) : original;
};

var getClosestDraggable = (function (_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      viewport = _ref.viewport,
      destination = _ref.destination,
      insideDestination = _ref.insideDestination,
      afterCritical = _ref.afterCritical;
  var sorted = insideDestination.filter(function (draggable) {
    return isTotallyVisible({
      target: getCurrentPageBorderBox(draggable, afterCritical),
      destination: destination,
      viewport: viewport.frame,
      withDroppableDisplacement: true
    });
  }).sort(function (a, b) {
    var distanceToA = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(a, afterCritical)));
    var distanceToB = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(b, afterCritical)));

    if (distanceToA < distanceToB) {
      return -1;
    }

    if (distanceToB < distanceToA) {
      return 1;
    }

    return a.descriptor.index - b.descriptor.index;
  });
  return sorted[0] || null;
});

var getDisplacedBy = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function getDisplacedBy(axis, displaceBy) {
  var displacement = displaceBy[axis.line];
  return {
    value: displacement,
    point: patch(axis.line, displacement)
  };
});

var getRequiredGrowthForPlaceholder = function getRequiredGrowthForPlaceholder(droppable, placeholderSize, draggables) {
  var axis = droppable.axis;

  if (droppable.descriptor.mode === 'virtual') {
    return patch(axis.line, placeholderSize[axis.line]);
  }

  var availableSpace = droppable.subject.page.contentBox[axis.size];
  var insideDroppable = getDraggablesInsideDroppable(droppable.descriptor.id, draggables);
  var spaceUsed = insideDroppable.reduce(function (sum, dimension) {
    return sum + dimension.client.marginBox[axis.size];
  }, 0);
  var requiredSpace = spaceUsed + placeholderSize[axis.line];
  var needsToGrowBy = requiredSpace - availableSpace;

  if (needsToGrowBy <= 0) {
    return null;
  }

  return patch(axis.line, needsToGrowBy);
};

var withMaxScroll = function withMaxScroll(frame, max) {
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, frame, {
    scroll: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, frame.scroll, {
      max: max
    })
  });
};

var addPlaceholder = function addPlaceholder(droppable, draggable, draggables) {
  var frame = droppable.frame;
  !!isHomeOf(draggable, droppable) ?  true ? invariant(false, 'Should not add placeholder space to home list') : 0 : void 0;
  !!droppable.subject.withPlaceholder ?  true ? invariant(false, 'Cannot add placeholder size to a subject when it already has one') : 0 : void 0;
  var placeholderSize = getDisplacedBy(droppable.axis, draggable.displaceBy).point;
  var requiredGrowth = getRequiredGrowthForPlaceholder(droppable, placeholderSize, draggables);
  var added = {
    placeholderSize: placeholderSize,
    increasedBy: requiredGrowth,
    oldFrameMaxScroll: droppable.frame ? droppable.frame.scroll.max : null
  };

  if (!frame) {
    var _subject = getSubject({
      page: droppable.subject.page,
      withPlaceholder: added,
      axis: droppable.axis,
      frame: droppable.frame
    });

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, droppable, {
      subject: _subject
    });
  }

  var maxScroll = requiredGrowth ? add(frame.scroll.max, requiredGrowth) : frame.scroll.max;
  var newFrame = withMaxScroll(frame, maxScroll);
  var subject = getSubject({
    page: droppable.subject.page,
    withPlaceholder: added,
    axis: droppable.axis,
    frame: newFrame
  });
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, droppable, {
    subject: subject,
    frame: newFrame
  });
};
var removePlaceholder = function removePlaceholder(droppable) {
  var added = droppable.subject.withPlaceholder;
  !added ?  true ? invariant(false, 'Cannot remove placeholder form subject when there was none') : 0 : void 0;
  var frame = droppable.frame;

  if (!frame) {
    var _subject2 = getSubject({
      page: droppable.subject.page,
      axis: droppable.axis,
      frame: null,
      withPlaceholder: null
    });

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, droppable, {
      subject: _subject2
    });
  }

  var oldMaxScroll = added.oldFrameMaxScroll;
  !oldMaxScroll ?  true ? invariant(false, 'Expected droppable with frame to have old max frame scroll when removing placeholder') : 0 : void 0;
  var newFrame = withMaxScroll(frame, oldMaxScroll);
  var subject = getSubject({
    page: droppable.subject.page,
    axis: droppable.axis,
    frame: newFrame,
    withPlaceholder: null
  });
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, droppable, {
    subject: subject,
    frame: newFrame
  });
};

var moveToNewDroppable = (function (_ref) {
  var previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
      moveRelativeTo = _ref.moveRelativeTo,
      insideDestination = _ref.insideDestination,
      draggable = _ref.draggable,
      draggables = _ref.draggables,
      destination = _ref.destination,
      viewport = _ref.viewport,
      afterCritical = _ref.afterCritical;

  if (!moveRelativeTo) {
    if (insideDestination.length) {
      return null;
    }

    var proposed = {
      displaced: emptyGroups,
      displacedBy: noDisplacedBy,
      at: {
        type: 'REORDER',
        destination: {
          droppableId: destination.descriptor.id,
          index: 0
        }
      }
    };
    var proposedPageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
      impact: proposed,
      draggable: draggable,
      droppable: destination,
      draggables: draggables,
      afterCritical: afterCritical
    });
    var withPlaceholder = isHomeOf(draggable, destination) ? destination : addPlaceholder(destination, draggable, draggables);
    var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
      draggable: draggable,
      destination: withPlaceholder,
      newPageBorderBoxCenter: proposedPageBorderBoxCenter,
      viewport: viewport.frame,
      withDroppableDisplacement: false,
      onlyOnMainAxis: true
    });
    return isVisibleInNewLocation ? proposed : null;
  }

  var isGoingBeforeTarget = Boolean(previousPageBorderBoxCenter[destination.axis.line] <= moveRelativeTo.page.borderBox.center[destination.axis.line]);

  var proposedIndex = function () {
    var relativeTo = moveRelativeTo.descriptor.index;

    if (moveRelativeTo.descriptor.id === draggable.descriptor.id) {
      return relativeTo;
    }

    if (isGoingBeforeTarget) {
      return relativeTo;
    }

    return relativeTo + 1;
  }();

  var displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
  return calculateReorderImpact({
    draggable: draggable,
    insideDestination: insideDestination,
    destination: destination,
    viewport: viewport,
    displacedBy: displacedBy,
    last: emptyGroups,
    index: proposedIndex
  });
});

var moveCrossAxis = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
      draggable = _ref.draggable,
      isOver = _ref.isOver,
      draggables = _ref.draggables,
      droppables = _ref.droppables,
      viewport = _ref.viewport,
      afterCritical = _ref.afterCritical;
  var destination = getBestCrossAxisDroppable({
    isMovingForward: isMovingForward,
    pageBorderBoxCenter: previousPageBorderBoxCenter,
    source: isOver,
    droppables: droppables,
    viewport: viewport
  });

  if (!destination) {
    return null;
  }

  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var moveRelativeTo = getClosestDraggable({
    pageBorderBoxCenter: previousPageBorderBoxCenter,
    viewport: viewport,
    destination: destination,
    insideDestination: insideDestination,
    afterCritical: afterCritical
  });
  var impact = moveToNewDroppable({
    previousPageBorderBoxCenter: previousPageBorderBoxCenter,
    destination: destination,
    draggable: draggable,
    draggables: draggables,
    moveRelativeTo: moveRelativeTo,
    insideDestination: insideDestination,
    viewport: viewport,
    afterCritical: afterCritical
  });

  if (!impact) {
    return null;
  }

  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact: impact,
    draggable: draggable,
    droppable: destination,
    draggables: draggables,
    afterCritical: afterCritical
  });
  var clientSelection = getClientFromPageBorderBoxCenter({
    pageBorderBoxCenter: pageBorderBoxCenter,
    draggable: draggable,
    viewport: viewport
  });
  return {
    clientSelection: clientSelection,
    impact: impact,
    scrollJumpRequest: null
  };
});

var whatIsDraggedOver = (function (impact) {
  var at = impact.at;

  if (!at) {
    return null;
  }

  if (at.type === 'REORDER') {
    return at.destination.droppableId;
  }

  return at.combine.droppableId;
});

var getDroppableOver = function getDroppableOver(impact, droppables) {
  var id = whatIsDraggedOver(impact);
  return id ? droppables[id] : null;
};

var moveInDirection = (function (_ref) {
  var state = _ref.state,
      type = _ref.type;
  var isActuallyOver = getDroppableOver(state.impact, state.dimensions.droppables);
  var isMainAxisMovementAllowed = Boolean(isActuallyOver);
  var home = state.dimensions.droppables[state.critical.droppable.id];
  var isOver = isActuallyOver || home;
  var direction = isOver.axis.direction;
  var isMovingOnMainAxis = direction === 'vertical' && (type === 'MOVE_UP' || type === 'MOVE_DOWN') || direction === 'horizontal' && (type === 'MOVE_LEFT' || type === 'MOVE_RIGHT');

  if (isMovingOnMainAxis && !isMainAxisMovementAllowed) {
    return null;
  }

  var isMovingForward = type === 'MOVE_DOWN' || type === 'MOVE_RIGHT';
  var draggable = state.dimensions.draggables[state.critical.draggable.id];
  var previousPageBorderBoxCenter = state.current.page.borderBoxCenter;
  var _state$dimensions = state.dimensions,
      draggables = _state$dimensions.draggables,
      droppables = _state$dimensions.droppables;
  return isMovingOnMainAxis ? moveToNextPlace({
    isMovingForward: isMovingForward,
    previousPageBorderBoxCenter: previousPageBorderBoxCenter,
    draggable: draggable,
    destination: isOver,
    draggables: draggables,
    viewport: state.viewport,
    previousClientSelection: state.current.client.selection,
    previousImpact: state.impact,
    afterCritical: state.afterCritical
  }) : moveCrossAxis({
    isMovingForward: isMovingForward,
    previousPageBorderBoxCenter: previousPageBorderBoxCenter,
    draggable: draggable,
    isOver: isOver,
    draggables: draggables,
    droppables: droppables,
    viewport: state.viewport,
    afterCritical: state.afterCritical
  });
});

function isMovementAllowed(state) {
  return state.phase === 'DRAGGING' || state.phase === 'COLLECTING';
}

function isPositionInFrame(frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function run(point) {
    return isWithinVertical(point.y) && isWithinHorizontal(point.x);
  };
}

function getHasOverlap(first, second) {
  return first.left < second.right && first.right > second.left && first.top < second.bottom && first.bottom > second.top;
}

function getFurthestAway(_ref) {
  var pageBorderBox = _ref.pageBorderBox,
      draggable = _ref.draggable,
      candidates = _ref.candidates;
  var startCenter = draggable.page.borderBox.center;
  var sorted = candidates.map(function (candidate) {
    var axis = candidate.axis;
    var target = patch(candidate.axis.line, pageBorderBox.center[axis.line], candidate.page.borderBox.center[axis.crossAxisLine]);
    return {
      id: candidate.descriptor.id,
      distance: distance(startCenter, target)
    };
  }).sort(function (a, b) {
    return b.distance - a.distance;
  });
  return sorted[0] ? sorted[0].id : null;
}

function getDroppableOver$1(_ref2) {
  var pageBorderBox = _ref2.pageBorderBox,
      draggable = _ref2.draggable,
      droppables = _ref2.droppables;
  var candidates = toDroppableList(droppables).filter(function (item) {
    if (!item.isEnabled) {
      return false;
    }

    var active = item.subject.active;

    if (!active) {
      return false;
    }

    if (!getHasOverlap(pageBorderBox, active)) {
      return false;
    }

    if (isPositionInFrame(active)(pageBorderBox.center)) {
      return true;
    }

    var axis = item.axis;
    var childCenter = active.center[axis.crossAxisLine];
    var crossAxisStart = pageBorderBox[axis.crossAxisStart];
    var crossAxisEnd = pageBorderBox[axis.crossAxisEnd];
    var isContained = isWithin(active[axis.crossAxisStart], active[axis.crossAxisEnd]);
    var isStartContained = isContained(crossAxisStart);
    var isEndContained = isContained(crossAxisEnd);

    if (!isStartContained && !isEndContained) {
      return true;
    }

    if (isStartContained) {
      return crossAxisStart < childCenter;
    }

    return crossAxisEnd > childCenter;
  });

  if (!candidates.length) {
    return null;
  }

  if (candidates.length === 1) {
    return candidates[0].descriptor.id;
  }

  return getFurthestAway({
    pageBorderBox: pageBorderBox,
    draggable: draggable,
    candidates: candidates
  });
}

var offsetRectByPosition = function offsetRectByPosition(rect, point) {
  return (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.getRect)(offsetByPosition(rect, point));
};

var withDroppableScroll = (function (droppable, area) {
  var frame = droppable.frame;

  if (!frame) {
    return area;
  }

  return offsetRectByPosition(area, frame.scroll.diff.value);
});

function getIsDisplaced(_ref) {
  var displaced = _ref.displaced,
      id = _ref.id;
  return Boolean(displaced.visible[id] || displaced.invisible[id]);
}

function atIndex(_ref) {
  var draggable = _ref.draggable,
      closest = _ref.closest,
      inHomeList = _ref.inHomeList;

  if (!closest) {
    return null;
  }

  if (!inHomeList) {
    return closest.descriptor.index;
  }

  if (closest.descriptor.index > draggable.descriptor.index) {
    return closest.descriptor.index - 1;
  }

  return closest.descriptor.index;
}

var getReorderImpact = (function (_ref2) {
  var targetRect = _ref2.pageBorderBoxWithDroppableScroll,
      draggable = _ref2.draggable,
      destination = _ref2.destination,
      insideDestination = _ref2.insideDestination,
      last = _ref2.last,
      viewport = _ref2.viewport,
      afterCritical = _ref2.afterCritical;
  var axis = destination.axis;
  var displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
  var displacement = displacedBy.value;
  var targetStart = targetRect[axis.start];
  var targetEnd = targetRect[axis.end];
  var withoutDragging = removeDraggableFromList(draggable, insideDestination);
  var closest = find(withoutDragging, function (child) {
    var id = child.descriptor.id;
    var childCenter = child.page.borderBox.center[axis.line];
    var didStartAfterCritical$1 = didStartAfterCritical(id, afterCritical);
    var isDisplaced = getIsDisplaced({
      displaced: last,
      id: id
    });

    if (didStartAfterCritical$1) {
      if (isDisplaced) {
        return targetEnd <= childCenter;
      }

      return targetStart < childCenter - displacement;
    }

    if (isDisplaced) {
      return targetEnd <= childCenter + displacement;
    }

    return targetStart < childCenter;
  });
  var newIndex = atIndex({
    draggable: draggable,
    closest: closest,
    inHomeList: isHomeOf(draggable, destination)
  });
  return calculateReorderImpact({
    draggable: draggable,
    insideDestination: insideDestination,
    destination: destination,
    viewport: viewport,
    last: last,
    displacedBy: displacedBy,
    index: newIndex
  });
});

var combineThresholdDivisor = 4;
var getCombineImpact = (function (_ref) {
  var draggable = _ref.draggable,
      targetRect = _ref.pageBorderBoxWithDroppableScroll,
      previousImpact = _ref.previousImpact,
      destination = _ref.destination,
      insideDestination = _ref.insideDestination,
      afterCritical = _ref.afterCritical;

  if (!destination.isCombineEnabled) {
    return null;
  }

  var axis = destination.axis;
  var displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
  var displacement = displacedBy.value;
  var targetStart = targetRect[axis.start];
  var targetEnd = targetRect[axis.end];
  var withoutDragging = removeDraggableFromList(draggable, insideDestination);
  var combineWith = find(withoutDragging, function (child) {
    var id = child.descriptor.id;
    var childRect = child.page.borderBox;
    var childSize = childRect[axis.size];
    var threshold = childSize / combineThresholdDivisor;
    var didStartAfterCritical$1 = didStartAfterCritical(id, afterCritical);
    var isDisplaced = getIsDisplaced({
      displaced: previousImpact.displaced,
      id: id
    });

    if (didStartAfterCritical$1) {
      if (isDisplaced) {
        return targetEnd > childRect[axis.start] + threshold && targetEnd < childRect[axis.end] - threshold;
      }

      return targetStart > childRect[axis.start] - displacement + threshold && targetStart < childRect[axis.end] - displacement - threshold;
    }

    if (isDisplaced) {
      return targetEnd > childRect[axis.start] + displacement + threshold && targetEnd < childRect[axis.end] + displacement - threshold;
    }

    return targetStart > childRect[axis.start] + threshold && targetStart < childRect[axis.end] - threshold;
  });

  if (!combineWith) {
    return null;
  }

  var impact = {
    displacedBy: displacedBy,
    displaced: previousImpact.displaced,
    at: {
      type: 'COMBINE',
      combine: {
        draggableId: combineWith.descriptor.id,
        droppableId: destination.descriptor.id
      }
    }
  };
  return impact;
});

var getDragImpact = (function (_ref) {
  var pageOffset = _ref.pageOffset,
      draggable = _ref.draggable,
      draggables = _ref.draggables,
      droppables = _ref.droppables,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport,
      afterCritical = _ref.afterCritical;
  var pageBorderBox = offsetRectByPosition(draggable.page.borderBox, pageOffset);
  var destinationId = getDroppableOver$1({
    pageBorderBox: pageBorderBox,
    draggable: draggable,
    droppables: droppables
  });

  if (!destinationId) {
    return noImpact;
  }

  var destination = droppables[destinationId];
  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var pageBorderBoxWithDroppableScroll = withDroppableScroll(destination, pageBorderBox);
  return getCombineImpact({
    pageBorderBoxWithDroppableScroll: pageBorderBoxWithDroppableScroll,
    draggable: draggable,
    previousImpact: previousImpact,
    destination: destination,
    insideDestination: insideDestination,
    afterCritical: afterCritical
  }) || getReorderImpact({
    pageBorderBoxWithDroppableScroll: pageBorderBoxWithDroppableScroll,
    draggable: draggable,
    destination: destination,
    insideDestination: insideDestination,
    last: previousImpact.displaced,
    viewport: viewport,
    afterCritical: afterCritical
  });
});

var patchDroppableMap = (function (droppables, updated) {
  var _extends2;

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, droppables, (_extends2 = {}, _extends2[updated.descriptor.id] = updated, _extends2));
});

var clearUnusedPlaceholder = function clearUnusedPlaceholder(_ref) {
  var previousImpact = _ref.previousImpact,
      impact = _ref.impact,
      droppables = _ref.droppables;
  var last = whatIsDraggedOver(previousImpact);
  var now = whatIsDraggedOver(impact);

  if (!last) {
    return droppables;
  }

  if (last === now) {
    return droppables;
  }

  var lastDroppable = droppables[last];

  if (!lastDroppable.subject.withPlaceholder) {
    return droppables;
  }

  var updated = removePlaceholder(lastDroppable);
  return patchDroppableMap(droppables, updated);
};

var recomputePlaceholders = (function (_ref2) {
  var draggable = _ref2.draggable,
      draggables = _ref2.draggables,
      droppables = _ref2.droppables,
      previousImpact = _ref2.previousImpact,
      impact = _ref2.impact;
  var cleaned = clearUnusedPlaceholder({
    previousImpact: previousImpact,
    impact: impact,
    droppables: droppables
  });
  var isOver = whatIsDraggedOver(impact);

  if (!isOver) {
    return cleaned;
  }

  var droppable = droppables[isOver];

  if (isHomeOf(draggable, droppable)) {
    return cleaned;
  }

  if (droppable.subject.withPlaceholder) {
    return cleaned;
  }

  var patched = addPlaceholder(droppable, draggable, draggables);
  return patchDroppableMap(cleaned, patched);
});

var update = (function (_ref) {
  var state = _ref.state,
      forcedClientSelection = _ref.clientSelection,
      forcedDimensions = _ref.dimensions,
      forcedViewport = _ref.viewport,
      forcedImpact = _ref.impact,
      scrollJumpRequest = _ref.scrollJumpRequest;
  var viewport = forcedViewport || state.viewport;
  var dimensions = forcedDimensions || state.dimensions;
  var clientSelection = forcedClientSelection || state.current.client.selection;
  var offset = subtract(clientSelection, state.initial.client.selection);
  var client = {
    offset: offset,
    selection: clientSelection,
    borderBoxCenter: add(state.initial.client.borderBoxCenter, offset)
  };
  var page = {
    selection: add(client.selection, viewport.scroll.current),
    borderBoxCenter: add(client.borderBoxCenter, viewport.scroll.current),
    offset: add(client.offset, viewport.scroll.diff.value)
  };
  var current = {
    client: client,
    page: page
  };

  if (state.phase === 'COLLECTING') {
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      phase: 'COLLECTING'
    }, state, {
      dimensions: dimensions,
      viewport: viewport,
      current: current
    });
  }

  var draggable = dimensions.draggables[state.critical.draggable.id];
  var newImpact = forcedImpact || getDragImpact({
    pageOffset: page.offset,
    draggable: draggable,
    draggables: dimensions.draggables,
    droppables: dimensions.droppables,
    previousImpact: state.impact,
    viewport: viewport,
    afterCritical: state.afterCritical
  });
  var withUpdatedPlaceholders = recomputePlaceholders({
    draggable: draggable,
    impact: newImpact,
    previousImpact: state.impact,
    draggables: dimensions.draggables,
    droppables: dimensions.droppables
  });

  var result = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
    current: current,
    dimensions: {
      draggables: dimensions.draggables,
      droppables: withUpdatedPlaceholders
    },
    impact: newImpact,
    viewport: viewport,
    scrollJumpRequest: scrollJumpRequest || null,
    forceShouldAnimate: scrollJumpRequest ? false : null
  });

  return result;
});

function getDraggables$1(ids, draggables) {
  return ids.map(function (id) {
    return draggables[id];
  });
}

var recompute = (function (_ref) {
  var impact = _ref.impact,
      viewport = _ref.viewport,
      draggables = _ref.draggables,
      destination = _ref.destination,
      forceShouldAnimate = _ref.forceShouldAnimate;
  var last = impact.displaced;
  var afterDragging = getDraggables$1(last.all, draggables);
  var displaced = getDisplacementGroups({
    afterDragging: afterDragging,
    destination: destination,
    displacedBy: impact.displacedBy,
    viewport: viewport.frame,
    forceShouldAnimate: forceShouldAnimate,
    last: last
  });
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, impact, {
    displaced: displaced
  });
});

var getClientBorderBoxCenter = (function (_ref) {
  var impact = _ref.impact,
      draggable = _ref.draggable,
      droppable = _ref.droppable,
      draggables = _ref.draggables,
      viewport = _ref.viewport,
      afterCritical = _ref.afterCritical;
  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact: impact,
    draggable: draggable,
    draggables: draggables,
    droppable: droppable,
    afterCritical: afterCritical
  });
  return getClientFromPageBorderBoxCenter({
    pageBorderBoxCenter: pageBorderBoxCenter,
    draggable: draggable,
    viewport: viewport
  });
});

var refreshSnap = (function (_ref) {
  var state = _ref.state,
      forcedDimensions = _ref.dimensions,
      forcedViewport = _ref.viewport;
  !(state.movementMode === 'SNAP') ?  true ? invariant(false) : 0 : void 0;
  var needsVisibilityCheck = state.impact;
  var viewport = forcedViewport || state.viewport;
  var dimensions = forcedDimensions || state.dimensions;
  var draggables = dimensions.draggables,
      droppables = dimensions.droppables;
  var draggable = draggables[state.critical.draggable.id];
  var isOver = whatIsDraggedOver(needsVisibilityCheck);
  !isOver ?  true ? invariant(false, 'Must be over a destination in SNAP movement mode') : 0 : void 0;
  var destination = droppables[isOver];
  var impact = recompute({
    impact: needsVisibilityCheck,
    viewport: viewport,
    destination: destination,
    draggables: draggables
  });
  var clientSelection = getClientBorderBoxCenter({
    impact: impact,
    draggable: draggable,
    droppable: destination,
    draggables: draggables,
    viewport: viewport,
    afterCritical: state.afterCritical
  });
  return update({
    impact: impact,
    clientSelection: clientSelection,
    state: state,
    dimensions: dimensions,
    viewport: viewport
  });
});

var getHomeLocation = (function (descriptor) {
  return {
    index: descriptor.index,
    droppableId: descriptor.droppableId
  };
});

var getLiftEffect = (function (_ref) {
  var draggable = _ref.draggable,
      home = _ref.home,
      draggables = _ref.draggables,
      viewport = _ref.viewport;
  var displacedBy = getDisplacedBy(home.axis, draggable.displaceBy);
  var insideHome = getDraggablesInsideDroppable(home.descriptor.id, draggables);
  var rawIndex = insideHome.indexOf(draggable);
  !(rawIndex !== -1) ?  true ? invariant(false, 'Expected draggable to be inside home list') : 0 : void 0;
  var afterDragging = insideHome.slice(rawIndex + 1);
  var effected = afterDragging.reduce(function (previous, item) {
    previous[item.descriptor.id] = true;
    return previous;
  }, {});
  var afterCritical = {
    inVirtualList: home.descriptor.mode === 'virtual',
    displacedBy: displacedBy,
    effected: effected
  };
  var displaced = getDisplacementGroups({
    afterDragging: afterDragging,
    destination: home,
    displacedBy: displacedBy,
    last: null,
    viewport: viewport.frame,
    forceShouldAnimate: false
  });
  var impact = {
    displaced: displaced,
    displacedBy: displacedBy,
    at: {
      type: 'REORDER',
      destination: getHomeLocation(draggable.descriptor)
    }
  };
  return {
    impact: impact,
    afterCritical: afterCritical
  };
});

var patchDimensionMap = (function (dimensions, updated) {
  return {
    draggables: dimensions.draggables,
    droppables: patchDroppableMap(dimensions.droppables, updated)
  };
});

var start = function start(key) {
  if (true) {
    {
      return;
    }
  }
};
var finish = function finish(key) {
  if (true) {
    {
      return;
    }
  }
};

var offsetDraggable = (function (_ref) {
  var draggable = _ref.draggable,
      offset$1 = _ref.offset,
      initialWindowScroll = _ref.initialWindowScroll;
  var client = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.offset)(draggable.client, offset$1);
  var page = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.withScroll)(client, initialWindowScroll);

  var moved = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, draggable, {
    placeholder: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, draggable.placeholder, {
      client: client
    }),
    client: client,
    page: page
  });

  return moved;
});

var getFrame = (function (droppable) {
  var frame = droppable.frame;
  !frame ?  true ? invariant(false, 'Expected Droppable to have a frame') : 0 : void 0;
  return frame;
});

var adjustAdditionsForScrollChanges = (function (_ref) {
  var additions = _ref.additions,
      updatedDroppables = _ref.updatedDroppables,
      viewport = _ref.viewport;
  var windowScrollChange = viewport.scroll.diff.value;
  return additions.map(function (draggable) {
    var droppableId = draggable.descriptor.droppableId;
    var modified = updatedDroppables[droppableId];
    var frame = getFrame(modified);
    var droppableScrollChange = frame.scroll.diff.value;
    var totalChange = add(windowScrollChange, droppableScrollChange);
    var moved = offsetDraggable({
      draggable: draggable,
      offset: totalChange,
      initialWindowScroll: viewport.scroll.initial
    });
    return moved;
  });
});

var publishWhileDraggingInVirtual = (function (_ref) {
  var state = _ref.state,
      published = _ref.published;
  start();
  var withScrollChange = published.modified.map(function (update) {
    var existing = state.dimensions.droppables[update.droppableId];
    var scrolled = scrollDroppable(existing, update.scroll);
    return scrolled;
  });

  var droppables = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state.dimensions.droppables, {}, toDroppableMap(withScrollChange));

  var updatedAdditions = toDraggableMap(adjustAdditionsForScrollChanges({
    additions: published.additions,
    updatedDroppables: droppables,
    viewport: state.viewport
  }));

  var draggables = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state.dimensions.draggables, {}, updatedAdditions);

  published.removals.forEach(function (id) {
    delete draggables[id];
  });
  var dimensions = {
    droppables: droppables,
    draggables: draggables
  };
  var wasOverId = whatIsDraggedOver(state.impact);
  var wasOver = wasOverId ? dimensions.droppables[wasOverId] : null;
  var draggable = dimensions.draggables[state.critical.draggable.id];
  var home = dimensions.droppables[state.critical.droppable.id];

  var _getLiftEffect = getLiftEffect({
    draggable: draggable,
    home: home,
    draggables: draggables,
    viewport: state.viewport
  }),
      onLiftImpact = _getLiftEffect.impact,
      afterCritical = _getLiftEffect.afterCritical;

  var previousImpact = wasOver && wasOver.isCombineEnabled ? state.impact : onLiftImpact;
  var impact = getDragImpact({
    pageOffset: state.current.page.offset,
    draggable: dimensions.draggables[state.critical.draggable.id],
    draggables: dimensions.draggables,
    droppables: dimensions.droppables,
    previousImpact: previousImpact,
    viewport: state.viewport,
    afterCritical: afterCritical
  });
  finish();

  var draggingState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    phase: 'DRAGGING'
  }, state, {
    phase: 'DRAGGING',
    impact: impact,
    onLiftImpact: onLiftImpact,
    dimensions: dimensions,
    afterCritical: afterCritical,
    forceShouldAnimate: false
  });

  if (state.phase === 'COLLECTING') {
    return draggingState;
  }

  var dropPending = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    phase: 'DROP_PENDING'
  }, draggingState, {
    phase: 'DROP_PENDING',
    reason: state.reason,
    isWaiting: false
  });

  return dropPending;
});

var isSnapping = function isSnapping(state) {
  return state.movementMode === 'SNAP';
};

var postDroppableChange = function postDroppableChange(state, updated, isEnabledChanging) {
  var dimensions = patchDimensionMap(state.dimensions, updated);

  if (!isSnapping(state) || isEnabledChanging) {
    return update({
      state: state,
      dimensions: dimensions
    });
  }

  return refreshSnap({
    state: state,
    dimensions: dimensions
  });
};

function removeScrollJumpRequest(state) {
  if (state.isDragging && state.movementMode === 'SNAP') {
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      phase: 'DRAGGING'
    }, state, {
      scrollJumpRequest: null
    });
  }

  return state;
}

var idle = {
  phase: 'IDLE',
  completed: null,
  shouldFlush: false
};
var reducer = (function (state, action) {
  if (state === void 0) {
    state = idle;
  }

  if (action.type === 'FLUSH') {
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, idle, {
      shouldFlush: true
    });
  }

  if (action.type === 'INITIAL_PUBLISH') {
    !(state.phase === 'IDLE') ?  true ? invariant(false, 'INITIAL_PUBLISH must come after a IDLE phase') : 0 : void 0;
    var _action$payload = action.payload,
        critical = _action$payload.critical,
        clientSelection = _action$payload.clientSelection,
        viewport = _action$payload.viewport,
        dimensions = _action$payload.dimensions,
        movementMode = _action$payload.movementMode;
    var draggable = dimensions.draggables[critical.draggable.id];
    var home = dimensions.droppables[critical.droppable.id];
    var client = {
      selection: clientSelection,
      borderBoxCenter: draggable.client.borderBox.center,
      offset: origin
    };
    var initial = {
      client: client,
      page: {
        selection: add(client.selection, viewport.scroll.initial),
        borderBoxCenter: add(client.selection, viewport.scroll.initial),
        offset: add(client.selection, viewport.scroll.diff.value)
      }
    };
    var isWindowScrollAllowed = toDroppableList(dimensions.droppables).every(function (item) {
      return !item.isFixedOnPage;
    });

    var _getLiftEffect = getLiftEffect({
      draggable: draggable,
      home: home,
      draggables: dimensions.draggables,
      viewport: viewport
    }),
        impact = _getLiftEffect.impact,
        afterCritical = _getLiftEffect.afterCritical;

    var result = {
      phase: 'DRAGGING',
      isDragging: true,
      critical: critical,
      movementMode: movementMode,
      dimensions: dimensions,
      initial: initial,
      current: initial,
      isWindowScrollAllowed: isWindowScrollAllowed,
      impact: impact,
      afterCritical: afterCritical,
      onLiftImpact: impact,
      viewport: viewport,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
    return result;
  }

  if (action.type === 'COLLECTION_STARTING') {
    if (state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') {
      return state;
    }

    !(state.phase === 'DRAGGING') ?  true ? invariant(false, "Collection cannot start from phase " + state.phase) : 0 : void 0;

    var _result = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      phase: 'COLLECTING'
    }, state, {
      phase: 'COLLECTING'
    });

    return _result;
  }

  if (action.type === 'PUBLISH_WHILE_DRAGGING') {
    !(state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') ?  true ? invariant(false, "Unexpected " + action.type + " received in phase " + state.phase) : 0 : void 0;
    return publishWhileDraggingInVirtual({
      state: state,
      published: action.payload
    });
  }

  if (action.type === 'MOVE') {
    if (state.phase === 'DROP_PENDING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? invariant(false, action.type + " not permitted in phase " + state.phase) : 0 : void 0;
    var _clientSelection = action.payload.client;

    if (isEqual(_clientSelection, state.current.client.selection)) {
      return state;
    }

    return update({
      state: state,
      clientSelection: _clientSelection,
      impact: isSnapping(state) ? state.impact : null
    });
  }

  if (action.type === 'UPDATE_DROPPABLE_SCROLL') {
    if (state.phase === 'DROP_PENDING') {
      return removeScrollJumpRequest(state);
    }

    if (state.phase === 'COLLECTING') {
      return removeScrollJumpRequest(state);
    }

    !isMovementAllowed(state) ?  true ? invariant(false, action.type + " not permitted in phase " + state.phase) : 0 : void 0;
    var _action$payload2 = action.payload,
        id = _action$payload2.id,
        newScroll = _action$payload2.newScroll;
    var target = state.dimensions.droppables[id];

    if (!target) {
      return state;
    }

    var scrolled = scrollDroppable(target, newScroll);
    return postDroppableChange(state, scrolled, false);
  }

  if (action.type === 'UPDATE_DROPPABLE_IS_ENABLED') {
    if (state.phase === 'DROP_PENDING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? invariant(false, "Attempting to move in an unsupported phase " + state.phase) : 0 : void 0;
    var _action$payload3 = action.payload,
        _id = _action$payload3.id,
        isEnabled = _action$payload3.isEnabled;
    var _target = state.dimensions.droppables[_id];
    !_target ?  true ? invariant(false, "Cannot find Droppable[id: " + _id + "] to toggle its enabled state") : 0 : void 0;
    !(_target.isEnabled !== isEnabled) ?  true ? invariant(false, "Trying to set droppable isEnabled to " + String(isEnabled) + "\n      but it is already " + String(_target.isEnabled)) : 0 : void 0;

    var updated = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _target, {
      isEnabled: isEnabled
    });

    return postDroppableChange(state, updated, true);
  }

  if (action.type === 'UPDATE_DROPPABLE_IS_COMBINE_ENABLED') {
    if (state.phase === 'DROP_PENDING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? invariant(false, "Attempting to move in an unsupported phase " + state.phase) : 0 : void 0;
    var _action$payload4 = action.payload,
        _id2 = _action$payload4.id,
        isCombineEnabled = _action$payload4.isCombineEnabled;
    var _target2 = state.dimensions.droppables[_id2];
    !_target2 ?  true ? invariant(false, "Cannot find Droppable[id: " + _id2 + "] to toggle its isCombineEnabled state") : 0 : void 0;
    !(_target2.isCombineEnabled !== isCombineEnabled) ?  true ? invariant(false, "Trying to set droppable isCombineEnabled to " + String(isCombineEnabled) + "\n      but it is already " + String(_target2.isCombineEnabled)) : 0 : void 0;

    var _updated = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _target2, {
      isCombineEnabled: isCombineEnabled
    });

    return postDroppableChange(state, _updated, true);
  }

  if (action.type === 'MOVE_BY_WINDOW_SCROLL') {
    if (state.phase === 'DROP_PENDING' || state.phase === 'DROP_ANIMATING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? invariant(false, "Cannot move by window in phase " + state.phase) : 0 : void 0;
    !state.isWindowScrollAllowed ?  true ? invariant(false, 'Window scrolling is currently not supported for fixed lists') : 0 : void 0;
    var _newScroll = action.payload.newScroll;

    if (isEqual(state.viewport.scroll.current, _newScroll)) {
      return removeScrollJumpRequest(state);
    }

    var _viewport = scrollViewport(state.viewport, _newScroll);

    if (isSnapping(state)) {
      return refreshSnap({
        state: state,
        viewport: _viewport
      });
    }

    return update({
      state: state,
      viewport: _viewport
    });
  }

  if (action.type === 'UPDATE_VIEWPORT_MAX_SCROLL') {
    if (!isMovementAllowed(state)) {
      return state;
    }

    var maxScroll = action.payload.maxScroll;

    if (isEqual(maxScroll, state.viewport.scroll.max)) {
      return state;
    }

    var withMaxScroll = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state.viewport, {
      scroll: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state.viewport.scroll, {
        max: maxScroll
      })
    });

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      phase: 'DRAGGING'
    }, state, {
      viewport: withMaxScroll
    });
  }

  if (action.type === 'MOVE_UP' || action.type === 'MOVE_DOWN' || action.type === 'MOVE_LEFT' || action.type === 'MOVE_RIGHT') {
    if (state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') {
      return state;
    }

    !(state.phase === 'DRAGGING') ?  true ? invariant(false, action.type + " received while not in DRAGGING phase") : 0 : void 0;

    var _result2 = moveInDirection({
      state: state,
      type: action.type
    });

    if (!_result2) {
      return state;
    }

    return update({
      state: state,
      impact: _result2.impact,
      clientSelection: _result2.clientSelection,
      scrollJumpRequest: _result2.scrollJumpRequest
    });
  }

  if (action.type === 'DROP_PENDING') {
    var reason = action.payload.reason;
    !(state.phase === 'COLLECTING') ?  true ? invariant(false, 'Can only move into the DROP_PENDING phase from the COLLECTING phase') : 0 : void 0;

    var newState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      phase: 'DROP_PENDING'
    }, state, {
      phase: 'DROP_PENDING',
      isWaiting: true,
      reason: reason
    });

    return newState;
  }

  if (action.type === 'DROP_ANIMATE') {
    var _action$payload5 = action.payload,
        completed = _action$payload5.completed,
        dropDuration = _action$payload5.dropDuration,
        newHomeClientOffset = _action$payload5.newHomeClientOffset;
    !(state.phase === 'DRAGGING' || state.phase === 'DROP_PENDING') ?  true ? invariant(false, "Cannot animate drop from phase " + state.phase) : 0 : void 0;
    var _result3 = {
      phase: 'DROP_ANIMATING',
      completed: completed,
      dropDuration: dropDuration,
      newHomeClientOffset: newHomeClientOffset,
      dimensions: state.dimensions
    };
    return _result3;
  }

  if (action.type === 'DROP_COMPLETE') {
    var _completed = action.payload.completed;
    return {
      phase: 'IDLE',
      completed: _completed,
      shouldFlush: false
    };
  }

  return state;
});

var beforeInitialCapture = function beforeInitialCapture(args) {
  return {
    type: 'BEFORE_INITIAL_CAPTURE',
    payload: args
  };
};
var lift = function lift(args) {
  return {
    type: 'LIFT',
    payload: args
  };
};
var initialPublish = function initialPublish(args) {
  return {
    type: 'INITIAL_PUBLISH',
    payload: args
  };
};
var publishWhileDragging = function publishWhileDragging(args) {
  return {
    type: 'PUBLISH_WHILE_DRAGGING',
    payload: args
  };
};
var collectionStarting = function collectionStarting() {
  return {
    type: 'COLLECTION_STARTING',
    payload: null
  };
};
var updateDroppableScroll = function updateDroppableScroll(args) {
  return {
    type: 'UPDATE_DROPPABLE_SCROLL',
    payload: args
  };
};
var updateDroppableIsEnabled = function updateDroppableIsEnabled(args) {
  return {
    type: 'UPDATE_DROPPABLE_IS_ENABLED',
    payload: args
  };
};
var updateDroppableIsCombineEnabled = function updateDroppableIsCombineEnabled(args) {
  return {
    type: 'UPDATE_DROPPABLE_IS_COMBINE_ENABLED',
    payload: args
  };
};
var move = function move(args) {
  return {
    type: 'MOVE',
    payload: args
  };
};
var moveByWindowScroll = function moveByWindowScroll(args) {
  return {
    type: 'MOVE_BY_WINDOW_SCROLL',
    payload: args
  };
};
var updateViewportMaxScroll = function updateViewportMaxScroll(args) {
  return {
    type: 'UPDATE_VIEWPORT_MAX_SCROLL',
    payload: args
  };
};
var moveUp = function moveUp() {
  return {
    type: 'MOVE_UP',
    payload: null
  };
};
var moveDown = function moveDown() {
  return {
    type: 'MOVE_DOWN',
    payload: null
  };
};
var moveRight = function moveRight() {
  return {
    type: 'MOVE_RIGHT',
    payload: null
  };
};
var moveLeft = function moveLeft() {
  return {
    type: 'MOVE_LEFT',
    payload: null
  };
};
var flush = function flush() {
  return {
    type: 'FLUSH',
    payload: null
  };
};
var animateDrop = function animateDrop(args) {
  return {
    type: 'DROP_ANIMATE',
    payload: args
  };
};
var completeDrop = function completeDrop(args) {
  return {
    type: 'DROP_COMPLETE',
    payload: args
  };
};
var drop = function drop(args) {
  return {
    type: 'DROP',
    payload: args
  };
};
var dropPending = function dropPending(args) {
  return {
    type: 'DROP_PENDING',
    payload: args
  };
};
var dropAnimationFinished = function dropAnimationFinished() {
  return {
    type: 'DROP_ANIMATION_FINISHED',
    payload: null
  };
};

function checkIndexes(insideDestination) {
  if (insideDestination.length <= 1) {
    return;
  }

  var indexes = insideDestination.map(function (d) {
    return d.descriptor.index;
  });
  var errors = {};

  for (var i = 1; i < indexes.length; i++) {
    var current = indexes[i];
    var previous = indexes[i - 1];

    if (current !== previous + 1) {
      errors[current] = true;
    }
  }

  if (!Object.keys(errors).length) {
    return;
  }

  var formatted = indexes.map(function (index) {
    var hasError = Boolean(errors[index]);
    return hasError ? "[\uD83D\uDD25" + index + "]" : "" + index;
  }).join(', ');
   true ? warning("\n    Detected non-consecutive <Draggable /> indexes.\n\n    (This can cause unexpected bugs)\n\n    " + formatted + "\n  ") : 0;
}

function validateDimensions(critical, dimensions) {
  if (true) {
    var insideDestination = getDraggablesInsideDroppable(critical.droppable.id, dimensions.draggables);
    checkIndexes(insideDestination);
  }
}

var lift$1 = (function (marshal) {
  return function (_ref) {
    var getState = _ref.getState,
        dispatch = _ref.dispatch;
    return function (next) {
      return function (action) {
        if (action.type !== 'LIFT') {
          next(action);
          return;
        }

        var _action$payload = action.payload,
            id = _action$payload.id,
            clientSelection = _action$payload.clientSelection,
            movementMode = _action$payload.movementMode;
        var initial = getState();

        if (initial.phase === 'DROP_ANIMATING') {
          dispatch(completeDrop({
            completed: initial.completed
          }));
        }

        !(getState().phase === 'IDLE') ?  true ? invariant(false, 'Unexpected phase to start a drag') : 0 : void 0;
        dispatch(flush());
        dispatch(beforeInitialCapture({
          draggableId: id,
          movementMode: movementMode
        }));
        var scrollOptions = {
          shouldPublishImmediately: movementMode === 'SNAP'
        };
        var request = {
          draggableId: id,
          scrollOptions: scrollOptions
        };

        var _marshal$startPublish = marshal.startPublishing(request),
            critical = _marshal$startPublish.critical,
            dimensions = _marshal$startPublish.dimensions,
            viewport = _marshal$startPublish.viewport;

        validateDimensions(critical, dimensions);
        dispatch(initialPublish({
          critical: critical,
          dimensions: dimensions,
          clientSelection: clientSelection,
          movementMode: movementMode,
          viewport: viewport
        }));
      };
    };
  };
});

var style = (function (marshal) {
  return function () {
    return function (next) {
      return function (action) {
        if (action.type === 'INITIAL_PUBLISH') {
          marshal.dragging();
        }

        if (action.type === 'DROP_ANIMATE') {
          marshal.dropping(action.payload.completed.result.reason);
        }

        if (action.type === 'FLUSH' || action.type === 'DROP_COMPLETE') {
          marshal.resting();
        }

        next(action);
      };
    };
  };
});

var curves = {
  outOfTheWay: 'cubic-bezier(0.2, 0, 0, 1)',
  drop: 'cubic-bezier(.2,1,.1,1)'
};
var combine = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
};
var timings = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
};
var outOfTheWayTiming = timings.outOfTheWay + "s " + curves.outOfTheWay;
var transitions = {
  fluid: "opacity " + outOfTheWayTiming,
  snap: "transform " + outOfTheWayTiming + ", opacity " + outOfTheWayTiming,
  drop: function drop(duration) {
    var timing = duration + "s " + curves.drop;
    return "transform " + timing + ", opacity " + timing;
  },
  outOfTheWay: "transform " + outOfTheWayTiming,
  placeholder: "height " + outOfTheWayTiming + ", width " + outOfTheWayTiming + ", margin " + outOfTheWayTiming
};

var moveTo = function moveTo(offset) {
  return isEqual(offset, origin) ? null : "translate(" + offset.x + "px, " + offset.y + "px)";
};

var transforms = {
  moveTo: moveTo,
  drop: function drop(offset, isCombining) {
    var translate = moveTo(offset);

    if (!translate) {
      return null;
    }

    if (!isCombining) {
      return translate;
    }

    return translate + " scale(" + combine.scale.drop + ")";
  }
};

var minDropTime = timings.minDropTime,
    maxDropTime = timings.maxDropTime;
var dropTimeRange = maxDropTime - minDropTime;
var maxDropTimeAtDistance = 1500;
var cancelDropModifier = 0.6;
var getDropDuration = (function (_ref) {
  var current = _ref.current,
      destination = _ref.destination,
      reason = _ref.reason;
  var distance$1 = distance(current, destination);

  if (distance$1 <= 0) {
    return minDropTime;
  }

  if (distance$1 >= maxDropTimeAtDistance) {
    return maxDropTime;
  }

  var percentage = distance$1 / maxDropTimeAtDistance;
  var duration = minDropTime + dropTimeRange * percentage;
  var withDuration = reason === 'CANCEL' ? duration * cancelDropModifier : duration;
  return Number(withDuration.toFixed(2));
});

var getNewHomeClientOffset = (function (_ref) {
  var impact = _ref.impact,
      draggable = _ref.draggable,
      dimensions = _ref.dimensions,
      viewport = _ref.viewport,
      afterCritical = _ref.afterCritical;
  var draggables = dimensions.draggables,
      droppables = dimensions.droppables;
  var droppableId = whatIsDraggedOver(impact);
  var destination = droppableId ? droppables[droppableId] : null;
  var home = droppables[draggable.descriptor.droppableId];
  var newClientCenter = getClientBorderBoxCenter({
    impact: impact,
    draggable: draggable,
    draggables: draggables,
    afterCritical: afterCritical,
    droppable: destination || home,
    viewport: viewport
  });
  var offset = subtract(newClientCenter, draggable.client.borderBox.center);
  return offset;
});

var getDropImpact = (function (_ref) {
  var draggables = _ref.draggables,
      reason = _ref.reason,
      lastImpact = _ref.lastImpact,
      home = _ref.home,
      viewport = _ref.viewport,
      onLiftImpact = _ref.onLiftImpact;

  if (!lastImpact.at || reason !== 'DROP') {
    var recomputedHomeImpact = recompute({
      draggables: draggables,
      impact: onLiftImpact,
      destination: home,
      viewport: viewport,
      forceShouldAnimate: true
    });
    return {
      impact: recomputedHomeImpact,
      didDropInsideDroppable: false
    };
  }

  if (lastImpact.at.type === 'REORDER') {
    return {
      impact: lastImpact,
      didDropInsideDroppable: true
    };
  }

  var withoutMovement = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, lastImpact, {
    displaced: emptyGroups
  });

  return {
    impact: withoutMovement,
    didDropInsideDroppable: true
  };
});

var drop$1 = (function (_ref) {
  var getState = _ref.getState,
      dispatch = _ref.dispatch;
  return function (next) {
    return function (action) {
      if (action.type !== 'DROP') {
        next(action);
        return;
      }

      var state = getState();
      var reason = action.payload.reason;

      if (state.phase === 'COLLECTING') {
        dispatch(dropPending({
          reason: reason
        }));
        return;
      }

      if (state.phase === 'IDLE') {
        return;
      }

      var isWaitingForDrop = state.phase === 'DROP_PENDING' && state.isWaiting;
      !!isWaitingForDrop ?  true ? invariant(false, 'A DROP action occurred while DROP_PENDING and still waiting') : 0 : void 0;
      !(state.phase === 'DRAGGING' || state.phase === 'DROP_PENDING') ?  true ? invariant(false, "Cannot drop in phase: " + state.phase) : 0 : void 0;
      var critical = state.critical;
      var dimensions = state.dimensions;
      var draggable = dimensions.draggables[state.critical.draggable.id];

      var _getDropImpact = getDropImpact({
        reason: reason,
        lastImpact: state.impact,
        afterCritical: state.afterCritical,
        onLiftImpact: state.onLiftImpact,
        home: state.dimensions.droppables[state.critical.droppable.id],
        viewport: state.viewport,
        draggables: state.dimensions.draggables
      }),
          impact = _getDropImpact.impact,
          didDropInsideDroppable = _getDropImpact.didDropInsideDroppable;

      var destination = didDropInsideDroppable ? tryGetDestination(impact) : null;
      var combine = didDropInsideDroppable ? tryGetCombine(impact) : null;
      var source = {
        index: critical.draggable.index,
        droppableId: critical.droppable.id
      };
      var result = {
        draggableId: draggable.descriptor.id,
        type: draggable.descriptor.type,
        source: source,
        reason: reason,
        mode: state.movementMode,
        destination: destination,
        combine: combine
      };
      var newHomeClientOffset = getNewHomeClientOffset({
        impact: impact,
        draggable: draggable,
        dimensions: dimensions,
        viewport: state.viewport,
        afterCritical: state.afterCritical
      });
      var completed = {
        critical: state.critical,
        afterCritical: state.afterCritical,
        result: result,
        impact: impact
      };
      var isAnimationRequired = !isEqual(state.current.client.offset, newHomeClientOffset) || Boolean(result.combine);

      if (!isAnimationRequired) {
        dispatch(completeDrop({
          completed: completed
        }));
        return;
      }

      var dropDuration = getDropDuration({
        current: state.current.client.offset,
        destination: newHomeClientOffset,
        reason: reason
      });
      var args = {
        newHomeClientOffset: newHomeClientOffset,
        dropDuration: dropDuration,
        completed: completed
      };
      dispatch(animateDrop(args));
    };
  };
});

var getWindowScroll = (function () {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
});

function getWindowScrollBinding(update) {
  return {
    eventName: 'scroll',
    options: {
      passive: true,
      capture: false
    },
    fn: function fn(event) {
      if (event.target !== window && event.target !== window.document) {
        return;
      }

      update();
    }
  };
}

function getScrollListener(_ref) {
  var onWindowScroll = _ref.onWindowScroll;

  function updateScroll() {
    onWindowScroll(getWindowScroll());
  }

  var scheduled = (0,raf_schd__WEBPACK_IMPORTED_MODULE_7__["default"])(updateScroll);
  var binding = getWindowScrollBinding(scheduled);
  var unbind = noop;

  function isActive() {
    return unbind !== noop;
  }

  function start() {
    !!isActive() ?  true ? invariant(false, 'Cannot start scroll listener when already active') : 0 : void 0;
    unbind = bindEvents(window, [binding]);
  }

  function stop() {
    !isActive() ?  true ? invariant(false, 'Cannot stop scroll listener when not active') : 0 : void 0;
    scheduled.cancel();
    unbind();
    unbind = noop;
  }

  return {
    start: start,
    stop: stop,
    isActive: isActive
  };
}

var shouldEnd = function shouldEnd(action) {
  return action.type === 'DROP_COMPLETE' || action.type === 'DROP_ANIMATE' || action.type === 'FLUSH';
};

var scrollListener = (function (store) {
  var listener = getScrollListener({
    onWindowScroll: function onWindowScroll(newScroll) {
      store.dispatch(moveByWindowScroll({
        newScroll: newScroll
      }));
    }
  });
  return function (next) {
    return function (action) {
      if (!listener.isActive() && action.type === 'INITIAL_PUBLISH') {
        listener.start();
      }

      if (listener.isActive() && shouldEnd(action)) {
        listener.stop();
      }

      next(action);
    };
  };
});

var getExpiringAnnounce = (function (announce) {
  var wasCalled = false;
  var isExpired = false;
  var timeoutId = setTimeout(function () {
    isExpired = true;
  });

  var result = function result(message) {
    if (wasCalled) {
       true ? warning('Announcement already made. Not making a second announcement') : 0;
      return;
    }

    if (isExpired) {
       true ? warning("\n        Announcements cannot be made asynchronously.\n        Default message has already been announced.\n      ") : 0;
      return;
    }

    wasCalled = true;
    announce(message);
    clearTimeout(timeoutId);
  };

  result.wasCalled = function () {
    return wasCalled;
  };

  return result;
});

var getAsyncMarshal = (function () {
  var entries = [];

  var execute = function execute(timerId) {
    var index = findIndex(entries, function (item) {
      return item.timerId === timerId;
    });
    !(index !== -1) ?  true ? invariant(false, 'Could not find timer') : 0 : void 0;

    var _entries$splice = entries.splice(index, 1),
        entry = _entries$splice[0];

    entry.callback();
  };

  var add = function add(fn) {
    var timerId = setTimeout(function () {
      return execute(timerId);
    });
    var entry = {
      timerId: timerId,
      callback: fn
    };
    entries.push(entry);
  };

  var flush = function flush() {
    if (!entries.length) {
      return;
    }

    var shallow = [].concat(entries);
    entries.length = 0;
    shallow.forEach(function (entry) {
      clearTimeout(entry.timerId);
      entry.callback();
    });
  };

  return {
    add: add,
    flush: flush
  };
});

var areLocationsEqual = function areLocationsEqual(first, second) {
  if (first == null && second == null) {
    return true;
  }

  if (first == null || second == null) {
    return false;
  }

  return first.droppableId === second.droppableId && first.index === second.index;
};
var isCombineEqual = function isCombineEqual(first, second) {
  if (first == null && second == null) {
    return true;
  }

  if (first == null || second == null) {
    return false;
  }

  return first.draggableId === second.draggableId && first.droppableId === second.droppableId;
};
var isCriticalEqual = function isCriticalEqual(first, second) {
  if (first === second) {
    return true;
  }

  var isDraggableEqual = first.draggable.id === second.draggable.id && first.draggable.droppableId === second.draggable.droppableId && first.draggable.type === second.draggable.type && first.draggable.index === second.draggable.index;
  var isDroppableEqual = first.droppable.id === second.droppable.id && first.droppable.type === second.droppable.type;
  return isDraggableEqual && isDroppableEqual;
};

var withTimings = function withTimings(key, fn) {
  start();
  fn();
  finish();
};

var getDragStart = function getDragStart(critical, mode) {
  return {
    draggableId: critical.draggable.id,
    type: critical.droppable.type,
    source: {
      droppableId: critical.droppable.id,
      index: critical.draggable.index
    },
    mode: mode
  };
};

var execute = function execute(responder, data, announce, getDefaultMessage) {
  if (!responder) {
    announce(getDefaultMessage(data));
    return;
  }

  var willExpire = getExpiringAnnounce(announce);
  var provided = {
    announce: willExpire
  };
  responder(data, provided);

  if (!willExpire.wasCalled()) {
    announce(getDefaultMessage(data));
  }
};

var getPublisher = (function (getResponders, announce) {
  var asyncMarshal = getAsyncMarshal();
  var dragging = null;

  var beforeCapture = function beforeCapture(draggableId, mode) {
    !!dragging ?  true ? invariant(false, 'Cannot fire onBeforeCapture as a drag start has already been published') : 0 : void 0;
    withTimings('onBeforeCapture', function () {
      var fn = getResponders().onBeforeCapture;

      if (fn) {
        var before = {
          draggableId: draggableId,
          mode: mode
        };
        fn(before);
      }
    });
  };

  var beforeStart = function beforeStart(critical, mode) {
    !!dragging ?  true ? invariant(false, 'Cannot fire onBeforeDragStart as a drag start has already been published') : 0 : void 0;
    withTimings('onBeforeDragStart', function () {
      var fn = getResponders().onBeforeDragStart;

      if (fn) {
        fn(getDragStart(critical, mode));
      }
    });
  };

  var start = function start(critical, mode) {
    !!dragging ?  true ? invariant(false, 'Cannot fire onBeforeDragStart as a drag start has already been published') : 0 : void 0;
    var data = getDragStart(critical, mode);
    dragging = {
      mode: mode,
      lastCritical: critical,
      lastLocation: data.source,
      lastCombine: null
    };
    asyncMarshal.add(function () {
      withTimings('onDragStart', function () {
        return execute(getResponders().onDragStart, data, announce, preset.onDragStart);
      });
    });
  };

  var update = function update(critical, impact) {
    var location = tryGetDestination(impact);
    var combine = tryGetCombine(impact);
    !dragging ?  true ? invariant(false, 'Cannot fire onDragMove when onDragStart has not been called') : 0 : void 0;
    var hasCriticalChanged = !isCriticalEqual(critical, dragging.lastCritical);

    if (hasCriticalChanged) {
      dragging.lastCritical = critical;
    }

    var hasLocationChanged = !areLocationsEqual(dragging.lastLocation, location);

    if (hasLocationChanged) {
      dragging.lastLocation = location;
    }

    var hasGroupingChanged = !isCombineEqual(dragging.lastCombine, combine);

    if (hasGroupingChanged) {
      dragging.lastCombine = combine;
    }

    if (!hasCriticalChanged && !hasLocationChanged && !hasGroupingChanged) {
      return;
    }

    var data = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, getDragStart(critical, dragging.mode), {
      combine: combine,
      destination: location
    });

    asyncMarshal.add(function () {
      withTimings('onDragUpdate', function () {
        return execute(getResponders().onDragUpdate, data, announce, preset.onDragUpdate);
      });
    });
  };

  var flush = function flush() {
    !dragging ?  true ? invariant(false, 'Can only flush responders while dragging') : 0 : void 0;
    asyncMarshal.flush();
  };

  var drop = function drop(result) {
    !dragging ?  true ? invariant(false, 'Cannot fire onDragEnd when there is no matching onDragStart') : 0 : void 0;
    dragging = null;
    withTimings('onDragEnd', function () {
      return execute(getResponders().onDragEnd, result, announce, preset.onDragEnd);
    });
  };

  var abort = function abort() {
    if (!dragging) {
      return;
    }

    var result = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, getDragStart(dragging.lastCritical, dragging.mode), {
      combine: null,
      destination: null,
      reason: 'CANCEL'
    });

    drop(result);
  };

  return {
    beforeCapture: beforeCapture,
    beforeStart: beforeStart,
    start: start,
    update: update,
    flush: flush,
    drop: drop,
    abort: abort
  };
});

var responders = (function (getResponders, announce) {
  var publisher = getPublisher(getResponders, announce);
  return function (store) {
    return function (next) {
      return function (action) {
        if (action.type === 'BEFORE_INITIAL_CAPTURE') {
          publisher.beforeCapture(action.payload.draggableId, action.payload.movementMode);
          return;
        }

        if (action.type === 'INITIAL_PUBLISH') {
          var critical = action.payload.critical;
          publisher.beforeStart(critical, action.payload.movementMode);
          next(action);
          publisher.start(critical, action.payload.movementMode);
          return;
        }

        if (action.type === 'DROP_COMPLETE') {
          var result = action.payload.completed.result;
          publisher.flush();
          next(action);
          publisher.drop(result);
          return;
        }

        next(action);

        if (action.type === 'FLUSH') {
          publisher.abort();
          return;
        }

        var state = store.getState();

        if (state.phase === 'DRAGGING') {
          publisher.update(state.critical, state.impact);
        }
      };
    };
  };
});

var dropAnimationFinish = (function (store) {
  return function (next) {
    return function (action) {
      if (action.type !== 'DROP_ANIMATION_FINISHED') {
        next(action);
        return;
      }

      var state = store.getState();
      !(state.phase === 'DROP_ANIMATING') ?  true ? invariant(false, 'Cannot finish a drop animating when no drop is occurring') : 0 : void 0;
      store.dispatch(completeDrop({
        completed: state.completed
      }));
    };
  };
});

var dropAnimationFlushOnScroll = (function (store) {
  var unbind = null;
  var frameId = null;

  function clear() {
    if (frameId) {
      cancelAnimationFrame(frameId);
      frameId = null;
    }

    if (unbind) {
      unbind();
      unbind = null;
    }
  }

  return function (next) {
    return function (action) {
      if (action.type === 'FLUSH' || action.type === 'DROP_COMPLETE' || action.type === 'DROP_ANIMATION_FINISHED') {
        clear();
      }

      next(action);

      if (action.type !== 'DROP_ANIMATE') {
        return;
      }

      var binding = {
        eventName: 'scroll',
        options: {
          capture: true,
          passive: false,
          once: true
        },
        fn: function flushDropAnimation() {
          var state = store.getState();

          if (state.phase === 'DROP_ANIMATING') {
            store.dispatch(dropAnimationFinished());
          }
        }
      };
      frameId = requestAnimationFrame(function () {
        frameId = null;
        unbind = bindEvents(window, [binding]);
      });
    };
  };
});

var dimensionMarshalStopper = (function (marshal) {
  return function () {
    return function (next) {
      return function (action) {
        if (action.type === 'DROP_COMPLETE' || action.type === 'FLUSH' || action.type === 'DROP_ANIMATE') {
          marshal.stopPublishing();
        }

        next(action);
      };
    };
  };
});

var focus = (function (marshal) {
  var isWatching = false;
  return function () {
    return function (next) {
      return function (action) {
        if (action.type === 'INITIAL_PUBLISH') {
          isWatching = true;
          marshal.tryRecordFocus(action.payload.critical.draggable.id);
          next(action);
          marshal.tryRestoreFocusRecorded();
          return;
        }

        next(action);

        if (!isWatching) {
          return;
        }

        if (action.type === 'FLUSH') {
          isWatching = false;
          marshal.tryRestoreFocusRecorded();
          return;
        }

        if (action.type === 'DROP_COMPLETE') {
          isWatching = false;
          var result = action.payload.completed.result;

          if (result.combine) {
            marshal.tryShiftRecord(result.draggableId, result.combine.draggableId);
          }

          marshal.tryRestoreFocusRecorded();
        }
      };
    };
  };
});

var shouldStop = function shouldStop(action) {
  return action.type === 'DROP_COMPLETE' || action.type === 'DROP_ANIMATE' || action.type === 'FLUSH';
};

var autoScroll = (function (autoScroller) {
  return function (store) {
    return function (next) {
      return function (action) {
        if (shouldStop(action)) {
          autoScroller.stop();
          next(action);
          return;
        }

        if (action.type === 'INITIAL_PUBLISH') {
          next(action);
          var state = store.getState();
          !(state.phase === 'DRAGGING') ?  true ? invariant(false, 'Expected phase to be DRAGGING after INITIAL_PUBLISH') : 0 : void 0;
          autoScroller.start(state);
          return;
        }

        next(action);
        autoScroller.scroll(store.getState());
      };
    };
  };
});

var pendingDrop = (function (store) {
  return function (next) {
    return function (action) {
      next(action);

      if (action.type !== 'PUBLISH_WHILE_DRAGGING') {
        return;
      }

      var postActionState = store.getState();

      if (postActionState.phase !== 'DROP_PENDING') {
        return;
      }

      if (postActionState.isWaiting) {
        return;
      }

      store.dispatch(drop({
        reason: postActionState.reason
      }));
    };
  };
});

var composeEnhancers =  true && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: 'react-beautiful-dnd'
}) : redux__WEBPACK_IMPORTED_MODULE_8__.compose;
var createStore = (function (_ref) {
  var dimensionMarshal = _ref.dimensionMarshal,
      focusMarshal = _ref.focusMarshal,
      styleMarshal = _ref.styleMarshal,
      getResponders = _ref.getResponders,
      announce = _ref.announce,
      autoScroller = _ref.autoScroller;
  return (0,redux__WEBPACK_IMPORTED_MODULE_8__.createStore)(reducer, composeEnhancers((0,redux__WEBPACK_IMPORTED_MODULE_8__.applyMiddleware)(style(styleMarshal), dimensionMarshalStopper(dimensionMarshal), lift$1(dimensionMarshal), drop$1, dropAnimationFinish, dropAnimationFlushOnScroll, pendingDrop, autoScroll(autoScroller), scrollListener, focus(focusMarshal), responders(getResponders, announce))));
});

var clean$1 = function clean() {
  return {
    additions: {},
    removals: {},
    modified: {}
  };
};
function createPublisher(_ref) {
  var registry = _ref.registry,
      callbacks = _ref.callbacks;
  var staging = clean$1();
  var frameId = null;

  var collect = function collect() {
    if (frameId) {
      return;
    }

    callbacks.collectionStarting();
    frameId = requestAnimationFrame(function () {
      frameId = null;
      start();
      var _staging = staging,
          additions = _staging.additions,
          removals = _staging.removals,
          modified = _staging.modified;
      var added = Object.keys(additions).map(function (id) {
        return registry.draggable.getById(id).getDimension(origin);
      }).sort(function (a, b) {
        return a.descriptor.index - b.descriptor.index;
      });
      var updated = Object.keys(modified).map(function (id) {
        var entry = registry.droppable.getById(id);
        var scroll = entry.callbacks.getScrollWhileDragging();
        return {
          droppableId: id,
          scroll: scroll
        };
      });
      var result = {
        additions: added,
        removals: Object.keys(removals),
        modified: updated
      };
      staging = clean$1();
      finish();
      callbacks.publish(result);
    });
  };

  var add = function add(entry) {
    var id = entry.descriptor.id;
    staging.additions[id] = entry;
    staging.modified[entry.descriptor.droppableId] = true;

    if (staging.removals[id]) {
      delete staging.removals[id];
    }

    collect();
  };

  var remove = function remove(entry) {
    var descriptor = entry.descriptor;
    staging.removals[descriptor.id] = true;
    staging.modified[descriptor.droppableId] = true;

    if (staging.additions[descriptor.id]) {
      delete staging.additions[descriptor.id];
    }

    collect();
  };

  var stop = function stop() {
    if (!frameId) {
      return;
    }

    cancelAnimationFrame(frameId);
    frameId = null;
    staging = clean$1();
  };

  return {
    add: add,
    remove: remove,
    stop: stop
  };
}

var getMaxScroll = (function (_ref) {
  var scrollHeight = _ref.scrollHeight,
      scrollWidth = _ref.scrollWidth,
      height = _ref.height,
      width = _ref.width;
  var maxScroll = subtract({
    x: scrollWidth,
    y: scrollHeight
  }, {
    x: width,
    y: height
  });
  var adjustedMaxScroll = {
    x: Math.max(0, maxScroll.x),
    y: Math.max(0, maxScroll.y)
  };
  return adjustedMaxScroll;
});

var getDocumentElement = (function () {
  var doc = document.documentElement;
  !doc ?  true ? invariant(false, 'Cannot find document.documentElement') : 0 : void 0;
  return doc;
});

var getMaxWindowScroll = (function () {
  var doc = getDocumentElement();
  var maxScroll = getMaxScroll({
    scrollHeight: doc.scrollHeight,
    scrollWidth: doc.scrollWidth,
    width: doc.clientWidth,
    height: doc.clientHeight
  });
  return maxScroll;
});

var getViewport = (function () {
  var scroll = getWindowScroll();
  var maxScroll = getMaxWindowScroll();
  var top = scroll.y;
  var left = scroll.x;
  var doc = getDocumentElement();
  var width = doc.clientWidth;
  var height = doc.clientHeight;
  var right = left + width;
  var bottom = top + height;
  var frame = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.getRect)({
    top: top,
    left: left,
    right: right,
    bottom: bottom
  });
  var viewport = {
    frame: frame,
    scroll: {
      initial: scroll,
      current: scroll,
      max: maxScroll,
      diff: {
        value: origin,
        displacement: origin
      }
    }
  };
  return viewport;
});

var getInitialPublish = (function (_ref) {
  var critical = _ref.critical,
      scrollOptions = _ref.scrollOptions,
      registry = _ref.registry;
  start();
  var viewport = getViewport();
  var windowScroll = viewport.scroll.current;
  var home = critical.droppable;
  var droppables = registry.droppable.getAllByType(home.type).map(function (entry) {
    return entry.callbacks.getDimensionAndWatchScroll(windowScroll, scrollOptions);
  });
  var draggables = registry.draggable.getAllByType(critical.draggable.type).map(function (entry) {
    return entry.getDimension(windowScroll);
  });
  var dimensions = {
    draggables: toDraggableMap(draggables),
    droppables: toDroppableMap(droppables)
  };
  finish();
  var result = {
    dimensions: dimensions,
    critical: critical,
    viewport: viewport
  };
  return result;
});

function shouldPublishUpdate(registry, dragging, entry) {
  if (entry.descriptor.id === dragging.id) {
    return false;
  }

  if (entry.descriptor.type !== dragging.type) {
    return false;
  }

  var home = registry.droppable.getById(entry.descriptor.droppableId);

  if (home.descriptor.mode !== 'virtual') {
     true ? warning("\n      You are attempting to add or remove a Draggable [id: " + entry.descriptor.id + "]\n      while a drag is occurring. This is only supported for virtual lists.\n\n      See https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/patterns/virtual-lists.md\n    ") : 0;
    return false;
  }

  return true;
}

var createDimensionMarshal = (function (registry, callbacks) {
  var collection = null;
  var publisher = createPublisher({
    callbacks: {
      publish: callbacks.publishWhileDragging,
      collectionStarting: callbacks.collectionStarting
    },
    registry: registry
  });

  var updateDroppableIsEnabled = function updateDroppableIsEnabled(id, isEnabled) {
    !registry.droppable.exists(id) ?  true ? invariant(false, "Cannot update is enabled flag of Droppable " + id + " as it is not registered") : 0 : void 0;

    if (!collection) {
      return;
    }

    callbacks.updateDroppableIsEnabled({
      id: id,
      isEnabled: isEnabled
    });
  };

  var updateDroppableIsCombineEnabled = function updateDroppableIsCombineEnabled(id, isCombineEnabled) {
    if (!collection) {
      return;
    }

    !registry.droppable.exists(id) ?  true ? invariant(false, "Cannot update isCombineEnabled flag of Droppable " + id + " as it is not registered") : 0 : void 0;
    callbacks.updateDroppableIsCombineEnabled({
      id: id,
      isCombineEnabled: isCombineEnabled
    });
  };

  var updateDroppableScroll = function updateDroppableScroll(id, newScroll) {
    if (!collection) {
      return;
    }

    !registry.droppable.exists(id) ?  true ? invariant(false, "Cannot update the scroll on Droppable " + id + " as it is not registered") : 0 : void 0;
    callbacks.updateDroppableScroll({
      id: id,
      newScroll: newScroll
    });
  };

  var scrollDroppable = function scrollDroppable(id, change) {
    if (!collection) {
      return;
    }

    registry.droppable.getById(id).callbacks.scroll(change);
  };

  var stopPublishing = function stopPublishing() {
    if (!collection) {
      return;
    }

    publisher.stop();
    var home = collection.critical.droppable;
    registry.droppable.getAllByType(home.type).forEach(function (entry) {
      return entry.callbacks.dragStopped();
    });
    collection.unsubscribe();
    collection = null;
  };

  var subscriber = function subscriber(event) {
    !collection ?  true ? invariant(false, 'Should only be subscribed when a collection is occurring') : 0 : void 0;
    var dragging = collection.critical.draggable;

    if (event.type === 'ADDITION') {
      if (shouldPublishUpdate(registry, dragging, event.value)) {
        publisher.add(event.value);
      }
    }

    if (event.type === 'REMOVAL') {
      if (shouldPublishUpdate(registry, dragging, event.value)) {
        publisher.remove(event.value);
      }
    }
  };

  var startPublishing = function startPublishing(request) {
    !!collection ?  true ? invariant(false, 'Cannot start capturing critical dimensions as there is already a collection') : 0 : void 0;
    var entry = registry.draggable.getById(request.draggableId);
    var home = registry.droppable.getById(entry.descriptor.droppableId);
    var critical = {
      draggable: entry.descriptor,
      droppable: home.descriptor
    };
    var unsubscribe = registry.subscribe(subscriber);
    collection = {
      critical: critical,
      unsubscribe: unsubscribe
    };
    return getInitialPublish({
      critical: critical,
      registry: registry,
      scrollOptions: request.scrollOptions
    });
  };

  var marshal = {
    updateDroppableIsEnabled: updateDroppableIsEnabled,
    updateDroppableIsCombineEnabled: updateDroppableIsCombineEnabled,
    scrollDroppable: scrollDroppable,
    updateDroppableScroll: updateDroppableScroll,
    startPublishing: startPublishing,
    stopPublishing: stopPublishing
  };
  return marshal;
});

var canStartDrag = (function (state, id) {
  if (state.phase === 'IDLE') {
    return true;
  }

  if (state.phase !== 'DROP_ANIMATING') {
    return false;
  }

  if (state.completed.result.draggableId === id) {
    return false;
  }

  return state.completed.result.reason === 'DROP';
});

var scrollWindow = (function (change) {
  window.scrollBy(change.x, change.y);
});

var getScrollableDroppables = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (droppables) {
  return toDroppableList(droppables).filter(function (droppable) {
    if (!droppable.isEnabled) {
      return false;
    }

    if (!droppable.frame) {
      return false;
    }

    return true;
  });
});

var getScrollableDroppableOver = function getScrollableDroppableOver(target, droppables) {
  var maybe = find(getScrollableDroppables(droppables), function (droppable) {
    !droppable.frame ?  true ? invariant(false, 'Invalid result') : 0 : void 0;
    return isPositionInFrame(droppable.frame.pageMarginBox)(target);
  });
  return maybe;
};

var getBestScrollableDroppable = (function (_ref) {
  var center = _ref.center,
      destination = _ref.destination,
      droppables = _ref.droppables;

  if (destination) {
    var _dimension = droppables[destination];

    if (!_dimension.frame) {
      return null;
    }

    return _dimension;
  }

  var dimension = getScrollableDroppableOver(center, droppables);
  return dimension;
});

var config = {
  startFromPercentage: 0.25,
  maxScrollAtPercentage: 0.05,
  maxPixelScroll: 28,
  ease: function ease(percentage) {
    return Math.pow(percentage, 2);
  },
  durationDampening: {
    stopDampeningAt: 1200,
    accelerateAt: 360
  }
};

var getDistanceThresholds = (function (container, axis) {
  var startScrollingFrom = container[axis.size] * config.startFromPercentage;
  var maxScrollValueAt = container[axis.size] * config.maxScrollAtPercentage;
  var thresholds = {
    startScrollingFrom: startScrollingFrom,
    maxScrollValueAt: maxScrollValueAt
  };
  return thresholds;
});

var getPercentage = (function (_ref) {
  var startOfRange = _ref.startOfRange,
      endOfRange = _ref.endOfRange,
      current = _ref.current;
  var range = endOfRange - startOfRange;

  if (range === 0) {
     true ? warning("\n      Detected distance range of 0 in the fluid auto scroller\n      This is unexpected and would cause a divide by 0 issue.\n      Not allowing an auto scroll\n    ") : 0;
    return 0;
  }

  var currentInRange = current - startOfRange;
  var percentage = currentInRange / range;
  return percentage;
});

var minScroll = 1;

var getValueFromDistance = (function (distanceToEdge, thresholds) {
  if (distanceToEdge > thresholds.startScrollingFrom) {
    return 0;
  }

  if (distanceToEdge <= thresholds.maxScrollValueAt) {
    return config.maxPixelScroll;
  }

  if (distanceToEdge === thresholds.startScrollingFrom) {
    return minScroll;
  }

  var percentageFromMaxScrollValueAt = getPercentage({
    startOfRange: thresholds.maxScrollValueAt,
    endOfRange: thresholds.startScrollingFrom,
    current: distanceToEdge
  });
  var percentageFromStartScrollingFrom = 1 - percentageFromMaxScrollValueAt;
  var scroll = config.maxPixelScroll * config.ease(percentageFromStartScrollingFrom);
  return Math.ceil(scroll);
});

var accelerateAt = config.durationDampening.accelerateAt;
var stopAt = config.durationDampening.stopDampeningAt;
var dampenValueByTime = (function (proposedScroll, dragStartTime) {
  var startOfRange = dragStartTime;
  var endOfRange = stopAt;
  var now = Date.now();
  var runTime = now - startOfRange;

  if (runTime >= stopAt) {
    return proposedScroll;
  }

  if (runTime < accelerateAt) {
    return minScroll;
  }

  var betweenAccelerateAtAndStopAtPercentage = getPercentage({
    startOfRange: accelerateAt,
    endOfRange: endOfRange,
    current: runTime
  });
  var scroll = proposedScroll * config.ease(betweenAccelerateAtAndStopAtPercentage);
  return Math.ceil(scroll);
});

var getValue = (function (_ref) {
  var distanceToEdge = _ref.distanceToEdge,
      thresholds = _ref.thresholds,
      dragStartTime = _ref.dragStartTime,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var scroll = getValueFromDistance(distanceToEdge, thresholds);

  if (scroll === 0) {
    return 0;
  }

  if (!shouldUseTimeDampening) {
    return scroll;
  }

  return Math.max(dampenValueByTime(scroll, dragStartTime), minScroll);
});

var getScrollOnAxis = (function (_ref) {
  var container = _ref.container,
      distanceToEdges = _ref.distanceToEdges,
      dragStartTime = _ref.dragStartTime,
      axis = _ref.axis,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var thresholds = getDistanceThresholds(container, axis);
  var isCloserToEnd = distanceToEdges[axis.end] < distanceToEdges[axis.start];

  if (isCloserToEnd) {
    return getValue({
      distanceToEdge: distanceToEdges[axis.end],
      thresholds: thresholds,
      dragStartTime: dragStartTime,
      shouldUseTimeDampening: shouldUseTimeDampening
    });
  }

  return -1 * getValue({
    distanceToEdge: distanceToEdges[axis.start],
    thresholds: thresholds,
    dragStartTime: dragStartTime,
    shouldUseTimeDampening: shouldUseTimeDampening
  });
});

var adjustForSizeLimits = (function (_ref) {
  var container = _ref.container,
      subject = _ref.subject,
      proposedScroll = _ref.proposedScroll;
  var isTooBigVertically = subject.height > container.height;
  var isTooBigHorizontally = subject.width > container.width;

  if (!isTooBigHorizontally && !isTooBigVertically) {
    return proposedScroll;
  }

  if (isTooBigHorizontally && isTooBigVertically) {
    return null;
  }

  return {
    x: isTooBigHorizontally ? 0 : proposedScroll.x,
    y: isTooBigVertically ? 0 : proposedScroll.y
  };
});

var clean$2 = apply(function (value) {
  return value === 0 ? 0 : value;
});
var getScroll = (function (_ref) {
  var dragStartTime = _ref.dragStartTime,
      container = _ref.container,
      subject = _ref.subject,
      center = _ref.center,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var distanceToEdges = {
    top: center.y - container.top,
    right: container.right - center.x,
    bottom: container.bottom - center.y,
    left: center.x - container.left
  };
  var y = getScrollOnAxis({
    container: container,
    distanceToEdges: distanceToEdges,
    dragStartTime: dragStartTime,
    axis: vertical,
    shouldUseTimeDampening: shouldUseTimeDampening
  });
  var x = getScrollOnAxis({
    container: container,
    distanceToEdges: distanceToEdges,
    dragStartTime: dragStartTime,
    axis: horizontal,
    shouldUseTimeDampening: shouldUseTimeDampening
  });
  var required = clean$2({
    x: x,
    y: y
  });

  if (isEqual(required, origin)) {
    return null;
  }

  var limited = adjustForSizeLimits({
    container: container,
    subject: subject,
    proposedScroll: required
  });

  if (!limited) {
    return null;
  }

  return isEqual(limited, origin) ? null : limited;
});

var smallestSigned = apply(function (value) {
  if (value === 0) {
    return 0;
  }

  return value > 0 ? 1 : -1;
});
var getOverlap = function () {
  var getRemainder = function getRemainder(target, max) {
    if (target < 0) {
      return target;
    }

    if (target > max) {
      return target - max;
    }

    return 0;
  };

  return function (_ref) {
    var current = _ref.current,
        max = _ref.max,
        change = _ref.change;
    var targetScroll = add(current, change);
    var overlap = {
      x: getRemainder(targetScroll.x, max.x),
      y: getRemainder(targetScroll.y, max.y)
    };

    if (isEqual(overlap, origin)) {
      return null;
    }

    return overlap;
  };
}();
var canPartiallyScroll = function canPartiallyScroll(_ref2) {
  var rawMax = _ref2.max,
      current = _ref2.current,
      change = _ref2.change;
  var max = {
    x: Math.max(current.x, rawMax.x),
    y: Math.max(current.y, rawMax.y)
  };
  var smallestChange = smallestSigned(change);
  var overlap = getOverlap({
    max: max,
    current: current,
    change: smallestChange
  });

  if (!overlap) {
    return true;
  }

  if (smallestChange.x !== 0 && overlap.x === 0) {
    return true;
  }

  if (smallestChange.y !== 0 && overlap.y === 0) {
    return true;
  }

  return false;
};
var canScrollWindow = function canScrollWindow(viewport, change) {
  return canPartiallyScroll({
    current: viewport.scroll.current,
    max: viewport.scroll.max,
    change: change
  });
};
var getWindowOverlap = function getWindowOverlap(viewport, change) {
  if (!canScrollWindow(viewport, change)) {
    return null;
  }

  var max = viewport.scroll.max;
  var current = viewport.scroll.current;
  return getOverlap({
    current: current,
    max: max,
    change: change
  });
};
var canScrollDroppable = function canScrollDroppable(droppable, change) {
  var frame = droppable.frame;

  if (!frame) {
    return false;
  }

  return canPartiallyScroll({
    current: frame.scroll.current,
    max: frame.scroll.max,
    change: change
  });
};
var getDroppableOverlap = function getDroppableOverlap(droppable, change) {
  var frame = droppable.frame;

  if (!frame) {
    return null;
  }

  if (!canScrollDroppable(droppable, change)) {
    return null;
  }

  return getOverlap({
    current: frame.scroll.current,
    max: frame.scroll.max,
    change: change
  });
};

var getWindowScrollChange = (function (_ref) {
  var viewport = _ref.viewport,
      subject = _ref.subject,
      center = _ref.center,
      dragStartTime = _ref.dragStartTime,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var scroll = getScroll({
    dragStartTime: dragStartTime,
    container: viewport.frame,
    subject: subject,
    center: center,
    shouldUseTimeDampening: shouldUseTimeDampening
  });
  return scroll && canScrollWindow(viewport, scroll) ? scroll : null;
});

var getDroppableScrollChange = (function (_ref) {
  var droppable = _ref.droppable,
      subject = _ref.subject,
      center = _ref.center,
      dragStartTime = _ref.dragStartTime,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var frame = droppable.frame;

  if (!frame) {
    return null;
  }

  var scroll = getScroll({
    dragStartTime: dragStartTime,
    container: frame.pageMarginBox,
    subject: subject,
    center: center,
    shouldUseTimeDampening: shouldUseTimeDampening
  });
  return scroll && canScrollDroppable(droppable, scroll) ? scroll : null;
});

var scroll$1 = (function (_ref) {
  var state = _ref.state,
      dragStartTime = _ref.dragStartTime,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening,
      scrollWindow = _ref.scrollWindow,
      scrollDroppable = _ref.scrollDroppable;
  var center = state.current.page.borderBoxCenter;
  var draggable = state.dimensions.draggables[state.critical.draggable.id];
  var subject = draggable.page.marginBox;

  if (state.isWindowScrollAllowed) {
    var viewport = state.viewport;

    var _change = getWindowScrollChange({
      dragStartTime: dragStartTime,
      viewport: viewport,
      subject: subject,
      center: center,
      shouldUseTimeDampening: shouldUseTimeDampening
    });

    if (_change) {
      scrollWindow(_change);
      return;
    }
  }

  var droppable = getBestScrollableDroppable({
    center: center,
    destination: whatIsDraggedOver(state.impact),
    droppables: state.dimensions.droppables
  });

  if (!droppable) {
    return;
  }

  var change = getDroppableScrollChange({
    dragStartTime: dragStartTime,
    droppable: droppable,
    subject: subject,
    center: center,
    shouldUseTimeDampening: shouldUseTimeDampening
  });

  if (change) {
    scrollDroppable(droppable.descriptor.id, change);
  }
});

var createFluidScroller = (function (_ref) {
  var scrollWindow = _ref.scrollWindow,
      scrollDroppable = _ref.scrollDroppable;
  var scheduleWindowScroll = (0,raf_schd__WEBPACK_IMPORTED_MODULE_7__["default"])(scrollWindow);
  var scheduleDroppableScroll = (0,raf_schd__WEBPACK_IMPORTED_MODULE_7__["default"])(scrollDroppable);
  var dragging = null;

  var tryScroll = function tryScroll(state) {
    !dragging ?  true ? invariant(false, 'Cannot fluid scroll if not dragging') : 0 : void 0;
    var _dragging = dragging,
        shouldUseTimeDampening = _dragging.shouldUseTimeDampening,
        dragStartTime = _dragging.dragStartTime;
    scroll$1({
      state: state,
      scrollWindow: scheduleWindowScroll,
      scrollDroppable: scheduleDroppableScroll,
      dragStartTime: dragStartTime,
      shouldUseTimeDampening: shouldUseTimeDampening
    });
  };

  var start$1 = function start$1(state) {
    start();
    !!dragging ?  true ? invariant(false, 'Cannot start auto scrolling when already started') : 0 : void 0;
    var dragStartTime = Date.now();
    var wasScrollNeeded = false;

    var fakeScrollCallback = function fakeScrollCallback() {
      wasScrollNeeded = true;
    };

    scroll$1({
      state: state,
      dragStartTime: 0,
      shouldUseTimeDampening: false,
      scrollWindow: fakeScrollCallback,
      scrollDroppable: fakeScrollCallback
    });
    dragging = {
      dragStartTime: dragStartTime,
      shouldUseTimeDampening: wasScrollNeeded
    };
    finish();

    if (wasScrollNeeded) {
      tryScroll(state);
    }
  };

  var stop = function stop() {
    if (!dragging) {
      return;
    }

    scheduleWindowScroll.cancel();
    scheduleDroppableScroll.cancel();
    dragging = null;
  };

  return {
    start: start$1,
    stop: stop,
    scroll: tryScroll
  };
});

var createJumpScroller = (function (_ref) {
  var move = _ref.move,
      scrollDroppable = _ref.scrollDroppable,
      scrollWindow = _ref.scrollWindow;

  var moveByOffset = function moveByOffset(state, offset) {
    var client = add(state.current.client.selection, offset);
    move({
      client: client
    });
  };

  var scrollDroppableAsMuchAsItCan = function scrollDroppableAsMuchAsItCan(droppable, change) {
    if (!canScrollDroppable(droppable, change)) {
      return change;
    }

    var overlap = getDroppableOverlap(droppable, change);

    if (!overlap) {
      scrollDroppable(droppable.descriptor.id, change);
      return null;
    }

    var whatTheDroppableCanScroll = subtract(change, overlap);
    scrollDroppable(droppable.descriptor.id, whatTheDroppableCanScroll);
    var remainder = subtract(change, whatTheDroppableCanScroll);
    return remainder;
  };

  var scrollWindowAsMuchAsItCan = function scrollWindowAsMuchAsItCan(isWindowScrollAllowed, viewport, change) {
    if (!isWindowScrollAllowed) {
      return change;
    }

    if (!canScrollWindow(viewport, change)) {
      return change;
    }

    var overlap = getWindowOverlap(viewport, change);

    if (!overlap) {
      scrollWindow(change);
      return null;
    }

    var whatTheWindowCanScroll = subtract(change, overlap);
    scrollWindow(whatTheWindowCanScroll);
    var remainder = subtract(change, whatTheWindowCanScroll);
    return remainder;
  };

  var jumpScroller = function jumpScroller(state) {
    var request = state.scrollJumpRequest;

    if (!request) {
      return;
    }

    var destination = whatIsDraggedOver(state.impact);
    !destination ?  true ? invariant(false, 'Cannot perform a jump scroll when there is no destination') : 0 : void 0;
    var droppableRemainder = scrollDroppableAsMuchAsItCan(state.dimensions.droppables[destination], request);

    if (!droppableRemainder) {
      return;
    }

    var viewport = state.viewport;
    var windowRemainder = scrollWindowAsMuchAsItCan(state.isWindowScrollAllowed, viewport, droppableRemainder);

    if (!windowRemainder) {
      return;
    }

    moveByOffset(state, windowRemainder);
  };

  return jumpScroller;
});

var createAutoScroller = (function (_ref) {
  var scrollDroppable = _ref.scrollDroppable,
      scrollWindow = _ref.scrollWindow,
      move = _ref.move;
  var fluidScroller = createFluidScroller({
    scrollWindow: scrollWindow,
    scrollDroppable: scrollDroppable
  });
  var jumpScroll = createJumpScroller({
    move: move,
    scrollWindow: scrollWindow,
    scrollDroppable: scrollDroppable
  });

  var scroll = function scroll(state) {
    if (state.phase !== 'DRAGGING') {
      return;
    }

    if (state.movementMode === 'FLUID') {
      fluidScroller.scroll(state);
      return;
    }

    if (!state.scrollJumpRequest) {
      return;
    }

    jumpScroll(state);
  };

  var scroller = {
    scroll: scroll,
    start: fluidScroller.start,
    stop: fluidScroller.stop
  };
  return scroller;
});

var prefix$1 = 'data-rbd';
var dragHandle = function () {
  var base = prefix$1 + "-drag-handle";
  return {
    base: base,
    draggableId: base + "-draggable-id",
    contextId: base + "-context-id"
  };
}();
var draggable = function () {
  var base = prefix$1 + "-draggable";
  return {
    base: base,
    contextId: base + "-context-id",
    id: base + "-id"
  };
}();
var droppable = function () {
  var base = prefix$1 + "-droppable";
  return {
    base: base,
    contextId: base + "-context-id",
    id: base + "-id"
  };
}();
var scrollContainer = {
  contextId: prefix$1 + "-scroll-container-context-id"
};

var makeGetSelector = function makeGetSelector(context) {
  return function (attribute) {
    return "[" + attribute + "=\"" + context + "\"]";
  };
};

var getStyles = function getStyles(rules, property) {
  return rules.map(function (rule) {
    var value = rule.styles[property];

    if (!value) {
      return '';
    }

    return rule.selector + " { " + value + " }";
  }).join(' ');
};

var noPointerEvents = 'pointer-events: none;';
var getStyles$1 = (function (contextId) {
  var getSelector = makeGetSelector(contextId);

  var dragHandle$1 = function () {
    var grabCursor = "\n      cursor: -webkit-grab;\n      cursor: grab;\n    ";
    return {
      selector: getSelector(dragHandle.contextId),
      styles: {
        always: "\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ",
        resting: grabCursor,
        dragging: noPointerEvents,
        dropAnimating: grabCursor
      }
    };
  }();

  var draggable$1 = function () {
    var transition = "\n      transition: " + transitions.outOfTheWay + ";\n    ";
    return {
      selector: getSelector(draggable.contextId),
      styles: {
        dragging: transition,
        dropAnimating: transition,
        userCancel: transition
      }
    };
  }();

  var droppable$1 = {
    selector: getSelector(droppable.contextId),
    styles: {
      always: "overflow-anchor: none;"
    }
  };
  var body = {
    selector: 'body',
    styles: {
      dragging: "\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      "
    }
  };
  var rules = [draggable$1, dragHandle$1, droppable$1, body];
  return {
    always: getStyles(rules, 'always'),
    resting: getStyles(rules, 'resting'),
    dragging: getStyles(rules, 'dragging'),
    dropAnimating: getStyles(rules, 'dropAnimating'),
    userCancel: getStyles(rules, 'userCancel')
  };
});

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

var getHead = function getHead() {
  var head = document.querySelector('head');
  !head ?  true ? invariant(false, 'Cannot find the head to append a style to') : 0 : void 0;
  return head;
};

var createStyleEl = function createStyleEl(nonce) {
  var el = document.createElement('style');

  if (nonce) {
    el.setAttribute('nonce', nonce);
  }

  el.type = 'text/css';
  return el;
};

function useStyleMarshal(contextId, nonce) {
  var styles = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return getStyles$1(contextId);
  }, [contextId]);
  var alwaysRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var dynamicRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var setDynamicStyle = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)((0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (proposed) {
    var el = dynamicRef.current;
    !el ?  true ? invariant(false, 'Cannot set dynamic style element if it is not set') : 0 : void 0;
    el.textContent = proposed;
  }), []);
  var setAlwaysStyle = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (proposed) {
    var el = alwaysRef.current;
    !el ?  true ? invariant(false, 'Cannot set dynamic style element if it is not set') : 0 : void 0;
    el.textContent = proposed;
  }, []);
  useIsomorphicLayoutEffect(function () {
    !(!alwaysRef.current && !dynamicRef.current) ?  true ? invariant(false, 'style elements already mounted') : 0 : void 0;
    var always = createStyleEl(nonce);
    var dynamic = createStyleEl(nonce);
    alwaysRef.current = always;
    dynamicRef.current = dynamic;
    always.setAttribute(prefix$1 + "-always", contextId);
    dynamic.setAttribute(prefix$1 + "-dynamic", contextId);
    getHead().appendChild(always);
    getHead().appendChild(dynamic);
    setAlwaysStyle(styles.always);
    setDynamicStyle(styles.resting);
    return function () {
      var remove = function remove(ref) {
        var current = ref.current;
        !current ?  true ? invariant(false, 'Cannot unmount ref as it is not set') : 0 : void 0;
        getHead().removeChild(current);
        ref.current = null;
      };

      remove(alwaysRef);
      remove(dynamicRef);
    };
  }, [nonce, setAlwaysStyle, setDynamicStyle, styles.always, styles.resting, contextId]);
  var dragging = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    return setDynamicStyle(styles.dragging);
  }, [setDynamicStyle, styles.dragging]);
  var dropping = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (reason) {
    if (reason === 'DROP') {
      setDynamicStyle(styles.dropAnimating);
      return;
    }

    setDynamicStyle(styles.userCancel);
  }, [setDynamicStyle, styles.dropAnimating, styles.userCancel]);
  var resting = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    if (!dynamicRef.current) {
      return;
    }

    setDynamicStyle(styles.resting);
  }, [setDynamicStyle, styles.resting]);
  var marshal = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      dragging: dragging,
      dropping: dropping,
      resting: resting
    };
  }, [dragging, dropping, resting]);
  return marshal;
}

var getWindowFromEl = (function (el) {
  return el && el.ownerDocument ? el.ownerDocument.defaultView : window;
});

function isHtmlElement(el) {
  return el instanceof getWindowFromEl(el).HTMLElement;
}

function findDragHandle(contextId, draggableId) {
  var selector = "[" + dragHandle.contextId + "=\"" + contextId + "\"]";
  var possible = toArray(document.querySelectorAll(selector));

  if (!possible.length) {
     true ? warning("Unable to find any drag handles in the context \"" + contextId + "\"") : 0;
    return null;
  }

  var handle = find(possible, function (el) {
    return el.getAttribute(dragHandle.draggableId) === draggableId;
  });

  if (!handle) {
     true ? warning("Unable to find drag handle with id \"" + draggableId + "\" as no handle with a matching id was found") : 0;
    return null;
  }

  if (!isHtmlElement(handle)) {
     true ? warning('drag handle needs to be a HTMLElement') : 0;
    return null;
  }

  return handle;
}

function useFocusMarshal(contextId) {
  var entriesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  var recordRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var restoreFocusFrameRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var isMountedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var register = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function register(id, focus) {
    var entry = {
      id: id,
      focus: focus
    };
    entriesRef.current[id] = entry;
    return function unregister() {
      var entries = entriesRef.current;
      var current = entries[id];

      if (current !== entry) {
        delete entries[id];
      }
    };
  }, []);
  var tryGiveFocus = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function tryGiveFocus(tryGiveFocusTo) {
    var handle = findDragHandle(contextId, tryGiveFocusTo);

    if (handle && handle !== document.activeElement) {
      handle.focus();
    }
  }, [contextId]);
  var tryShiftRecord = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function tryShiftRecord(previous, redirectTo) {
    if (recordRef.current === previous) {
      recordRef.current = redirectTo;
    }
  }, []);
  var tryRestoreFocusRecorded = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function tryRestoreFocusRecorded() {
    if (restoreFocusFrameRef.current) {
      return;
    }

    if (!isMountedRef.current) {
      return;
    }

    restoreFocusFrameRef.current = requestAnimationFrame(function () {
      restoreFocusFrameRef.current = null;
      var record = recordRef.current;

      if (record) {
        tryGiveFocus(record);
      }
    });
  }, [tryGiveFocus]);
  var tryRecordFocus = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function tryRecordFocus(id) {
    recordRef.current = null;
    var focused = document.activeElement;

    if (!focused) {
      return;
    }

    if (focused.getAttribute(dragHandle.draggableId) !== id) {
      return;
    }

    recordRef.current = id;
  }, []);
  useIsomorphicLayoutEffect(function () {
    isMountedRef.current = true;
    return function clearFrameOnUnmount() {
      isMountedRef.current = false;
      var frameId = restoreFocusFrameRef.current;

      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);
  var marshal = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      register: register,
      tryRecordFocus: tryRecordFocus,
      tryRestoreFocusRecorded: tryRestoreFocusRecorded,
      tryShiftRecord: tryShiftRecord
    };
  }, [register, tryRecordFocus, tryRestoreFocusRecorded, tryShiftRecord]);
  return marshal;
}

function createRegistry() {
  var entries = {
    draggables: {},
    droppables: {}
  };
  var subscribers = [];

  function subscribe(cb) {
    subscribers.push(cb);
    return function unsubscribe() {
      var index = subscribers.indexOf(cb);

      if (index === -1) {
        return;
      }

      subscribers.splice(index, 1);
    };
  }

  function notify(event) {
    if (subscribers.length) {
      subscribers.forEach(function (cb) {
        return cb(event);
      });
    }
  }

  function findDraggableById(id) {
    return entries.draggables[id] || null;
  }

  function getDraggableById(id) {
    var entry = findDraggableById(id);
    !entry ?  true ? invariant(false, "Cannot find draggable entry with id [" + id + "]") : 0 : void 0;
    return entry;
  }

  var draggableAPI = {
    register: function register(entry) {
      entries.draggables[entry.descriptor.id] = entry;
      notify({
        type: 'ADDITION',
        value: entry
      });
    },
    update: function update(entry, last) {
      var current = entries.draggables[last.descriptor.id];

      if (!current) {
        return;
      }

      if (current.uniqueId !== entry.uniqueId) {
        return;
      }

      delete entries.draggables[last.descriptor.id];
      entries.draggables[entry.descriptor.id] = entry;
    },
    unregister: function unregister(entry) {
      var draggableId = entry.descriptor.id;
      var current = findDraggableById(draggableId);

      if (!current) {
        return;
      }

      if (entry.uniqueId !== current.uniqueId) {
        return;
      }

      delete entries.draggables[draggableId];
      notify({
        type: 'REMOVAL',
        value: entry
      });
    },
    getById: getDraggableById,
    findById: findDraggableById,
    exists: function exists(id) {
      return Boolean(findDraggableById(id));
    },
    getAllByType: function getAllByType(type) {
      return values(entries.draggables).filter(function (entry) {
        return entry.descriptor.type === type;
      });
    }
  };

  function findDroppableById(id) {
    return entries.droppables[id] || null;
  }

  function getDroppableById(id) {
    var entry = findDroppableById(id);
    !entry ?  true ? invariant(false, "Cannot find droppable entry with id [" + id + "]") : 0 : void 0;
    return entry;
  }

  var droppableAPI = {
    register: function register(entry) {
      entries.droppables[entry.descriptor.id] = entry;
    },
    unregister: function unregister(entry) {
      var current = findDroppableById(entry.descriptor.id);

      if (!current) {
        return;
      }

      if (entry.uniqueId !== current.uniqueId) {
        return;
      }

      delete entries.droppables[entry.descriptor.id];
    },
    getById: getDroppableById,
    findById: findDroppableById,
    exists: function exists(id) {
      return Boolean(findDroppableById(id));
    },
    getAllByType: function getAllByType(type) {
      return values(entries.droppables).filter(function (entry) {
        return entry.descriptor.type === type;
      });
    }
  };

  function clean() {
    entries.draggables = {};
    entries.droppables = {};
    subscribers.length = 0;
  }

  return {
    draggable: draggableAPI,
    droppable: droppableAPI,
    subscribe: subscribe,
    clean: clean
  };
}

function useRegistry() {
  var registry = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(createRegistry, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function unmount() {
      requestAnimationFrame(registry.clean);
    };
  }, [registry]);
  return registry;
}

var StoreContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

var getBodyElement = (function () {
  var body = document.body;
  !body ?  true ? invariant(false, 'Cannot find document.body') : 0 : void 0;
  return body;
});

var visuallyHidden = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  margin: '-1px',
  border: '0',
  padding: '0',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  'clip-path': 'inset(100%)'
};

var getId = function getId(contextId) {
  return "rbd-announcement-" + contextId;
};
function useAnnouncer(contextId) {
  var id = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return getId(contextId);
  }, [contextId]);
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function setup() {
    var el = document.createElement('div');
    ref.current = el;
    el.id = id;
    el.setAttribute('aria-live', 'assertive');
    el.setAttribute('aria-atomic', 'true');

    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])(el.style, visuallyHidden);

    getBodyElement().appendChild(el);
    return function cleanup() {
      setTimeout(function remove() {
        var body = getBodyElement();

        if (body.contains(el)) {
          body.removeChild(el);
        }

        if (el === ref.current) {
          ref.current = null;
        }
      });
    };
  }, [id]);
  var announce = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (message) {
    var el = ref.current;

    if (el) {
      el.textContent = message;
      return;
    }

     true ? warning("\n      A screen reader message was trying to be announced but it was unable to do so.\n      This can occur if you unmount your <DragDropContext /> in your onDragEnd.\n      Consider calling provided.announce() before the unmount so that the instruction will\n      not be lost for users relying on a screen reader.\n\n      Message not passed to screen reader:\n\n      \"" + message + "\"\n    ") : 0;
  }, []);
  return announce;
}

var count = 0;
var defaults = {
  separator: '::'
};
function reset() {
  count = 0;
}
function useUniqueId(prefix, options) {
  if (options === void 0) {
    options = defaults;
  }

  return (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return "" + prefix + options.separator + count++;
  }, [options.separator, prefix]);
}

function getElementId(_ref) {
  var contextId = _ref.contextId,
      uniqueId = _ref.uniqueId;
  return "rbd-hidden-text-" + contextId + "-" + uniqueId;
}
function useHiddenTextElement(_ref2) {
  var contextId = _ref2.contextId,
      text = _ref2.text;
  var uniqueId = useUniqueId('hidden-text', {
    separator: '-'
  });
  var id = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return getElementId({
      contextId: contextId,
      uniqueId: uniqueId
    });
  }, [uniqueId, contextId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function mount() {
    var el = document.createElement('div');
    el.id = id;
    el.textContent = text;
    el.style.display = 'none';
    getBodyElement().appendChild(el);
    return function unmount() {
      var body = getBodyElement();

      if (body.contains(el)) {
        body.removeChild(el);
      }
    };
  }, [id, text]);
  return id;
}

var AppContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

var peerDependencies = {
	react: "^16.8.5 || ^17.0.0 || ^18.0.0",
	"react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};

var semver = /(\d+)\.(\d+)\.(\d+)/;

var getVersion = function getVersion(value) {
  var result = semver.exec(value);
  !(result != null) ?  true ? invariant(false, "Unable to parse React version " + value) : 0 : void 0;
  var major = Number(result[1]);
  var minor = Number(result[2]);
  var patch = Number(result[3]);
  return {
    major: major,
    minor: minor,
    patch: patch,
    raw: value
  };
};

var isSatisfied = function isSatisfied(expected, actual) {
  if (actual.major > expected.major) {
    return true;
  }

  if (actual.major < expected.major) {
    return false;
  }

  if (actual.minor > expected.minor) {
    return true;
  }

  if (actual.minor < expected.minor) {
    return false;
  }

  return actual.patch >= expected.patch;
};

var checkReactVersion = (function (peerDepValue, actualValue) {
  var peerDep = getVersion(peerDepValue);
  var actual = getVersion(actualValue);

  if (isSatisfied(peerDep, actual)) {
    return;
  }

   true ? warning("\n    React version: [" + actual.raw + "]\n    does not satisfy expected peer dependency version: [" + peerDep.raw + "]\n\n    This can result in run time bugs, and even fatal crashes\n  ") : 0;
});

var suffix = "\n  We expect a html5 doctype: <!doctype html>\n  This is to ensure consistent browser layout and measurement\n\n  More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/doctype.md\n";
var checkDoctype = (function (doc) {
  var doctype = doc.doctype;

  if (!doctype) {
     true ? warning("\n      No <!doctype html> found.\n\n      " + suffix + "\n    ") : 0;
    return;
  }

  if (doctype.name.toLowerCase() !== 'html') {
     true ? warning("\n      Unexpected <!doctype> found: (" + doctype.name + ")\n\n      " + suffix + "\n    ") : 0;
  }

  if (doctype.publicId !== '') {
     true ? warning("\n      Unexpected <!doctype> publicId found: (" + doctype.publicId + ")\n      A html5 doctype does not have a publicId\n\n      " + suffix + "\n    ") : 0;
  }
});

function useDev(useHook) {
  if (true) {
    useHook();
  }
}

function useDevSetupWarning(fn, inputs) {
  useDev(function () {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      try {
        fn();
      } catch (e) {
        error("\n          A setup problem was encountered.\n\n          > " + e.message + "\n        ");
      }
    }, inputs);
  });
}

function useStartupValidation() {
  useDevSetupWarning(function () {
    checkReactVersion(peerDependencies.react, react__WEBPACK_IMPORTED_MODULE_0__.version);
    checkDoctype(document);
  }, []);
}

function usePrevious(current) {
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(current);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    ref.current = current;
  });
  return ref;
}

function create() {
  var lock = null;

  function isClaimed() {
    return Boolean(lock);
  }

  function isActive(value) {
    return value === lock;
  }

  function claim(abandon) {
    !!lock ?  true ? invariant(false, 'Cannot claim lock as it is already claimed') : 0 : void 0;
    var newLock = {
      abandon: abandon
    };
    lock = newLock;
    return newLock;
  }

  function release() {
    !lock ?  true ? invariant(false, 'Cannot release lock when there is no lock') : 0 : void 0;
    lock = null;
  }

  function tryAbandon() {
    if (lock) {
      lock.abandon();
      release();
    }
  }

  return {
    isClaimed: isClaimed,
    isActive: isActive,
    claim: claim,
    release: release,
    tryAbandon: tryAbandon
  };
}

var tab = 9;
var enter = 13;
var escape = 27;
var space = 32;
var pageUp = 33;
var pageDown = 34;
var end = 35;
var home = 36;
var arrowLeft = 37;
var arrowUp = 38;
var arrowRight = 39;
var arrowDown = 40;

var _preventedKeys;
var preventedKeys = (_preventedKeys = {}, _preventedKeys[enter] = true, _preventedKeys[tab] = true, _preventedKeys);
var preventStandardKeyEvents = (function (event) {
  if (preventedKeys[event.keyCode]) {
    event.preventDefault();
  }
});

var supportedEventName = function () {
  var base = 'visibilitychange';

  if (typeof document === 'undefined') {
    return base;
  }

  var candidates = [base, "ms" + base, "webkit" + base, "moz" + base, "o" + base];
  var supported = find(candidates, function (eventName) {
    return "on" + eventName in document;
  });
  return supported || base;
}();

var primaryButton = 0;
var sloppyClickThreshold = 5;

function isSloppyClickThresholdExceeded(original, current) {
  return Math.abs(current.x - original.x) >= sloppyClickThreshold || Math.abs(current.y - original.y) >= sloppyClickThreshold;
}

var idle$1 = {
  type: 'IDLE'
};

function getCaptureBindings(_ref) {
  var cancel = _ref.cancel,
      completed = _ref.completed,
      getPhase = _ref.getPhase,
      setPhase = _ref.setPhase;
  return [{
    eventName: 'mousemove',
    fn: function fn(event) {
      var button = event.button,
          clientX = event.clientX,
          clientY = event.clientY;

      if (button !== primaryButton) {
        return;
      }

      var point = {
        x: clientX,
        y: clientY
      };
      var phase = getPhase();

      if (phase.type === 'DRAGGING') {
        event.preventDefault();
        phase.actions.move(point);
        return;
      }

      !(phase.type === 'PENDING') ?  true ? invariant(false, 'Cannot be IDLE') : 0 : void 0;
      var pending = phase.point;

      if (!isSloppyClickThresholdExceeded(pending, point)) {
        return;
      }

      event.preventDefault();
      var actions = phase.actions.fluidLift(point);
      setPhase({
        type: 'DRAGGING',
        actions: actions
      });
    }
  }, {
    eventName: 'mouseup',
    fn: function fn(event) {
      var phase = getPhase();

      if (phase.type !== 'DRAGGING') {
        cancel();
        return;
      }

      event.preventDefault();
      phase.actions.drop({
        shouldBlockNextClick: true
      });
      completed();
    }
  }, {
    eventName: 'mousedown',
    fn: function fn(event) {
      if (getPhase().type === 'DRAGGING') {
        event.preventDefault();
      }

      cancel();
    }
  }, {
    eventName: 'keydown',
    fn: function fn(event) {
      var phase = getPhase();

      if (phase.type === 'PENDING') {
        cancel();
        return;
      }

      if (event.keyCode === escape) {
        event.preventDefault();
        cancel();
        return;
      }

      preventStandardKeyEvents(event);
    }
  }, {
    eventName: 'resize',
    fn: cancel
  }, {
    eventName: 'scroll',
    options: {
      passive: true,
      capture: false
    },
    fn: function fn() {
      if (getPhase().type === 'PENDING') {
        cancel();
      }
    }
  }, {
    eventName: 'webkitmouseforcedown',
    fn: function fn(event) {
      var phase = getPhase();
      !(phase.type !== 'IDLE') ?  true ? invariant(false, 'Unexpected phase') : 0 : void 0;

      if (phase.actions.shouldRespectForcePress()) {
        cancel();
        return;
      }

      event.preventDefault();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}

function useMouseSensor(api) {
  var phaseRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(idle$1);
  var unbindEventsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(noop);
  var startCaptureBinding = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      eventName: 'mousedown',
      fn: function onMouseDown(event) {
        if (event.defaultPrevented) {
          return;
        }

        if (event.button !== primaryButton) {
          return;
        }

        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
          return;
        }

        var draggableId = api.findClosestDraggableId(event);

        if (!draggableId) {
          return;
        }

        var actions = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });

        if (!actions) {
          return;
        }

        event.preventDefault();
        var point = {
          x: event.clientX,
          y: event.clientY
        };
        unbindEventsRef.current();
        startPendingDrag(actions, point);
      }
    };
  }, [api]);
  var preventForcePressBinding = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      eventName: 'webkitmouseforcewillbegin',
      fn: function fn(event) {
        if (event.defaultPrevented) {
          return;
        }

        var id = api.findClosestDraggableId(event);

        if (!id) {
          return;
        }

        var options = api.findOptionsForDraggable(id);

        if (!options) {
          return;
        }

        if (options.shouldRespectForcePress) {
          return;
        }

        if (!api.canGetLock(id)) {
          return;
        }

        event.preventDefault();
      }
    };
  }, [api]);
  var listenForCapture = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function listenForCapture() {
    var options = {
      passive: false,
      capture: true
    };
    unbindEventsRef.current = bindEvents(window, [preventForcePressBinding, startCaptureBinding], options);
  }, [preventForcePressBinding, startCaptureBinding]);
  var stop = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var current = phaseRef.current;

    if (current.type === 'IDLE') {
      return;
    }

    phaseRef.current = idle$1;
    unbindEventsRef.current();
    listenForCapture();
  }, [listenForCapture]);
  var cancel = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var phase = phaseRef.current;
    stop();

    if (phase.type === 'DRAGGING') {
      phase.actions.cancel({
        shouldBlockNextClick: true
      });
    }

    if (phase.type === 'PENDING') {
      phase.actions.abort();
    }
  }, [stop]);
  var bindCapturingEvents = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function bindCapturingEvents() {
    var options = {
      capture: true,
      passive: false
    };
    var bindings = getCaptureBindings({
      cancel: cancel,
      completed: stop,
      getPhase: function getPhase() {
        return phaseRef.current;
      },
      setPhase: function setPhase(phase) {
        phaseRef.current = phase;
      }
    });
    unbindEventsRef.current = bindEvents(window, bindings, options);
  }, [cancel, stop]);
  var startPendingDrag = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function startPendingDrag(actions, point) {
    !(phaseRef.current.type === 'IDLE') ?  true ? invariant(false, 'Expected to move from IDLE to PENDING drag') : 0 : void 0;
    phaseRef.current = {
      type: 'PENDING',
      point: point,
      actions: actions
    };
    bindCapturingEvents();
  }, [bindCapturingEvents]);
  useIsomorphicLayoutEffect(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
    };
  }, [listenForCapture]);
}

var _scrollJumpKeys;

function noop$1() {}

var scrollJumpKeys = (_scrollJumpKeys = {}, _scrollJumpKeys[pageDown] = true, _scrollJumpKeys[pageUp] = true, _scrollJumpKeys[home] = true, _scrollJumpKeys[end] = true, _scrollJumpKeys);

function getDraggingBindings(actions, stop) {
  function cancel() {
    stop();
    actions.cancel();
  }

  function drop() {
    stop();
    actions.drop();
  }

  return [{
    eventName: 'keydown',
    fn: function fn(event) {
      if (event.keyCode === escape) {
        event.preventDefault();
        cancel();
        return;
      }

      if (event.keyCode === space) {
        event.preventDefault();
        drop();
        return;
      }

      if (event.keyCode === arrowDown) {
        event.preventDefault();
        actions.moveDown();
        return;
      }

      if (event.keyCode === arrowUp) {
        event.preventDefault();
        actions.moveUp();
        return;
      }

      if (event.keyCode === arrowRight) {
        event.preventDefault();
        actions.moveRight();
        return;
      }

      if (event.keyCode === arrowLeft) {
        event.preventDefault();
        actions.moveLeft();
        return;
      }

      if (scrollJumpKeys[event.keyCode]) {
        event.preventDefault();
        return;
      }

      preventStandardKeyEvents(event);
    }
  }, {
    eventName: 'mousedown',
    fn: cancel
  }, {
    eventName: 'mouseup',
    fn: cancel
  }, {
    eventName: 'click',
    fn: cancel
  }, {
    eventName: 'touchstart',
    fn: cancel
  }, {
    eventName: 'resize',
    fn: cancel
  }, {
    eventName: 'wheel',
    fn: cancel,
    options: {
      passive: true
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}

function useKeyboardSensor(api) {
  var unbindEventsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(noop$1);
  var startCaptureBinding = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      eventName: 'keydown',
      fn: function onKeyDown(event) {
        if (event.defaultPrevented) {
          return;
        }

        if (event.keyCode !== space) {
          return;
        }

        var draggableId = api.findClosestDraggableId(event);

        if (!draggableId) {
          return;
        }

        var preDrag = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });

        if (!preDrag) {
          return;
        }

        event.preventDefault();
        var isCapturing = true;
        var actions = preDrag.snapLift();
        unbindEventsRef.current();

        function stop() {
          !isCapturing ?  true ? invariant(false, 'Cannot stop capturing a keyboard drag when not capturing') : 0 : void 0;
          isCapturing = false;
          unbindEventsRef.current();
          listenForCapture();
        }

        unbindEventsRef.current = bindEvents(window, getDraggingBindings(actions, stop), {
          capture: true,
          passive: false
        });
      }
    };
  }, [api]);
  var listenForCapture = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function tryStartCapture() {
    var options = {
      passive: false,
      capture: true
    };
    unbindEventsRef.current = bindEvents(window, [startCaptureBinding], options);
  }, [startCaptureBinding]);
  useIsomorphicLayoutEffect(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
    };
  }, [listenForCapture]);
}

var idle$2 = {
  type: 'IDLE'
};
var timeForLongPress = 120;
var forcePressThreshold = 0.15;

function getWindowBindings(_ref) {
  var cancel = _ref.cancel,
      getPhase = _ref.getPhase;
  return [{
    eventName: 'orientationchange',
    fn: cancel
  }, {
    eventName: 'resize',
    fn: cancel
  }, {
    eventName: 'contextmenu',
    fn: function fn(event) {
      event.preventDefault();
    }
  }, {
    eventName: 'keydown',
    fn: function fn(event) {
      if (getPhase().type !== 'DRAGGING') {
        cancel();
        return;
      }

      if (event.keyCode === escape) {
        event.preventDefault();
      }

      cancel();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}

function getHandleBindings(_ref2) {
  var cancel = _ref2.cancel,
      completed = _ref2.completed,
      getPhase = _ref2.getPhase;
  return [{
    eventName: 'touchmove',
    options: {
      capture: false
    },
    fn: function fn(event) {
      var phase = getPhase();

      if (phase.type !== 'DRAGGING') {
        cancel();
        return;
      }

      phase.hasMoved = true;
      var _event$touches$ = event.touches[0],
          clientX = _event$touches$.clientX,
          clientY = _event$touches$.clientY;
      var point = {
        x: clientX,
        y: clientY
      };
      event.preventDefault();
      phase.actions.move(point);
    }
  }, {
    eventName: 'touchend',
    fn: function fn(event) {
      var phase = getPhase();

      if (phase.type !== 'DRAGGING') {
        cancel();
        return;
      }

      event.preventDefault();
      phase.actions.drop({
        shouldBlockNextClick: true
      });
      completed();
    }
  }, {
    eventName: 'touchcancel',
    fn: function fn(event) {
      if (getPhase().type !== 'DRAGGING') {
        cancel();
        return;
      }

      event.preventDefault();
      cancel();
    }
  }, {
    eventName: 'touchforcechange',
    fn: function fn(event) {
      var phase = getPhase();
      !(phase.type !== 'IDLE') ?  true ? invariant(false) : 0 : void 0;
      var touch = event.touches[0];

      if (!touch) {
        return;
      }

      var isForcePress = touch.force >= forcePressThreshold;

      if (!isForcePress) {
        return;
      }

      var shouldRespect = phase.actions.shouldRespectForcePress();

      if (phase.type === 'PENDING') {
        if (shouldRespect) {
          cancel();
        }

        return;
      }

      if (shouldRespect) {
        if (phase.hasMoved) {
          event.preventDefault();
          return;
        }

        cancel();
        return;
      }

      event.preventDefault();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}

function useTouchSensor(api) {
  var phaseRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(idle$2);
  var unbindEventsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(noop);
  var getPhase = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function getPhase() {
    return phaseRef.current;
  }, []);
  var setPhase = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function setPhase(phase) {
    phaseRef.current = phase;
  }, []);
  var startCaptureBinding = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      eventName: 'touchstart',
      fn: function onTouchStart(event) {
        if (event.defaultPrevented) {
          return;
        }

        var draggableId = api.findClosestDraggableId(event);

        if (!draggableId) {
          return;
        }

        var actions = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });

        if (!actions) {
          return;
        }

        var touch = event.touches[0];
        var clientX = touch.clientX,
            clientY = touch.clientY;
        var point = {
          x: clientX,
          y: clientY
        };
        unbindEventsRef.current();
        startPendingDrag(actions, point);
      }
    };
  }, [api]);
  var listenForCapture = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function listenForCapture() {
    var options = {
      capture: true,
      passive: false
    };
    unbindEventsRef.current = bindEvents(window, [startCaptureBinding], options);
  }, [startCaptureBinding]);
  var stop = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var current = phaseRef.current;

    if (current.type === 'IDLE') {
      return;
    }

    if (current.type === 'PENDING') {
      clearTimeout(current.longPressTimerId);
    }

    setPhase(idle$2);
    unbindEventsRef.current();
    listenForCapture();
  }, [listenForCapture, setPhase]);
  var cancel = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var phase = phaseRef.current;
    stop();

    if (phase.type === 'DRAGGING') {
      phase.actions.cancel({
        shouldBlockNextClick: true
      });
    }

    if (phase.type === 'PENDING') {
      phase.actions.abort();
    }
  }, [stop]);
  var bindCapturingEvents = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function bindCapturingEvents() {
    var options = {
      capture: true,
      passive: false
    };
    var args = {
      cancel: cancel,
      completed: stop,
      getPhase: getPhase
    };
    var unbindTarget = bindEvents(window, getHandleBindings(args), options);
    var unbindWindow = bindEvents(window, getWindowBindings(args), options);

    unbindEventsRef.current = function unbindAll() {
      unbindTarget();
      unbindWindow();
    };
  }, [cancel, getPhase, stop]);
  var startDragging = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function startDragging() {
    var phase = getPhase();
    !(phase.type === 'PENDING') ?  true ? invariant(false, "Cannot start dragging from phase " + phase.type) : 0 : void 0;
    var actions = phase.actions.fluidLift(phase.point);
    setPhase({
      type: 'DRAGGING',
      actions: actions,
      hasMoved: false
    });
  }, [getPhase, setPhase]);
  var startPendingDrag = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function startPendingDrag(actions, point) {
    !(getPhase().type === 'IDLE') ?  true ? invariant(false, 'Expected to move from IDLE to PENDING drag') : 0 : void 0;
    var longPressTimerId = setTimeout(startDragging, timeForLongPress);
    setPhase({
      type: 'PENDING',
      point: point,
      actions: actions,
      longPressTimerId: longPressTimerId
    });
    bindCapturingEvents();
  }, [bindCapturingEvents, getPhase, setPhase, startDragging]);
  useIsomorphicLayoutEffect(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
      var phase = getPhase();

      if (phase.type === 'PENDING') {
        clearTimeout(phase.longPressTimerId);
        setPhase(idle$2);
      }
    };
  }, [getPhase, listenForCapture, setPhase]);
  useIsomorphicLayoutEffect(function webkitHack() {
    var unbind = bindEvents(window, [{
      eventName: 'touchmove',
      fn: function fn() {},
      options: {
        capture: false,
        passive: false
      }
    }]);
    return unbind;
  }, []);
}

function useValidateSensorHooks(sensorHooks) {
  useDev(function () {
    var previousRef = usePrevious(sensorHooks);
    useDevSetupWarning(function () {
      !(previousRef.current.length === sensorHooks.length) ?  true ? invariant(false, 'Cannot change the amount of sensor hooks after mounting') : 0 : void 0;
    });
  });
}

var interactiveTagNames = {
  input: true,
  button: true,
  textarea: true,
  select: true,
  option: true,
  optgroup: true,
  video: true,
  audio: true
};

function isAnInteractiveElement(parent, current) {
  if (current == null) {
    return false;
  }

  var hasAnInteractiveTag = Boolean(interactiveTagNames[current.tagName.toLowerCase()]);

  if (hasAnInteractiveTag) {
    return true;
  }

  var attribute = current.getAttribute('contenteditable');

  if (attribute === 'true' || attribute === '') {
    return true;
  }

  if (current === parent) {
    return false;
  }

  return isAnInteractiveElement(parent, current.parentElement);
}

function isEventInInteractiveElement(draggable, event) {
  var target = event.target;

  if (!isHtmlElement(target)) {
    return false;
  }

  return isAnInteractiveElement(draggable, target);
}

var getBorderBoxCenterPosition = (function (el) {
  return (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.getRect)(el.getBoundingClientRect()).center;
});

function isElement(el) {
  return el instanceof getWindowFromEl(el).Element;
}

var supportedMatchesName = function () {
  var base = 'matches';

  if (typeof document === 'undefined') {
    return base;
  }

  var candidates = [base, 'msMatchesSelector', 'webkitMatchesSelector'];
  var value = find(candidates, function (name) {
    return name in Element.prototype;
  });
  return value || base;
}();

function closestPonyfill(el, selector) {
  if (el == null) {
    return null;
  }

  if (el[supportedMatchesName](selector)) {
    return el;
  }

  return closestPonyfill(el.parentElement, selector);
}

function closest$1(el, selector) {
  if (el.closest) {
    return el.closest(selector);
  }

  return closestPonyfill(el, selector);
}

function getSelector(contextId) {
  return "[" + dragHandle.contextId + "=\"" + contextId + "\"]";
}

function findClosestDragHandleFromEvent(contextId, event) {
  var target = event.target;

  if (!isElement(target)) {
     true ? warning('event.target must be a Element') : 0;
    return null;
  }

  var selector = getSelector(contextId);
  var handle = closest$1(target, selector);

  if (!handle) {
    return null;
  }

  if (!isHtmlElement(handle)) {
     true ? warning('drag handle must be a HTMLElement') : 0;
    return null;
  }

  return handle;
}

function tryGetClosestDraggableIdFromEvent(contextId, event) {
  var handle = findClosestDragHandleFromEvent(contextId, event);

  if (!handle) {
    return null;
  }

  return handle.getAttribute(dragHandle.draggableId);
}

function findDraggable(contextId, draggableId) {
  var selector = "[" + draggable.contextId + "=\"" + contextId + "\"]";
  var possible = toArray(document.querySelectorAll(selector));
  var draggable$1 = find(possible, function (el) {
    return el.getAttribute(draggable.id) === draggableId;
  });

  if (!draggable$1) {
    return null;
  }

  if (!isHtmlElement(draggable$1)) {
     true ? warning('Draggable element is not a HTMLElement') : 0;
    return null;
  }

  return draggable$1;
}

function preventDefault(event) {
  event.preventDefault();
}

function _isActive(_ref) {
  var expected = _ref.expected,
      phase = _ref.phase,
      isLockActive = _ref.isLockActive,
      shouldWarn = _ref.shouldWarn;

  if (!isLockActive()) {
    if (shouldWarn) {
       true ? warning("\n        Cannot perform action.\n        The sensor no longer has an action lock.\n\n        Tips:\n\n        - Throw away your action handlers when forceStop() is called\n        - Check actions.isActive() if you really need to\n      ") : 0;
    }

    return false;
  }

  if (expected !== phase) {
    if (shouldWarn) {
       true ? warning("\n        Cannot perform action.\n        The actions you used belong to an outdated phase\n\n        Current phase: " + expected + "\n        You called an action from outdated phase: " + phase + "\n\n        Tips:\n\n        - Do not use preDragActions actions after calling preDragActions.lift()\n      ") : 0;
    }

    return false;
  }

  return true;
}

function canStart(_ref2) {
  var lockAPI = _ref2.lockAPI,
      store = _ref2.store,
      registry = _ref2.registry,
      draggableId = _ref2.draggableId;

  if (lockAPI.isClaimed()) {
    return false;
  }

  var entry = registry.draggable.findById(draggableId);

  if (!entry) {
     true ? warning("Unable to find draggable with id: " + draggableId) : 0;
    return false;
  }

  if (!entry.options.isEnabled) {
    return false;
  }

  if (!canStartDrag(store.getState(), draggableId)) {
    return false;
  }

  return true;
}

function tryStart(_ref3) {
  var lockAPI = _ref3.lockAPI,
      contextId = _ref3.contextId,
      store = _ref3.store,
      registry = _ref3.registry,
      draggableId = _ref3.draggableId,
      forceSensorStop = _ref3.forceSensorStop,
      sourceEvent = _ref3.sourceEvent;
  var shouldStart = canStart({
    lockAPI: lockAPI,
    store: store,
    registry: registry,
    draggableId: draggableId
  });

  if (!shouldStart) {
    return null;
  }

  var entry = registry.draggable.getById(draggableId);
  var el = findDraggable(contextId, entry.descriptor.id);

  if (!el) {
     true ? warning("Unable to find draggable element with id: " + draggableId) : 0;
    return null;
  }

  if (sourceEvent && !entry.options.canDragInteractiveElements && isEventInInteractiveElement(el, sourceEvent)) {
    return null;
  }

  var lock = lockAPI.claim(forceSensorStop || noop);
  var phase = 'PRE_DRAG';

  function getShouldRespectForcePress() {
    return entry.options.shouldRespectForcePress;
  }

  function isLockActive() {
    return lockAPI.isActive(lock);
  }

  function tryDispatch(expected, getAction) {
    if (_isActive({
      expected: expected,
      phase: phase,
      isLockActive: isLockActive,
      shouldWarn: true
    })) {
      store.dispatch(getAction());
    }
  }

  var tryDispatchWhenDragging = tryDispatch.bind(null, 'DRAGGING');

  function lift$1(args) {
    function completed() {
      lockAPI.release();
      phase = 'COMPLETED';
    }

    if (phase !== 'PRE_DRAG') {
      completed();
      !(phase === 'PRE_DRAG') ?  true ? invariant(false, "Cannot lift in phase " + phase) : 0 : void 0;
    }

    store.dispatch(lift(args.liftActionArgs));
    phase = 'DRAGGING';

    function finish(reason, options) {
      if (options === void 0) {
        options = {
          shouldBlockNextClick: false
        };
      }

      args.cleanup();

      if (options.shouldBlockNextClick) {
        var unbind = bindEvents(window, [{
          eventName: 'click',
          fn: preventDefault,
          options: {
            once: true,
            passive: false,
            capture: true
          }
        }]);
        setTimeout(unbind);
      }

      completed();
      store.dispatch(drop({
        reason: reason
      }));
    }

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      isActive: function isActive() {
        return _isActive({
          expected: 'DRAGGING',
          phase: phase,
          isLockActive: isLockActive,
          shouldWarn: false
        });
      },
      shouldRespectForcePress: getShouldRespectForcePress,
      drop: function drop(options) {
        return finish('DROP', options);
      },
      cancel: function cancel(options) {
        return finish('CANCEL', options);
      }
    }, args.actions);
  }

  function fluidLift(clientSelection) {
    var move$1 = (0,raf_schd__WEBPACK_IMPORTED_MODULE_7__["default"])(function (client) {
      tryDispatchWhenDragging(function () {
        return move({
          client: client
        });
      });
    });
    var api = lift$1({
      liftActionArgs: {
        id: draggableId,
        clientSelection: clientSelection,
        movementMode: 'FLUID'
      },
      cleanup: function cleanup() {
        return move$1.cancel();
      },
      actions: {
        move: move$1
      }
    });
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, api, {
      move: move$1
    });
  }

  function snapLift() {
    var actions = {
      moveUp: function moveUp$1() {
        return tryDispatchWhenDragging(moveUp);
      },
      moveRight: function moveRight$1() {
        return tryDispatchWhenDragging(moveRight);
      },
      moveDown: function moveDown$1() {
        return tryDispatchWhenDragging(moveDown);
      },
      moveLeft: function moveLeft$1() {
        return tryDispatchWhenDragging(moveLeft);
      }
    };
    return lift$1({
      liftActionArgs: {
        id: draggableId,
        clientSelection: getBorderBoxCenterPosition(el),
        movementMode: 'SNAP'
      },
      cleanup: noop,
      actions: actions
    });
  }

  function abortPreDrag() {
    var shouldRelease = _isActive({
      expected: 'PRE_DRAG',
      phase: phase,
      isLockActive: isLockActive,
      shouldWarn: true
    });

    if (shouldRelease) {
      lockAPI.release();
    }
  }

  var preDrag = {
    isActive: function isActive() {
      return _isActive({
        expected: 'PRE_DRAG',
        phase: phase,
        isLockActive: isLockActive,
        shouldWarn: false
      });
    },
    shouldRespectForcePress: getShouldRespectForcePress,
    fluidLift: fluidLift,
    snapLift: snapLift,
    abort: abortPreDrag
  };
  return preDrag;
}

var defaultSensors = [useMouseSensor, useKeyboardSensor, useTouchSensor];
function useSensorMarshal(_ref4) {
  var contextId = _ref4.contextId,
      store = _ref4.store,
      registry = _ref4.registry,
      customSensors = _ref4.customSensors,
      enableDefaultSensors = _ref4.enableDefaultSensors;
  var useSensors = [].concat(enableDefaultSensors ? defaultSensors : [], customSensors || []);
  var lockAPI = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
    return create();
  })[0];
  var tryAbandonLock = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function tryAbandonLock(previous, current) {
    if (previous.isDragging && !current.isDragging) {
      lockAPI.tryAbandon();
    }
  }, [lockAPI]);
  useIsomorphicLayoutEffect(function listenToStore() {
    var previous = store.getState();
    var unsubscribe = store.subscribe(function () {
      var current = store.getState();
      tryAbandonLock(previous, current);
      previous = current;
    });
    return unsubscribe;
  }, [lockAPI, store, tryAbandonLock]);
  useIsomorphicLayoutEffect(function () {
    return lockAPI.tryAbandon;
  }, [lockAPI.tryAbandon]);
  var canGetLock = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (draggableId) {
    return canStart({
      lockAPI: lockAPI,
      registry: registry,
      store: store,
      draggableId: draggableId
    });
  }, [lockAPI, registry, store]);
  var tryGetLock = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (draggableId, forceStop, options) {
    return tryStart({
      lockAPI: lockAPI,
      registry: registry,
      contextId: contextId,
      store: store,
      draggableId: draggableId,
      forceSensorStop: forceStop,
      sourceEvent: options && options.sourceEvent ? options.sourceEvent : null
    });
  }, [contextId, lockAPI, registry, store]);
  var findClosestDraggableId = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (event) {
    return tryGetClosestDraggableIdFromEvent(contextId, event);
  }, [contextId]);
  var findOptionsForDraggable = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (id) {
    var entry = registry.draggable.findById(id);
    return entry ? entry.options : null;
  }, [registry.draggable]);
  var tryReleaseLock = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function tryReleaseLock() {
    if (!lockAPI.isClaimed()) {
      return;
    }

    lockAPI.tryAbandon();

    if (store.getState().phase !== 'IDLE') {
      store.dispatch(flush());
    }
  }, [lockAPI, store]);
  var isLockClaimed = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(lockAPI.isClaimed, [lockAPI]);
  var api = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      canGetLock: canGetLock,
      tryGetLock: tryGetLock,
      findClosestDraggableId: findClosestDraggableId,
      findOptionsForDraggable: findOptionsForDraggable,
      tryReleaseLock: tryReleaseLock,
      isLockClaimed: isLockClaimed
    };
  }, [canGetLock, tryGetLock, findClosestDraggableId, findOptionsForDraggable, tryReleaseLock, isLockClaimed]);
  useValidateSensorHooks(useSensors);

  for (var i = 0; i < useSensors.length; i++) {
    useSensors[i](api);
  }
}

var createResponders = function createResponders(props) {
  return {
    onBeforeCapture: props.onBeforeCapture,
    onBeforeDragStart: props.onBeforeDragStart,
    onDragStart: props.onDragStart,
    onDragEnd: props.onDragEnd,
    onDragUpdate: props.onDragUpdate
  };
};

function getStore(lazyRef) {
  !lazyRef.current ?  true ? invariant(false, 'Could not find store from lazy ref') : 0 : void 0;
  return lazyRef.current;
}

function App(props) {
  var contextId = props.contextId,
      setCallbacks = props.setCallbacks,
      sensors = props.sensors,
      nonce = props.nonce,
      dragHandleUsageInstructions = props.dragHandleUsageInstructions;
  var lazyStoreRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  useStartupValidation();
  var lastPropsRef = usePrevious(props);
  var getResponders = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    return createResponders(lastPropsRef.current);
  }, [lastPropsRef]);
  var announce = useAnnouncer(contextId);
  var dragHandleUsageInstructionsId = useHiddenTextElement({
    contextId: contextId,
    text: dragHandleUsageInstructions
  });
  var styleMarshal = useStyleMarshal(contextId, nonce);
  var lazyDispatch = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (action) {
    getStore(lazyStoreRef).dispatch(action);
  }, []);
  var marshalCallbacks = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return (0,redux__WEBPACK_IMPORTED_MODULE_8__.bindActionCreators)({
      publishWhileDragging: publishWhileDragging,
      updateDroppableScroll: updateDroppableScroll,
      updateDroppableIsEnabled: updateDroppableIsEnabled,
      updateDroppableIsCombineEnabled: updateDroppableIsCombineEnabled,
      collectionStarting: collectionStarting
    }, lazyDispatch);
  }, [lazyDispatch]);
  var registry = useRegistry();
  var dimensionMarshal = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return createDimensionMarshal(registry, marshalCallbacks);
  }, [registry, marshalCallbacks]);
  var autoScroller = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return createAutoScroller((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      scrollWindow: scrollWindow,
      scrollDroppable: dimensionMarshal.scrollDroppable
    }, (0,redux__WEBPACK_IMPORTED_MODULE_8__.bindActionCreators)({
      move: move
    }, lazyDispatch)));
  }, [dimensionMarshal.scrollDroppable, lazyDispatch]);
  var focusMarshal = useFocusMarshal(contextId);
  var store = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return createStore({
      announce: announce,
      autoScroller: autoScroller,
      dimensionMarshal: dimensionMarshal,
      focusMarshal: focusMarshal,
      getResponders: getResponders,
      styleMarshal: styleMarshal
    });
  }, [announce, autoScroller, dimensionMarshal, focusMarshal, getResponders, styleMarshal]);

  if (true) {
    if (lazyStoreRef.current && lazyStoreRef.current !== store) {
       true ? warning('unexpected store change') : 0;
    }
  }

  lazyStoreRef.current = store;
  var tryResetStore = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var current = getStore(lazyStoreRef);
    var state = current.getState();

    if (state.phase !== 'IDLE') {
      current.dispatch(flush());
    }
  }, []);
  var isDragging = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var state = getStore(lazyStoreRef).getState();
    return state.isDragging || state.phase === 'DROP_ANIMATING';
  }, []);
  var appCallbacks = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      isDragging: isDragging,
      tryAbort: tryResetStore
    };
  }, [isDragging, tryResetStore]);
  setCallbacks(appCallbacks);
  var getCanLift = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (id) {
    return canStartDrag(getStore(lazyStoreRef).getState(), id);
  }, []);
  var getIsMovementAllowed = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    return isMovementAllowed(getStore(lazyStoreRef).getState());
  }, []);
  var appContext = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      marshal: dimensionMarshal,
      focus: focusMarshal,
      contextId: contextId,
      canLift: getCanLift,
      isMovementAllowed: getIsMovementAllowed,
      dragHandleUsageInstructionsId: dragHandleUsageInstructionsId,
      registry: registry
    };
  }, [contextId, dimensionMarshal, dragHandleUsageInstructionsId, focusMarshal, getCanLift, getIsMovementAllowed, registry]);
  useSensorMarshal({
    contextId: contextId,
    store: store,
    registry: registry,
    customSensors: sensors,
    enableDefaultSensors: props.enableDefaultSensors !== false
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return tryResetStore;
  }, [tryResetStore]);
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(AppContext.Provider, {
    value: appContext
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
    context: StoreContext,
    store: store
  }, props.children));
}

var count$1 = 0;
function reset$1() {
  count$1 = 0;
}
function useInstanceCount() {
  return (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return "" + count$1++;
  }, []);
}

function resetServerContext() {
  reset$1();
  reset();
}
function DragDropContext(props) {
  var contextId = useInstanceCount();
  var dragHandleUsageInstructions = props.dragHandleUsageInstructions || preset.dragHandleUsageInstructions;
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary, null, function (setCallbacks) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(App, {
      nonce: props.nonce,
      contextId: contextId,
      setCallbacks: setCallbacks,
      dragHandleUsageInstructions: dragHandleUsageInstructions,
      enableDefaultSensors: props.enableDefaultSensors,
      sensors: props.sensors,
      onBeforeCapture: props.onBeforeCapture,
      onBeforeDragStart: props.onBeforeDragStart,
      onDragStart: props.onDragStart,
      onDragUpdate: props.onDragUpdate,
      onDragEnd: props.onDragEnd
    }, props.children);
  });
}

var isEqual$1 = function isEqual(base) {
  return function (value) {
    return base === value;
  };
};

var isScroll = isEqual$1('scroll');
var isAuto = isEqual$1('auto');
var isVisible$1 = isEqual$1('visible');

var isEither = function isEither(overflow, fn) {
  return fn(overflow.overflowX) || fn(overflow.overflowY);
};

var isBoth = function isBoth(overflow, fn) {
  return fn(overflow.overflowX) && fn(overflow.overflowY);
};

var isElementScrollable = function isElementScrollable(el) {
  var style = window.getComputedStyle(el);
  var overflow = {
    overflowX: style.overflowX,
    overflowY: style.overflowY
  };
  return isEither(overflow, isScroll) || isEither(overflow, isAuto);
};

var isBodyScrollable = function isBodyScrollable() {
  if (false) {}

  var body = getBodyElement();
  var html = document.documentElement;
  !html ?  true ? invariant(false) : 0 : void 0;

  if (!isElementScrollable(body)) {
    return false;
  }

  var htmlStyle = window.getComputedStyle(html);
  var htmlOverflow = {
    overflowX: htmlStyle.overflowX,
    overflowY: htmlStyle.overflowY
  };

  if (isBoth(htmlOverflow, isVisible$1)) {
    return false;
  }

   true ? warning("\n    We have detected that your <body> element might be a scroll container.\n    We have found no reliable way of detecting whether the <body> element is a scroll container.\n    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)\n\n    Because we cannot determine if the <body> is a scroll container, and generally it is not one,\n    we will be treating the <body> as *not* a scroll container\n\n    More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/how-we-detect-scroll-containers.md\n  ") : 0;
  return false;
};

var getClosestScrollable = function getClosestScrollable(el) {
  if (el == null) {
    return null;
  }

  if (el === document.body) {
    return isBodyScrollable() ? el : null;
  }

  if (el === document.documentElement) {
    return null;
  }

  if (!isElementScrollable(el)) {
    return getClosestScrollable(el.parentElement);
  }

  return el;
};

var checkForNestedScrollContainers = (function (scrollable) {
  if (!scrollable) {
    return;
  }

  var anotherScrollParent = getClosestScrollable(scrollable.parentElement);

  if (!anotherScrollParent) {
    return;
  }

   true ? warning("\n    Droppable: unsupported nested scroll container detected.\n    A Droppable can only have one scroll parent (which can be itself)\n    Nested scroll containers are currently not supported.\n\n    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131\n  ") : 0;
});

var getScroll$1 = (function (el) {
  return {
    x: el.scrollLeft,
    y: el.scrollTop
  };
});

var getIsFixed = function getIsFixed(el) {
  if (!el) {
    return false;
  }

  var style = window.getComputedStyle(el);

  if (style.position === 'fixed') {
    return true;
  }

  return getIsFixed(el.parentElement);
};

var getEnv = (function (start) {
  var closestScrollable = getClosestScrollable(start);
  var isFixedOnPage = getIsFixed(start);
  return {
    closestScrollable: closestScrollable,
    isFixedOnPage: isFixedOnPage
  };
});

var getDroppableDimension = (function (_ref) {
  var descriptor = _ref.descriptor,
      isEnabled = _ref.isEnabled,
      isCombineEnabled = _ref.isCombineEnabled,
      isFixedOnPage = _ref.isFixedOnPage,
      direction = _ref.direction,
      client = _ref.client,
      page = _ref.page,
      closest = _ref.closest;

  var frame = function () {
    if (!closest) {
      return null;
    }

    var scrollSize = closest.scrollSize,
        frameClient = closest.client;
    var maxScroll = getMaxScroll({
      scrollHeight: scrollSize.scrollHeight,
      scrollWidth: scrollSize.scrollWidth,
      height: frameClient.paddingBox.height,
      width: frameClient.paddingBox.width
    });
    return {
      pageMarginBox: closest.page.marginBox,
      frameClient: frameClient,
      scrollSize: scrollSize,
      shouldClipSubject: closest.shouldClipSubject,
      scroll: {
        initial: closest.scroll,
        current: closest.scroll,
        max: maxScroll,
        diff: {
          value: origin,
          displacement: origin
        }
      }
    };
  }();

  var axis = direction === 'vertical' ? vertical : horizontal;
  var subject = getSubject({
    page: page,
    withPlaceholder: null,
    axis: axis,
    frame: frame
  });
  var dimension = {
    descriptor: descriptor,
    isCombineEnabled: isCombineEnabled,
    isFixedOnPage: isFixedOnPage,
    axis: axis,
    isEnabled: isEnabled,
    client: client,
    page: page,
    frame: frame,
    subject: subject
  };
  return dimension;
});

var getClient = function getClient(targetRef, closestScrollable) {
  var base = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.getBox)(targetRef);

  if (!closestScrollable) {
    return base;
  }

  if (targetRef !== closestScrollable) {
    return base;
  }

  var top = base.paddingBox.top - closestScrollable.scrollTop;
  var left = base.paddingBox.left - closestScrollable.scrollLeft;
  var bottom = top + closestScrollable.scrollHeight;
  var right = left + closestScrollable.scrollWidth;
  var paddingBox = {
    top: top,
    right: right,
    bottom: bottom,
    left: left
  };
  var borderBox = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.expand)(paddingBox, base.border);
  var client = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.createBox)({
    borderBox: borderBox,
    margin: base.margin,
    border: base.border,
    padding: base.padding
  });
  return client;
};

var getDimension = (function (_ref) {
  var ref = _ref.ref,
      descriptor = _ref.descriptor,
      env = _ref.env,
      windowScroll = _ref.windowScroll,
      direction = _ref.direction,
      isDropDisabled = _ref.isDropDisabled,
      isCombineEnabled = _ref.isCombineEnabled,
      shouldClipSubject = _ref.shouldClipSubject;
  var closestScrollable = env.closestScrollable;
  var client = getClient(ref, closestScrollable);
  var page = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.withScroll)(client, windowScroll);

  var closest = function () {
    if (!closestScrollable) {
      return null;
    }

    var frameClient = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.getBox)(closestScrollable);
    var scrollSize = {
      scrollHeight: closestScrollable.scrollHeight,
      scrollWidth: closestScrollable.scrollWidth
    };
    return {
      client: frameClient,
      page: (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.withScroll)(frameClient, windowScroll),
      scroll: getScroll$1(closestScrollable),
      scrollSize: scrollSize,
      shouldClipSubject: shouldClipSubject
    };
  }();

  var dimension = getDroppableDimension({
    descriptor: descriptor,
    isEnabled: !isDropDisabled,
    isCombineEnabled: isCombineEnabled,
    isFixedOnPage: env.isFixedOnPage,
    direction: direction,
    client: client,
    page: page,
    closest: closest
  });
  return dimension;
});

var immediate = {
  passive: false
};
var delayed = {
  passive: true
};
var getListenerOptions = (function (options) {
  return options.shouldPublishImmediately ? immediate : delayed;
});

function useRequiredContext(Context) {
  var result = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
  !result ?  true ? invariant(false, 'Could not find required context') : 0 : void 0;
  return result;
}

var getClosestScrollableFromDrag = function getClosestScrollableFromDrag(dragging) {
  return dragging && dragging.env.closestScrollable || null;
};

function useDroppablePublisher(args) {
  var whileDraggingRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var appContext = useRequiredContext(AppContext);
  var uniqueId = useUniqueId('droppable');
  var registry = appContext.registry,
      marshal = appContext.marshal;
  var previousRef = usePrevious(args);
  var descriptor = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      id: args.droppableId,
      type: args.type,
      mode: args.mode
    };
  }, [args.droppableId, args.mode, args.type]);
  var publishedDescriptorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(descriptor);
  var memoizedUpdateScroll = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (x, y) {
      !whileDraggingRef.current ?  true ? invariant(false, 'Can only update scroll when dragging') : 0 : void 0;
      var scroll = {
        x: x,
        y: y
      };
      marshal.updateDroppableScroll(descriptor.id, scroll);
    });
  }, [descriptor.id, marshal]);
  var getClosestScroll = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var dragging = whileDraggingRef.current;

    if (!dragging || !dragging.env.closestScrollable) {
      return origin;
    }

    return getScroll$1(dragging.env.closestScrollable);
  }, []);
  var updateScroll = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var scroll = getClosestScroll();
    memoizedUpdateScroll(scroll.x, scroll.y);
  }, [getClosestScroll, memoizedUpdateScroll]);
  var scheduleScrollUpdate = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return (0,raf_schd__WEBPACK_IMPORTED_MODULE_7__["default"])(updateScroll);
  }, [updateScroll]);
  var onClosestScroll = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var dragging = whileDraggingRef.current;
    var closest = getClosestScrollableFromDrag(dragging);
    !(dragging && closest) ?  true ? invariant(false, 'Could not find scroll options while scrolling') : 0 : void 0;
    var options = dragging.scrollOptions;

    if (options.shouldPublishImmediately) {
      updateScroll();
      return;
    }

    scheduleScrollUpdate();
  }, [scheduleScrollUpdate, updateScroll]);
  var getDimensionAndWatchScroll = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (windowScroll, options) {
    !!whileDraggingRef.current ?  true ? invariant(false, 'Cannot collect a droppable while a drag is occurring') : 0 : void 0;
    var previous = previousRef.current;
    var ref = previous.getDroppableRef();
    !ref ?  true ? invariant(false, 'Cannot collect without a droppable ref') : 0 : void 0;
    var env = getEnv(ref);
    var dragging = {
      ref: ref,
      descriptor: descriptor,
      env: env,
      scrollOptions: options
    };
    whileDraggingRef.current = dragging;
    var dimension = getDimension({
      ref: ref,
      descriptor: descriptor,
      env: env,
      windowScroll: windowScroll,
      direction: previous.direction,
      isDropDisabled: previous.isDropDisabled,
      isCombineEnabled: previous.isCombineEnabled,
      shouldClipSubject: !previous.ignoreContainerClipping
    });
    var scrollable = env.closestScrollable;

    if (scrollable) {
      scrollable.setAttribute(scrollContainer.contextId, appContext.contextId);
      scrollable.addEventListener('scroll', onClosestScroll, getListenerOptions(dragging.scrollOptions));

      if (true) {
        checkForNestedScrollContainers(scrollable);
      }
    }

    return dimension;
  }, [appContext.contextId, descriptor, onClosestScroll, previousRef]);
  var getScrollWhileDragging = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var dragging = whileDraggingRef.current;
    var closest = getClosestScrollableFromDrag(dragging);
    !(dragging && closest) ?  true ? invariant(false, 'Can only recollect Droppable client for Droppables that have a scroll container') : 0 : void 0;
    return getScroll$1(closest);
  }, []);
  var dragStopped = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var dragging = whileDraggingRef.current;
    !dragging ?  true ? invariant(false, 'Cannot stop drag when no active drag') : 0 : void 0;
    var closest = getClosestScrollableFromDrag(dragging);
    whileDraggingRef.current = null;

    if (!closest) {
      return;
    }

    scheduleScrollUpdate.cancel();
    closest.removeAttribute(scrollContainer.contextId);
    closest.removeEventListener('scroll', onClosestScroll, getListenerOptions(dragging.scrollOptions));
  }, [onClosestScroll, scheduleScrollUpdate]);
  var scroll = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (change) {
    var dragging = whileDraggingRef.current;
    !dragging ?  true ? invariant(false, 'Cannot scroll when there is no drag') : 0 : void 0;
    var closest = getClosestScrollableFromDrag(dragging);
    !closest ?  true ? invariant(false, 'Cannot scroll a droppable with no closest scrollable') : 0 : void 0;
    closest.scrollTop += change.y;
    closest.scrollLeft += change.x;
  }, []);
  var callbacks = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      getDimensionAndWatchScroll: getDimensionAndWatchScroll,
      getScrollWhileDragging: getScrollWhileDragging,
      dragStopped: dragStopped,
      scroll: scroll
    };
  }, [dragStopped, getDimensionAndWatchScroll, getScrollWhileDragging, scroll]);
  var entry = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      uniqueId: uniqueId,
      descriptor: descriptor,
      callbacks: callbacks
    };
  }, [callbacks, descriptor, uniqueId]);
  useIsomorphicLayoutEffect(function () {
    publishedDescriptorRef.current = entry.descriptor;
    registry.droppable.register(entry);
    return function () {
      if (whileDraggingRef.current) {
         true ? warning('Unsupported: changing the droppableId or type of a Droppable during a drag') : 0;
        dragStopped();
      }

      registry.droppable.unregister(entry);
    };
  }, [callbacks, descriptor, dragStopped, entry, marshal, registry.droppable]);
  useIsomorphicLayoutEffect(function () {
    if (!whileDraggingRef.current) {
      return;
    }

    marshal.updateDroppableIsEnabled(publishedDescriptorRef.current.id, !args.isDropDisabled);
  }, [args.isDropDisabled, marshal]);
  useIsomorphicLayoutEffect(function () {
    if (!whileDraggingRef.current) {
      return;
    }

    marshal.updateDroppableIsCombineEnabled(publishedDescriptorRef.current.id, args.isCombineEnabled);
  }, [args.isCombineEnabled, marshal]);
}

function noop$2() {}

var empty = {
  width: 0,
  height: 0,
  margin: noSpacing
};

var getSize = function getSize(_ref) {
  var isAnimatingOpenOnMount = _ref.isAnimatingOpenOnMount,
      placeholder = _ref.placeholder,
      animate = _ref.animate;

  if (isAnimatingOpenOnMount) {
    return empty;
  }

  if (animate === 'close') {
    return empty;
  }

  return {
    height: placeholder.client.borderBox.height,
    width: placeholder.client.borderBox.width,
    margin: placeholder.client.margin
  };
};

var getStyle = function getStyle(_ref2) {
  var isAnimatingOpenOnMount = _ref2.isAnimatingOpenOnMount,
      placeholder = _ref2.placeholder,
      animate = _ref2.animate;
  var size = getSize({
    isAnimatingOpenOnMount: isAnimatingOpenOnMount,
    placeholder: placeholder,
    animate: animate
  });
  return {
    display: placeholder.display,
    boxSizing: 'border-box',
    width: size.width,
    height: size.height,
    marginTop: size.margin.top,
    marginRight: size.margin.right,
    marginBottom: size.margin.bottom,
    marginLeft: size.margin.left,
    flexShrink: '0',
    flexGrow: '0',
    pointerEvents: 'none',
    transition: animate !== 'none' ? transitions.placeholder : null
  };
};

function Placeholder(props) {
  var animateOpenTimerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var tryClearAnimateOpenTimer = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    if (!animateOpenTimerRef.current) {
      return;
    }

    clearTimeout(animateOpenTimerRef.current);
    animateOpenTimerRef.current = null;
  }, []);
  var animate = props.animate,
      onTransitionEnd = props.onTransitionEnd,
      onClose = props.onClose,
      contextId = props.contextId;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.animate === 'open'),
      isAnimatingOpenOnMount = _useState[0],
      setIsAnimatingOpenOnMount = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!isAnimatingOpenOnMount) {
      return noop$2;
    }

    if (animate !== 'open') {
      tryClearAnimateOpenTimer();
      setIsAnimatingOpenOnMount(false);
      return noop$2;
    }

    if (animateOpenTimerRef.current) {
      return noop$2;
    }

    animateOpenTimerRef.current = setTimeout(function () {
      animateOpenTimerRef.current = null;
      setIsAnimatingOpenOnMount(false);
    });
    return tryClearAnimateOpenTimer;
  }, [animate, isAnimatingOpenOnMount, tryClearAnimateOpenTimer]);
  var onSizeChangeEnd = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (event) {
    if (event.propertyName !== 'height') {
      return;
    }

    onTransitionEnd();

    if (animate === 'close') {
      onClose();
    }
  }, [animate, onClose, onTransitionEnd]);
  var style = getStyle({
    isAnimatingOpenOnMount: isAnimatingOpenOnMount,
    animate: props.animate,
    placeholder: props.placeholder
  });
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.placeholder.tagName, {
    style: style,
    'data-rbd-placeholder-context-id': contextId,
    onTransitionEnd: onSizeChangeEnd,
    ref: props.innerRef
  });
}

var Placeholder$1 = react__WEBPACK_IMPORTED_MODULE_0__.memo(Placeholder);

var DroppableContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

function checkIsValidInnerRef(el) {
  !(el && isHtmlElement(el)) ?  true ? invariant(false, "\n    provided.innerRef has not been provided with a HTMLElement.\n\n    You can find a guide on using the innerRef callback functions at:\n    https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/using-inner-ref.md\n  ") : 0 : void 0;
}

function isBoolean(value) {
  return typeof value === 'boolean';
}

function runChecks(args, checks) {
  checks.forEach(function (check) {
    return check(args);
  });
}

var shared = [function required(_ref) {
  var props = _ref.props;
  !props.droppableId ?  true ? invariant(false, 'A Droppable requires a droppableId prop') : 0 : void 0;
  !(typeof props.droppableId === 'string') ?  true ? invariant(false, "A Droppable requires a [string] droppableId. Provided: [" + typeof props.droppableId + "]") : 0 : void 0;
}, function _boolean(_ref2) {
  var props = _ref2.props;
  !isBoolean(props.isDropDisabled) ?  true ? invariant(false, 'isDropDisabled must be a boolean') : 0 : void 0;
  !isBoolean(props.isCombineEnabled) ?  true ? invariant(false, 'isCombineEnabled must be a boolean') : 0 : void 0;
  !isBoolean(props.ignoreContainerClipping) ?  true ? invariant(false, 'ignoreContainerClipping must be a boolean') : 0 : void 0;
}, function ref(_ref3) {
  var getDroppableRef = _ref3.getDroppableRef;
  checkIsValidInnerRef(getDroppableRef());
}];
var standard = [function placeholder(_ref4) {
  var props = _ref4.props,
      getPlaceholderRef = _ref4.getPlaceholderRef;

  if (!props.placeholder) {
    return;
  }

  var ref = getPlaceholderRef();

  if (ref) {
    return;
  }

   true ? warning("\n      Droppable setup issue [droppableId: \"" + props.droppableId + "\"]:\n      DroppableProvided > placeholder could not be found.\n\n      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.\n      More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/droppable.md\n    ") : 0;
}];
var virtual = [function hasClone(_ref5) {
  var props = _ref5.props;
  !props.renderClone ?  true ? invariant(false, 'Must provide a clone render function (renderClone) for virtual lists') : 0 : void 0;
}, function hasNoPlaceholder(_ref6) {
  var getPlaceholderRef = _ref6.getPlaceholderRef;
  !!getPlaceholderRef() ?  true ? invariant(false, 'Expected virtual list to not have a placeholder') : 0 : void 0;
}];
function useValidation(args) {
  useDevSetupWarning(function () {
    runChecks(args, shared);

    if (args.props.mode === 'standard') {
      runChecks(args, standard);
    }

    if (args.props.mode === 'virtual') {
      runChecks(args, virtual);
    }
  });
}

var AnimateInOut = function (_React$PureComponent) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(AnimateInOut, _React$PureComponent);

  function AnimateInOut() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
    _this.state = {
      isVisible: Boolean(_this.props.on),
      data: _this.props.on,
      animate: _this.props.shouldAnimate && _this.props.on ? 'open' : 'none'
    };

    _this.onClose = function () {
      if (_this.state.animate !== 'close') {
        return;
      }

      _this.setState({
        isVisible: false
      });
    };

    return _this;
  }

  AnimateInOut.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (!props.shouldAnimate) {
      return {
        isVisible: Boolean(props.on),
        data: props.on,
        animate: 'none'
      };
    }

    if (props.on) {
      return {
        isVisible: true,
        data: props.on,
        animate: 'open'
      };
    }

    if (state.isVisible) {
      return {
        isVisible: true,
        data: state.data,
        animate: 'close'
      };
    }

    return {
      isVisible: false,
      animate: 'close',
      data: null
    };
  };

  var _proto = AnimateInOut.prototype;

  _proto.render = function render() {
    if (!this.state.isVisible) {
      return null;
    }

    var provided = {
      onClose: this.onClose,
      data: this.state.data,
      animate: this.state.animate
    };
    return this.props.children(provided);
  };

  return AnimateInOut;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);

var zIndexOptions = {
  dragging: 5000,
  dropAnimating: 4500
};

var getDraggingTransition = function getDraggingTransition(shouldAnimateDragMovement, dropping) {
  if (dropping) {
    return transitions.drop(dropping.duration);
  }

  if (shouldAnimateDragMovement) {
    return transitions.snap;
  }

  return transitions.fluid;
};

var getDraggingOpacity = function getDraggingOpacity(isCombining, isDropAnimating) {
  if (!isCombining) {
    return null;
  }

  return isDropAnimating ? combine.opacity.drop : combine.opacity.combining;
};

var getShouldDraggingAnimate = function getShouldDraggingAnimate(dragging) {
  if (dragging.forceShouldAnimate != null) {
    return dragging.forceShouldAnimate;
  }

  return dragging.mode === 'SNAP';
};

function getDraggingStyle(dragging) {
  var dimension = dragging.dimension;
  var box = dimension.client;
  var offset = dragging.offset,
      combineWith = dragging.combineWith,
      dropping = dragging.dropping;
  var isCombining = Boolean(combineWith);
  var shouldAnimate = getShouldDraggingAnimate(dragging);
  var isDropAnimating = Boolean(dropping);
  var transform = isDropAnimating ? transforms.drop(offset, isCombining) : transforms.moveTo(offset);
  var style = {
    position: 'fixed',
    top: box.marginBox.top,
    left: box.marginBox.left,
    boxSizing: 'border-box',
    width: box.borderBox.width,
    height: box.borderBox.height,
    transition: getDraggingTransition(shouldAnimate, dropping),
    transform: transform,
    opacity: getDraggingOpacity(isCombining, isDropAnimating),
    zIndex: isDropAnimating ? zIndexOptions.dropAnimating : zIndexOptions.dragging,
    pointerEvents: 'none'
  };
  return style;
}

function getSecondaryStyle(secondary) {
  return {
    transform: transforms.moveTo(secondary.offset),
    transition: secondary.shouldAnimateDisplacement ? null : 'none'
  };
}

function getStyle$1(mapped) {
  return mapped.type === 'DRAGGING' ? getDraggingStyle(mapped) : getSecondaryStyle(mapped);
}

function getDimension$1(descriptor, el, windowScroll) {
  if (windowScroll === void 0) {
    windowScroll = origin;
  }

  var computedStyles = window.getComputedStyle(el);
  var borderBox = el.getBoundingClientRect();
  var client = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.calculateBox)(borderBox, computedStyles);
  var page = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.withScroll)(client, windowScroll);
  var placeholder = {
    client: client,
    tagName: el.tagName.toLowerCase(),
    display: computedStyles.display
  };
  var displaceBy = {
    x: client.marginBox.width,
    y: client.marginBox.height
  };
  var dimension = {
    descriptor: descriptor,
    placeholder: placeholder,
    displaceBy: displaceBy,
    client: client,
    page: page
  };
  return dimension;
}

function useDraggablePublisher(args) {
  var uniqueId = useUniqueId('draggable');
  var descriptor = args.descriptor,
      registry = args.registry,
      getDraggableRef = args.getDraggableRef,
      canDragInteractiveElements = args.canDragInteractiveElements,
      shouldRespectForcePress = args.shouldRespectForcePress,
      isEnabled = args.isEnabled;
  var options = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      canDragInteractiveElements: canDragInteractiveElements,
      shouldRespectForcePress: shouldRespectForcePress,
      isEnabled: isEnabled
    };
  }, [canDragInteractiveElements, isEnabled, shouldRespectForcePress]);
  var getDimension = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (windowScroll) {
    var el = getDraggableRef();
    !el ?  true ? invariant(false, 'Cannot get dimension when no ref is set') : 0 : void 0;
    return getDimension$1(descriptor, el, windowScroll);
  }, [descriptor, getDraggableRef]);
  var entry = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      uniqueId: uniqueId,
      descriptor: descriptor,
      options: options,
      getDimension: getDimension
    };
  }, [descriptor, getDimension, options, uniqueId]);
  var publishedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(entry);
  var isFirstPublishRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  useIsomorphicLayoutEffect(function () {
    registry.draggable.register(publishedRef.current);
    return function () {
      return registry.draggable.unregister(publishedRef.current);
    };
  }, [registry.draggable]);
  useIsomorphicLayoutEffect(function () {
    if (isFirstPublishRef.current) {
      isFirstPublishRef.current = false;
      return;
    }

    var last = publishedRef.current;
    publishedRef.current = entry;
    registry.draggable.update(entry, last);
  }, [entry, registry.draggable]);
}

function useValidation$1(props, contextId, getRef) {
  useDevSetupWarning(function () {
    function prefix(id) {
      return "Draggable[id: " + id + "]: ";
    }

    var id = props.draggableId;
    !id ?  true ? invariant(false, 'Draggable requires a draggableId') : 0 : void 0;
    !(typeof id === 'string') ?  true ? invariant(false, "Draggable requires a [string] draggableId.\n      Provided: [type: " + typeof id + "] (value: " + id + ")") : 0 : void 0;
    !isInteger(props.index) ?  true ? invariant(false, prefix(id) + " requires an integer index prop") : 0 : void 0;

    if (props.mapped.type === 'DRAGGING') {
      return;
    }

    checkIsValidInnerRef(getRef());

    if (props.isEnabled) {
      !findDragHandle(contextId, id) ?  true ? invariant(false, prefix(id) + " Unable to find drag handle") : 0 : void 0;
    }
  });
}
function useClonePropValidation(isClone) {
  useDev(function () {
    var initialRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(isClone);
    useDevSetupWarning(function () {
      !(isClone === initialRef.current) ?  true ? invariant(false, 'Draggable isClone prop value changed during component life') : 0 : void 0;
    }, [isClone]);
  });
}

function preventHtml5Dnd(event) {
  event.preventDefault();
}

function Draggable(props) {
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var setRef = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (el) {
    ref.current = el;
  }, []);
  var getRef = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    return ref.current;
  }, []);

  var _useRequiredContext = useRequiredContext(AppContext),
      contextId = _useRequiredContext.contextId,
      dragHandleUsageInstructionsId = _useRequiredContext.dragHandleUsageInstructionsId,
      registry = _useRequiredContext.registry;

  var _useRequiredContext2 = useRequiredContext(DroppableContext),
      type = _useRequiredContext2.type,
      droppableId = _useRequiredContext2.droppableId;

  var descriptor = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      id: props.draggableId,
      index: props.index,
      type: type,
      droppableId: droppableId
    };
  }, [props.draggableId, props.index, type, droppableId]);
  var children = props.children,
      draggableId = props.draggableId,
      isEnabled = props.isEnabled,
      shouldRespectForcePress = props.shouldRespectForcePress,
      canDragInteractiveElements = props.canDragInteractiveElements,
      isClone = props.isClone,
      mapped = props.mapped,
      dropAnimationFinishedAction = props.dropAnimationFinished;
  useValidation$1(props, contextId, getRef);
  useClonePropValidation(isClone);

  if (!isClone) {
    var forPublisher = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
      return {
        descriptor: descriptor,
        registry: registry,
        getDraggableRef: getRef,
        canDragInteractiveElements: canDragInteractiveElements,
        shouldRespectForcePress: shouldRespectForcePress,
        isEnabled: isEnabled
      };
    }, [descriptor, registry, getRef, canDragInteractiveElements, shouldRespectForcePress, isEnabled]);
    useDraggablePublisher(forPublisher);
  }

  var dragHandleProps = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return isEnabled ? {
      tabIndex: 0,
      role: 'button',
      'aria-describedby': dragHandleUsageInstructionsId,
      'data-rbd-drag-handle-draggable-id': draggableId,
      'data-rbd-drag-handle-context-id': contextId,
      draggable: false,
      onDragStart: preventHtml5Dnd
    } : null;
  }, [contextId, dragHandleUsageInstructionsId, draggableId, isEnabled]);
  var onMoveEnd = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (event) {
    if (mapped.type !== 'DRAGGING') {
      return;
    }

    if (!mapped.dropping) {
      return;
    }

    if (event.propertyName !== 'transform') {
      return;
    }

    dropAnimationFinishedAction();
  }, [dropAnimationFinishedAction, mapped]);
  var provided = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    var style = getStyle$1(mapped);
    var onTransitionEnd = mapped.type === 'DRAGGING' && mapped.dropping ? onMoveEnd : null;
    var result = {
      innerRef: setRef,
      draggableProps: {
        'data-rbd-draggable-context-id': contextId,
        'data-rbd-draggable-id': draggableId,
        style: style,
        onTransitionEnd: onTransitionEnd
      },
      dragHandleProps: dragHandleProps
    };
    return result;
  }, [contextId, dragHandleProps, draggableId, mapped, onMoveEnd, setRef]);
  var rubric = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      draggableId: descriptor.id,
      type: descriptor.type,
      source: {
        index: descriptor.index,
        droppableId: descriptor.droppableId
      }
    };
  }, [descriptor.droppableId, descriptor.id, descriptor.index, descriptor.type]);
  return children(provided, mapped.snapshot, rubric);
}

var isStrictEqual = (function (a, b) {
  return a === b;
});

var whatIsDraggedOverFromResult = (function (result) {
  var combine = result.combine,
      destination = result.destination;

  if (destination) {
    return destination.droppableId;
  }

  if (combine) {
    return combine.droppableId;
  }

  return null;
});

var getCombineWithFromResult = function getCombineWithFromResult(result) {
  return result.combine ? result.combine.draggableId : null;
};

var getCombineWithFromImpact = function getCombineWithFromImpact(impact) {
  return impact.at && impact.at.type === 'COMBINE' ? impact.at.combine.draggableId : null;
};

function getDraggableSelector() {
  var memoizedOffset = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (x, y) {
    return {
      x: x,
      y: y
    };
  });
  var getMemoizedSnapshot = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (mode, isClone, draggingOver, combineWith, dropping) {
    return {
      isDragging: true,
      isClone: isClone,
      isDropAnimating: Boolean(dropping),
      dropAnimation: dropping,
      mode: mode,
      draggingOver: draggingOver,
      combineWith: combineWith,
      combineTargetFor: null
    };
  });
  var getMemoizedProps = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (offset, mode, dimension, isClone, draggingOver, combineWith, forceShouldAnimate) {
    return {
      mapped: {
        type: 'DRAGGING',
        dropping: null,
        draggingOver: draggingOver,
        combineWith: combineWith,
        mode: mode,
        offset: offset,
        dimension: dimension,
        forceShouldAnimate: forceShouldAnimate,
        snapshot: getMemoizedSnapshot(mode, isClone, draggingOver, combineWith, null)
      }
    };
  });

  var selector = function selector(state, ownProps) {
    if (state.isDragging) {
      if (state.critical.draggable.id !== ownProps.draggableId) {
        return null;
      }

      var offset = state.current.client.offset;
      var dimension = state.dimensions.draggables[ownProps.draggableId];
      var draggingOver = whatIsDraggedOver(state.impact);
      var combineWith = getCombineWithFromImpact(state.impact);
      var forceShouldAnimate = state.forceShouldAnimate;
      return getMemoizedProps(memoizedOffset(offset.x, offset.y), state.movementMode, dimension, ownProps.isClone, draggingOver, combineWith, forceShouldAnimate);
    }

    if (state.phase === 'DROP_ANIMATING') {
      var completed = state.completed;

      if (completed.result.draggableId !== ownProps.draggableId) {
        return null;
      }

      var isClone = ownProps.isClone;
      var _dimension = state.dimensions.draggables[ownProps.draggableId];
      var result = completed.result;
      var mode = result.mode;

      var _draggingOver = whatIsDraggedOverFromResult(result);

      var _combineWith = getCombineWithFromResult(result);

      var duration = state.dropDuration;
      var dropping = {
        duration: duration,
        curve: curves.drop,
        moveTo: state.newHomeClientOffset,
        opacity: _combineWith ? combine.opacity.drop : null,
        scale: _combineWith ? combine.scale.drop : null
      };
      return {
        mapped: {
          type: 'DRAGGING',
          offset: state.newHomeClientOffset,
          dimension: _dimension,
          dropping: dropping,
          draggingOver: _draggingOver,
          combineWith: _combineWith,
          mode: mode,
          forceShouldAnimate: null,
          snapshot: getMemoizedSnapshot(mode, isClone, _draggingOver, _combineWith, dropping)
        }
      };
    }

    return null;
  };

  return selector;
}

function getSecondarySnapshot(combineTargetFor) {
  return {
    isDragging: false,
    isDropAnimating: false,
    isClone: false,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor: combineTargetFor,
    combineWith: null
  };
}

var atRest = {
  mapped: {
    type: 'SECONDARY',
    offset: origin,
    combineTargetFor: null,
    shouldAnimateDisplacement: true,
    snapshot: getSecondarySnapshot(null)
  }
};

function getSecondarySelector() {
  var memoizedOffset = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (x, y) {
    return {
      x: x,
      y: y
    };
  });
  var getMemoizedSnapshot = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(getSecondarySnapshot);
  var getMemoizedProps = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (offset, combineTargetFor, shouldAnimateDisplacement) {
    if (combineTargetFor === void 0) {
      combineTargetFor = null;
    }

    return {
      mapped: {
        type: 'SECONDARY',
        offset: offset,
        combineTargetFor: combineTargetFor,
        shouldAnimateDisplacement: shouldAnimateDisplacement,
        snapshot: getMemoizedSnapshot(combineTargetFor)
      }
    };
  });

  var getFallback = function getFallback(combineTargetFor) {
    return combineTargetFor ? getMemoizedProps(origin, combineTargetFor, true) : null;
  };

  var getProps = function getProps(ownId, draggingId, impact, afterCritical) {
    var visualDisplacement = impact.displaced.visible[ownId];
    var isAfterCriticalInVirtualList = Boolean(afterCritical.inVirtualList && afterCritical.effected[ownId]);
    var combine = tryGetCombine(impact);
    var combineTargetFor = combine && combine.draggableId === ownId ? draggingId : null;

    if (!visualDisplacement) {
      if (!isAfterCriticalInVirtualList) {
        return getFallback(combineTargetFor);
      }

      if (impact.displaced.invisible[ownId]) {
        return null;
      }

      var change = negate(afterCritical.displacedBy.point);

      var _offset = memoizedOffset(change.x, change.y);

      return getMemoizedProps(_offset, combineTargetFor, true);
    }

    if (isAfterCriticalInVirtualList) {
      return getFallback(combineTargetFor);
    }

    var displaceBy = impact.displacedBy.point;
    var offset = memoizedOffset(displaceBy.x, displaceBy.y);
    return getMemoizedProps(offset, combineTargetFor, visualDisplacement.shouldAnimate);
  };

  var selector = function selector(state, ownProps) {
    if (state.isDragging) {
      if (state.critical.draggable.id === ownProps.draggableId) {
        return null;
      }

      return getProps(ownProps.draggableId, state.critical.draggable.id, state.impact, state.afterCritical);
    }

    if (state.phase === 'DROP_ANIMATING') {
      var completed = state.completed;

      if (completed.result.draggableId === ownProps.draggableId) {
        return null;
      }

      return getProps(ownProps.draggableId, completed.result.draggableId, completed.impact, completed.afterCritical);
    }

    return null;
  };

  return selector;
}

var makeMapStateToProps = function makeMapStateToProps() {
  var draggingSelector = getDraggableSelector();
  var secondarySelector = getSecondarySelector();

  var selector = function selector(state, ownProps) {
    return draggingSelector(state, ownProps) || secondarySelector(state, ownProps) || atRest;
  };

  return selector;
};
var mapDispatchToProps = {
  dropAnimationFinished: dropAnimationFinished
};
var ConnectedDraggable = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(makeMapStateToProps, mapDispatchToProps, null, {
  context: StoreContext,
  pure: true,
  areStatePropsEqual: isStrictEqual
})(Draggable);

function PrivateDraggable(props) {
  var droppableContext = useRequiredContext(DroppableContext);
  var isUsingCloneFor = droppableContext.isUsingCloneFor;

  if (isUsingCloneFor === props.draggableId && !props.isClone) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ConnectedDraggable, props);
}
function PublicDraggable(props) {
  var isEnabled = typeof props.isDragDisabled === 'boolean' ? !props.isDragDisabled : true;
  var canDragInteractiveElements = Boolean(props.disableInteractiveElementBlocking);
  var shouldRespectForcePress = Boolean(props.shouldRespectForcePress);
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(PrivateDraggable, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
    isClone: false,
    isEnabled: isEnabled,
    canDragInteractiveElements: canDragInteractiveElements,
    shouldRespectForcePress: shouldRespectForcePress
  }));
}

function Droppable(props) {
  var appContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AppContext);
  !appContext ?  true ? invariant(false, 'Could not find app context') : 0 : void 0;
  var contextId = appContext.contextId,
      isMovementAllowed = appContext.isMovementAllowed;
  var droppableRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var placeholderRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var children = props.children,
      droppableId = props.droppableId,
      type = props.type,
      mode = props.mode,
      direction = props.direction,
      ignoreContainerClipping = props.ignoreContainerClipping,
      isDropDisabled = props.isDropDisabled,
      isCombineEnabled = props.isCombineEnabled,
      snapshot = props.snapshot,
      useClone = props.useClone,
      updateViewportMaxScroll = props.updateViewportMaxScroll,
      getContainerForClone = props.getContainerForClone;
  var getDroppableRef = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    return droppableRef.current;
  }, []);
  var setDroppableRef = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (value) {
    droppableRef.current = value;
  }, []);
  var getPlaceholderRef = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    return placeholderRef.current;
  }, []);
  var setPlaceholderRef = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (value) {
    placeholderRef.current = value;
  }, []);
  useValidation({
    props: props,
    getDroppableRef: getDroppableRef,
    getPlaceholderRef: getPlaceholderRef
  });
  var onPlaceholderTransitionEnd = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    if (isMovementAllowed()) {
      updateViewportMaxScroll({
        maxScroll: getMaxWindowScroll()
      });
    }
  }, [isMovementAllowed, updateViewportMaxScroll]);
  useDroppablePublisher({
    droppableId: droppableId,
    type: type,
    mode: mode,
    direction: direction,
    isDropDisabled: isDropDisabled,
    isCombineEnabled: isCombineEnabled,
    ignoreContainerClipping: ignoreContainerClipping,
    getDroppableRef: getDroppableRef
  });
  var placeholder = react__WEBPACK_IMPORTED_MODULE_0__.createElement(AnimateInOut, {
    on: props.placeholder,
    shouldAnimate: props.shouldAnimatePlaceholder
  }, function (_ref) {
    var onClose = _ref.onClose,
        data = _ref.data,
        animate = _ref.animate;
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Placeholder$1, {
      placeholder: data,
      onClose: onClose,
      innerRef: setPlaceholderRef,
      animate: animate,
      contextId: contextId,
      onTransitionEnd: onPlaceholderTransitionEnd
    });
  });
  var provided = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      innerRef: setDroppableRef,
      placeholder: placeholder,
      droppableProps: {
        'data-rbd-droppable-id': droppableId,
        'data-rbd-droppable-context-id': contextId
      }
    };
  }, [contextId, droppableId, placeholder, setDroppableRef]);
  var isUsingCloneFor = useClone ? useClone.dragging.draggableId : null;
  var droppableContext = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      droppableId: droppableId,
      type: type,
      isUsingCloneFor: isUsingCloneFor
    };
  }, [droppableId, isUsingCloneFor, type]);

  function getClone() {
    if (!useClone) {
      return null;
    }

    var dragging = useClone.dragging,
        render = useClone.render;
    var node = react__WEBPACK_IMPORTED_MODULE_0__.createElement(PrivateDraggable, {
      draggableId: dragging.draggableId,
      index: dragging.source.index,
      isClone: true,
      isEnabled: true,
      shouldRespectForcePress: false,
      canDragInteractiveElements: true
    }, function (draggableProvided, draggableSnapshot) {
      return render(draggableProvided, draggableSnapshot, dragging);
    });
    return react_dom__WEBPACK_IMPORTED_MODULE_4__.createPortal(node, getContainerForClone());
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(DroppableContext.Provider, {
    value: droppableContext
  }, children(provided, snapshot), getClone());
}

var isMatchingType = function isMatchingType(type, critical) {
  return type === critical.droppable.type;
};

var getDraggable = function getDraggable(critical, dimensions) {
  return dimensions.draggables[critical.draggable.id];
};

var makeMapStateToProps$1 = function makeMapStateToProps() {
  var idleWithAnimation = {
    placeholder: null,
    shouldAnimatePlaceholder: true,
    snapshot: {
      isDraggingOver: false,
      draggingOverWith: null,
      draggingFromThisWith: null,
      isUsingPlaceholder: false
    },
    useClone: null
  };

  var idleWithoutAnimation = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, idleWithAnimation, {
    shouldAnimatePlaceholder: false
  });

  var getDraggableRubric = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (descriptor) {
    return {
      draggableId: descriptor.id,
      type: descriptor.type,
      source: {
        index: descriptor.index,
        droppableId: descriptor.droppableId
      }
    };
  });
  var getMapProps = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (id, isEnabled, isDraggingOverForConsumer, isDraggingOverForImpact, dragging, renderClone) {
    var draggableId = dragging.descriptor.id;
    var isHome = dragging.descriptor.droppableId === id;

    if (isHome) {
      var useClone = renderClone ? {
        render: renderClone,
        dragging: getDraggableRubric(dragging.descriptor)
      } : null;
      var _snapshot = {
        isDraggingOver: isDraggingOverForConsumer,
        draggingOverWith: isDraggingOverForConsumer ? draggableId : null,
        draggingFromThisWith: draggableId,
        isUsingPlaceholder: true
      };
      return {
        placeholder: dragging.placeholder,
        shouldAnimatePlaceholder: false,
        snapshot: _snapshot,
        useClone: useClone
      };
    }

    if (!isEnabled) {
      return idleWithoutAnimation;
    }

    if (!isDraggingOverForImpact) {
      return idleWithAnimation;
    }

    var snapshot = {
      isDraggingOver: isDraggingOverForConsumer,
      draggingOverWith: draggableId,
      draggingFromThisWith: null,
      isUsingPlaceholder: true
    };
    return {
      placeholder: dragging.placeholder,
      shouldAnimatePlaceholder: true,
      snapshot: snapshot,
      useClone: null
    };
  });

  var selector = function selector(state, ownProps) {
    var id = ownProps.droppableId;
    var type = ownProps.type;
    var isEnabled = !ownProps.isDropDisabled;
    var renderClone = ownProps.renderClone;

    if (state.isDragging) {
      var critical = state.critical;

      if (!isMatchingType(type, critical)) {
        return idleWithoutAnimation;
      }

      var dragging = getDraggable(critical, state.dimensions);
      var isDraggingOver = whatIsDraggedOver(state.impact) === id;
      return getMapProps(id, isEnabled, isDraggingOver, isDraggingOver, dragging, renderClone);
    }

    if (state.phase === 'DROP_ANIMATING') {
      var completed = state.completed;

      if (!isMatchingType(type, completed.critical)) {
        return idleWithoutAnimation;
      }

      var _dragging = getDraggable(completed.critical, state.dimensions);

      return getMapProps(id, isEnabled, whatIsDraggedOverFromResult(completed.result) === id, whatIsDraggedOver(completed.impact) === id, _dragging, renderClone);
    }

    if (state.phase === 'IDLE' && state.completed && !state.shouldFlush) {
      var _completed = state.completed;

      if (!isMatchingType(type, _completed.critical)) {
        return idleWithoutAnimation;
      }

      var wasOver = whatIsDraggedOver(_completed.impact) === id;
      var wasCombining = Boolean(_completed.impact.at && _completed.impact.at.type === 'COMBINE');
      var isHome = _completed.critical.droppable.id === id;

      if (wasOver) {
        return wasCombining ? idleWithAnimation : idleWithoutAnimation;
      }

      if (isHome) {
        return idleWithAnimation;
      }

      return idleWithoutAnimation;
    }

    return idleWithoutAnimation;
  };

  return selector;
};
var mapDispatchToProps$1 = {
  updateViewportMaxScroll: updateViewportMaxScroll
};

function getBody() {
  !document.body ?  true ? invariant(false, 'document.body is not ready') : 0 : void 0;
  return document.body;
}

var defaultProps = {
  mode: 'standard',
  type: 'DEFAULT',
  direction: 'vertical',
  isDropDisabled: false,
  isCombineEnabled: false,
  ignoreContainerClipping: false,
  renderClone: null,
  getContainerForClone: getBody
};
var ConnectedDroppable = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(makeMapStateToProps$1, mapDispatchToProps$1, null, {
  context: StoreContext,
  pure: true,
  areStatePropsEqual: isStrictEqual
})(Droppable);
ConnectedDroppable.defaultProps = defaultProps;




/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/react-is/cjs/react-is.development.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/react-is/cjs/react-is.development.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/react-is/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/react-is/index.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-beautiful-dnd/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/components/Context.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/react-redux/es/components/Context.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactReduxContext: () => (/* binding */ ReactReduxContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var ReactReduxContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

if (true) {
  ReactReduxContext.displayName = 'ReactRedux';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactReduxContext);

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/components/Provider.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/react-redux/es/components/Provider.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Context */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");






function Provider(_ref) {
  var store = _ref.store,
      context = _ref.context,
      children = _ref.children;
  var contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var subscription = (0,_utils_Subscription__WEBPACK_IMPORTED_MODULE_2__.createSubscription)(store);
    return {
      store: store,
      subscription: subscription
    };
  }, [store]);
  var previousState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return store.getState();
  }, [store]);
  (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(function () {
    var subscription = contextValue.subscription;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return function () {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || _Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

if (true) {
  Provider.propTypes = {
    store: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
      subscribe: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired),
      dispatch: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired),
      getState: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired)
    }),
    context: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any)
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Provider);

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/components/connectAdvanced.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/react-redux/es/components/connectAdvanced.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ connectAdvanced)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-beautiful-dnd/node_modules/react-is/index.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Context */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/components/Context.js");


var _excluded = ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"],
    _excluded2 = ["reactReduxForwardedRef"];





 // Define some constant arrays just to avoid re-creating these

var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];

var stringifyComponent = function stringifyComponent(Comp) {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}

function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__.useIsomorphicLayoutEffect)(function () {
    return effectFunc.apply(void 0, effectArgs);
  }, dependencies);
}

function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  // We want to capture the wrapper props and child props we used for later comparisons
  lastWrapperProps.current = wrapperProps;
  lastChildProps.current = actualChildProps;
  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}

function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
  // If we're not subscribed to the store, nothing to do here
  if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts

  var didUnsubscribe = false;
  var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

  var checkForUpdates = function checkForUpdates() {
    if (didUnsubscribe) {
      // Don't run stale listeners.
      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
      return;
    }

    var latestStoreState = store.getState();
    var newChildProps, error;

    try {
      // Actually run the selector with the most recent store state and wrapper props
      // to determine what the child props should be
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }

    if (!error) {
      lastThrownError = null;
    } // If the child props haven't changed, nothing to do here - cascade the subscription update


    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      // Save references to the new child props.  Note that we track the "child props from store update"
      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
      // forcing another re-render, which we don't want.
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render

      forceComponentUpdateDispatch({
        type: 'STORE_UPDATED',
        payload: {
          error: error
        }
      });
    }
  }; // Actually subscribe to the nearest connected ancestor (or store)


  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
  // changed since we began.

  checkForUpdates();

  var unsubscribeWrapper = function unsubscribeWrapper() {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;

    if (lastThrownError) {
      // It's possible that we caught an error due to a bad mapState function, but the
      // parent re-rendered without this component and we're about to unmount.
      // This shouldn't happen as long as we do top-down subscriptions correctly, but
      // if we ever do those wrong, this throw will surface the error in our tests.
      // In that case, throw the error from here so it doesn't get lost.
      throw lastThrownError;
    }
  };

  return unsubscribeWrapper;
}

var initStateUpdates = function initStateUpdates() {
  return [null, 0];
};

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
      export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
    Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
    Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      _ref2$forwardRef = _ref2.forwardRef,
      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? _Context__WEBPACK_IMPORTED_MODULE_7__.ReactReduxContext : _ref2$context,
      connectOptions = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, _excluded);

  if (true) {
    if (renderCountProp !== undefined) {
      throw new Error("renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
    }

    if (withRef) {
      throw new Error('withRef is removed. To access the wrapped instance, use a ref on the connected component');
    }

    var customStoreWarningMessage = 'To use a custom Redux store for specific components, create a custom React context with ' + "React.createContext(), and pass the context object to React Redux's Provider and specific components" + ' like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';

    if (storeKey !== 'store') {
      throw new Error('storeKey has been removed and does not do anything. ' + customStoreWarningMessage);
    }
  }

  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if ( true && !(0,react_is__WEBPACK_IMPORTED_MODULE_4__.isValidElementType)(WrappedComponent)) {
      throw new Error("You must pass a component to the function returned by " + (methodName + ". Instead received " + stringifyComponent(WrappedComponent)));
    }

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var pure = connectOptions.pure;

    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    } // If we aren't running in "pure" mode, we don't want to memoize values.
    // To avoid conditionally calling hooks, we fall back to a tiny wrapper
    // that just executes the given callback immediately.


    var usePureOnlyMemo = pure ? react__WEBPACK_IMPORTED_MODULE_3__.useMemo : function (callback) {
      return callback();
    };

    function ConnectFunction(props) {
      var _useMemo = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        var reactReduxForwardedRef = props.reactReduxForwardedRef,
            wrapperProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded2);

        return [props.context, reactReduxForwardedRef, wrapperProps];
      }, [props]),
          propsContext = _useMemo[0],
          reactReduxForwardedRef = _useMemo[1],
          wrapperProps = _useMemo[2];

      var ContextToUse = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && (0,react_is__WEBPACK_IMPORTED_MODULE_4__.isContextConsumer)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      var contextValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if ( true && !didStoreComeFromProps && !didStoreComeFromContext) {
        throw new Error("Could not find \"store\" in the context of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options."));
      } // Based on the previous check, one of these must be true


      var store = didStoreComeFromProps ? props.store : contextValue.store;
      var childPropsSelector = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return createChildSelector(store);
      }, [store]);

      var _useMemo2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var subscription = (0,_utils_Subscription__WEBPACK_IMPORTED_MODULE_5__.createSubscription)(store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.
        var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]),
          subscription = _useMemo2[0],
          notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.


      var overriddenContextValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, contextValue, {
          subscription: subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update
      // causes a change to the calculated child component props (or we caught an error in mapState)

      var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),
          _useReducer$ = _useReducer[0],
          previousStateUpdateResult = _useReducer$[0],
          forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards


      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      } // Set up refs to coordinate values between the subscription effect and the render logic


      var lastChildProps = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
      var lastWrapperProps = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(wrapperProps);
      var childPropsFromStoreUpdate = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
      var renderIsScheduled = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(false);
      var actualChildProps = usePureOnlyMemo(function () {
        // Tricky logic here:
        // - This render may have been triggered by a Redux store update that produced new child props
        // - However, we may have gotten new wrapper props after that
        // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
        // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
        // So, we'll use the child props from store update only if the wrapper props are the same as last time.
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        } // TODO We're reading the store directly in render() here. Bad idea?
        // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
        // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
        // to determine what the child props should be.


        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]); // Our re-subscribe logic only runs when the store/subscription setup changes

      useIsomorphicLayoutEffectWithArgs(subscribeUpdates, [shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch], [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      var renderedWrappedComponent = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(WrappedComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, actualChildProps, {
          ref: reactReduxForwardedRef
        }));
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      var renderedChild = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.


    var Connect = pure ? react__WEBPACK_IMPORTED_MODULE_3__.memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = ConnectFunction.displayName = displayName;

    if (forwardRef) {
      var forwarded = react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function forwardConnectRef(props, ref) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Connect, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
          reactReduxForwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/connect/connect.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/react-redux/es/connect/connect.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createConnect: () => (/* binding */ createConnect),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/connectAdvanced */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/shallowEqual */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapDispatchToProps */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapStateToProps */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var _mergeProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mergeProps */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/connect/mergeProps.js");
/* harmony import */ var _selectorFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectorFactory */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/connect/selectorFactory.js");


var _excluded = ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"];






/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__["default"] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__["default"] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__["default"] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? _mergeProps__WEBPACK_IMPORTED_MODULE_6__["default"] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? _selectorFactory__WEBPACK_IMPORTED_MODULE_7__["default"] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areMergedPropsE,
        extraOptions = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, _excluded);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/createConnect());

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/connect/mapDispatchToProps.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/react-redux/es/connect/mapDispatchToProps.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   whenMapDispatchToPropsIsFunction: () => (/* binding */ whenMapDispatchToPropsIsFunction),
/* harmony export */   whenMapDispatchToPropsIsMissing: () => (/* binding */ whenMapDispatchToPropsIsMissing),
/* harmony export */   whenMapDispatchToPropsIsObject: () => (/* binding */ whenMapDispatchToPropsIsObject)
/* harmony export */ });
/* harmony import */ var _utils_bindActionCreators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/bindActionCreators */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/bindActionCreators.js");
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/connect/wrapMapToProps.js");


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__.wrapMapToPropsConstant)(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__.wrapMapToPropsConstant)(function (dispatch) {
    return (0,_utils_bindActionCreators__WEBPACK_IMPORTED_MODULE_0__["default"])(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/connect/mapStateToProps.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/react-redux/es/connect/mapStateToProps.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   whenMapStateToPropsIsFunction: () => (/* binding */ whenMapStateToPropsIsFunction),
/* harmony export */   whenMapStateToPropsIsMissing: () => (/* binding */ whenMapStateToPropsIsMissing)
/* harmony export */ });
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/connect/wrapMapToProps.js");

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsConstant)(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/connect/mergeProps.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/react-redux/es/connect/mergeProps.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   defaultMergeProps: () => (/* binding */ defaultMergeProps),
/* harmony export */   whenMergePropsIsFunction: () => (/* binding */ whenMergePropsIsFunction),
/* harmony export */   whenMergePropsIsOmitted: () => (/* binding */ whenMergePropsIsOmitted),
/* harmony export */   wrapMergePropsFunc: () => (/* binding */ wrapMergePropsFunc)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/verifyPlainObject.js");


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true) (0,_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/connect/selectorFactory.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/react-redux/es/connect/selectorFactory.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ finalPropsSelectorFactory),
/* harmony export */   impureFinalPropsSelectorFactory: () => (/* binding */ impureFinalPropsSelectorFactory),
/* harmony export */   pureFinalPropsSelectorFactory: () => (/* binding */ pureFinalPropsSelectorFactory)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _verifySubselectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifySubselectors */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/connect/verifySubselectors.js");

var _excluded = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];

function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state, nextOwnProps, ownProps);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, _excluded);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (true) {
    (0,_verifySubselectors__WEBPACK_IMPORTED_MODULE_1__["default"])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/connect/verifySubselectors.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/react-redux/es/connect/verifySubselectors.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ verifySubselectors)
/* harmony export */ });
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/warning */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/warning.js");


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
      (0,_utils_warning__WEBPACK_IMPORTED_MODULE_0__["default"])("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/connect/wrapMapToProps.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/react-redux/es/connect/wrapMapToProps.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDependsOnOwnProps: () => (/* binding */ getDependsOnOwnProps),
/* harmony export */   wrapMapToPropsConstant: () => (/* binding */ wrapMapToPropsConstant),
/* harmony export */   wrapMapToPropsFunc: () => (/* binding */ wrapMapToPropsFunc)
/* harmony export */ });
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/verifyPlainObject.js");

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (true) (0,_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/exports.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/react-redux/es/exports.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Provider: () => (/* reexport safe */ _components_Provider__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   ReactReduxContext: () => (/* reexport safe */ _components_Context__WEBPACK_IMPORTED_MODULE_2__.ReactReduxContext),
/* harmony export */   connect: () => (/* reexport safe */ _connect_connect__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   connectAdvanced: () => (/* reexport safe */ _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   createDispatchHook: () => (/* reexport safe */ _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__.createDispatchHook),
/* harmony export */   createSelectorHook: () => (/* reexport safe */ _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__.createSelectorHook),
/* harmony export */   createStoreHook: () => (/* reexport safe */ _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__.createStoreHook),
/* harmony export */   shallowEqual: () => (/* reexport safe */ _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   useDispatch: () => (/* reexport safe */ _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__.useDispatch),
/* harmony export */   useSelector: () => (/* reexport safe */ _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__.useSelector),
/* harmony export */   useStore: () => (/* reexport safe */ _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__.useStore)
/* harmony export */ });
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Provider */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/components/Provider.js");
/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connectAdvanced */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Context */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _connect_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connect/connect */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/connect/connect.js");
/* harmony import */ var _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useDispatch */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/hooks/useDispatch.js");
/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useSelector */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/hooks/useSelector.js");
/* harmony import */ var _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useStore */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/hooks/useStore.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/shallowEqual */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/shallowEqual.js");










/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/hooks/useDispatch.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/react-redux/es/hooks/useDispatch.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDispatchHook: () => (/* binding */ createDispatchHook),
/* harmony export */   useDispatch: () => (/* binding */ useDispatch)
/* harmony export */ });
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useStore */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/hooks/useStore.js");


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext;
  }

  var useStore = context === _components_Context__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext ? _useStore__WEBPACK_IMPORTED_MODULE_1__.useStore : (0,_useStore__WEBPACK_IMPORTED_MODULE_1__.createStoreHook)(context);
  return function useDispatch() {
    var store = useStore();
    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

var useDispatch = /*#__PURE__*/createDispatchHook();

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/hooks/useReduxContext.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/react-redux/es/hooks/useReduxContext.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useReduxContext: () => (/* binding */ useReduxContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/components/Context.js");


/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

function useReduxContext() {
  var contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext);

  if ( true && !contextValue) {
    throw new Error('could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
  }

  return contextValue;
}

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/hooks/useSelector.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/react-redux/es/hooks/useSelector.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSelectorHook: () => (/* binding */ createSelectorHook),
/* harmony export */   useSelector: () => (/* binding */ useSelector)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/hooks/useReduxContext.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/components/Context.js");






var refEquality = function refEquality(a, b) {
  return a === b;
};

function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(function (s) {
    return s + 1;
  }, 0),
      forceRender = _useReducer[1];

  var subscription = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (0,_utils_Subscription__WEBPACK_IMPORTED_MODULE_2__.createSubscription)(store, contextSub);
  }, [store, contextSub]);
  var latestSubscriptionCallbackError = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var latestSelector = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var latestStoreState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var latestSelectedState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var storeState = store.getState();
  var selectedState;

  try {
    if (selector !== latestSelector.current || storeState !== latestStoreState.current || latestSubscriptionCallbackError.current) {
      var newSelectedState = selector(storeState); // ensure latest selected state is reused so that a custom equality function can result in identical references

      if (latestSelectedState.current === undefined || !equalityFn(newSelectedState, latestSelectedState.current)) {
        selectedState = newSelectedState;
      } else {
        selectedState = latestSelectedState.current;
      }
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current) {
      err.message += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\n";
    }

    throw err;
  }

  (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(function () {
    latestSelector.current = selector;
    latestStoreState.current = storeState;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = undefined;
  });
  (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(function () {
    function checkForUpdates() {
      try {
        var newStoreState = store.getState(); // Avoid calling selector multiple times if the store's state has not changed

        if (newStoreState === latestStoreState.current) {
          return;
        }

        var _newSelectedState = latestSelector.current(newStoreState);

        if (equalityFn(_newSelectedState, latestSelectedState.current)) {
          return;
        }

        latestSelectedState.current = _newSelectedState;
        latestStoreState.current = newStoreState;
      } catch (err) {
        // we ignore all errors here, since when the component
        // is re-rendered, the selectors are called again, and
        // will throw again, if neither props nor store state
        // changed
        latestSubscriptionCallbackError.current = err;
      }

      forceRender();
    }

    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function () {
      return subscription.tryUnsubscribe();
    };
  }, [store, subscription]);
  return selectedState;
}
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_4__.ReactReduxContext;
  }

  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_4__.ReactReduxContext ? _useReduxContext__WEBPACK_IMPORTED_MODULE_1__.useReduxContext : function () {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context);
  };
  return function useSelector(selector, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }

    if (true) {
      if (!selector) {
        throw new Error("You must pass a selector to useSelector");
      }

      if (typeof selector !== 'function') {
        throw new Error("You must pass a function as a selector to useSelector");
      }

      if (typeof equalityFn !== 'function') {
        throw new Error("You must pass a function as an equality function to useSelector");
      }
    }

    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store,
        contextSub = _useReduxContext.subscription;

    var selectedState = useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(selectedState);
    return selectedState;
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

var useSelector = /*#__PURE__*/createSelectorHook();

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/hooks/useStore.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/react-redux/es/hooks/useStore.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createStoreHook: () => (/* binding */ createStoreHook),
/* harmony export */   useStore: () => (/* binding */ useStore)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/hooks/useReduxContext.js");



/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext;
  }

  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext ? _useReduxContext__WEBPACK_IMPORTED_MODULE_2__.useReduxContext : function () {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context);
  };
  return function useStore() {
    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store;

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

var useStore = /*#__PURE__*/createStoreHook();

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/react-redux/es/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Provider: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.Provider),
/* harmony export */   ReactReduxContext: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext),
/* harmony export */   batch: () => (/* reexport safe */ _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates),
/* harmony export */   connect: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.connect),
/* harmony export */   connectAdvanced: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.connectAdvanced),
/* harmony export */   createDispatchHook: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.createDispatchHook),
/* harmony export */   createSelectorHook: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.createSelectorHook),
/* harmony export */   createStoreHook: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.createStoreHook),
/* harmony export */   shallowEqual: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.shallowEqual),
/* harmony export */   useDispatch: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.useDispatch),
/* harmony export */   useSelector: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.useSelector),
/* harmony export */   useStore: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.useStore)
/* harmony export */ });
/* harmony import */ var _exports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exports */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/exports.js");
/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/reactBatchedUpdates */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/reactBatchedUpdates.js");
/* harmony import */ var _utils_batch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/batch */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/batch.js");


 // Enable batched updates in our subscriptions for use
// with standard React renderers (ReactDOM, React Native)

(0,_utils_batch__WEBPACK_IMPORTED_MODULE_2__.setBatch)(_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates);


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/Subscription.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/Subscription.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSubscription: () => (/* binding */ createSubscription)
/* harmony export */ });
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batch */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/batch.js");
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

function createListenerCollection() {
  var batch = (0,_batch__WEBPACK_IMPORTED_MODULE_0__.getBatch)();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify() {
      batch(function () {
        var listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get() {
      var listeners = [];
      var listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback: callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}

var nullListeners = {
  notify: function notify() {},
  get: function get() {
    return [];
  }
};
function createSubscription(store, parentSub) {
  var unsubscribe;
  var listeners = nullListeners;

  function addNestedSub(listener) {
    trySubscribe();
    return listeners.subscribe(listener);
  }

  function notifyNestedSubs() {
    listeners.notify();
  }

  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }

  function isSubscribed() {
    return Boolean(unsubscribe);
  }

  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }

  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = undefined;
      listeners.clear();
      listeners = nullListeners;
    }
  }

  var subscription = {
    addNestedSub: addNestedSub,
    notifyNestedSubs: notifyNestedSubs,
    handleChangeWrapper: handleChangeWrapper,
    isSubscribed: isSubscribed,
    trySubscribe: trySubscribe,
    tryUnsubscribe: tryUnsubscribe,
    getListeners: function getListeners() {
      return listeners;
    }
  };
  return subscription;
}

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/batch.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/batch.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBatch: () => (/* binding */ getBatch),
/* harmony export */   setBatch: () => (/* binding */ setBatch)
/* harmony export */ });
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

var batch = defaultNoopBatch; // Allow injecting another batching function later

var setBatch = function setBatch(newBatch) {
  return batch = newBatch;
}; // Supply a getter just to skip dealing with ESM bindings

var getBatch = function getBatch() {
  return batch;
};

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/bindActionCreators.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/bindActionCreators.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bindActionCreators)
/* harmony export */ });
function bindActionCreators(actionCreators, dispatch) {
  var boundActionCreators = {};

  var _loop = function _loop(key) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = function () {
        return dispatch(actionCreator.apply(void 0, arguments));
      };
    }
  };

  for (var key in actionCreators) {
    _loop(key);
  }

  return boundActionCreators;
}

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/isPlainObject.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/isPlainObject.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPlainObject)
/* harmony export */ });
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/reactBatchedUpdates.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/reactBatchedUpdates.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   unstable_batchedUpdates: () => (/* reexport safe */ react_dom__WEBPACK_IMPORTED_MODULE_0__.unstable_batchedUpdates)
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* eslint-disable import/no-unresolved */


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/shallowEqual.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/shallowEqual.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shallowEqual)
/* harmony export */ });
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIsomorphicLayoutEffect: () => (/* binding */ useIsomorphicLayoutEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/verifyPlainObject.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/verifyPlainObject.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ verifyPlainObject)
/* harmony export */ });
/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPlainObject */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/isPlainObject.js");
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warning */ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/warning.js");


function verifyPlainObject(value, displayName, methodName) {
  if (!(0,_isPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    (0,_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}

/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/warning.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/react-redux/es/utils/warning.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ warning)
/* harmony export */ });
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

/***/ }),

/***/ "./node_modules/react-tooltip/dist/index.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-tooltip/dist/index.es.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReactTooltip)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");




function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function () {};
      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$a =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$9 = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$8 = fails$9;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$8(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var fails$7 = fails$9;

var functionBindNative = !fails$7(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$2 = functionBindNative;

var call$4 = Function.prototype.call;

var functionCall = NATIVE_BIND$2 ? call$4.bind(call$4) : function () {
  return call$4.apply(call$4, arguments);
};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var createPropertyDescriptor$2 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var NATIVE_BIND$1 = functionBindNative;

var FunctionPrototype$1 = Function.prototype;
var call$3 = FunctionPrototype$1.call;
var uncurryThisWithBind = NATIVE_BIND$1 && FunctionPrototype$1.bind.bind(call$3, call$3);

var functionUncurryThisRaw = function (fn) {
  return NATIVE_BIND$1 ? uncurryThisWithBind(fn) : function () {
    return call$3.apply(fn, arguments);
  };
};

var uncurryThisRaw$1 = functionUncurryThisRaw;

var toString$1 = uncurryThisRaw$1({}.toString);
var stringSlice = uncurryThisRaw$1(''.slice);

var classofRaw$2 = function (it) {
  return stringSlice(toString$1(it), 8, -1);
};

var classofRaw$1 = classofRaw$2;
var uncurryThisRaw = functionUncurryThisRaw;

var functionUncurryThis = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw$1(fn) === 'Function') return uncurryThisRaw(fn);
};

var uncurryThis$9 = functionUncurryThis;
var fails$6 = fails$9;
var classof$3 = classofRaw$2;

var $Object$3 = Object;
var split = uncurryThis$9(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$6(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$3('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$3(it) == 'String' ? split(it, '') : $Object$3(it);
} : $Object$3;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$2 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$1 = isNullOrUndefined$2;

var $TypeError$5 = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$2 = function (it) {
  if (isNullOrUndefined$1(it)) throw $TypeError$5("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$1 = indexedObject;
var requireObjectCoercible$1 = requireObjectCoercible$2;

var toIndexedObject$4 = function (it) {
  return IndexedObject$1(requireObjectCoercible$1(it));
};

var documentAll$2 = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;

var documentAll_1 = {
  all: documentAll$2,
  IS_HTMLDDA: IS_HTMLDDA
};

var $documentAll$1 = documentAll_1;

var documentAll$1 = $documentAll$1.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
var isCallable$c = $documentAll$1.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll$1;
} : function (argument) {
  return typeof argument == 'function';
};

var isCallable$b = isCallable$c;
var $documentAll = documentAll_1;

var documentAll = $documentAll.all;

var isObject$6 = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable$b(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable$b(it);
};

var global$9 = global$a;
var isCallable$a = isCallable$c;

var aFunction = function (argument) {
  return isCallable$a(argument) ? argument : undefined;
};

var getBuiltIn$5 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$9[namespace]) : global$9[namespace] && global$9[namespace][method];
};

var uncurryThis$8 = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$8({}.isPrototypeOf);

var getBuiltIn$4 = getBuiltIn$5;

var engineUserAgent = getBuiltIn$4('navigator', 'userAgent') || '';

var global$8 = global$a;
var userAgent = engineUserAgent;

var process = global$8.process;
var Deno = global$8.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

var engineV8Version = version;

/* eslint-disable es/no-symbol -- required for testing */

var V8_VERSION = engineV8Version;
var fails$5 = fails$9;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$5(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/* eslint-disable es/no-symbol -- required for testing */

var NATIVE_SYMBOL$1 = symbolConstructorDetection;

var useSymbolAsUid = NATIVE_SYMBOL$1
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var getBuiltIn$3 = getBuiltIn$5;
var isCallable$9 = isCallable$c;
var isPrototypeOf = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var $Object$2 = Object;

var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$3('Symbol');
  return isCallable$9($Symbol) && isPrototypeOf($Symbol.prototype, $Object$2(it));
};

var $String$1 = String;

var tryToString$1 = function (argument) {
  try {
    return $String$1(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$8 = isCallable$c;
var tryToString = tryToString$1;

var $TypeError$4 = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$2 = function (argument) {
  if (isCallable$8(argument)) return argument;
  throw $TypeError$4(tryToString(argument) + ' is not a function');
};

var aCallable$1 = aCallable$2;
var isNullOrUndefined = isNullOrUndefined$2;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$1 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable$1(func);
};

var call$2 = functionCall;
var isCallable$7 = isCallable$c;
var isObject$5 = isObject$6;

var $TypeError$3 = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$7(fn = input.toString) && !isObject$5(val = call$2(fn, input))) return val;
  if (isCallable$7(fn = input.valueOf) && !isObject$5(val = call$2(fn, input))) return val;
  if (pref !== 'string' && isCallable$7(fn = input.toString) && !isObject$5(val = call$2(fn, input))) return val;
  throw $TypeError$3("Can't convert object to primitive value");
};

var shared$3 = {exports: {}};

var global$7 = global$a;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$2 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$2(global$7, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$7[key] = value;
  } return value;
};

var global$6 = global$a;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = global$6[SHARED] || defineGlobalProperty$2(SHARED, {});

var sharedStore = store$3;

var store$2 = sharedStore;

(shared$3.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.25.5',
  mode: 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.25.5/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var requireObjectCoercible = requireObjectCoercible$2;

var $Object$1 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$2 = function (argument) {
  return $Object$1(requireObjectCoercible(argument));
};

var uncurryThis$7 = functionUncurryThis;
var toObject$1 = toObject$2;

var hasOwnProperty = uncurryThis$7({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$1(it), key);
};

var uncurryThis$6 = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString = uncurryThis$6(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};

var global$5 = global$a;
var shared$2 = shared$3.exports;
var hasOwn$6 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var WellKnownSymbolsStore = shared$2('wks');
var Symbol$1 = global$5.Symbol;
var symbolFor = Symbol$1 && Symbol$1['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$5 = function (name) {
  if (!hasOwn$6(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn$6(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};

var call$1 = functionCall;
var isObject$4 = isObject$6;
var isSymbol$1 = isSymbol$2;
var getMethod = getMethod$1;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$4 = wellKnownSymbol$5;

var $TypeError$2 = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$4('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$4(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$1(exoticToPrim, input, pref);
    if (!isObject$4(result) || isSymbol$1(result)) return result;
    throw $TypeError$2("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$2 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var global$4 = global$a;
var isObject$3 = isObject$6;

var document$1 = global$4.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$3(document$1) && isObject$3(document$1.createElement);

var documentCreateElement$1 = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$7 = descriptors;
var fails$4 = fails$9;
var createElement = documentCreateElement$1;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$7 && !fails$4(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var DESCRIPTORS$6 = descriptors;
var call = functionCall;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var createPropertyDescriptor$1 = createPropertyDescriptor$2;
var toIndexedObject$3 = toIndexedObject$4;
var toPropertyKey$1 = toPropertyKey$2;
var hasOwn$5 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$6 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$3(O);
  P = toPropertyKey$1(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$5(O, P)) return createPropertyDescriptor$1(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

var objectDefineProperty = {};

var DESCRIPTORS$5 = descriptors;
var fails$3 = fails$9;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$5 && fails$3(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var isObject$2 = isObject$6;

var $String = String;
var $TypeError$1 = TypeError;

// `Assert: Type(argument) is Object`
var anObject$4 = function (argument) {
  if (isObject$2(argument)) return argument;
  throw $TypeError$1($String(argument) + ' is not an object');
};

var DESCRIPTORS$4 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$3 = anObject$4;
var toPropertyKey = toPropertyKey$2;

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$4 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$3(O);
  P = toPropertyKey(P);
  anObject$3(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$3(O);
  P = toPropertyKey(P);
  anObject$3(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$3 = descriptors;
var definePropertyModule$3 = objectDefineProperty;
var createPropertyDescriptor = createPropertyDescriptor$2;

var createNonEnumerableProperty$2 = DESCRIPTORS$3 ? function (object, key, value) {
  return definePropertyModule$3.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var makeBuiltIn$2 = {exports: {}};

var DESCRIPTORS$2 = descriptors;
var hasOwn$4 = hasOwnProperty_1;

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$2 && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$4(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$2 || (DESCRIPTORS$2 && getDescriptor(FunctionPrototype, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$5 = functionUncurryThis;
var isCallable$6 = isCallable$c;
var store$1 = sharedStore;

var functionToString = uncurryThis$5(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$6(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$2 = store$1.inspectSource;

var global$3 = global$a;
var isCallable$5 = isCallable$c;

var WeakMap$1 = global$3.WeakMap;

var weakMapBasicDetection = isCallable$5(WeakMap$1) && /native code/.test(String(WeakMap$1));

var shared$1 = shared$3.exports;
var uid = uid$2;

var keys = shared$1('keys');

var sharedKey$2 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$4 = {};

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$2 = global$a;
var isObject$1 = isObject$6;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$2;
var hasOwn$3 = hasOwnProperty_1;
var shared = sharedStore;
var sharedKey$1 = sharedKey$2;
var hiddenKeys$3 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$1 = global$2.TypeError;
var WeakMap = global$2.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$1(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$1('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey$1('state');
  hiddenKeys$3[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn$3(it, STATE)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$1(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn$3(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$3(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var fails$2 = fails$9;
var isCallable$4 = isCallable$c;
var hasOwn$2 = hasOwnProperty_1;
var DESCRIPTORS$1 = descriptors;
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
var inspectSource$1 = inspectSource$2;
var InternalStateModule = internalState;

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$1 = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS$1 && !fails$2(function () {
  return defineProperty$1(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$1 = makeBuiltIn$2.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$2(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS$1) defineProperty$1(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$2(options, 'arity') && value.length !== options.arity) {
    defineProperty$1(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$2(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$1) defineProperty$1(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn$2(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$1(function toString() {
  return isCallable$4(this) && getInternalState(this).source || inspectSource$1(this);
}, 'toString');

var isCallable$3 = isCallable$c;
var definePropertyModule$2 = objectDefineProperty;
var makeBuiltIn = makeBuiltIn$2.exports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$1 = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$3(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule$2.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};

var trunc = mathTrunc;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$2 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$1 = toIntegerOrInfinity$2;

var max = Math.max;
var min$1 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$1 = function (index, length) {
  var integer = toIntegerOrInfinity$1(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};

var toIntegerOrInfinity = toIntegerOrInfinity$2;

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$1 = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength = toLength$1;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$2 = function (obj) {
  return toLength(obj.length);
};

var toIndexedObject$2 = toIndexedObject$4;
var toAbsoluteIndex = toAbsoluteIndex$1;
var lengthOfArrayLike$1 = lengthOfArrayLike$2;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$1 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$2($this);
    var length = lengthOfArrayLike$1(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$1(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$1(false)
};

var uncurryThis$4 = functionUncurryThis;
var hasOwn$1 = hasOwnProperty_1;
var toIndexedObject$1 = toIndexedObject$4;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;

var push$1 = uncurryThis$4([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$1(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$1(hiddenKeys$2, key) && hasOwn$1(O, key) && push$1(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$1(O, key = names[i++])) {
    ~indexOf(result, key) || push$1(result, key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$3 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;

var hiddenKeys$1 = enumBugKeys$2.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$1);
};

var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$2 = getBuiltIn$5;
var uncurryThis$3 = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject$2 = anObject$4;

var concat = uncurryThis$3([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$2('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$2(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$1 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$1.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$1 = fails$9;
var isCallable$2 = isCallable$c;

var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$2(detection) ? fails$1(detection)
    : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';

var isForced_1 = isForced$1;

var global$1 = global$a;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty = createNonEnumerableProperty$2;
var defineBuiltIn = defineBuiltIn$1;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced = isForced_1;

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$1;
  } else if (STATIC) {
    target = global$1[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global$1[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};

var uncurryThis$2 = functionUncurryThis;
var aCallable = aCallable$2;
var NATIVE_BIND = functionBindNative;

var bind$1 = uncurryThis$2(uncurryThis$2.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind$1(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var classof$2 = classofRaw$2;

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray$1 = Array.isArray || function isArray(argument) {
  return classof$2(argument) == 'Array';
};

var wellKnownSymbol$3 = wellKnownSymbol$5;

var TO_STRING_TAG$1 = wellKnownSymbol$3('toStringTag');
var test = {};

test[TO_STRING_TAG$1] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$1 = isCallable$c;
var classofRaw = classofRaw$2;
var wellKnownSymbol$2 = wellKnownSymbol$5;

var TO_STRING_TAG = wellKnownSymbol$2('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$1 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable$1(O.callee) ? 'Arguments' : result;
};

var uncurryThis$1 = functionUncurryThis;
var fails = fails$9;
var isCallable = isCallable$c;
var classof = classof$1;
var getBuiltIn$1 = getBuiltIn$5;
var inspectSource = inspectSource$2;

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn$1('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis$1(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
var isConstructor$1 = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

var isArray = isArray$1;
var isConstructor = isConstructor$1;
var isObject = isObject$6;
var wellKnownSymbol$1 = wellKnownSymbol$5;

var SPECIES = wellKnownSymbol$1('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesConstructor$1 = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};

var arraySpeciesConstructor = arraySpeciesConstructor$1;

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate$1 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var bind = functionBindContext;
var uncurryThis = functionUncurryThis;
var IndexedObject = indexedObject;
var toObject = toObject$2;
var lengthOfArrayLike = lengthOfArrayLike$2;
var arraySpeciesCreate = arraySpeciesCreate$1;

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};

var objectDefineProperties = {};

var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys$1 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};

var DESCRIPTORS = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule = objectDefineProperty;
var anObject$1 = anObject$4;
var toIndexedObject = toIndexedObject$4;
var objectKeys = objectKeys$1;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$1(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn = getBuiltIn$5;

var html$1 = getBuiltIn('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */

var anObject = anObject$4;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys = hiddenKeys$4;
var html = html$1;
var documentCreateElement = documentCreateElement$1;
var sharedKey = sharedKey$2;

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var wellKnownSymbol = wellKnownSymbol$5;
var create = objectCreate;
var defineProperty = objectDefineProperty.f;

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$1 = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

var $ = _export;
var $find = arrayIteration.find;
var addToUnscopables = addToUnscopables$1;

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);

var CONSTANT = {
  GLOBAL: {
    HIDE: '__react_tooltip_hide_event',
    REBUILD: '__react_tooltip_rebuild_event',
    SHOW: '__react_tooltip_show_event'
  }
};

/**
 * Static methods for react-tooltip
 */
var dispatchGlobalEvent = function dispatchGlobalEvent(eventName, opts) {
  // Compatible with IE
  // @see http://stackoverflow.com/questions/26596123/internet-explorer-9-10-11-event-constructor-doesnt-work
  // @see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
  var event;
  if (typeof window.CustomEvent === 'function') {
    event = new window.CustomEvent(eventName, {
      detail: opts
    });
  } else {
    event = document.createEvent('Event');
    event.initEvent(eventName, false, true, opts);
  }
  window.dispatchEvent(event);
};
function staticMethods (target) {
  /**
   * Hide all tooltip
   * @trigger ReactTooltip.hide()
   */
  target.hide = function (target) {
    dispatchGlobalEvent(CONSTANT.GLOBAL.HIDE, {
      target: target
    });
  };

  /**
   * Rebuild all tooltip
   * @trigger ReactTooltip.rebuild()
   */
  target.rebuild = function () {
    dispatchGlobalEvent(CONSTANT.GLOBAL.REBUILD);
  };

  /**
   * Show specific tooltip
   * @trigger ReactTooltip.show()
   */
  target.show = function (target) {
    dispatchGlobalEvent(CONSTANT.GLOBAL.SHOW, {
      target: target
    });
  };
  target.prototype.globalRebuild = function () {
    if (this.mount) {
      this.unbindListener();
      this.bindListener();
    }
  };
  target.prototype.globalShow = function (event) {
    if (this.mount) {
      var hasTarget = event && event.detail && event.detail.target && true || false;
      // Create a fake event, specific show will limit the type to `solid`
      // only `float` type cares e.clientX e.clientY
      this.showTooltip({
        currentTarget: hasTarget && event.detail.target
      }, true);
    }
  };
  target.prototype.globalHide = function (event) {
    if (this.mount) {
      var hasTarget = event && event.detail && event.detail.target && true || false;
      this.hideTooltip({
        currentTarget: hasTarget && event.detail.target
      }, hasTarget);
    }
  };
}

/**
 * Events that should be bound to the window
 */
function windowListener (target) {
  target.prototype.bindWindowEvents = function (resizeHide) {
    // ReactTooltip.hide
    window.removeEventListener(CONSTANT.GLOBAL.HIDE, this.globalHide);
    window.addEventListener(CONSTANT.GLOBAL.HIDE, this.globalHide, false);

    // ReactTooltip.rebuild
    window.removeEventListener(CONSTANT.GLOBAL.REBUILD, this.globalRebuild);
    window.addEventListener(CONSTANT.GLOBAL.REBUILD, this.globalRebuild, false);

    // ReactTooltip.show
    window.removeEventListener(CONSTANT.GLOBAL.SHOW, this.globalShow);
    window.addEventListener(CONSTANT.GLOBAL.SHOW, this.globalShow, false);

    // Resize
    if (resizeHide) {
      window.removeEventListener('resize', this.onWindowResize);
      window.addEventListener('resize', this.onWindowResize, false);
    }
  };
  target.prototype.unbindWindowEvents = function () {
    window.removeEventListener(CONSTANT.GLOBAL.HIDE, this.globalHide);
    window.removeEventListener(CONSTANT.GLOBAL.REBUILD, this.globalRebuild);
    window.removeEventListener(CONSTANT.GLOBAL.SHOW, this.globalShow);
    window.removeEventListener('resize', this.onWindowResize);
  };

  /**
   * invoked by resize event of window
   */
  target.prototype.onWindowResize = function () {
    if (!this.mount) return;
    this.hideTooltip();
  };
}

/**
 * Custom events to control showing and hiding of tooltip
 *
 * @attributes
 * - `event` {String}
 * - `eventOff` {String}
 */

var checkStatus = function checkStatus(dataEventOff, e) {
  var show = this.state.show;
  var id = this.props.id;
  var isCapture = this.isCapture(e.currentTarget);
  var currentItem = e.currentTarget.getAttribute('currentItem');
  if (!isCapture) e.stopPropagation();
  if (show && currentItem === 'true') {
    if (!dataEventOff) this.hideTooltip(e);
  } else {
    e.currentTarget.setAttribute('currentItem', 'true');
    setUntargetItems(e.currentTarget, this.getTargetArray(id));
    this.showTooltip(e);
  }
};
var setUntargetItems = function setUntargetItems(currentTarget, targetArray) {
  for (var i = 0; i < targetArray.length; i++) {
    if (currentTarget !== targetArray[i]) {
      targetArray[i].setAttribute('currentItem', 'false');
    } else {
      targetArray[i].setAttribute('currentItem', 'true');
    }
  }
};
var customListeners = {
  id: '9b69f92e-d3fe-498b-b1b4-c5e63a51b0cf',
  set: function set(target, event, listener) {
    if (this.id in target) {
      var map = target[this.id];
      map[event] = listener;
    } else {
      // this is workaround for WeakMap, which is not supported in older browsers, such as IE
      Object.defineProperty(target, this.id, {
        configurable: true,
        value: _defineProperty({}, event, listener)
      });
    }
  },
  get: function get(target, event) {
    var map = target[this.id];
    if (map !== undefined) {
      return map[event];
    }
  }
};
function customEvent (target) {
  target.prototype.isCustomEvent = function (ele) {
    var event = this.state.event;
    return event || !!ele.getAttribute('data-event');
  };

  /* Bind listener for custom event */
  target.prototype.customBindListener = function (ele) {
    var _this = this;
    var _this$state = this.state,
      event = _this$state.event,
      eventOff = _this$state.eventOff;
    var dataEvent = ele.getAttribute('data-event') || event;
    var dataEventOff = ele.getAttribute('data-event-off') || eventOff;
    dataEvent.split(' ').forEach(function (event) {
      ele.removeEventListener(event, customListeners.get(ele, event));
      var customListener = checkStatus.bind(_this, dataEventOff);
      customListeners.set(ele, event, customListener);
      ele.addEventListener(event, customListener, false);
    });
    if (dataEventOff) {
      dataEventOff.split(' ').forEach(function (event) {
        ele.removeEventListener(event, _this.hideTooltip);
        ele.addEventListener(event, _this.hideTooltip, false);
      });
    }
  };

  /* Unbind listener for custom event */
  target.prototype.customUnbindListener = function (ele) {
    var _this$state2 = this.state,
      event = _this$state2.event,
      eventOff = _this$state2.eventOff;
    var dataEvent = event || ele.getAttribute('data-event');
    var dataEventOff = eventOff || ele.getAttribute('data-event-off');
    ele.removeEventListener(dataEvent, customListeners.get(ele, event));
    if (dataEventOff) ele.removeEventListener(dataEventOff, this.hideTooltip);
  };
}

/**
 * Util method to judge if it should follow capture model
 */

function isCapture (target) {
  target.prototype.isCapture = function (currentTarget) {
    return currentTarget && currentTarget.getAttribute('data-iscapture') === 'true' || this.props.isCapture || false;
  };
}

/**
 * Util method to get effect
 */

function getEffect (target) {
  target.prototype.getEffect = function (currentTarget) {
    var dataEffect = currentTarget.getAttribute('data-effect');
    return dataEffect || this.props.effect || 'float';
  };
}

/**
 * Util method to get effect
 */
var makeProxy = function makeProxy(e) {
  var proxy = {};
  for (var key in e) {
    if (typeof e[key] === 'function') {
      proxy[key] = e[key].bind(e);
    } else {
      proxy[key] = e[key];
    }
  }
  return proxy;
};
var bodyListener = function bodyListener(callback, options, e) {
  var _options$respectEffec = options.respectEffect,
    respectEffect = _options$respectEffec === void 0 ? false : _options$respectEffec,
    _options$customEvent = options.customEvent,
    customEvent = _options$customEvent === void 0 ? false : _options$customEvent;
  var id = this.props.id;
  var tip = null;
  var forId;
  var target = e.target;
  var lastTarget;
  // walk up parent chain until tip is found
  // there is no match if parent visible area is matched by mouse position, so some corner cases might not work as expected
  while (tip === null && target !== null) {
    lastTarget = target;
    tip = target.getAttribute('data-tip') || null;
    forId = target.getAttribute('data-for') || null;
    target = target.parentElement;
  }
  target = lastTarget || e.target;
  if (this.isCustomEvent(target) && !customEvent) {
    return;
  }
  var isTargetBelongsToTooltip = id == null && forId == null || forId === id;
  if (tip != null && (!respectEffect || this.getEffect(target) === 'float') && isTargetBelongsToTooltip) {
    var proxy = makeProxy(e);
    proxy.currentTarget = target;
    callback(proxy);
  }
};
var findCustomEvents = function findCustomEvents(targetArray, dataAttribute) {
  var events = {};
  targetArray.forEach(function (target) {
    var event = target.getAttribute(dataAttribute);
    if (event) event.split(' ').forEach(function (event) {
      return events[event] = true;
    });
  });
  return events;
};
var getBody = function getBody() {
  return document.getElementsByTagName('body')[0];
};
function bodyMode (target) {
  target.prototype.isBodyMode = function () {
    return !!this.props.bodyMode;
  };
  target.prototype.bindBodyListener = function (targetArray) {
    var _this = this;
    var _this$state = this.state,
      event = _this$state.event,
      eventOff = _this$state.eventOff,
      possibleCustomEvents = _this$state.possibleCustomEvents,
      possibleCustomEventsOff = _this$state.possibleCustomEventsOff;
    var body = getBody();
    var customEvents = findCustomEvents(targetArray, 'data-event');
    var customEventsOff = findCustomEvents(targetArray, 'data-event-off');
    if (event != null) customEvents[event] = true;
    if (eventOff != null) customEventsOff[eventOff] = true;
    possibleCustomEvents.split(' ').forEach(function (event) {
      return customEvents[event] = true;
    });
    possibleCustomEventsOff.split(' ').forEach(function (event) {
      return customEventsOff[event] = true;
    });
    this.unbindBodyListener(body);
    var listeners = this.bodyModeListeners = {};
    if (event == null) {
      listeners.mouseover = bodyListener.bind(this, this.showTooltip, {});
      listeners.mousemove = bodyListener.bind(this, this.updateTooltip, {
        respectEffect: true
      });
      listeners.mouseout = bodyListener.bind(this, this.hideTooltip, {});
    }
    for (var _event in customEvents) {
      listeners[_event] = bodyListener.bind(this, function (e) {
        var targetEventOff = e.currentTarget.getAttribute('data-event-off') || eventOff;
        checkStatus.call(_this, targetEventOff, e);
      }, {
        customEvent: true
      });
    }
    for (var _event2 in customEventsOff) {
      listeners[_event2] = bodyListener.bind(this, this.hideTooltip, {
        customEvent: true
      });
    }
    for (var _event3 in listeners) {
      body.addEventListener(_event3, listeners[_event3]);
    }
  };
  target.prototype.unbindBodyListener = function (body) {
    body = body || getBody();
    var listeners = this.bodyModeListeners;
    for (var event in listeners) {
      body.removeEventListener(event, listeners[event]);
    }
  };
}

/**
 * Tracking target removing from DOM.
 * It's necessary to hide tooltip when it's target disappears.
 * Otherwise, the tooltip would be shown forever until another target
 * is triggered.
 *
 * If MutationObserver is not available, this feature just doesn't work.
 */

// https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/
var getMutationObserverClass = function getMutationObserverClass() {
  return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
};
function trackRemoval (target) {
  target.prototype.bindRemovalTracker = function () {
    var _this = this;
    var MutationObserver = getMutationObserverClass();
    if (MutationObserver == null) return;
    var observer = new MutationObserver(function (mutations) {
      for (var m1 = 0; m1 < mutations.length; m1++) {
        var mutation = mutations[m1];
        for (var m2 = 0; m2 < mutation.removedNodes.length; m2++) {
          var element = mutation.removedNodes[m2];
          if (element === _this.state.currentTarget) {
            _this.hideTooltip();
            return;
          }
        }
      }
    });
    observer.observe(window.document, {
      childList: true,
      subtree: true
    });
    this.removalTracker = observer;
  };
  target.prototype.unbindRemovalTracker = function () {
    if (this.removalTracker) {
      this.removalTracker.disconnect();
      this.removalTracker = null;
    }
  };
}

/**
 * Calculate the position of tooltip
 *
 * @params
 * - `e` {Event} the event of current mouse
 * - `target` {Element} the currentTarget of the event
 * - `node` {DOM} the react-tooltip object
 * - `place` {String} top / right / bottom / left
 * - `effect` {String} float / solid
 * - `offset` {Object} the offset to default position
 *
 * @return {Object}
 * - `isNewState` {Bool} required
 * - `newState` {Object}
 * - `position` {Object} {left: {Number}, top: {Number}}
 */
function getPosition (e, target, node, place, desiredPlace, effect, offset) {
  var _getDimensions = getDimensions(node),
    tipWidth = _getDimensions.width,
    tipHeight = _getDimensions.height;
  var _getDimensions2 = getDimensions(target),
    targetWidth = _getDimensions2.width,
    targetHeight = _getDimensions2.height;
  var _getCurrentOffset = getCurrentOffset(e, target, effect),
    mouseX = _getCurrentOffset.mouseX,
    mouseY = _getCurrentOffset.mouseY;
  var defaultOffset = getDefaultPosition(effect, targetWidth, targetHeight, tipWidth, tipHeight);
  var _calculateOffset = calculateOffset(offset),
    extraOffsetX = _calculateOffset.extraOffsetX,
    extraOffsetY = _calculateOffset.extraOffsetY;
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var _getParent = getParent(node),
    parentTop = _getParent.parentTop,
    parentLeft = _getParent.parentLeft;

  // Get the edge offset of the tooltip
  var getTipOffsetLeft = function getTipOffsetLeft(place) {
    var offsetX = defaultOffset[place].l;
    return mouseX + offsetX + extraOffsetX;
  };
  var getTipOffsetRight = function getTipOffsetRight(place) {
    var offsetX = defaultOffset[place].r;
    return mouseX + offsetX + extraOffsetX;
  };
  var getTipOffsetTop = function getTipOffsetTop(place) {
    var offsetY = defaultOffset[place].t;
    return mouseY + offsetY + extraOffsetY;
  };
  var getTipOffsetBottom = function getTipOffsetBottom(place) {
    var offsetY = defaultOffset[place].b;
    return mouseY + offsetY + extraOffsetY;
  };

  //
  // Functions to test whether the tooltip's sides are inside
  // the client window for a given orientation p
  //
  //  _____________
  // |             | <-- Right side
  // | p = 'left'  |\
  // |             |/  |\
  // |_____________|   |_\  <-- Mouse
  //      / \           |
  //       |
  //       |
  //  Bottom side
  //
  var outsideLeft = function outsideLeft(p) {
    return getTipOffsetLeft(p) < 0;
  };
  var outsideRight = function outsideRight(p) {
    return getTipOffsetRight(p) > windowWidth;
  };
  var outsideTop = function outsideTop(p) {
    return getTipOffsetTop(p) < 0;
  };
  var outsideBottom = function outsideBottom(p) {
    return getTipOffsetBottom(p) > windowHeight;
  };

  // Check whether the tooltip with orientation p is completely inside the client window
  var outside = function outside(p) {
    return outsideLeft(p) || outsideRight(p) || outsideTop(p) || outsideBottom(p);
  };
  var inside = function inside(p) {
    return !outside(p);
  };
  var placeIsInside = {
    top: inside('top'),
    bottom: inside('bottom'),
    left: inside('left'),
    right: inside('right')
  };
  function choose() {
    var allPlaces = desiredPlace.split(',').concat(place, ['top', 'bottom', 'left', 'right']);
    var _iterator = _createForOfIteratorHelper(allPlaces),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var d = _step.value;
        if (placeIsInside[d]) return d;
      }
      // if nothing is inside, just use the old place.
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return place;
  }
  var chosen = choose();
  var isNewState = false;
  var newPlace;
  if (chosen && chosen !== place) {
    isNewState = true;
    newPlace = chosen;
  }
  if (isNewState) {
    return {
      isNewState: true,
      newState: {
        place: newPlace
      }
    };
  }
  return {
    isNewState: false,
    position: {
      left: parseInt(getTipOffsetLeft(place) - parentLeft, 10),
      top: parseInt(getTipOffsetTop(place) - parentTop, 10)
    }
  };
}
var getDimensions = function getDimensions(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(),
    height = _node$getBoundingClie.height,
    width = _node$getBoundingClie.width;
  return {
    height: parseInt(height, 10),
    width: parseInt(width, 10)
  };
};

// Get current mouse offset
var getCurrentOffset = function getCurrentOffset(e, currentTarget, effect) {
  var boundingClientRect = currentTarget.getBoundingClientRect();
  var targetTop = boundingClientRect.top;
  var targetLeft = boundingClientRect.left;
  var _getDimensions3 = getDimensions(currentTarget),
    targetWidth = _getDimensions3.width,
    targetHeight = _getDimensions3.height;
  if (effect === 'float') {
    return {
      mouseX: e.clientX,
      mouseY: e.clientY
    };
  }
  return {
    mouseX: targetLeft + targetWidth / 2,
    mouseY: targetTop + targetHeight / 2
  };
};

// List all possibility of tooltip final offset
// This is useful in judging if it is necessary for tooltip to switch position when out of window
var getDefaultPosition = function getDefaultPosition(effect, targetWidth, targetHeight, tipWidth, tipHeight) {
  var top;
  var right;
  var bottom;
  var left;
  var disToMouse = 3;
  var triangleHeight = 2;
  var cursorHeight = 12; // Optimize for float bottom only, cause the cursor will hide the tooltip

  if (effect === 'float') {
    top = {
      l: -(tipWidth / 2),
      r: tipWidth / 2,
      t: -(tipHeight + disToMouse + triangleHeight),
      b: -disToMouse
    };
    bottom = {
      l: -(tipWidth / 2),
      r: tipWidth / 2,
      t: disToMouse + cursorHeight,
      b: tipHeight + disToMouse + triangleHeight + cursorHeight
    };
    left = {
      l: -(tipWidth + disToMouse + triangleHeight),
      r: -disToMouse,
      t: -(tipHeight / 2),
      b: tipHeight / 2
    };
    right = {
      l: disToMouse,
      r: tipWidth + disToMouse + triangleHeight,
      t: -(tipHeight / 2),
      b: tipHeight / 2
    };
  } else if (effect === 'solid') {
    top = {
      l: -(tipWidth / 2),
      r: tipWidth / 2,
      t: -(targetHeight / 2 + tipHeight + triangleHeight),
      b: -(targetHeight / 2)
    };
    bottom = {
      l: -(tipWidth / 2),
      r: tipWidth / 2,
      t: targetHeight / 2,
      b: targetHeight / 2 + tipHeight + triangleHeight
    };
    left = {
      l: -(tipWidth + targetWidth / 2 + triangleHeight),
      r: -(targetWidth / 2),
      t: -(tipHeight / 2),
      b: tipHeight / 2
    };
    right = {
      l: targetWidth / 2,
      r: tipWidth + targetWidth / 2 + triangleHeight,
      t: -(tipHeight / 2),
      b: tipHeight / 2
    };
  }
  return {
    top: top,
    bottom: bottom,
    left: left,
    right: right
  };
};

// Consider additional offset into position calculation
var calculateOffset = function calculateOffset(offset) {
  var extraOffsetX = 0;
  var extraOffsetY = 0;
  if (Object.prototype.toString.apply(offset) === '[object String]') {
    offset = JSON.parse(offset.toString().replace(/'/g, '"'));
  }
  for (var key in offset) {
    if (key === 'top') {
      extraOffsetY -= parseInt(offset[key], 10);
    } else if (key === 'bottom') {
      extraOffsetY += parseInt(offset[key], 10);
    } else if (key === 'left') {
      extraOffsetX -= parseInt(offset[key], 10);
    } else if (key === 'right') {
      extraOffsetX += parseInt(offset[key], 10);
    }
  }
  return {
    extraOffsetX: extraOffsetX,
    extraOffsetY: extraOffsetY
  };
};

// Get the offset of the parent elements
var getParent = function getParent(currentTarget) {
  var currentParent = currentTarget;
  while (currentParent) {
    var computedStyle = window.getComputedStyle(currentParent);
    // transform and will-change: transform change the containing block
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_Block
    if (computedStyle.getPropertyValue('transform') !== 'none' || computedStyle.getPropertyValue('will-change') === 'transform') break;
    currentParent = currentParent.parentElement;
  }
  var parentTop = currentParent && currentParent.getBoundingClientRect().top || 0;
  var parentLeft = currentParent && currentParent.getBoundingClientRect().left || 0;
  return {
    parentTop: parentTop,
    parentLeft: parentLeft
  };
};

/**
 * To get the tooltip content
 * it may comes from data-tip or this.props.children
 * it should support multiline
 *
 * @params
 * - `tip` {String} value of data-tip
 * - `children` {ReactElement} this.props.children
 * - `multiline` {Any} could be Bool(true/false) or String('true'/'false')
 *
 * @return
 * - String or react component
 */
function TipContent(tip, children, getContent, multiline) {
  if (children) return children;
  if (getContent !== undefined && getContent !== null) return getContent; // getContent can be 0, '', etc.
  if (getContent === null) return null; // Tip not exist and children is null or undefined

  var regexp = /<br\s*\/?>/;
  if (!multiline || multiline === 'false' || !regexp.test(tip)) {
    // No trim(), so that user can keep their input
    return tip;
  }

  // Multiline tooltip content
  return tip.split(regexp).map(function (d, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      key: i,
      className: "multi-line"
    }, d);
  });
}

/**
 * Support aria- and role in ReactTooltip
 *
 * @params props {Object}
 * @return {Object}
 */
function parseAria(props) {
  var ariaObj = {};
  Object.keys(props).filter(function (prop) {
    // aria-xxx and role is acceptable
    return /(^aria-\w+$|^role$)/.test(prop);
  }).forEach(function (prop) {
    ariaObj[prop] = props[prop];
  });
  return ariaObj;
}

/**
 * Convert nodelist to array
 * @see https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/core/createArrayFromMixed.js#L24
 * NodeLists are functions in Safari
 */

function nodeListToArray (nodeList) {
  var length = nodeList.length;
  if (nodeList.hasOwnProperty) {
    return Array.prototype.slice.call(nodeList);
  }
  return new Array(length).fill().map(function (index) {
    return nodeList[index];
  });
}

function generateUUID() {
  return 't' + (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

var baseCss = ".__react_component_tooltip {\n  border-radius: 3px;\n  display: inline-block;\n  font-size: 13px;\n  left: -999em;\n  opacity: 0;\n  position: fixed;\n  pointer-events: none;\n  transition: opacity 0.3s ease-out;\n  top: -999em;\n  visibility: hidden;\n  z-index: 999;\n}\n.__react_component_tooltip.allow_hover, .__react_component_tooltip.allow_click {\n  pointer-events: auto;\n}\n.__react_component_tooltip::before, .__react_component_tooltip::after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n.__react_component_tooltip.show {\n  opacity: 0.9;\n  margin-top: 0;\n  margin-left: 0;\n  visibility: visible;\n}\n.__react_component_tooltip.place-top::before {\n  bottom: 0;\n  left: 50%;\n  margin-left: -11px;\n}\n.__react_component_tooltip.place-bottom::before {\n  top: 0;\n  left: 50%;\n  margin-left: -11px;\n}\n.__react_component_tooltip.place-left::before {\n  right: 0;\n  top: 50%;\n  margin-top: -9px;\n}\n.__react_component_tooltip.place-right::before {\n  left: 0;\n  top: 50%;\n  margin-top: -9px;\n}\n.__react_component_tooltip .multi-line {\n  display: block;\n  padding: 2px 0;\n  text-align: center;\n}";

/**
 * Default pop-up style values (text color, background color).
 */
var defaultColors = {
  dark: {
    text: '#fff',
    background: '#222',
    border: 'transparent',
    arrow: '#222'
  },
  success: {
    text: '#fff',
    background: '#8DC572',
    border: 'transparent',
    arrow: '#8DC572'
  },
  warning: {
    text: '#fff',
    background: '#F0AD4E',
    border: 'transparent',
    arrow: '#F0AD4E'
  },
  error: {
    text: '#fff',
    background: '#BE6464',
    border: 'transparent',
    arrow: '#BE6464'
  },
  info: {
    text: '#fff',
    background: '#337AB7',
    border: 'transparent',
    arrow: '#337AB7'
  },
  light: {
    text: '#222',
    background: '#fff',
    border: 'transparent',
    arrow: '#fff'
  }
};
function getDefaultPopupColors(type) {
  return defaultColors[type] ? _objectSpread2({}, defaultColors[type]) : undefined;
}
var DEFAULT_PADDING = '8px 21px';
var DEFAULT_RADIUS = {
  tooltip: 3,
  arrow: 0
};

/**
 * Generates the specific tooltip style for use on render.
 */
function generateTooltipStyle(uuid, customColors, type, hasBorder, padding, radius) {
  return generateStyle(uuid, getPopupColors(customColors, type, hasBorder), padding, radius);
}

/**
 * Generates the tooltip style rules based on the element-specified "data-type" property.
 */
function generateStyle(uuid, colors) {
  var padding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_PADDING;
  var radius = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_RADIUS;
  var textColor = colors.text;
  var backgroundColor = colors.background;
  var borderColor = colors.border;
  var arrowColor = colors.arrow;
  var arrowRadius = radius.arrow;
  var tooltipRadius = radius.tooltip;
  return "\n  \t.".concat(uuid, " {\n\t    color: ").concat(textColor, ";\n\t    background: ").concat(backgroundColor, ";\n\t    border: 1px solid ").concat(borderColor, ";\n\t    border-radius: ").concat(tooltipRadius, "px;\n\t    padding: ").concat(padding, ";\n  \t}\n\n  \t.").concat(uuid, ".place-top {\n        margin-top: -10px;\n    }\n    .").concat(uuid, ".place-top::before {\n        content: \"\";\n        background-color: inherit;\n        position: absolute;\n        z-index: 2;\n        width: 20px;\n        height: 12px;\n    }\n    .").concat(uuid, ".place-top::after {\n        content: \"\";\n        position: absolute;\n        width: 10px;\n        height: 10px;\n        border-top-right-radius: ").concat(arrowRadius, "px;\n        border: 1px solid ").concat(borderColor, ";\n        background-color: ").concat(arrowColor, ";\n        z-index: -2;\n        bottom: -6px;\n        left: 50%;\n        margin-left: -6px;\n        transform: rotate(135deg);\n    }\n\n    .").concat(uuid, ".place-bottom {\n        margin-top: 10px;\n    }\n    .").concat(uuid, ".place-bottom::before {\n        content: \"\";\n        background-color: inherit;\n        position: absolute;\n        z-index: -1;\n        width: 18px;\n        height: 10px;\n    }\n    .").concat(uuid, ".place-bottom::after {\n        content: \"\";\n        position: absolute;\n        width: 10px;\n        height: 10px;\n        border-top-right-radius: ").concat(arrowRadius, "px;\n        border: 1px solid ").concat(borderColor, ";\n        background-color: ").concat(arrowColor, ";\n        z-index: -2;\n        top: -6px;\n        left: 50%;\n        margin-left: -6px;\n        transform: rotate(45deg);\n    }\n\n    .").concat(uuid, ".place-left {\n        margin-left: -10px;\n    }\n    .").concat(uuid, ".place-left::before {\n        content: \"\";\n        background-color: inherit;\n        position: absolute;\n        z-index: -1;\n        width: 10px;\n        height: 18px;\n    }\n    .").concat(uuid, ".place-left::after {\n        content: \"\";\n        position: absolute;\n        width: 10px;\n        height: 10px;\n        border-top-right-radius: ").concat(arrowRadius, "px;\n        border: 1px solid ").concat(borderColor, ";\n        background-color: ").concat(arrowColor, ";\n        z-index: -2;\n        right: -6px;\n        top: 50%;\n        margin-top: -6px;\n        transform: rotate(45deg);\n    }\n\n    .").concat(uuid, ".place-right {\n        margin-left: 10px;\n    }\n    .").concat(uuid, ".place-right::before {\n        content: \"\";\n        background-color: inherit;\n        position: absolute;\n        z-index: -1;\n        width: 10px;\n        height: 18px;\n    }\n    .").concat(uuid, ".place-right::after {\n        content: \"\";\n        position: absolute;\n        width: 10px;\n        height: 10px;\n        border-top-right-radius: ").concat(arrowRadius, "px;\n        border: 1px solid ").concat(borderColor, ";\n        background-color: ").concat(arrowColor, ";\n        z-index: -2;\n        left: -6px;\n        top: 50%;\n        margin-top: -6px;\n        transform: rotate(-135deg);\n    }\n  ");
}
function getPopupColors(customColors, type, hasBorder) {
  var textColor = customColors.text;
  var backgroundColor = customColors.background;
  var borderColor = customColors.border;
  var arrowColor = customColors.arrow ? customColors.arrow : customColors.background;
  var colors = getDefaultPopupColors(type);
  if (textColor) {
    colors.text = textColor;
  }
  if (backgroundColor) {
    colors.background = backgroundColor;
  }
  if (hasBorder) {
    if (borderColor) {
      colors.border = borderColor;
    } else {
      colors.border = type === 'light' ? 'black' : 'white';
    }
  }
  if (arrowColor) {
    colors.arrow = arrowColor;
  }
  return colors;
}

var _class, _class2;

/* Polyfill */
var ReactTooltip = staticMethods(_class = windowListener(_class = customEvent(_class = isCapture(_class = getEffect(_class = bodyMode(_class = trackRemoval(_class = (_class2 = /*#__PURE__*/function (_React$Component) {
  _inherits(ReactTooltip, _React$Component);
  var _super = _createSuper(ReactTooltip);
  function ReactTooltip(props) {
    var _this;
    _classCallCheck(this, ReactTooltip);
    _this = _super.call(this, props);
    _this.state = {
      uuid: props.uuid || generateUUID(),
      place: props.place || 'top',
      // Direction of tooltip
      desiredPlace: props.place || 'top',
      type: props.type || 'dark',
      // Color theme of tooltip
      effect: props.effect || 'float',
      // float or fixed
      show: false,
      border: false,
      borderClass: 'border',
      customColors: {},
      customRadius: {},
      offset: {},
      padding: props.padding,
      extraClass: '',
      html: false,
      delayHide: 0,
      delayShow: 0,
      event: props.event || null,
      eventOff: props.eventOff || null,
      currentEvent: null,
      // Current mouse event
      currentTarget: null,
      // Current target of mouse event
      ariaProps: parseAria(props),
      // aria- and role attributes
      isEmptyTip: false,
      disable: false,
      possibleCustomEvents: props.possibleCustomEvents || '',
      possibleCustomEventsOff: props.possibleCustomEventsOff || '',
      originTooltip: null,
      isMultiline: false
    };
    _this.bind(['showTooltip', 'updateTooltip', 'hideTooltip', 'hideTooltipOnScroll', 'getTooltipContent', 'globalRebuild', 'globalShow', 'globalHide', 'onWindowResize', 'mouseOnToolTip']);
    _this.mount = true;
    _this.delayShowLoop = null;
    _this.delayHideLoop = null;
    _this.delayReshow = null;
    _this.intervalUpdateContent = null;
    return _this;
  }

  /**
   * For unify the bind and unbind listener
   */
  _createClass(ReactTooltip, [{
    key: "bind",
    value: function bind(methodArray) {
      var _this2 = this;
      methodArray.forEach(function (method) {
        _this2[method] = _this2[method].bind(_this2);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props;
        _this$props.insecure;
        var resizeHide = _this$props.resizeHide,
        disableInternalStyle = _this$props.disableInternalStyle;
      this.mount = true;
      this.bindListener(); // Bind listener for tooltip
      this.bindWindowEvents(resizeHide); // Bind global event for static method

      if (!disableInternalStyle) {
        this.injectStyles(); // Inject styles for each DOM root having tooltip.
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mount = false;
      this.clearTimer();
      this.unbindListener();
      this.removeScrollListener(this.state.currentTarget);
      this.unbindWindowEvents();
    }

    /* Look for the closest DOM root having tooltip and inject styles. */
  }, {
    key: "injectStyles",
    value: function injectStyles() {
      var tooltipRef = this.tooltipRef;
      if (!tooltipRef) {
        return;
      }
      var parentNode = tooltipRef.parentNode;
      while (parentNode.parentNode) {
        parentNode = parentNode.parentNode;
      }
      var domRoot;
      switch (parentNode.constructor.name) {
        case 'Document':
        case 'HTMLDocument':
        case undefined:
          domRoot = parentNode.head;
          break;
        case 'ShadowRoot':
        default:
          domRoot = parentNode;
          break;
      }

      // Prevent styles duplication.
      if (!domRoot.querySelector('style[data-react-tooltip]')) {
        var style = document.createElement('style');
        style.textContent = baseCss;
        style.setAttribute('data-react-tooltip', 'true');
        domRoot.appendChild(style);
      }
    }

    /**
     * Return if the mouse is on the tooltip.
     * @returns {boolean} true - mouse is on the tooltip
     */
  }, {
    key: "mouseOnToolTip",
    value: function mouseOnToolTip() {
      var show = this.state.show;
      if (show && this.tooltipRef) {
        /* old IE or Firefox work around */
        if (!this.tooltipRef.matches) {
          /* old IE work around */
          if (this.tooltipRef.msMatchesSelector) {
            this.tooltipRef.matches = this.tooltipRef.msMatchesSelector;
          } else {
            /* old Firefox work around */
            this.tooltipRef.matches = this.tooltipRef.mozMatchesSelector;
          }
        }
        return this.tooltipRef.matches(':hover');
      }
      return false;
    }

    /**
     * Pick out corresponded target elements
     */
  }, {
    key: "getTargetArray",
    value: function getTargetArray(id) {
      var targetArray = [];
      var selector;
      if (!id) {
        selector = '[data-tip]:not([data-for])';
      } else {
        var escaped = id.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
        selector = "[data-tip][data-for=\"".concat(escaped, "\"]");
      }

      // Scan document for shadow DOM elements
      nodeListToArray(document.getElementsByTagName('*')).filter(function (element) {
        return element.shadowRoot;
      }).forEach(function (element) {
        targetArray = targetArray.concat(nodeListToArray(element.shadowRoot.querySelectorAll(selector)));
      });
      return targetArray.concat(nodeListToArray(document.querySelectorAll(selector)));
    }

    /**
     * Bind listener to the target elements
     * These listeners used to trigger showing or hiding the tooltip
     */
  }, {
    key: "bindListener",
    value: function bindListener() {
      var _this3 = this;
      var _this$props2 = this.props,
        id = _this$props2.id,
        globalEventOff = _this$props2.globalEventOff,
        isCapture = _this$props2.isCapture;
      var targetArray = this.getTargetArray(id);
      targetArray.forEach(function (target) {
        if (target.getAttribute('currentItem') === null) {
          target.setAttribute('currentItem', 'false');
        }
        _this3.unbindBasicListener(target);
        if (_this3.isCustomEvent(target)) {
          _this3.customUnbindListener(target);
        }
      });
      if (this.isBodyMode()) {
        this.bindBodyListener(targetArray);
      } else {
        targetArray.forEach(function (target) {
          var isCaptureMode = _this3.isCapture(target);
          var effect = _this3.getEffect(target);
          if (_this3.isCustomEvent(target)) {
            _this3.customBindListener(target);
            return;
          }
          target.addEventListener('mouseenter', _this3.showTooltip, isCaptureMode);
          target.addEventListener('focus', _this3.showTooltip, isCaptureMode);
          if (effect === 'float') {
            target.addEventListener('mousemove', _this3.updateTooltip, isCaptureMode);
          }
          target.addEventListener('mouseleave', _this3.hideTooltip, isCaptureMode);
          target.addEventListener('blur', _this3.hideTooltip, isCaptureMode);
        });
      }

      // Global event to hide tooltip
      if (globalEventOff) {
        window.removeEventListener(globalEventOff, this.hideTooltip);
        window.addEventListener(globalEventOff, this.hideTooltip, isCapture);
      }

      // Track removal of targetArray elements from DOM
      this.bindRemovalTracker();
    }

    /**
     * Unbind listeners on target elements
     */
  }, {
    key: "unbindListener",
    value: function unbindListener() {
      var _this4 = this;
      var _this$props3 = this.props,
        id = _this$props3.id,
        globalEventOff = _this$props3.globalEventOff;
      if (this.isBodyMode()) {
        this.unbindBodyListener();
      } else {
        var targetArray = this.getTargetArray(id);
        targetArray.forEach(function (target) {
          _this4.unbindBasicListener(target);
          if (_this4.isCustomEvent(target)) _this4.customUnbindListener(target);
        });
      }
      if (globalEventOff) window.removeEventListener(globalEventOff, this.hideTooltip);
      this.unbindRemovalTracker();
    }

    /**
     * Invoke this before bind listener and unmount the component
     * it is necessary to invoke this even when binding custom event
     * so that the tooltip can switch between custom and default listener
     */
  }, {
    key: "unbindBasicListener",
    value: function unbindBasicListener(target) {
      var isCaptureMode = this.isCapture(target);
      target.removeEventListener('mouseenter', this.showTooltip, isCaptureMode);
      target.removeEventListener('mousemove', this.updateTooltip, isCaptureMode);
      target.removeEventListener('mouseleave', this.hideTooltip, isCaptureMode);
    }
  }, {
    key: "getTooltipContent",
    value: function getTooltipContent() {
      var _this$props4 = this.props,
        getContent = _this$props4.getContent,
        children = _this$props4.children;

      // Generate tooltip content
      var content;
      if (getContent) {
        if (Array.isArray(getContent)) {
          content = getContent[0] && getContent[0](this.state.originTooltip);
        } else {
          content = getContent(this.state.originTooltip);
        }
      }
      return TipContent(this.state.originTooltip, children, content, this.state.isMultiline);
    }
  }, {
    key: "isEmptyTip",
    value: function isEmptyTip(placeholder) {
      return typeof placeholder === 'string' && placeholder === '' || placeholder === null;
    }

    /**
     * When mouse enter, show the tooltip
     */
  }, {
    key: "showTooltip",
    value: function showTooltip(e, isGlobalCall) {
      if (!this.tooltipRef) {
        return;
      }
      if (isGlobalCall) {
        // Don't trigger other elements belongs to other ReactTooltip
        var targetArray = this.getTargetArray(this.props.id);
        var isMyElement = targetArray.some(function (ele) {
          return ele === e.currentTarget;
        });
        if (!isMyElement) return;
      }
      // Get the tooltip content
      // calculate in this phrase so that tip width height can be detected
      var _this$props5 = this.props,
        multiline = _this$props5.multiline,
        getContent = _this$props5.getContent;
      var originTooltip = e.currentTarget.getAttribute('data-tip');
      var isMultiline = e.currentTarget.getAttribute('data-multiline') || multiline || false;

      // If it is focus event or called by ReactTooltip.show, switch to `solid` effect
      var switchToSolid = e instanceof window.FocusEvent || isGlobalCall;

      // if it needs to skip adding hide listener to scroll
      var scrollHide = true;
      if (e.currentTarget.getAttribute('data-scroll-hide')) {
        scrollHide = e.currentTarget.getAttribute('data-scroll-hide') === 'true';
      } else if (this.props.scrollHide != null) {
        scrollHide = this.props.scrollHide;
      }

      // adding aria-describedby to target to make tooltips read by screen readers
      if (e && e.currentTarget && e.currentTarget.setAttribute) {
        e.currentTarget.setAttribute('aria-describedby', this.props.id || this.state.uuid);
      }

      // Make sure the correct place is set
      var desiredPlace = e.currentTarget.getAttribute('data-place') || this.props.place || 'top';
      var effect = switchToSolid && 'solid' || this.getEffect(e.currentTarget);
      var offset = e.currentTarget.getAttribute('data-offset') || this.props.offset || {};
      var result = getPosition(e, e.currentTarget, this.tooltipRef, desiredPlace.split(',')[0], desiredPlace, effect, offset);
      if (result.position && this.props.overridePosition) {
        result.position = this.props.overridePosition(result.position, e, e.currentTarget, this.tooltipRef, desiredPlace, desiredPlace, effect, offset);
      }
      var place = result.isNewState ? result.newState.place : desiredPlace.split(',')[0];

      // To prevent previously created timers from triggering
      this.clearTimer();
      var target = e.currentTarget;
      var reshowDelay = this.state.show ? target.getAttribute('data-delay-update') || this.props.delayUpdate : 0;
      var self = this;
      var updateState = function updateState() {
        self.setState({
          originTooltip: originTooltip,
          isMultiline: isMultiline,
          desiredPlace: desiredPlace,
          place: place,
          type: target.getAttribute('data-type') || self.props.type || 'dark',
          customColors: {
            text: target.getAttribute('data-text-color') || self.props.textColor || null,
            background: target.getAttribute('data-background-color') || self.props.backgroundColor || null,
            border: target.getAttribute('data-border-color') || self.props.borderColor || null,
            arrow: target.getAttribute('data-arrow-color') || self.props.arrowColor || null
          },
          customRadius: {
            tooltip: target.getAttribute('data-tooltip-radius') || self.props.tooltipRadius || '3',
            arrow: target.getAttribute('data-arrow-radius') || self.props.arrowRadius || '0'
          },
          effect: effect,
          offset: offset,
          padding: target.getAttribute('data-padding') || self.props.padding,
          html: (target.getAttribute('data-html') ? target.getAttribute('data-html') === 'true' : self.props.html) || false,
          delayShow: target.getAttribute('data-delay-show') || self.props.delayShow || 0,
          delayHide: target.getAttribute('data-delay-hide') || self.props.delayHide || 0,
          delayUpdate: target.getAttribute('data-delay-update') || self.props.delayUpdate || 0,
          border: (target.getAttribute('data-border') ? target.getAttribute('data-border') === 'true' : self.props.border) || false,
          borderClass: target.getAttribute('data-border-class') || self.props.borderClass || 'border',
          extraClass: target.getAttribute('data-class') || self.props["class"] || self.props.className || '',
          disable: (target.getAttribute('data-tip-disable') ? target.getAttribute('data-tip-disable') === 'true' : self.props.disable) || false,
          currentTarget: target
        }, function () {
          if (scrollHide) {
            self.addScrollListener(self.state.currentTarget);
          }
          self.updateTooltip(e);
          if (getContent && Array.isArray(getContent)) {
            self.intervalUpdateContent = setInterval(function () {
              if (self.mount) {
                var _getContent = self.props.getContent;
                var placeholder = TipContent(originTooltip, '', _getContent[0](), isMultiline);
                var isEmptyTip = self.isEmptyTip(placeholder);
                self.setState({
                  isEmptyTip: isEmptyTip
                });
                self.updatePosition();
              }
            }, getContent[1]);
          }
        });
      };

      // If there is no delay call immediately, don't allow events to get in first.
      if (reshowDelay) {
        this.delayReshow = setTimeout(updateState, reshowDelay);
      } else {
        updateState();
      }
    }

    /**
     * When mouse hover, update tool tip
     */
  }, {
    key: "updateTooltip",
    value: function updateTooltip(e) {
      var _this5 = this;
      var _this$state = this.state,
        delayShow = _this$state.delayShow,
        disable = _this$state.disable;
      var _this$props6 = this.props,
        afterShow = _this$props6.afterShow,
        disableProp = _this$props6.disable;
      var placeholder = this.getTooltipContent();
      var eventTarget = e.currentTarget || e.target;

      // Check if the mouse is actually over the tooltip, if so don't hide the tooltip
      if (this.mouseOnToolTip()) {
        return;
      }

      // if the tooltip is empty, disable the tooltip
      if (this.isEmptyTip(placeholder) || disable || disableProp) {
        return;
      }
      var delayTime = !this.state.show ? parseInt(delayShow, 10) : 0;
      var updateState = function updateState() {
        if (Array.isArray(placeholder) && placeholder.length > 0 || placeholder) {
          var isInvisible = !_this5.state.show;
          _this5.setState({
            currentEvent: e,
            currentTarget: eventTarget,
            show: true
          }, function () {
            _this5.updatePosition(function () {
              if (isInvisible && afterShow) {
                afterShow(e);
              }
            });
          });
        }
      };
      if (this.delayShowLoop) {
        clearTimeout(this.delayShowLoop);
      }
      if (delayTime) {
        this.delayShowLoop = setTimeout(updateState, delayTime);
      } else {
        this.delayShowLoop = null;
        updateState();
      }
    }

    /*
     * If we're mousing over the tooltip remove it when we leave.
     */
  }, {
    key: "listenForTooltipExit",
    value: function listenForTooltipExit() {
      var show = this.state.show;
      if (show && this.tooltipRef) {
        this.tooltipRef.addEventListener('mouseleave', this.hideTooltip);
      }
    }
  }, {
    key: "removeListenerForTooltipExit",
    value: function removeListenerForTooltipExit() {
      var show = this.state.show;
      if (show && this.tooltipRef) {
        this.tooltipRef.removeEventListener('mouseleave', this.hideTooltip);
      }
    }

    /**
     * When mouse leave, hide tooltip
     */
  }, {
    key: "hideTooltip",
    value: function hideTooltip(e, hasTarget) {
      var _this6 = this;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        isScroll: false
      };
      var disable = this.state.disable;
      var isScroll = options.isScroll;
      var delayHide = isScroll ? 0 : this.state.delayHide;
      var _this$props7 = this.props,
        afterHide = _this$props7.afterHide,
        disableProp = _this$props7.disable;
      var placeholder = this.getTooltipContent();
      if (!this.mount) return;
      if (this.isEmptyTip(placeholder) || disable || disableProp) return; // if the tooltip is empty, disable the tooltip
      if (hasTarget) {
        // Don't trigger other elements belongs to other ReactTooltip
        var targetArray = this.getTargetArray(this.props.id);
        var isMyElement = targetArray.some(function (ele) {
          return ele === e.currentTarget;
        });
        if (!isMyElement || !this.state.show) return;
      }

      // clean up aria-describedby when hiding tooltip
      if (e && e.currentTarget && e.currentTarget.removeAttribute) {
        e.currentTarget.removeAttribute('aria-describedby');
      }
      var resetState = function resetState() {
        var isVisible = _this6.state.show;
        // Check if the mouse is actually over the tooltip, if so don't hide the tooltip
        if (_this6.mouseOnToolTip()) {
          _this6.listenForTooltipExit();
          return;
        }
        _this6.removeListenerForTooltipExit();
        _this6.setState({
          show: false
        }, function () {
          _this6.removeScrollListener(_this6.state.currentTarget);
          if (isVisible && afterHide) {
            afterHide(e);
          }
        });
      };
      this.clearTimer();
      if (delayHide) {
        this.delayHideLoop = setTimeout(resetState, parseInt(delayHide, 10));
      } else {
        resetState();
      }
    }

    /**
     * When scroll, hide tooltip
     */
  }, {
    key: "hideTooltipOnScroll",
    value: function hideTooltipOnScroll(event, hasTarget) {
      this.hideTooltip(event, hasTarget, {
        isScroll: true
      });
    }

    /**
     * Add scroll event listener when tooltip show
     * automatically hide the tooltip when scrolling
     */
  }, {
    key: "addScrollListener",
    value: function addScrollListener(currentTarget) {
      var isCaptureMode = this.isCapture(currentTarget);
      window.addEventListener('scroll', this.hideTooltipOnScroll, isCaptureMode);
    }
  }, {
    key: "removeScrollListener",
    value: function removeScrollListener(currentTarget) {
      var isCaptureMode = this.isCapture(currentTarget);
      window.removeEventListener('scroll', this.hideTooltipOnScroll, isCaptureMode);
    }

    // Calculation the position
  }, {
    key: "updatePosition",
    value: function updatePosition(callbackAfter) {
      var _this7 = this;
      var _this$state2 = this.state,
        currentEvent = _this$state2.currentEvent,
        currentTarget = _this$state2.currentTarget,
        place = _this$state2.place,
        desiredPlace = _this$state2.desiredPlace,
        effect = _this$state2.effect,
        offset = _this$state2.offset;
      var node = this.tooltipRef;
      var result = getPosition(currentEvent, currentTarget, node, place, desiredPlace, effect, offset);
      if (result.position && this.props.overridePosition) {
        result.position = this.props.overridePosition(result.position, currentEvent, currentTarget, node, place, desiredPlace, effect, offset);
      }
      if (result.isNewState) {
        // Switch to reverse placement
        return this.setState(result.newState, function () {
          _this7.updatePosition(callbackAfter);
        });
      }
      if (callbackAfter && typeof callbackAfter === 'function') {
        callbackAfter();
      }

      // Set tooltip position
      node.style.left = result.position.left + 'px';
      node.style.top = result.position.top + 'px';
    }

    /**
     * CLear all kinds of timeout of interval
     */
  }, {
    key: "clearTimer",
    value: function clearTimer() {
      if (this.delayShowLoop) {
        clearTimeout(this.delayShowLoop);
        this.delayShowLoop = null;
      }
      if (this.delayHideLoop) {
        clearTimeout(this.delayHideLoop);
        this.delayHideLoop = null;
      }
      if (this.delayReshow) {
        clearTimeout(this.delayReshow);
        this.delayReshow = null;
      }
      if (this.intervalUpdateContent) {
        clearInterval(this.intervalUpdateContent);
        this.intervalUpdateContent = null;
      }
    }
  }, {
    key: "hasCustomColors",
    value: function hasCustomColors() {
      var _this8 = this;
      return Boolean(Object.keys(this.state.customColors).find(function (color) {
        return color !== 'border' && _this8.state.customColors[color];
      }) || this.state.border && this.state.customColors['border']);
    }
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;
      var _this$state3 = this.state,
        extraClass = _this$state3.extraClass,
        html = _this$state3.html,
        ariaProps = _this$state3.ariaProps,
        disable = _this$state3.disable,
        uuid = _this$state3.uuid;
      var content = this.getTooltipContent();
      var isEmptyTip = this.isEmptyTip(content);
      var style = this.props.disableInternalStyle ? '' : generateTooltipStyle(this.state.uuid, this.state.customColors, this.state.type, this.state.border, this.state.padding, this.state.customRadius);
      var tooltipClass = '__react_component_tooltip' + " ".concat(this.state.uuid) + (this.state.show && !disable && !isEmptyTip ? ' show' : '') + (this.state.border ? ' ' + this.state.borderClass : '') + " place-".concat(this.state.place) + // top, bottom, left, right
      " type-".concat(this.hasCustomColors() ? 'custom' : this.state.type) + (
      // dark, success, warning, error, info, light, custom
      this.props.delayUpdate ? ' allow_hover' : '') + (this.props.clickable ? ' allow_click' : '');
      var Wrapper = this.props.wrapper;
      if (ReactTooltip.supportedWrappers.indexOf(Wrapper) < 0) {
        Wrapper = ReactTooltip.defaultProps.wrapper;
      }
      var wrapperClassName = [tooltipClass, extraClass].filter(Boolean).join(' ');
      if (html) {
        var htmlContent = "".concat(content).concat(style ? "\n<style aria-hidden=\"true\">".concat(style, "</style>") : '');
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper, _extends({
          className: "".concat(wrapperClassName),
          id: this.props.id || uuid,
          ref: function ref(_ref) {
            return _this9.tooltipRef = _ref;
          }
        }, ariaProps, {
          "data-id": "tooltip",
          dangerouslySetInnerHTML: {
            __html: htmlContent
          }
        }));
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper, _extends({
          className: "".concat(wrapperClassName),
          id: this.props.id || uuid
        }, ariaProps, {
          ref: function ref(_ref2) {
            return _this9.tooltipRef = _ref2;
          },
          "data-id": "tooltip"
        }), style && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("style", {
          dangerouslySetInnerHTML: {
            __html: style
          },
          "aria-hidden": "true"
        }), content);
      }
    }
  }], [{
    key: "propTypes",
    get: function get() {
      return {
        uuid: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any),
        place: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        type: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        effect: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        offset: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
        padding: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        multiline: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
        border: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
        borderClass: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        textColor: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        backgroundColor: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        borderColor: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        arrowColor: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        arrowRadius: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        tooltipRadius: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        insecure: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
        "class": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        id: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        html: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
        delayHide: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
        delayUpdate: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
        delayShow: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
        event: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        eventOff: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        isCapture: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
        globalEventOff: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        getContent: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any),
        afterShow: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
        afterHide: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
        overridePosition: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
        disable: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
        scrollHide: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
        resizeHide: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
        wrapper: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        bodyMode: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
        possibleCustomEvents: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        possibleCustomEventsOff: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        clickable: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
        disableInternalStyle: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
      };
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var ariaProps = prevState.ariaProps;
      var newAriaProps = parseAria(nextProps);
      var isChanged = Object.keys(newAriaProps).some(function (props) {
        return newAriaProps[props] !== ariaProps[props];
      });
      if (!isChanged) {
        return null;
      }
      return _objectSpread2(_objectSpread2({}, prevState), {}, {
        ariaProps: newAriaProps
      });
    }
  }]);
  return ReactTooltip;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component), _defineProperty(_class2, "defaultProps", {
  insecure: true,
  resizeHide: true,
  wrapper: 'div',
  clickable: false
}), _defineProperty(_class2, "supportedWrappers", ['div', 'span']), _defineProperty(_class2, "displayName", 'ReactTooltip'), _class2)) || _class) || _class) || _class) || _class) || _class) || _class) || _class;


//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/use-memo-one/dist/use-memo-one.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/use-memo-one/dist/use-memo-one.esm.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCallback: () => (/* binding */ useCallback),
/* harmony export */   useCallbackOne: () => (/* binding */ useCallbackOne),
/* harmony export */   useMemo: () => (/* binding */ useMemo),
/* harmony export */   useMemoOne: () => (/* binding */ useMemoOne)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }

  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }

  return true;
}

function useMemoOne(getResult, inputs) {
  var initial = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
    return {
      inputs: inputs,
      result: getResult()
    };
  })[0];
  var isFirstRun = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  var committed = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initial);
  var useCache = isFirstRun.current || Boolean(inputs && committed.current.inputs && areInputsEqual(inputs, committed.current.inputs));
  var cache = useCache ? committed.current : {
    inputs: inputs,
    result: getResult()
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    isFirstRun.current = false;
    committed.current = cache;
  }, [cache]);
  return cache.result;
}
function useCallbackOne(callback, inputs) {
  return useMemoOne(function () {
    return callback;
  }, inputs);
}
var useMemo = useMemoOne;
var useCallback = useCallbackOne;




/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/bytesToUuid.js":
/*!***********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/bytesToUuid.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex; // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4

  return [bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]]].join('');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bytesToUuid);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
// find the complete implementation of crypto (msCrypto) on IE11.
var getRandomValues = typeof crypto != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != 'undefined' && typeof msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto);
var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

function rng() {
  if (!getRandomValues) {
    throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bytesToUuid.js */ "./node_modules/uuid/dist/esm-browser/bytesToUuid.js");



function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof options == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }

  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || (0,_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/tiny-invariant/dist/esm/tiny-invariant.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-invariant/dist/esm/tiny-invariant.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ invariant)
/* harmony export */ });
var isProduction = "development" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    var provided = typeof message === 'function' ? message() : message;
    var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
    throw new Error(value);
}




/***/ })

}]);