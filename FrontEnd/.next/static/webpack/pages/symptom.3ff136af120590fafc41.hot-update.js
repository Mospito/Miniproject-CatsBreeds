webpackHotUpdate_N_E("pages/symptom",{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new TypeError("\"" + name + "\" is read-only");
}

/***/ }),

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
/* harmony import */ var D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "D:\\001Study\\Year3Therm2\\240-311 Distributed\\Final-MiniProject\\CatBreeds\\FrontEnd\\pages\\symptom.js",
    _this = undefined,
    _s = $RefreshSig$();



var URL = "http://localhost/api/disease";

var symptom = function symptom() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      health = _useState2[0],
      setHealth = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      name = _useState3[0],
      setName = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      symptom1 = _useState4[0],
      setSymtom1 = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      symptom2 = _useState5[0],
      setSymtom2 = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      symptom3 = _useState6[0],
      setSymtom3 = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      symptom4 = _useState7[0],
      setSymtom4 = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      check1 = _useState8[0],
      setCheck1 = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
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
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(URL);

            case 2:
              disesaseCat = _context.sent;
              setHealths(disesaseCat.data);
              healths.disease.map(function (item) {
                setHealth = (Object(D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_3__["default"])("setHealth"), item);
              });

            case 5:
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
        lineNumber: 51,
        columnNumber: 17
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: ["Hello Symptom", printDisease(), "Test:", check1, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "checkbox",
      onChange: function onChange(e) {
        return setCheck1(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 12
    }, _this), " ", symptom1]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 9
  }, _this);
};

