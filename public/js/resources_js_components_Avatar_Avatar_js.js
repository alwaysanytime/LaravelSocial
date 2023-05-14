"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Avatar_Avatar_js"],{

/***/ "./resources/js/components/Avatar/Avatar.js":
/*!**************************************************!*\
  !*** ./resources/js/components/Avatar/Avatar.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config */ "./resources/js/config/config.js");
/* harmony import */ var _Modal_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Modal/Modal */ "./resources/js/components/Modal/Modal.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var Avatar = function Avatar(props) {
  var _avatar = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.auth.avatar;
  });

  var avatar = _avatar;
  if ('avatar' in props) avatar = props.avatar;
  var hasAvatar = avatar != _config_config__WEBPACK_IMPORTED_MODULE_2__["default"] && avatar != "" ? true : false;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      zoom = _useState2[0],
      setZoom = _useState2[1];

  var hideModal = function hideModal() {
    setZoom(false);
  };

  var showModal = function showModal(event) {
    setZoom(true);
    event.stopPropagation();
  };

  var length = props.sm ? 50 : 100;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Modal_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      visible: zoom,
      hideModal: hideModal,
      hide: hideModal,
      showHideIcon: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: 'd-flex justify-content-center align-items-center text-white ' + (!hasAvatar ? 'bg-dark' : ''),
        style: {
          minWidth: 300,
          minHeight: 300,
          fontSize: 60,
          textTransform: 'capitalize',
          overflow: 'hidden',
          maxWidth: 300,
          maxHeight: 300
        },
        children: hasAvatar ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
          className: "w-100",
          src: avatar,
          style: {
            width: 300,
            height: 300
          },
          alt: props.username.substr(0, 1) || "T"
        }) : props.username.substr(0, 1) || "T"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      onClick: showModal,
      className: 'd-flex justify-content-center align-items-center text-white ' + (!hasAvatar ? 'bg-dark' : ''),
      style: {
        minWidth: length,
        minHeight: length,
        fontSize: length * 0.6,
        textTransform: 'capitalize',
        borderRadius: 50,
        overflow: 'hidden',
        maxWidth: length,
        maxHeight: length,
        cursor: 'pointer'
      },
      children: hasAvatar ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        className: "w-100",
        src: avatar,
        style: {
          width: length,
          height: length
        },
        alt: props.username.substr(0, 1) || "T"
      }) : props.username.substr(0, 1) || "T"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Avatar);

/***/ }),

/***/ "./resources/js/components/Modal/Modal.js":
/*!************************************************!*\
  !*** ./resources/js/components/Modal/Modal.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var Modal = function Modal(props) {
  var hide = function hide(event) {
    event.stopPropagation();
    props.hideModal();
  };

  return props.visible ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "modal",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "modal-behide",
      onClick: hide
    }), props.showHideIcon ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
      type: "button",
      className: "close position-fixed white",
      "aria-label": "Close",
      onClick: props.hide,
      style: {
        top: 30,
        left: 30
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        "aria-hidden": "true",
        className: "text-white",
        children: "\xD7"
      })
    }) : '', props.children]
  }) : '';
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ })

}]);