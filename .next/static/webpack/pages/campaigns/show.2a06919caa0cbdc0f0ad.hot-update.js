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
            columns: 1,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL3Nob3cuMmEwNjkxOWNhYTBjYmRjMGYwYWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztJQUVNVTs7Ozs7Ozs7Ozs7OztXQWVKLGtCQUFTO0FBQ1AsMEJBQ0UsK0RBQUMsdURBQUQ7QUFBQSwrQkFDRSwrREFBQyxvREFBRDtBQUFBLGtDQUNFLCtEQUFDLHdEQUFEO0FBQVUsbUJBQU8sRUFBRSxDQUFuQjtBQUFBLG9DQUNFLCtEQUFDLDJEQUFEO0FBQWEsbUJBQUssRUFBRSxFQUFwQjtBQUFBLHNDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLEVBRUcsS0FBS0MsV0FBTCxFQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQU1FLCtEQUFDLDJEQUFEO0FBQWEsbUJBQUssRUFBRSxDQUFwQjtBQUFBLHFDQUNFLCtEQUFDLGdFQUFEO0FBQWdCLHVCQUFPLEVBQUUsS0FBS0MsS0FBTCxDQUFXQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFhRSwrREFBQyx3REFBRDtBQUFVLG1CQUFPLEVBQUUsQ0FBbkI7QUFBQSxtQ0FDRSwrREFBQywyREFBRDtBQUFBLHFDQUNFLCtEQUFDLDBDQUFEO0FBQU0scUJBQUssdUJBQWdCLEtBQUtELEtBQUwsQ0FBV0MsZUFBM0IsY0FBWDtBQUFBLHVDQUNFO0FBQUEseUNBQ0UsK0RBQUMsc0RBQUQ7QUFBUSwyQkFBTyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUE0QkQ7OztXQUVELHVCQUFjO0FBQ1osd0JBTUksS0FBS0QsS0FOVDtBQUFBLFVBQ0VFLG1CQURGLGVBQ0VBLG1CQURGO0FBQUEsVUFFRUMsZUFGRixlQUVFQSxlQUZGO0FBQUEsVUFHRUMsZ0JBSEYsZUFHRUEsZ0JBSEY7QUFBQSxVQUlFQyxhQUpGLGVBSUVBLGFBSkY7QUFBQSxVQUtFQyxlQUxGLGVBS0VBLGVBTEY7QUFRQSxVQUFNQyxLQUFLLEdBQUcsQ0FDWjtBQUNFQyxRQUFBQSxNQUFNLEVBQUVOLG1CQURWO0FBRUVPLFFBQUFBLFdBQVcsRUFDVCx5RUFISjtBQUlFQyxRQUFBQSxJQUFJLEVBQUU7QUFKUixPQURZLEVBT1o7QUFDRUYsUUFBQUEsTUFBTSxFQUFFYixrRUFBQSxDQUFtQlEsZUFBbkIsRUFBb0MsT0FBcEMsQ0FEVjtBQUVFTSxRQUFBQSxXQUFXLEVBQUUsNkNBRmY7QUFHRUMsUUFBQUEsSUFBSSxFQUFFO0FBSFIsT0FQWSxFQVlaO0FBQ0VGLFFBQUFBLE1BQU0sRUFBRUosZ0JBRFY7QUFFRUssUUFBQUEsV0FBVyxFQUNULDBFQUhKO0FBSUVDLFFBQUFBLElBQUksRUFBRTtBQUpSLE9BWlksRUFrQlo7QUFDRUYsUUFBQUEsTUFBTSxFQUFFSCxhQURWO0FBRUVJLFFBQUFBLFdBQVcsRUFDVCxnRUFISjtBQUlFQyxRQUFBQSxJQUFJLEVBQUU7QUFKUixPQWxCWSxFQXdCWjtBQUNFRixRQUFBQSxNQUFNLEVBQUVGLGVBRFY7QUFFRUcsUUFBQUEsV0FBVyxFQUFFLG9EQUZmO0FBR0VDLFFBQUFBLElBQUksRUFBRSxnQkFIUjtBQUlFRyxRQUFBQSxLQUFLLEVBQUU7QUFBRUMsVUFBQUEsWUFBWSxFQUFFO0FBQWhCO0FBSlQsT0F4QlksQ0FBZDtBQStCQSwwQkFBTywrREFBQywwREFBRDtBQUFZLGFBQUssRUFBRVA7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBQ0Q7Ozs7dVdBdEZELGlCQUE2QlAsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1FlLGdCQUFBQSxRQURSLEdBQ21CeEIsMkRBQWdCLENBQUNTLEtBQUssQ0FBQ2dCLEtBQU4sQ0FBWUMsT0FBYixDQURuQztBQUFBO0FBQUEsdUJBRXdCRixRQUFRLENBQUNHLE9BQVQsQ0FBaUJDLFVBQWpCLEdBQThCQyxJQUE5QixFQUZ4Qjs7QUFBQTtBQUVRQyxnQkFBQUEsT0FGUjtBQUdFQyxnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7QUFIRixpREFJUztBQUNMbkIsa0JBQUFBLG1CQUFtQixFQUFFbUIsT0FBTyxDQUFDLENBQUQsQ0FEdkI7QUFFTGxCLGtCQUFBQSxlQUFlLEVBQUVrQixPQUFPLENBQUMsQ0FBRCxDQUZuQjtBQUdMakIsa0JBQUFBLGdCQUFnQixFQUFFaUIsT0FBTyxDQUFDLENBQUQsQ0FIcEI7QUFJTGhCLGtCQUFBQSxhQUFhLEVBQUVnQixPQUFPLENBQUMsQ0FBRCxDQUpqQjtBQUtMZixrQkFBQUEsZUFBZSxFQUFFZSxPQUFPLENBQUMsQ0FBRCxDQUxuQjtBQU1McEIsa0JBQUFBLGVBQWUsRUFBRUQsS0FBSyxDQUFDZ0IsS0FBTixDQUFZQztBQU54QixpQkFKVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7RUFENEIzQjs7QUEwRjlCLCtEQUFlUSxlQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNhbXBhaWduQ29udHJhY3QgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL2NhbXBhaWduXCI7XHJcbmltcG9ydCB7IENhcmQsIEdyaWQsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vZXRoZXJldW0vd2ViM1wiO1xyXG5pbXBvcnQgQ29udHJpYnV0ZUZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29udHJpYnV0ZUZvcm1cIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi8uLi9yb3V0ZXNcIjtcclxuXHJcbmNsYXNzIENhbXBhaWduU2hvd2luZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xyXG4gICAgY29uc3QgY2FtcGFpZ24gPSBjYW1wYWlnbkNvbnRyYWN0KHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xyXG4gICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0U3VtbWFyeSgpLmNhbGwoKTtcclxuICAgIGNvbnNvbGUubG9nKHN1bW1hcnkpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgTWluaW11bUNvbnRyaWJ1dGlvbjogc3VtbWFyeVswXSxcclxuICAgICAgQ2FtcGFpZ25CYWxhbmNlOiBzdW1tYXJ5WzFdLFxyXG4gICAgICBOdW1iZXJPZlJlcXVlc3RzOiBzdW1tYXJ5WzJdLFxyXG4gICAgICBBcHByb3ZlckNvdW50OiBzdW1tYXJ5WzNdLFxyXG4gICAgICBDYW1wYWlnbk1hbmFnZXI6IHN1bW1hcnlbNF0sXHJcbiAgICAgIENhbWFwaWduQWRkcmVzczogcHJvcHMucXVlcnkuYWRkcmVzcyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgPEdyaWQuUm93IGNvbHVtbnM9ezJ9PlxyXG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezEwfT5cclxuICAgICAgICAgICAgICA8aDM+Q2FtcGFpZ24gRGV0YWlsczwvaDM+XHJcbiAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ2FyZHMoKX1cclxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NH0+XHJcbiAgICAgICAgICAgICAgPENvbnRyaWJ1dGVGb3JtIGFkZHJlc3M9e3RoaXMucHJvcHMuQ2FtYXBpZ25BZGRyZXNzfSAvPlxyXG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG5cclxuICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcblxyXG4gICAgICAgICAgPEdyaWQuUm93IGNvbHVtbnM9ezF9PlxyXG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgPExpbmsgcm91dGU9e2AvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5DYW1hcGlnbkFkZHJlc3N9L3JlcXVlc3RzYH0+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PlZpZXcgUmVxdWVzdHM8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICA8L0dyaWQuUm93PlxyXG5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckNhcmRzKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBNaW5pbXVtQ29udHJpYnV0aW9uLFxyXG4gICAgICBDYW1wYWlnbkJhbGFuY2UsXHJcbiAgICAgIE51bWJlck9mUmVxdWVzdHMsXHJcbiAgICAgIEFwcHJvdmVyQ291bnQsXHJcbiAgICAgIENhbXBhaWduTWFuYWdlcixcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIGNvbnN0IGl0ZW1zID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiBNaW5pbXVtQ29udHJpYnV0aW9uLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJUaGUgTWluaW11bSBDb250cmlidXRpb24gU3BlY2lmaWVkIGF0IHRoZSBUaW1lIG9mIENyZWF0aW5nIHRoZSBDYW1wYWlnblwiLFxyXG4gICAgICAgIG1ldGE6IFwibWluaW11bSBjb250cmlidXRpb25cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogd2ViMy51dGlscy5mcm9tV2VpKENhbXBhaWduQmFsYW5jZSwgXCJldGhlclwiKSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgQ3VycmVudCBBY2NvdW50IEJhbGFuY2Ugb2YgdGhlIENhbXBhaWduXCIsXHJcbiAgICAgICAgbWV0YTogXCJhY2NvdW50IGJhbGFuY2UgKGV0aGVyKVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiBOdW1iZXJPZlJlcXVlc3RzLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJUaGUgTnVtYmVyIG9mIFNwZW5kaW5nIFJlcXVlc3RzIHRoYXQgSGF2ZSBiZWVuIFN1Ym1pdHRlZCB0byB0aGUgQ2FtcGFpZ25cIixcclxuICAgICAgICBtZXRhOiBcInNwZW5kaW5nIHJlcXVlc3RzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IEFwcHJvdmVyQ291bnQsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIlRoZSBOdW1iZXIgb2YgQXBwcm92ZXJzIFRoYXQgaGFzIGJlZW4gQXNzaWduZWQgdG8gdGhlIENhbXBhaWduXCIsXHJcbiAgICAgICAgbWV0YTogXCJudW1iZXIgb2YgYXBwcm92ZXJzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IENhbXBhaWduTWFuYWdlcixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgT3duZXIgb2YgdGhlIENhbXBhaWduIFdobyBDcmVhdGVkIHRoZSBDYW1wYWlnblwiLFxyXG4gICAgICAgIG1ldGE6IFwiY2FtcGFpZ24gb3duZXJcIixcclxuICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6IFwiYnJlYWstd29yZFwiIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnblNob3dpbmc7XHJcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNhbXBhaWduQ29udHJhY3QiLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsIkxpbmsiLCJDYW1wYWlnblNob3dpbmciLCJyZW5kZXJDYXJkcyIsInByb3BzIiwiQ2FtYXBpZ25BZGRyZXNzIiwiTWluaW11bUNvbnRyaWJ1dGlvbiIsIkNhbXBhaWduQmFsYW5jZSIsIk51bWJlck9mUmVxdWVzdHMiLCJBcHByb3ZlckNvdW50IiwiQ2FtcGFpZ25NYW5hZ2VyIiwiaXRlbXMiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsIm1ldGEiLCJ1dGlscyIsImZyb21XZWkiLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsImNhbXBhaWduIiwicXVlcnkiLCJhZGRyZXNzIiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9