_s(symptom, "YZa2WYgnee/xN2Xqf2uqO/cHCTo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlYWRPbmx5RXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3N5bXB0b20uanMiXSwibmFtZXMiOlsiVVJMIiwic3ltcHRvbSIsInVzZVN0YXRlIiwiaGVhbHRocyIsInNldEhlYWx0aHMiLCJoZWFsdGgiLCJzZXRIZWFsdGgiLCJuYW1lIiwic2V0TmFtZSIsInN5bXB0b20xIiwic2V0U3ltdG9tMSIsInN5bXB0b20yIiwic2V0U3ltdG9tMiIsInN5bXB0b20zIiwic2V0U3ltdG9tMyIsInN5bXB0b200Iiwic2V0U3ltdG9tNCIsImNoZWNrMSIsInNldENoZWNrMSIsInVzZUVmZmVjdCIsImdldERpc2Vhc2UiLCJheGlvcyIsImdldCIsImRpc2VzYXNlQ2F0IiwiZGF0YSIsImRpc2Vhc2UiLCJtYXAiLCJpdGVtIiwicHJpbnREaXNlYXNlIiwiaW5kZXgiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUdBLElBQU1BLEdBQUcsaUNBQVQ7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLGtCQUVZQyxzREFBUSxDQUFDO0FBQ25DLGVBQVcsQ0FDUDtBQUNJLFlBQU0sQ0FEVjtBQUVJLGNBQVEsWUFGWjtBQUdJLGtCQUFZLGdCQUhoQjtBQUlJLGtCQUFZLGFBSmhCO0FBS0ksa0JBQVksdUJBTGhCO0FBTUksa0JBQVk7QUFOaEIsS0FETztBQUR3QixHQUFELENBRnBCO0FBQUEsTUFFWEMsT0FGVztBQUFBLE1BRUZDLFVBRkU7O0FBQUEsbUJBY1VGLHNEQUFRLENBQUMsRUFBRCxDQWRsQjtBQUFBLE1BY1hHLE1BZFc7QUFBQSxNQWNIQyxTQWRHOztBQUFBLG1CQWVNSixzREFBUSxDQUFDLEVBQUQsQ0FmZDtBQUFBLE1BZVhLLElBZlc7QUFBQSxNQWVMQyxPQWZLOztBQUFBLG1CQWdCYU4sc0RBQVEsQ0FBQyxFQUFELENBaEJyQjtBQUFBLE1BZ0JYTyxRQWhCVztBQUFBLE1BZ0JEQyxVQWhCQzs7QUFBQSxtQkFpQmFSLHNEQUFRLENBQUMsRUFBRCxDQWpCckI7QUFBQSxNQWlCWFMsUUFqQlc7QUFBQSxNQWlCREMsVUFqQkM7O0FBQUEsbUJBa0JhVixzREFBUSxDQUFDLEVBQUQsQ0FsQnJCO0FBQUEsTUFrQlhXLFFBbEJXO0FBQUEsTUFrQkRDLFVBbEJDOztBQUFBLG1CQW1CYVosc0RBQVEsQ0FBQyxFQUFELENBbkJyQjtBQUFBLE1BbUJYYSxRQW5CVztBQUFBLE1BbUJEQyxVQW5CQzs7QUFBQSxtQkFxQlVkLHNEQUFRLENBQUMsRUFBRCxDQXJCbEI7QUFBQSxNQXFCWGUsTUFyQlc7QUFBQSxNQXFCSEMsU0FyQkc7O0FBdUJsQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLGNBQVU7QUFDYixHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUtBLE1BQU1BLFVBQVU7QUFBQSx3WEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNTQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVV0QixHQUFWLENBRFQ7O0FBQUE7QUFDWHVCLHlCQURXO0FBRWZuQix3QkFBVSxDQUFDbUIsV0FBVyxDQUFDQyxJQUFiLENBQVY7QUFFQXJCLHFCQUFPLENBQUNzQixPQUFSLENBQWdCQyxHQUFoQixDQUFvQixVQUFDQyxJQUFELEVBQVU7QUFDMUJyQix5QkFBUyx1TUFBR3FCLElBQUgsQ0FBVDtBQUNILGVBRkQ7O0FBSmU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVlAsVUFBVTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUFhQSxNQUFNUSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBRXZCLFdBQ0l6QixPQUFPLENBQUNzQixPQUFSLENBQWdCQyxHQUFoQixDQUFvQixVQUFDQyxJQUFELEVBQU9FLEtBQVA7QUFBQSwwQkFDaEI7QUFBQSxtQkFDS0YsSUFBSSxDQUFDcEIsSUFEVixTQUNtQm9CLElBQUksQ0FBQ2xCLFFBRHhCO0FBQUEsU0FBU29CLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURnQjtBQUFBLEtBQXBCLENBREo7QUFRSCxHQVZEOztBQWNBLHNCQUNJO0FBQUEsZ0NBR0tELFlBQVksRUFIakIsV0FJVVgsTUFKVixlQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSixlQU1HO0FBQVEsVUFBSSxFQUFDLFVBQWI7QUFBMEIsY0FBUSxFQUFJLGtCQUFDYSxDQUFEO0FBQUEsZUFBT1osU0FBUyxDQUFDWSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFoQjtBQUFBO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSCxPQU04RXZCLFFBTjlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBWUgsQ0FuRUQ7O0dBQU1SLE87O0FBcUVTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zeW1wdG9tLjNmZjEzNmFmMTIwNTkwZmFmYzQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcmVhZE9ubHlFcnJvcihuYW1lKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJcXFwiXCIgKyBuYW1lICsgXCJcXFwiIGlzIHJlYWQtb25seVwiKTtcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcblxyXG5jb25zdCBVUkwgPSBgaHR0cDovL2xvY2FsaG9zdC9hcGkvZGlzZWFzZWBcclxuY29uc3Qgc3ltcHRvbSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbaGVhbHRocywgc2V0SGVhbHRoc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgXCJkaXNlYXNlXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwi4LmC4Lij4LiE4Lir4Lin4Lix4LiU4LmB4Lih4LinXCIsXHJcbiAgICAgICAgICAgICAgICBcInN5bXB0b20xXCI6IFwi4Lit4Liy4LiB4Liy4Lij4LmA4LiL4Li34LmI4Lit4LiH4LiL4Li24LihXCIsXHJcbiAgICAgICAgICAgICAgICBcInN5bXB0b20yXCI6IFwi4Lir4Liy4Lii4LmD4LiI4Lil4Liz4Lia4Liy4LiBIFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzeW1wdG9tM1wiOiBcIuC4oeC4teC5hOC4guC5iSDguYTguK0g4LiI4Liy4LihIOC4oeC4teC4meC5ieC4s+C4oeC4ueC4gVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzeW1wdG9tNFwiOiBcIuC5gOC4muC4t+C5iOC4reC4reC4suC4q+C4suC4o1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbaGVhbHRoLCBzZXRIZWFsdGhdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc3ltcHRvbTEsIHNldFN5bXRvbTFdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc3ltcHRvbTIsIHNldFN5bXRvbTJdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc3ltcHRvbTMsIHNldFN5bXRvbTNdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc3ltcHRvbTQsIHNldFN5bXRvbTRdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3QgW2NoZWNrMSwgc2V0Q2hlY2sxXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0RGlzZWFzZSgpXHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGdldERpc2Vhc2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGRpc2VzYXNlQ2F0ID0gYXdhaXQgYXhpb3MuZ2V0KFVSTClcclxuICAgICAgICBzZXRIZWFsdGhzKGRpc2VzYXNlQ2F0LmRhdGEpXHJcblxyXG4gICAgICAgIGhlYWx0aHMuZGlzZWFzZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgc2V0SGVhbHRoID0gaXRlbVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuXHJcbiAgICBjb25zdCBwcmludERpc2Vhc2UgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGhlYWx0aHMuZGlzZWFzZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX0gfCB7aXRlbS5zeW1wdG9tMX1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBIZWxsbyBTeW1wdG9tXHJcblxyXG4gICAgICAgICAgICB7cHJpbnREaXNlYXNlKCl9XHJcbiAgICAgICAgICAgIFRlc3Q6e2NoZWNrMX1cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICA8aW5wdXQgIHR5cGU9XCJjaGVja2JveFwiICAgb25DaGFuZ2U9IHsgKGUpID0+IHNldENoZWNrMShlLnRhcmdldC52YWx1ZSl9Lz4ge3N5bXB0b20xfVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN5bXB0b20iXSwic291cmNlUm9vdCI6IiJ9