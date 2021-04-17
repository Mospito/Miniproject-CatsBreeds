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
/* harmony import */ var _components_Autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Autocomplete */ "./components/Autocomplete.js");




var _jsxFileName = "D:\\001Study\\Year3Therm2\\240-311 Distributed\\MiniProJect\\FrontEnd\\mini-project\\pages\\index.js",
    _s = $RefreshSig$();






var URL = "https://api.thecatapi.com/v1/breeds";
var imgURL = "https://api.thecatapi.com/v1/images";
var tmp;
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

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      auto = _useState10[0],
      setAuto = _useState10[1];

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

  var scandName = /*#__PURE__*/function () {
    var _ref4 = Object(D_001Study_Year3Therm2_240_311_Distributed_MiniProJect_FrontEnd_mini_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_001Study_Year3Therm2_240_311_Distributed_MiniProJect_FrontEnd_mini_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
      return D_001Study_Year3Therm2_240_311_Distributed_MiniProJect_FrontEnd_mini_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function scandName() {
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    children: ["Hello img: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: image.url,
      width: "300",
      height: "300"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 12
    }, this), printCats(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: image.url,
        width: "300",
        height: "300"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this), "name: ", nameCat, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this), "temperament: ", temperament, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this), "origin: ", origin, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this), "description: ", description, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this), "life span: ", life_span, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this), "Find: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        onChange: function onChange(e) {
          return setFind(e.target.value);
        },
        autoComplete: "name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 15
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function onClick() {
          return search(find);
        },
        children: "Find!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [scandName(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Autocomplete__WEBPACK_IMPORTED_MODULE_7__["default"], {
        suggestions: []
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 5
  }, this);
}

