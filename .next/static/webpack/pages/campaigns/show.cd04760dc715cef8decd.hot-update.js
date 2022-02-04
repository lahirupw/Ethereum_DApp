"use strict";
self["webpackHotUpdate_N_E"]("pages/campaigns/show",{

/***/ "./pages/campaigns/show.js":
/*!*********************************!*\
  !*** ./pages/campaigns/show.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ethereum/campaign */ "./ethereum/campaign.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _components_contributeForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/contributeForm */ "./components/contributeForm.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "D:\\OneDrive - Informatics Holdings\\Desktop\\Kickstart\\pages\\campaigns\\show.js";


function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }










var CampaignShowing = /*#__PURE__*/function (_Component) {
  (0,D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(CampaignShowing, _Component);

  var _super = _createSuper(CampaignShowing);

  function CampaignShowing() {
    (0,D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, CampaignShowing);

    return _super.apply(this, arguments);
  }

  (0,D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(CampaignShowing, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_7__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Grid, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Grid.Row, {
            columns: 2,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Grid.Column, {
              width: 10,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("h3", {
                children: "Campaign Details"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 15
              }, this), this.renderCards()]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Grid.Column, {
              width: 4,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_contributeForm__WEBPACK_IMPORTED_MODULE_11__.default, {
                address: this.props.CamapignAddress
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Grid.Row, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Grid.Column, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_12__.Link, {
                route: "/campaigns/".concat(this.props.CamapignAddress, "/requests"),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("a", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Button, {
                    primary: true,
                    children: "View Requests"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 44,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7
      }, this);
    }
  }, {
    key: "renderCards",
    value: function renderCards() {
      var _this$props = this.props,
          MinimumContribution = _this$props.MinimumContribution,
          CampaignBalance = _this$props.CampaignBalance,
          NumberOfRequests = _this$props.NumberOfRequests,
          ApproverCount = _this$props.ApproverCount,
          CampaignManager = _this$props.CampaignManager;
      var items = [{
        header: MinimumContribution,
        description: "The Minimum Contribution Specified at the Time of Creating the Campaign",
        meta: "minimum contribution"
      }, {
        header: _ethereum_web3__WEBPACK_IMPORTED_MODULE_10__.default.utils.fromWei(CampaignBalance, "ether"),
        description: "The Current Account Balance of the Campaign",
        meta: "account balance (ether)"
      }, {
        header: NumberOfRequests,
        description: "The Number of Spending Requests that Have been Submitted to the Campaign",
        meta: "spending requests"
      }, {
        header: ApproverCount,
        description: "The Number of Approvers That has been Assigned to the Campaign",
        meta: "number of approvers"
      }, {
        header: CampaignManager,
        description: "The Owner of the Campaign Who Created the Campaign",
        meta: "campaign owner",
        style: {
          overflowWrap: "break-word"
        }
      }];
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Card.Group, {
        items: items
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 12
      }, this);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0,D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee(props) {
        var campaign, summary;
        return D_OneDrive_Informatics_Holdings_Desktop_Kickstart_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_9__.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                console.log(summary);
                return _context.abrupt("return", {
                  MinimumContribution: summary[0],
                  CampaignBalance: summary[1],
                  NumberOfRequests: summary[2],
                  ApproverCount: summary[3],
                  CampaignManager: summary[4],
                  CamapignAddress: props.query.address
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignShowing;
}(react__WEBPACK_IMPORTED_MODULE_8__.Component);

/* harmony default export */ __webpack_exports__["default"] = (CampaignShowing);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL3Nob3cuY2QwNDc2MGRjNzE1Y2VmOGRlY2QuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztJQUVNVTs7Ozs7Ozs7Ozs7OztXQWVKLGtCQUFTO0FBQ1AsMEJBQ0UsK0RBQUMsdURBQUQ7QUFBQSwrQkFDRSwrREFBQyxvREFBRDtBQUFBLGtDQUNFLCtEQUFDLHdEQUFEO0FBQVUsbUJBQU8sRUFBRSxDQUFuQjtBQUFBLG9DQUNFLCtEQUFDLDJEQUFEO0FBQWEsbUJBQUssRUFBRSxFQUFwQjtBQUFBLHNDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLEVBRUcsS0FBS0MsV0FBTCxFQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQU1FLCtEQUFDLDJEQUFEO0FBQWEsbUJBQUssRUFBRSxDQUFwQjtBQUFBLHFDQUNFLCtEQUFDLGdFQUFEO0FBQWdCLHVCQUFPLEVBQUUsS0FBS0MsS0FBTCxDQUFXQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFhRSwrREFBQyx3REFBRDtBQUFBLG1DQUNFLCtEQUFDLDJEQUFEO0FBQUEscUNBQ0UsK0RBQUMsMENBQUQ7QUFBTSxxQkFBSyx1QkFBZ0IsS0FBS0QsS0FBTCxDQUFXQyxlQUEzQixjQUFYO0FBQUEsdUNBQ0U7QUFBQSx5Q0FDRSwrREFBQyxzREFBRDtBQUFRLDJCQUFPLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQTRCRDs7O1dBRUQsdUJBQWM7QUFDWix3QkFNSSxLQUFLRCxLQU5UO0FBQUEsVUFDRUUsbUJBREYsZUFDRUEsbUJBREY7QUFBQSxVQUVFQyxlQUZGLGVBRUVBLGVBRkY7QUFBQSxVQUdFQyxnQkFIRixlQUdFQSxnQkFIRjtBQUFBLFVBSUVDLGFBSkYsZUFJRUEsYUFKRjtBQUFBLFVBS0VDLGVBTEYsZUFLRUEsZUFMRjtBQVFBLFVBQU1DLEtBQUssR0FBRyxDQUNaO0FBQ0VDLFFBQUFBLE1BQU0sRUFBRU4sbUJBRFY7QUFFRU8sUUFBQUEsV0FBVyxFQUNULHlFQUhKO0FBSUVDLFFBQUFBLElBQUksRUFBRTtBQUpSLE9BRFksRUFPWjtBQUNFRixRQUFBQSxNQUFNLEVBQUViLGtFQUFBLENBQW1CUSxlQUFuQixFQUFvQyxPQUFwQyxDQURWO0FBRUVNLFFBQUFBLFdBQVcsRUFBRSw2Q0FGZjtBQUdFQyxRQUFBQSxJQUFJLEVBQUU7QUFIUixPQVBZLEVBWVo7QUFDRUYsUUFBQUEsTUFBTSxFQUFFSixnQkFEVjtBQUVFSyxRQUFBQSxXQUFXLEVBQ1QsMEVBSEo7QUFJRUMsUUFBQUEsSUFBSSxFQUFFO0FBSlIsT0FaWSxFQWtCWjtBQUNFRixRQUFBQSxNQUFNLEVBQUVILGFBRFY7QUFFRUksUUFBQUEsV0FBVyxFQUNULGdFQUhKO0FBSUVDLFFBQUFBLElBQUksRUFBRTtBQUpSLE9BbEJZLEVBd0JaO0FBQ0VGLFFBQUFBLE1BQU0sRUFBRUYsZUFEVjtBQUVFRyxRQUFBQSxXQUFXLEVBQUUsb0RBRmY7QUFHRUMsUUFBQUEsSUFBSSxFQUFFLGdCQUhSO0FBSUVHLFFBQUFBLEtBQUssRUFBRTtBQUFFQyxVQUFBQSxZQUFZLEVBQUU7QUFBaEI7QUFKVCxPQXhCWSxDQUFkO0FBK0JBLDBCQUFPLCtEQUFDLDBEQUFEO0FBQVksYUFBSyxFQUFFUDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFDRDs7Ozt1V0F0RkQsaUJBQTZCUCxLQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUWUsZ0JBQUFBLFFBRFIsR0FDbUJ4QiwyREFBZ0IsQ0FBQ1MsS0FBSyxDQUFDZ0IsS0FBTixDQUFZQyxPQUFiLENBRG5DO0FBQUE7QUFBQSx1QkFFd0JGLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQkMsVUFBakIsR0FBOEJDLElBQTlCLEVBRnhCOztBQUFBO0FBRVFDLGdCQUFBQSxPQUZSO0FBR0VDLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUhGLGlEQUlTO0FBQ0xuQixrQkFBQUEsbUJBQW1CLEVBQUVtQixPQUFPLENBQUMsQ0FBRCxDQUR2QjtBQUVMbEIsa0JBQUFBLGVBQWUsRUFBRWtCLE9BQU8sQ0FBQyxDQUFELENBRm5CO0FBR0xqQixrQkFBQUEsZ0JBQWdCLEVBQUVpQixPQUFPLENBQUMsQ0FBRCxDQUhwQjtBQUlMaEIsa0JBQUFBLGFBQWEsRUFBRWdCLE9BQU8sQ0FBQyxDQUFELENBSmpCO0FBS0xmLGtCQUFBQSxlQUFlLEVBQUVlLE9BQU8sQ0FBQyxDQUFELENBTG5CO0FBTUxwQixrQkFBQUEsZUFBZSxFQUFFRCxLQUFLLENBQUNnQixLQUFOLENBQVlDO0FBTnhCLGlCQUpUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7OztFQUQ0QjNCOztBQTBGOUIsK0RBQWVRLGVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2FtcGFpZ25Db250cmFjdCBmcm9tIFwiLi4vLi4vZXRoZXJldW0vY2FtcGFpZ25cIjtcclxuaW1wb3J0IHsgQ2FyZCwgR3JpZCwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi9ldGhlcmV1bS93ZWIzXCI7XHJcbmltcG9ydCBDb250cmlidXRlRm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb250cmlidXRlRm9ybVwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uLy4uL3JvdXRlc1wiO1xyXG5cclxuY2xhc3MgQ2FtcGFpZ25TaG93aW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XHJcbiAgICBjb25zdCBjYW1wYWlnbiA9IGNhbXBhaWduQ29udHJhY3QocHJvcHMucXVlcnkuYWRkcmVzcyk7XHJcbiAgICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xyXG4gICAgY29uc29sZS5sb2coc3VtbWFyeSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBNaW5pbXVtQ29udHJpYnV0aW9uOiBzdW1tYXJ5WzBdLFxyXG4gICAgICBDYW1wYWlnbkJhbGFuY2U6IHN1bW1hcnlbMV0sXHJcbiAgICAgIE51bWJlck9mUmVxdWVzdHM6IHN1bW1hcnlbMl0sXHJcbiAgICAgIEFwcHJvdmVyQ291bnQ6IHN1bW1hcnlbM10sXHJcbiAgICAgIENhbXBhaWduTWFuYWdlcjogc3VtbWFyeVs0XSxcclxuICAgICAgQ2FtYXBpZ25BZGRyZXNzOiBwcm9wcy5xdWVyeS5hZGRyZXNzLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICA8R3JpZC5Sb3cgY29sdW1ucz17Mn0+XHJcbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTB9PlxyXG4gICAgICAgICAgICAgIDxoMz5DYW1wYWlnbiBEZXRhaWxzPC9oMz5cclxuICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDYXJkcygpfVxyXG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG5cclxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs0fT5cclxuICAgICAgICAgICAgICA8Q29udHJpYnV0ZUZvcm0gYWRkcmVzcz17dGhpcy5wcm9wcy5DYW1hcGlnbkFkZHJlc3N9IC8+XHJcbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcblxyXG4gICAgICAgICAgPC9HcmlkLlJvdz5cclxuXHJcbiAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICA8TGluayByb3V0ZT17YC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLkNhbWFwaWduQWRkcmVzc30vcmVxdWVzdHNgfT5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnk+VmlldyBSZXF1ZXN0czwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcblxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ2FyZHMoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIE1pbmltdW1Db250cmlidXRpb24sXHJcbiAgICAgIENhbXBhaWduQmFsYW5jZSxcclxuICAgICAgTnVtYmVyT2ZSZXF1ZXN0cyxcclxuICAgICAgQXBwcm92ZXJDb3VudCxcclxuICAgICAgQ2FtcGFpZ25NYW5hZ2VyLFxyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IE1pbmltdW1Db250cmlidXRpb24sXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIlRoZSBNaW5pbXVtIENvbnRyaWJ1dGlvbiBTcGVjaWZpZWQgYXQgdGhlIFRpbWUgb2YgQ3JlYXRpbmcgdGhlIENhbXBhaWduXCIsXHJcbiAgICAgICAgbWV0YTogXCJtaW5pbXVtIGNvbnRyaWJ1dGlvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiB3ZWIzLnV0aWxzLmZyb21XZWkoQ2FtcGFpZ25CYWxhbmNlLCBcImV0aGVyXCIpLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBDdXJyZW50IEFjY291bnQgQmFsYW5jZSBvZiB0aGUgQ2FtcGFpZ25cIixcclxuICAgICAgICBtZXRhOiBcImFjY291bnQgYmFsYW5jZSAoZXRoZXIpXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IE51bWJlck9mUmVxdWVzdHMsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIlRoZSBOdW1iZXIgb2YgU3BlbmRpbmcgUmVxdWVzdHMgdGhhdCBIYXZlIGJlZW4gU3VibWl0dGVkIHRvIHRoZSBDYW1wYWlnblwiLFxyXG4gICAgICAgIG1ldGE6IFwic3BlbmRpbmcgcmVxdWVzdHNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogQXBwcm92ZXJDb3VudCxcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiVGhlIE51bWJlciBvZiBBcHByb3ZlcnMgVGhhdCBoYXMgYmVlbiBBc3NpZ25lZCB0byB0aGUgQ2FtcGFpZ25cIixcclxuICAgICAgICBtZXRhOiBcIm51bWJlciBvZiBhcHByb3ZlcnNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogQ2FtcGFpZ25NYW5hZ2VyLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBPd25lciBvZiB0aGUgQ2FtcGFpZ24gV2hvIENyZWF0ZWQgdGhlIENhbXBhaWduXCIsXHJcbiAgICAgICAgbWV0YTogXCJjYW1wYWlnbiBvd25lclwiLFxyXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfSxcclxuICAgICAgfSxcclxuICAgIF07XHJcbiAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduU2hvd2luZztcclxuIl0sIm5hbWVzIjpbIkxheW91dCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY2FtcGFpZ25Db250cmFjdCIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiTGluayIsIkNhbXBhaWduU2hvd2luZyIsInJlbmRlckNhcmRzIiwicHJvcHMiLCJDYW1hcGlnbkFkZHJlc3MiLCJNaW5pbXVtQ29udHJpYnV0aW9uIiwiQ2FtcGFpZ25CYWxhbmNlIiwiTnVtYmVyT2ZSZXF1ZXN0cyIsIkFwcHJvdmVyQ291bnQiLCJDYW1wYWlnbk1hbmFnZXIiLCJpdGVtcyIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwibWV0YSIsInV0aWxzIiwiZnJvbVdlaSIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwiY2FtcGFpZ24iLCJxdWVyeSIsImFkZHJlc3MiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=