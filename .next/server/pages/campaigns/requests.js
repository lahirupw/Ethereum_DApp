(() => {
var exports = {};
exports.id = "pages/campaigns/requests";
exports.ids = ["pages/campaigns/requests"];
exports.modules = {

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\OneDrive - Informatics Holdings\\Desktop\\Kickstart\\components\\header.js";




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu, {
    style: {
      marginTop: '20px'
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_2__.Link, {
      route: "/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
        className: "item",
        children: "CrowdCoin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Menu, {
      position: "right",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_2__.Link, {
        route: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
          className: "item",
          children: "Campaigns"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_2__.Link, {
        route: "/campaigns/new",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
          className: "item",
          children: "+"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
});

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./components/header.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\OneDrive - Informatics Holdings\\Desktop\\Kickstart\\components\\layout.js";


 //You can directly use below semetic-ui css section into your application so you don't need to import the CSS through a CDN
//import 'semantic-ui-css/semantic.min.css';



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_header__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, undefined), props.children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined);
});

/***/ }),

/***/ "./pages/campaigns/requests/index.js":
/*!*******************************************!*\
  !*** ./pages/campaigns/requests/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/layout */ "./components/layout.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\OneDrive - Informatics Holdings\\Desktop\\Kickstart\\pages\\campaigns\\requests\\index.js";






class RequestIndex extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static async getInitialProps(props) {
    const {
      address
    } = props.query;
    return {
      address
    };
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
        children: "Request List"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_3__.Link, {
        route: `/campaigns/${this.props.address}/requests/new`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
            primary: true,
            children: "Add Request"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequestIndex);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const routes = __webpack_require__(/*! next-routes */ "next-routes")();

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');
module.exports = routes;

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("semantic-ui-react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/campaigns/requests/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0MsMkJBSHBDLEVBSUNBLEdBSkQsQ0FJSyxrQ0FKTCxFQUl5Qyx5QkFKekM7QUFNQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSixNQUFqQjs7Ozs7Ozs7Ozs7QUNSQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2tpY2tzdGFydC8uL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL2tpY2tzdGFydC8uL2NvbXBvbmVudHMvbGF5b3V0LmpzIiwid2VicGFjazovL2tpY2tzdGFydC8uL3BhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0L2V4dGVybmFsIFwibmV4dC1yb3V0ZXNcIiIsIndlYnBhY2s6Ly9raWNrc3RhcnQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9raWNrc3RhcnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2tpY2tzdGFydC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2tpY2tzdGFydC9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWVudSBzdHlsZT17e21hcmdpblRvcDogJzIwcHgnfX0+XHJcbiAgICAgIDxMaW5rIHJvdXRlPVwiL1wiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj5Dcm93ZENvaW48L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8TWVudS5NZW51IHBvc2l0aW9uPVwicmlnaHRcIj5cclxuICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9J2l0ZW0nPkNhbXBhaWduczwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL2NhbXBhaWducy9uZXdcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiPis8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvTWVudS5NZW51PlxyXG4gICAgPC9NZW51PlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XHJcbi8vWW91IGNhbiBkaXJlY3RseSB1c2UgYmVsb3cgc2VtZXRpYy11aSBjc3Mgc2VjdGlvbiBpbnRvIHlvdXIgYXBwbGljYXRpb24gc28geW91IGRvbid0IG5lZWQgdG8gaW1wb3J0IHRoZSBDU1MgdGhyb3VnaCBhIENETlxyXG4vL2ltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpPT57XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zZW1hbnRpYy11aS8yLjIuMTIvc2VtYW50aWMubWluLmNzc1wiPjwvbGluaz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG5cclxufSIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IHtCdXR0b259IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHtMaW5rfSBmcm9tJy4uLy4uLy4uL3JvdXRlcyc7XHJcblxyXG5jbGFzcyBSZXF1ZXN0SW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpe1xyXG4gICAgICAgIGNvbnN0IHthZGRyZXNzfSA9IHByb3BzLnF1ZXJ5O1xyXG5cclxuICAgICAgICByZXR1cm4ge2FkZHJlc3N9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxoMj5SZXF1ZXN0IExpc3Q8L2gyPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e2AvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfS9yZXF1ZXN0cy9uZXdgfT5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeT5BZGQgUmVxdWVzdDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RJbmRleDsiLCJjb25zdCByb3V0ZXMgPSAgcmVxdWlyZSgnbmV4dC1yb3V0ZXMnKSgpO1xyXG5cclxucm91dGVzXHJcbi5hZGQoJy9jYW1wYWlnbnMvbmV3JywnL2NhbXBhaWducy9uZXcnKVxyXG4uYWRkKCcvY2FtcGFpZ25zLzphZGRyZXNzJywnL2NhbXBhaWducy9zaG93JylcclxuLmFkZCgnL2NhbXBhaWducy86YWRkcmVzcy9yZXF1ZXN0cycsJy9jYW1wYWlnbnMvcmVxdWVzdHMvaW5kZXgnKVxyXG4uYWRkKCcvY2FtcGFpZ25zLzphZGRyZXNzL3JlcXVlc3RzL25ldycsICcvY2FtcGFpZ25zL3JlcXVlc3RzL25ldycpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXM7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcm91dGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwiTWVudSIsIkxpbmsiLCJtYXJnaW5Ub3AiLCJDb250YWluZXIiLCJIZWFkZXIiLCJIZWFkIiwicHJvcHMiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIlJlcXVlc3RJbmRleCIsImdldEluaXRpYWxQcm9wcyIsImFkZHJlc3MiLCJxdWVyeSIsInJlbmRlciIsInJvdXRlcyIsInJlcXVpcmUiLCJhZGQiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==