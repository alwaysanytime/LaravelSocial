"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_LoadingButton_Button_js"],{

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

/***/ })

}]);