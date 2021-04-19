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
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: "\u0E41\u0E21\u0E27\u0E02\u0E2D\u0E07\u0E17\u0E48\u0E32\u0E19\u0E21\u0E35\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E14\u0E31\u0E07\u0E19\u0E35\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48 \u0E42\u0E1B\u0E23\u0E14\u0E15\u0E34\u0E4A\u0E01\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E32\u0E21\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E02\u0E49\u0E32\u0E07\u0E15\u0E49\u0E19"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          onChange: function onChange(e) {
            return setCheck1(e.target.value);
          },
          value: item.symptom1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 17
        }, _this), " ", item.symptom1, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          onChange: function onChange(e) {
            return setCheck2(e.target.value);
          },
          value: item.symptom2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }, _this), " ", item.symptom2, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          onChange: function onChange(e) {
            return setCheck3(e.target.value);
          },
          value: item.symptom3
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 17
        }, _this), " ", item.symptom3, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          onChange: function onChange(e) {
            return setCheck4(e.target.value);
          },
          value: item.symptom4
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }, _this), " ", item.symptom4, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
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
        lineNumber: 70,
        columnNumber: 17
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: ["Hello Symptom", printDisease(), setData(), "Test:", check1, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 27
    }, _this), "Test2:", check2, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 28
    }, _this), "Test3:", check3, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 28
    }, _this), "Test4: ", check4, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 29
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 81,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3ltcHRvbS5qcyJdLCJuYW1lcyI6WyJVUkwiLCJzeW1wdG9tIiwidXNlU3RhdGUiLCJoZWFsdGhzIiwic2V0SGVhbHRocyIsImhlYWx0aCIsInNldEhlYWx0aCIsIm5hbWUiLCJzZXROYW1lIiwic3ltcHRvbTEiLCJzZXRTeW10b20xIiwic3ltcHRvbTIiLCJzZXRTeW10b20yIiwic3ltcHRvbTMiLCJzZXRTeW10b20zIiwic3ltcHRvbTQiLCJzZXRTeW10b200IiwiY2hlY2sxIiwic2V0Q2hlY2sxIiwiY2hlY2syIiwic2V0Q2hlY2syIiwiY2hlY2szIiwic2V0Q2hlY2szIiwiY2hlY2s0Iiwic2V0Q2hlY2s0IiwidXNlRWZmZWN0IiwiZ2V0RGlzZWFzZSIsImF4aW9zIiwiZ2V0IiwiZGlzZXNhc2VDYXQiLCJkYXRhIiwic2V0RGF0YSIsInRtcCIsImRpc2Vhc2UiLCJtYXAiLCJpdGVtIiwiZSIsInRhcmdldCIsInZhbHVlIiwicHJpbnREaXNlYXNlIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0EsSUFBTUEsR0FBRyxpQ0FBVDs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBRVlDLHNEQUFRLENBQUM7QUFDbkMsZUFBVyxDQUNQO0FBQ0ksWUFBTSxDQURWO0FBRUksY0FBUSxZQUZaO0FBR0ksa0JBQVksZ0JBSGhCO0FBSUksa0JBQVksYUFKaEI7QUFLSSxrQkFBWSx1QkFMaEI7QUFNSSxrQkFBWTtBQU5oQixLQURPO0FBRHdCLEdBQUQsQ0FGcEI7QUFBQSxNQUVYQyxPQUZXO0FBQUEsTUFFRkMsVUFGRTs7QUFBQSxtQkFjVUYsc0RBQVEsQ0FBQyxFQUFELENBZGxCO0FBQUEsTUFjWEcsTUFkVztBQUFBLE1BY0hDLFNBZEc7O0FBQUEsbUJBZU1KLHNEQUFRLENBQUMsRUFBRCxDQWZkO0FBQUEsTUFl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L3dlYnBhY2svcGFnZXMvc3ltcHRvbS5iNmE1M2UxMjJmMDYwY2VjZDJmZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5cclxuY29uc3QgVVJMID0gYGh0dHA6Ly9sb2NhbGhvc3QvYXBpL2Rpc2Vhc2VgXHJcbmNvbnN0IHN5bXB0b20gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2hlYWx0aHMsIHNldEhlYWx0aHNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIFwiZGlzZWFzZVwiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIuC5guC4o+C4hOC4q+C4p+C4seC4lOC5geC4oeC4p1wiLFxyXG4gICAgICAgICAgICAgICAgXCJzeW1wdG9tMVwiOiBcIuC4reC4suC4geC4suC4o+C5gOC4i+C4t+C5iOC4reC4h+C4i+C4tuC4oVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzeW1wdG9tMlwiOiBcIuC4q+C4suC4ouC5g+C4iOC4peC4s+C4muC4suC4gSBcIixcclxuICAgICAgICAgICAgICAgIFwic3ltcHRvbTNcIjogXCLguKHguLXguYTguILguYkg4LmE4LitIOC4iOC4suC4oSDguKHguLXguJnguYnguLPguKHguLnguIFcIixcclxuICAgICAgICAgICAgICAgIFwic3ltcHRvbTRcIjogXCLguYDguJrguLfguYjguK3guK3guLLguKvguLLguKNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2hlYWx0aCwgc2V0SGVhbHRoXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3N5bXB0b20xLCBzZXRTeW10b20xXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3N5bXB0b20yLCBzZXRTeW10b20yXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3N5bXB0b20zLCBzZXRTeW10b20zXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3N5bXB0b200LCBzZXRTeW10b200XSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGNvbnN0IFtjaGVjazEsIHNldENoZWNrMV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtjaGVjazIsIHNldENoZWNrMl0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtjaGVjazMsIHNldENoZWNrM10gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtjaGVjazQsIHNldENoZWNrNF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldERpc2Vhc2UoKVxyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICBjb25zdCBnZXREaXNlYXNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCBkaXNlc2FzZUNhdCA9IGF3YWl0IGF4aW9zLmdldChVUkwpXHJcbiAgICAgICAgc2V0SGVhbHRocyhkaXNlc2FzZUNhdC5kYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldERhdGEgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIGxldCB0bXBcclxuICAgICAgICByZXR1cm4gKGhlYWx0aHMuZGlzZWFzZS5tYXAoKGl0ZW0pID0+XHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgzPuC5geC4oeC4p+C4guC4reC4h+C4l+C5iOC4suC4meC4oeC4teC4reC4suC4geC4suC4o+C4lOC4seC4h+C4meC4teC5ieC4q+C4o+C4t+C4reC5hOC4oeC5iCDguYLguJvguKPguJTguJXguLTguYrguIHguYDguKXguLfguK3guIHguJXguLLguKHguK3guLLguIHguLLguKPguILguYnguLLguIfguJXguYnguJk8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRDaGVjazEoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17aXRlbS5zeW1wdG9tMX0gLz4ge2l0ZW0uc3ltcHRvbTF9XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17KGUpID0+IHNldENoZWNrMihlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXtpdGVtLnN5bXB0b20yfSAvPiB7aXRlbS5zeW1wdG9tMn1cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2hlY2szKGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e2l0ZW0uc3ltcHRvbTN9IC8+IHtpdGVtLnN5bXB0b20zfVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRDaGVjazQoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17aXRlbS5zeW1wdG9tNH0gLz4ge2l0ZW0uc3ltcHRvbTR9XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG5cclxuXHJcbiAgICAgICAgKSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgcHJpbnREaXNlYXNlID0gKCkgPT4ge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBoZWFsdGhzLmRpc2Vhc2UubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9IHwge2l0ZW0uc3ltcHRvbTF9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIEhlbGxvIFN5bXB0b21cclxuXHJcbiAgICAgICAgICAgIHtwcmludERpc2Vhc2UoKX1cclxuICAgICAgICAgICAge3NldERhdGEoKX1cclxuICAgICAgICAgICAgVGVzdDp7Y2hlY2sxfSA8YnIgLz5cclxuICAgICAgICAgICAgVGVzdDI6e2NoZWNrMn0gPGJyIC8+XHJcbiAgICAgICAgICAgIFRlc3QzOntjaGVjazN9IDxiciAvPlxyXG4gICAgICAgICAgICBUZXN0NDoge2NoZWNrNH0gPGJyIC8+XHJcblxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3ltcHRvbSJdLCJzb3VyY2VSb290IjoiIn0=