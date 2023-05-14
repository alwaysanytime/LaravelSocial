"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Edit_Edit_js"],{

/***/ "./resources/js/components/Edit/Edit.js":
/*!**********************************************!*\
  !*** ./resources/js/components/Edit/Edit.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_outclick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-outclick */ "./node_modules/react-outclick/dist/index.es.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Edit = function Edit(props) {
  var value = props.value || "";
  var pos = value.indexOf('?tag=');
  if (pos != -1) value = value.substring(0, pos);
  if (value == "My Name" || value == "Link" || value == "Title" || value == "My Bio") value = "";

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      editing = _useState2[0],
      setEditing = _useState2[1];

  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value.length),
      _useState4 = _slicedToArray(_useState3, 2),
      length = _useState4[0],
      setLength = _useState4[1];

  var setEdit = function setEdit(event) {
    setEditing(true);
  };

  var stopEdit = function stopEdit() {
    setEditing(false);
    if (props.placeholder == "Link") inputRef.current.value = inputRef.current.value.toLowerCase();
    var value = inputRef.current.value;
    if (props.type && props.type == "url" && value != "") if (value.indexOf('http://') == -1 && value.indexOf('https://') == -1) inputRef.current.value = "https://" + value;
    if (props.link) props.changeHandler(inputRef.current.value, props.link);else props.onChange(props.field, inputRef.current.value);
  };

  var setCurrentLength = function setCurrentLength(ev) {
    if (ev.keyCode == 13) stopEdit();
    setLength(ev.target.value.length);
  };

  var maxlen = window.innerWidth >= 768 ? 60 : 30;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "edit-container d-flex w-100 align-items-center",
    children: [editing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
      onKeyUp: setCurrentLength,
      autoFocus: true,
      defaultValue: value,
      className: "transparent-input w-100",
      ref: inputRef,
      style: {
        height: 40,
        fontSize: 14,
        fontWeight: props.weight,
        color: props.color
      },
      onBlur: stopEdit,
      maxLength: props.maxLength || 50
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "transparent-input d-flex align-items-center",
      style: {
        paddingLeft: 2,
        paddingTop: 3,
        height: 40,
        fontSize: 14,
        fontWeight: props.weight,
        color: props.color
      },
      children: value == "" || value == "null" || !value ? props.placeholder : value.length > maxlen ? value.substring(0, maxlen - 3) + "..." : value
    }), !editing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
      onClick: setEdit,
      className: "ml-3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
        className: "bi bi-pencil-fill",
        style: {
          fontSize: 16
        }
      })
    }) : '', editing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
      className: "transparent-input d-flex align-items-center",
      style: {
        minWidth: 70,
        paddingLeft: 2,
        paddingTop: 1,
        height: 40,
        fontSize: 14,
        fontWeight: props.weight,
        color: props.color
      },
      children: [length, " / ", props.maxLength || 50]
    }) : '']
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./node_modules/react-outclick/dist/index.es.js":
/*!******************************************************!*\
  !*** ./node_modules/react-outclick/dist/index.es.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


/**
 * @class OnOutsiceClick
 */
var OnOutsiceClick = function (props) {
    var container = props.container, onOutsideClick = props.onOutsideClick, _a = props.mouseEvent, mouseEvent = _a === void 0 ? "click" : _a, _b = props.touchEvent, touchEvent = _b === void 0 ? "touchend" : _b, children = props.children, _c = props.display, display = _c === void 0 ? "block" : _c;
    var style = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
        return {
            display: display,
        };
    }, [display]);
    var node = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    var checkInsideContainer = container && container.current;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var currContainer = checkInsideContainer;
        var handleEvents = function (event) {
            // if clicked inside the component then dont respond
            if (node.current && node.current.contains(event.target)) {
                return;
            }
            // if a container is present and it is clicked inside of that then respond
            if (container && container.current.contains(event.target)) {
                return onOutsideClick(event);
            }
            // respond
            return onOutsideClick(event);
        };
        if (checkInsideContainer) {
            currContainer.addEventListener(mouseEvent, handleEvents);
            currContainer.addEventListener(touchEvent, handleEvents);
        }
        else {
            document.addEventListener(mouseEvent, handleEvents);
            document.addEventListener(touchEvent, handleEvents);
        }
        return function () {
            if (checkInsideContainer) {
                currContainer.removeEventListener(mouseEvent, handleEvents);
                currContainer.removeEventListener(touchEvent, handleEvents);
            }
            else {
                document.removeEventListener(mouseEvent, handleEvents);
                document.removeEventListener(touchEvent, handleEvents);
            }
        };
    }, [container, checkInsideContainer, mouseEvent, onOutsideClick, touchEvent]);
    return ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { style: style, ref: node }, children));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OnOutsiceClick);
//# sourceMappingURL=index.es.js.map


/***/ })

}]);