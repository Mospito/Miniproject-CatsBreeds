webpackHotUpdate_N_E("pages/symptom",{

/***/ "./pages/symptom.js":
/*!**************************!*\
  !*** ./pages/symptom.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "D:\\001Study\\Year3Therm2\\240-311 Distributed\\Final-MiniProject\\CatBreeds\\FrontEnd\\pages\\symptom.js",
    _this = undefined,
    _s = $RefreshSig$();



var URL = "http://localhost/api/disease";

var symptom = function symptom() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    "disease": [{
      "id": 1,
      "name": "โรคหวัดแมว",
      "symptom1": "อาการเซื่องซึม",
      "symptom2": "หายใจลำบาก ",
      "symptom3": "มีไข้ ไอ จาม มีน้ำมูก",
      "symptom4": "เบื่ออาหาร"
    }]
  }),
      healths = _useState[0],
      setHealths = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      health = _useState2[0],
      setHealth = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      name = _useState3[0],
      setName = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      symptom1 = _useState4[0],
      setSymtom1 = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      symptom2 = _useState5[0],
      setSymtom2 = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      symptom3 = _useState6[0],
      setSymtom3 = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      symptom4 = _useState7[0],
      setSymtom4 = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      check1 = _useState8[0],
      setCheck1 = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      check2 = _useState9[0],
      setCheck2 = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      check3 = _useState10[0],
      setCheck3 = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      check4 = _useState11[0],
      setCheck4 = _useState11[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    getDisease();
  }, []);

  var getDisease = /*#__PURE__*/function () {
    var _ref = Object(D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var disesaseCat;
      return D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(URL);

            case 2:
              disesaseCat = _context.sent;
              setHealths(disesaseCat.data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getDisease() {
      return _ref.apply(this, arguments);
    };
  }();

  var setData = function setData() {
    var tmp;
    return healths.disease.map(function (item) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-col border-2 boder-red-600",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          onChange: function onChange(e) {
            return setCheck1(e.target.value);
          },
          value: item.symptom1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }, _this), " ", item.symptom1, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          onChange: function onChange(e) {
            return setCheck2(e.target.value);
          },
          value: item.symptom2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 17
        }, _this), " ", item.symptom2, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          onChange: function onChange(e) {
            return setCheck3(e.target.value);
          },
          value: item.symptom3
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }, _this), " ", item.symptom3, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          onChange: function onChange(e) {
            return setCheck4(e.target.value);
          },
          value: item.symptom4
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 17
        }, _this), " ", item.symptom4, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }, _this);
    });
  };

  var printDisease = function printDisease() {
    return healths.disease.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: [item.name, " | ", item.symptom1]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex flex-col justify-center items-center border-2 border-red-600 ",
    children: ["Hello Symptom", printDisease(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "\u0E41\u0E21\u0E27\u0E02\u0E2D\u0E07\u0E17\u0E48\u0E32\u0E19\u0E21\u0E35\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E14\u0E31\u0E07\u0E19\u0E35\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48 \u0E42\u0E1B\u0E23\u0E14\u0E15\u0E34\u0E4A\u0E01\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E32\u0E21\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E02\u0E49\u0E32\u0E07\u0E15\u0E49\u0E19"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-col",
      children: setData()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }, _this), "Test:", check1, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 27
    }, _this), "Test2:", check2, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 28
    }, _this), "Test3:", check3, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 28
    }, _this), "Test4: ", check4, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 29
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 9
  }, _this);
};

_s(symptom, "gO3NSUg/v/5+/8HxdLN0mstAUI8=");

