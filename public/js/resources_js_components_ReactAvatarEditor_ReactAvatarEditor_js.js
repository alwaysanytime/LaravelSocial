(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_ReactAvatarEditor_ReactAvatarEditor_js"],{

/***/ "./resources/js/components/Modal/Modal.js":
/*!************************************************!*\
  !*** ./resources/js/components/Modal/Modal.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ "./resources/js/components/ReactAvatarEditor/ReactAvatarEditor.js":
/*!************************************************************************!*\
  !*** ./resources/js/components/ReactAvatarEditor/ReactAvatarEditor.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_avatar_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-avatar-editor */ "./node_modules/react-avatar-editor/dist/index.js");
/* harmony import */ var react_avatar_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_avatar_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Modal/Modal */ "./resources/js/components/Modal/Modal.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var AvatarEditor = function AvatarEditor(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    image = _useState2[0],
    setImage = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState4 = _slicedToArray(_useState3, 2),
    scale = _useState4[0],
    setScale = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      x: 0.5,
      y: 0.5
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    position = _useState6[0],
    setPosition = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    borderRadius = _useState8[0],
    setBorderRadius = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(300),
    _useState10 = _slicedToArray(_useState9, 2),
    width = _useState10[0],
    setWidth = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(300),
    _useState12 = _slicedToArray(_useState11, 2),
    height = _useState12[0],
    setHeight = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState14 = _slicedToArray(_useState13, 2),
    rotate = _useState14[0],
    setRotate = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    allowZoomOut = _useState16[0],
    setAllowZoomOut = _useState16[1];
  var handleScale = function handleScale(e) {
    var scale = parseFloat(e.target.value);
    setScale(scale);
  };
  var handlePositionChange = function handlePositionChange(position) {
    setPosition(position);
  };
  var onClickSave = function onClickSave() {
    var canvasScaled = editor.getImageScaledToCanvas();
    var url = canvasScaled.toDataURL('image/jpeg');
    props.upload(url);
    props.hideModal();
  };
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState18 = _slicedToArray(_useState17, 2),
    editor = _useState18[0],
    setEditor = _useState18[1];
  var setEditorRef = function setEditorRef(_editor) {
    return setEditor(_editor);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    visible: props.visible,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      style: {
        backgroundColor: 'white',
        borderRadius: 10
      },
      className: "d-flex p-3 justify-content-center flex-column",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        "class": "d-flex w-100 justify-content-between mb-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          className: "btn btn-outline-dark mr-2",
          onClick: function onClick() {
            return props.hideModal();
          },
          style: {
            borderRadius: 20,
            width: 100
          },
          children: "Cancel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          className: "btn btn-primary",
          onClick: function onClick() {
            return onClickSave();
          },
          style: {
            borderRadius: 20,
            width: 100
          },
          children: "Save"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        children: props.avatar ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((react_avatar_editor__WEBPACK_IMPORTED_MODULE_1___default()), {
          ref: setEditorRef,
          scale: parseFloat(scale),
          width: width,
          height: height,
          position: position,
          onPositionChange: handlePositionChange,
          rotate: parseFloat(rotate),
          borderRadius: width / (100 / borderRadius),
          image: props.avatar,
          className: "editor-canvas"
        }) : ''
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
        name: "scale",
        type: "range",
        onChange: handleScale,
        min: allowZoomOut ? '0.1' : '1',
        max: "2",
        step: "0.01",
        defaultValue: "1"
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AvatarEditor);

/***/ }),

