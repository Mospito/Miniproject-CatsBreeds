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
/* harmony import */ var D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);






var _jsxFileName = "D:\\001Study\\Year3Therm2\\240-311 Distributed\\Final-MiniProject\\CatBreeds\\FrontEnd\\components\\Autocomplete.js",
    _this = undefined,
    _s = $RefreshSig$();



var URL = "https://api.thecatapi.com/v1/breeds";
var imgURL = "https://api.thecatapi.com/v1/images";
var URLloading = "https://www.kyorollen.com/kyomember/assets/img/loading.gif";

var Autocomplete = function Autocomplete(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      active = _useState[0],
      setActive = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      filtered = _useState2[0],
      setFiltered = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isShow = _useState3[0],
      setIsShow = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      input = _useState4[0],
      setInput = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      cats = _useState5[0],
      setCats = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      image = _useState6[0],
      setImage = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      find = _useState7[0],
      setFind = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      refimg = _useState8[0],
      setRefimg = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      nameCat = _useState9[0],
      setNameCat = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      temperament = _useState10[0],
      setTemperament = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      origin = _useState11[0],
      setOrigin = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      description = _useState12[0],
      setDescription = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      life_span = _useState13[0],
      setLife_span = _useState13[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    getCats();
  }, []);

  var getImage = /*#__PURE__*/function () {
    var _ref = Object(D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(id) {
      var imp;
      return D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!id) {
                _context.next = 6;
                break;
              }

              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("".concat(imgURL, "/").concat(id));

            case 3:
              imp = _context.sent;
              setImage(imp.data);
              console.log(imp);

            case 6:
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
    var _ref2 = Object(D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
      var cat;
      return D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(URL);

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

  var search = function search(name) {
    cats.map(function (item, index) {
      if (name === item.name) {
        setRefimg(item.reference_image_id);
        setNameCat(item.name);
        setTemperament(item.temperament);
        setOrigin(item.origin);
        setDescription(item.description);
        setLife_span(item.life_span);
        setImage(item.image.url); // console.log('image', item.image)
        // { getImage(refimg) }
      }
    });
  };

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
            var _jsxDEV2;

            var className;

            if (index === active) {
              className = "active";
            }

            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", (_jsxDEV2 = {
              className: className,
              onClick: onClick
            }, Object(D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsxDEV2, "className", "border-b-2 list-disc border-dashed border-black "), Object(D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsxDEV2, "children", suggestion), _jsxDEV2), suggestion, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, _this);
      } else {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "no-autocomplete",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
            children: "Not found"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, _this);
      }
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-col justify-center items-center ",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: " w-5/12 flex justify-around items-center mt-10  border-green-900 bg-green-300 p-2 rounded-lg",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "font-bold text-2xl",
          children: "Search :  "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          onChange: onChange,
          onKeyDown: onKeyDown,
          value: input,
          className: "border-2 border-green-600 rounded pl-2 w-80",
          placeholder: " Cat Breeds"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          value: input,
          onClick: function onClick() {
            return search(input);
          },
          className: " p-1 ml-2 w-20 rounded transition duration-500 ease-in-out bg-green-500 hover:bg-green-200 transform hover:-translate-y-1 hover:scale-110",
          children: "Find!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("duv", {
        className: "h-44 overflow-auto",
        children: renderAutocomplete()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex justify-center items-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: image.url,
        className: "rounded-2xl shadow-2xl m-5 max-w-md h-64"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex w-3/5 h-64 p-4 ml-5 items-center justify-start  border-8 border-green-600 border-double",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "text-lg font-semibold",
            children: "name: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 13
          }, _this), nameCat, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "text-lg font-semibold",
            children: "temperament: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 13
          }, _this), temperament, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "text-lg font-semibold",
            children: "origin: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, _this), origin, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "text-lg font-semibold ",
            children: "description: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }, _this), description, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "text-lg font-semibold",
            children: "life span: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 13
          }, _this), life_span, " years  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 84
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }, _this)]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRvY29tcGxldGUuanMiXSwibmFtZXMiOlsiVVJMIiwiaW1nVVJMIiwiVVJMbG9hZGluZyIsIkF1dG9jb21wbGV0ZSIsInByb3BzIiwidXNlU3RhdGUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJmaWx0ZXJlZCIsInNldEZpbHRlcmVkIiwiaXNTaG93Iiwic2V0SXNTaG93IiwiaW5wdXQiLCJzZXRJbnB1dCIsImNhdHMiLCJzZXRDYXRzIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImZpbmQiLCJzZXRGaW5kIiwicmVmaW1nIiwic2V0UmVmaW1nIiwibmFtZUNhdCIsInNldE5hbWVDYXQiLCJ0ZW1wZXJhbWVudCIsInNldFRlbXBlcmFtZW50Iiwib3JpZ2luIiwic2V0T3JpZ2luIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImxpZmVfc3BhbiIsInNldExpZmVfc3BhbiIsInVzZUVmZmVjdCIsImdldENhdHMiLCJnZXRJbWFnZSIsImlkIiwiYXhpb3MiLCJnZXQiLCJpbXAiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNhdCIsInNlYXJjaCIsIm5hbWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJyZWZlcmVuY2VfaW1hZ2VfaWQiLCJ1cmwiLCJvbkNoYW5nZSIsImUiLCJzdWdnZXN0aW9ucyIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsIm5ld0ZpbHRlcmVkU3VnZ2VzdGlvbnMiLCJmaWx0ZXIiLCJzdWdnZXN0aW9uIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwib25DbGljayIsImlubmVyVGV4dCIsIm9uS2V5RG93biIsImtleUNvZGUiLCJsZW5ndGgiLCJyZW5kZXJBdXRvY29tcGxldGUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsR0FBRyx3Q0FBVDtBQUNBLElBQU1DLE1BQU0sd0NBQVo7QUFDQSxJ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ZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lNzIyYWZmNjUwOGEwY2ZmNWM5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5jb25zdCBVUkwgPSBgaHR0cHM6Ly9hcGkudGhlY2F0YXBpLmNvbS92MS9icmVlZHNgXHJcbmNvbnN0IGltZ1VSTCA9IGBodHRwczovL2FwaS50aGVjYXRhcGkuY29tL3YxL2ltYWdlc2BcclxuY29uc3QgVVJMbG9hZGluZyA9IGBodHRwczovL3d3dy5reW9yb2xsZW4uY29tL2t5b21lbWJlci9hc3NldHMvaW1nL2xvYWRpbmcuZ2lmYFxyXG5cclxuY29uc3QgQXV0b2NvbXBsZXRlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtmaWx0ZXJlZCwgc2V0RmlsdGVyZWRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpc1Nob3csIHNldElzU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2F0cywgc2V0Q2F0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2ZpbmQsIHNldEZpbmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3JlZmltZywgc2V0UmVmaW1nXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtuYW1lQ2F0LCBzZXROYW1lQ2F0XSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFt0ZW1wZXJhbWVudCwgc2V0VGVtcGVyYW1lbnRdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW29yaWdpbiwgc2V0T3JpZ2luXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2xpZmVfc3Bhbiwgc2V0TGlmZV9zcGFuXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldENhdHMoKVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0SW1hZ2UgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICBsZXQgaW1wID0gYXdhaXQgYXhpb3MuZ2V0KGAke2ltZ1VSTH0vJHtpZH1gKVxyXG4gICAgICBzZXRJbWFnZShpbXAuZGF0YSlcclxuICAgICAgY29uc29sZS5sb2coaW1wKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRDYXRzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IGNhdCA9IGF3YWl0IGF4aW9zLmdldChVUkwpXHJcbiAgICBzZXRDYXRzKGNhdC5kYXRhKVxyXG5cclxuXHJcbiAgfVxyXG5cclxuICBjb25zdCBzZWFyY2ggPSAobmFtZSkgPT4ge1xyXG5cclxuICAgIGNhdHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAobmFtZSA9PT0gaXRlbS5uYW1lKSB7XHJcbiAgICAgICAgc2V0UmVmaW1nKGl0ZW0ucmVmZXJlbmNlX2ltYWdlX2lkKVxyXG4gICAgICAgIHNldE5hbWVDYXQoaXRlbS5uYW1lKVxyXG4gICAgICAgIHNldFRlbXBlcmFtZW50KGl0ZW0udGVtcGVyYW1lbnQpXHJcbiAgICAgICAgc2V0T3JpZ2luKGl0ZW0ub3JpZ2luKVxyXG4gICAgICAgIHNldERlc2NyaXB0aW9uKGl0ZW0uZGVzY3JpcHRpb24pXHJcbiAgICAgICAgc2V0TGlmZV9zcGFuKGl0ZW0ubGlmZV9zcGFuKVxyXG4gICAgICAgIHNldEltYWdlKGl0ZW0uaW1hZ2UudXJsKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbWFnZScsIGl0ZW0uaW1hZ2UpXHJcbiAgICAgICAgLy8geyBnZXRJbWFnZShyZWZpbWcpIH1cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IGUgPT4ge1xyXG4gICAgY29uc3QgeyBzdWdnZXN0aW9ucyB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBpbnB1dCA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcclxuICAgIGNvbnN0IG5ld0ZpbHRlcmVkU3VnZ2VzdGlvbnMgPSBzdWdnZXN0aW9ucy5maWx0ZXIoXHJcbiAgICAgIHN1Z2dlc3Rpb24gPT5cclxuICAgICAgICBzdWdnZXN0aW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihpbnB1dC50b0xvd2VyQ2FzZSgpKSA+IC0xXHJcbiAgICApO1xyXG5cclxuICAgIHNldEFjdGl2ZSgwKTtcclxuICAgIHNldEZpbHRlcmVkKG5ld0ZpbHRlcmVkU3VnZ2VzdGlvbnMpO1xyXG4gICAgc2V0SXNTaG93KHRydWUpO1xyXG4gICAgc2V0SW5wdXQoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKVxyXG4gICAgc2V0RmluZChpbnB1dClcclxuXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DbGljayA9IGUgPT4ge1xyXG4gICAgc2V0QWN0aXZlKDApO1xyXG4gICAgc2V0RmlsdGVyZWQoW10pO1xyXG4gICAgc2V0SXNTaG93KGZhbHNlKTtcclxuICAgIHNldElucHV0KGUuY3VycmVudFRhcmdldC5pbm5lclRleHQpXHJcblxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uS2V5RG93biA9IGUgPT4ge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHsgLy8gZW50ZXIga2V5XHJcbiAgICAgIHNldEFjdGl2ZSgwKTtcclxuICAgICAgc2V0SXNTaG93KGZhbHNlKTtcclxuICAgICAgc2V0SW5wdXQoZmlsdGVyZWRbYWN0aXZlXSlcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzgpIHsgLy8gdXAgYXJyb3dcclxuICAgICAgcmV0dXJuIChhY3RpdmUgPT09IDApID8gbnVsbCA6IHNldEFjdGl2ZShhY3RpdmUgLSAxKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gNDApIHsgLy8gZG93biBhcnJvd1xyXG4gICAgICByZXR1cm4gKGFjdGl2ZSAtIDEgPT09IGZpbHRlcmVkLmxlbmd0aCkgPyBudWxsIDogc2V0QWN0aXZlKGFjdGl2ZSArIDEpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckF1dG9jb21wbGV0ZSA9ICgpID0+IHtcclxuICAgIGlmIChpc1Nob3cgJiYgaW5wdXQpIHtcclxuICAgICAgaWYgKGZpbHRlcmVkLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYXV0b2NvbXBsZXRlXCI+XHJcbiAgICAgICAgICAgIHtmaWx0ZXJlZC5tYXAoKHN1Z2dlc3Rpb24sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IGNsYXNzTmFtZTtcclxuICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IGFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJhY3RpdmVcIjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZX0ga2V5PXtzdWdnZXN0aW9ufSBvbkNsaWNrPXtvbkNsaWNrfSBjbGFzc05hbWU9J2JvcmRlci1iLTIgbGlzdC1kaXNjIGJvcmRlci1kYXNoZWQgYm9yZGVyLWJsYWNrICc+XHJcbiAgICAgICAgICAgICAgICAgIHtzdWdnZXN0aW9ufVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuby1hdXRvY29tcGxldGVcIj5cclxuICAgICAgICAgICAgPGVtPk5vdCBmb3VuZDwvZW0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gPD48Lz47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciAnPlxyXG5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9JyB3LTUvMTIgZmxleCBqdXN0aWZ5LWFyb3VuZCBpdGVtcy1jZW50ZXIgbXQtMTAgIGJvcmRlci1ncmVlbi05MDAgYmctZ3JlZW4tMzAwIHAtMiByb3VuZGVkLWxnJz5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtMnhsJz5TZWFyY2ggOiAgPC9hPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICBvbktleURvd249e29uS2V5RG93bn1cclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2JvcmRlci0yIGJvcmRlci1ncmVlbi02MDAgcm91bmRlZCBwbC0yIHctODAnXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiIENhdCBCcmVlZHNcIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uIHZhbHVlPXtpbnB1dH0gb25DbGljaz17KCkgPT4gc2VhcmNoKGlucHV0KX0gY2xhc3NOYW1lPScgcC0xIG1sLTIgdy0yMCByb3VuZGVkIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0IGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi0yMDAgdHJhbnNmb3JtIGhvdmVyOi10cmFuc2xhdGUteS0xIGhvdmVyOnNjYWxlLTExMCc+RmluZCE8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDxkdXYgY2xhc3NOYW1lPVwiaC00NCBvdmVyZmxvdy1hdXRvXCI+XHJcblxyXG5cclxuICAgICAgICAgIHtyZW5kZXJBdXRvY29tcGxldGUoKX1cclxuICAgICAgICA8L2R1dj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cclxuXHJcbiAgICAgICAgPGltZyBzcmM9e2ltYWdlLnVybH0gY2xhc3NOYW1lPSdyb3VuZGVkLTJ4bCBzaGFkb3ctMnhsIG0tNSBtYXgtdy1tZCBoLTY0JyAvPlxyXG4gICAgICAgIHsvKiA8aW1nIHNyYz17VVJMbG9hZGluZ30vPiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCB3LTMvNSBoLTY0IHAtNCBtbC01IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0ICBib3JkZXItOCBib3JkZXItZ3JlZW4tNjAwIGJvcmRlci1kb3VibGUnPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1zZW1pYm9sZCc+bmFtZTogPC9hPntuYW1lQ2F0fVxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQnPnRlbXBlcmFtZW50OiA8L2E+e3RlbXBlcmFtZW50fVxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQnPm9yaWdpbjogPC9hPntvcmlnaW59XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1zZW1pYm9sZCAnPmRlc2NyaXB0aW9uOiA8L2E+e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQnPmxpZmUgc3BhbjogPC9hPntsaWZlX3NwYW59IHllYXJzICA8YnIgLz5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRvY29tcGxldGU7Il0sInNvdXJjZVJvb3QiOiIifQ==