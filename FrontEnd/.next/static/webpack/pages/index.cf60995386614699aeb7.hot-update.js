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

  var search = /*#__PURE__*/function () {
    var _ref3 = Object(D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(name) {
      return D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
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

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function search(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

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
            }, Object(D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsxDEV2, "className", "border-b-2 list-disc border-dashed border-black"), Object(D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsxDEV2, "children", suggestion), _jsxDEV2), suggestion, false, {
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
          className: "bg-green-500 p-1 w-20 rounded ",
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
        className: "",
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
      className: "flex justify-center  items-center ",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: image.url,
        width: "500",
        height: "500",
        className: "rounded-2xl shadow-2xl m-5 "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex w-2/4 mt-5 p-4 ml-5 items-center justify-start border-2 border-green-600 border-dashed",
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
          }, _this), life_span, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRvY29tcGxldGUuanMiXSwibmFtZXMiOlsiVVJMIiwiaW1nVVJMIiwiQXV0b2NvbXBsZXRlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImZpbHRlcmVkIiwic2V0RmlsdGVyZWQiLCJpc1Nob3ciLCJzZXRJc1Nob3ciLCJpbnB1dCIsInNldElucHV0IiwiY2F0cyIsInNldENhdHMiLCJpbWFnZSIsInNldEltYWdlIiwiZmluZCIsInNldEZpbmQiLCJyZWZpbWciLCJzZXRSZWZpbWciLCJuYW1lQ2F0Iiwic2V0TmFtZUNhdCIsInRlbXBlcmFtZW50Iiwic2V0VGVtcGVyYW1lbnQiLCJvcmlnaW4iLCJzZXRPcmlnaW4iLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwibGlmZV9zcGFuIiwic2V0TGlmZV9zcGFuIiwidXNlRWZmZWN0IiwiZ2V0Q2F0cyIsImdldEltYWdlIiwiaWQiLCJheGlvcyIsImdldCIsImltcCIsImRhdGEiLCJjYXQiLCJzZWFyY2giLCJuYW1lIiwibWFwIiwiaXRlbSIsImluZGV4IiwicmVmZXJlbmNlX2ltYWdlX2lkIiwib25DaGFuZ2UiLCJlIiwic3VnZ2VzdGlvbnMiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJuZXdGaWx0ZXJlZFN1Z2dlc3Rpb25zIiwiZmlsdGVyIiwic3VnZ2VzdGlvbiIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsIm9uQ2xpY2siLCJpbm5lclRleHQiLCJvbktleURvd24iLCJrZXlDb2RlIiwibGVuZ3RoIiwicmVuZGVyQXV0b2NvbXBsZXRlIiwiY2xhc3NOYW1lIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLEdBQUcsd0NBQVQ7QUFDQSxJQUFNQyxNQUFNLHdDQUFaOztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENB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Mzg2NjE0Njk5YWViNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5jb25zdCBVUkwgPSBgaHR0cHM6Ly9hcGkudGhlY2F0YXBpLmNvbS92MS9icmVlZHNgXHJcbmNvbnN0IGltZ1VSTCA9IGBodHRwczovL2FwaS50aGVjYXRhcGkuY29tL3YxL2ltYWdlc2BcclxuXHJcbmNvbnN0IEF1dG9jb21wbGV0ZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbZmlsdGVyZWQsIHNldEZpbHRlcmVkXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaXNTaG93LCBzZXRJc1Nob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NhdHMsIHNldENhdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtmaW5kLCBzZXRGaW5kXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtyZWZpbWcsIHNldFJlZmltZ10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbbmFtZUNhdCwgc2V0TmFtZUNhdF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbdGVtcGVyYW1lbnQsIHNldFRlbXBlcmFtZW50XSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtvcmlnaW4sIHNldE9yaWdpbl0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtsaWZlX3NwYW4sIHNldExpZmVfc3Bhbl0gPSB1c2VTdGF0ZSgnJylcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRDYXRzKClcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGdldEltYWdlID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBsZXQgaW1wID0gYXdhaXQgYXhpb3MuZ2V0KGAke2ltZ1VSTH0vJHtpZH1gKVxyXG4gICAgc2V0SW1hZ2UoaW1wLmRhdGEpXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRDYXRzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IGNhdCA9IGF3YWl0IGF4aW9zLmdldChVUkwpXHJcbiAgICBzZXRDYXRzKGNhdC5kYXRhKVxyXG5cclxuICB9XHJcblxyXG4gIGNvbnN0IHNlYXJjaCA9IGFzeW5jIChuYW1lKSA9PiB7XHJcblxyXG4gICAgY2F0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChuYW1lID09PSBpdGVtLm5hbWUpIHtcclxuICAgICAgICBzZXRSZWZpbWcoaXRlbS5yZWZlcmVuY2VfaW1hZ2VfaWQpXHJcbiAgICAgICAgZ2V0SW1hZ2UocmVmaW1nKVxyXG4gICAgICAgIHNldE5hbWVDYXQoaXRlbS5uYW1lKVxyXG4gICAgICAgIHNldFRlbXBlcmFtZW50KGl0ZW0udGVtcGVyYW1lbnQpXHJcbiAgICAgICAgc2V0T3JpZ2luKGl0ZW0ub3JpZ2luKVxyXG4gICAgICAgIHNldERlc2NyaXB0aW9uKGl0ZW0uZGVzY3JpcHRpb24pXHJcbiAgICAgICAgc2V0TGlmZV9zcGFuKGl0ZW0ubGlmZV9zcGFuKVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH0pXHJcblxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSBlID0+IHtcclxuICAgIGNvbnN0IHsgc3VnZ2VzdGlvbnMgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgaW5wdXQgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWU7XHJcbiAgICBjb25zdCBuZXdGaWx0ZXJlZFN1Z2dlc3Rpb25zID0gc3VnZ2VzdGlvbnMuZmlsdGVyKFxyXG4gICAgICBzdWdnZXN0aW9uID0+XHJcbiAgICAgICAgc3VnZ2VzdGlvbi50b0xvd2VyQ2FzZSgpLmluZGV4T2YoaW5wdXQudG9Mb3dlckNhc2UoKSkgPiAtMVxyXG4gICAgKTtcclxuXHJcbiAgICBzZXRBY3RpdmUoMCk7XHJcbiAgICBzZXRGaWx0ZXJlZChuZXdGaWx0ZXJlZFN1Z2dlc3Rpb25zKTtcclxuICAgIHNldElzU2hvdyh0cnVlKTtcclxuICAgIHNldElucHV0KGUuY3VycmVudFRhcmdldC52YWx1ZSlcclxuICAgIHNldEZpbmQoaW5wdXQpXHJcblxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2sgPSBlID0+IHtcclxuICAgIHNldEFjdGl2ZSgwKTtcclxuICAgIHNldEZpbHRlcmVkKFtdKTtcclxuICAgIHNldElzU2hvdyhmYWxzZSk7XHJcbiAgICBzZXRJbnB1dChlLmN1cnJlbnRUYXJnZXQuaW5uZXJUZXh0KVxyXG5cclxuICB9O1xyXG5cclxuICBjb25zdCBvbktleURvd24gPSBlID0+IHtcclxuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7IC8vIGVudGVyIGtleVxyXG4gICAgICBzZXRBY3RpdmUoMCk7XHJcbiAgICAgIHNldElzU2hvdyhmYWxzZSk7XHJcbiAgICAgIHNldElucHV0KGZpbHRlcmVkW2FjdGl2ZV0pXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM4KSB7IC8vIHVwIGFycm93XHJcbiAgICAgIHJldHVybiAoYWN0aXZlID09PSAwKSA/IG51bGwgOiBzZXRBY3RpdmUoYWN0aXZlIC0gMSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChlLmtleUNvZGUgPT09IDQwKSB7IC8vIGRvd24gYXJyb3dcclxuICAgICAgcmV0dXJuIChhY3RpdmUgLSAxID09PSBmaWx0ZXJlZC5sZW5ndGgpID8gbnVsbCA6IHNldEFjdGl2ZShhY3RpdmUgKyAxKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJBdXRvY29tcGxldGUgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNTaG93ICYmIGlucHV0KSB7XHJcbiAgICAgIGlmIChmaWx0ZXJlZC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImF1dG9jb21wbGV0ZVwiPlxyXG4gICAgICAgICAgICB7ZmlsdGVyZWQubWFwKChzdWdnZXN0aW9uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCBjbGFzc05hbWU7XHJcbiAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBhY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYWN0aXZlXCI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGtleT17c3VnZ2VzdGlvbn0gb25DbGljaz17b25DbGlja30gY2xhc3NOYW1lPSdib3JkZXItYi0yIGxpc3QtZGlzYyBib3JkZXItZGFzaGVkIGJvcmRlci1ibGFjayc+XHJcbiAgICAgICAgICAgICAgICAgIHtzdWdnZXN0aW9ufVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuby1hdXRvY29tcGxldGVcIj5cclxuICAgICAgICAgICAgPGVtPk5vdCBmb3VuZDwvZW0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gPD48Lz47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciAnPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIHctNC8xMiBmbGV4IGp1c3RpZnktYXJvdW5kIGl0ZW1zLWNlbnRlciBtdC0xMCc+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9J2ZvbnQtYm9sZCB0ZXh0LTJ4bCAnPlNlYXJjaCA6ICA8L2E+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgIG9uS2V5RG93bj17b25LZXlEb3dufVxyXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nYm9yZGVyLTIgYm9yZGVyLWdyZWVuLTYwMCByb3VuZGVkIHBsLTIgdy04MCdcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIgQ2F0IEJyZWVkc1wiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxidXR0b24gdmFsdWU9e2lucHV0fSBvbkNsaWNrPXsoKSA9PiBzZWFyY2goaW5wdXQpfSBjbGFzc05hbWU9J2JnLWdyZWVuLTUwMCBwLTEgdy0yMCByb3VuZGVkICc+RmluZCE8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDxkdXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICB7cmVuZGVyQXV0b2NvbXBsZXRlKCl9XHJcbiAgICAgICAgPC9kdXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyICBpdGVtcy1jZW50ZXIgJz5cclxuICAgICAgICA8aW1nIHNyYz17aW1hZ2UudXJsfSB3aWR0aD1cIjUwMFwiIGhlaWdodD1cIjUwMFwiIGNsYXNzTmFtZT0ncm91bmRlZC0yeGwgc2hhZG93LTJ4bCBtLTUgJyAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHctMi80IG10LTUgcC00IG1sLTUgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgYm9yZGVyLTIgYm9yZGVyLWdyZWVuLTYwMCBib3JkZXItZGFzaGVkJz5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQnPm5hbWU6IDwvYT57bmFtZUNhdH1cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0ndGV4dC1sZyBmb250LXNlbWlib2xkJz50ZW1wZXJhbWVudDogPC9hPnt0ZW1wZXJhbWVudH1cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0ndGV4dC1sZyBmb250LXNlbWlib2xkJz5vcmlnaW46IDwvYT57b3JpZ2lufVxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgJz5kZXNjcmlwdGlvbjogPC9hPntkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0ndGV4dC1sZyBmb250LXNlbWlib2xkJz5saWZlIHNwYW46IDwvYT57bGlmZV9zcGFufVxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRvY29tcGxldGU7Il0sInNvdXJjZVJvb3QiOiIifQ==