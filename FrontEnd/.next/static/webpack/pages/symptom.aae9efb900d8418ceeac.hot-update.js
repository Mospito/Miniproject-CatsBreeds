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
var nameDis = [];
var arr1 = [];
var arr2 = [];
var arr3 = [];
var arr4 = [];
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

            case 9:
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
          lineNumber: 62,
          columnNumber: 17
        }, _this), " ", item.symptom1, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          onChange: function onChange(e) {
            return setCheck2(e.target.value);
          },
          value: item.symptom2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 17
        }, _this), " ", item.symptom2, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          onChange: function onChange(e) {
            return setCheck3(e.target.value);
          },
          value: item.symptom3
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }, _this), " ", item.symptom3, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          onChange: function onChange(e) {
            return setCheck4(e.target.value);
          },
          value: item.symptom4
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 17
        }, _this), " ", item.symptom4, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 17
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }, _this);
    });
  };

  var FindDisease = function FindDisease(dis1, dis2, dis3, dis4) {
    var tmp;
    var i = 0;
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
        lineNumber: 123,
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
      lineNumber: 138,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: "font-bold mt-10",
      children: "\u0E41\u0E21\u0E27\u0E02\u0E2D\u0E07\u0E17\u0E48\u0E32\u0E19\u0E21\u0E35\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E14\u0E31\u0E07\u0E19\u0E35\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48 \u0E42\u0E1B\u0E23\u0E14\u0E15\u0E34\u0E4A\u0E01\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E32\u0E21\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E02\u0E49\u0E32\u0E07\u0E15\u0E49\u0E19"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-col items-center  w-2/4 h-2/4 overflow-auto mt-5",
      children: [PrintCheckBoxData(), FindDisease(check1, check2, check3, check4)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "mt-5",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "font-bold ",
        children: "\u0E41\u0E21\u0E27\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E40\u0E1B\u0E47\u0E19\u0E42\u0E23\u0E04 :"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 36
      }, _this), "  ", nameOfDisease]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-screen -mt-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 136,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3ltcHRvbS5qcyJdLCJuYW1lcyI6WyJuYW1lT2ZEaXNlYXNlIiwibmFtZURpcyIsImFycjEiLCJhcnIyIiwiYXJyMyIsImFycjQiLCJVUkwiLCJzeW1wdG9tIiwidXNlU3RhdGUiLCJoZWFsdGhzIiwic2V0SGVhbHRocyIsImhlYWx0aCIsInNldEhlYWx0aCIsIm5hbWUiLCJzZXROYW1lIiwic3ltcHRvbTEiLCJzZXRTeW10b20xIiwic3ltcHRvbTIiLCJzZXRTeW10b20yIiwic3ltcHRvbTMiLCJzZXRTeW10b20zIiwic3ltcHRvbTQiLCJzZXRTeW10b200IiwiY2hlY2sxIiwic2V0Q2hlY2sxIiwiY2hlY2syIiwic2V0Q2hlY2syIiwiY2hlY2szIiwic2V0Q2hlY2szIiwiY2hlY2s0Iiwic2V0Q2hlY2s0IiwidXNlRWZmZWN0IiwiZ2V0RGlzZWFzZSIsImF4aW9zIiwiZ2V0IiwiZGlzZXNhc2VDYXQiLCJkYXRhIiwiZGlzZWFzZSIsIm1hcCIsIml0ZW0iLCJQcmludENoZWNrQm94RGF0YSIsInRtcCIsImluZGV4IiwiZSIsInRhcmdldCIsInZhbHVlIiwiRmluZERpc2Vhc2UiLCJkaXMxIiwiZGlzMiIsImRpczMiLCJkaXM0IiwiaSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJwcmludERpc2Vhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBSUEsYUFBYSxHQUFHLEdBQXBCO0FBQ0EsSUFBSUMsT0FBTyxHQUFHLEVBQWQ7QUFDQSxJQUFJQyxJQUFJLEdBQUcsRUFBWDtBQUNBLElBQUlDLElBQUksR0FBRyxFQUFYO0FBQ0EsSUFBSUMsSUFBSSxHQUFHLEVBQVg7QUFDQSxJQUFJQyxJQUFJLEdBQUcsRUFBWDtBQUVBLElBQU1DLEdBQUcsaUNBQVQ7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKLGVBS0k7QUFBSyxlQUFTLEVBQUMsNERBQWY7QUFBQSxpQkFDS0YsaUJBQWlCLEVBRHRCLEVBRUtNLFdBQVcsQ0FBQ3ZCLE1BQUQsRUFBU0UsTUFBVCxFQUFpQkUsTUFBakIsRUFBeUJFLE1BQXpCLENBRmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKLGVBVUk7QUFBTSxlQUFTLEVBQUMsTUFBaEI7QUFBQSw4QkFBdUI7QUFBRyxpQkFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBdkIsUUFBMkU3QixhQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWSixlQVlJO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUEsNkJBQ0kscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGSjtBQW9CSCxDQTdJRDs7R0FBTU8sTzs7QUErSVNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N5bXB0b20uYWFlOWVmYjkwMGQ4NDE4Y2VlYWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXHJcblxyXG5sZXQgbmFtZU9mRGlzZWFzZSA9IFwiIFwiXHJcbmxldCBuYW1lRGlzID0gW11cclxubGV0IGFycjEgPSBbXVxyXG5sZXQgYXJyMiA9IFtdXHJcbmxldCBhcnIzID0gW11cclxubGV0IGFycjQgPSBbXVxyXG5cclxuY29uc3QgVVJMID0gYGh0dHA6Ly9sb2NhbGhvc3QvYXBpL2Rpc2Vhc2VgXHJcbmNvbnN0IHN5bXB0b20gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2hlYWx0aHMsIHNldEhlYWx0aHNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIFwiZGlzZWFzZVwiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIuC5guC4o+C4hOC4q+C4p+C4seC4lOC5geC4oeC4p1wiLFxyXG4gICAgICAgICAgICAgICAgXCJzeW1wdG9tMVwiOiBcIuC4reC4suC4geC4suC4o+C5gOC4i+C4t+C5iOC4reC4h+C4i+C4tuC4oVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzeW1wdG9tMlwiOiBcIuC4q+C4suC4ouC5g+C4iOC4peC4s+C4muC4suC4gSBcIixcclxuICAgICAgICAgICAgICAgIFwic3ltcHRvbTNcIjogXCLguKHguLXguYTguILguYkg4LmE4LitIOC4iOC4suC4oSDguKHguLXguJnguYnguLPguKHguLnguIFcIixcclxuICAgICAgICAgICAgICAgIFwic3ltcHRvbTRcIjogXCLguYDguJrguLfguYjguK3guK3guLLguKvguLLguKNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2hlYWx0aCwgc2V0SGVhbHRoXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3N5bXB0b20xLCBzZXRTeW10b20xXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3N5bXB0b20yLCBzZXRTeW10b20yXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3N5bXB0b20zLCBzZXRTeW10b20zXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3N5bXB0b200LCBzZXRTeW10b200XSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGNvbnN0IFtjaGVjazEsIHNldENoZWNrMV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtjaGVjazIsIHNldENoZWNrMl0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtjaGVjazMsIHNldENoZWNrM10gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtjaGVjazQsIHNldENoZWNrNF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldERpc2Vhc2UoKVxyXG4gICAgICAgIFxyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICBjb25zdCBnZXREaXNlYXNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCBkaXNlc2FzZUNhdCA9IGF3YWl0IGF4aW9zLmdldChVUkwpXHJcbiAgICAgICAgc2V0SGVhbHRocyhkaXNlc2FzZUNhdC5kYXRhKVxyXG4gICAgICAgIG5hbWVEaXMgPSAoaGVhbHRocy5kaXNlYXNlLm1hcCgoaXRlbSkgPT4gaXRlbS5uYW1lKSlcclxuICAgICAgICBhcnIxID0gKGhlYWx0aHMuZGlzZWFzZS5tYXAoKGl0ZW0pID0+IGl0ZW0uc3ltcHRvbTEpKVxyXG4gICAgICAgIGFycjIgPSAoaGVhbHRocy5kaXNlYXNlLm1hcCgoaXRlbSkgPT4gaXRlbS5zeW1wdG9tMikpXHJcbiAgICAgICAgYXJyMyA9IChoZWFsdGhzLmRpc2Vhc2UubWFwKChpdGVtKSA9PiBpdGVtLnN5bXB0b20zKSlcclxuICAgICAgICBhcnI0ID0gKGhlYWx0aHMuZGlzZWFzZS5tYXAoKGl0ZW0pID0+IGl0ZW0uc3ltcHRvbTQpKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFByaW50Q2hlY2tCb3hEYXRhID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBsZXQgdG1wXHJcbiAgICAgICAgcmV0dXJuIChoZWFsdGhzLmRpc2Vhc2UubWFwKChpdGVtLGluZGV4KSA9PlxyXG4gICAgICAgIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdy0xLzIgaC1mdWxsXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRDaGVjazEoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17aXRlbS5zeW1wdG9tMX0gLz4ge2l0ZW0uc3ltcHRvbTF9XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17KGUpID0+IHNldENoZWNrMihlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXtpdGVtLnN5bXB0b20yfSAvPiB7aXRlbS5zeW1wdG9tMn1cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2hlY2szKGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e2l0ZW0uc3ltcHRvbTN9IC8+IHtpdGVtLnN5bXB0b20zfVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRDaGVjazQoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17aXRlbS5zeW1wdG9tNH0gLz4ge2l0ZW0uc3ltcHRvbTR9XHJcbiAgICAgICAgICAgICAgICB7Lyoge25ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKX0gKi99XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG5cclxuXHJcbiAgICAgICAgKSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBGaW5kRGlzZWFzZSA9IChkaXMxLCBkaXMyLCBkaXMzLCBkaXM0KSA9PiB7XHJcbiBcclxuICAgICAgICBsZXQgdG1wXHJcbiAgICAgICAgbGV0IGkgPSAwXHJcbiBcclxuICAgICAgICBuYW1lRGlzID0gKGhlYWx0aHMuZGlzZWFzZS5tYXAoKGl0ZW0pID0+IGl0ZW0ubmFtZSkpXHJcbiAgICAgICAgYXJyMSA9IChoZWFsdGhzLmRpc2Vhc2UubWFwKChpdGVtKSA9PiBpdGVtLnN5bXB0b20xKSlcclxuICAgICAgICBhcnIyID0gKGhlYWx0aHMuZGlzZWFzZS5tYXAoKGl0ZW0pID0+IGl0ZW0uc3ltcHRvbTIpKVxyXG4gICAgICAgIGFycjMgPSAoaGVhbHRocy5kaXNlYXNlLm1hcCgoaXRlbSkgPT4gaXRlbS5zeW1wdG9tMykpXHJcbiAgICAgICAgYXJyNCA9IChoZWFsdGhzLmRpc2Vhc2UubWFwKChpdGVtKSA9PiBpdGVtLnN5bXB0b200KSlcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG5hbWVEaXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGFycjFbaV0gPT09IGRpczEgJiYgYXJyMltpXSA9PT0gZGlzMiAmJiBhcnIzW2ldID09PSBkaXMzIHx8IGFycjQgPT09IGRpczQpIHtcclxuICAgICAgICAgICAgICAgIG5hbWVPZkRpc2Vhc2UgPSBuYW1lRGlzW2ldXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuYW1lT2ZEaXNlYXNlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGkpO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmFtZU9mRGlzZWFzZSA9IFwi4LiC4Lit4Lit4Lig4Lix4Lii4LmE4Lih4LmI4Liq4Liy4Lih4Liy4Lij4LiW4LiV4Lij4Lin4LiI4LmA4LiI4Lit4LmC4Lij4LiE4LmD4LiZ4Lij4Liw4Lia4LiaIC8g4LiB4Lij4Li44LiT4Liy4LiV4Li04LmK4LiB4LmA4Lil4Li34Lit4LiB4LiV4Liy4Lih4Lit4Liy4LiB4Liy4Lij4LiC4LmJ4Liy4LiH4LiV4LmJ4LiZXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vIGhlYWx0aHMuZGlzZWFzZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKGl0ZW0uc3ltcHRvbTEgPT09IGRpczEgJiYgaXRlbS5zeW1wdG9tMiA9PT0gZGlzMiAmJiBpdGVtLnN5bXB0b20zID09PSBkaXMzICYmIGl0ZW0uc3ltcHRvbTQgPT09IGRpczQpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRtcCA9IGl0ZW0ubmFtZVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgdG1wID0gXCLguYTguKHguYjguYDguIjguK3guYLguKPguITguYPguJnguKPguLDguJrguJpcIlxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyBuYW1lT2ZEaXNlYXNlID0gdG1wXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IHByaW50RGlzZWFzZSA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgaGVhbHRocy5kaXNlYXNlLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfSB8IHtpdGVtLnN5bXB0b20xfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGgtc2NyZWVuIHctc2NyZWVuIGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyICBmaXhlZCBtdC01XCI+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBoLXNjcmVlbiBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyJz4gKi99XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2ZvbnQtYm9sZCB0ZXh0LTN4bCc+4Lii4Li04LiZ4LiU4Li14LiV4LmJ4Lit4LiZ4Lij4Lix4Lia4LmA4LiC4LmJ4Liy4Liq4Li54LmI4Lij4Liw4Lia4Lia4LiV4Lij4Lin4LiI4Liq4Lit4Lia4LmC4Lij4LiE4LiC4Lit4LiH4LmB4Lih4LinPC9oMT5cclxuICAgICAgICAgICAgey8qIHtwcmludERpc2Vhc2UoKX0gKi99XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nZm9udC1ib2xkIG10LTEwJz7guYHguKHguKfguILguK3guIfguJfguYjguLLguJnguKHguLXguK3guLLguIHguLLguKPguJTguLHguIfguJnguLXguYnguKvguKPguLfguK3guYTguKHguYgg4LmC4Lib4Lij4LiU4LiV4Li04LmK4LiB4LmA4Lil4Li34Lit4LiB4LiV4Liy4Lih4Lit4Liy4LiB4Liy4Lij4LiC4LmJ4Liy4LiH4LiV4LmJ4LiZPC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyICB3LTIvNCBoLTIvNCBvdmVyZmxvdy1hdXRvIG10LTVcIj5cclxuICAgICAgICAgICAgICAgIHtQcmludENoZWNrQm94RGF0YSgpfVxyXG4gICAgICAgICAgICAgICAge0ZpbmREaXNlYXNlKGNoZWNrMSwgY2hlY2syLCBjaGVjazMsIGNoZWNrNCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXQtNVwiPjxhIGNsYXNzTmFtZT0nZm9udC1ib2xkICcgPuC5geC4oeC4p+C4guC4reC4h+C4hOC4uOC4k+C5gOC4m+C5h+C4meC5guC4o+C4hCA6PC9hPiAge25hbWVPZkRpc2Vhc2V9PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctc2NyZWVuIC1tdC0zJz5cclxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzeW1wdG9tIl0sInNvdXJjZVJvb3QiOiIifQ==