_s(Home, "JhhGY+5DSLA7DT+p6Mzpt6+e+DY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiVVJMIiwiaW1nVVJMIiwidG1wIiwiSG9tZSIsInVzZVN0YXRlIiwiY2F0cyIsInNldENhdHMiLCJpbWFnZSIsInNldEltYWdlIiwiZmluZCIsInNldEZpbmQiLCJyZWZpbWciLCJzZXRSZWZpbWciLCJuYW1lQ2F0Iiwic2V0TmFtZUNhdCIsInRlbXBlcmFtZW50Iiwic2V0VGVtcGVyYW1lbnQiLCJvcmlnaW4iLCJzZXRPcmlnaW4iLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwibGlmZV9zcGFuIiwic2V0TGlmZV9zcGFuIiwiYXV0byIsInNldEF1dG8iLCJ1c2VFZmZlY3QiLCJnZXRDYXRzIiwiZ2V0SW1hZ2UiLCJpZCIsImF4aW9zIiwiZ2V0IiwiaW1wIiwiZGF0YSIsImNhdCIsInNlYXJjaCIsIm5hbWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJyZWZlcmVuY2VfaW1hZ2VfaWQiLCJwcmludENhdHMiLCJzY2FuZE5hbWUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJ1cmwiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxHQUFHLHdDQUFUO0FBQ0EsSUFBTUMsTUFBTSx3Q0FBWjtBQUNBLElBQUlDLEdBQUo7QUFFZSxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBRUxDLHNEQUFRLENBQUMsRUFBRCxDQUZIO0FBQUEsTUFFdEJDLElBRnNCO0FBQUEsTUFFaEJDLE9BRmdCOztBQUFBLG1CQUdIRixzREFBUSxDQUFDLEVBQUQsQ0FITDtBQUFBLE1BR3RCRyxLQUhzQjtBQUFBLE1BR2ZDLFFBSGU7O0FBQUEsbUJBSUxKLHNEQUFRLENBQUMsRUFBRCxDQUpIO0FBQUEsTUFJdEJLLElBSnNCO0FBQUEsTUFJaEJDLE9B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QztBQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYlIsZUFjRTtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFNYixNQUFNLENBQUN6QixJQUFELENBQVo7QUFBQSxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBc0JFO0FBQUEsaUJBRUdnQyxTQUFTLEVBRlosZUFHRSxxRUFBQyxnRUFBRDtBQUNFLG1CQUFXLEVBQUU7QUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0NEOztHQW5HdUJ0QyxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE5ZGFkZjc5ZWVjOWJjODgyMGE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgQXV0b2NvbXBsZXRlIGZyb20gJy4uL2NvbXBvbmVudHMvQXV0b2NvbXBsZXRlJ1xuXG5jb25zdCBVUkwgPSBgaHR0cHM6Ly9hcGkudGhlY2F0YXBpLmNvbS92MS9icmVlZHNgXG5jb25zdCBpbWdVUkwgPSBgaHR0cHM6Ly9hcGkudGhlY2F0YXBpLmNvbS92MS9pbWFnZXNgXG5sZXQgdG1wXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW2NhdHMsIHNldENhdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2ZpbmQsIHNldEZpbmRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcmVmaW1nLCBzZXRSZWZpbWddID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtuYW1lQ2F0LCBzZXROYW1lQ2F0XSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbdGVtcGVyYW1lbnQsIHNldFRlbXBlcmFtZW50XSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbb3JpZ2luLCBzZXRPcmlnaW5dID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtsaWZlX3NwYW4sIHNldExpZmVfc3Bhbl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2F1dG8sIHNldEF1dG9dID0gdXNlU3RhdGUoW10pXG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldENhdHMoKVxuICB9LCBbXSk7XG5cbiAgY29uc3QgZ2V0SW1hZ2UgPSBhc3luYyAoaWQpID0+IHtcbiAgICBsZXQgaW1wID0gYXdhaXQgYXhpb3MuZ2V0KGAke2ltZ1VSTH0vJHtpZH1gKVxuICAgIHNldEltYWdlKGltcC5kYXRhKVxuICB9XG5cbiAgY29uc3QgZ2V0Q2F0cyA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgY2F0ID0gYXdhaXQgYXhpb3MuZ2V0KFVSTClcbiAgICBzZXRDYXRzKGNhdC5kYXRhKVxuICB9XG5cbiAgY29uc3Qgc2VhcmNoID0gYXN5bmMgKG5hbWUpID0+IHtcblxuICAgIGNhdHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKG5hbWUgPT09IGl0ZW0ubmFtZSkge1xuICAgICAgICBzZXRSZWZpbWcoaXRlbS5yZWZlcmVuY2VfaW1hZ2VfaWQpXG4gICAgICAgIHNldE5hbWVDYXQoaXRlbS5uYW1lKVxuICAgICAgICBzZXRUZW1wZXJhbWVudChpdGVtLnRlbXBlcmFtZW50KVxuICAgICAgICBzZXRPcmlnaW4oaXRlbS5vcmlnaW4pXG4gICAgICAgIHNldERlc2NyaXB0aW9uKGl0ZW0uZGVzY3JpcHRpb24pXG4gICAgICAgIHNldExpZmVfc3BhbihpdGVtLmxpZmVfc3BhbilcbiAgICAgICAgZ2V0SW1hZ2UocmVmaW1nKVxuICAgICAgfVxuXG4gICAgfSlcblxuICB9XG5cbiAgY29uc3QgcHJpbnRDYXRzID0gKCkgPT4ge1xuICAgIHJldHVybiAoY2F0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7LyogVGVzdDoge2l0ZW0ubmFtZX0gfFxuICAgICAgICB3ZWlnaHQ6IHtpdGVtLndlaWdodC5tZXRyaWN9XG4gICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlLnVybH0gYWx0PVwiXCIgLz4gKi99XG4gICAgICAgIHsvKiB7KGl0ZW0ubmFtZSA9PT0gXCJBYnlzc2luaWFuXCIpPzxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4yLnRoZWNhdGFwaS5jb20vaW1hZ2VzLzBYWXZSZDdvRC5qcGdcIi8+OlwibnVsbFwifSAqL31cbiAgICAgICAgQnJlZWQ6IHtpdGVtLm5hbWV9XG5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnZXRJbWFnZShpdGVtLnJlZmVyZW5jZV9pbWFnZV9pZCl9PkdldDwvYnV0dG9uPlxuXG5cbiAgICAgIDwvZGl2PlxuICAgICkpKVxuICB9XG5cbiAgY29uc3Qgc2NhbmROYW1lID0gYXN5bmMgKCkgPT4ge1xuICAgXG4gXG4gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIEhlbGxvXG4gICAgICBpbWc6IDxpbWcgc3JjPXtpbWFnZS51cmx9IHdpZHRoPVwiMzAwXCIgaGVpZ2h0PVwiMzAwXCIgLz5cbiAgICAgIHtwcmludENhdHMoKX1cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBzcmM9e2ltYWdlLnVybH0gd2lkdGg9XCIzMDBcIiBoZWlnaHQ9XCIzMDBcIiAvPlxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgbmFtZToge25hbWVDYXR9XG4gICAgICAgIDxicj48L2JyPlxuICAgICAgICB0ZW1wZXJhbWVudDoge3RlbXBlcmFtZW50fVxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgb3JpZ2luOiB7b3JpZ2lufVxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgZGVzY3JpcHRpb246IHtkZXNjcmlwdGlvbn1cbiAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgIGxpZmUgc3Bhbjoge2xpZmVfc3Bhbn1cbiAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgIEZpbmQ6IDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RmluZChlLnRhcmdldC52YWx1ZSl9IGF1dG9Db21wbGV0ZT1cIm5hbWVcIiAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNlYXJjaChmaW5kKX0+RmluZCE8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuXG4gICAgICAgIHtzY2FuZE5hbWUoKX1cbiAgICAgICAgPEF1dG9jb21wbGV0ZVxuICAgICAgICAgIHN1Z2dlc3Rpb25zPXtbXX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9