webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Autocomplete.js":
/*!************************************!*\
  !*** ./components/Autocomplete.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);






var _jsxFileName = "D:\\001Study\\Year3Therm2\\240-311 Distributed\\Final-MiniProject\\CatBreeds\\FrontEnd\\components\\Autocomplete.js",
    _this = undefined,
    _s = $RefreshSig$();



var URL = "https://api.thecatapi.com/v1/breeds";
var imgURL = "https://api.thecatapi.com/v1/images";

var Autocomplete = function Autocomplete(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      active = _useState[0],
      setActive = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      filtered = _useState2[0],
      setFiltered = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isShow = _useState3[0],
      setIsShow = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      input = _useState4[0],
      setInput = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      cats = _useState5[0],
      setCats = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      image = _useState6[0],
      setImage = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      find = _useState7[0],
      setFind = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      refimg = _useState8[0],
      setRefimg = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      nameCat = _useState9[0],
      setNameCat = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      temperament = _useState10[0],
      setTemperament = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      origin = _useState11[0],
      setOrigin = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      description = _useState12[0],
      setDescription = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      life_span = _useState13[0],
      setLife_span = _useState13[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    getCats();
  }, []);

  var getImage = /*#__PURE__*/function () {
    var _ref = Object(D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(id) {
      var imp;
      return D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("".concat(imgURL, "/").concat(id));

            case 2:
              imp = _context.sent;
              setImage(imp.data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getImage(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var getCats = /*#__PURE__*/function () {
    var _ref2 = Object(D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
      var cat;
      return D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(URL);

            case 2:
              cat = _context2.sent;
              setCats(cat.data);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getCats() {
      return _ref2.apply(this, arguments);
    };
  }();

  var search = function search(name) {
    cats.map(function (item, index) {
      if (name === item.name) {
        setRefimg(item.reference_image_id);
        getImage(refimg);
        setNameCat(item.name);
        setTemperament(item.temperament);
        setOrigin(item.origin);
        setDescription(item.description);
        setLife_span(item.life_span);
      }
    });
  };

  var onChange = function onChange(e) {
    var suggestions = props.suggestions;
    var input = e.currentTarget.value;
    var newFilteredSuggestions = suggestions.filter(function (suggestion) {
      return suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1;
    });
    setActive(0);
    setFiltered(newFilteredSuggestions);
    setIsShow(true);
    setInput(e.currentTarget.value);
    setFind(input);
  };

  var onClick = function onClick(e) {
    setActive(0);
    setFiltered([]);
    setIsShow(false);
    setInput(e.currentTarget.innerText);
  };

  var onKeyDown = function onKeyDown(e) {
    if (e.keyCode === 13) {
      // enter key
      setActive(0);
      setIsShow(false);
      setInput(filtered[active]);
    } else if (e.keyCode === 38) {
      // up arrow
      return active === 0 ? null : setActive(active - 1);
    } else if (e.keyCode === 40) {
      // down arrow
      return active - 1 === filtered.length ? null : setActive(active + 1);
    }
  };

  var renderAutocomplete = function renderAutocomplete() {
    if (isShow && input) {
      if (filtered.length) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: "autocomplete",
          children: filtered.map(function (suggestion, index) {
            var _jsxDEV2;

            var className;

            if (index === active) {
              className = "active";
            }

            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", (_jsxDEV2 = {
              className: className,
              onClick: onClick
            }, Object(D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsxDEV2, "className", "border-b-2 list-disc border-dashed border-black "), Object(D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsxDEV2, "children", suggestion), _jsxDEV2), suggestion, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, _this);
      } else {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "no-autocomplete",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
            children: "Not found"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, _this);
      }
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-col justify-center items-center ",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: " w-4/12 flex justify-around items-center mt-10",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "font-bold text-2xl ",
          children: "Search :  "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          onChange: onChange,
          onKeyDown: onKeyDown,
          value: input,
          className: "border-2 border-green-600 rounded pl-2 w-80",
          placeholder: " Cat Breeds"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          value: input,
          onClick: function onClick() {
            return search(input);
          },
          className: " p-1 w-20 rounded transition duration-500 ease-in-out bg-green-500 hover:bg-green-200 transform hover:-translate-y-1 hover:scale-110",
          children: "Find!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("duv", {
        className: "h-44 overflow-auto",
        children: renderAutocomplete()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex justify-center items-center  ",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: image.url,
        className: "rounded-2xl shadow-2xl m-5 max-w-4xl h-80 "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex w-2/4 mt-5 p-4 ml-5 items-center justify-start border-8 border-green-600 border-double",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "text-lg font-semibold",
            children: "name: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, _this), nameCat, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "text-lg font-semibold",
            children: "temperament: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, _this), temperament, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "text-lg font-semibold",
            children: "origin: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, _this), origin, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "text-lg font-semibold ",
            children: "description: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 13
          }, _this), description, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "text-lg font-semibold",
            children: "life span: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, _this), life_span, " years", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Autocomplete, "dlINuDHZ2p5hJ1T7Q+aAEd/DuMg=");

_c = Autocomplete;
/* harmony default export */ __webpack_exports__["default"] = (Autocomplete);

var _c;

$RefreshReg$(_c, "Autocomplete");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRvY29tcGxldGUuanMiXSwibmFtZXMiOlsiVVJMIiwiaW1nVVJMIiwiQXV0b2NvbXBsZXRlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImZpbHRlcmVkIiwic2V0RmlsdGVyZWQiLCJpc1Nob3ciLCJzZXRJc1Nob3ciLCJpbnB1dCIsInNldElucHV0IiwiY2F0cyIsInNldENhdHMiLCJpbWFnZSIsInNldEltYWdlIiwiZmluZCIsInNldEZpbmQiLCJyZWZpbWciLCJzZXRSZWZpbWciLCJuYW1lQ2F0Iiwic2V0TmFtZUNhdCIsInRlbXBlcmFtZW50Iiwic2V0VGVtcGVyYW1lbnQiLCJvcmlnaW4iLCJzZXRPcmlnaW4iLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwibGlmZV9zcGFuIiwic2V0TGlmZV9zcGFuIiwidXNlRWZmZWN0IiwiZ2V0Q2F0cyIsImdldEltYWdlIiwiaWQiLCJheGlvcyIsImdldCIsImltcCIsImRhdGEiLCJjYXQiLCJzZWFyY2giLCJuYW1lIiwibWFwIiwiaXRlbSIsImluZGV4IiwicmVmZXJlbmNlX2ltYWdlX2lkIiwib25DaGFuZ2UiLCJlIiwic3VnZ2VzdGlvbnMiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJuZXdGaWx0ZXJlZFN1Z2dlc3Rpb25zIiwiZmlsdGVyIiwic3VnZ2VzdGlvbiIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsIm9uQ2xpY2siLCJpbm5lclRleHQiLCJvbktleURvd24iLCJrZXlDb2RlIiwibGVuZ3RoIiwicmVuZGVyQXV0b2NvbXBsZXRlIiwiY2xhc3NOYW1lIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLEdBQUcsd0NBQVQ7QUFDQSxJQUFNQyxNQUFNLHdDQUFaOztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENB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QUFmO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUEsa0NBQ0U7QUFBRyxxQkFBUyxFQUFDLHVCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBQ2tEMUMsT0FEbEQsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBRyxxQkFBUyxFQUFDLHVCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLEVBR3lERSxXQUh6RCxlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFLRTtBQUFHLHFCQUFTLEVBQUMsdUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEYsRUFLb0RFLE1BTHBELGVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORixlQU9FO0FBQUcscUJBQVMsRUFBQyx3QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRixFQU8wREUsV0FQMUQsZUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGLGVBU0U7QUFBRyxxQkFBUyxFQUFDLHVCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGLEVBU3VERSxTQVR2RCx5QkFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF6QkY7QUFBQSxrQkFERjtBQWlERCxDQXJLRDs7R0FBTTNCLFk7O0tBQUFBLFk7QUF1S1NBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUzZjgyMWQ1ZWFjZmQxODFhYzIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmNvbnN0IFVSTCA9IGBodHRwczovL2FwaS50aGVjYXRhcGkuY29tL3YxL2JyZWVkc2BcclxuY29uc3QgaW1nVVJMID0gYGh0dHBzOi8vYXBpLnRoZWNhdGFwaS5jb20vdjEvaW1hZ2VzYFxyXG5cclxuY29uc3QgQXV0b2NvbXBsZXRlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtmaWx0ZXJlZCwgc2V0RmlsdGVyZWRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpc1Nob3csIHNldElzU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2F0cywgc2V0Q2F0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2ZpbmQsIHNldEZpbmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3JlZmltZywgc2V0UmVmaW1nXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtuYW1lQ2F0LCBzZXROYW1lQ2F0XSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFt0ZW1wZXJhbWVudCwgc2V0VGVtcGVyYW1lbnRdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW29yaWdpbiwgc2V0T3JpZ2luXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2xpZmVfc3Bhbiwgc2V0TGlmZV9zcGFuXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldENhdHMoKVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0SW1hZ2UgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIGxldCBpbXAgPSBhd2FpdCBheGlvcy5nZXQoYCR7aW1nVVJMfS8ke2lkfWApXHJcbiAgICBzZXRJbWFnZShpbXAuZGF0YSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldENhdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgY2F0ID0gYXdhaXQgYXhpb3MuZ2V0KFVSTClcclxuICAgIHNldENhdHMoY2F0LmRhdGEpXHJcblxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2VhcmNoID0gIChuYW1lKSA9PiB7XHJcblxyXG4gICAgY2F0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChuYW1lID09PSBpdGVtLm5hbWUpIHtcclxuICAgICAgICBzZXRSZWZpbWcoaXRlbS5yZWZlcmVuY2VfaW1hZ2VfaWQpXHJcbiAgICAgICAgZ2V0SW1hZ2UocmVmaW1nKVxyXG4gICAgICAgIHNldE5hbWVDYXQoaXRlbS5uYW1lKVxyXG4gICAgICAgIHNldFRlbXBlcmFtZW50KGl0ZW0udGVtcGVyYW1lbnQpXHJcbiAgICAgICAgc2V0T3JpZ2luKGl0ZW0ub3JpZ2luKVxyXG4gICAgICAgIHNldERlc2NyaXB0aW9uKGl0ZW0uZGVzY3JpcHRpb24pXHJcbiAgICAgICAgc2V0TGlmZV9zcGFuKGl0ZW0ubGlmZV9zcGFuKVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH0pXHJcblxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSBlID0+IHtcclxuICAgIGNvbnN0IHsgc3VnZ2VzdGlvbnMgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgaW5wdXQgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWU7XHJcbiAgICBjb25zdCBuZXdGaWx0ZXJlZFN1Z2dlc3Rpb25zID0gc3VnZ2VzdGlvbnMuZmlsdGVyKFxyXG4gICAgICBzdWdnZXN0aW9uID0+XHJcbiAgICAgICAgc3VnZ2VzdGlvbi50b0xvd2VyQ2FzZSgpLmluZGV4T2YoaW5wdXQudG9Mb3dlckNhc2UoKSkgPiAtMVxyXG4gICAgKTtcclxuXHJcbiAgICBzZXRBY3RpdmUoMCk7XHJcbiAgICBzZXRGaWx0ZXJlZChuZXdGaWx0ZXJlZFN1Z2dlc3Rpb25zKTtcclxuICAgIHNldElzU2hvdyh0cnVlKTtcclxuICAgIHNldElucHV0KGUuY3VycmVudFRhcmdldC52YWx1ZSlcclxuICAgIHNldEZpbmQoaW5wdXQpXHJcblxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2sgPSBlID0+IHtcclxuICAgIHNldEFjdGl2ZSgwKTtcclxuICAgIHNldEZpbHRlcmVkKFtdKTtcclxuICAgIHNldElzU2hvdyhmYWxzZSk7XHJcbiAgICBzZXRJbnB1dChlLmN1cnJlbnRUYXJnZXQuaW5uZXJUZXh0KVxyXG5cclxuICB9O1xyXG5cclxuICBjb25zdCBvbktleURvd24gPSBlID0+IHtcclxuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7IC8vIGVudGVyIGtleVxyXG4gICAgICBzZXRBY3RpdmUoMCk7XHJcbiAgICAgIHNldElzU2hvdyhmYWxzZSk7XHJcbiAgICAgIHNldElucHV0KGZpbHRlcmVkW2FjdGl2ZV0pXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM4KSB7IC8vIHVwIGFycm93XHJcbiAgICAgIHJldHVybiAoYWN0aXZlID09PSAwKSA/IG51bGwgOiBzZXRBY3RpdmUoYWN0aXZlIC0gMSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChlLmtleUNvZGUgPT09IDQwKSB7IC8vIGRvd24gYXJyb3dcclxuICAgICAgcmV0dXJuIChhY3RpdmUgLSAxID09PSBmaWx0ZXJlZC5sZW5ndGgpID8gbnVsbCA6IHNldEFjdGl2ZShhY3RpdmUgKyAxKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJBdXRvY29tcGxldGUgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNTaG93ICYmIGlucHV0KSB7XHJcbiAgICAgIGlmIChmaWx0ZXJlZC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImF1dG9jb21wbGV0ZVwiPlxyXG4gICAgICAgICAgICB7ZmlsdGVyZWQubWFwKChzdWdnZXN0aW9uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCBjbGFzc05hbWU7XHJcbiAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBhY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYWN0aXZlXCI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGtleT17c3VnZ2VzdGlvbn0gb25DbGljaz17b25DbGlja30gY2xhc3NOYW1lPSdib3JkZXItYi0yIGxpc3QtZGlzYyBib3JkZXItZGFzaGVkIGJvcmRlci1ibGFjayAnPlxyXG4gICAgICAgICAgICAgICAgICB7c3VnZ2VzdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm8tYXV0b2NvbXBsZXRlXCI+XHJcbiAgICAgICAgICAgIDxlbT5Ob3QgZm91bmQ8L2VtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDw+PC8+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgJz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9JyB3LTQvMTIgZmxleCBqdXN0aWZ5LWFyb3VuZCBpdGVtcy1jZW50ZXIgbXQtMTAnPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC0yeGwgJz5TZWFyY2ggOiAgPC9hPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICBvbktleURvd249e29uS2V5RG93bn1cclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2JvcmRlci0yIGJvcmRlci1ncmVlbi02MDAgcm91bmRlZCBwbC0yIHctODAnXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiIENhdCBCcmVlZHNcIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uIHZhbHVlPXtpbnB1dH0gb25DbGljaz17KCkgPT4gc2VhcmNoKGlucHV0KX0gY2xhc3NOYW1lPScgcC0xIHctMjAgcm91bmRlZCB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tMjAwIHRyYW5zZm9ybSBob3ZlcjotdHJhbnNsYXRlLXktMSBob3ZlcjpzY2FsZS0xMTAnPkZpbmQhPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8ZHV2IGNsYXNzTmFtZT1cImgtNDQgb3ZlcmZsb3ctYXV0b1wiPlxyXG4gICAgICAgICAge3JlbmRlckF1dG9jb21wbGV0ZSgpfVxyXG4gICAgICAgIDwvZHV2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgICc+XHJcbiAgICAgICAgPGltZyBzcmM9e2ltYWdlLnVybH0gY2xhc3NOYW1lPSdyb3VuZGVkLTJ4bCBzaGFkb3ctMnhsIG0tNSBtYXgtdy00eGwgaC04MCAnIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggdy0yLzQgbXQtNSBwLTQgbWwtNSBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCBib3JkZXItOCBib3JkZXItZ3JlZW4tNjAwIGJvcmRlci1kb3VibGUnPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1zZW1pYm9sZCc+bmFtZTogPC9hPntuYW1lQ2F0fVxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQnPnRlbXBlcmFtZW50OiA8L2E+e3RlbXBlcmFtZW50fVxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQnPm9yaWdpbjogPC9hPntvcmlnaW59XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1zZW1pYm9sZCAnPmRlc2NyaXB0aW9uOiA8L2E+e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQnPmxpZmUgc3BhbjogPC9hPntsaWZlX3NwYW59IHllYXJzXHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0b2NvbXBsZXRlOyJdLCJzb3VyY2VSb290IjoiIn0=