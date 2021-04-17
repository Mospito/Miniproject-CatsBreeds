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
/* harmony import */ var D_001Study_Year3Therm2_240_311_Distributed_MiniProJect_FrontEnd_mini_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_001Study_Year3Therm2_240_311_Distributed_MiniProJect_FrontEnd_mini_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_001Study_Year3Therm2_240_311_Distributed_MiniProJect_FrontEnd_mini_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_001Study_Year3Therm2_240_311_Distributed_MiniProJect_FrontEnd_mini_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);





var _jsxFileName = "D:\\001Study\\Year3Therm2\\240-311 Distributed\\MiniProJect\\FrontEnd\\mini-project\\components\\Autocomplete.js",
    _this = undefined,
    _s = $RefreshSig$();



var URL = "https://api.thecatapi.com/v1/breeds";
var imgURL = "https://api.thecatapi.com/v1/images";

var Autocomplete = function Autocomplete(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      active = _useState[0],
      setActive = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      filtered = _useState2[0],
      setFiltered = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isShow = _useState3[0],
      setIsShow = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      input = _useState4[0],
      setInput = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      cats = _useState5[0],
      setCats = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      image = _useState6[0],
      setImage = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      find = _useState7[0],
      setFind = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      refimg = _useState8[0],
      setRefimg = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      nameCat = _useState9[0],
      setNameCat = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      temperament = _useState10[0],
      setTemperament = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      origin = _useState11[0],
      setOrigin = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      description = _useState12[0],
      setDescription = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      life_span = _useState13[0],
      setLife_span = _useState13[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getCats();
  }, []);

  var getImage = /*#__PURE__*/function () {
    var _ref = Object(D_001Study_Year3Therm2_240_311_Distributed_MiniProJect_FrontEnd_mini_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_001Study_Year3Therm2_240_311_Distributed_MiniProJect_FrontEnd_mini_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(id) {
      var imp;
      return D_001Study_Year3Therm2_240_311_Distributed_MiniProJect_FrontEnd_mini_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(imgURL, "/").concat(id));

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
    var _ref2 = Object(D_001Study_Year3Therm2_240_311_Distributed_MiniProJect_FrontEnd_mini_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_001Study_Year3Therm2_240_311_Distributed_MiniProJect_FrontEnd_mini_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var cat;
      return D_001Study_Year3Therm2_240_311_Distributed_MiniProJect_FrontEnd_mini_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(URL);

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
    var _ref3 = Object(D_001Study_Year3Therm2_240_311_Distributed_MiniProJect_FrontEnd_mini_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_001Study_Year3Therm2_240_311_Distributed_MiniProJect_FrontEnd_mini_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(name) {
      return D_001Study_Year3Therm2_240_311_Distributed_MiniProJect_FrontEnd_mini_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              cats.map(function (item, index) {
                if (name === item.name) {
                  setRefimg(item.reference_image_id);
                  setNameCat(item.name);
                  setTemperament(item.temperament);
                  setOrigin(item.origin);
                  setDescription(item.description);
                  setLife_span(item.life_span);
                  getImage(refimg);
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
    setFind(e.taget.value);
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
            var className;

            if (index === active) {
              className = "active";
            }

            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: className,
              onClick: onClick,
              children: suggestion
            }, suggestion, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this);
      } else {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "no-autocomplete",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
            children: "Not found"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, _this);
      }
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: image.url,
      width: "300",
      height: "300"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }, _this), "name: ", nameCat, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, _this), "temperament: ", temperament, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, _this), "origin: ", origin, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }, _this), "description: ", description, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }, _this), "life span: ", life_span, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }, _this), "Find:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      onChange: onChange,
      onKeyDown: onKeyDown,
      value: input
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }, _this), renderAutocomplete(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: function onClick() {
        return search(find);
      },
      children: "Find!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Autocomplete, "p/+2VNtMA4C69TfnUWhUsSl5G4E=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRvY29tcGxldGUuanMiXSwibmFtZXMiOlsiVVJMIiwiaW1nVVJMIiwiQXV0b2NvbXBsZXRlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImZpbHRlcmVkIiwic2V0RmlsdGVyZWQiLCJpc1Nob3ciLCJzZXRJc1Nob3ciLCJpbnB1dCIsInNldElucHV0IiwiY2F0cyIsInNldENhdHMiLCJpbWFnZSIsInNldEltYWdlIiwiZmluZCIsInNldEZpbmQiLCJyZWZpbWciLCJzZXRSZWZpbWciLCJuYW1lQ2F0Iiwic2V0TmFtZUNhdCIsInRlbXBlcmFtZW50Iiwic2V0VGVtcGVyYW1lbnQiLCJvcmlnaW4iLCJzZXRPcmlnaW4iLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwibGlmZV9zcGFuIiwic2V0TGlmZV9zcGFuIiwidXNlRWZmZWN0IiwiZ2V0Q2F0cyIsImdldEltYWdlIiwiaWQiLCJheGlvcyIsImdldCIsImltcCIsImRhdGEiLCJjYXQiLCJzZWFyY2giLCJuYW1lIiwibWFwIiwiaXRlbSIsImluZGV4IiwicmVmZXJlbmNlX2ltYWdlX2lkIiwib25DaGFuZ2UiLCJlIiwic3VnZ2VzdGlvbnMiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJuZXdGaWx0ZXJlZFN1Z2dlc3Rpb25zIiwiZmlsdGVyIiwic3VnZ2VzdGlvbiIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsInRhZ2V0Iiwib25DbGljayIsImlubmVyVGV4dCIsIm9uS2V5RG93biIsImtleUNvZGUiLCJsZW5ndGgiLCJyZW5kZXJBdXRvY29tcGxldGUiLCJjbGFzc05hbWUiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLEdBQUcsd0NBQVQ7QUFDQSxJQUFNQyxNQUFNLHdDQUFaOztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZ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S0FBQUEsWTtBQWlKU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWU5ODExODQwZjQzNGFkZTgzYzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmNvbnN0IFVSTCA9IGBodHRwczovL2FwaS50aGVjYXRhcGkuY29tL3YxL2JyZWVkc2BcclxuY29uc3QgaW1nVVJMID0gYGh0dHBzOi8vYXBpLnRoZWNhdGFwaS5jb20vdjEvaW1hZ2VzYFxyXG5cclxuY29uc3QgQXV0b2NvbXBsZXRlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtmaWx0ZXJlZCwgc2V0RmlsdGVyZWRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpc1Nob3csIHNldElzU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2F0cywgc2V0Q2F0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2ZpbmQsIHNldEZpbmRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtyZWZpbWcsIHNldFJlZmltZ10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbbmFtZUNhdCwgc2V0TmFtZUNhdF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbdGVtcGVyYW1lbnQsIHNldFRlbXBlcmFtZW50XSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtvcmlnaW4sIHNldE9yaWdpbl0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtsaWZlX3NwYW4sIHNldExpZmVfc3Bhbl0gPSB1c2VTdGF0ZSgnJylcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRDYXRzKClcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGdldEltYWdlID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBsZXQgaW1wID0gYXdhaXQgYXhpb3MuZ2V0KGAke2ltZ1VSTH0vJHtpZH1gKVxyXG4gICAgc2V0SW1hZ2UoaW1wLmRhdGEpXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRDYXRzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IGNhdCA9IGF3YWl0IGF4aW9zLmdldChVUkwpXHJcbiAgICBzZXRDYXRzKGNhdC5kYXRhKVxyXG5cclxuICB9XHJcblxyXG4gIGNvbnN0IHNlYXJjaCA9IGFzeW5jIChuYW1lKSA9PiB7XHJcblxyXG4gICAgY2F0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChuYW1lID09PSBpdGVtLm5hbWUpIHtcclxuICAgICAgICBzZXRSZWZpbWcoaXRlbS5yZWZlcmVuY2VfaW1hZ2VfaWQpXHJcbiAgICAgICAgc2V0TmFtZUNhdChpdGVtLm5hbWUpXHJcbiAgICAgICAgc2V0VGVtcGVyYW1lbnQoaXRlbS50ZW1wZXJhbWVudClcclxuICAgICAgICBzZXRPcmlnaW4oaXRlbS5vcmlnaW4pXHJcbiAgICAgICAgc2V0RGVzY3JpcHRpb24oaXRlbS5kZXNjcmlwdGlvbilcclxuICAgICAgICBzZXRMaWZlX3NwYW4oaXRlbS5saWZlX3NwYW4pXHJcbiAgICAgICAgZ2V0SW1hZ2UocmVmaW1nKVxyXG4gICAgICB9XHJcblxyXG4gICAgfSlcclxuXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IGUgPT4ge1xyXG4gICAgY29uc3QgeyBzdWdnZXN0aW9ucyB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBpbnB1dCA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcclxuICAgIGNvbnN0IG5ld0ZpbHRlcmVkU3VnZ2VzdGlvbnMgPSBzdWdnZXN0aW9ucy5maWx0ZXIoXHJcbiAgICAgIHN1Z2dlc3Rpb24gPT5cclxuICAgICAgICBzdWdnZXN0aW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihpbnB1dC50b0xvd2VyQ2FzZSgpKSA+IC0xXHJcbiAgICApO1xyXG4gICAgXHJcbiAgICBzZXRBY3RpdmUoMCk7XHJcbiAgICBzZXRGaWx0ZXJlZChuZXdGaWx0ZXJlZFN1Z2dlc3Rpb25zKTtcclxuICAgIHNldElzU2hvdyh0cnVlKTtcclxuICAgIHNldElucHV0KGUuY3VycmVudFRhcmdldC52YWx1ZSlcclxuICAgIHNldEZpbmQoZS50YWdldC52YWx1ZSlcclxuICAgIFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2sgPSBlID0+IHtcclxuICAgIHNldEFjdGl2ZSgwKTtcclxuICAgIHNldEZpbHRlcmVkKFtdKTtcclxuICAgIHNldElzU2hvdyhmYWxzZSk7XHJcbiAgICBzZXRJbnB1dChlLmN1cnJlbnRUYXJnZXQuaW5uZXJUZXh0KVxyXG4gICAgXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25LZXlEb3duID0gZSA9PiB7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykgeyAvLyBlbnRlciBrZXlcclxuICAgICAgc2V0QWN0aXZlKDApO1xyXG4gICAgICBzZXRJc1Nob3coZmFsc2UpO1xyXG4gICAgICBzZXRJbnB1dChmaWx0ZXJlZFthY3RpdmVdKVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzOCkgeyAvLyB1cCBhcnJvd1xyXG4gICAgICByZXR1cm4gKGFjdGl2ZSA9PT0gMCkgPyBudWxsIDogc2V0QWN0aXZlKGFjdGl2ZSAtIDEpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZS5rZXlDb2RlID09PSA0MCkgeyAvLyBkb3duIGFycm93XHJcbiAgICAgIHJldHVybiAoYWN0aXZlIC0gMSA9PT0gZmlsdGVyZWQubGVuZ3RoKSA/IG51bGwgOiBzZXRBY3RpdmUoYWN0aXZlICsgMSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyQXV0b2NvbXBsZXRlID0gKCkgPT4ge1xyXG4gICAgaWYgKGlzU2hvdyAmJiBpbnB1dCkge1xyXG4gICAgICBpZiAoZmlsdGVyZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJhdXRvY29tcGxldGVcIj5cclxuICAgICAgICAgICAge2ZpbHRlcmVkLm1hcCgoc3VnZ2VzdGlvbiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICBsZXQgY2xhc3NOYW1lO1xyXG4gICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcImFjdGl2ZVwiO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBrZXk9e3N1Z2dlc3Rpb259IG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICB7c3VnZ2VzdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm8tYXV0b2NvbXBsZXRlXCI+XHJcbiAgICAgICAgICAgIDxlbT5Ob3QgZm91bmQ8L2VtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDw+PC8+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxpbWcgc3JjPXtpbWFnZS51cmx9IHdpZHRoPVwiMzAwXCIgaGVpZ2h0PVwiMzAwXCIgLz5cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgbmFtZToge25hbWVDYXR9XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIHRlbXBlcmFtZW50OiB7dGVtcGVyYW1lbnR9XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIG9yaWdpbjoge29yaWdpbn1cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgZGVzY3JpcHRpb246IHtkZXNjcmlwdGlvbn1cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgbGlmZSBzcGFuOiB7bGlmZV9zcGFufVxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAgIEZpbmQ6XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgb25LZXlEb3duPXtvbktleURvd259XHJcbiAgICAgICAgdmFsdWU9e2lucHV0fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgICB7LyogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRGaW5kKGUudGFyZ2V0LnZhbHVlKX0gLz4gKi99XHJcbiAgICAgIFxyXG4gICAgICB7cmVuZGVyQXV0b2NvbXBsZXRlKCl9XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2VhcmNoKGZpbmQpfT5GaW5kITwvYnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0b2NvbXBsZXRlOyJdLCJzb3VyY2VSb290IjoiIn0=