/***/ "./node_modules/react-avatar-editor/dist/index.js":
/*!********************************************************!*\
  !*** ./node_modules/react-avatar-editor/dist/index.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),__webpack_require__(/*! react */ "./node_modules/react/index.js")):0}(this,function(e,t){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=o(e),i=o(t);function r(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function a(t,e){var o,n=Object.keys(t);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(t),e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)),n}function y(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach(function(e){s(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){if(null==e)return{};var o,n=function(e,t){if(null==e)return{};for(var o,n={},a=Object.keys(e),r=0;r<a.length;r++)o=a[r],0<=t.indexOf(o)||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols)for(var a=Object.getOwnPropertySymbols(e),r=0;r<a.length;r++)o=a[r],0<=t.indexOf(o)||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o]);return n}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(r){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,o,n,a=h(r);return t=i?(e=h(this).constructor,Reflect.construct(a,arguments,e)):a.apply(this,arguments),o=this,!(n=t)||"object"!=typeof n&&"function"!=typeof n?d(o):n}}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var o=[],n=!0,a=!1,r=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(o.push(i.value),!t||o.length!==t);n=!0);}catch(e){a=!0,r=e}finally{try{n||null==s.return||s.return()}finally{if(a)throw r}}return o}(e,t)||g(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){if(e){if("string"==typeof e)return f(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function v(a,r){return new Promise(function(e,t){var o,n=new Image;n.onload=function(){return e(n)},n.onerror=t,!1==(null!==(o=a)&&!!o.match(/^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i))&&r&&(n.crossOrigin=r),n.src=a})}var b,w=!("undefined"==typeof window||"undefined"==typeof navigator||!("ontouchstart"in window||0<navigator.msMaxTouchPoints)),M="undefined"!=typeof File,O={touch:{react:{down:"onTouchStart",mouseDown:"onMouseDown",drag:"onTouchMove",move:"onTouchMove",mouseMove:"onMouseMove",up:"onTouchEnd",mouseUp:"onMouseUp"},native:{down:"touchstart",mouseDown:"mousedown",drag:"touchmove",move:"touchmove",mouseMove:"mousemove",up:"touchend",mouseUp:"mouseup"}},desktop:{react:{down:"onMouseDown",drag:"onDragOver",move:"onMouseMove",up:"onMouseUp"},native:{down:"mousedown",drag:"dragStart",move:"mousemove",up:"mouseup"}}},I=w?O.touch:O.desktop,P="undefined"!=typeof window&&window.devicePixelRatio?window.devicePixelRatio:1,C={x:.5,y:.5},x=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(a,i["default"].Component);var e,t,o,n=p(a);function a(e){var v;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),s(d(v=n.call(this,e)),"state",{drag:!1,my:null,mx:null,image:C}),s(d(v),"handleImageReady",function(e){var t=v.getInitialSize(e.width,e.height);t.resource=e,t.x=.5,t.y=.5,t.backgroundColor=v.props.backgroundColor,v.setState({drag:!1,image:t},v.props.onImageReady),v.props.onLoadSuccess(t)}),s(d(v),"clearImage",function(){v.canvas.getContext("2d").clearRect(0,0,v.canvas.width,v.canvas.height),v.setState({image:C})}),s(d(v),"handleMouseDown",function(e){(e=e||window.event).preventDefault(),v.setState({drag:!0,mx:null,my:null})}),s(d(v),"handleMouseUp",function(){v.state.drag&&(v.setState({drag:!1}),v.props.onMouseUp())}),s(d(v),"handleMouseMove",function(e){var t,o,n,a,r,i,s,u,h,c,l,d,p,g,f,m;e=e||window.event,!1!==v.state.drag&&(e.preventDefault(),n={mx:t=e.targetTouches?e.targetTouches[0].pageX:e.clientX,my:o=e.targetTouches?e.targetTouches[0].pageY:e.clientY},m=v.props.rotate,m=(m%=360)<0?m+360:m,v.state.mx&&v.state.my&&(a=v.state.mx-t,r=v.state.my-o,i=v.state.image.width*v.props.scale,s=v.state.image.height*v.props.scale,h=(u=v.getCroppingRect()).x,c=u.y,h*=i,c*=s,l=function(e){return e*(Math.PI/180)},d=Math.cos(l(m)),g=c+-a*(p=Math.sin(l(m)))+r*d,f={x:(h+a*d+r*p)/i+1/v.props.scale*v.getXScale()/2,y:g/s+1/v.props.scale*v.getYScale()/2},v.props.onPositionChange(f),n.image=y(y({},v.state.image),f)),v.setState(n),v.props.onMouseMove(e))}),s(d(v),"setCanvas",function(e){v.canvas=e}),v.canvas=null,v}return e=a,(t=[{key:"componentDidMount",value:function(){this.props.disableHiDPIScaling&&(P=1);var e,t,o=this.canvas.getContext("2d");this.props.image&&this.loadImage(this.props.image),this.paint(o),document&&(e=!!function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){t=!1}return t}()&&{passive:!1},t=I.native,document.addEventListener(t.move,this.handleMouseMove,e),document.addEventListener(t.up,this.handleMouseUp,e),w&&(document.addEventListener(t.mouseMove,this.handleMouseMove,e),document.addEventListener(t.mouseUp,this.handleMouseUp,e)))}},{key:"componentDidUpdate",value:function(e,t){this.props.image&&this.props.image!==e.image||this.props.width!==e.width||this.props.height!==e.height||this.props.backgroundColor!==e.backgroundColor?this.loadImage(this.props.image):this.props.image||t.image===C||this.clearImage();var o=this.canvas.getContext("2d");o.clearRect(0,0,this.canvas.width,this.canvas.height),this.paint(o),this.paintImage(o,this.state.image,this.props.border),e.image===this.props.image&&e.width===this.props.width&&e.height===this.props.height&&e.position===this.props.position&&e.scale===this.props.scale&&e.rotate===this.props.rotate&&t.my===this.state.my&&t.mx===this.state.mx&&t.image.x===this.state.image.x&&t.image.y===this.state.image.y&&t.backgroundColor===this.state.backgroundColor||this.props.onImageChange()}},{key:"componentWillUnmount",value:function(){var e;document&&(e=I.native,document.removeEventListener(e.move,this.handleMouseMove,!1),document.removeEventListener(e.up,this.handleMouseUp,!1),w&&(document.removeEventListener(e.mouseMove,this.handleMouseMove,!1),document.removeEventListener(e.mouseUp,this.handleMouseUp,!1)))}},{key:"isVertical",value:function(){return!this.props.disableCanvasRotation&&this.props.rotate%180!=0}},{key:"getBorders",value:function(e){var t=0<arguments.length&&void 0!==e?e:this.props.border;return Array.isArray(t)?t:[t,t]}},{key:"getDimensions",value:function(){var e=this.props,t=e.width,o=e.height,n=e.rotate,a=e.border,r={},i=m(this.getBorders(a),2),s=i[0],u=i[1],h=t,c=o;return this.isVertical()?(r.width=c,r.height=h):(r.width=h,r.height=c),r.width+=2*s,r.height+=2*u,{canvas:r,rotate:n,width:t,height:o,border:a}}},{key:"getImage",value:function(){var e=this.getCroppingRect(),t=this.state.image;e.x*=t.resource.width,e.y*=t.resource.height,e.width*=t.resource.width,e.height*=t.resource.height;var o=document.createElement("canvas");this.isVertical()?(o.width=e.height,o.height=e.width):(o.width=e.width,o.height=e.height);var n=o.getContext("2d");return n.translate(o.width/2,o.height/2),n.rotate(this.props.rotate*Math.PI/180),n.translate(-o.width/2,-o.height/2),this.isVertical()&&n.translate((o.width-o.height)/2,(o.height-o.width)/2),t.backgroundColor&&(n.fillStyle=t.backgroundColor,n.fillRect(-e.x,-e.y,t.resource.width,t.resource.height)),n.drawImage(t.resource,-e.x,-e.y),o}},{key:"getImageScaledToCanvas",value:function(){var e=this.getDimensions(),t=e.width,o=e.height,n=document.createElement("canvas");return this.isVertical()?(n.width=o,n.height=t):(n.width=t,n.height=o),this.paintImage(n.getContext("2d"),this.state.image,0,1),n}},{key:"getXScale",value:function(){var e=this.props.width/this.props.height,t=this.state.image.width/this.state.image.height;return Math.min(1,e/t)}},{key:"getYScale",value:function(){var e=this.props.height/this.props.width,t=this.state.image.height/this.state.image.width;return Math.min(1,e/t)}},{key:"getCroppingRect",value:function(){var e=this.props.position||{x:this.state.image.x,y:this.state.image.y},t=1/this.props.scale*this.getXScale(),o=1/this.props.scale*this.getYScale(),n={x:e.x-t/2,y:e.y-o/2,width:t,height:o},a=0,r=1-n.width,i=0,s=1-n.height;return(this.props.disableBoundaryChecks||1<t||1<o)&&(a=-n.width,i=-n.height,s=r=1),y(y({},n),{},{x:Math.max(a,Math.min(n.x,r)),y:Math.max(i,Math.min(n.y,s))})}},{key:"loadImage",value:function(e){var t;M&&e instanceof File?this.loadingImage=(t=e,new Promise(function(o,n){var e=new FileReader;e.onload=function(e){try{var t=v(e.target.result);o(t)}catch(e){n(e)}},e.readAsDataURL(t)}).then(this.handleImageReady).catch(this.props.onLoadFailure)):"string"==typeof e&&(this.loadingImage=v(e,this.props.crossOrigin).then(this.handleImageReady).catch(this.props.onLoadFailure))}},{key:"getInitialSize",value:function(e,t){var o,n,a=this.getDimensions();return t/e<a.height/a.width?n=e*((o=this.getDimensions().height)/t):o=t*((n=this.getDimensions().width)/e),{height:o,width:n}}},{key:"paintImage",value:function(e,t,o,n){var a,r=3<arguments.length&&void 0!==n?n:P;t.resource&&(a=this.calculatePosition(t,o),e.save(),e.translate(e.canvas.width/2,e.canvas.height/2),e.rotate(this.props.rotate*Math.PI/180),e.translate(-e.canvas.width/2,-e.canvas.height/2),this.isVertical()&&e.translate((e.canvas.width-e.canvas.height)/2,(e.canvas.height-e.canvas.width)/2),e.scale(r,r),e.globalCompositeOperation="destination-over",e.drawImage(t.resource,a.x,a.y,a.width,a.height),t.backgroundColor&&(e.fillStyle=t.backgroundColor,e.fillRect(a.x,a.y,a.width,a.height)),e.restore())}},{key:"calculatePosition",value:function(e,t){e=e||this.state.image;var o=m(this.getBorders(t),2),n=o[0],a=o[1],r=this.getCroppingRect(),i=e.width*this.props.scale,s=e.height*this.props.scale,u=-r.x*i,h=-r.y*s;return this.isVertical()?(u+=a,h+=n):(u+=n,h+=a),{x:u,y:h,height:s,width:i}}},{key:"paint",value:function(e){e.save(),e.scale(P,P),e.translate(0,0),e.fillStyle="rgba("+this.props.color.slice(0,4).join(",")+")";var t,o,n,a,r,i,s,u,h=this.props.borderRadius,c=this.getDimensions(),l=m(this.getBorders(c.border),2),d=l[0],p=l[1],g=c.canvas.height,f=c.canvas.width,h=Math.max(h,0);h=Math.min(h,f/2-d,g/2-p),e.beginPath(),t=e,a=f-2*(o=d),r=g-2*(n=p),0===(i=h)?t.rect(o,n,a,r):(s=a-i,u=r-i,t.translate(o,n),t.arc(i,i,i,Math.PI,1.5*Math.PI),t.lineTo(s,0),t.arc(s,i,i,1.5*Math.PI,2*Math.PI),t.lineTo(a,u),t.arc(s,u,i,2*Math.PI,.5*Math.PI),t.lineTo(i,r),t.arc(i,u,i,.5*Math.PI,Math.PI),t.translate(-o,-n)),e.rect(f,0,-f,g),e.fill("evenodd"),e.restore()}},{key:"render",value:function(){var e=this.props,t=(e.scale,e.rotate,e.image,e.border,e.borderRadius,e.width,e.height,e.position,e.color,e.backgroundColor,e.style),o=(e.crossOrigin,e.onLoadFailure,e.onLoadSuccess,e.onImageReady,e.onImageChange,e.onMouseUp,e.onMouseMove,e.onPositionChange,e.disableBoundaryChecks,e.disableHiDPIScaling,e.disableCanvasRotation,l(e,["scale","rotate","image","border","borderRadius","width","height","position","color","backgroundColor","style","crossOrigin","onLoadFailure","onLoadSuccess","onImageReady","onImageChange","onMouseUp","onMouseMove","onPositionChange","disableBoundaryChecks","disableHiDPIScaling","disableCanvasRotation"])),n=this.getDimensions(),a={width:n.canvas.width,height:n.canvas.height,cursor:this.state.drag?"grabbing":"grab",touchAction:"none"},r={width:n.canvas.width*P,height:n.canvas.height*P,style:y(y({},a),t)};return r[I.react.down]=this.handleMouseDown,w&&(r[I.react.mouseDown]=this.handleMouseDown),i.default.createElement("canvas",u({ref:this.setCanvas},r,o))}}])&&r(e.prototype,t),o&&r(e,o),a}();return s(x,"propTypes",{scale:n.default.number,rotate:n.default.number,image:n.default.oneOfType([n.default.string].concat(function(e){if(Array.isArray(e))return f(e)}(b=M?[n.default.instanceOf(File)]:[])||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(b)||g(b)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),border:n.default.oneOfType([n.default.number,n.default.arrayOf(n.default.number)]),borderRadius:n.default.number,width:n.default.number,height:n.default.number,position:n.default.shape({x:n.default.number,y:n.default.number}),color:n.default.arrayOf(n.default.number),backgroundColor:n.default.string,crossOrigin:n.default.oneOf(["","anonymous","use-credentials"]),onLoadFailure:n.default.func,onLoadSuccess:n.default.func,onImageReady:n.default.func,onImageChange:n.default.func,onMouseUp:n.default.func,onMouseMove:n.default.func,onPositionChange:n.default.func,disableBoundaryChecks:n.default.bool,disableHiDPIScaling:n.default.bool,disableCanvasRotation:n.default.bool}),s(x,"defaultProps",{scale:1,rotate:0,border:25,borderRadius:0,width:200,height:200,color:[0,0,0,.5],onLoadFailure:function(){},onLoadSuccess:function(){},onImageReady:function(){},onImageChange:function(){},onMouseUp:function(){},onMouseMove:function(){},onPositionChange:function(){},disableBoundaryChecks:!1,disableHiDPIScaling:!1,disableCanvasRotation:!0}),x});


/***/ })

}]);