/* harmony default export */ __webpack_exports__["default"] = (symptom);

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3ltcHRvbS5qcyJdLCJuYW1lcyI6WyJVUkwiLCJzeW1wdG9tIiwidXNlU3RhdGUiLCJoZWFsdGhzIiwic2V0SGVhbHRocyIsImhlYWx0aCIsInNldEhlYWx0aCIsIm5hbWUiLCJzZXROYW1lIiwic3ltcHRvbTEiLCJzZXRTeW10b20xIiwic3ltcHRvbTIiLCJzZXRTeW10b20yIiwic3ltcHRvbTMiLCJzZXRTeW10b20zIiwic3ltcHRvbTQiLCJzZXRTeW10b200IiwiY2hlY2sxIiwic2V0Q2hlY2sxIiwiY2hlY2syIiwic2V0Q2hlY2syIiwiY2hlY2szIiwic2V0Q2hlY2szIiwiY2hlY2s0Iiwic2V0Q2hlY2s0IiwidXNlRWZmZWN0IiwiZ2V0RGlzZWFzZSIsImF4aW9zIiwiZ2V0IiwiZGlzZXNhc2VDYXQiLCJkYXRhIiwic2V0RGF0YSIsInRtcCIsImRpc2Vhc2UiLCJtYXAiLCJpdGVtIiwiZSIsInRhcmdldCIsInZhbHVlIiwicHJpbnREaXNlYXNlIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0EsSUFBTUEsR0FBRyxpQ0FBVDs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBRVlDLHNEQUFRLENBQUM7QUFDbkMsZUFBVyxDQUNQO0FBQ0ksWUFBTSxDQURWO0FBRUksY0FBUSxZQUZaO0FBR0ksa0JBQVksZ0JBSGhCO0FBSUksa0JBQVksYUFKaEI7QUFLSSxrQkFBWSx1QkFMaEI7QUFNSSxrQkFBWTtBQU5oQixLQURPO0FBRHdCLEdBQUQsQ0FGcEI7QUFBQSxNQUVYQyxPQUZXO0FBQUEsTUFFRkMsVUFGRTs7QUFBQSxtQkFjVUYsc0RBQVEsQ0FBQyxFQUFELENBZGxCO0FBQUEsTUFjWEcsTUFkVztBQUFBLE1BY0hDLFNBZEc7O0FBQUEsbUJBZU1KLHNEQUFRLENBQUMsRUFBRCxDQWZkO0FBQUEsTUFlWEssSUFmVztBQUFBLE1BZUxDLE9BZks7O0FBQUEsbUJBZ0JhTixzREFBUSxDQUFDLEVBQUQsQ0FoQnJCO0FBQUEsTUFnQlhPLFFBaEJXO0FBQUEsTUFnQkRDLFVBaEJDOztBQUFBLG1CQWlCYVIsc0RBQVEsQ0FBQyxFQUFELENBakJyQjtBQUFBLE1BaUJYUyxRQWpCVztBQUFBLE1BaUJEQyxVQWpCQzs7QUFBQSxtQkFrQmFWLHNEQUFRLENBQUMsRUFBRCxDQWxCckI7QUFBQSxNQWtCWFcsUUFsQlc7QUFBQSxNQWtCREMsVUFsQkM7O0FBQUEsbUJBbUJhWixzREFBUSxDQUFDLEVBQUQsQ0FuQnJCO0FBQUEsTUFtQlhhLFFBbkJXO0FBQUEsTUFtQkRDLFVBbkJDOztBQUFBLG1CQXFCVWQsc0RBQVEsQ0FBQyxFQUFELENBckJsQjtBQUFBLE1BcUJYZSxNQXJCVztBQUFBLE1BcUJIQyxTQXJCRzs7QUFBQSxtQkFzQlVoQixzREFBUSxDQUFDLEVBQUQsQ0F0QmxCO0FBQUEsTUFzQlhpQixNQXRCVztBQUFBLE1Bc0JIQyxTQXRCRzs7QUFBQSxvQkF1QlVsQixzREFBUSxDQUFDLEVBQUQsQ0F2QmxCO0FBQUEsTUF1QlhtQixNQXZCVztBQUFBLE1BdUJIQyxTQXZCRzs7QUFBQSxvQkF3QlVwQixzREFBUSxDQUFDLEVBQUQsQ0F4QmxCO0FBQUEsTUF3QlhxQixNQXhCVztBQUFBLE1Bd0JIQyxTQXhCRzs7QUEwQmxCQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsY0FBVTtBQUNiLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBS0EsTUFBTUEsVUFBVTtBQUFBLHdYQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1NDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVTVCLEdBQVYsQ0FEVDs7QUFBQTtBQUNYNkIseUJBRFc7QUFFZnpCLHdCQUFVLENBQUN5QixXQUFXLENBQUNDLElBQWIsQ0FBVjs7QUFGZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFWSixVQUFVO0FBQUE7QUFBQTtBQUFBLEtBQWhCOztBQUtBLE1BQU1LLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFFbEIsUUFBSUMsR0FBSjtBQUNBLFdBQVE3QixPQUFPLENBQUM4QixPQUFSLENBQWdCQyxHQUFoQixDQUFvQixVQUFDQyxJQUFEO0FBQUEsMEJBRXhCO0FBQUssaUJBQVMsRUFBRyxzQ0FBakI7QUFBQSxnQ0FDSTtBQUFPLGNBQUksRUFBQyxVQUFaO0FBQXVCLGtCQUFRLEVBQUUsa0JBQUNDLENBQUQ7QUFBQSxtQkFBT2xCLFNBQVMsQ0FBQ2tCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWhCO0FBQUEsV0FBakM7QUFBbUUsZUFBSyxFQUFFSCxJQUFJLENBQUMxQjtBQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLE9BQ2lHMEIsSUFBSSxDQUFDMUIsUUFEdEcsZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBR0k7QUFBTyxjQUFJLEVBQUMsVUFBWjtBQUF1QixrQkFBUSxFQUFFLGtCQUFDMkIsQ0FBRDtBQUFBLG1CQUFPaEIsU0FBUyxDQUFDZ0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBaEI7QUFBQSxXQUFqQztBQUFtRSxlQUFLLEVBQUVILElBQUksQ0FBQ3hCO0FBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosT0FHaUd3QixJQUFJLENBQUN4QixRQUh0RyxlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkosZUFLSTtBQUFPLGNBQUksRUFBQyxVQUFaO0FBQXVCLGtCQUFRLEVBQUUsa0JBQUN5QixDQUFEO0FBQUEsbUJBQU9kLFNBQVMsQ0FBQ2MsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBaEI7QUFBQSxXQUFqQztBQUFtRSxlQUFLLEVBQUVILElBQUksQ0FBQ3RCO0FBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEosT0FLaUdzQixJQUFJLENBQUN0QixRQUx0RyxlQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkosZUFPSTtBQUFPLGNBQUksRUFBQyxVQUFaO0FBQXVCLGtCQUFRLEVBQUUsa0JBQUN1QixDQUFEO0FBQUEsbUJBQU9aLFNBQVMsQ0FBQ1ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBaEI7QUFBQSxXQUFqQztBQUFtRSxlQUFLLEVBQUVILElBQUksQ0FBQ3BCO0FBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEosT0FPaUdvQixJQUFJLENBQUNwQixRQVB0RyxlQVFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRndCO0FBQUEsS0FBcEIsQ0FBUjtBQWdCSCxHQW5CRDs7QUFzQkEsTUFBTXdCLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFFdkIsV0FDSXBDLE9BQU8sQ0FBQzhCLE9BQVIsQ0FBZ0JDLEdBQWhCLENBQW9CLFVBQUNDLElBQUQsRUFBT0ssS0FBUDtBQUFBLDBCQUNoQjtBQUFBLG1CQUNLTCxJQUFJLENBQUM1QixJQURWLFNBQ21CNEIsSUFBSSxDQUFDMUIsUUFEeEI7QUFBQSxTQUFTK0IsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGdCO0FBQUEsS0FBcEIsQ0FESjtBQVFILEdBVkQ7O0FBY0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsb0VBQWY7QUFBQSxnQ0FHS0QsWUFBWSxFQUhqQixlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSixlQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEosZUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkosZUFPSTtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUEsZ0JBQ0tSLE9BQU87QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEosV0FXVWQsTUFYVixvQkFXa0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhsQixZQVlXRSxNQVpYLG9CQVltQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWm5CLFlBYVdFLE1BYlgsb0JBYW1CO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFibkIsYUFjWUUsTUFkWixvQkFjb0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXNCSCxDQTlGRDs7R0FBTXRCLE87O0FBZ0dTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zeW1wdG9tLjAzNDMwOTc3MzZhMjJjOWI1ZDM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcblxyXG5jb25zdCBVUkwgPSBgaHR0cDovL2xvY2FsaG9zdC9hcGkvZGlzZWFzZWBcclxuY29uc3Qgc3ltcHRvbSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbaGVhbHRocywgc2V0SGVhbHRoc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgXCJkaXNlYXNlXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwi4LmC4Lij4LiE4Lir4Lin4Lix4LiU4LmB4Lih4LinXCIsXHJcbiAgICAgICAgICAgICAgICBcInN5bXB0b20xXCI6IFwi4Lit4Liy4LiB4Liy4Lij4LmA4LiL4Li34LmI4Lit4LiH4LiL4Li24LihXCIsXHJcbiAgICAgICAgICAgICAgICBcInN5bXB0b20yXCI6IFwi4Lir4Liy4Lii4LmD4LiI4Lil4Liz4Lia4Liy4LiBIFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzeW1wdG9tM1wiOiBcIuC4oeC4teC5hOC4guC5iSDguYTguK0g4LiI4Liy4LihIOC4oeC4teC4meC5ieC4s+C4oeC4ueC4gVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzeW1wdG9tNFwiOiBcIuC5gOC4muC4t+C5iOC4reC4reC4suC4q+C4suC4o1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbaGVhbHRoLCBzZXRIZWFsdGhdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc3ltcHRvbTEsIHNldFN5bXRvbTFdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc3ltcHRvbTIsIHNldFN5bXRvbTJdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc3ltcHRvbTMsIHNldFN5bXRvbTNdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc3ltcHRvbTQsIHNldFN5bXRvbTRdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3QgW2NoZWNrMSwgc2V0Q2hlY2sxXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2NoZWNrMiwgc2V0Q2hlY2syXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2NoZWNrMywgc2V0Q2hlY2szXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2NoZWNrNCwgc2V0Q2hlY2s0XSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0RGlzZWFzZSgpXHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGdldERpc2Vhc2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGRpc2VzYXNlQ2F0ID0gYXdhaXQgYXhpb3MuZ2V0KFVSTClcclxuICAgICAgICBzZXRIZWFsdGhzKGRpc2VzYXNlQ2F0LmRhdGEpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0RGF0YSA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IHRtcFxyXG4gICAgICAgIHJldHVybiAoaGVhbHRocy5kaXNlYXNlLm1hcCgoaXRlbSkgPT5cclxuICAgICAgICAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ2ZsZXggZmxleC1jb2wgYm9yZGVyLTIgYm9kZXItcmVkLTYwMCc+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRDaGVjazEoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17aXRlbS5zeW1wdG9tMX0gLz4ge2l0ZW0uc3ltcHRvbTF9XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17KGUpID0+IHNldENoZWNrMihlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXtpdGVtLnN5bXB0b20yfSAvPiB7aXRlbS5zeW1wdG9tMn1cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2hlY2szKGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e2l0ZW0uc3ltcHRvbTN9IC8+IHtpdGVtLnN5bXB0b20zfVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRDaGVjazQoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17aXRlbS5zeW1wdG9tNH0gLz4ge2l0ZW0uc3ltcHRvbTR9XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG5cclxuXHJcbiAgICAgICAgKSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgcHJpbnREaXNlYXNlID0gKCkgPT4ge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBoZWFsdGhzLmRpc2Vhc2UubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9IHwge2l0ZW0uc3ltcHRvbTF9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYm9yZGVyLTIgYm9yZGVyLXJlZC02MDAgXCI+XHJcbiAgICAgICAgICAgIEhlbGxvIFN5bXB0b21cclxuXHJcbiAgICAgICAgICAgIHtwcmludERpc2Vhc2UoKX1cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxoMz7guYHguKHguKfguILguK3guIfguJfguYjguLLguJnguKHguLXguK3guLLguIHguLLguKPguJTguLHguIfguJnguLXguYnguKvguKPguLfguK3guYTguKHguYgg4LmC4Lib4Lij4LiU4LiV4Li04LmK4LiB4LmA4Lil4Li34Lit4LiB4LiV4Liy4Lih4Lit4Liy4LiB4Liy4Lij4LiC4LmJ4Liy4LiH4LiV4LmJ4LiZPC9oMz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAge3NldERhdGEoKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBUZXN0OntjaGVjazF9IDxiciAvPlxyXG4gICAgICAgICAgICBUZXN0Mjp7Y2hlY2syfSA8YnIgLz5cclxuICAgICAgICAgICAgVGVzdDM6e2NoZWNrM30gPGJyIC8+XHJcbiAgICAgICAgICAgIFRlc3Q0OiB7Y2hlY2s0fSA8YnIgLz5cclxuXHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN5bXB0b20iXSwic291cmNlUm9vdCI6IiJ9