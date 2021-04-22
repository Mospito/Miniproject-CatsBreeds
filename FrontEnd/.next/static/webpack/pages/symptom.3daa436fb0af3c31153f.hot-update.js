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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);




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
    return healths.disease.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-col justify-center items-start w-1/2 h-1/3 ",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "w-4 h-4 mt-2",
            type: "checkbox",
            onChange: function onChange(e) {
              return setCheck1(e.target.value);
            },
            value: item.symptom1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 21
          }, _this), " ", item.symptom1, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "w-4 h-4 mt-2",
            type: "checkbox",
            onChange: function onChange(e) {
              return setCheck2(e.target.value);
            },
            value: item.symptom2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 21
          }, _this), " ", item.symptom2, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "w-4 h-4 mt-2",
            type: "checkbox",
            onChange: function onChange(e) {
              return setCheck3(e.target.value);
            },
            value: item.symptom3
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 21
          }, _this), " ", item.symptom3, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "w-4 h-4 mt-2",
            type: "checkbox",
            onChange: function onChange(e) {
              return setCheck4(e.target.value);
            },
            value: item.symptom4
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 21
          }, _this), " ", item.symptom4]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }, _this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }, _this);
    });
  };

  var FindDisease = function FindDisease(dis1, dis2, dis3, dis4) {
    console.log("Test dis: ", dis1, dis2, dis3, dis4); // healths.disease.map((item) => {
    //     if (item.symptom1 === dis1 && item.symptom2 === dis2 && item.symptom3 === dis3 && item.symptom4 === dis4) {
    //         console.log(item.name);
    //         setName(item.name)
    //     }
    //     else {
    //         // setName("ไม่เจอโรคในระบบ")
    //         console.log(item.name);
    //     }
    // })

    for (var i = 0; i < healths.disease.length; i++) {
      console.log(healths.disease.length);
      console.log(healths.disease[i]);

      if (healths.disease[i].symptom1 === dis1 && healths.disease[i].symptom2 === dis2 && healths.disease[i].symptom3 === dis3 && healths.disease[i].symptom4 === dis4) {
        console.log(healths.disease[i].name);
        setName(healths.disease[i].name);
      } else {
        setName("ไม่เจอโรคในระบบ");
      }
    }
  };

  var printDisease = function printDisease() {
    return healths.disease.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: [item.name, " | ", item.symptom1]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex flex-col h-screen w-screen justify-start items-center  fixed mt-5",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
      children: "Cat-Symptom"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "border-2 border-green-900 bg-green-300 font-bold text-3xl p-2 rounded-lg",
      children: "\u0E22\u0E34\u0E19\u0E14\u0E35\u0E15\u0E49\u0E2D\u0E19\u0E23\u0E31\u0E1A\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E42\u0E23\u0E04\u0E02\u0E2D\u0E07\u0E41\u0E21\u0E27"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: "text-lg text-green-800 font-bold mt-5",
      children: "\u0E41\u0E21\u0E27\u0E02\u0E2D\u0E07\u0E17\u0E48\u0E32\u0E19\u0E21\u0E35\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E14\u0E31\u0E07\u0E19\u0E35\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48 \u0E42\u0E1B\u0E23\u0E14\u0E15\u0E34\u0E4A\u0E01\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E32\u0E21\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E02\u0E49\u0E32\u0E07\u0E15\u0E49\u0E19"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-col items-center w-2/4 h-2/4 overflow-auto mt-5 border-4 border-green-800 border-dashed bg-green-200 rounded-xl",
      children: [PrintCheckBoxData(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex w-full h-full justify-center items-end mb-4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-28 focus:outline-none",
          onClick: function onClick() {
            {
              FindDisease(check1, check2, check3, check4);
            }
          },
          children: "Find"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "text-xl mt-5 border-4 border-green-700 p-2 rounded-md",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "font-bold ",
        children: "\u0E41\u0E21\u0E27\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E2D\u0E32\u0E08\u0E40\u0E1B\u0E47\u0E19\u0E42\u0E23\u0E04 :"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 85
      }, _this), name]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-screen -mt-8",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 129,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3ltcHRvbS5qcyJdLCJuYW1lcyI6WyJuYW1lT2ZEaXNlYXNlIiwiVVJMIiwic3ltcHRvbSIsInVzZVN0YXRlIiwiaGVhbHRocyIsInNldEhlYWx0aHMiLCJoZWFsdGgiLCJzZXRIZWFsdGgiLCJuYW1lIiwic2V0TmFtZSIsInN5bXB0b20xIiwic2V0U3ltdG9tMSIsInN5bXB0b20yIiwic2V0U3ltdG9tMiIsInN5bXB0b20zIiwic2V0U3ltdG9tMyIsInN5bXB0b200Iiwic2V0U3ltdG9tNCIsImNoZWNrMSIsInNldENoZWNrMSIsImNoZWNrMiIsInNldENoZWNrMiIsImNoZWNrMyIsInNldENoZWNrMyIsImNoZWNrNCIsInNldENoZWNrNCIsInVzZUVmZmVjdCIsImdldERpc2Vhc2UiLCJheGlvcyIsImdldCIsImRpc2VzYXNlQ2F0IiwiZGF0YSIsIlByaW50Q2hlY2tCb3hEYXRhIiwiZGlzZWFzZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkZpbmREaXNlYXNlIiwiZGlzMSIsImRpczIiLCJkaXMzIiwiZGlzNCIsImNvbnNvbGUiLCJsb2ciLCJpIiwibGVuZ3RoIiwicHJpbnREaXNlYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxhQUFhLEdBQUcsR0FBcEI7QUFHQSxJQUFNQyxHQUFHLGlDQUFUOztBQUNBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFFWUMsc0RBQVEsQ0FBQztBQUNuQyxlQUFXLENBQ1A7QUFDSSxZQUFNLENBRFY7QUFFSSxjQUFRLFlBRlo7QUFHSSxrQkFBWSxnQkFIaEI7QUFJSSxrQkFBWSxhQUpoQjtBQUtJLGtCQUFZLHVCQUxoQjtBQU1JLGtCQUFZO0FBTmhCLEtBRE87QUFEd0IsR0FBRCxDQUZwQjtBQUFBLE1BRVhD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QUFBQSxhQURKLGVBS0k7QUFBSSxlQUFTLEVBQUMsMEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSixlQVFJO0FBQUcsZUFBUyxFQUFDLHVDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkosZUFTSTtBQUFLLGVBQVMsRUFBQywySEFBZjtBQUFBLGlCQUNLSixpQkFBaUIsRUFEdEIsZUFFSTtBQUFLLGlCQUFTLEVBQUMsa0RBQWY7QUFBQSwrQkFDSTtBQUFRLG1CQUFTLEVBQUMscUdBQWxCO0FBQXdILGlCQUFPLEVBQUUsbUJBQU07QUFBRTtBQUFFUSx5QkFBVyxDQUFDdEIsTUFBRCxFQUFTRSxNQUFULEVBQWlCRSxNQUFqQixFQUF5QkUsTUFBekIsQ0FBWDtBQUE2QztBQUFFLFdBQTFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRKLGVBZ0JJO0FBQU0sZUFBUyxFQUFDLHVEQUFoQjtBQUFBLDhCQUF3RTtBQUFHLGlCQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF4RSxFQUE2SGhCLElBQTdIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhCSixlQWlCSTtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBLDZCQUNJLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZKO0FBeUJILENBOUlEOztHQUFNTixPOztBQWdKU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3ltcHRvbS4zZGFhNDM2ZmIwYWYzYzMxMTUzZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5sZXQgbmFtZU9mRGlzZWFzZSA9IFwiIFwiXHJcblxyXG5cclxuY29uc3QgVVJMID0gYGh0dHA6Ly9sb2NhbGhvc3QvYXBpL2Rpc2Vhc2VgXHJcbmNvbnN0IHN5bXB0b20gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2hlYWx0aHMsIHNldEhlYWx0aHNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIFwiZGlzZWFzZVwiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIuC5guC4o+C4hOC4q+C4p+C4seC4lOC5geC4oeC4p1wiLFxyXG4gICAgICAgICAgICAgICAgXCJzeW1wdG9tMVwiOiBcIuC4reC4suC4geC4suC4o+C5gOC4i+C4t+C5iOC4reC4h+C4i+C4tuC4oVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzeW1wdG9tMlwiOiBcIuC4q+C4suC4ouC5g+C4iOC4peC4s+C4muC4suC4gSBcIixcclxuICAgICAgICAgICAgICAgIFwic3ltcHRvbTNcIjogXCLguKHguLXguYTguILguYkg4LmE4LitIOC4iOC4suC4oSDguKHguLXguJnguYnguLPguKHguLnguIFcIixcclxuICAgICAgICAgICAgICAgIFwic3ltcHRvbTRcIjogXCLguYDguJrguLfguYjguK3guK3guLLguKvguLLguKNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2hlYWx0aCwgc2V0SGVhbHRoXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3N5bXB0b20xLCBzZXRTeW10b20xXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3N5bXB0b20yLCBzZXRTeW10b20yXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3N5bXB0b20zLCBzZXRTeW10b20zXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3N5bXB0b200LCBzZXRTeW10b200XSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGNvbnN0IFtjaGVjazEsIHNldENoZWNrMV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtjaGVjazIsIHNldENoZWNrMl0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtjaGVjazMsIHNldENoZWNrM10gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtjaGVjazQsIHNldENoZWNrNF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldERpc2Vhc2UoKVxyXG5cclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGdldERpc2Vhc2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGRpc2VzYXNlQ2F0ID0gYXdhaXQgYXhpb3MuZ2V0KFVSTClcclxuICAgICAgICBzZXRIZWFsdGhzKGRpc2VzYXNlQ2F0LmRhdGEpXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBQcmludENoZWNrQm94RGF0YSA9ICgpID0+IHtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoaGVhbHRocy5kaXNlYXNlLm1hcCgoaXRlbSwgaW5kZXgpID0+XHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1zdGFydCB3LTEvMiBoLTEvMyAnIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ndy00IGgtNCBtdC0yJyB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17KGUpID0+IHNldENoZWNrMShlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXtpdGVtLnN5bXB0b20xfSAvPiB7aXRlbS5zeW1wdG9tMX1cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSd3LTQgaC00IG10LTInIHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2hlY2syKGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e2l0ZW0uc3ltcHRvbTJ9IC8+IHtpdGVtLnN5bXB0b20yfVxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3ctNCBoLTQgbXQtMicgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRDaGVjazMoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17aXRlbS5zeW1wdG9tM30gLz4ge2l0ZW0uc3ltcHRvbTN9XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ndy00IGgtNCBtdC0yJyB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17KGUpID0+IHNldENoZWNrNChlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXtpdGVtLnN5bXB0b200fSAvPiB7aXRlbS5zeW1wdG9tNH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcblxyXG5cclxuICAgICAgICApKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IEZpbmREaXNlYXNlID0gKGRpczEsIGRpczIsIGRpczMsIGRpczQpID0+IHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUZXN0IGRpczogXCIsIGRpczEsIGRpczIsIGRpczMsIGRpczQpO1xyXG5cclxuICAgICAgICAvLyBoZWFsdGhzLmRpc2Vhc2UubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmIChpdGVtLnN5bXB0b20xID09PSBkaXMxICYmIGl0ZW0uc3ltcHRvbTIgPT09IGRpczIgJiYgaXRlbS5zeW1wdG9tMyA9PT0gZGlzMyAmJiBpdGVtLnN5bXB0b200ID09PSBkaXM0KSB7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhpdGVtLm5hbWUpO1xyXG4gICAgICAgIC8vICAgICAgICAgc2V0TmFtZShpdGVtLm5hbWUpXHJcblxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAvLyAgICAgICAgIC8vIHNldE5hbWUoXCLguYTguKHguYjguYDguIjguK3guYLguKPguITguYPguJnguKPguLDguJrguJpcIilcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0ubmFtZSk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlYWx0aHMuZGlzZWFzZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhoZWFsdGhzLmRpc2Vhc2UubGVuZ3RoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaGVhbHRocy5kaXNlYXNlW2ldKTtcclxuICAgICAgICAgICAgaWYgKGhlYWx0aHMuZGlzZWFzZVtpXS5zeW1wdG9tMSA9PT0gZGlzMSAmJiBoZWFsdGhzLmRpc2Vhc2VbaV0uc3ltcHRvbTIgPT09IGRpczIgJiYgaGVhbHRocy5kaXNlYXNlW2ldLnN5bXB0b20zID09PSBkaXMzICYmIGhlYWx0aHMuZGlzZWFzZVtpXS5zeW1wdG9tNCA9PT0gZGlzNCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaGVhbHRocy5kaXNlYXNlW2ldLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0TmFtZShoZWFsdGhzLmRpc2Vhc2VbaV0ubmFtZSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZXROYW1lKFwi4LmE4Lih4LmI4LmA4LiI4Lit4LmC4Lij4LiE4LmD4LiZ4Lij4Liw4Lia4LiaXCIpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBwcmludERpc2Vhc2UgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGhlYWx0aHMuZGlzZWFzZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX0gfCB7aXRlbS5zeW1wdG9tMX1cclxuXHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaC1zY3JlZW4gdy1zY3JlZW4ganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgIGZpeGVkIG10LTVcIj5cclxuICAgICAgICAgICAgPHRpdGxlPkNhdC1TeW1wdG9tPC90aXRsZT5cclxuXHJcblxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaC1zY3JlZW4ganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlcic+ICovfVxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdib3JkZXItMiBib3JkZXItZ3JlZW4tOTAwIGJnLWdyZWVuLTMwMCBmb250LWJvbGQgdGV4dC0zeGwgcC0yIHJvdW5kZWQtbGcnPuC4ouC4tOC4meC4lOC4teC4leC5ieC4reC4meC4o+C4seC4muC5gOC4guC5ieC4suC4quC4ueC5iOC4o+C4sOC4muC4muC4leC4o+C4p+C4iOC4quC4reC4muC5guC4o+C4hOC4guC4reC4h+C5geC4oeC4pzwvaDE+XHJcbiAgICAgICAgICAgIHsvKiB7cHJpbnREaXNlYXNlKCl9ICovfVxyXG5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSd0ZXh0LWxnIHRleHQtZ3JlZW4tODAwIGZvbnQtYm9sZCBtdC01Jz7guYHguKHguKfguILguK3guIfguJfguYjguLLguJnguKHguLXguK3guLLguIHguLLguKPguJTguLHguIfguJnguLXguYnguKvguKPguLfguK3guYTguKHguYgg4LmC4Lib4Lij4LiU4LiV4Li04LmK4LiB4LmA4Lil4Li34Lit4LiB4LiV4Liy4Lih4Lit4Liy4LiB4Liy4Lij4LiC4LmJ4Liy4LiH4LiV4LmJ4LiZPC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHctMi80IGgtMi80IG92ZXJmbG93LWF1dG8gbXQtNSBib3JkZXItNCBib3JkZXItZ3JlZW4tODAwIGJvcmRlci1kYXNoZWQgYmctZ3JlZW4tMjAwIHJvdW5kZWQteGxcIj5cclxuICAgICAgICAgICAgICAgIHtQcmludENoZWNrQm94RGF0YSgpfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggdy1mdWxsIGgtZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1lbmQgbWItNCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLWdyZWVuLTkwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbCB3LTI4IGZvY3VzOm91dGxpbmUtbm9uZScgb25DbGljaz17KCkgPT4geyB7IEZpbmREaXNlYXNlKGNoZWNrMSwgY2hlY2syLCBjaGVjazMsIGNoZWNrNCkgfSB9fT5GaW5kPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsIG10LTUgYm9yZGVyLTQgYm9yZGVyLWdyZWVuLTcwMCBwLTIgcm91bmRlZC1tZFwiPjxhIGNsYXNzTmFtZT0nZm9udC1ib2xkICcgPuC5geC4oeC4p+C4guC4reC4h+C4hOC4uOC4k+C4reC4suC4iOC5gOC4m+C5h+C4meC5guC4o+C4hCA6PC9hPntuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctc2NyZWVuIC1tdC04Jz5cclxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzeW1wdG9tIl0sInNvdXJjZVJvb3QiOiIifQ==