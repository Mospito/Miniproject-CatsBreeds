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
    return healths.disease.map(function (item) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "border-pink-500 border-2 w-1/2 h-full",
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
      }, void 0, true, {
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
      } else {
        nameOfDisease = "ขออภัยไม่สามารถตรวจเจอโรคในระบบ / กรุณาติ๊กเลือกตามอาการข้างต้น";
      }
    }

    healths.disease.map(function (item) {
      if (item.symptom1 === dis1 && item.symptom2 === dis2 && item.symptom3 === dis3 && item.symptom4 === dis4) {
        tmp = item.name;
      } else {
        tmp = "ไม่เจอโรคในระบบ";
      }
    }); // nameOfDisease = tmp
  };

  var printDisease = function printDisease() {
    return healths.disease.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: [item.name, " | ", item.symptom1]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex flex-col h-screen w-screen justify-start items-center border-2 border-red-600 fixed mt-5",
    children: ["Hello Symptom", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: "font-bold",
      children: "\u0E41\u0E21\u0E27\u0E02\u0E2D\u0E07\u0E17\u0E48\u0E32\u0E19\u0E21\u0E35\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E14\u0E31\u0E07\u0E19\u0E35\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48 \u0E42\u0E1B\u0E23\u0E14\u0E15\u0E34\u0E4A\u0E01\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E32\u0E21\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E02\u0E49\u0E32\u0E07\u0E15\u0E49\u0E19"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-col items-center border-2 border-red-800 w-2/4 h-2/3 overflow-auto",
      children: [PrintCheckBoxData(), FindDisease(check1, check2, check3, check4)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "font-bold mr-3",
        children: "\u0E41\u0E21\u0E27\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E40\u0E1B\u0E47\u0E19\u0E42\u0E23\u0E04 :"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 19
      }, _this), "  ", nameOfDisease]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-screen -mt-5",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 117,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3ltcHRvbS5qcyJdLCJuYW1lcyI6WyJuYW1lT2ZEaXNlYXNlIiwiVVJMIiwic3ltcHRvbSIsInVzZVN0YXRlIiwiaGVhbHRocyIsInNldEhlYWx0aHMiLCJoZWFsdGgiLCJzZXRIZWFsdGgiLCJuYW1lIiwic2V0TmFtZSIsInN5bXB0b20xIiwic2V0U3ltdG9tMSIsInN5bXB0b20yIiwic2V0U3ltdG9tMiIsInN5bXB0b20zIiwic2V0U3ltdG9tMyIsInN5bXB0b200Iiwic2V0U3ltdG9tNCIsImNoZWNrMSIsInNldENoZWNrMSIsImNoZWNrMiIsInNldENoZWNrMiIsImNoZWNrMyIsInNldENoZWNrMyIsImNoZWNrNCIsInNldENoZWNrNCIsInVzZUVmZmVjdCIsImdldERpc2Vhc2UiLCJheGlvcyIsImdldCIsImRpc2VzYXNlQ2F0IiwiZGF0YSIsIlByaW50Q2hlY2tCb3hEYXRhIiwidG1wIiwiZGlzZWFzZSIsIm1hcCIsIml0ZW0iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJGaW5kRGlzZWFzZSIsImRpczEiLCJkaXMyIiwiZGlzMyIsImRpczQiLCJhcnIxIiwiYXJyMiIsImFycjMiLCJhcnI0IiwiaSIsImxlbmd0aCIsInByaW50RGlzZWFzZSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLGFBQWEsR0FBRyxHQUFwQjtBQUNBLElBQU1DLEdBQUcsaUNBQVQ7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLGtCQUVZQyxzREFBUSxDQUFDO0FBQ25DLGVBQVcsQ0FDUDtBQUNJLFlBQU0sQ0FEVjtBQUVJLGNBQVEsWUFGWjtBQUdJLGtCQUFZLGdCQUhoQjtBQUlJLGtCQUFZLGFBSmhCO0FBS0ksa0JBQVksdUJBTGhCO0FBTUksa0JBQVk7QUFOaEIsS0FETztBQUR3QixHQUFELENBRnBC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IiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N5bXB0b20uYjI3MzZkOGU4ZDAyNzgyNWY2ZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xyXG5cclxubGV0IG5hbWVPZkRpc2Vhc2UgPSBcIiBcIlxyXG5jb25zdCBVUkwgPSBgaHR0cDovL2xvY2FsaG9zdC9hcGkvZGlzZWFzZWBcclxuY29uc3Qgc3ltcHRvbSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbaGVhbHRocywgc2V0SGVhbHRoc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgXCJkaXNlYXNlXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwi4LmC4Lij4LiE4Lir4Lin4Lix4LiU4LmB4Lih4LinXCIsXHJcbiAgICAgICAgICAgICAgICBcInN5bXB0b20xXCI6IFwi4Lit4Liy4LiB4Liy4Lij4LmA4LiL4Li34LmI4Lit4LiH4LiL4Li24LihXCIsXHJcbiAgICAgICAgICAgICAgICBcInN5bXB0b20yXCI6IFwi4Lir4Liy4Lii4LmD4LiI4Lil4Liz4Lia4Liy4LiBIFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzeW1wdG9tM1wiOiBcIuC4oeC4teC5hOC4guC5iSDguYTguK0g4LiI4Liy4LihIOC4oeC4teC4meC5ieC4s+C4oeC4ueC4gVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzeW1wdG9tNFwiOiBcIuC5gOC4muC4t+C5iOC4reC4reC4suC4q+C4suC4o1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbaGVhbHRoLCBzZXRIZWFsdGhdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc3ltcHRvbTEsIHNldFN5bXRvbTFdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc3ltcHRvbTIsIHNldFN5bXRvbTJdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc3ltcHRvbTMsIHNldFN5bXRvbTNdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc3ltcHRvbTQsIHNldFN5bXRvbTRdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3QgW2NoZWNrMSwgc2V0Q2hlY2sxXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2NoZWNrMiwgc2V0Q2hlY2syXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2NoZWNrMywgc2V0Q2hlY2szXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2NoZWNrNCwgc2V0Q2hlY2s0XSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0RGlzZWFzZSgpXHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGdldERpc2Vhc2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGRpc2VzYXNlQ2F0ID0gYXdhaXQgYXhpb3MuZ2V0KFVSTClcclxuICAgICAgICBzZXRIZWFsdGhzKGRpc2VzYXNlQ2F0LmRhdGEpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgUHJpbnRDaGVja0JveERhdGEgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIGxldCB0bXBcclxuICAgICAgICByZXR1cm4gKGhlYWx0aHMuZGlzZWFzZS5tYXAoKGl0ZW0pID0+XHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1waW5rLTUwMCBib3JkZXItMiB3LTEvMiBoLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17KGUpID0+IHNldENoZWNrMShlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXtpdGVtLnN5bXB0b20xfSAvPiB7aXRlbS5zeW1wdG9tMX1cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2hlY2syKGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e2l0ZW0uc3ltcHRvbTJ9IC8+IHtpdGVtLnN5bXB0b20yfVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRDaGVjazMoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17aXRlbS5zeW1wdG9tM30gLz4ge2l0ZW0uc3ltcHRvbTN9XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17KGUpID0+IHNldENoZWNrNChlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXtpdGVtLnN5bXB0b200fSAvPiB7aXRlbS5zeW1wdG9tNH1cclxuICAgICAgICAgICAgICAgIHsvKiB7bmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpfSAqL31cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcblxyXG5cclxuICAgICAgICApKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEZpbmREaXNlYXNlID0gKGRpczEsIGRpczIsIGRpczMsIGRpczQpID0+IHtcclxuICAgICAgICBsZXQgbmFtZSA9IFtdXHJcbiAgICAgICAgbGV0IGFycjEgPSBbXVxyXG4gICAgICAgIGxldCBhcnIyID0gW11cclxuICAgICAgICBsZXQgYXJyMyA9IFtdXHJcbiAgICAgICAgbGV0IGFycjQgPSBbXVxyXG4gICAgICAgIGxldCB0bXBcclxuICAgICAgICBsZXQgaSA9IDBcclxuICAgICAgICBuYW1lID0gKGhlYWx0aHMuZGlzZWFzZS5tYXAoKGl0ZW0pID0+IGl0ZW0ubmFtZSkpXHJcbiAgICAgICAgYXJyMSA9IChoZWFsdGhzLmRpc2Vhc2UubWFwKChpdGVtKSA9PiBpdGVtLnN5bXB0b20xKSlcclxuICAgICAgICBhcnIyID0gKGhlYWx0aHMuZGlzZWFzZS5tYXAoKGl0ZW0pID0+IGl0ZW0uc3ltcHRvbTIpKVxyXG4gICAgICAgIGFycjMgPSAoaGVhbHRocy5kaXNlYXNlLm1hcCgoaXRlbSkgPT4gaXRlbS5zeW1wdG9tMykpXHJcbiAgICAgICAgYXJyNCA9IChoZWFsdGhzLmRpc2Vhc2UubWFwKChpdGVtKSA9PiBpdGVtLnN5bXB0b200KSlcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG5hbWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGFycjFbaV0gPT09IGRpczEgJiYgYXJyMltpXSA9PT0gZGlzMiAmJiBhcnIzW2ldID09PSBkaXMzIHx8IGFycjQgPT09IGRpczQpIHtcclxuICAgICAgICAgICAgICAgIG5hbWVPZkRpc2Vhc2UgPSBuYW1lW2ldXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lT2ZEaXNlYXNlID0gXCLguILguK3guK3guKDguLHguKLguYTguKHguYjguKrguLLguKHguLLguKPguJbguJXguKPguKfguIjguYDguIjguK3guYLguKPguITguYPguJnguKPguLDguJrguJogLyDguIHguKPguLjguJPguLLguJXguLTguYrguIHguYDguKXguLfguK3guIHguJXguLLguKHguK3guLLguIHguLLguKPguILguYnguLLguIfguJXguYnguJlcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoZWFsdGhzLmRpc2Vhc2UubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLnN5bXB0b20xID09PSBkaXMxICYmIGl0ZW0uc3ltcHRvbTIgPT09IGRpczIgJiYgaXRlbS5zeW1wdG9tMyA9PT0gZGlzMyAmJiBpdGVtLnN5bXB0b200ID09PSBkaXM0KSB7XHJcbiAgICAgICAgICAgICAgICB0bXAgPSBpdGVtLm5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRtcCA9IFwi4LmE4Lih4LmI4LmA4LiI4Lit4LmC4Lij4LiE4LmD4LiZ4Lij4Liw4Lia4LiaXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gbmFtZU9mRGlzZWFzZSA9IHRtcFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBwcmludERpc2Vhc2UgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGhlYWx0aHMuZGlzZWFzZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX0gfCB7aXRlbS5zeW1wdG9tMX1cclxuXHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBoLXNjcmVlbiB3LXNjcmVlbiBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBib3JkZXItMiBib3JkZXItcmVkLTYwMCBmaXhlZCBtdC01XCI+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBoLXNjcmVlbiBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyJz4gKi99XHJcbiAgICAgICAgICAgIEhlbGxvIFN5bXB0b21cclxuICAgICAgICAgICAgey8qIHtwcmludERpc2Vhc2UoKX0gKi99XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nZm9udC1ib2xkJz7guYHguKHguKfguILguK3guIfguJfguYjguLLguJnguKHguLXguK3guLLguIHguLLguKPguJTguLHguIfguJnguLXguYnguKvguKPguLfguK3guYTguKHguYgg4LmC4Lib4Lij4LiU4LiV4Li04LmK4LiB4LmA4Lil4Li34Lit4LiB4LiV4Liy4Lih4Lit4Liy4LiB4Liy4Lij4LiC4LmJ4Liy4LiH4LiV4LmJ4LiZPC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGJvcmRlci0yIGJvcmRlci1yZWQtODAwIHctMi80IGgtMi8zIG92ZXJmbG93LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIHtQcmludENoZWNrQm94RGF0YSgpfVxyXG4gICAgICAgICAgICAgICAge0ZpbmREaXNlYXNlKGNoZWNrMSwgY2hlY2syLCBjaGVjazMsIGNoZWNrNCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHNwYW4+PGEgY2xhc3NOYW1lPSdmb250LWJvbGQgbXItMycgPuC5geC4oeC4p+C4guC4reC4h+C4hOC4uOC4k+C5gOC4m+C5h+C4meC5guC4o+C4hCA6PC9hPiAge25hbWVPZkRpc2Vhc2V9PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctc2NyZWVuIC1tdC01Jz5cclxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzeW1wdG9tIl0sInNvdXJjZVJvb3QiOiIifQ==