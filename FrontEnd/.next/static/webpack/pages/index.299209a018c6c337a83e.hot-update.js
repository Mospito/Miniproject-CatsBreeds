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
    }, this), printCats(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiVVJMIiwiaW1nVVJMIiwiSG9tZSIsInVzZVN0YXRlIiwiY2F0cyIsInNldENhdHMiLCJpbWFnZSIsInNldEltYWdlIiwiZmluZCIsInNldEZpbmQiLCJyZWZpbWciLCJzZXRSZWZpbWciLCJuYW1lQ2F0Iiwic2V0TmFtZUNhdCIsInRlbXBlcmFtZW50Iiwic2V0VGVtcGVyYW1lbnQiLCJvcmlnaW4iLCJzZXRPcmlnaW4iLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwibGlmZV9zcGFuIiwic2V0TGlmZV9zcGFuIiwidXNlRWZmZWN0IiwiZ2V0Q2F0cyIsImdldEltYWdlIiwiaWQiLCJheGlvcyIsImdldCIsImltcCIsImRhdGEiLCJjYXQiLCJzZWFyY2giLCJuYW1lIiwibWFwIiwiaXRlbSIsImluZGV4IiwicmVmZXJlbmNlX2ltYWdlX2lkIiwicHJpbnRDYXRzIiwic3R5bGVzIiwiY29udGFpbmVyIiwidXJsIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsR0FBRyx3Q0FBVDtBQUNBLElBQU1DLE1BQU0sd0NBQVo7QUFHZSxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBRUxDLHNEQUFRLENBQUMsRUFBRCxDQUZIO0FBQUEsTUFFdEJDLElBRnNCO0FBQUEsTUFFaEJDLE9BRmdCOztBQUFBLG1CQUdIRixzREFBUSxDQUFDLEVBQUQsQ0FITDtBQUFBLE1BR3RCRyxLQUhzQjtBQUFBLE1BR2ZDLFFBSGU7O0FBQUEsbUJBSUxKLHNEQUFRLENBQUMsRUFBRCxDQUpIO0FBQUEsTUFJdEJLLElBSnNCO0FBQUEsTUFJaEJDLE9BSmdCOztBQUFBLG1CQUtETixzREFBUSxDQUFDLEVBQUQsQ0FMUDtBQUFBLE1BS3RCTyxNQUxzQjtB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QUFDQyxTQUF2QjtBQUFBLDJDQUVPO0FBQUssU0FBRyxFQUFFakMsS0FBSyxDQUFDa0MsR0FBaEI7QUFBcUIsV0FBSyxFQUFDLEtBQTNCO0FBQWlDLFlBQU0sRUFBQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRlAsRUFHR0gsU0FBUyxFQUhaLGVBS0U7QUFBQSw4QkFDRTtBQUFLLFdBQUcsRUFBRS9CLEtBQUssQ0FBQ2tDLEdBQWhCO0FBQXFCLGFBQUssRUFBQyxLQUEzQjtBQUFpQyxjQUFNLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLFlBR1M1QixPQUhULGVBSUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpILG1CQUtnQkUsV0FMaEIsZUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsY0FPV0UsTUFQWCxlQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRixtQkFTZ0JFLFdBVGhCLGVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGLHlCQWFRO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsZ0JBQVEsRUFBSSxrQkFBQ3VCLENBQUQ7QUFBQSxpQkFBT2hDLE9BQU8sQ0FBQ2dDLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWQ7QUFBQSxTQUEvQjtBQUFnRSxvQkFBWSxFQUFDO0FBQTdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiUixlQWNFO0FBQVEsZUFBTyxFQUFHO0FBQUEsaUJBQU1aLE1BQU0sQ0FBQ3ZCLElBQUQsQ0FBWjtBQUFBLFNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3QkQ7O0dBckZ1Qk4sSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yOTkyMDlhMDE4YzZjMzM3YTgzZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBVUkwgPSBgaHR0cHM6Ly9hcGkudGhlY2F0YXBpLmNvbS92MS9icmVlZHNgXG5jb25zdCBpbWdVUkwgPSBgaHR0cHM6Ly9hcGkudGhlY2F0YXBpLmNvbS92MS9pbWFnZXNgXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbY2F0cywgc2V0Q2F0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbZmluZCwgc2V0RmluZF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtyZWZpbWcsIHNldFJlZmltZ10gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW25hbWVDYXQsIHNldE5hbWVDYXRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFt0ZW1wZXJhbWVudCwgc2V0VGVtcGVyYW1lbnRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtvcmlnaW4sIHNldE9yaWdpbl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2xpZmVfc3Bhbiwgc2V0TGlmZV9zcGFuXSA9IHVzZVN0YXRlKCcnKVxuICBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldENhdHMoKVxuICB9LCBbXSk7XG5cbiAgY29uc3QgZ2V0SW1hZ2UgPSBhc3luYyAoaWQpID0+IHtcbiAgICBsZXQgaW1wID0gYXdhaXQgYXhpb3MuZ2V0KGAke2ltZ1VSTH0vJHtpZH1gKVxuICAgIHNldEltYWdlKGltcC5kYXRhKVxuICB9XG5cbiAgY29uc3QgZ2V0Q2F0cyA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgY2F0ID0gYXdhaXQgYXhpb3MuZ2V0KFVSTClcbiAgICBzZXRDYXRzKGNhdC5kYXRhKVxuICB9XG5cbiAgY29uc3Qgc2VhcmNoID0gYXN5bmMgKG5hbWUpID0+IHtcbiAgICBcbiAgICBjYXRzLm1hcCgoaXRlbSxpbmRleCkgPT4ge1xuICAgICAgaWYobmFtZSA9PT0gaXRlbS5uYW1lKVxuICAgICAge1xuICAgICAgICBzZXRSZWZpbWcoaXRlbS5yZWZlcmVuY2VfaW1hZ2VfaWQpXG4gICAgICAgIHNldE5hbWVDYXQoaXRlbS5uYW1lKVxuICAgICAgICBzZXRUZW1wZXJhbWVudChpdGVtLnRlbXBlcmFtZW50KVxuICAgICAgICBzZXRPcmlnaW4oaXRlbS5vcmlnaW4pXG4gICAgICAgIHNldERlc2NyaXB0aW9uKGl0ZW0uZGVzY3JpcHRpb24pXG4gICAgICAgIHNldExpZmVfc3BhbihpdGVtLmxpZmVfc3BhbilcbiAgICAgICAgZ2V0SW1hZ2UocmVmaW1nKVxuICAgICAgICBcbiAgICAgIH1cblxuICAgIH0pXG4gICBcbiAgfVxuXG4gIGNvbnN0IHByaW50Q2F0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gKGNhdHMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgey8qIFRlc3Q6IHtpdGVtLm5hbWV9IHxcbiAgICAgICAgd2VpZ2h0OiB7aXRlbS53ZWlnaHQubWV0cmljfVxuICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZS51cmx9IGFsdD1cIlwiIC8+ICovfVxuICAgICAgICB7LyogeyhpdGVtLm5hbWUgPT09IFwiQWJ5c3NpbmlhblwiKT88aW1nIHNyYz1cImh0dHBzOi8vY2RuMi50aGVjYXRhcGkuY29tL2ltYWdlcy8wWFl2UmQ3b0QuanBnXCIvPjpcIm51bGxcIn0gKi99XG4gICAgICAgIEJyZWVkOiB7aXRlbS5uYW1lfVxuXG4gICAgICAgIDxidXR0b24gb25DbGljaz17ICgpID0+IGdldEltYWdlKGl0ZW0ucmVmZXJlbmNlX2ltYWdlX2lkKX0+R2V0PC9idXR0b24+XG5cblxuICAgICAgPC9kaXY+XG4gICAgKSkpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICBIZWxsb1xuICAgICAgaW1nOiA8aW1nIHNyYz17aW1hZ2UudXJsfSB3aWR0aD1cIjMwMFwiIGhlaWdodD1cIjMwMFwiLz5cbiAgICAgIHtwcmludENhdHMoKX1cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBzcmM9e2ltYWdlLnVybH0gd2lkdGg9XCIzMDBcIiBoZWlnaHQ9XCIzMDBcIiAvPlxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgbmFtZToge25hbWVDYXR9XG4gICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgdGVtcGVyYW1lbnQ6IHt0ZW1wZXJhbWVudH1cbiAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgIG9yaWdpbjoge29yaWdpbn1cbiAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgIGRlc2NyaXB0aW9uOiB7ZGVzY3JpcHRpb259XG4gICAgICAgIDxicj48L2JyPlxuICAgICAgICB7LyogbGlmZSBzcGFuOiB7bGlmZV9zcGFufVxuICAgICAgICA8YnI+PC9icj4gKi99XG4gICAgICAgIEZpbmQ6IDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlID17IChlKSA9PiBzZXRGaW5kKGUudGFyZ2V0LnZhbHVlKX0gIGF1dG9Db21wbGV0ZT1cIm5hbWVcIi8+XG4gICAgICAgIDxidXR0b24gb25DbGljayA9eygpID0+IHNlYXJjaChmaW5kKX0+RmluZCE8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9