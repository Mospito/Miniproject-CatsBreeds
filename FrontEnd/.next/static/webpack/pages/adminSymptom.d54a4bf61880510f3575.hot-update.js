webpackHotUpdate_N_E("pages/adminSymptom",{

/***/ "./pages/adminSymptom.js":
/*!*******************************!*\
  !*** ./pages/adminSymptom.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");




var _jsxFileName = "D:\\001Study\\Year3Therm2\\240-311 Distributed\\Final-MiniProject\\CatBreeds\\FrontEnd\\pages\\adminSymptom.js",
    _this = undefined,
    _s = $RefreshSig$();




var URL = "http://localhost/api/disease";

var fetcher = function fetcher(url) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url).then(function (res) {
    return res.data;
  });
};

var adminSymptom = function adminSymptom() {
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

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_5__["default"])(URL, fetcher),
      data = _useSWR.data,
      error = _useSWR.error;

  if (!data) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 16
    }, _this);
  }

  console.log('Home', data);

  var printSymtom = function printSymtom(healths) {
    return healths.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
          children: ["ID: ", index + 1]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
          children: ["name: ", item.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, _this);
    });
  };

  var addSymptom = /*#__PURE__*/function () {
    var _ref = Object(D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(name, symptom1, symptom2, symptom3, symptom4) {
      var tmp;
      return D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(URL, {
                name: name,
                symptom1: symptom1,
                symptom2: symptom2,
                symptom3: symptom3,
                symptom4: symptom4
              });

            case 2:
              tmp = _context.sent;
              Object(swr__WEBPACK_IMPORTED_MODULE_5__["mutate"])(URL);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function addSymptom(_x, _x2, _x3, _x4, _x5) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: ["Hello", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
      children: printSymtom(data.disease)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
      children: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E42\u0E23\u0E04\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
          children: "\u0E0A\u0E37\u0E48\u0E2D\u0E42\u0E23\u0E04 "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          type: "text",
          className: "border-2 border-black",
          onChange: function onChange(e) {
            return setName(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
          children: "\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 1 "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          type: "text",
          className: "border-2 border-black",
          onChange: function onChange(e) {
            return setSymtom1(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
          children: "\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 2 "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          type: "text",
          className: "border-2 border-black",
          onChange: function onChange(e) {
            return setSymtom2(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
          children: "\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 3 "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          type: "text",
          className: "border-2 border-black",
          onChange: function onChange(e) {
            return setSymtom3(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
          children: "\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 4 "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          type: "text",
          className: "border-2 border-black",
          onChange: function onChange(e) {
            return setSymtom4(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        className: "border-2 border-black",
        onClick: function onClick() {
          return addSymptom(name, symptom1, symptom2, symptom3, symptom4);
        },
        children: "\u0E15\u0E01\u0E25\u0E07!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 9
  }, _this);
};

_s(adminSymptom, "Du7b2GKPYvcoq6CyDws71+dKWBU=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

/* harmony default export */ __webpack_exports__["default"] = (adminSymptom);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW5TeW1wdG9tLmpzIl0sIm5hbWVzIjpbIlVSTCIsImZldGNoZXIiLCJ1cmwiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiYWRtaW5TeW1wdG9tIiwidXNlU3RhdGUiLCJoZWFsdGhzIiwic2V0SGVhbHRocyIsImhlYWx0aCIsInNldEhlYWx0aCIsIm5hbWUiLCJzZXROYW1lIiwic3ltcHRvbTEiLCJzZXRTeW10b20xIiwic3ltcHRvbTIiLCJzZXRTeW10b20yIiwic3ltcHRvbTMiLCJzZXRTeW10b20zIiwic3ltcHRvbTQiLCJzZXRTeW10b200IiwidXNlU1dSIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicHJpbnRTeW10b20iLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJhZGRTeW1wdG9tIiwicG9zdCIsInRtcCIsIm11dGF0ZSIsImRpc2Vhc2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsR0FBRyxpQ0FBVDs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxHQUFEO0FBQUEsU0FBU0MsNENBQUssQ0FBQ0MsR0FBTixDQUFVRixHQUFWLEVBQWVHLElBQWYsQ0FBb0IsVUFBQUMsR0FBRztBQUFBLFdBQUlBLEdBQUcsQ0FBQ0MsSUFBUjtBQUFBLEdBQXZCLENBQVQ7QUFBQSxDQUFoQjs7QUFHQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQUEsa0JBRU9DLHNEQUFRLENBQUM7QUFDbkMsZUFBVyxDQUNQO0FBQ0ksWUFBTSxDQURWO0FBRUksY0FBUSxZQUZaO0FBR0ksa0JBQVksZ0JBSGhCO0FBSUksa0JBQVksYUFKaEI7QUFLSSxrQkFBWSx1QkFMaEI7QUFNSSxrQkFBWTtBQU5oQixLQURPO0FBRHdCLEdBQUQsQ0FGZjtBQUFB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LGlCQURKLGVBRUk7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUFtQixtQkFBUyxFQUFDLHVCQUE3QjtBQUFxRCxrQkFBUSxFQUFFLGtCQUFDRixDQUFEO0FBQUEsbUJBQUtkLFVBQVUsQ0FBQ2MsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakJKLGVBcUJJO0FBQVEsaUJBQVMsRUFBQyx1QkFBbEI7QUFBMEMsZUFBTyxFQUFFO0FBQUEsaUJBQU1QLFVBQVUsQ0FBQ2xCLElBQUQsRUFBTUUsUUFBTixFQUFlRSxRQUFmLEVBQXdCRSxRQUF4QixFQUFpQ0UsUUFBakMsQ0FBaEI7QUFBQSxTQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW1DSCxDQXhGRDs7R0FBTWQsWTtVQXdCc0JnQiwyQzs7O0FBa0ViaEIsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW5TeW1wdG9tLmQ1NGE0YmY2MTg4MDUxMGYzNTc1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHVzZVNXUiwgeyBtdXRhdGUgfSBmcm9tICdzd3InXHJcblxyXG5jb25zdCBVUkwgPSBgaHR0cDovL2xvY2FsaG9zdC9hcGkvZGlzZWFzZWBcclxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGF4aW9zLmdldCh1cmwpLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxyXG5cclxuXHJcbmNvbnN0IGFkbWluU3ltcHRvbSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbaGVhbHRocywgc2V0SGVhbHRoc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgXCJkaXNlYXNlXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwi4LmC4Lij4LiE4Lir4Lin4Lix4LiU4LmB4Lih4LinXCIsXHJcbiAgICAgICAgICAgICAgICBcInN5bXB0b20xXCI6IFwi4Lit4Liy4LiB4Liy4Lij4LmA4LiL4Li34LmI4Lit4LiH4LiL4Li24LihXCIsXHJcbiAgICAgICAgICAgICAgICBcInN5bXB0b20yXCI6IFwi4Lir4Liy4Lii4LmD4LiI4Lil4Liz4Lia4Liy4LiBIFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzeW1wdG9tM1wiOiBcIuC4oeC4teC5hOC4guC5iSDguYTguK0g4LiI4Liy4LihIOC4oeC4teC4meC5ieC4s+C4oeC4ueC4gVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzeW1wdG9tNFwiOiBcIuC5gOC4muC4t+C5iOC4reC4reC4suC4q+C4suC4o1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgW2hlYWx0aCwgc2V0SGVhbHRoXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3N5bXB0b20xLCBzZXRTeW10b20xXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3N5bXB0b20yLCBzZXRTeW10b20yXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3N5bXB0b20zLCBzZXRTeW10b20zXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3N5bXB0b200LCBzZXRTeW10b200XSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFVSTCwgZmV0Y2hlcilcclxuICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKCdIb21lJywgZGF0YSk7XHJcblxyXG4gICAgY29uc3QgcHJpbnRTeW10b20gPSAoaGVhbHRocykgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGhlYWx0aHMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPklEOiB7aW5kZXgrMX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+bmFtZToge2l0ZW0ubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGNvbnN0IGFkZFN5bXB0b20gPSBhc3luYyAobmFtZSwgc3ltcHRvbTEsIHN5bXB0b20yLCBzeW1wdG9tMywgc3ltcHRvbTQpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IHRtcCA9IGF3YWl0IGF4aW9zLnBvc3QoVVJMLCB7IG5hbWUsIHN5bXB0b20xLCBzeW1wdG9tMiwgc3ltcHRvbTMsIHN5bXB0b200IH0pXHJcbiAgICAgICAgbXV0YXRlKFVSTClcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBIZWxsb1xyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7cHJpbnRTeW10b20oZGF0YS5kaXNlYXNlKX1cclxuICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgIDxhPuC5gOC4nuC4tOC5iOC4oeC5guC4o+C4hOC5gOC4guC5ieC4suC4quC4ueC5iOC4o+C4sOC4muC4mjwvYT5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8YT7guIrguLfguYjguK3guYLguKPguIQgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ibGFja1wiIG9uQ2hhbmdlPXsoZSk9PnNldE5hbWUoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8YT7guK3guLLguIHguLLguKPguJfguLXguYggMSA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWJsYWNrXCIgb25DaGFuZ2U9eyhlKT0+c2V0U3ltdG9tMShlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPuC4reC4suC4geC4suC4o+C4l+C4teC5iCAyIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItYmxhY2tcIiBvbkNoYW5nZT17KGUpPT5zZXRTeW10b20yKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+4Lit4Liy4LiB4Liy4Lij4LiX4Li14LmIIDMgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ibGFja1wiIG9uQ2hhbmdlPXsoZSk9PnNldFN5bXRvbTMoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8YT7guK3guLLguIHguLLguKPguJfguLXguYggNCA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWJsYWNrXCIgb25DaGFuZ2U9eyhlKT0+c2V0U3ltdG9tNChlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWJsYWNrXCIgb25DbGljaz17KCkgPT4gYWRkU3ltcHRvbShuYW1lLHN5bXB0b20xLHN5bXB0b20yLHN5bXB0b20zLHN5bXB0b200KX0+4LiV4LiB4Lil4LiHITwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkbWluU3ltcHRvbSJdLCJzb3VyY2VSb290IjoiIn0=