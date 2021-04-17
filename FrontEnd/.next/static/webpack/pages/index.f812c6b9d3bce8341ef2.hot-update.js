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

  var scandName = function scandName() {
    var tmp;
    cats.map(function (item) {
      tmp = item.name;
      setAuto(tmp);
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
      lineNumber: 83,
      columnNumber: 12
    }, this), printCats(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: image.url,
        width: "300",
        height: "300"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this), "name: ", nameCat, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this), "temperament: ", temperament, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this), "origin: ", origin, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this), "description: ", description, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this), "life span: ", life_span, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this), "Find: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        onChange: function onChange(e) {
          return setFind(e.target.value);
        },
        autoComplete: "name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 15
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function onClick() {
          return search(find);
        },
        children: "Find!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [scandName(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Autocomplete__WEBPACK_IMPORTED_MODULE_7__["default"], {
        suggestions: auto
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 81,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiVVJMIiwiaW1nVVJMIiwiSG9tZSIsInVzZVN0YXRlIiwiY2F0cyIsInNldENhdHMiLCJpbWFnZSIsInNldEltYWdlIiwiZmluZCIsInNldEZpbmQiLCJyZWZpbWciLCJzZXRSZWZpbWciLCJuYW1lQ2F0Iiwic2V0TmFtZUNhdCIsInRlbXBlcmFtZW50Iiwic2V0VGVtcGVyYW1lbnQiLCJvcmlnaW4iLCJzZXRPcmlnaW4iLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwibGlmZV9zcGFuIiwic2V0TGlmZV9zcGFuIiwiYXV0byIsInNldEF1dG8iLCJ1c2VFZmZlY3QiLCJnZXRDYXRzIiwiZ2V0SW1hZ2UiLCJpZCIsImF4aW9zIiwiZ2V0IiwiaW1wIiwiZGF0YSIsImNhdCIsInNlYXJjaCIsIm5hbWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJyZWZlcmVuY2VfaW1hZ2VfaWQiLCJwcmludENhdHMiLCJzY2FuZE5hbWUiLCJ0bXAiLCJzdHlsZXMiLCJjb250YWluZXIiLCJ1cmwiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxHQUFHLHdDQUFUO0FBQ0EsSUFBTUMsTUFBTSx3Q0FBWjtBQUdlLFNBQVNDLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFFTEMsc0RBQVEsQ0FBQyxFQUFELENBRkg7QUFBQSxNQUV0QkMsSUFGc0I7QUFBQSxNQUVoQkMsT0FGZ0I7O0FBQUEsbUJBR0hGLHNEQUFRLENBQUMsRUFBRCxDQUhMO0FBQUEsTUFHdEJHLEtBSHNCO0FBQUEsTUFHZkMsUUFIZTs7QUFBQSxtQkFJTEosc0RBQVEsQ0FBQyxFQUFELENBSkg7QUFBQSxNQUl0QkssSUFKc0I7QUFBQSxNQUloQkMsT0FKZ0I7O0FBQUEsbUJBS0RO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QUYsQ0FBU0MsS0FBVixDQUFkO0FBQUEsU0FBN0I7QUFBNkQsb0JBQVksRUFBQztBQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYlIsZUFjRTtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFNZCxNQUFNLENBQUN6QixJQUFELENBQVo7QUFBQSxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBc0JFO0FBQUEsaUJBRUdnQyxTQUFTLEVBRlosZUFHRSxxRUFBQyxnRUFBRDtBQUNFLG1CQUFXLEVBQUVsQjtBQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQ0Q7O0dBckd1QnBCLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjgxMmM2YjlkM2JjZTgzNDFlZjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBBdXRvY29tcGxldGUgZnJvbSAnLi4vY29tcG9uZW50cy9BdXRvY29tcGxldGUnXG5cbmNvbnN0IFVSTCA9IGBodHRwczovL2FwaS50aGVjYXRhcGkuY29tL3YxL2JyZWVkc2BcbmNvbnN0IGltZ1VSTCA9IGBodHRwczovL2FwaS50aGVjYXRhcGkuY29tL3YxL2ltYWdlc2BcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFtjYXRzLCBzZXRDYXRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtmaW5kLCBzZXRGaW5kXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3JlZmltZywgc2V0UmVmaW1nXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbbmFtZUNhdCwgc2V0TmFtZUNhdF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3RlbXBlcmFtZW50LCBzZXRUZW1wZXJhbWVudF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW29yaWdpbiwgc2V0T3JpZ2luXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbbGlmZV9zcGFuLCBzZXRMaWZlX3NwYW5dID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFthdXRvLCBzZXRBdXRvXSA9IHVzZVN0YXRlKFtdKVxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRDYXRzKClcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGdldEltYWdlID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgbGV0IGltcCA9IGF3YWl0IGF4aW9zLmdldChgJHtpbWdVUkx9LyR7aWR9YClcbiAgICBzZXRJbWFnZShpbXAuZGF0YSlcbiAgfVxuXG4gIGNvbnN0IGdldENhdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IGNhdCA9IGF3YWl0IGF4aW9zLmdldChVUkwpXG4gICAgc2V0Q2F0cyhjYXQuZGF0YSlcbiAgfVxuXG4gIGNvbnN0IHNlYXJjaCA9IGFzeW5jIChuYW1lKSA9PiB7XG5cbiAgICBjYXRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChuYW1lID09PSBpdGVtLm5hbWUpIHtcbiAgICAgICAgc2V0UmVmaW1nKGl0ZW0ucmVmZXJlbmNlX2ltYWdlX2lkKVxuICAgICAgICBzZXROYW1lQ2F0KGl0ZW0ubmFtZSlcbiAgICAgICAgc2V0VGVtcGVyYW1lbnQoaXRlbS50ZW1wZXJhbWVudClcbiAgICAgICAgc2V0T3JpZ2luKGl0ZW0ub3JpZ2luKVxuICAgICAgICBzZXREZXNjcmlwdGlvbihpdGVtLmRlc2NyaXB0aW9uKVxuICAgICAgICBzZXRMaWZlX3NwYW4oaXRlbS5saWZlX3NwYW4pXG4gICAgICAgIGdldEltYWdlKHJlZmltZylcbiAgICAgIH1cblxuICAgIH0pXG5cbiAgfVxuXG4gIGNvbnN0IHByaW50Q2F0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gKGNhdHMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgey8qIFRlc3Q6IHtpdGVtLm5hbWV9IHxcbiAgICAgICAgd2VpZ2h0OiB7aXRlbS53ZWlnaHQubWV0cmljfVxuICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZS51cmx9IGFsdD1cIlwiIC8+ICovfVxuICAgICAgICB7LyogeyhpdGVtLm5hbWUgPT09IFwiQWJ5c3NpbmlhblwiKT88aW1nIHNyYz1cImh0dHBzOi8vY2RuMi50aGVjYXRhcGkuY29tL2ltYWdlcy8wWFl2UmQ3b0QuanBnXCIvPjpcIm51bGxcIn0gKi99XG4gICAgICAgIEJyZWVkOiB7aXRlbS5uYW1lfVxuXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ2V0SW1hZ2UoaXRlbS5yZWZlcmVuY2VfaW1hZ2VfaWQpfT5HZXQ8L2J1dHRvbj5cblxuXG4gICAgICA8L2Rpdj5cbiAgICApKSlcbiAgfVxuXG4gIGNvbnN0IHNjYW5kTmFtZSA9ICgpID0+IHtcbiAgICBsZXQgdG1wO1xuICAgIGNhdHMubWFwKChpdGVtKSA9PiB7XG4gICAgICB0bXAgPSBpdGVtLm5hbWVcbiAgICAgIHNldEF1dG8odG1wKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIEhlbGxvXG4gICAgICBpbWc6IDxpbWcgc3JjPXtpbWFnZS51cmx9IHdpZHRoPVwiMzAwXCIgaGVpZ2h0PVwiMzAwXCIgLz5cbiAgICAgIHtwcmludENhdHMoKX1cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBzcmM9e2ltYWdlLnVybH0gd2lkdGg9XCIzMDBcIiBoZWlnaHQ9XCIzMDBcIiAvPlxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgbmFtZToge25hbWVDYXR9XG4gICAgICAgIDxicj48L2JyPlxuICAgICAgICB0ZW1wZXJhbWVudDoge3RlbXBlcmFtZW50fVxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgb3JpZ2luOiB7b3JpZ2lufVxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgZGVzY3JpcHRpb246IHtkZXNjcmlwdGlvbn1cbiAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgIGxpZmUgc3Bhbjoge2xpZmVfc3Bhbn1cbiAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgIEZpbmQ6IDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RmluZChlLnRhcmdldC52YWx1ZSl9IGF1dG9Db21wbGV0ZT1cIm5hbWVcIiAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNlYXJjaChmaW5kKX0+RmluZCE8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuXG4gICAgICAgIHtzY2FuZE5hbWUoKX1cbiAgICAgICAgPEF1dG9jb21wbGV0ZVxuICAgICAgICAgIHN1Z2dlc3Rpb25zPXthdXRvfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=