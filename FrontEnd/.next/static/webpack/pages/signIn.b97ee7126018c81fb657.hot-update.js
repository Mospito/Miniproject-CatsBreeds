webpackHotUpdate_N_E("pages/signIn",{

/***/ "./pages/signIn.js":
/*!*************************!*\
  !*** ./pages/signIn.js ***!
  \*************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");




var _jsxFileName = "D:\\001Study\\Year3Therm2\\240-311 Distributed\\Final-MiniProject\\CatBreeds\\FrontEnd\\pages\\signIn.js",
    _this = undefined,
    _s = $RefreshSig$();




var URL = "http://localhost/api/login";

var SignIn = function SignIn(_ref) {
  _s();

  var token = _ref.token;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      username = _useState[0],
      setUsername = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      status = _useState3[0],
      setStatus = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      ischeck = _useState4[0],
      setIscheck = _useState4[1];

  var login = /*#__PURE__*/function () {
    var _ref2 = Object(D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(req, res) {
      var result;
      return D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(URL, {
                username: username,
                password: password,
                ischeck: ischeck
              }, {
                withCredentials: true
              });

            case 3:
              result = _context.sent;
              console.log('result: ', result);
              console.log('result.data:  ', result.data);
              console.log('token:  ', token);
              console.log('Message: ', result.data.message); // setStatus(result.status + ': ' + result.data.user.username)

              setStatus('Sign in success');
              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              console.log('error: ', JSON.stringify(_context.t0.response));
              setStatus(JSON.stringify(_context.t0.response).substring(20, 46));

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));

    return function login(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var loginForm = function loginForm() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-col w-4/5 -mt-2",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: "Username:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "w-full h-8 rounded-md border-2 border-green-800 ring-2 ring-green-500 mt-2 pl-2 focus:outline-none",
          type: "text",
          name: "username",
          placeholder: "username",
          onChange: function onChange(e) {
            return setUsername(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "mt-4",
        children: "Password:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "w-full h-8 rounded-md border-2 border-green-800 ring-2 ring-green-500 mt-2 pl-2 focus:outline-none",
          type: "password",
          name: "password",
          placeholder: "password",
          onChange: function onChange(e) {
            return setPassword(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, _this);
  };

  var copyText = function copyText() {
    navigator.clipboard.writeText(token);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex fixed flex-col justify-center items-center h-screen w-screen",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
      children: "Login"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-col justify-start items-center border-4 border-green-900 ring-4 ring-green-400 \r bg-gradient-to-t from-green-300 to-green-100 font-semibold h-2/3 w-96 mt-19 rounded-xl shadow-xl",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-start mt-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-3xl uppercase tracking-wider",
          children: "Sign in"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mt-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "border-2 border-green-600 bg-green-400 hover:bg-green-200 rounded-md h-8 w-28 ",
            onClick: copyText,
            children: " Copy token "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-col justify-start w-4/5 mt-4 text-red-800",
        children: ["Status:  ", status]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-col justify-start w-4/5 mt-2 text-red-800",
        children: ["Check: ", ischeck]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, _this), loginForm(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w-4/5",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "h-4 w-4 mt-5",
          type: "checkbox",
          name: "IsRememberMe",
          onChange: function onChange(e) {
            return setIscheck(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "ml-2",
          children: "Remember me!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 24
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 27
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "h-10 w-28 border-4 border-green-900 rounded-lg bg-green-500 hover:bg-green-300 \r font-bold uppercase focus:outline-none",
          onClick: login,
          children: "Sign in"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-screen",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 9
  }, _this);
};

_s(SignIn, "3omvAgqjnulP5Qf5VOhdjx2HG6A=");

_c = SignIn;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (SignIn);

var _c;

$RefreshReg$(_c, "SignIn");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbkluLmpzIl0sIm5hbWVzIjpbIlVSTCIsIlNpZ25JbiIsInRva2VuIiwidXNlU3RhdGUiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInN0YXR1cyIsInNldFN0YXR1cyIsImlzY2hlY2siLCJzZXRJc2NoZWNrIiwibG9naW4iLCJyZXEiLCJyZXMiLCJheGlvcyIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIm1lc3NhZ2UiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJzdWJzdHJpbmciLCJsb2dpbkZvcm0iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjb3B5VGV4dCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsR0FBRywrQkFBVDs7QUFDQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFlO0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGtCQUVNQyxzREFBUSxDQUFDLEVBQUQsQ0FGZDtBQUFBLE1BRW5CQyxRQUZtQjtBQUFBLE1BRVRDLFdBRlM7O0FBQUEsbUJBR01GLHNEQUFRLENBQUMsRUFBRCxDQUhkO0FBQUEsTUFHbkJHLFFBSG1CO0FBQUEsTUFHVEMsV0FIUzs7QUFBQSxtQkFJRUosc0RBQVEsQ0FBQyxFQUFELENBSlY7QUFBQSxNQUluQkssTUFKbUI7QUFBQSxNQUlYQyxTQUpXOztBQUFBLG1CQUtJTixzREFBUSxDQUFDLEVBQUQsQ0FMWjtBQUFBLE1BS25CTyxPQUxtQjtBQUFBLE1BS1ZDLFVBTFU7O0FBTzFCLE1BQU1DLEtBQUs7QUFBQSx5WEFBRyxpQkFBT0MsR0FBUCxFQUFZQyxHQUFaO0FBQUE7QUFBQTtB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Q0kscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRko7QUFrREgsQ0ExR0Q7O0dBQU1YLE07O0tBQUFBLE07O0FBMkdTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWduSW4uYjk3ZWU3MTI2MDE4YzgxZmI2NTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xyXG5cclxuY29uc3QgVVJMID0gYGh0dHA6Ly9sb2NhbGhvc3QvYXBpL2xvZ2luYFxyXG5jb25zdCBTaWduSW4gPSAoeyB0b2tlbiB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbaXNjaGVjaywgc2V0SXNjaGVja10gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICBjb25zdCBsb2dpbiA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KFVSTCxcclxuICAgICAgICAgICAgICAgIHsgdXNlcm5hbWUsIHBhc3N3b3JkLCBpc2NoZWNrIH0sXHJcbiAgICAgICAgICAgICAgICB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVzdWx0OiAnLCByZXN1bHQpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQuZGF0YTogICcsIHJlc3VsdC5kYXRhKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndG9rZW46ICAnLCB0b2tlbilcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ01lc3NhZ2U6ICcsIHJlc3VsdC5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAvLyBzZXRTdGF0dXMocmVzdWx0LnN0YXR1cyArICc6ICcgKyByZXN1bHQuZGF0YS51c2VyLnVzZXJuYW1lKVxyXG4gICAgICAgICAgICBzZXRTdGF0dXMoJ1NpZ24gaW4gc3VjY2VzcycpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjogJywgSlNPTi5zdHJpbmdpZnkoZS5yZXNwb25zZSkpXHJcbiAgICAgICAgICAgIHNldFN0YXR1cyhKU09OLnN0cmluZ2lmeShlLnJlc3BvbnNlKS5zdWJzdHJpbmcoMjAsIDQ2KSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbG9naW5Gb3JtID0gKCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHctNC81IC1tdC0yJz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIFVzZXJuYW1lOlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3ctZnVsbCBoLTggcm91bmRlZC1tZCBib3JkZXItMiBib3JkZXItZ3JlZW4tODAwIHJpbmctMiByaW5nLWdyZWVuLTUwMCBtdC0yIHBsLTIgZm9jdXM6b3V0bGluZS1ub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC00Jz5cclxuICAgICAgICAgICAgICAgIFBhc3N3b3JkOlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3ctZnVsbCBoLTggcm91bmRlZC1tZCBib3JkZXItMiBib3JkZXItZ3JlZW4tODAwIHJpbmctMiByaW5nLWdyZWVuLTUwMCBtdC0yIHBsLTIgZm9jdXM6b3V0bGluZS1ub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IGNvcHlUZXh0ID0gKCkgPT4ge1xyXG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRva2VuKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmaXhlZCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1zY3JlZW4gdy1zY3JlZW5cIj5cclxuICAgICAgICAgICAgPHRpdGxlPkxvZ2luPC90aXRsZT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgYm9yZGVyLTQgYm9yZGVyLWdyZWVuLTkwMCByaW5nLTQgcmluZy1ncmVlbi00MDAgXHJcbiAgICAgICAgICAgICAgICBiZy1ncmFkaWVudC10by10IGZyb20tZ3JlZW4tMzAwIHRvLWdyZWVuLTEwMCBmb250LXNlbWlib2xkIGgtMi8zIHctOTYgbXQtMTkgcm91bmRlZC14bCBzaGFkb3cteGwnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgbXQtNic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0zeGwgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyJz5TaWduIGluPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtNCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdib3JkZXItMiBib3JkZXItZ3JlZW4tNjAwIGJnLWdyZWVuLTQwMCBob3ZlcjpiZy1ncmVlbi0yMDAgcm91bmRlZC1tZCBoLTggdy0yOCAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb3B5VGV4dH0+IENvcHkgdG9rZW4gPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgdy00LzUgbXQtNCB0ZXh0LXJlZC04MDAnPlxyXG4gICAgICAgICAgICAgICAgICAgIFN0YXR1czogIHtzdGF0dXN9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgdy00LzUgbXQtMiB0ZXh0LXJlZC04MDAnPlxyXG4gICAgICAgICAgICAgICAgICAgIENoZWNrOiB7aXNjaGVja31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICB7bG9naW5Gb3JtKCl9XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctNC81Jz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdoLTQgdy00IG10LTUnIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJJc1JlbWVtYmVyTWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElzY2hlY2soZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+IDxhIGNsYXNzTmFtZT0nbWwtMic+UmVtZW1iZXIgbWUhPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0naC0xMCB3LTI4IGJvcmRlci00IGJvcmRlci1ncmVlbi05MDAgcm91bmRlZC1sZyBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tMzAwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWJvbGQgdXBwZXJjYXNlIGZvY3VzOm91dGxpbmUtbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bG9naW59PlNpZ24gaW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctc2NyZWVuJz5cclxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxuXHJcblxyXG5cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2lnbkluXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgdG9rZW46IHJlcS5jb29raWVzLnRva2VuIHx8IFwiXCIgfSB9O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==