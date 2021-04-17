webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_001Study_Year3Therm2_240_311_Distributed_MiniProJect_FrontEnd_mini_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_001Study_Year3Therm2_240_311_Distributed_MiniProJect_FrontEnd_mini_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_001Study_Year3Therm2_240_311_Distributed_MiniProJect_FrontEnd_mini_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_001Study_Year3Therm2_240_311_Distributed_MiniProJect_FrontEnd_mini_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "D:\\001Study\\Year3Therm2\\240-311 Distributed\\MiniProJect\\FrontEnd\\mini-project\\pages\\index.js",
    _s = $RefreshSig$();





var URL = "https://api.thecatapi.com/v1/breeds";
var imgURL = "https://api.thecatapi.com/v1/images";
function Home() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      cats = _useState[0],
      setCats = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({}),
      image = _useState2[0],
      setImage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      find = _useState3[0],
      setFind = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      refimg = _useState4[0],
      setRefimg = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      nameCat = _useState5[0],
      setNameCat = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      temperament = _useState6[0],
      setTemperament = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      origin = _useState7[0],
      setOrigin = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      description = _useState8[0],
      setDescription = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      life_span = _useState9[0],
      setLife_span = _useState9[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
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
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("".concat(imgURL, "/").concat(id));

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
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(URL);

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

  var printCats = function printCats() {
    return cats.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: ["Breed: ", item.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: function onClick() {
            return getImage(item.reference_image_id);
          },
          children: "Get"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 7
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    children: ["Hello img: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: image.url,
      width: "300",
      height: "300"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 12
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: image.url,
        width: "300",
        height: "300"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this), "name: ", nameCat, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 10
      }, this), "temperament: ", temperament, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this), "origin: ", origin, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this), "description: ", description, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this), "life span: ", life_span, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, this), "Find: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        onChange: function onChange(e) {
          return setFind(e.target.value);
        },
        autoComplete: "name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 15
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function onClick() {
          return search(find);
        },
        children: "Find!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 5
  }, this);
}

