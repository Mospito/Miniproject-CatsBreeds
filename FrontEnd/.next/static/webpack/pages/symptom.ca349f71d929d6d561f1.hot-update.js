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
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");




var _jsxFileName = "D:\\001Study\\Year3Therm2\\240-311 Distributed\\Final-MiniProject\\CatBreeds\\FrontEnd\\pages\\symptom.js",
    _this = undefined,
    _s = $RefreshSig$();




var nameOfDisease = " ";
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

  var PrintCheckBoxData = function PrintCheckBoxData() {
    var tmp;
    return healths.disease.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: " w-1/2 h-full",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          onChange: function onChange(e) {
            return setCheck1(e.target.value);
          },
          value: item.symptom1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 17
        }, _this), " ", item.symptom1, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          onChange: function onChange(e) {
            return setCheck2(e.target.value);
          },
          value: item.symptom2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }, _this), " ", item.symptom2, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          onChange: function onChange(e) {
            return setCheck3(e.target.value);
          },
          value: item.symptom3
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }, _this), " ", item.symptom3, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          onChange: function onChange(e) {
            return setCheck4(e.target.value);
          },
          value: item.symptom4
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 17
        }, _this), " ", item.symptom4, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }, _this);
    });
  };

  var FindDisease = function FindDisease(dis1, dis2, dis3, dis4) {
    var tmp;
    var i = 0;
    var nameDis = [];
    var arr1 = [];
    var arr2 = [];
    var arr3 = [];
    var arr4 = [];
    nameDis = healths.disease.map(function (item) {
      return item.name;
    });
    arr1 = healths.disease.map(function (item) {
      return item.symptom1;
    });
    arr2 = healths.disease.map(function (item) {
      return item.symptom2;
    });
    arr3 = healths.disease.map(function (item) {
      return item.symptom3;
    });
    arr4 = healths.disease.map(function (item) {
      return item.symptom4;
    });

    for (i = 0; i < nameDis.length; i++) {
      if (arr1[i] === dis1 && arr2[i] === dis2 && arr3[i] === dis3 || arr4 === dis4) {
        nameOfDisease = nameDis[i];
        console.log(nameOfDisease);
        console.log(i);
      } else {
        nameOfDisease = "ขออภัยไม่สามารถตรวจเจอโรคในระบบ / กรุณาติ๊กเลือกตามอาการข้างต้น";
      }
    } // healths.disease.map((item) => {
    //     if (item.symptom1 === dis1 && item.symptom2 === dis2 && item.symptom3 === dis3 && item.symptom4 === dis4) {
    //         tmp = item.name
    //     }
    //     else {
    //         tmp = "ไม่เจอโรคในระบบ"
    //     }
    // })
    // nameOfDisease = tmp

  };

  var printDisease = function printDisease() {
    return healths.disease.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: [item.name, " | ", item.symptom1]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex flex-col h-screen w-screen justify-start items-center  fixed mt-5",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "font-bold text-3xl",
      children: "\u0E22\u0E34\u0E19\u0E14\u0E35\u0E15\u0E49\u0E2D\u0E19\u0E23\u0E31\u0E1A\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E42\u0E23\u0E04\u0E02\u0E2D\u0E07\u0E41\u0E21\u0E27"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: "font-bold mt-10",
      children: "\u0E41\u0E21\u0E27\u0E02\u0E2D\u0E07\u0E17\u0E48\u0E32\u0E19\u0E21\u0E35\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E14\u0E31\u0E07\u0E19\u0E35\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48 \u0E42\u0E1B\u0E23\u0E14\u0E15\u0E34\u0E4A\u0E01\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E32\u0E21\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E02\u0E49\u0E32\u0E07\u0E15\u0E49\u0E19"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-col items-center  w-2/4 h-2/4 overflow-auto mt-5",
      children: [PrintCheckBoxData(), FindDisease(check1, check2, check3, check4)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "mt-5",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "font-bold ",
        children: "\u0E41\u0E21\u0E27\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E40\u0E1B\u0E47\u0E19\u0E42\u0E23\u0E04 :"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 36
      }, _this), "  ", nameOfDisease]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-screen -mt-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 128,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3ltcHRvbS5qcyJdLCJuYW1lcyI6WyJuYW1lT2ZEaXNlYXNlIiwiVVJMIiwic3ltcHRvbSIsInVzZVN0YXRlIiwiaGVhbHRocyIsInNldEhlYWx0aHMiLCJoZWFsdGgiLCJzZXRIZWFsdGgiLCJuYW1lIiwic2V0TmFtZSIsInN5bXB0b20xIiwic2V0U3ltdG9tMSIsInN5bXB0b20yIiwic2V0U3ltdG9tMiIsInN5bXB0b20zIiwic2V0U3ltdG9tMyIsInN5bXB0b200Iiwic2V0U3ltdG9tNCIsImNoZWNrMSIsInNldENoZWNrMSIsImNoZWNrMiIsInNldENoZWNrMiIsImNoZWNrMyIsInNldENoZWNrMyIsImNoZWNrNCIsInNldENoZWNrNCIsInVzZUVmZmVjdCIsImdldERpc2Vhc2UiLCJheGlvcyIsImdldCIsImRpc2VzYXNlQ2F0IiwiZGF0YSIsIlByaW50Q2hlY2tCb3hEYXRhIiwidG1wIiwiZGlzZWFzZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkZpbmREaXNlYXNlIiwiZGlzMSIsImRpczIiLCJkaXMzIiwiZGlzNCIsImkiLCJuYW1lRGlzIiwiYXJyMSIsImFycjIiLCJhcnIzIiwiYXJyNCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJwcmludERpc2Vhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBSUEsYUFBYSxHQUFHLEdBQXBCO0FBR0EsSUFBTUMsR0FBRyxpQ0FBVDs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBRVlDLHNEQUFRLENBQUM7QUFDbkMsZUFBVyxDQUNQO0FBQ0ksWUFBTSxDQURWO0FBRUksY0FBUSxZQUZaO0FBR0ksa0JBQVksZ0JBSGhCO0FBSUksa0JBQVksYUFKaEI7QUFLSSxrQkFBWSx1QkFMaEI7QUFNSSxrQkFBWTtB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ZSxHQUFNO0FBRXZCLFdBQ0luRCxPQUFPLENBQUM4QixPQUFSLENBQWdCQyxHQUFoQixDQUFvQixVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSwwQkFDaEI7QUFBQSxtQkFDS0QsSUFBSSxDQUFDNUIsSUFEVixTQUNtQjRCLElBQUksQ0FBQzFCLFFBRHhCO0FBQUEsU0FBUzJCLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURnQjtBQUFBLEtBQXBCLENBREo7QUFRSCxHQVZEOztBQWVBLHNCQUVJO0FBQUssYUFBUyxFQUFDLHdFQUFmO0FBQUEsNEJBRUk7QUFBSSxlQUFTLEVBQUMsb0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQUlJO0FBQUcsZUFBUyxFQUFDLGlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkosZUFLSTtBQUFLLGVBQVMsRUFBQyw0REFBZjtBQUFBLGlCQUNLTCxpQkFBaUIsRUFEdEIsRUFFS1MsV0FBVyxDQUFDdkIsTUFBRCxFQUFTRSxNQUFULEVBQWlCRSxNQUFqQixFQUF5QkUsTUFBekIsQ0FGaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEosZUFXSTtBQUFNLGVBQVMsRUFBQyxNQUFoQjtBQUFBLDhCQUF1QjtBQUFHLGlCQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF2QixRQUEyRXhCLGFBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhKLGVBYUk7QUFBSyxlQUFTLEVBQUMsZ0JBQWY7QUFBQSw2QkFDSSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZKO0FBcUJILENBMUlEOztHQUFNRSxPOztBQTRJU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3ltcHRvbS5jYTM0OWY3MWQ5MjlkNmQ1NjFmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcclxuXHJcbmxldCBuYW1lT2ZEaXNlYXNlID0gXCIgXCJcclxuXHJcblxyXG5jb25zdCBVUkwgPSBgaHR0cDovL2xvY2FsaG9zdC9hcGkvZGlzZWFzZWBcclxuY29uc3Qgc3ltcHRvbSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbaGVhbHRocywgc2V0SGVhbHRoc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgXCJkaXNlYXNlXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwi4LmC4Lij4LiE4Lir4Lin4Lix4LiU4LmB4Lih4LinXCIsXHJcbiAgICAgICAgICAgICAgICBcInN5bXB0b20xXCI6IFwi4Lit4Liy4LiB4Liy4Lij4LmA4LiL4Li34LmI4Lit4LiH4LiL4Li24LihXCIsXHJcbiAgICAgICAgICAgICAgICBcInN5bXB0b20yXCI6IFwi4Lir4Liy4Lii4LmD4LiI4Lil4Liz4Lia4Liy4LiBIFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzeW1wdG9tM1wiOiBcIuC4oeC4teC5hOC4guC5iSDguYTguK0g4LiI4Liy4LihIOC4oeC4teC4meC5ieC4s+C4oeC4ueC4gVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzeW1wdG9tNFwiOiBcIuC5gOC4muC4t+C5iOC4reC4reC4suC4q+C4suC4o1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbaGVhbHRoLCBzZXRIZWFsdGhdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc3ltcHRvbTEsIHNldFN5bXRvbTFdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc3ltcHRvbTIsIHNldFN5bXRvbTJdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc3ltcHRvbTMsIHNldFN5bXRvbTNdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc3ltcHRvbTQsIHNldFN5bXRvbTRdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3QgW2NoZWNrMSwgc2V0Q2hlY2sxXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2NoZWNrMiwgc2V0Q2hlY2syXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2NoZWNrMywgc2V0Q2hlY2szXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2NoZWNrNCwgc2V0Q2hlY2s0XSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0RGlzZWFzZSgpXHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICBjb25zdCBnZXREaXNlYXNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCBkaXNlc2FzZUNhdCA9IGF3YWl0IGF4aW9zLmdldChVUkwpXHJcbiAgICAgICAgc2V0SGVhbHRocyhkaXNlc2FzZUNhdC5kYXRhKVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgUHJpbnRDaGVja0JveERhdGEgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIGxldCB0bXBcclxuICAgICAgICByZXR1cm4gKGhlYWx0aHMuZGlzZWFzZS5tYXAoKGl0ZW0sIGluZGV4KSA9PlxyXG4gICAgICAgIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdy0xLzIgaC1mdWxsXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRDaGVjazEoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17aXRlbS5zeW1wdG9tMX0gLz4ge2l0ZW0uc3ltcHRvbTF9XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17KGUpID0+IHNldENoZWNrMihlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXtpdGVtLnN5bXB0b20yfSAvPiB7aXRlbS5zeW1wdG9tMn1cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2hlY2szKGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e2l0ZW0uc3ltcHRvbTN9IC8+IHtpdGVtLnN5bXB0b20zfVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRDaGVjazQoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17aXRlbS5zeW1wdG9tNH0gLz4ge2l0ZW0uc3ltcHRvbTR9XHJcbiAgICAgICAgICAgICAgICB7Lyoge25ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKX0gKi99XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG5cclxuXHJcbiAgICAgICAgKSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBGaW5kRGlzZWFzZSA9IChkaXMxLCBkaXMyLCBkaXMzLCBkaXM0KSA9PiB7XHJcblxyXG4gICAgICAgIGxldCB0bXBcclxuICAgICAgICBsZXQgaSA9IDBcclxuICAgICAgICBsZXQgbmFtZURpcyA9IFtdXHJcbiAgICAgICAgbGV0IGFycjEgPSBbXVxyXG4gICAgICAgIGxldCBhcnIyID0gW11cclxuICAgICAgICBsZXQgYXJyMyA9IFtdXHJcbiAgICAgICAgbGV0IGFycjQgPSBbXVxyXG5cclxuICAgICAgICBuYW1lRGlzID0gKGhlYWx0aHMuZGlzZWFzZS5tYXAoKGl0ZW0pID0+IGl0ZW0ubmFtZSkpXHJcbiAgICAgICAgYXJyMSA9IChoZWFsdGhzLmRpc2Vhc2UubWFwKChpdGVtKSA9PiBpdGVtLnN5bXB0b20xKSlcclxuICAgICAgICBhcnIyID0gKGhlYWx0aHMuZGlzZWFzZS5tYXAoKGl0ZW0pID0+IGl0ZW0uc3ltcHRvbTIpKVxyXG4gICAgICAgIGFycjMgPSAoaGVhbHRocy5kaXNlYXNlLm1hcCgoaXRlbSkgPT4gaXRlbS5zeW1wdG9tMykpXHJcbiAgICAgICAgYXJyNCA9IChoZWFsdGhzLmRpc2Vhc2UubWFwKChpdGVtKSA9PiBpdGVtLnN5bXB0b200KSlcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG5hbWVEaXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGFycjFbaV0gPT09IGRpczEgJiYgYXJyMltpXSA9PT0gZGlzMiAmJiBhcnIzW2ldID09PSBkaXMzIHx8IGFycjQgPT09IGRpczQpIHtcclxuICAgICAgICAgICAgICAgIG5hbWVPZkRpc2Vhc2UgPSBuYW1lRGlzW2ldXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuYW1lT2ZEaXNlYXNlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmFtZU9mRGlzZWFzZSA9IFwi4LiC4Lit4Lit4Lig4Lix4Lii4LmE4Lih4LmI4Liq4Liy4Lih4Liy4Lij4LiW4LiV4Lij4Lin4LiI4LmA4LiI4Lit4LmC4Lij4LiE4LmD4LiZ4Lij4Liw4Lia4LiaIC8g4LiB4Lij4Li44LiT4Liy4LiV4Li04LmK4LiB4LmA4Lil4Li34Lit4LiB4LiV4Liy4Lih4Lit4Liy4LiB4Liy4Lij4LiC4LmJ4Liy4LiH4LiV4LmJ4LiZXCJcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyBoZWFsdGhzLmRpc2Vhc2UubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmIChpdGVtLnN5bXB0b20xID09PSBkaXMxICYmIGl0ZW0uc3ltcHRvbTIgPT09IGRpczIgJiYgaXRlbS5zeW1wdG9tMyA9PT0gZGlzMyAmJiBpdGVtLnN5bXB0b200ID09PSBkaXM0KSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0bXAgPSBpdGVtLm5hbWVcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgIHRtcCA9IFwi4LmE4Lih4LmI4LmA4LiI4Lit4LmC4Lij4LiE4LmD4LiZ4Lij4Liw4Lia4LiaXCJcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgLy8gbmFtZU9mRGlzZWFzZSA9IHRtcFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBwcmludERpc2Vhc2UgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGhlYWx0aHMuZGlzZWFzZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX0gfCB7aXRlbS5zeW1wdG9tMX1cclxuXHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaC1zY3JlZW4gdy1zY3JlZW4ganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgIGZpeGVkIG10LTVcIj5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGgtc2NyZWVuIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXInPiAqL31cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtM3hsJz7guKLguLTguJnguJTguLXguJXguYnguK3guJnguKPguLHguJrguYDguILguYnguLLguKrguLnguYjguKPguLDguJrguJrguJXguKPguKfguIjguKrguK3guJrguYLguKPguITguILguK3guIfguYHguKHguKc8L2gxPlxyXG4gICAgICAgICAgICB7Lyoge3ByaW50RGlzZWFzZSgpfSAqL31cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdmb250LWJvbGQgbXQtMTAnPuC5geC4oeC4p+C4guC4reC4h+C4l+C5iOC4suC4meC4oeC4teC4reC4suC4geC4suC4o+C4lOC4seC4h+C4meC4teC5ieC4q+C4o+C4t+C4reC5hOC4oeC5iCDguYLguJvguKPguJTguJXguLTguYrguIHguYDguKXguLfguK3guIHguJXguLLguKHguK3guLLguIHguLLguKPguILguYnguLLguIfguJXguYnguJk8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgIHctMi80IGgtMi80IG92ZXJmbG93LWF1dG8gbXQtNVwiPlxyXG4gICAgICAgICAgICAgICAge1ByaW50Q2hlY2tCb3hEYXRhKCl9XHJcbiAgICAgICAgICAgICAgICB7RmluZERpc2Vhc2UoY2hlY2sxLCBjaGVjazIsIGNoZWNrMywgY2hlY2s0KX1cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXQtNVwiPjxhIGNsYXNzTmFtZT0nZm9udC1ib2xkICcgPuC5geC4oeC4p+C4guC4reC4h+C4hOC4uOC4k+C5gOC4m+C5h+C4meC5guC4o+C4hCA6PC9hPiAge25hbWVPZkRpc2Vhc2V9PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctc2NyZWVuIC1tdC0zJz5cclxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzeW1wdG9tIl0sInNvdXJjZVJvb3QiOiIifQ==