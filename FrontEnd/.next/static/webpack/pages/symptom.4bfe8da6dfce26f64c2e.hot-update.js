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
          lineNumber: 49,
          columnNumber: 17
        }, _this), " ", item.symptom1, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          onChange: function onChange(e) {
            return setCheck2(e.target.value);
          },
          value: item.symptom2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }, _this), " ", item.symptom2, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          onChange: function onChange(e) {
            return setCheck3(e.target.value);
          },
          value: item.symptom3
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }, _this), " ", item.symptom3, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          onChange: function onChange(e) {
            return setCheck4(e.target.value);
          },
          value: item.symptom4
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 17
        }, _this), " ", item.symptom4, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 17
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }, _this);
    });
  };

  var FindDisease = function FindDisease(dis1, dis2, dis3, dis4) {
    var name = [];
    var arr1 = [];
    var arr2 = [];
    var arr3 = [];
    var arr4 = [];
    var tmp;
    var i = 0;
    name = healths.disease.map(function (item) {
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

    for (i = 0; i < name.length; i++) {
      if (arr1[i] === dis1 && arr2[i] === dis2 && arr3[i] === dis3 || arr4 === dis4) {
        nameOfDisease = name[i];
        console.log(nameOfDisease);
        console.log(i);
        return;
      } else {
        nameOfDisease = "ขออภัยไม่สามารถตรวจเจอโรคในระบบ / กรุณาติ๊กเลือกตามอาการข้างต้น";
      }
    }

    setName(nameOfDisease); // healths.disease.map((item) => {
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
        lineNumber: 109,
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
      lineNumber: 124,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: "font-bold mt-10",
      children: "\u0E41\u0E21\u0E27\u0E02\u0E2D\u0E07\u0E17\u0E48\u0E32\u0E19\u0E21\u0E35\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E14\u0E31\u0E07\u0E19\u0E35\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48 \u0E42\u0E1B\u0E23\u0E14\u0E15\u0E34\u0E4A\u0E01\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E32\u0E21\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E02\u0E49\u0E32\u0E07\u0E15\u0E49\u0E19"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-col items-center  w-2/4 h-2/4 overflow-auto mt-5",
      children: [PrintCheckBoxData(), FindDisease(check1, check2, check3, check4)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "mt-5",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "font-bold ",
        children: "\u0E41\u0E21\u0E27\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E40\u0E1B\u0E47\u0E19\u0E42\u0E23\u0E04 :"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 36
      }, _this), "  ", nameOfDisease]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-screen -mt-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 122,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3ltcHRvbS5qcyJdLCJuYW1lcyI6WyJuYW1lT2ZEaXNlYXNlIiwiVVJMIiwic3ltcHRvbSIsInVzZVN0YXRlIiwiaGVhbHRocyIsInNldEhlYWx0aHMiLCJoZWFsdGgiLCJzZXRIZWFsdGgiLCJuYW1lIiwic2V0TmFtZSIsInN5bXB0b20xIiwic2V0U3ltdG9tMSIsInN5bXB0b20yIiwic2V0U3ltdG9tMiIsInN5bXB0b20zIiwic2V0U3ltdG9tMyIsInN5bXB0b200Iiwic2V0U3ltdG9tNCIsImNoZWNrMSIsInNldENoZWNrMSIsImNoZWNrMiIsInNldENoZWNrMiIsImNoZWNrMyIsInNldENoZWNrMyIsImNoZWNrNCIsInNldENoZWNrNCIsInVzZUVmZmVjdCIsImdldERpc2Vhc2UiLCJheGlvcyIsImdldCIsImRpc2VzYXNlQ2F0IiwiZGF0YSIsIlByaW50Q2hlY2tCb3hEYXRhIiwidG1wIiwiZGlzZWFzZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkZpbmREaXNlYXNlIiwiZGlzMSIsImRpczIiLCJkaXMzIiwiZGlzNCIsImFycjEiLCJhcnIyIiwiYXJyMyIsImFycjQiLCJpIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInByaW50RGlzZWFzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxhQUFhLEdBQUcsR0FBcEI7QUFDQSxJQUFNQyxHQUFHLGlDQUFUOztBQUNBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFFWUMsc0RBQVEsQ0FBQztBQUNuQyxlQUFXLENBQ1A7QUFDSSxZQUFNLENBRFY7QUFFSSxjQUFRLFlBRlo7QUFHSSxrQkFBWSxnQkFIaEI7QUFJSSxrQkFBWSxhQUpoQjtBQUtJLGtCQUFZLHVCQUxoQjtBQU1JLGtCQUFZO0FBTmhCLEtBRE87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ZmNlMjZmNjRjMmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xyXG5cclxubGV0IG5hbWVPZkRpc2Vhc2UgPSBcIiBcIlxyXG5jb25zdCBVUkwgPSBgaHR0cDovL2xvY2FsaG9zdC9hcGkvZGlzZWFzZWBcclxuY29uc3Qgc3ltcHRvbSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbaGVhbHRocywgc2V0SGVhbHRoc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgXCJkaXNlYXNlXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwi4LmC4Lij4LiE4Lir4Lin4Lix4LiU4LmB4Lih4LinXCIsXHJcbiAgICAgICAgICAgICAgICBcInN5bXB0b20xXCI6IFwi4Lit4Liy4LiB4Liy4Lij4LmA4LiL4Li34LmI4Lit4LiH4LiL4Li24LihXCIsXHJcbiAgICAgICAgICAgICAgICBcInN5bXB0b20yXCI6IFwi4Lir4Liy4Lii4LmD4LiI4Lil4Liz4Lia4Liy4LiBIFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzeW1wdG9tM1wiOiBcIuC4oeC4teC5hOC4guC5iSDguYTguK0g4LiI4Liy4LihIOC4oeC4teC4meC5ieC4s+C4oeC4ueC4gVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzeW1wdG9tNFwiOiBcIuC5gOC4muC4t+C5iOC4reC4reC4suC4q+C4suC4o1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbaGVhbHRoLCBzZXRIZWFsdGhdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc3ltcHRvbTEsIHNldFN5bXRvbTFdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc3ltcHRvbTIsIHNldFN5bXRvbTJdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc3ltcHRvbTMsIHNldFN5bXRvbTNdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc3ltcHRvbTQsIHNldFN5bXRvbTRdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3QgW2NoZWNrMSwgc2V0Q2hlY2sxXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2NoZWNrMiwgc2V0Q2hlY2syXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2NoZWNrMywgc2V0Q2hlY2szXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2NoZWNrNCwgc2V0Q2hlY2s0XSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0RGlzZWFzZSgpXHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGdldERpc2Vhc2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGRpc2VzYXNlQ2F0ID0gYXdhaXQgYXhpb3MuZ2V0KFVSTClcclxuICAgICAgICBzZXRIZWFsdGhzKGRpc2VzYXNlQ2F0LmRhdGEpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgUHJpbnRDaGVja0JveERhdGEgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIGxldCB0bXBcclxuICAgICAgICByZXR1cm4gKGhlYWx0aHMuZGlzZWFzZS5tYXAoKGl0ZW0saW5kZXgpID0+XHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LTEvMiBoLWZ1bGxcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17KGUpID0+IHNldENoZWNrMShlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXtpdGVtLnN5bXB0b20xfSAvPiB7aXRlbS5zeW1wdG9tMX1cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2hlY2syKGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e2l0ZW0uc3ltcHRvbTJ9IC8+IHtpdGVtLnN5bXB0b20yfVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRDaGVjazMoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17aXRlbS5zeW1wdG9tM30gLz4ge2l0ZW0uc3ltcHRvbTN9XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17KGUpID0+IHNldENoZWNrNChlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXtpdGVtLnN5bXB0b200fSAvPiB7aXRlbS5zeW1wdG9tNH1cclxuICAgICAgICAgICAgICAgIHsvKiB7bmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpfSAqL31cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcblxyXG5cclxuICAgICAgICApKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEZpbmREaXNlYXNlID0gKGRpczEsIGRpczIsIGRpczMsIGRpczQpID0+IHtcclxuICAgICAgICBsZXQgbmFtZSA9IFtdXHJcbiAgICAgICAgbGV0IGFycjEgPSBbXVxyXG4gICAgICAgIGxldCBhcnIyID0gW11cclxuICAgICAgICBsZXQgYXJyMyA9IFtdXHJcbiAgICAgICAgbGV0IGFycjQgPSBbXVxyXG4gICAgICAgIGxldCB0bXBcclxuICAgICAgICBsZXQgaSA9IDBcclxuICAgICAgICBuYW1lID0gKGhlYWx0aHMuZGlzZWFzZS5tYXAoKGl0ZW0pID0+IGl0ZW0ubmFtZSkpXHJcbiAgICAgICAgYXJyMSA9IChoZWFsdGhzLmRpc2Vhc2UubWFwKChpdGVtKSA9PiBpdGVtLnN5bXB0b20xKSlcclxuICAgICAgICBhcnIyID0gKGhlYWx0aHMuZGlzZWFzZS5tYXAoKGl0ZW0pID0+IGl0ZW0uc3ltcHRvbTIpKVxyXG4gICAgICAgIGFycjMgPSAoaGVhbHRocy5kaXNlYXNlLm1hcCgoaXRlbSkgPT4gaXRlbS5zeW1wdG9tMykpXHJcbiAgICAgICAgYXJyNCA9IChoZWFsdGhzLmRpc2Vhc2UubWFwKChpdGVtKSA9PiBpdGVtLnN5bXB0b200KSlcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG5hbWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGFycjFbaV0gPT09IGRpczEgJiYgYXJyMltpXSA9PT0gZGlzMiAmJiBhcnIzW2ldID09PSBkaXMzIHx8IGFycjQgPT09IGRpczQpIHtcclxuICAgICAgICAgICAgICAgIG5hbWVPZkRpc2Vhc2UgPSBuYW1lW2ldXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuYW1lT2ZEaXNlYXNlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGkpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lT2ZEaXNlYXNlID0gXCLguILguK3guK3guKDguLHguKLguYTguKHguYjguKrguLLguKHguLLguKPguJbguJXguKPguKfguIjguYDguIjguK3guYLguKPguITguYPguJnguKPguLDguJrguJogLyDguIHguKPguLjguJPguLLguJXguLTguYrguIHguYDguKXguLfguK3guIHguJXguLLguKHguK3guLLguIHguLLguKPguILguYnguLLguIfguJXguYnguJlcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1zZXROYW1lKG5hbWVPZkRpc2Vhc2UpXHJcblxyXG4gICAgICAgIC8vIGhlYWx0aHMuZGlzZWFzZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKGl0ZW0uc3ltcHRvbTEgPT09IGRpczEgJiYgaXRlbS5zeW1wdG9tMiA9PT0gZGlzMiAmJiBpdGVtLnN5bXB0b20zID09PSBkaXMzICYmIGl0ZW0uc3ltcHRvbTQgPT09IGRpczQpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRtcCA9IGl0ZW0ubmFtZVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgdG1wID0gXCLguYTguKHguYjguYDguIjguK3guYLguKPguITguYPguJnguKPguLDguJrguJpcIlxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyBuYW1lT2ZEaXNlYXNlID0gdG1wXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IHByaW50RGlzZWFzZSA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgaGVhbHRocy5kaXNlYXNlLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfSB8IHtpdGVtLnN5bXB0b20xfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGgtc2NyZWVuIHctc2NyZWVuIGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyICBmaXhlZCBtdC01XCI+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBoLXNjcmVlbiBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyJz4gKi99XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2ZvbnQtYm9sZCB0ZXh0LTN4bCc+4Lii4Li04LiZ4LiU4Li14LiV4LmJ4Lit4LiZ4Lij4Lix4Lia4LmA4LiC4LmJ4Liy4Liq4Li54LmI4Lij4Liw4Lia4Lia4LiV4Lij4Lin4LiI4Liq4Lit4Lia4LmC4Lij4LiE4LiC4Lit4LiH4LmB4Lih4LinPC9oMT5cclxuICAgICAgICAgICAgey8qIHtwcmludERpc2Vhc2UoKX0gKi99XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nZm9udC1ib2xkIG10LTEwJz7guYHguKHguKfguILguK3guIfguJfguYjguLLguJnguKHguLXguK3guLLguIHguLLguKPguJTguLHguIfguJnguLXguYnguKvguKPguLfguK3guYTguKHguYgg4LmC4Lib4Lij4LiU4LiV4Li04LmK4LiB4LmA4Lil4Li34Lit4LiB4LiV4Liy4Lih4Lit4Liy4LiB4Liy4Lij4LiC4LmJ4Liy4LiH4LiV4LmJ4LiZPC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyICB3LTIvNCBoLTIvNCBvdmVyZmxvdy1hdXRvIG10LTVcIj5cclxuICAgICAgICAgICAgICAgIHtQcmludENoZWNrQm94RGF0YSgpfVxyXG4gICAgICAgICAgICAgICAge0ZpbmREaXNlYXNlKGNoZWNrMSwgY2hlY2syLCBjaGVjazMsIGNoZWNrNCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXQtNVwiPjxhIGNsYXNzTmFtZT0nZm9udC1ib2xkICcgPuC5geC4oeC4p+C4guC4reC4h+C4hOC4uOC4k+C5gOC4m+C5h+C4meC5guC4o+C4hCA6PC9hPiAge25hbWVPZkRpc2Vhc2V9PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctc2NyZWVuIC1tdC0zJz5cclxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzeW1wdG9tIl0sInNvdXJjZVJvb3QiOiIifQ==