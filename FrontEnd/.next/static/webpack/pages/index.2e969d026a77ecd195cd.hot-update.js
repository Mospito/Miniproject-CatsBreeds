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

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: image.url,
      width: "300",
      height: "300"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }, _this), "name: ", nameCat, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, _this), "temperament: ", temperament, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, _this), "origin: ", origin, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }, _this), "description: ", description, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }, _this), "life span: ", life_span, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }, _this), "Find:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      onChange: onChange,
      onKeyDown: onKeyDown,
      value: input
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      value: input,
      onClick: function onClick() {
        return search(input);
      },
      children: "Find!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }, _this), renderAutocomplete()]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRvY29tcGxldGUuanMiXSwibmFtZXMiOlsiVVJMIiwiaW1nVVJMIiwiQXV0b2NvbXBsZXRlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImZpbHRlcmVkIiwic2V0RmlsdGVyZWQiLCJpc1Nob3ciLCJzZXRJc1Nob3ciLCJpbnB1dCIsInNldElucHV0IiwiY2F0cyIsInNldENhdHMiLCJpbWFnZSIsInNldEltYWdlIiwiZmluZCIsInNldEZpbmQiLCJyZWZpbWciLCJzZXRSZWZpbWciLCJuYW1lQ2F0Iiwic2V0TmFtZUNhdCIsInRlbXBlcmFtZW50Iiwic2V0VGVtcGVyYW1lbnQiLCJvcmlnaW4iLCJzZXRPcmlnaW4iLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwibGlmZV9zcGFuIiwic2V0TGlmZV9zcGFuIiwidXNlRWZmZWN0IiwiZ2V0Q2F0cyIsImdldEltYWdlIiwiaWQiLCJheGlvcyIsImdldCIsImltcCIsImRhdGEiLCJjYXQiLCJzZWFyY2giLCJuYW1lIiwibWFwIiwiaXRlbSIsImluZGV4IiwicmVmZXJlbmNlX2ltYWdlX2lkIiwib25DaGFuZ2UiLCJlIiwic3VnZ2VzdGlvbnMiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJuZXdGaWx0ZXJlZFN1Z2dlc3Rpb25zIiwiZmlsdGVyIiwic3VnZ2VzdGlvbiIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsIm9uQ2xpY2siLCJpbm5lclRleHQiLCJvbktleURvd24iLCJrZXlDb2RlIiwibGVuZ3RoIiwicmVuZGVyQXV0b2NvbXBsZXRlIiwiY2xhc3NOYW1lIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxHQUFHLHdDQUFUO0FBQ0EsSUFBTUMsTUFBTSx3Q0FBWjs7QUFFQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFD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QWtKU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmU5NjlkMDI2YTc3ZWNkMTk1Y2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmNvbnN0IFVSTCA9IGBodHRwczovL2FwaS50aGVjYXRhcGkuY29tL3YxL2JyZWVkc2BcclxuY29uc3QgaW1nVVJMID0gYGh0dHBzOi8vYXBpLnRoZWNhdGFwaS5jb20vdjEvaW1hZ2VzYFxyXG5cclxuY29uc3QgQXV0b2NvbXBsZXRlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtmaWx0ZXJlZCwgc2V0RmlsdGVyZWRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpc1Nob3csIHNldElzU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2F0cywgc2V0Q2F0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2ZpbmQsIHNldEZpbmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3JlZmltZywgc2V0UmVmaW1nXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtuYW1lQ2F0LCBzZXROYW1lQ2F0XSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFt0ZW1wZXJhbWVudCwgc2V0VGVtcGVyYW1lbnRdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW29yaWdpbiwgc2V0T3JpZ2luXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2xpZmVfc3Bhbiwgc2V0TGlmZV9zcGFuXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldENhdHMoKVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0SW1hZ2UgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIGxldCBpbXAgPSBhd2FpdCBheGlvcy5nZXQoYCR7aW1nVVJMfS8ke2lkfWApXHJcbiAgICBzZXRJbWFnZShpbXAuZGF0YSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldENhdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgY2F0ID0gYXdhaXQgYXhpb3MuZ2V0KFVSTClcclxuICAgIHNldENhdHMoY2F0LmRhdGEpXHJcblxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2VhcmNoID0gYXN5bmMgKG5hbWUpID0+IHtcclxuXHJcbiAgICBjYXRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKG5hbWUgPT09IGl0ZW0ubmFtZSkge1xyXG4gICAgICAgIHNldFJlZmltZyhpdGVtLnJlZmVyZW5jZV9pbWFnZV9pZClcclxuICAgICAgICBnZXRJbWFnZShyZWZpbWcpXHJcbiAgICAgICAgc2V0TmFtZUNhdChpdGVtLm5hbWUpXHJcbiAgICAgICAgc2V0VGVtcGVyYW1lbnQoaXRlbS50ZW1wZXJhbWVudClcclxuICAgICAgICBzZXRPcmlnaW4oaXRlbS5vcmlnaW4pXHJcbiAgICAgICAgc2V0RGVzY3JpcHRpb24oaXRlbS5kZXNjcmlwdGlvbilcclxuICAgICAgICBzZXRMaWZlX3NwYW4oaXRlbS5saWZlX3NwYW4pXHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfSlcclxuXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IGUgPT4ge1xyXG4gICAgY29uc3QgeyBzdWdnZXN0aW9ucyB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBpbnB1dCA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcclxuICAgIGNvbnN0IG5ld0ZpbHRlcmVkU3VnZ2VzdGlvbnMgPSBzdWdnZXN0aW9ucy5maWx0ZXIoXHJcbiAgICAgIHN1Z2dlc3Rpb24gPT5cclxuICAgICAgICBzdWdnZXN0aW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihpbnB1dC50b0xvd2VyQ2FzZSgpKSA+IC0xXHJcbiAgICApO1xyXG5cclxuICAgIHNldEFjdGl2ZSgwKTtcclxuICAgIHNldEZpbHRlcmVkKG5ld0ZpbHRlcmVkU3VnZ2VzdGlvbnMpO1xyXG4gICAgc2V0SXNTaG93KHRydWUpO1xyXG4gICAgc2V0SW5wdXQoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKVxyXG4gICAgc2V0RmluZChpbnB1dClcclxuXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DbGljayA9IGUgPT4ge1xyXG4gICAgc2V0QWN0aXZlKDApO1xyXG4gICAgc2V0RmlsdGVyZWQoW10pO1xyXG4gICAgc2V0SXNTaG93KGZhbHNlKTtcclxuICAgIHNldElucHV0KGUuY3VycmVudFRhcmdldC5pbm5lclRleHQpXHJcblxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uS2V5RG93biA9IGUgPT4ge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHsgLy8gZW50ZXIga2V5XHJcbiAgICAgIHNldEFjdGl2ZSgwKTtcclxuICAgICAgc2V0SXNTaG93KGZhbHNlKTtcclxuICAgICAgc2V0SW5wdXQoZmlsdGVyZWRbYWN0aXZlXSlcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzgpIHsgLy8gdXAgYXJyb3dcclxuICAgICAgcmV0dXJuIChhY3RpdmUgPT09IDApID8gbnVsbCA6IHNldEFjdGl2ZShhY3RpdmUgLSAxKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gNDApIHsgLy8gZG93biBhcnJvd1xyXG4gICAgICByZXR1cm4gKGFjdGl2ZSAtIDEgPT09IGZpbHRlcmVkLmxlbmd0aCkgPyBudWxsIDogc2V0QWN0aXZlKGFjdGl2ZSArIDEpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckF1dG9jb21wbGV0ZSA9ICgpID0+IHtcclxuICAgIGlmIChpc1Nob3cgJiYgaW5wdXQpIHtcclxuICAgICAgaWYgKGZpbHRlcmVkLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYXV0b2NvbXBsZXRlXCI+XHJcbiAgICAgICAgICAgIHtmaWx0ZXJlZC5tYXAoKHN1Z2dlc3Rpb24sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IGNsYXNzTmFtZTtcclxuICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IGFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJhY3RpdmVcIjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZX0ga2V5PXtzdWdnZXN0aW9ufSBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAge3N1Z2dlc3Rpb259XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vLWF1dG9jb21wbGV0ZVwiPlxyXG4gICAgICAgICAgICA8ZW0+Tm90IGZvdW5kPC9lbT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiA8PjwvPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aW1nIHNyYz17aW1hZ2UudXJsfSB3aWR0aD1cIjMwMFwiIGhlaWdodD1cIjMwMFwiIC8+XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIG5hbWU6IHtuYW1lQ2F0fVxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAgICB0ZW1wZXJhbWVudDoge3RlbXBlcmFtZW50fVxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAgICBvcmlnaW46IHtvcmlnaW59XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiB7ZGVzY3JpcHRpb259XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIGxpZmUgc3Bhbjoge2xpZmVfc3Bhbn1cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICBGaW5kOlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgIG9uS2V5RG93bj17b25LZXlEb3dufVxyXG4gICAgICAgIHZhbHVlPXtpbnB1dH1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxidXR0b24gdmFsdWU9e2lucHV0fSBvbkNsaWNrPXsoKSA9PiBzZWFyY2goaW5wdXQpfT5GaW5kITwvYnV0dG9uPlxyXG5cclxuICAgICAge3JlbmRlckF1dG9jb21wbGV0ZSgpfVxyXG5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dG9jb21wbGV0ZTsiXSwic291cmNlUm9vdCI6IiJ9