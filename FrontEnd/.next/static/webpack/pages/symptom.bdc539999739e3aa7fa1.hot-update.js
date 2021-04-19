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

  var printDisease = function printDisease() {
    return healths.disease.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: [item.name, " | ", item.symptom1]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: ["Hello Symptom", printDisease(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "checkbox"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 9
  }, _this);
};

_s(symptom, "T+iaW/GA9L8+kaWa8mEBa3LhuoU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3ltcHRvbS5qcyJdLCJuYW1lcyI6WyJVUkwiLCJzeW1wdG9tIiwidXNlU3RhdGUiLCJoZWFsdGhzIiwic2V0SGVhbHRocyIsImhlYWx0aCIsInNldEhlYWx0aCIsIm5hbWUiLCJzZXROYW1lIiwic3ltcHRvbTEiLCJzZXRTeW10b20xIiwic3ltcHRvbTIiLCJzZXRTeW10b20yIiwic3ltcHRvbTMiLCJzZXRTeW10b20zIiwic3ltcHRvbTQiLCJzZXRTeW10b200IiwidXNlRWZmZWN0IiwiZ2V0RGlzZWFzZSIsImF4aW9zIiwiZ2V0IiwiZGlzZXNhc2VDYXQiLCJkYXRhIiwicHJpbnREaXNlYXNlIiwiZGlzZWFzZSIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQSxJQUFNQSxHQUFHLGlDQUFUOztBQUNBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFFWUMsc0RBQVEsQ0FBQztBQUNuQyxlQUFXLENBQ1A7QUFDSSxZQUFNLENBRFY7QUFFSSxjQUFRLFlBRlo7QUFHSSxrQkFBWSxnQkFIaEI7QUFJSSxrQkFBWSxhQUpoQjtBQUtJLGtCQUFZLHVCQUxoQjtBQU1JLGtCQUFZO0FBTmhCLEtBRE87QUFEd0IsR0FBRCxDQUZwQjtBQUFBLE1BRVhDLE9BRlc7QUFBQSxNQUVGQyxVQUZFOztBQUFBLG1CQWNVRixzREFBUSxDQUFDLEVBQUQsQ0FkbEI7QUFBQSxNQWNYRyxNQWRXO0FBQUEsTUFjSEMsU0FkRzs7QUFBQSxtQkFlTUosc0RBQVEsQ0FBQyxFQUFELENBZmQ7QUFBQSxNQWVYSyxJQWZXO0FBQUEsTUFlTEMsT0FmSzs7QUFBQSxtQkFnQmFOLHNEQUFRLENBQUMsRUFBRCxDQWhCckI7QUFBQSxNQWdCWE8sUUFoQlc7QUFBQSxNQWdCREMsVUFoQkM7O0FBQUEsbUJBaUJhUixzREFBUSxDQUFDLEVBQUQsQ0FqQnJCO0FBQUEsTUFpQlhTLFFBakJXO0FBQUEsTUFpQkRDLFVBakJDOztBQUFBLG1CQWtCYVYsc0RBQVEsQ0FBQyxFQUFELENBbEJyQjtBQUFBLE1Ba0JYVyxRQWxCVztBQUFBLE1Ba0JEQyxVQWxCQzs7QUFBQSxtQkFtQmFaLHNEQUFRLENBQUMsRUFBRCxDQW5CckI7QUFBQSxNQW1CWGEsUUFuQlc7QUFBQSxNQW1CREMsVUFuQkM7O0FBcUJsQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLGNBQVU7QUFDYixHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUtBLE1BQU1BLFVBQVU7QUFBQSx3WEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNTQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVwQixHQUFWLENBRFQ7O0FBQUE7QUFDWHFCLHlCQURXO0FBRWZqQix3QkFBVSxDQUFDaUIsV0FBVyxDQUFDQyxJQUFiLENBQVY7O0FBRmU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVkosVUFBVTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUFPQSxNQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBRXZCLFdBQ0lwQixPQUFPLENBQUNxQixPQUFSLENBQWdCQyxHQUFoQixDQUFvQixVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSwwQkFDaEI7QUFBQSxtQkFDS0QsSUFBSSxDQUFDbkIsSUFEVixTQUNtQm1CLElBQUksQ0FBQ2pCLFFBRHhCO0FBQUEsU0FBU2tCLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURnQjtBQUFBLEtBQXBCLENBREo7QUFRSCxHQVZEOztBQWNBLHNCQUNJO0FBQUEsZ0NBR0tKLFlBQVksRUFIakIsZUFJRztBQUFRLFVBQUksRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVVILENBekREOztHQUFNdEIsTzs7QUEyRFNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N5bXB0b20uYmRjNTM5OTk5NzM5ZTNhYTdmYTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcbmNvbnN0IFVSTCA9IGBodHRwOi8vbG9jYWxob3N0L2FwaS9kaXNlYXNlYFxyXG5jb25zdCBzeW1wdG9tID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtoZWFsdGhzLCBzZXRIZWFsdGhzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBcImRpc2Vhc2VcIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCLguYLguKPguITguKvguKfguLHguJTguYHguKHguKdcIixcclxuICAgICAgICAgICAgICAgIFwic3ltcHRvbTFcIjogXCLguK3guLLguIHguLLguKPguYDguIvguLfguYjguK3guIfguIvguLbguKFcIixcclxuICAgICAgICAgICAgICAgIFwic3ltcHRvbTJcIjogXCLguKvguLLguKLguYPguIjguKXguLPguJrguLLguIEgXCIsXHJcbiAgICAgICAgICAgICAgICBcInN5bXB0b20zXCI6IFwi4Lih4Li14LmE4LiC4LmJIOC5hOC4rSDguIjguLLguKEg4Lih4Li14LiZ4LmJ4Liz4Lih4Li54LiBXCIsXHJcbiAgICAgICAgICAgICAgICBcInN5bXB0b200XCI6IFwi4LmA4Lia4Li34LmI4Lit4Lit4Liy4Lir4Liy4LijXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtoZWFsdGgsIHNldEhlYWx0aF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtzeW1wdG9tMSwgc2V0U3ltdG9tMV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtzeW1wdG9tMiwgc2V0U3ltdG9tMl0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtzeW1wdG9tMywgc2V0U3ltdG9tM10gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtzeW1wdG9tNCwgc2V0U3ltdG9tNF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldERpc2Vhc2UoKVxyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICBjb25zdCBnZXREaXNlYXNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCBkaXNlc2FzZUNhdCA9IGF3YWl0IGF4aW9zLmdldChVUkwpXHJcbiAgICAgICAgc2V0SGVhbHRocyhkaXNlc2FzZUNhdC5kYXRhKVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgcHJpbnREaXNlYXNlID0gKCkgPT4ge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBoZWFsdGhzLmRpc2Vhc2UubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9IHwge2l0ZW0uc3ltcHRvbTF9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgSGVsbG8gU3ltcHRvbVxyXG5cclxuICAgICAgICAgICAge3ByaW50RGlzZWFzZSgpfVxyXG4gICAgICAgICAgIDxpbnB1dCAgdHlwZT1cImNoZWNrYm94XCIgLz5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzeW1wdG9tIl0sInNvdXJjZVJvb3QiOiIifQ==