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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL3Nob3cuNmI5YjcyOTQzMjBlMDc2M2Q3MzcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztJQUVNVTs7Ozs7Ozs7Ozs7OztXQWVKLGtCQUFTO0FBQ1AsMEJBQ0UsK0RBQUMsdURBQUQ7QUFBQSwrQkFDRSwrREFBQyxvREFBRDtBQUFBLGtDQUNFLCtEQUFDLHdEQUFEO0FBQUEsb0NBQ0UsK0RBQUMsMkRBQUQ7QUFBYSxtQkFBSyxFQUFFLEVBQXBCO0FBQUEsc0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFFRyxLQUFLQyxXQUFMLEVBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBTUUsK0RBQUMsMkRBQUQ7QUFBYSxtQkFBSyxFQUFFLENBQXBCO0FBQUEscUNBQ0UsK0RBQUMsZ0VBQUQ7QUFBZ0IsdUJBQU8sRUFBRSxLQUFLQyxLQUFMLENBQVdDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQWFFLCtEQUFDLHdEQUFEO0FBQUEsbUNBQ0UsK0RBQUMsMkRBQUQ7QUFBQSxxQ0FDRSwrREFBQywwQ0FBRDtBQUFNLHFCQUFLLHVCQUFnQixLQUFLRCxLQUFMLENBQVdDLGVBQTNCLGNBQVg7QUFBQSx1Q0FDRTtBQUFBLHlDQUNFLCtEQUFDLHNEQUFEO0FBQVEsMkJBQU8sTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBNEJEOzs7V0FFRCx1QkFBYztBQUNaLHdCQU1JLEtBQUtELEtBTlQ7QUFBQSxVQUNFRSxtQkFERixlQUNFQSxtQkFERjtBQUFBLFVBRUVDLGVBRkYsZUFFRUEsZUFGRjtBQUFBLFVBR0VDLGdCQUhGLGVBR0VBLGdCQUhGO0FBQUEsVUFJRUMsYUFKRixlQUlFQSxhQUpGO0FBQUEsVUFLRUMsZUFMRixlQUtFQSxlQUxGO0FBUUEsVUFBTUMsS0FBSyxHQUFHLENBQ1o7QUFDRUMsUUFBQUEsTUFBTSxFQUFFTixtQkFEVjtBQUVFTyxRQUFBQSxXQUFXLEVBQ1QseUVBSEo7QUFJRUMsUUFBQUEsSUFBSSxFQUFFO0FBSlIsT0FEWSxFQU9aO0FBQ0VGLFFBQUFBLE1BQU0sRUFBRWIsa0VBQUEsQ0FBbUJRLGVBQW5CLEVBQW9DLE9BQXBDLENBRFY7QUFFRU0sUUFBQUEsV0FBVyxFQUFFLDZDQUZmO0FBR0VDLFFBQUFBLElBQUksRUFBRTtBQUhSLE9BUFksRUFZWjtBQUNFRixRQUFBQSxNQUFNLEVBQUVKLGdCQURWO0FBRUVLLFFBQUFBLFdBQVcsRUFDVCwwRUFISjtBQUlFQyxRQUFBQSxJQUFJLEVBQUU7QUFKUixPQVpZLEVBa0JaO0FBQ0VGLFFBQUFBLE1BQU0sRUFBRUgsYUFEVjtBQUVFSSxRQUFBQSxXQUFXLEVBQ1QsZ0VBSEo7QUFJRUMsUUFBQUEsSUFBSSxFQUFFO0FBSlIsT0FsQlksRUF3Qlo7QUFDRUYsUUFBQUEsTUFBTSxFQUFFRixlQURWO0FBRUVHLFFBQUFBLFdBQVcsRUFBRSxvREFGZjtBQUdFQyxRQUFBQSxJQUFJLEVBQUUsZ0JBSFI7QUFJRUcsUUFBQUEsS0FBSyxFQUFFO0FBQUVDLFVBQUFBLFlBQVksRUFBRTtBQUFoQjtBQUpULE9BeEJZLENBQWQ7QUErQkEsMEJBQU8sK0RBQUMsMERBQUQ7QUFBWSxhQUFLLEVBQUVQO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUDtBQUNEOzs7O3VXQXRGRCxpQkFBNkJQLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNRZSxnQkFBQUEsUUFEUixHQUNtQnhCLDJEQUFnQixDQUFDUyxLQUFLLENBQUNnQixLQUFOLENBQVlDLE9BQWIsQ0FEbkM7QUFBQTtBQUFBLHVCQUV3QkYsUUFBUSxDQUFDRyxPQUFULENBQWlCQyxVQUFqQixHQUE4QkMsSUFBOUIsRUFGeEI7O0FBQUE7QUFFUUMsZ0JBQUFBLE9BRlI7QUFHRUMsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBSEYsaURBSVM7QUFDTG5CLGtCQUFBQSxtQkFBbUIsRUFBRW1CLE9BQU8sQ0FBQyxDQUFELENBRHZCO0FBRUxsQixrQkFBQUEsZUFBZSxFQUFFa0IsT0FBTyxDQUFDLENBQUQsQ0FGbkI7QUFHTGpCLGtCQUFBQSxnQkFBZ0IsRUFBRWlCLE9BQU8sQ0FBQyxDQUFELENBSHBCO0FBSUxoQixrQkFBQUEsYUFBYSxFQUFFZ0IsT0FBTyxDQUFDLENBQUQsQ0FKakI7QUFLTGYsa0JBQUFBLGVBQWUsRUFBRWUsT0FBTyxDQUFDLENBQUQsQ0FMbkI7QUFNTHBCLGtCQUFBQSxlQUFlLEVBQUVELEtBQUssQ0FBQ2dCLEtBQU4sQ0FBWUM7QUFOeEIsaUJBSlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0VBRDRCM0I7O0FBMEY5QiwrREFBZVEsZUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYW1wYWlnbnMvc2hvdy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjYW1wYWlnbkNvbnRyYWN0IGZyb20gXCIuLi8uLi9ldGhlcmV1bS9jYW1wYWlnblwiO1xyXG5pbXBvcnQgeyBDYXJkLCBHcmlkLCBCdXR0b24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL3dlYjNcIjtcclxuaW1wb3J0IENvbnRyaWJ1dGVGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbnRyaWJ1dGVGb3JtXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vLi4vcm91dGVzXCI7XHJcblxyXG5jbGFzcyBDYW1wYWlnblNob3dpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcclxuICAgIGNvbnN0IGNhbXBhaWduID0gY2FtcGFpZ25Db250cmFjdChwcm9wcy5xdWVyeS5hZGRyZXNzKTtcclxuICAgIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XHJcbiAgICBjb25zb2xlLmxvZyhzdW1tYXJ5KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIE1pbmltdW1Db250cmlidXRpb246IHN1bW1hcnlbMF0sXHJcbiAgICAgIENhbXBhaWduQmFsYW5jZTogc3VtbWFyeVsxXSxcclxuICAgICAgTnVtYmVyT2ZSZXF1ZXN0czogc3VtbWFyeVsyXSxcclxuICAgICAgQXBwcm92ZXJDb3VudDogc3VtbWFyeVszXSxcclxuICAgICAgQ2FtcGFpZ25NYW5hZ2VyOiBzdW1tYXJ5WzRdLFxyXG4gICAgICBDYW1hcGlnbkFkZHJlc3M6IHByb3BzLnF1ZXJ5LmFkZHJlc3MsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8R3JpZD5cclxuICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMH0+XHJcbiAgICAgICAgICAgICAgPGgzPkNhbXBhaWduIERldGFpbHM8L2gzPlxyXG4gICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNhcmRzKCl9XHJcbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcblxyXG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezR9PlxyXG4gICAgICAgICAgICAgIDxDb250cmlidXRlRm9ybSBhZGRyZXNzPXt0aGlzLnByb3BzLkNhbWFwaWduQWRkcmVzc30gLz5cclxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuXHJcbiAgICAgICAgICA8L0dyaWQuUm93PlxyXG5cclxuICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuQ2FtYXBpZ25BZGRyZXNzfS9yZXF1ZXN0c2B9PlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeT5WaWV3IFJlcXVlc3RzPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPC9HcmlkLlJvdz5cclxuXHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJDYXJkcygpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgTWluaW11bUNvbnRyaWJ1dGlvbixcclxuICAgICAgQ2FtcGFpZ25CYWxhbmNlLFxyXG4gICAgICBOdW1iZXJPZlJlcXVlc3RzLFxyXG4gICAgICBBcHByb3ZlckNvdW50LFxyXG4gICAgICBDYW1wYWlnbk1hbmFnZXIsXHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogTWluaW11bUNvbnRyaWJ1dGlvbixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiVGhlIE1pbmltdW0gQ29udHJpYnV0aW9uIFNwZWNpZmllZCBhdCB0aGUgVGltZSBvZiBDcmVhdGluZyB0aGUgQ2FtcGFpZ25cIixcclxuICAgICAgICBtZXRhOiBcIm1pbmltdW0gY29udHJpYnV0aW9uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IHdlYjMudXRpbHMuZnJvbVdlaShDYW1wYWlnbkJhbGFuY2UsIFwiZXRoZXJcIiksXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIEN1cnJlbnQgQWNjb3VudCBCYWxhbmNlIG9mIHRoZSBDYW1wYWlnblwiLFxyXG4gICAgICAgIG1ldGE6IFwiYWNjb3VudCBiYWxhbmNlIChldGhlcilcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogTnVtYmVyT2ZSZXF1ZXN0cyxcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiVGhlIE51bWJlciBvZiBTcGVuZGluZyBSZXF1ZXN0cyB0aGF0IEhhdmUgYmVlbiBTdWJtaXR0ZWQgdG8gdGhlIENhbXBhaWduXCIsXHJcbiAgICAgICAgbWV0YTogXCJzcGVuZGluZyByZXF1ZXN0c1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiBBcHByb3ZlckNvdW50LFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJUaGUgTnVtYmVyIG9mIEFwcHJvdmVycyBUaGF0IGhhcyBiZWVuIEFzc2lnbmVkIHRvIHRoZSBDYW1wYWlnblwiLFxyXG4gICAgICAgIG1ldGE6IFwibnVtYmVyIG9mIGFwcHJvdmVyc1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiBDYW1wYWlnbk1hbmFnZXIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIE93bmVyIG9mIHRoZSBDYW1wYWlnbiBXaG8gQ3JlYXRlZCB0aGUgQ2FtcGFpZ25cIixcclxuICAgICAgICBtZXRhOiBcImNhbXBhaWduIG93bmVyXCIsXHJcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiB9LFxyXG4gICAgICB9LFxyXG4gICAgXTtcclxuICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25TaG93aW5nO1xyXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJjYW1wYWlnbkNvbnRyYWN0IiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJ3ZWIzIiwiQ29udHJpYnV0ZUZvcm0iLCJMaW5rIiwiQ2FtcGFpZ25TaG93aW5nIiwicmVuZGVyQ2FyZHMiLCJwcm9wcyIsIkNhbWFwaWduQWRkcmVzcyIsIk1pbmltdW1Db250cmlidXRpb24iLCJDYW1wYWlnbkJhbGFuY2UiLCJOdW1iZXJPZlJlcXVlc3RzIiwiQXBwcm92ZXJDb3VudCIsIkNhbXBhaWduTWFuYWdlciIsIml0ZW1zIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJtZXRhIiwidXRpbHMiLCJmcm9tV2VpIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJjYW1wYWlnbiIsInF1ZXJ5IiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==