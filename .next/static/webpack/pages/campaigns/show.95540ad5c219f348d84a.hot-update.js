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
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](3);

                _this.setState({
                  errorMessage: _context.t0.message
                });

              case 15:
                _this.setState({
                  submitInProgress: false
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 12]]);
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
            lineNumber: 36,
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
            lineNumber: 37,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Button, {
          loading: this.state.submitInProgress,
          primary: true,
          type: "submit",
          children: "Contribute"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Message, {
          error: true,
          header: "There is an error when contributing to the contract",
          content: this.state.errorMessage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL3Nob3cuOTU1NDBhZDVjMjE5ZjM0OGQ4NGEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7SUFFTVM7Ozs7Ozs7Ozs7Ozs7Ozs7a1dBRUk7QUFDRkMsTUFBQUEsWUFBWSxFQUFFLEVBRFo7QUFFRkMsTUFBQUEsZ0JBQWdCLEVBQUUsS0FGaEI7QUFHRkMsTUFBQUEsWUFBWSxFQUFFO0FBSFo7OzsyVkFNSyxpQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSEMsZ0JBQUFBLElBREcsR0FDSSxNQUFLQyxLQUFMLENBQVdMLFlBRGY7O0FBRVAsc0JBQUtNLFFBQUwsQ0FBYztBQUFDTCxrQkFBQUEsZ0JBQWdCLEVBQUMsSUFBbEI7QUFBd0JDLGtCQUFBQSxZQUFZLEVBQUM7QUFBckMsaUJBQWQ7O0FBQ0FDLGdCQUFBQSxLQUFLLENBQUNJLGNBQU47QUFITztBQUtHQyxnQkFBQUEsZ0JBTEgsR0FLc0JWLDREQUFRLENBQUMsTUFBS1csS0FBTCxDQUFXQyxPQUFaLENBTDlCO0FBQUE7QUFBQSx1QkFNb0JkLG9FQUFBLEVBTnBCOztBQUFBO0FBTUdpQixnQkFBQUEsUUFOSDtBQUFBO0FBQUEsdUJBT0dMLGdCQUFnQixDQUFDTSxPQUFqQixDQUF5QkMsVUFBekIsR0FBc0NDLElBQXRDLENBQTJDO0FBQUNDLGtCQUFBQSxJQUFJLEVBQUVKLFFBQVEsQ0FBQyxDQUFELENBQWY7QUFBb0JLLGtCQUFBQSxLQUFLLEVBQUV0QixnRUFBQSxDQUFpQixNQUFLUyxLQUFMLENBQVdMLFlBQTVCLEVBQXlDLE9BQXpDO0FBQTNCLGlCQUEzQyxDQVBIOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBU0gsc0JBQUtNLFFBQUwsQ0FBYztBQUFDSixrQkFBQUEsWUFBWSxFQUFFLFlBQUltQjtBQUFuQixpQkFBZDs7QUFURztBQWFQLHNCQUFLZixRQUFMLENBQWM7QUFBQ0wsa0JBQUFBLGdCQUFnQixFQUFDO0FBQWxCLGlCQUFkOztBQWJPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7V0FpQlgsa0JBQVM7QUFBQTs7QUFDTCwwQkFDSSwrREFBQyxvREFBRDtBQUFNLGFBQUssRUFBRSxLQUFLSSxLQUFMLENBQVdILFlBQXhCO0FBQXNDLGdCQUFRLEVBQUUsS0FBS29CLFFBQXJEO0FBQUEsZ0NBQ0ksK0RBQUMsMERBQUQ7QUFBQSxrQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJLCtEQUFDLHFEQUFEO0FBQ0EsaUJBQUssRUFBQyxPQUROO0FBRUEseUJBQWEsRUFBQyxPQUZkO0FBR0EsaUJBQUssRUFBRSxLQUFLakIsS0FBTCxDQUFXTCxZQUhsQjtBQUlBLG9CQUFRLEVBQUUsa0JBQUFHLEtBQUs7QUFBQSxxQkFBRSxNQUFJLENBQUNHLFFBQUwsQ0FBYztBQUFDTixnQkFBQUEsWUFBWSxFQUFFRyxLQUFLLENBQUNvQixNQUFOLENBQWFMO0FBQTVCLGVBQWQsQ0FBRjtBQUFBO0FBSmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFTSSwrREFBQyxzREFBRDtBQUFRLGlCQUFPLEVBQUcsS0FBS2IsS0FBTCxDQUFXSixnQkFBN0I7QUFBOEMsaUJBQU8sTUFBckQ7QUFBc0QsY0FBSSxFQUFDLFFBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRKLGVBVUksK0RBQUMsdURBQUQ7QUFDQSxlQUFLLE1BREw7QUFFQSxnQkFBTSxFQUFDLHFEQUZQO0FBR0EsaUJBQU8sRUFBRSxLQUFLSSxLQUFMLENBQVdIO0FBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFvQkg7Ozs7RUE5Q3dCWDs7QUFpRDdCLCtEQUFlUSxjQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29udHJpYnV0ZUZvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0J1dHRvbiwgRm9ybSwgSW5wdXQsIE1lc3NhZ2V9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi4vcm91dGVzJztcclxuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uL2V0aGVyZXVtL2NhbXBhaWduJztcclxuXHJcbmNsYXNzIGNvbnRyaWJ1dGVGb3JtIGV4dGVuZHMgQ29tcG9uZW50e1xyXG5cclxuICAgIHN0YXRlPXtcclxuICAgICAgICBjb250cmlidXRpb246ICcnLFxyXG4gICAgICAgIHN1Ym1pdEluUHJvZ3Jlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yTWVzc2FnZTogJycsXHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpPT57XHJcbiAgICAgICAgbGV0IGNvbnQgPSB0aGlzLnN0YXRlLmNvbnRyaWJ1dGlvbjtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdWJtaXRJblByb2dyZXNzOnRydWUsIGVycm9yTWVzc2FnZTonJ30pO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgQ2FtcGFpZ25Db250cmFjdCA9IENhbXBhaWduKHRoaXMucHJvcHMuYWRkcmVzcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICAgICAgYXdhaXQgQ2FtcGFpZ25Db250cmFjdC5tZXRob2RzLmNvbnRyaWJ1dGUoKS5zZW5kKHtmcm9tOiBhY2NvdW50c1swXSwgdmFsdWU6IHdlYjMudXRpbHMudG9XZWkodGhpcy5zdGF0ZS5jb250cmlidXRpb24sJ2V0aGVyJyl9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZX0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3N1Ym1pdEluUHJvZ3Jlc3M6ZmFsc2V9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPEZvcm0gZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QW1vdW50IHRvIENvbnRyaWJ1dGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImV0aGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNvbnRyaWJ1dGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQ9PnRoaXMuc2V0U3RhdGUoe2NvbnRyaWJ1dGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlfSl9Lz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gbG9hZGluZyA9e3RoaXMuc3RhdGUuc3VibWl0SW5Qcm9ncmVzc31wcmltYXJ5IHR5cGU9XCJzdWJtaXRcIj5Db250cmlidXRlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8TWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgZXJyb3JcclxuICAgICAgICAgICAgICAgIGhlYWRlcj1cIlRoZXJlIGlzIGFuIGVycm9yIHdoZW4gY29udHJpYnV0aW5nIHRvIHRoZSBjb250cmFjdFwiXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRyaWJ1dGVGb3JtO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwid2ViMyIsIlJvdXRlciIsIkNhbXBhaWduIiwiY29udHJpYnV0ZUZvcm0iLCJjb250cmlidXRpb24iLCJzdWJtaXRJblByb2dyZXNzIiwiZXJyb3JNZXNzYWdlIiwiZXZlbnQiLCJjb250Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInByZXZlbnREZWZhdWx0IiwiQ2FtcGFpZ25Db250cmFjdCIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY29udHJpYnV0ZSIsInNlbmQiLCJmcm9tIiwidmFsdWUiLCJ1dGlscyIsInRvV2VpIiwibWVzc2FnZSIsIm9uU3VibWl0IiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==