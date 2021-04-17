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
              lineNumber: 101,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, _this);
      } else {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "no-autocomplete",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
            children: "Not found"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
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
      lineNumber: 121,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }, _this), "name: ", nameCat, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, _this), "temperament: ", temperament, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }, _this), "origin: ", origin, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, _this), "description: ", description, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, _this), "life span: ", life_span, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }, _this), "Find:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      onChange: onChange,
      onKeyDown: onKeyDown,
      value: input
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }, _this), renderAutocomplete(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: function onClick() {
        return search(find);
      },
      children: "Find!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRvY29tcGxldGUuanMiXSwibmFtZXMiOlsiVVJMIiwiaW1nVVJMIiwiQXV0b2NvbXBsZXRlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImZpbHRlcmVkIiwic2V0RmlsdGVyZWQiLCJpc1Nob3ciLCJzZXRJc1Nob3ciLCJpbnB1dCIsInNldElucHV0IiwiY2F0cyIsInNldENhdHMiLCJpbWFnZSIsInNldEltYWdlIiwiZmluZCIsInNldEZpbmQiLCJyZWZpbWciLCJzZXRSZWZpbWciLCJuYW1lQ2F0Iiwic2V0TmFtZUNhdCIsInRlbXBlcmFtZW50Iiwic2V0VGVtcGVyYW1lbnQiLCJvcmlnaW4iLCJzZXRPcmlnaW4iLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwibGlmZV9zcGFuIiwic2V0TGlmZV9zcGFuIiwidXNlRWZmZWN0IiwiZ2V0Q2F0cyIsImdldEltYWdlIiwiaWQiLCJheGlvcyIsImdldCIsImltcCIsImRhdGEiLCJjYXQiLCJzZWFyY2giLCJuYW1lIiwibWFwIiwiaXRlbSIsImluZGV4IiwicmVmZXJlbmNlX2ltYWdlX2lkIiwib25DaGFuZ2UiLCJlIiwic3VnZ2VzdGlvbnMiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJuZXdGaWx0ZXJlZFN1Z2dlc3Rpb25zIiwiZmlsdGVyIiwic3VnZ2VzdGlvbiIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsIm9uQ2xpY2siLCJpbm5lclRleHQiLCJvbktleURvd24iLCJrZXlDb2RlIiwibGVuZ3RoIiwicmVuZGVyQXV0b2NvbXBsZXRlIiwiY2xhc3NOYW1lIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxHQUFHLHdDQUFUO0FBQ0EsSUFBTUMsTUFBTSx3Q0FBWjs7QUFFQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFD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dGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45MzE0ZWRmNjdmNWI1OGU4Yjk0NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuY29uc3QgVVJMID0gYGh0dHBzOi8vYXBpLnRoZWNhdGFwaS5jb20vdjEvYnJlZWRzYFxyXG5jb25zdCBpbWdVUkwgPSBgaHR0cHM6Ly9hcGkudGhlY2F0YXBpLmNvbS92MS9pbWFnZXNgXHJcblxyXG5jb25zdCBBdXRvY29tcGxldGUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2ZpbHRlcmVkLCBzZXRGaWx0ZXJlZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lzU2hvdywgc2V0SXNTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjYXRzLCBzZXRDYXRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbZmluZCwgc2V0RmluZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3JlZmltZywgc2V0UmVmaW1nXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtuYW1lQ2F0LCBzZXROYW1lQ2F0XSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFt0ZW1wZXJhbWVudCwgc2V0VGVtcGVyYW1lbnRdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW29yaWdpbiwgc2V0T3JpZ2luXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2xpZmVfc3Bhbiwgc2V0TGlmZV9zcGFuXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldENhdHMoKVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0SW1hZ2UgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIGxldCBpbXAgPSBhd2FpdCBheGlvcy5nZXQoYCR7aW1nVVJMfS8ke2lkfWApXHJcbiAgICBzZXRJbWFnZShpbXAuZGF0YSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldENhdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgY2F0ID0gYXdhaXQgYXhpb3MuZ2V0KFVSTClcclxuICAgIHNldENhdHMoY2F0LmRhdGEpXHJcblxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2VhcmNoID0gYXN5bmMgKG5hbWUpID0+IHtcclxuXHJcbiAgICBjYXRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKG5hbWUgPT09IGl0ZW0ubmFtZSkge1xyXG4gICAgICAgIHNldFJlZmltZyhpdGVtLnJlZmVyZW5jZV9pbWFnZV9pZClcclxuICAgICAgICBzZXROYW1lQ2F0KGl0ZW0ubmFtZSlcclxuICAgICAgICBzZXRUZW1wZXJhbWVudChpdGVtLnRlbXBlcmFtZW50KVxyXG4gICAgICAgIHNldE9yaWdpbihpdGVtLm9yaWdpbilcclxuICAgICAgICBzZXREZXNjcmlwdGlvbihpdGVtLmRlc2NyaXB0aW9uKVxyXG4gICAgICAgIHNldExpZmVfc3BhbihpdGVtLmxpZmVfc3BhbilcclxuICAgICAgICBnZXRJbWFnZShyZWZpbWcpXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KVxyXG5cclxuICB9XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gZSA9PiB7XHJcbiAgICBjb25zdCB7IHN1Z2dlc3Rpb25zIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IGlucHV0ID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xyXG4gICAgY29uc3QgbmV3RmlsdGVyZWRTdWdnZXN0aW9ucyA9IHN1Z2dlc3Rpb25zLmZpbHRlcihcclxuICAgICAgc3VnZ2VzdGlvbiA9PlxyXG4gICAgICAgIHN1Z2dlc3Rpb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKGlucHV0LnRvTG93ZXJDYXNlKCkpID4gLTFcclxuICAgICk7XHJcbiAgICBzZXRBY3RpdmUoMCk7XHJcbiAgICBzZXRGaWx0ZXJlZChuZXdGaWx0ZXJlZFN1Z2dlc3Rpb25zKTtcclxuICAgIHNldElzU2hvdyh0cnVlKTtcclxuICAgIHNldElucHV0KGUuY3VycmVudFRhcmdldC52YWx1ZSlcclxuICAgIHNldEZpbmQoaW5wdXQpXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DbGljayA9IGUgPT4ge1xyXG4gICAgc2V0QWN0aXZlKDApO1xyXG4gICAgc2V0RmlsdGVyZWQoW10pO1xyXG4gICAgc2V0SXNTaG93KGZhbHNlKTtcclxuICAgIHNldElucHV0KGUuY3VycmVudFRhcmdldC5pbm5lclRleHQpXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25LZXlEb3duID0gZSA9PiB7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykgeyAvLyBlbnRlciBrZXlcclxuICAgICAgc2V0QWN0aXZlKDApO1xyXG4gICAgICBzZXRJc1Nob3coZmFsc2UpO1xyXG4gICAgICBzZXRJbnB1dChmaWx0ZXJlZFthY3RpdmVdKVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzOCkgeyAvLyB1cCBhcnJvd1xyXG4gICAgICByZXR1cm4gKGFjdGl2ZSA9PT0gMCkgPyBudWxsIDogc2V0QWN0aXZlKGFjdGl2ZSAtIDEpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZS5rZXlDb2RlID09PSA0MCkgeyAvLyBkb3duIGFycm93XHJcbiAgICAgIHJldHVybiAoYWN0aXZlIC0gMSA9PT0gZmlsdGVyZWQubGVuZ3RoKSA/IG51bGwgOiBzZXRBY3RpdmUoYWN0aXZlICsgMSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyQXV0b2NvbXBsZXRlID0gKCkgPT4ge1xyXG4gICAgaWYgKGlzU2hvdyAmJiBpbnB1dCkge1xyXG4gICAgICBpZiAoZmlsdGVyZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJhdXRvY29tcGxldGVcIj5cclxuICAgICAgICAgICAge2ZpbHRlcmVkLm1hcCgoc3VnZ2VzdGlvbiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICBsZXQgY2xhc3NOYW1lO1xyXG4gICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcImFjdGl2ZVwiO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBrZXk9e3N1Z2dlc3Rpb259IG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICB7c3VnZ2VzdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm8tYXV0b2NvbXBsZXRlXCI+XHJcbiAgICAgICAgICAgIDxlbT5Ob3QgZm91bmQ8L2VtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDw+PC8+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxpbWcgc3JjPXtpbWFnZS51cmx9IHdpZHRoPVwiMzAwXCIgaGVpZ2h0PVwiMzAwXCIgLz5cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgbmFtZToge25hbWVDYXR9XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIHRlbXBlcmFtZW50OiB7dGVtcGVyYW1lbnR9XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIG9yaWdpbjoge29yaWdpbn1cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgZGVzY3JpcHRpb246IHtkZXNjcmlwdGlvbn1cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgbGlmZSBzcGFuOiB7bGlmZV9zcGFufVxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAgIEZpbmQ6XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgb25LZXlEb3duPXtvbktleURvd259XHJcbiAgICAgICAgdmFsdWU9e2lucHV0fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgICB7LyogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRGaW5kKGUudGFyZ2V0LnZhbHVlKX0gLz4gKi99XHJcbiAgICAgIFxyXG4gICAgICB7cmVuZGVyQXV0b2NvbXBsZXRlKCl9XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2VhcmNoKGZpbmQpfT5GaW5kITwvYnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0b2NvbXBsZXRlOyJdLCJzb3VyY2VSb290IjoiIn0=