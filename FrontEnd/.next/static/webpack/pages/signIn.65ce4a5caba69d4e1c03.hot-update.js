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

              setStatus('Suscess:', result.data.user.username);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbkluLmpzIl0sIm5hbWVzIjpbIlVSTCIsIlNpZ25JbiIsInRva2VuIiwidXNlU3RhdGUiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInN0YXR1cyIsInNldFN0YXR1cyIsImlzY2hlY2siLCJzZXRJc2NoZWNrIiwibG9naW4iLCJyZXEiLCJyZXMiLCJheGlvcyIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIm1lc3NhZ2UiLCJ1c2VyIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwic3Vic3RyaW5nIiwibG9naW5Gb3JtIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29weVRleHQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEdBQUcsK0JBQVQ7O0FBQ0EsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxrQkFFTUMsc0RBQVEsQ0FBQyxFQUFELENBRmQ7QUFBQSxNQUVuQkMsUUFGbUI7QUFBQSxNQUVUQyxXQUZTOztBQUFBLG1CQUdNRixzREFBUSxDQUFDLEVBQUQsQ0FIZDtBQUFBLE1BR25CRyxRQUhtQjtBQUFBLE1BR1RDLFdBSFM7O0FBQUEsbUJBSUVKLHNEQUFRLENBQUMsRUFBRCxDQUpWO0FBQUEsTUFJbkJLLE1BSm1CO0FBQUEsTUFJWEMsU0FKVzs7QUFBQSxtQkFLSU4sc0RBQVEsQ0FBQyxFQUFELENBTFo7QUFBQSxNQUtuQk8sT0FMbUI7QUFBQSxNQUtWQyxVQUxVOztBQU8xQixNQUFNQyxLQUFLO0FBQUEseVhBQUcsaUJBQU9DLEdBQVAsRUFBWUMsR0FBWjtBQUFB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QUFBQTtBQUFBO0FBQUEsYUFGSixlQXFDSTtBQUFLLGVBQVMsRUFBQyxVQUFmO0FBQUEsNkJBQ0kscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRko7QUFrREgsQ0ExR0Q7O0dBQU1YLE07O0tBQUFBLE07O0FBMkdTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWduSW4uNjVjZTRhNWNhYmE2OWQ0ZTFjMDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xyXG5cclxuY29uc3QgVVJMID0gYGh0dHA6Ly9sb2NhbGhvc3QvYXBpL2xvZ2luYFxyXG5jb25zdCBTaWduSW4gPSAoeyB0b2tlbiB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbaXNjaGVjaywgc2V0SXNjaGVja10gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICBjb25zdCBsb2dpbiA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KFVSTCxcclxuICAgICAgICAgICAgICAgIHsgdXNlcm5hbWUsIHBhc3N3b3JkLCBpc2NoZWNrIH0sXHJcbiAgICAgICAgICAgICAgICB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVzdWx0OiAnLCByZXN1bHQpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQuZGF0YTogICcsIHJlc3VsdC5kYXRhKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndG9rZW46ICAnLCB0b2tlbilcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ01lc3NhZ2U6ICcsIHJlc3VsdC5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAvLyBzZXRTdGF0dXMocmVzdWx0LnN0YXR1cyArICc6ICcgKyByZXN1bHQuZGF0YS51c2VyLnVzZXJuYW1lKVxyXG4gICAgICAgICAgICBzZXRTdGF0dXMoJ1N1c2Nlc3M6JyxyZXN1bHQuZGF0YS51c2VyLnVzZXJuYW1lKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6ICcsIEpTT04uc3RyaW5naWZ5KGUucmVzcG9uc2UpKVxyXG4gICAgICAgICAgICBzZXRTdGF0dXMoSlNPTi5zdHJpbmdpZnkoZS5yZXNwb25zZSkuc3Vic3RyaW5nKDIwLCA0NikpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxvZ2luRm9ybSA9ICgpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCB3LTQvNSAtbXQtMic+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICBVc2VybmFtZTpcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSd3LWZ1bGwgaC04IHJvdW5kZWQtbWQgYm9yZGVyLTIgYm9yZGVyLWdyZWVuLTgwMCByaW5nLTIgcmluZy1ncmVlbi01MDAgbXQtMiBwbC0yIGZvY3VzOm91dGxpbmUtbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtNCc+XHJcbiAgICAgICAgICAgICAgICBQYXNzd29yZDpcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSd3LWZ1bGwgaC04IHJvdW5kZWQtbWQgYm9yZGVyLTIgYm9yZGVyLWdyZWVuLTgwMCByaW5nLTIgcmluZy1ncmVlbi01MDAgbXQtMiBwbC0yIGZvY3VzOm91dGxpbmUtbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbiAgICBjb25zdCBjb3B5VGV4dCA9ICgpID0+IHtcclxuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0b2tlbilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZml4ZWQgZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtc2NyZWVuIHctc2NyZWVuXCI+XHJcbiAgICAgICAgICAgIDx0aXRsZT5Mb2dpbjwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIGJvcmRlci00IGJvcmRlci1ncmVlbi05MDAgcmluZy00IHJpbmctZ3JlZW4tNDAwIFxyXG4gICAgICAgICAgICAgICAgYmctZ3JhZGllbnQtdG8tdCBmcm9tLWdyZWVuLTMwMCB0by1ncmVlbi0xMDAgZm9udC1zZW1pYm9sZCBoLTIvMyB3LTk2IG10LTE5IHJvdW5kZWQteGwgc2hhZG93LXhsJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0IG10LTYnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtM3hsIHVwcGVyY2FzZSB0cmFja2luZy13aWRlcic+U2lnbiBpbjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYm9yZGVyLTIgYm9yZGVyLWdyZWVuLTYwMCBiZy1ncmVlbi00MDAgaG92ZXI6YmctZ3JlZW4tMjAwIHJvdW5kZWQtbWQgaC04IHctMjggJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y29weVRleHR9PiBDb3B5IHRva2VuIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IHctNC81IG10LTQgdGV4dC1yZWQtODAwJz5cclxuICAgICAgICAgICAgICAgICAgICBTdGF0dXM6ICB7c3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IHctNC81IG10LTIgdGV4dC1yZWQtODAwJz5cclxuICAgICAgICAgICAgICAgICAgICBDaGVjazoge2lzY2hlY2t9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAge2xvZ2luRm9ybSgpfVxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTQvNSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0naC00IHctNCBtdC01JyB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiSXNSZW1lbWJlck1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJc2NoZWNrKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPiA8YSBjbGFzc05hbWU9J21sLTInPlJlbWVtYmVyIG1lITwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2gtMTAgdy0yOCBib3JkZXItNCBib3JkZXItZ3JlZW4tOTAwIHJvdW5kZWQtbGcgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTMwMCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1ib2xkIHVwcGVyY2FzZSBmb2N1czpvdXRsaW5lLW5vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2xvZ2lufT5TaWduIGluPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LXNjcmVlbic+XHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcblxyXG5cclxuXHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25JblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHJlcSwgcmVzIH0pIHtcclxuICAgIHJldHVybiB7IHByb3BzOiB7IHRva2VuOiByZXEuY29va2llcy50b2tlbiB8fCBcIlwiIH0gfTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=