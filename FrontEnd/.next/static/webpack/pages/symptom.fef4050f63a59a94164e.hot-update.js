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
    var tmp;
    healths.disease.map(function (item) {
      if (item.symptom1 === dis1 && item.symptom2 === dis2 && item.symptom3 === dis3 && item.symptom4 === dis4) {
        tmp = item.name;
        console.log(tmp);
      } else {
        tmp = "ไม่เจอโรคในระบบ";
      }
    });
    nameOfDisease = tmp;
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
          lineNumber: 66,
          columnNumber: 17
        }, _this), " ", item.symptom1, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          onChange: function onChange(e) {
            return setCheck2(e.target.value);
          },
          value: item.symptom2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 17
        }, _this), " ", item.symptom2, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          onChange: function onChange(e) {
            return setCheck3(e.target.value);
          },
          value: item.symptom3
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 17
        }, _this), " ", item.symptom3, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          onChange: function onChange(e) {
            return setCheck4(e.target.value);
          },
          value: item.symptom4
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 17
        }, _this), " ", item.symptom4, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 17
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }, _this);
    });
  };

  var FindDisease = function FindDisease(dis1, dis2, dis3, dis4) {
    var tmp; // let i = 0
    // let nameDis = []
    // let arr1 = []
    // let arr2 = []
    // let arr3 = []
    // let arr4 = []
    // nameDis = (healths.disease.map((item) => item.name))
    //  console.log(nameDis[0]);
    //  console.log(nameDis[1]);
    //  console.log(nameDis[2]);
    // console.log(dis2);
    // arr1 = (healths.disease.map((item) => item.symptom1))
    // arr2 = (healths.disease.map((item) => item.symptom2))
    // arr3 = (healths.disease.map((item) => item.symptom3))
    // arr4 = (healths.disease.map((item) => item.symptom4))
    // for (i = 0; i < nameDis.length; i++) {
    //     if (arr1[i] === dis1 && arr2[i] === dis2 && arr3[i] === dis3 || arr4 === dis4) {
    //         nameOfDisease = nameDis[i]
    //         console.log(nameOfDisease);
    //         console.log(i);
    //     }
    //     else {
    //         nameOfDisease = "ขออภัยไม่สามารถตรวจเจอโรคในระบบ / กรุณาติ๊กเลือกตามอาการข้างต้น"
    //     }
    // }

    healths.disease.map(function (item) {
      if (item.symptom1 === dis1 && item.symptom2 === dis2 && item.symptom3 === dis3 && item.symptom4 === dis4) {
        tmp = item.name;
        console.log(tmp);
      } else {
        tmp = "ไม่เจอโรคในระบบ";
      }
    });
    nameOfDisease = tmp;
  };

  var printDisease = function printDisease() {
    return healths.disease.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: [item.name, " | ", item.symptom1]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 133,
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
      lineNumber: 148,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: "font-bold mt-10",
      children: "\u0E41\u0E21\u0E27\u0E02\u0E2D\u0E07\u0E17\u0E48\u0E32\u0E19\u0E21\u0E35\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E14\u0E31\u0E07\u0E19\u0E35\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48 \u0E42\u0E1B\u0E23\u0E14\u0E15\u0E34\u0E4A\u0E01\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E32\u0E21\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E02\u0E49\u0E32\u0E07\u0E15\u0E49\u0E19"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-col items-center  w-2/4 h-2/4 overflow-auto mt-5",
      children: [PrintCheckBoxData(), FindDisease(check1, check2, check3, check4)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "mt-5",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "font-bold ",
        children: "\u0E41\u0E21\u0E27\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E2D\u0E32\u0E08\u0E40\u0E1B\u0E47\u0E19\u0E42\u0E23\u0E04 :"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 36
      }, _this), "  ", nameOfDisease]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-screen -mt-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 146,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3ltcHRvbS5qcyJdLCJuYW1lcyI6WyJuYW1lT2ZEaXNlYXNlIiwiVVJMIiwic3ltcHRvbSIsInVzZVN0YXRlIiwiaGVhbHRocyIsInNldEhlYWx0aHMiLCJoZWFsdGgiLCJzZXRIZWFsdGgiLCJuYW1lIiwic2V0TmFtZSIsInN5bXB0b20xIiwic2V0U3ltdG9tMSIsInN5bXB0b20yIiwic2V0U3ltdG9tMiIsInN5bXB0b20zIiwic2V0U3ltdG9tMyIsInN5bXB0b200Iiwic2V0U3ltdG9tNCIsImNoZWNrMSIsInNldENoZWNrMSIsImNoZWNrMiIsInNldENoZWNrMiIsImNoZWNrMyIsInNldENoZWNrMyIsImNoZWNrNCIsInNldENoZWNrNCIsInVzZUVmZmVjdCIsImdldERpc2Vhc2UiLCJ0bXAiLCJkaXNlYXNlIiwibWFwIiwiaXRlbSIsImRpczEiLCJkaXMyIiwiZGlzMyIsImRpczQiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJnZXQiLCJkaXNlc2FzZUNhdCIsImRhdGEiLCJQcmludENoZWNrQm94RGF0YSIsImluZGV4IiwiZSIsInRhcmdldCIsInZhbHVlIiwiRmluZERpc2Vhc2UiLCJwcmludERpc2Vhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBSUEsYUFBYSxHQUFHLEdBQXBCO0FBR0EsSUFBTUMsR0FBRyxpQ0FBVDs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBRVlDLHNEQUFRLENBQUM7QUFDbkMsZUFBVyxDQUNQO0FBQ0ksWUFBTSxDQURWO0FBRUksY0FBUSxZQUZaO0FBR0ksa0JBQVksZ0JBSGhCO0FBSUksa0JBQVksYUFKaEI7QUFLSSxrQkFBWSx1QkFMaEI7QUFNSSxrQkFBWTtBQU5oQixLQURPO0FBRHdCLEdBQUQsQ0FGcEI7QUFBQSxNQUVYQyxPQUZXO0FBQUEsTUFF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QUFTLEVBQUMsaUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSixlQUtJO0FBQUssZUFBUyxFQUFDLDREQUFmO0FBQUEsaUJBQ0tELGlCQUFpQixFQUR0QixFQUVLSyxXQUFXLENBQUM3QixNQUFELEVBQVNFLE1BQVQsRUFBaUJFLE1BQWpCLEVBQXlCRSxNQUF6QixDQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSixlQVdJO0FBQU0sZUFBUyxFQUFDLE1BQWhCO0FBQUEsOEJBQXVCO0FBQUcsaUJBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXZCLFFBQThFeEIsYUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEosZUFjSTtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBLDZCQUNJLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRko7QUFzQkgsQ0E3SkQ7O0dBQU1FLE87O0FBK0pTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zeW1wdG9tLmZlZjQwNTBmNjNhNTlhOTQxNjRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xyXG5cclxubGV0IG5hbWVPZkRpc2Vhc2UgPSBcIiBcIlxyXG5cclxuXHJcbmNvbnN0IFVSTCA9IGBodHRwOi8vbG9jYWxob3N0L2FwaS9kaXNlYXNlYFxyXG5jb25zdCBzeW1wdG9tID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtoZWFsdGhzLCBzZXRIZWFsdGhzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBcImRpc2Vhc2VcIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCLguYLguKPguITguKvguKfguLHguJTguYHguKHguKdcIixcclxuICAgICAgICAgICAgICAgIFwic3ltcHRvbTFcIjogXCLguK3guLLguIHguLLguKPguYDguIvguLfguYjguK3guIfguIvguLbguKFcIixcclxuICAgICAgICAgICAgICAgIFwic3ltcHRvbTJcIjogXCLguKvguLLguKLguYPguIjguKXguLPguJrguLLguIEgXCIsXHJcbiAgICAgICAgICAgICAgICBcInN5bXB0b20zXCI6IFwi4Lih4Li14LmE4LiC4LmJIOC5hOC4rSDguIjguLLguKEg4Lih4Li14LiZ4LmJ4Liz4Lih4Li54LiBXCIsXHJcbiAgICAgICAgICAgICAgICBcInN5bXB0b200XCI6IFwi4LmA4Lia4Li34LmI4Lit4Lit4Liy4Lir4Liy4LijXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtoZWFsdGgsIHNldEhlYWx0aF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtzeW1wdG9tMSwgc2V0U3ltdG9tMV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtzeW1wdG9tMiwgc2V0U3ltdG9tMl0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtzeW1wdG9tMywgc2V0U3ltdG9tM10gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtzeW1wdG9tNCwgc2V0U3ltdG9tNF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICBjb25zdCBbY2hlY2sxLCBzZXRDaGVjazFdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbY2hlY2syLCBzZXRDaGVjazJdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbY2hlY2szLCBzZXRDaGVjazNdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbY2hlY2s0LCBzZXRDaGVjazRdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXREaXNlYXNlKClcclxuICAgICAgICBsZXQgdG1wXHJcbiAgICAgICAgaGVhbHRocy5kaXNlYXNlLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5zeW1wdG9tMSA9PT0gZGlzMSAmJiBpdGVtLnN5bXB0b20yID09PSBkaXMyICYmIGl0ZW0uc3ltcHRvbTMgPT09IGRpczMgJiYgaXRlbS5zeW1wdG9tNCA9PT0gZGlzNCkge1xyXG4gICAgICAgICAgICAgICAgdG1wID0gaXRlbS5uYW1lXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0bXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdG1wID0gXCLguYTguKHguYjguYDguIjguK3guYLguKPguITguYPguJnguKPguLDguJrguJpcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBuYW1lT2ZEaXNlYXNlID0gdG1wXHJcbiAgICAgICAgXHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICBjb25zdCBnZXREaXNlYXNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCBkaXNlc2FzZUNhdCA9IGF3YWl0IGF4aW9zLmdldChVUkwpXHJcbiAgICAgICAgc2V0SGVhbHRocyhkaXNlc2FzZUNhdC5kYXRhKVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgUHJpbnRDaGVja0JveERhdGEgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIGxldCB0bXBcclxuICAgICAgICByZXR1cm4gKGhlYWx0aHMuZGlzZWFzZS5tYXAoKGl0ZW0sIGluZGV4KSA9PlxyXG4gICAgICAgIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdy0xLzIgaC1mdWxsXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRDaGVjazEoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17aXRlbS5zeW1wdG9tMX0gLz4ge2l0ZW0uc3ltcHRvbTF9XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17KGUpID0+IHNldENoZWNrMihlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXtpdGVtLnN5bXB0b20yfSAvPiB7aXRlbS5zeW1wdG9tMn1cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2hlY2szKGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e2l0ZW0uc3ltcHRvbTN9IC8+IHtpdGVtLnN5bXB0b20zfVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRDaGVjazQoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17aXRlbS5zeW1wdG9tNH0gLz4ge2l0ZW0uc3ltcHRvbTR9XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcblxyXG5cclxuICAgICAgICApKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEZpbmREaXNlYXNlID0gKGRpczEsIGRpczIsIGRpczMsIGRpczQpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IHRtcFxyXG4gICAgICAgIC8vIGxldCBpID0gMFxyXG4gICAgICAgIC8vIGxldCBuYW1lRGlzID0gW11cclxuICAgICAgICAvLyBsZXQgYXJyMSA9IFtdXHJcbiAgICAgICAgLy8gbGV0IGFycjIgPSBbXVxyXG4gICAgICAgIC8vIGxldCBhcnIzID0gW11cclxuICAgICAgICAvLyBsZXQgYXJyNCA9IFtdXHJcblxyXG4gICAgICAgIC8vIG5hbWVEaXMgPSAoaGVhbHRocy5kaXNlYXNlLm1hcCgoaXRlbSkgPT4gaXRlbS5uYW1lKSlcclxuICAgICAgICAvLyAgY29uc29sZS5sb2cobmFtZURpc1swXSk7XHJcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKG5hbWVEaXNbMV0pO1xyXG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhuYW1lRGlzWzJdKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkaXMyKTtcclxuICAgICAgICAvLyBhcnIxID0gKGhlYWx0aHMuZGlzZWFzZS5tYXAoKGl0ZW0pID0+IGl0ZW0uc3ltcHRvbTEpKVxyXG4gICAgICAgIC8vIGFycjIgPSAoaGVhbHRocy5kaXNlYXNlLm1hcCgoaXRlbSkgPT4gaXRlbS5zeW1wdG9tMikpXHJcbiAgICAgICAgLy8gYXJyMyA9IChoZWFsdGhzLmRpc2Vhc2UubWFwKChpdGVtKSA9PiBpdGVtLnN5bXB0b20zKSlcclxuICAgICAgICAvLyBhcnI0ID0gKGhlYWx0aHMuZGlzZWFzZS5tYXAoKGl0ZW0pID0+IGl0ZW0uc3ltcHRvbTQpKVxyXG5cclxuICAgICAgICAvLyBmb3IgKGkgPSAwOyBpIDwgbmFtZURpcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vICAgICBpZiAoYXJyMVtpXSA9PT0gZGlzMSAmJiBhcnIyW2ldID09PSBkaXMyICYmIGFycjNbaV0gPT09IGRpczMgfHwgYXJyNCA9PT0gZGlzNCkge1xyXG4gICAgICAgIC8vICAgICAgICAgbmFtZU9mRGlzZWFzZSA9IG5hbWVEaXNbaV1cclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKG5hbWVPZkRpc2Vhc2UpO1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coaSk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICBuYW1lT2ZEaXNlYXNlID0gXCLguILguK3guK3guKDguLHguKLguYTguKHguYjguKrguLLguKHguLLguKPguJbguJXguKPguKfguIjguYDguIjguK3guYLguKPguITguYPguJnguKPguLDguJrguJogLyDguIHguKPguLjguJPguLLguJXguLTguYrguIHguYDguKXguLfguK3guIHguJXguLLguKHguK3guLLguIHguLLguKPguILguYnguLLguIfguJXguYnguJlcIlxyXG4gICAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgIC8vIH1cclxuXHJcblxyXG4gICAgICAgIGhlYWx0aHMuZGlzZWFzZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uc3ltcHRvbTEgPT09IGRpczEgJiYgaXRlbS5zeW1wdG9tMiA9PT0gZGlzMiAmJiBpdGVtLnN5bXB0b20zID09PSBkaXMzICYmIGl0ZW0uc3ltcHRvbTQgPT09IGRpczQpIHtcclxuICAgICAgICAgICAgICAgIHRtcCA9IGl0ZW0ubmFtZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codG1wKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRtcCA9IFwi4LmE4Lih4LmI4LmA4LiI4Lit4LmC4Lij4LiE4LmD4LiZ4Lij4Liw4Lia4LiaXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbmFtZU9mRGlzZWFzZSA9IHRtcFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBwcmludERpc2Vhc2UgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGhlYWx0aHMuZGlzZWFzZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX0gfCB7aXRlbS5zeW1wdG9tMX1cclxuXHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaC1zY3JlZW4gdy1zY3JlZW4ganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgIGZpeGVkIG10LTVcIj5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGgtc2NyZWVuIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXInPiAqL31cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtM3hsJz7guKLguLTguJnguJTguLXguJXguYnguK3guJnguKPguLHguJrguYDguILguYnguLLguKrguLnguYjguKPguLDguJrguJrguJXguKPguKfguIjguKrguK3guJrguYLguKPguITguILguK3guIfguYHguKHguKc8L2gxPlxyXG4gICAgICAgICAgICB7Lyoge3ByaW50RGlzZWFzZSgpfSAqL31cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdmb250LWJvbGQgbXQtMTAnPuC5geC4oeC4p+C4guC4reC4h+C4l+C5iOC4suC4meC4oeC4teC4reC4suC4geC4suC4o+C4lOC4seC4h+C4meC4teC5ieC4q+C4o+C4t+C4reC5hOC4oeC5iCDguYLguJvguKPguJTguJXguLTguYrguIHguYDguKXguLfguK3guIHguJXguLLguKHguK3guLLguIHguLLguKPguILguYnguLLguIfguJXguYnguJk8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgIHctMi80IGgtMi80IG92ZXJmbG93LWF1dG8gbXQtNVwiPlxyXG4gICAgICAgICAgICAgICAge1ByaW50Q2hlY2tCb3hEYXRhKCl9XHJcbiAgICAgICAgICAgICAgICB7RmluZERpc2Vhc2UoY2hlY2sxLCBjaGVjazIsIGNoZWNrMywgY2hlY2s0KX1cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXQtNVwiPjxhIGNsYXNzTmFtZT0nZm9udC1ib2xkICcgPuC5geC4oeC4p+C4guC4reC4h+C4hOC4uOC4k+C4reC4suC4iOC5gOC4m+C5h+C4meC5guC4o+C4hCA6PC9hPiAge25hbWVPZkRpc2Vhc2V9PC9zcGFuPlxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LXNjcmVlbiAtbXQtMyc+XHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3ltcHRvbSJdLCJzb3VyY2VSb290IjoiIn0=