webpackHotUpdate_N_E("pages/adminSymptom",{

/***/ "./pages/adminSymptom.js":
/*!*******************************!*\
  !*** ./pages/adminSymptom.js ***!
  \*******************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_Auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Auth */ "./components/Auth.js");




var _jsxFileName = "D:\\001Study\\Year3Therm2\\240-311 Distributed\\Final-MiniProject\\CatBreeds\\FrontEnd\\pages\\adminSymptom.js",
    _this = undefined,
    _s = $RefreshSig$();






var URL = "http://localhost/api/disease";

var fetcher = function fetcher(url) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url).then(function (res) {
    return res.data;
  });
};

var adminSymptom = function adminSymptom(_ref) {
  _s();

  var token = _ref.token;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    "disease": [{
      "id": 1,
      "name": "โรคหวัดแมว",
      "symptom1": "อาการเซื่องซึม",
      "symptom2": "หายใจลำบาก ",
      "symptom3": "มีไข้ ไอ จาม มีน้ำมูก",
      "symptom4": "เบื่ออาหาร"
    }]
  }),
      healths = _useState[0],
      setHealths = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      health = _useState2[0],
      setHealth = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      name = _useState3[0],
      setName = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      symptom1 = _useState4[0],
      setSymtom1 = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      symptom2 = _useState5[0],
      setSymtom2 = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      symptom3 = _useState6[0],
      setSymtom3 = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      symptom4 = _useState7[0],
      setSymtom4 = _useState7[1];

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_5__["default"])(URL, fetcher),
      data = _useSWR.data,
      error = _useSWR.error;

  if (!data) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 16
    }, _this);
  }

  console.log('Home', data);

  var printSymtom = function printSymtom(healths) {
    return healths.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "flex flex-wrap border-4 border-double border-green-900 bg-green-300  font-bold w-3/12 h-2/5 m-5  rounded-xl shadow-md",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "h-full w-full break-all overflow-auto pl-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            children: ["ID: ", index + 1]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            children: ["\u0E0A\u0E37\u0E48\u0E2D\u0E42\u0E23\u0E04: ", item.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            children: ["\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 1: ", item.symptom1]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            children: ["\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 2: ", item.symptom2]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            children: ["\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 3: ", item.symptom3]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            children: ["\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 4: ", item.symptom4]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "flex justify-end w-full ",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
              onClick: function onClick() {
                return deleteSymptom(item.id);
              },
              className: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mr-5 ",
              children: "Delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
              onClick: function onClick() {
                return updateSymptom(item.id);
              },
              className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ",
              children: "Update"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, _this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, _this);
    });
  };

  var addSymptom = /*#__PURE__*/function () {
    var _ref2 = Object(D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(name, symptom1, symptom2, symptom3, symptom4) {
      return D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(URL, {
                name: name,
                symptom1: symptom1,
                symptom2: symptom2,
                symptom3: symptom3,
                symptom4: symptom4
              });

            case 2:
              Object(swr__WEBPACK_IMPORTED_MODULE_5__["mutate"])(URL);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function addSymptom(_x, _x2, _x3, _x4, _x5) {
      return _ref2.apply(this, arguments);
    };
  }();

  var deleteSymptom = /*#__PURE__*/function () {
    var _ref3 = Object(D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
      return D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a["delete"]("".concat(URL, "/").concat(id));

            case 2:
              Object(swr__WEBPACK_IMPORTED_MODULE_5__["mutate"])(URL);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function deleteSymptom(_x6) {
      return _ref3.apply(this, arguments);
    };
  }();

  var updateSymptom = /*#__PURE__*/function () {
    var _ref4 = Object(D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {
      return D_001Study_Year3Therm2_240_311_Distributed_Final_MiniProject_CatBreeds_FrontEnd_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.put("".concat(URL, "/").concat(id), {
                name: name,
                symptom1: symptom1,
                symptom2: symptom2,
                symptom3: symptom3,
                symptom4: symptom4
              });

            case 2:
              Object(swr__WEBPACK_IMPORTED_MODULE_5__["mutate"])(URL);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function updateSymptom(_x7) {
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "flex h-screen w-screen flex-col items-center",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("title", {
      children: "AdminSymptom"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
      className: "border-2 border-green-900 bg-green-300 font-bold text-3xl p-2 rounded-lg mt-5",
      children: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E42\u0E23\u0E04\u0E02\u0E2D\u0E07\u0E41\u0E21\u0E27\u0E43\u0E19\u0E23\u0E30\u0E1A\u0E1A"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "flex flex-wrap justify-evenly  w-full h-3/5 overflow-auto mt-5 ",
      children: printSymtom(data.disease)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "flex items-center  border-4 border-green-800 border-dashed bg-green-200 rounded-xl w-1/2 h-2/4 font-bold",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("from", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "flex flex-col  w-full h-full  mt-5",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "flex justify-center ",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: "border-2 border-green-900 bg-green-300 font-bold text-3xl p-2 rounded-lg",
            children: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E42\u0E23\u0E04\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          className: "m-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            children: "\u0E0A\u0E37\u0E48\u0E2D\u0E42\u0E23\u0E04 : "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            type: "text",
            className: "border-2 border-black rounded-md shadow-md ml-5",
            onChange: function onChange(e) {
              return setName(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          className: "m-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            children: "\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 1 : "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            type: "text",
            className: "border-2 border-black rounded-md shadow-md",
            onChange: function onChange(e) {
              return setSymtom1(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          className: "m-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            children: "\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 2 : "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            type: "text",
            className: "border-2 border-black rounded-md shadow-md",
            onChange: function onChange(e) {
              return setSymtom2(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          className: "m-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            children: "\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 3 : "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            type: "text",
            className: "border-2 border-black rounded-md shadow-md",
            onChange: function onChange(e) {
              return setSymtom3(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          className: "m-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            children: "\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 4 : "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            type: "text",
            className: "border-2 border-black rounded-md shadow-md",
            onChange: function onChange(e) {
              return setSymtom4(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "flex justify-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
            className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-28",
            onClick: function onClick() {
              return addSymptom(name, symptom1, symptom2, symptom3, symptom4);
            },
            children: "\u0E15\u0E01\u0E25\u0E07!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "w-screen -mt-8",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 9
  }, _this);
};

_s(adminSymptom, "Du7b2GKPYvcoq6CyDws71+dKWBU=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Object(_components_Auth__WEBPACK_IMPORTED_MODULE_7__["default"])(adminSymptom));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW5TeW1wdG9tLmpzIl0sIm5hbWVzIjpbIlVSTCIsImZldGNoZXIiLCJ1cmwiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiYWRtaW5TeW1wdG9tIiwidG9rZW4iLCJ1c2VTdGF0ZSIsImhlYWx0aHMiLCJzZXRIZWFsdGhzIiwiaGVhbHRoIiwic2V0SGVhbHRoIiwibmFtZSIsInNldE5hbWUiLCJzeW1wdG9tMSIsInNldFN5bXRvbTEiLCJzeW1wdG9tMiIsInNldFN5bXRvbTIiLCJzeW1wdG9tMyIsInNldFN5bXRvbTMiLCJzeW1wdG9tNCIsInNldFN5bXRvbTQiLCJ1c2VTV1IiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJwcmludFN5bXRvbSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImRlbGV0ZVN5bXB0b20iLCJpZCIsInVwZGF0ZVN5bXB0b20iLCJhZGRTeW1wdG9tIiwicG9zdCIsIm11dGF0ZSIsInB1dCIsImRpc2Vhc2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ3aXRoQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsR0FBRyxpQ0FBVDs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxHQUFEO0FBQUEsU0FBU0MsNENBQUssQ0FBQ0MsR0FBTixDQUFVRixHQUFWLEVBQWVHLElBQWYsQ0FBb0IsVUFBQUMsR0FBRztBQUFBLFdBQUlBLEdBQUcsQ0FBQ0MsSUFBUjtBQUFBLEdBQXZCLENBQVQ7QUFBQSxDQUFoQjs7QUFHQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFlO0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGtCQUVGQyxzREFBUSxDQUFDO0FBQ25DLGVBQVcsQ0FDUDtBQUNJLFlBQU0sQ0FEVjtBQUVJLGNBQVEsWUFG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bUIsK0hBQVEsQ0FBQ3BDLFlBQUQsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW5TeW1wdG9tLjUwMjc3MDk2MDA3ZWQ0NGE2NWYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHVzZVNXUiwgeyBtdXRhdGUgfSBmcm9tICdzd3InXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi9jb21wb25lbnRzL0F1dGgnXHJcblxyXG5jb25zdCBVUkwgPSBgaHR0cDovL2xvY2FsaG9zdC9hcGkvZGlzZWFzZWBcclxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGF4aW9zLmdldCh1cmwpLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxyXG5cclxuXHJcbmNvbnN0IGFkbWluU3ltcHRvbSA9ICh7IHRva2VuIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbaGVhbHRocywgc2V0SGVhbHRoc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgXCJkaXNlYXNlXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwi4LmC4Lij4LiE4Lir4Lin4Lix4LiU4LmB4Lih4LinXCIsXHJcbiAgICAgICAgICAgICAgICBcInN5bXB0b20xXCI6IFwi4Lit4Liy4LiB4Liy4Lij4LmA4LiL4Li34LmI4Lit4LiH4LiL4Li24LihXCIsXHJcbiAgICAgICAgICAgICAgICBcInN5bXB0b20yXCI6IFwi4Lir4Liy4Lii4LmD4LiI4Lil4Liz4Lia4Liy4LiBIFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzeW1wdG9tM1wiOiBcIuC4oeC4teC5hOC4guC5iSDguYTguK0g4LiI4Liy4LihIOC4oeC4teC4meC5ieC4s+C4oeC4ueC4gVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzeW1wdG9tNFwiOiBcIuC5gOC4muC4t+C5iOC4reC4reC4suC4q+C4suC4o1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgW2hlYWx0aCwgc2V0SGVhbHRoXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3N5bXB0b20xLCBzZXRTeW10b20xXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3N5bXB0b20yLCBzZXRTeW10b20yXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3N5bXB0b20zLCBzZXRTeW10b20zXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3N5bXB0b200LCBzZXRTeW10b200XSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFVSTCwgZmV0Y2hlcilcclxuICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKCdIb21lJywgZGF0YSk7XHJcblxyXG4gICAgY29uc3QgcHJpbnRTeW10b20gPSAoaGVhbHRocykgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGhlYWx0aHMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBib3JkZXItNCBib3JkZXItZG91YmxlIGJvcmRlci1ncmVlbi05MDAgYmctZ3JlZW4tMzAwICBmb250LWJvbGQgdy0zLzEyIGgtMi81IG0tNSAgcm91bmRlZC14bCBzaGFkb3ctbWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgYnJlYWstYWxsIG92ZXJmbG93LWF1dG8gcGwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5JRDoge2luZGV4ICsgMX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT7guIrguLfguYjguK3guYLguKPguIQ6IHtpdGVtLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+4Lit4Liy4LiB4Liy4Lij4LiX4Li14LmIIDE6IHtpdGVtLnN5bXB0b20xfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPuC4reC4suC4geC4suC4o+C4l+C4teC5iCAyOiB7aXRlbS5zeW1wdG9tMn08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT7guK3guLLguIHguLLguKPguJfguLXguYggMzoge2l0ZW0uc3ltcHRvbTN9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+4Lit4Liy4LiB4Liy4Lij4LiX4Li14LmIIDQ6IHtpdGVtLnN5bXB0b200fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCB3LWZ1bGwgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVN5bXB0b20oaXRlbS5pZCl9IGNsYXNzTmFtZT1cImJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsIG1yLTUgXCI+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHVwZGF0ZVN5bXB0b20oaXRlbS5pZCl9IGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGwgXCI+VXBkYXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBhZGRTeW1wdG9tID0gYXN5bmMgKG5hbWUsIHN5bXB0b20xLCBzeW1wdG9tMiwgc3ltcHRvbTMsIHN5bXB0b200KSA9PiB7XHJcblxyXG4gICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoVVJMLCB7IG5hbWUsIHN5bXB0b20xLCBzeW1wdG9tMiwgc3ltcHRvbTMsIHN5bXB0b200IH0pXHJcbiAgICAgICAgbXV0YXRlKFVSTClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWxldGVTeW1wdG9tID0gYXN5bmMgKGlkKSA9PiB7XHJcblxyXG4gICAgICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShgJHtVUkx9LyR7aWR9YClcclxuICAgICAgICBtdXRhdGUoVVJMKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVTeW1wdG9tID0gYXN5bmMgKGlkKSA9PiB7XHJcblxyXG4gICAgICAgIGF3YWl0IGF4aW9zLnB1dChgJHtVUkx9LyR7aWR9YCwgeyBuYW1lLCBzeW1wdG9tMSwgc3ltcHRvbTIsIHN5bXB0b20zLCBzeW1wdG9tNCB9KVxyXG4gICAgICAgIG11dGF0ZShVUkwpXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtc2NyZWVuIHctc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8dGl0bGU+QWRtaW5TeW1wdG9tPC90aXRsZT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWdyZWVuLTkwMCBiZy1ncmVlbi0zMDAgZm9udC1ib2xkIHRleHQtM3hsIHAtMiByb3VuZGVkLWxnIG10LTVcIj7guKPguLLguKLguIHguLLguKPguYLguKPguITguILguK3guIfguYHguKHguKfguYPguJnguKPguLDguJrguJo8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1ldmVubHkgIHctZnVsbCBoLTMvNSBvdmVyZmxvdy1hdXRvIG10LTUgXCI+XHJcbiAgICAgICAgICAgICAgICB7cHJpbnRTeW10b20oZGF0YS5kaXNlYXNlKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciAgYm9yZGVyLTQgYm9yZGVyLWdyZWVuLTgwMCBib3JkZXItZGFzaGVkIGJnLWdyZWVuLTIwMCByb3VuZGVkLXhsIHctMS8yIGgtMi80IGZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgICA8ZnJvbT48L2Zyb20+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgIHctZnVsbCBoLWZ1bGwgIG10LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ncmVlbi05MDAgYmctZ3JlZW4tMzAwIGZvbnQtYm9sZCB0ZXh0LTN4bCBwLTIgcm91bmRlZC1sZ1wiPuC5gOC4nuC4tOC5iOC4oeC5guC4o+C4hOC5gOC4guC5ieC4suC4quC4ueC5iOC4o+C4sOC4muC4mjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm0tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+4LiK4Li34LmI4Lit4LmC4Lij4LiEIDogPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbWQgc2hhZG93LW1kIG1sLTVcIiBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm0tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+4Lit4Liy4LiB4Liy4Lij4LiX4Li14LmIIDEgOiA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItYmxhY2sgcm91bmRlZC1tZCBzaGFkb3ctbWRcIiBvbkNoYW5nZT17KGUpID0+IHNldFN5bXRvbTEoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm0tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+4Lit4Liy4LiB4Liy4Lij4LiX4Li14LmIIDIgOiA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItYmxhY2sgcm91bmRlZC1tZCBzaGFkb3ctbWRcIiBvbkNoYW5nZT17KGUpID0+IHNldFN5bXRvbTIoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm0tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+4Lit4Liy4LiB4Liy4Lij4LiX4Li14LmIIDMgOiA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItYmxhY2sgcm91bmRlZC1tZCBzaGFkb3ctbWRcIiBvbkNoYW5nZT17KGUpID0+IHNldFN5bXRvbTMoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm0tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+4Lit4Liy4LiB4Liy4Lij4LiX4Li14LmIIDQgOiA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItYmxhY2sgcm91bmRlZC1tZCBzaGFkb3ctbWRcIiBvbkNoYW5nZT17KGUpID0+IHNldFN5bXRvbTQoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsIHctMjhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFN5bXB0b20obmFtZSwgc3ltcHRvbTEsIHN5bXB0b20yLCBzeW1wdG9tMywgc3ltcHRvbTQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDguJXguIHguKXguIchXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctc2NyZWVuIC1tdC04Jz5cclxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKGFkbWluU3ltcHRvbSlcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgdG9rZW46IHJlcS5jb29raWVzLnRva2VuIHx8IFwiXCIgfSB9O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==