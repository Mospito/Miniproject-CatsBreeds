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
var dataAllName = [];
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
              setAuto(cat.data.name);

            case 5:
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

  var scandName = function scandName() {
    dataAllName = cats.map(function (item) {
      return item.name;
    });
    return cats.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: item.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 33
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
      lineNumber: 88,
      columnNumber: 12
    }, this), printCats(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: image.url,
        width: "300",
        height: "300"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, this), "name: ", nameCat, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this), "temperament: ", temperament, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this), "origin: ", origin, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, this), "description: ", description, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this), "life span: ", life_span, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this), "Find: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        onChange: function onChange(e) {
          return setFind(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 15
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function onClick() {
          return search(find);
        },
        children: "Find!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [scandName(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Autocomplete__WEBPACK_IMPORTED_MODULE_7__["default"], {
        suggestions: dataAllName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 86,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiVVJMIiwiaW1nVVJMIiwiZGF0YUFsbE5hbWUiLCJIb21lIiwidXNlU3RhdGUiLCJjYXRzIiwic2V0Q2F0cyIsImltYWdlIiwic2V0SW1hZ2UiLCJmaW5kIiwic2V0RmluZCIsInJlZmltZyIsInNldFJlZmltZyIsIm5hbWVDYXQiLCJzZXROYW1lQ2F0IiwidGVtcGVyYW1lbnQiLCJzZXRUZW1wZXJhbWVudCIsIm9yaWdpbiIsInNldE9yaWdpbiIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJsaWZlX3NwYW4iLCJzZXRMaWZlX3NwYW4iLCJhdXRvIiwic2V0QXV0byIsInVzZUVmZmVjdCIsImdldENhdHMiLCJnZXRJbWFnZSIsImlkIiwiYXhpb3MiLCJnZXQiLCJpbXAiLCJkYXRhIiwiY2F0IiwibmFtZSIsInNlYXJjaCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInJlZmVyZW5jZV9pbWFnZV9pZCIsInByaW50Q2F0cyIsInNjYW5kTmFtZSIsInN0eWxlcyIsImNvbnRhaW5lciIsInVybCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEdBQUcsd0NBQVQ7QUFDQSxJQUFNQyxNQUFNLHdDQUFaO0FBRUEsSUFBSUMsV0FBVyxHQUFHLEVBQWxCO0FBQ2UsU0FBU0MsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUVMQyxzREFBUSxDQUFDLEVBQUQsQ0FGSDtBQUFBLE1BRXRCQyxJQUZzQjtBQUFBLE1BRWhCQyxPQUZnQjs7QUFBQSxtQkFHSEYsc0RBQVEsQ0FBQyxFQUFELENBSEw7QUFBQSxNQUd0QkcsS0FIc0I7QUFBQSxNQUdmQyxRQUhlOztBQUFBLG1CQUlMSixzREFBUSxDQUFDLEVBQUQsQ0FKSDtBQUFBLE1BSXRCSyxJ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QVJGLG1CQVNnQkUsV0FUaEIsZUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkYsaUJBV2NFLFNBWGQsZUFZRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkYseUJBYVE7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixnQkFBUSxFQUFFLGtCQUFDd0IsQ0FBRDtBQUFBLGlCQUFPbkMsT0FBTyxDQUFDbUMsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZDtBQUFBO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiUixlQWNFO0FBQVEsZUFBTyxFQUFFO0FBQUEsaUJBQU1aLE1BQU0sQ0FBQzFCLElBQUQsQ0FBWjtBQUFBLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFzQkU7QUFBQSxpQkFFRWdDLFNBQVMsRUFGWCxlQUdFLHFFQUFDLGdFQUFEO0FBQ0UsbUJBQVcsRUFBRXZDO0FBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdDRDs7R0ExR3VCQyxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRiNTEzZWU1NzM3NDJmNDdhYmY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgQXV0b2NvbXBsZXRlIGZyb20gJy4uL2NvbXBvbmVudHMvQXV0b2NvbXBsZXRlJ1xuXG5jb25zdCBVUkwgPSBgaHR0cHM6Ly9hcGkudGhlY2F0YXBpLmNvbS92MS9icmVlZHNgXG5jb25zdCBpbWdVUkwgPSBgaHR0cHM6Ly9hcGkudGhlY2F0YXBpLmNvbS92MS9pbWFnZXNgXG5cbnZhciBkYXRhQWxsTmFtZSA9IFtdXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFtjYXRzLCBzZXRDYXRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtmaW5kLCBzZXRGaW5kXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3JlZmltZywgc2V0UmVmaW1nXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbbmFtZUNhdCwgc2V0TmFtZUNhdF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3RlbXBlcmFtZW50LCBzZXRUZW1wZXJhbWVudF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW29yaWdpbiwgc2V0T3JpZ2luXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbbGlmZV9zcGFuLCBzZXRMaWZlX3NwYW5dID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFthdXRvLCBzZXRBdXRvXSA9IHVzZVN0YXRlKFtdKVxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRDYXRzKClcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGdldEltYWdlID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgbGV0IGltcCA9IGF3YWl0IGF4aW9zLmdldChgJHtpbWdVUkx9LyR7aWR9YClcbiAgICBzZXRJbWFnZShpbXAuZGF0YSlcbiAgfVxuXG4gIGNvbnN0IGdldENhdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IGNhdCA9IGF3YWl0IGF4aW9zLmdldChVUkwpXG4gICAgc2V0Q2F0cyhjYXQuZGF0YSlcbiAgICBzZXRBdXRvKGNhdC5kYXRhLm5hbWUpXG4gIH1cblxuICBjb25zdCBzZWFyY2ggPSBhc3luYyAobmFtZSkgPT4ge1xuXG4gICAgY2F0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBpZiAobmFtZSA9PT0gaXRlbS5uYW1lKSB7XG4gICAgICAgIHNldFJlZmltZyhpdGVtLnJlZmVyZW5jZV9pbWFnZV9pZClcbiAgICAgICAgc2V0TmFtZUNhdChpdGVtLm5hbWUpXG4gICAgICAgIHNldFRlbXBlcmFtZW50KGl0ZW0udGVtcGVyYW1lbnQpXG4gICAgICAgIHNldE9yaWdpbihpdGVtLm9yaWdpbilcbiAgICAgICAgc2V0RGVzY3JpcHRpb24oaXRlbS5kZXNjcmlwdGlvbilcbiAgICAgICAgc2V0TGlmZV9zcGFuKGl0ZW0ubGlmZV9zcGFuKVxuICAgICAgICBnZXRJbWFnZShyZWZpbWcpXG4gICAgICB9XG5cbiAgICB9KVxuXG4gIH1cblxuICBjb25zdCBwcmludENhdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChjYXRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgIDxkaXY+XG4gICAgICAgIHsvKiBUZXN0OiB7aXRlbS5uYW1lfSB8XG4gICAgICAgIHdlaWdodDoge2l0ZW0ud2VpZ2h0Lm1ldHJpY31cbiAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2UudXJsfSBhbHQ9XCJcIiAvPiAqL31cbiAgICAgICAgey8qIHsoaXRlbS5uYW1lID09PSBcIkFieXNzaW5pYW5cIik/PGltZyBzcmM9XCJodHRwczovL2NkbjIudGhlY2F0YXBpLmNvbS9pbWFnZXMvMFhZdlJkN29ELmpwZ1wiLz46XCJudWxsXCJ9ICovfVxuICAgICAgICBCcmVlZDoge2l0ZW0ubmFtZX1cblxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdldEltYWdlKGl0ZW0ucmVmZXJlbmNlX2ltYWdlX2lkKX0+R2V0PC9idXR0b24+XG5cblxuICAgICAgPC9kaXY+XG4gICAgKSkpXG4gIH1cblxuICBjb25zdCBzY2FuZE5hbWUgPSAgKCkgPT4ge1xuXG4gICAgZGF0YUFsbE5hbWUgPSAoY2F0cy5tYXAoKGl0ZW0pID0+IGl0ZW0ubmFtZSkpXG5cbiAgIFxuICAgIHJldHVybiAoXG4gICAgICBjYXRzLm1hcCgoaXRlbSxpbmRleCkgPT4gKDxsaT5cbiAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgIDwvbGk+KSlcbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIEhlbGxvXG4gICAgICBpbWc6IDxpbWcgc3JjPXtpbWFnZS51cmx9IHdpZHRoPVwiMzAwXCIgaGVpZ2h0PVwiMzAwXCIgLz5cbiAgICAgIHtwcmludENhdHMoKX1cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBzcmM9e2ltYWdlLnVybH0gd2lkdGg9XCIzMDBcIiBoZWlnaHQ9XCIzMDBcIiAvPlxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgbmFtZToge25hbWVDYXR9XG4gICAgICAgIDxicj48L2JyPlxuICAgICAgICB0ZW1wZXJhbWVudDoge3RlbXBlcmFtZW50fVxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgb3JpZ2luOiB7b3JpZ2lufVxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgZGVzY3JpcHRpb246IHtkZXNjcmlwdGlvbn1cbiAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgIGxpZmUgc3Bhbjoge2xpZmVfc3Bhbn1cbiAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgIEZpbmQ6IDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RmluZChlLnRhcmdldC52YWx1ZSl9ICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNlYXJjaChmaW5kKX0+RmluZCE8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgIFxuICAgICAgIHtzY2FuZE5hbWUoKX1cbiAgICAgICAgPEF1dG9jb21wbGV0ZVxuICAgICAgICAgIHN1Z2dlc3Rpb25zPXtkYXRhQWxsTmFtZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9