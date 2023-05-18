"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Modal_Modal_js"],{

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