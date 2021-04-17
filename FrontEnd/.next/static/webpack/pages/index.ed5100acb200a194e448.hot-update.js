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

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({}),
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
          lineNumber: 66,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 7
      }, _this);
    });
  };

  var findCatsName = function findCatsName() {
    return cats.map(function (item) {
      setAuto(item.name);
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
      lineNumber: 85,
      columnNumber: 12
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: image.url,
        width: "300",
        height: "300"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this), "name: ", nameCat, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this), "temperament: ", temperament, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this), "origin: ", origin, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this), "description: ", description, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this), "life span: ", life_span, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, this), "Find: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        onChange: function onChange(e) {
          return setFind(e.target.value);
        },
        autoComplete: "name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 15
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function onClick() {
          return search(find);
        },
        children: "Find!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Autocomplete__WEBPACK_IMPORTED_MODULE_7__["default"], {
        suggestions: findCatsName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 5
  }, this);
}

_s(Home, "nlBuGZ55EglDNBvbp0aVSJsBo5E=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiVVJMIiwiaW1nVVJMIiwiSG9tZSIsInVzZVN0YXRlIiwiY2F0cyIsInNldENhdHMiLCJpbWFnZSIsInNldEltYWdlIiwiZmluZCIsInNldEZpbmQiLCJyZWZpbWciLCJzZXRSZWZpbWciLCJuYW1lQ2F0Iiwic2V0TmFtZUNhdCIsInRlbXBlcmFtZW50Iiwic2V0VGVtcGVyYW1lbnQiLCJvcmlnaW4iLCJzZXRPcmlnaW4iLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwibGlmZV9zcGFuIiwic2V0TGlmZV9zcGFuIiwiYXV0byIsInNldEF1dG8iLCJ1c2VFZmZlY3QiLCJnZXRDYXRzIiwiZ2V0SW1hZ2UiLCJpZCIsImF4aW9zIiwiZ2V0IiwiaW1wIiwiZGF0YSIsImNhdCIsInNlYXJjaCIsIm5hbWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJyZWZlcmVuY2VfaW1hZ2VfaWQiLCJwcmludENhdHMiLCJmaW5kQ2F0c05hbWUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJ1cmwiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxHQUFHLHdDQUFUO0FBQ0EsSUFBTUMsTUFBTSx3Q0FBWjtBQUdlLFNBQVNDLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFFTEMsc0RBQVEsQ0FBQyxFQUFELENBRkg7QUFBQSxNQUV0QkMsSUFGc0I7QUFBQSxNQUVoQkMsT0FGZ0I7O0FBQUEsbUJBR0hGLHNEQUFRLENBQUMsRUFBRCxDQUhMO0FBQUEsTUFHdEJHLEtBSHNCO0FBQUEsTUFHZkMsUUFIZTs7QUFBQSxtQkFJTEosc0RBQVEsQ0FBQyxFQUFELENBSkg7QUFBQSxNQUl0QkssSUFKc0I7QUFBQSxNQUloQkMsT0FKZ0I7O0FBQUEsbUJBS0ROLHNE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QUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJSLGVBY0U7QUFBUSxlQUFPLEVBQUU7QUFBQSxpQkFBTWIsTUFBTSxDQUFDekIsSUFBRCxDQUFaO0FBQUEsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQXNCRTtBQUFBLDZCQUVFLHFFQUFDLGdFQUFEO0FBQ0ksbUJBQVcsRUFBR2dDO0FBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBK0JEOztHQXRHdUJ0QyxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVkNTEwMGFjYjIwMGExOTRlNDQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgQXV0b2NvbXBsZXRlIGZyb20gJy4uL2NvbXBvbmVudHMvQXV0b2NvbXBsZXRlJ1xuXG5jb25zdCBVUkwgPSBgaHR0cHM6Ly9hcGkudGhlY2F0YXBpLmNvbS92MS9icmVlZHNgXG5jb25zdCBpbWdVUkwgPSBgaHR0cHM6Ly9hcGkudGhlY2F0YXBpLmNvbS92MS9pbWFnZXNgXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbY2F0cywgc2V0Q2F0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbZmluZCwgc2V0RmluZF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtyZWZpbWcsIHNldFJlZmltZ10gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW25hbWVDYXQsIHNldE5hbWVDYXRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFt0ZW1wZXJhbWVudCwgc2V0VGVtcGVyYW1lbnRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtvcmlnaW4sIHNldE9yaWdpbl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2xpZmVfc3Bhbiwgc2V0TGlmZV9zcGFuXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbYXV0bywgc2V0QXV0b10gPXVzZVN0YXRlKHt9KVxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRDYXRzKClcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGdldEltYWdlID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgbGV0IGltcCA9IGF3YWl0IGF4aW9zLmdldChgJHtpbWdVUkx9LyR7aWR9YClcbiAgICBzZXRJbWFnZShpbXAuZGF0YSlcbiAgfVxuXG4gIGNvbnN0IGdldENhdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IGNhdCA9IGF3YWl0IGF4aW9zLmdldChVUkwpXG4gICAgc2V0Q2F0cyhjYXQuZGF0YSlcbiAgfVxuXG4gIGNvbnN0IHNlYXJjaCA9IGFzeW5jIChuYW1lKSA9PiB7XG5cbiAgICBjYXRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChuYW1lID09PSBpdGVtLm5hbWUpIHtcbiAgICAgICAgc2V0UmVmaW1nKGl0ZW0ucmVmZXJlbmNlX2ltYWdlX2lkKVxuICAgICAgICBzZXROYW1lQ2F0KGl0ZW0ubmFtZSlcbiAgICAgICAgc2V0VGVtcGVyYW1lbnQoaXRlbS50ZW1wZXJhbWVudClcbiAgICAgICAgc2V0T3JpZ2luKGl0ZW0ub3JpZ2luKVxuICAgICAgICBzZXREZXNjcmlwdGlvbihpdGVtLmRlc2NyaXB0aW9uKVxuICAgICAgICBzZXRMaWZlX3NwYW4oaXRlbS5saWZlX3NwYW4pXG4gICAgICAgIGdldEltYWdlKHJlZmltZylcblxuICAgICAgfVxuXG4gICAgfSlcblxuICB9XG5cbiAgY29uc3QgcHJpbnRDYXRzID0gKCkgPT4ge1xuICAgIHJldHVybiAoY2F0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7LyogVGVzdDoge2l0ZW0ubmFtZX0gfFxuICAgICAgICB3ZWlnaHQ6IHtpdGVtLndlaWdodC5tZXRyaWN9XG4gICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlLnVybH0gYWx0PVwiXCIgLz4gKi99XG4gICAgICAgIHsvKiB7KGl0ZW0ubmFtZSA9PT0gXCJBYnlzc2luaWFuXCIpPzxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4yLnRoZWNhdGFwaS5jb20vaW1hZ2VzLzBYWXZSZDdvRC5qcGdcIi8+OlwibnVsbFwifSAqL31cbiAgICAgICAgQnJlZWQ6IHtpdGVtLm5hbWV9XG5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnZXRJbWFnZShpdGVtLnJlZmVyZW5jZV9pbWFnZV9pZCl9PkdldDwvYnV0dG9uPlxuXG5cbiAgICAgIDwvZGl2PlxuICAgICkpKVxuICB9XG5cblxuICBjb25zdCBmaW5kQ2F0c05hbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgY2F0cy5tYXAoKGl0ZW0pID0+IHtzZXRBdXRvKGl0ZW0ubmFtZSl9KVxuICAgIClcbiAgfVxuXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIEhlbGxvXG4gICAgICBpbWc6IDxpbWcgc3JjPXtpbWFnZS51cmx9IHdpZHRoPVwiMzAwXCIgaGVpZ2h0PVwiMzAwXCIgLz5cbiAgICAgIHsvKiB7cHJpbnRDYXRzKCl9ICovfVxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8aW1nIHNyYz17aW1hZ2UudXJsfSB3aWR0aD1cIjMwMFwiIGhlaWdodD1cIjMwMFwiIC8+XG4gICAgICAgIDxicj48L2JyPlxuICAgICAgICBuYW1lOiB7bmFtZUNhdH1cbiAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgIHRlbXBlcmFtZW50OiB7dGVtcGVyYW1lbnR9XG4gICAgICAgIDxicj48L2JyPlxuICAgICAgICBvcmlnaW46IHtvcmlnaW59XG4gICAgICAgIDxicj48L2JyPlxuICAgICAgICBkZXNjcmlwdGlvbjoge2Rlc2NyaXB0aW9ufVxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgbGlmZSBzcGFuOiB7bGlmZV9zcGFufVxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgRmluZDogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRGaW5kKGUudGFyZ2V0LnZhbHVlKX0gYXV0b0NvbXBsZXRlPVwibmFtZVwiIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2VhcmNoKGZpbmQpfT5GaW5kITwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIFxuICAgICAgICA8QXV0b2NvbXBsZXRlXG4gICAgICAgICAgICBzdWdnZXN0aW9ucyA9e2ZpbmRDYXRzTmFtZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9