_s(Home, "SrPYACs/zfuyFbXC7MXuP7eJFjI=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiVVJMIiwiaW1nVVJMIiwiSG9tZSIsInVzZVN0YXRlIiwiY2F0cyIsInNldENhdHMiLCJpbWFnZSIsInNldEltYWdlIiwiZmluZCIsInNldEZpbmQiLCJyZWZpbWciLCJzZXRSZWZpbWciLCJuYW1lQ2F0Iiwic2V0TmFtZUNhdCIsInRlbXBlcmFtZW50Iiwic2V0VGVtcGVyYW1lbnQiLCJvcmlnaW4iLCJzZXRPcmlnaW4iLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwibGlmZV9zcGFuIiwic2V0TGlmZV9zcGFuIiwidXNlRWZmZWN0IiwiZ2V0Q2F0cyIsImdldEltYWdlIiwiaWQiLCJheGlvcyIsImdldCIsImltcCIsImRhdGEiLCJjYXQiLCJzZWFyY2giLCJuYW1lIiwibWFwIiwiaXRlbSIsImluZGV4IiwicmVmZXJlbmNlX2ltYWdlX2lkIiwicHJpbnRDYXRzIiwic3R5bGVzIiwiY29udGFpbmVyIiwidXJsIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsR0FBRyx3Q0FBVDtBQUNBLElBQU1DLE1BQU0sd0NBQVo7QUFHZSxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBRUxDLHNEQUFRLENBQUMsRUFBRCxDQUZIO0FBQUEsTUFFdEJDLElBRnNCO0FBQUEsTUFFaEJDLE9BRmdCOztBQUFBLG1CQUdIRixzREFBUSxDQUFDLEVBQUQsQ0FITDtBQUFBLE1BR3RCRyxLQUhzQjtBQUFBLE1BR2ZDLFFBSGU7O0FBQUEsbUJBSUxKLHNEQUFRLENBQUMsRUFBRCxDQUpIO0FBQUEsTUFJdEJLLElBSnNCO0FBQUEsTUFJaEJDLE9BSmdCOztBQUFBLG1CQUtETixzREFBUSxDQUFDLEVBQUQsQ0FMUDtBQUFBLE1BS3RCTyxNQUxzQjtB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YjEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNvbnN0IFVSTCA9IGBodHRwczovL2FwaS50aGVjYXRhcGkuY29tL3YxL2JyZWVkc2BcbmNvbnN0IGltZ1VSTCA9IGBodHRwczovL2FwaS50aGVjYXRhcGkuY29tL3YxL2ltYWdlc2BcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFtjYXRzLCBzZXRDYXRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtmaW5kLCBzZXRGaW5kXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3JlZmltZywgc2V0UmVmaW1nXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbbmFtZUNhdCwgc2V0TmFtZUNhdF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3RlbXBlcmFtZW50LCBzZXRUZW1wZXJhbWVudF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW29yaWdpbiwgc2V0T3JpZ2luXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbbGlmZV9zcGFuLCBzZXRMaWZlX3NwYW5dID0gdXNlU3RhdGUoJycpXG4gIFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0Q2F0cygpXG4gIH0sIFtdKTtcblxuICBjb25zdCBnZXRJbWFnZSA9IGFzeW5jIChpZCkgPT4ge1xuICAgIGxldCBpbXAgPSBhd2FpdCBheGlvcy5nZXQoYCR7aW1nVVJMfS8ke2lkfWApXG4gICAgc2V0SW1hZ2UoaW1wLmRhdGEpXG4gIH1cblxuICBjb25zdCBnZXRDYXRzID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCBjYXQgPSBhd2FpdCBheGlvcy5nZXQoVVJMKVxuICAgIHNldENhdHMoY2F0LmRhdGEpXG4gIH1cblxuICBjb25zdCBzZWFyY2ggPSBhc3luYyAobmFtZSkgPT4ge1xuICAgIFxuICAgIGNhdHMubWFwKChpdGVtLGluZGV4KSA9PiB7XG4gICAgICBpZihuYW1lID09PSBpdGVtLm5hbWUpXG4gICAgICB7XG4gICAgICAgIHNldFJlZmltZyhpdGVtLnJlZmVyZW5jZV9pbWFnZV9pZClcbiAgICAgICAgc2V0TmFtZUNhdChpdGVtLm5hbWUpXG4gICAgICAgIHNldFRlbXBlcmFtZW50KGl0ZW0udGVtcGVyYW1lbnQpXG4gICAgICAgIHNldE9yaWdpbihpdGVtLm9yaWdpbilcbiAgICAgICAgc2V0RGVzY3JpcHRpb24oaXRlbS5kZXNjcmlwdGlvbilcbiAgICAgICAgc2V0TGlmZV9zcGFuKGl0ZW0ubGlmZV9zcGFuKVxuICAgICAgICBnZXRJbWFnZShyZWZpbWcpXG4gICAgICAgIFxuICAgICAgfVxuXG4gICAgfSlcbiAgIFxuICB9XG5cbiAgY29uc3QgcHJpbnRDYXRzID0gKCkgPT4ge1xuICAgIHJldHVybiAoY2F0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7LyogVGVzdDoge2l0ZW0ubmFtZX0gfFxuICAgICAgICB3ZWlnaHQ6IHtpdGVtLndlaWdodC5tZXRyaWN9XG4gICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlLnVybH0gYWx0PVwiXCIgLz4gKi99XG4gICAgICAgIHsvKiB7KGl0ZW0ubmFtZSA9PT0gXCJBYnlzc2luaWFuXCIpPzxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4yLnRoZWNhdGFwaS5jb20vaW1hZ2VzLzBYWXZSZDdvRC5qcGdcIi8+OlwibnVsbFwifSAqL31cbiAgICAgICAgQnJlZWQ6IHtpdGVtLm5hbWV9XG5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgKCkgPT4gZ2V0SW1hZ2UoaXRlbS5yZWZlcmVuY2VfaW1hZ2VfaWQpfT5HZXQ8L2J1dHRvbj5cblxuXG4gICAgICA8L2Rpdj5cbiAgICApKSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIEhlbGxvXG4gICAgICBpbWc6IDxpbWcgc3JjPXtpbWFnZS51cmx9IHdpZHRoPVwiMzAwXCIgaGVpZ2h0PVwiMzAwXCIvPlxuICAgICAgey8qIHtwcmludENhdHMoKX0gKi99XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbWcgc3JjPXtpbWFnZS51cmx9IHdpZHRoPVwiMzAwXCIgaGVpZ2h0PVwiMzAwXCIgLz5cbiAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgIG5hbWU6IHtuYW1lQ2F0fVxuICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgIHRlbXBlcmFtZW50OiB7dGVtcGVyYW1lbnR9XG4gICAgICAgIDxicj48L2JyPlxuICAgICAgICBvcmlnaW46IHtvcmlnaW59XG4gICAgICAgIDxicj48L2JyPlxuICAgICAgICBkZXNjcmlwdGlvbjoge2Rlc2NyaXB0aW9ufVxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgbGlmZSBzcGFuOiB7bGlmZV9zcGFufVxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgRmluZDogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2UgPXsgKGUpID0+IHNldEZpbmQoZS50YXJnZXQudmFsdWUpfSAgYXV0b0NvbXBsZXRlPVwibmFtZVwiLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID17KCkgPT4gc2VhcmNoKGZpbmQpfT5GaW5kITwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=