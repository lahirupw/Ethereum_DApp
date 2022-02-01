"use strict";
self["webpackHotUpdate_N_E"]("pages/campaigns/show",{

/***/ "./components/contributeForm.js":
/*!**************************************!*\
  !*** ./components/contributeForm.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ethereum/campaign */ "./ethereum/campaign.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
/* module decorator */ module = __webpack_require__.hmd(module);








var _jsxFileName = "D:\\OneDrive - Informatics Holdings\\Desktop\\Kickstart\\components\\contributeForm.js";


function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var contributeForm = /*#__PURE__*/function (_Component) {
  (0,D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(contributeForm, _Component);

  var _super = _createSuper(contributeForm);

  function contributeForm() {
    var _this;

    (0,D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, contributeForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "state", {
      contribution: '',
      submitInProgress: false,
      errorMessage: ''
    });

    (0,D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "onSubmit", /*#__PURE__*/function () {
      var _ref = (0,D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee(event) {
        var cont, CampaignContract, accounts;
        return D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cont = _this.state.contribution;

                _this.setState({
                  submitInProgress: true,
                  errorMessage: ''
                });

                event.preventDefault();
                _context.prev = 3;
                CampaignContract = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_12__.default)(_this.props.address);
                _context.next = 7;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_10__.default.eth.getAccounts();

              case 7:
                accounts = _context.sent;
                _context.next = 10;
                return CampaignContract.methods.contribute().send({
                  from: accounts[0],
                  value: _ethereum_web3__WEBPACK_IMPORTED_MODULE_10__.default.utils.toWei(_this.state.contribution, 'ether')
                });

              case 10:
                _routes__WEBPACK_IMPORTED_MODULE_11___default().push();
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](3);

                _this.setState({
                  errorMessage: _context.t0.message
                });

              case 16:
                _this.setState({
                  submitInProgress: false
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 13]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  (0,D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(contributeForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Form, {
        error: this.state.errorMessage,
        onSubmit: this.onSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Form.Field, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("label", {
            children: "Amount to Contribute"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Input, {
            label: "ether",
            labelPosition: "right",
            value: this.state.contribution,
            onChange: function onChange(event) {
              return _this2.setState({
                contribution: event.target.value
              });
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Button, {
          loading: this.state.submitInProgress,
          primary: true,
          type: "submit",
          children: "Contribute"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Message, {
          error: true,
          header: "There is an error when contributing to the contract",
          content: this.state.errorMessage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }, this);
    }
  }]);

  return contributeForm;
}(react__WEBPACK_IMPORTED_MODULE_9__.Component);

/* harmony default export */ __webpack_exports__["default"] = (contributeForm);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL3Nob3cuNzE3M2VlNTNkNmE1MWEwNjI5MWEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7SUFFTVM7Ozs7Ozs7Ozs7Ozs7Ozs7a1dBRUk7QUFDRkMsTUFBQUEsWUFBWSxFQUFFLEVBRFo7QUFFRkMsTUFBQUEsZ0JBQWdCLEVBQUUsS0FGaEI7QUFHRkMsTUFBQUEsWUFBWSxFQUFFO0FBSFo7OzsyVkFNSyxpQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSEMsZ0JBQUFBLElBREcsR0FDSSxNQUFLQyxLQUFMLENBQVdMLFlBRGY7O0FBRVAsc0JBQUtNLFFBQUwsQ0FBYztBQUFDTCxrQkFBQUEsZ0JBQWdCLEVBQUMsSUFBbEI7QUFBd0JDLGtCQUFBQSxZQUFZLEVBQUM7QUFBckMsaUJBQWQ7O0FBQ0FDLGdCQUFBQSxLQUFLLENBQUNJLGNBQU47QUFITztBQUtHQyxnQkFBQUEsZ0JBTEgsR0FLc0JWLDREQUFRLENBQUMsTUFBS1csS0FBTCxDQUFXQyxPQUFaLENBTDlCO0FBQUE7QUFBQSx1QkFNb0JkLG9FQUFBLEVBTnBCOztBQUFBO0FBTUdpQixnQkFBQUEsUUFOSDtBQUFBO0FBQUEsdUJBT0dMLGdCQUFnQixDQUFDTSxPQUFqQixDQUF5QkMsVUFBekIsR0FBc0NDLElBQXRDLENBQTJDO0FBQUNDLGtCQUFBQSxJQUFJLEVBQUVKLFFBQVEsQ0FBQyxDQUFELENBQWY7QUFBb0JLLGtCQUFBQSxLQUFLLEVBQUV0QixnRUFBQSxDQUFpQixNQUFLUyxLQUFMLENBQVdMLFlBQTVCLEVBQXlDLE9BQXpDO0FBQTNCLGlCQUEzQyxDQVBIOztBQUFBO0FBUUhILGdCQUFBQSxvREFBQTtBQVJHO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQVVILHNCQUFLUyxRQUFMLENBQWM7QUFBQ0osa0JBQUFBLFlBQVksRUFBRSxZQUFJb0I7QUFBbkIsaUJBQWQ7O0FBVkc7QUFjUCxzQkFBS2hCLFFBQUwsQ0FBYztBQUFDTCxrQkFBQUEsZ0JBQWdCLEVBQUM7QUFBbEIsaUJBQWQ7O0FBZE87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztXQWtCWCxrQkFBUztBQUFBOztBQUNMLDBCQUNJLCtEQUFDLG9EQUFEO0FBQU0sYUFBSyxFQUFFLEtBQUtJLEtBQUwsQ0FBV0gsWUFBeEI7QUFBc0MsZ0JBQVEsRUFBRSxLQUFLcUIsUUFBckQ7QUFBQSxnQ0FDSSwrREFBQywwREFBRDtBQUFBLGtDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUksK0RBQUMscURBQUQ7QUFDQSxpQkFBSyxFQUFDLE9BRE47QUFFQSx5QkFBYSxFQUFDLE9BRmQ7QUFHQSxpQkFBSyxFQUFFLEtBQUtsQixLQUFMLENBQVdMLFlBSGxCO0FBSUEsb0JBQVEsRUFBRSxrQkFBQUcsS0FBSztBQUFBLHFCQUFFLE1BQUksQ0FBQ0csUUFBTCxDQUFjO0FBQUNOLGdCQUFBQSxZQUFZLEVBQUVHLEtBQUssQ0FBQ3FCLE1BQU4sQ0FBYU47QUFBNUIsZUFBZCxDQUFGO0FBQUE7QUFKZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQVNJLCtEQUFDLHNEQUFEO0FBQVEsaUJBQU8sRUFBRyxLQUFLYixLQUFMLENBQVdKLGdCQUE3QjtBQUErQyxpQkFBTyxNQUF0RDtBQUF1RCxjQUFJLEVBQUMsUUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEosZUFVSSwrREFBQyx1REFBRDtBQUNBLGVBQUssTUFETDtBQUVBLGdCQUFNLEVBQUMscURBRlA7QUFHQSxpQkFBTyxFQUFFLEtBQUtJLEtBQUwsQ0FBV0g7QUFIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQW9CSDs7OztFQS9Dd0JYOztBQWtEN0IsK0RBQWVRLGNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250cmlidXRlRm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QnV0dG9uLCBGb3JtLCBJbnB1dCwgTWVzc2FnZX0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICcuLi9yb3V0ZXMnO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xyXG5cclxuY2xhc3MgY29udHJpYnV0ZUZvcm0gZXh0ZW5kcyBDb21wb25lbnR7XHJcblxyXG4gICAgc3RhdGU9e1xyXG4gICAgICAgIGNvbnRyaWJ1dGlvbjogJycsXHJcbiAgICAgICAgc3VibWl0SW5Qcm9ncmVzczogZmFsc2UsXHJcbiAgICAgICAgZXJyb3JNZXNzYWdlOiAnJyxcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCk9PntcclxuICAgICAgICBsZXQgY29udCA9IHRoaXMuc3RhdGUuY29udHJpYnV0aW9uO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3N1Ym1pdEluUHJvZ3Jlc3M6dHJ1ZSwgZXJyb3JNZXNzYWdlOicnfSk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBDYW1wYWlnbkNvbnRyYWN0ID0gQ2FtcGFpZ24odGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgICAgICBhd2FpdCBDYW1wYWlnbkNvbnRyYWN0Lm1ldGhvZHMuY29udHJpYnV0ZSgpLnNlbmQoe2Zyb206IGFjY291bnRzWzBdLCB2YWx1ZTogd2ViMy51dGlscy50b1dlaSh0aGlzLnN0YXRlLmNvbnRyaWJ1dGlvbiwnZXRoZXInKX0pO1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2V9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdWJtaXRJblByb2dyZXNzOmZhbHNlfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxGb3JtIGVycm9yPXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFtb3VudCB0byBDb250cmlidXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJldGhlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jb250cmlidXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50PT50aGlzLnNldFN0YXRlKHtjb250cmlidXRpb246IGV2ZW50LnRhcmdldC52YWx1ZX0pfS8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGxvYWRpbmcgPXt0aGlzLnN0YXRlLnN1Ym1pdEluUHJvZ3Jlc3N9IHByaW1hcnkgdHlwZT1cInN1Ym1pdFwiPkNvbnRyaWJ1dGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICBlcnJvclxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPVwiVGhlcmUgaXMgYW4gZXJyb3Igd2hlbiBjb250cmlidXRpbmcgdG8gdGhlIGNvbnRyYWN0XCJcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG5cclxuICAgICAgICApO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udHJpYnV0ZUZvcm07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJ3ZWIzIiwiUm91dGVyIiwiQ2FtcGFpZ24iLCJjb250cmlidXRlRm9ybSIsImNvbnRyaWJ1dGlvbiIsInN1Ym1pdEluUHJvZ3Jlc3MiLCJlcnJvck1lc3NhZ2UiLCJldmVudCIsImNvbnQiLCJzdGF0ZSIsInNldFN0YXRlIiwicHJldmVudERlZmF1bHQiLCJDYW1wYWlnbkNvbnRyYWN0IiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjb250cmlidXRlIiwic2VuZCIsImZyb20iLCJ2YWx1ZSIsInV0aWxzIiwidG9XZWkiLCJwdXNoIiwibWVzc2FnZSIsIm9uU3VibWl0IiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==