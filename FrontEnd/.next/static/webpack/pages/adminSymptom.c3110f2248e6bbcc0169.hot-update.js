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
      lineNumber: 36,
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
            lineNumber: 45,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            children: ["\u0E0A\u0E37\u0E48\u0E2D\u0E42\u0E23\u0E04: ", item.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            children: ["\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 1: ", item.symptom1]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            children: ["\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 2: ", item.symptom2]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            children: ["\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 3: ", item.symptom3]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            children: ["\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 4: ", item.symptom4]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
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
              lineNumber: 58,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
              onClick: function onClick() {
                return updateSymptom(item.id);
              },
              className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ",
              children: "Update"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, _this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
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
      lineNumber: 96,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
      className: "border-2 border-green-900 bg-green-300 font-bold text-3xl p-2 rounded-lg mt-5",
      children: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E42\u0E23\u0E04\u0E02\u0E2D\u0E07\u0E41\u0E21\u0E27\u0E43\u0E19\u0E23\u0E30\u0E1A\u0E1A"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "flex flex-wrap justify-evenly  w-full h-3/5 overflow-auto mt-5 ",
      children: printSymtom(data.disease)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "flex items-center  border-4 border-green-800 border-dashed bg-green-200 rounded-xl w-1/2 h-2/4 font-bold",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "flex flex-col  w-full h-full  mt-5",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "flex justify-center ",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: "border-2 border-green-900 bg-green-300 font-bold text-3xl p-2 rounded-lg",
            children: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E42\u0E23\u0E04\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          className: "m-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            children: "\u0E0A\u0E37\u0E48\u0E2D\u0E42\u0E23\u0E04 : "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            type: "text",
            className: "border-2 border-black rounded-md shadow-md ml-5",
            onChange: function onChange(e) {
              return setName(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          className: "m-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            children: "\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 1 : "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            type: "text",
            className: "border-2 border-black rounded-md shadow-md",
            onChange: function onChange(e) {
              return setSymtom1(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          className: "m-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            children: "\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 2 : "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            type: "text",
            className: "border-2 border-black rounded-md shadow-md",
            onChange: function onChange(e) {
              return setSymtom2(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          className: "m-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            children: "\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 3 : "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            type: "text",
            className: "border-2 border-black rounded-md shadow-md",
            onChange: function onChange(e) {
              return setSymtom3(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          className: "m-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            children: "\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 4 : "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            type: "text",
            className: "border-2 border-black rounded-md shadow-md",
            onChange: function onChange(e) {
              return setSymtom4(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 21
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
            lineNumber: 130,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "w-screen -mt-8",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 9
  }, _this);
};

_s(adminSymptom, "Du7b2GKPYvcoq6CyDws71+dKWBU=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (adminSymptom);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW5TeW1wdG9tLmpzIl0sIm5hbWVzIjpbIlVSTCIsImZldGNoZXIiLCJ1cmwiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiYWRtaW5TeW1wdG9tIiwidG9rZW4iLCJ1c2VTdGF0ZSIsImhlYWx0aHMiLCJzZXRIZWFsdGhzIiwiaGVhbHRoIiwic2V0SGVhbHRoIiwibmFtZSIsInNldE5hbWUiLCJzeW1wdG9tMSIsInNldFN5bXRvbTEiLCJzeW1wdG9tMiIsInNldFN5bXRvbTIiLCJzeW1wdG9tMyIsInNldFN5bXRvbTMiLCJzeW1wdG9tNCIsInNldFN5bXRvbTQiLCJ1c2VTV1IiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJwcmludFN5bXRvbSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImRlbGV0ZVN5bXB0b20iLCJpZCIsInVwZGF0ZVN5bXB0b20iLCJhZGRTeW1wdG9tIiwicG9zdCIsIm11dGF0ZSIsInB1dCIsImRpc2Vhc2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEdBQUcsaUNBQVQ7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLFNBQVNDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUYsR0FBVixFQUFlRyxJQUFmLENBQW9CLFVBQUFDLEdBQUc7QUFBQSxXQUFJQSxHQUFHLENBQUNDLElBQVI7QUFBQSxHQUF2QixDQUFUO0FBQUEsQ0FBaEI7O0FBR0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxrQkFFRkMsc0RBQVEsQ0FBQztBQUNuQyxlQUFXLENBQ1A7QUFDSSxZQUFNLENBRFY7QUFFSSxjQUFRLFlBRlo7QUFHSSxrQkFBWSxnQkFIaEI7QUFJSSxrQkFBWSxhQUpoQjtBQUtJLGtCQUFZLHVCQUxoQjtBQU1JLGtCQUFZO0FBTmhCLEtBRE87QUFEd0IsR0FBRCxDQUZOO0FBQUEsTUFFekJDLE9BRnlCO0FBQUEsTUFFaEJDLFVBRmdCOztBQUFBLG1CQWVKRixzREFBUSxDQUFDLEVBQUQsQ0FmSjtBQUFBLE1BZXpCRyxNQWZ5QjtBQUFBLE1BZWpCQyxTQWZpQjs7QUFBQSxtQkFnQlJKLHNEQUFRLENBQUMsRUFBRCxDQWhCQTtBQUFBLE1BZ0J6QkssSUFoQnlCO0FBQUEsTUFnQm5CQyxPQWhCbUI7O0FBQUEsbUJBaUJETixzREFBUSxDQUFDLEVBQUQsQ0FqQlA7QUFBQSxNQWlCekJPLFFBakJ5QjtBQUFBLE1BaUJmQyxVQWpCZTs7QUFBQSxtQkFrQkRSLHNEQUFRLENBQUMsRUFBRCxDQWxCUDtBQUFBLE1Ba0J6QlMsUUFsQnlCO0FBQUEsTUFrQmZDLFVBbEJlOztBQUFBLG1CQW1CRFYsc0RBQVEsQ0FBQyxFQUFELENBbkJQO0FBQUEsTUFtQnpCVyxRQW5CeUI7QUFBQSxNQW1CZkMsVUFuQmU7O0FBQUEsbUJBb0JEWixzREFBUSxDQUFDLEVBQUQsQ0FwQlA7QUFBQSxNQW9CekJhLFFBcEJ5QjtBQUFBLE1Bb0JmQyxVQXBCZTs7QUFBQSxnQkF3QlJDLG1EQUFNLENBQUN6QixHQUFELEVBQU1DLE9BQU4sQ0F4QkU7QUFBQSxNQXdCeEJNLElBeEJ3QixXQXdCeEJBLElBeEJ3QjtBQUFBLE1Bd0JsQm1CLEtBeEJrQixXQXdCbEJBLEtBeEJrQjs7QUF5QmhDLE1BQUksQ0FBQ25CLElBQUwsRUFBVztBQUNQLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDSDs7QUFDRG9CLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JyQixJQUFwQjs7QUFFQSxNQUFNc0IsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ2xCLE9BQUQsRUFBYTtBQUM3QixXQUNJQSxPQUFPLENBQUNtQixHQUFSLENBQVksVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsMEJBQ1I7QUFBaUIsaUJBQVMsRUFBQyx1SEFBM0I7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsNENBQWY7QUFBQSxrQ0FDSTtBQUFBLCtCQUFRQSxLQUFLLEdBQUcsQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQUdJO0FBQUEsdUVBQWFELElBQUksQ0FBQ2hCLElBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISixlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkosZUFLSTtBQUFBLCtFQUFnQmdCLElBQUksQ0FBQ2QsUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKLGVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSixlQU9JO0FBQUEsK0VBQWdCYyxJQUFJLENBQUNaLFFBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQSixlQVFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkosZUFTSTtBQUFBLCtFQUFnQlksSUFBSSxDQUFDVixRQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEosZUFVSTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZKLGVBV0k7QUFBQSwrRUFBZ0JVLElBQUksQ0FBQ1IsUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhKLGVBWUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFaSixlQWFJO0FBQUsscUJBQVMsRUFBQywwQkFBZjtBQUFBLG9DQUNJO0FBQVEscUJBQU8sRUFBRTtBQUFBLHVCQUFNVSxhQUFhLENBQUNGLElBQUksQ0FBQ0csRUFBTixDQUFuQjtBQUFBLGVBQWpCO0FBQStDLHVCQUFTLEVBQUMsK0VBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUk7QUFBUSxxQkFBTyxFQUFFO0FBQUEsdUJBQU1DLGFBQWEsQ0FBQ0osSUFBSSxDQUFDRyxFQUFOLENBQW5CO0FBQUEsZUFBakI7QUFBK0MsdUJBQVMsRUFBQyw0RUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLFNBQVVGLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURRO0FBQUEsS0FBWixDQURKO0FBMEJILEdBM0JEOztBQStCQSxNQUFNSSxVQUFVO0FBQUEseVhBQUcsaUJBQU9yQixJQUFQLEVBQWFFLFFBQWIsRUFBdUJFLFFBQXZCLEVBQWlDRSxRQUFqQyxFQUEyQ0UsUUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRVRwQiw0Q0FBSyxDQUFDa0MsSUFBTixDQUFXckMsR0FBWCxFQUFnQjtBQUFFZSxvQkFBSSxFQUFKQSxJQUFGO0FBQVFFLHdCQUFRLEVBQVJBLFFBQVI7QUFBa0JFLHdCQUFRLEVBQVJBLFFBQWxCO0FBQTRCRSx3QkFBUSxFQUFSQSxRQUE1QjtBQUFzQ0Usd0JBQVEsRUFBUkE7QUFBdEMsZUFBaEIsQ0FGUzs7QUFBQTtBQUdmZSxnRUFBTSxDQUFDdEMsR0FBRCxDQUFOOztBQUhlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVZvQyxVQUFVO0FBQUE7QUFBQTtBQUFBLEtBQWhCOztBQU1BLE1BQU1ILGFBQWE7QUFBQSx5WEFBRyxrQkFBT0MsRUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFWi9CLDRDQUFLLFVBQUwsV0FBZ0JILEdBQWhCLGNBQXVCa0MsRUFBdkIsRUFGWTs7QUFBQTtBQUdsQkksZ0VBQU0sQ0FBQ3RDLEdBQUQsQ0FBTjs7QUFIa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBYmlDLGFBQWE7QUFBQTtBQUFBO0FBQUEsS0FBbkI7O0FBT0EsTUFBTUUsYUFBYTtBQUFBLHlYQUFHLGtCQUFPRCxFQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVaL0IsNENBQUssQ0FBQ29DLEdBQU4sV0FBYXZDLEdBQWIsY0FBb0JrQyxFQUFwQixHQUEwQjtBQUFFbkIsb0JBQUksRUFBSkEsSUFBRjtBQUFRRSx3QkFBUSxFQUFSQSxRQUFSO0FBQWtCRSx3QkFBUSxFQUFSQSxRQUFsQjtBQUE0QkUsd0JBQVEsRUFBUkEsUUFBNUI7QUFBc0NFLHdCQUFRLEVBQVJBO0FBQXRDLGVBQTFCLENBRlk7O0FBQUE7QUFHbEJlLGdFQUFNLENBQUN0QyxHQUFELENBQU47O0FBSGtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWJtQyxhQUFhO0FBQUE7QUFBQTtBQUFBLEtBQW5COztBQVVBLHNCQUNJO0FBQUssYUFBUyxFQUFDLDhDQUFmO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUcsZUFBUyxFQUFDLCtFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFHSTtBQUFLLGVBQVMsRUFBQyxpRUFBZjtBQUFBLGdCQUNLTixXQUFXLENBQUN0QixJQUFJLENBQUNpQyxPQUFOO0FBRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixlQVFJO0FBQUssZUFBUyxFQUFDLDBHQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLG9DQUFmO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLHNCQUFmO0FBQUEsa0NBQ0k7QUFBRyxxQkFBUyxFQUFDLDBFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFLSTtBQUFNLG1CQUFTLEVBQUMsS0FBaEI7QUFBQSxrQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQU8sZ0JBQUksRUFBQyxNQUFaO0FBQW1CLHFCQUFTLEVBQUMsaURBQTdCO0FBQStFLG9CQUFRLEVBQUUsa0JBQUNDLENBQUQ7QUFBQSxxQkFBT3pCLE9BQU8sQ0FBQ3lCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWQ7QUFBQTtBQUF6RjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSixlQVNJO0FBQU0sbUJBQVMsRUFBQyxLQUFoQjtBQUFBLGtDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBTyxnQkFBSSxFQUFDLE1BQVo7QUFBbUIscUJBQVMsRUFBQyw0Q0FBN0I7QUFBMEUsb0JBQVEsRUFBRSxrQkFBQ0YsQ0FBRDtBQUFBLHFCQUFPdkIsVUFBVSxDQUFDdUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBakI7QUFBQTtBQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFUSixlQWFJO0FBQU0sbUJBQVMsRUFBQyxLQUFoQjtBQUFBLGtDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBTyxnQkFBSSxFQUFDLE1BQVo7QUFBbUIscUJBQVMsRUFBQyw0Q0FBN0I7QUFBMEUsb0JBQVEsRUFBRSxrQkFBQ0YsQ0FBRDtBQUFBLHFCQUFPckIsVUFBVSxDQUFDcUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBakI7QUFBQTtBQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiSixlQWlCSTtBQUFNLG1CQUFTLEVBQUMsS0FBaEI7QUFBQSxrQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQU8sZ0JBQUksRUFBQyxNQUFaO0FBQW1CLHFCQUFTLEVBQUMsNENBQTdCO0FBQTBFLG9CQUFRLEVBQUUsa0JBQUNGLENBQUQ7QUFBQSxxQkFBT25CLFVBQVUsQ0FBQ21CLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWpCO0FBQUE7QUFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakJKLGVBcUJJO0FBQU0sbUJBQVMsRUFBQyxLQUFoQjtBQUFBLGtDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBTyxnQkFBSSxFQUFDLE1BQVo7QUFBbUIscUJBQVMsRUFBQyw0Q0FBN0I7QUFBMEUsb0JBQVEsRUFBRSxrQkFBQ0YsQ0FBRDtBQUFBLHFCQUFPakIsVUFBVSxDQUFDaUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBakI7QUFBQTtBQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyQkosZUF5Qkk7QUFBSyxtQkFBUyxFQUFDLHFCQUFmO0FBQUEsaUNBQ0k7QUFBUSxxQkFBUyxFQUFDLGdGQUFsQjtBQUNJLG1CQUFPLEVBQUU7QUFBQSxxQkFDTFAsVUFBVSxDQUFDckIsSUFBRCxFQUFPRSxRQUFQLEVBQWlCRSxRQUFqQixFQUEyQkUsUUFBM0IsRUFBcUNFLFFBQXJDLENBREw7QUFBQSxhQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJKLGVBNkNJO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUEsNkJBQ0kscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE3Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFtREgsQ0F2SUQ7O0dBQU1mLFk7VUF3QnNCaUIsMkM7Ozs7QUFpSGJqQiwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pblN5bXB0b20uYzMxMTBmMjI0OGU2YmJjYzAxNjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgdXNlU1dSLCB7IG11dGF0ZSB9IGZyb20gJ3N3cidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcclxuXHJcbmNvbnN0IFVSTCA9IGBodHRwOi8vbG9jYWxob3N0L2FwaS9kaXNlYXNlYFxyXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gYXhpb3MuZ2V0KHVybCkudGhlbihyZXMgPT4gcmVzLmRhdGEpXHJcblxyXG5cclxuY29uc3QgYWRtaW5TeW1wdG9tID0gKHsgdG9rZW4gfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtoZWFsdGhzLCBzZXRIZWFsdGhzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBcImRpc2Vhc2VcIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCLguYLguKPguITguKvguKfguLHguJTguYHguKHguKdcIixcclxuICAgICAgICAgICAgICAgIFwic3ltcHRvbTFcIjogXCLguK3guLLguIHguLLguKPguYDguIvguLfguYjguK3guIfguIvguLbguKFcIixcclxuICAgICAgICAgICAgICAgIFwic3ltcHRvbTJcIjogXCLguKvguLLguKLguYPguIjguKXguLPguJrguLLguIEgXCIsXHJcbiAgICAgICAgICAgICAgICBcInN5bXB0b20zXCI6IFwi4Lih4Li14LmE4LiC4LmJIOC5hOC4rSDguIjguLLguKEg4Lih4Li14LiZ4LmJ4Liz4Lih4Li54LiBXCIsXHJcbiAgICAgICAgICAgICAgICBcInN5bXB0b200XCI6IFwi4LmA4Lia4Li34LmI4Lit4Lit4Liy4Lir4Liy4LijXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBbaGVhbHRoLCBzZXRIZWFsdGhdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc3ltcHRvbTEsIHNldFN5bXRvbTFdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc3ltcHRvbTIsIHNldFN5bXRvbTJdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc3ltcHRvbTMsIHNldFN5bXRvbTNdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc3ltcHRvbTQsIHNldFN5bXRvbTRdID0gdXNlU3RhdGUoJycpXHJcblxyXG5cclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoVVJMLCBmZXRjaGVyKVxyXG4gICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coJ0hvbWUnLCBkYXRhKTtcclxuXHJcbiAgICBjb25zdCBwcmludFN5bXRvbSA9IChoZWFsdGhzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgaGVhbHRocy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGJvcmRlci00IGJvcmRlci1kb3VibGUgYm9yZGVyLWdyZWVuLTkwMCBiZy1ncmVlbi0zMDAgIGZvbnQtYm9sZCB3LTMvMTIgaC0yLzUgbS01ICByb3VuZGVkLXhsIHNoYWRvdy1tZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBicmVhay1hbGwgb3ZlcmZsb3ctYXV0byBwbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPklEOiB7aW5kZXggKyAxfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPuC4iuC4t+C5iOC4reC5guC4o+C4hDoge2l0ZW0ubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT7guK3guLLguIHguLLguKPguJfguLXguYggMToge2l0ZW0uc3ltcHRvbTF9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+4Lit4Liy4LiB4Liy4Lij4LiX4Li14LmIIDI6IHtpdGVtLnN5bXB0b20yfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPuC4reC4suC4geC4suC4o+C4l+C4teC5iCAzOiB7aXRlbS5zeW1wdG9tM308L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT7guK3guLLguIHguLLguKPguJfguLXguYggNDoge2l0ZW0uc3ltcHRvbTR9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIHctZnVsbCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlU3ltcHRvbShpdGVtLmlkKX0gY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGwgbXItNSBcIj5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdXBkYXRlU3ltcHRvbShpdGVtLmlkKX0gY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbCBcIj5VcGRhdGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGNvbnN0IGFkZFN5bXB0b20gPSBhc3luYyAobmFtZSwgc3ltcHRvbTEsIHN5bXB0b20yLCBzeW1wdG9tMywgc3ltcHRvbTQpID0+IHtcclxuXHJcbiAgICAgICAgYXdhaXQgYXhpb3MucG9zdChVUkwsIHsgbmFtZSwgc3ltcHRvbTEsIHN5bXB0b20yLCBzeW1wdG9tMywgc3ltcHRvbTQgfSlcclxuICAgICAgICBtdXRhdGUoVVJMKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZVN5bXB0b20gPSBhc3luYyAoaWQpID0+IHtcclxuXHJcbiAgICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKGAke1VSTH0vJHtpZH1gKVxyXG4gICAgICAgIG11dGF0ZShVUkwpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVN5bXB0b20gPSBhc3luYyAoaWQpID0+IHtcclxuXHJcbiAgICAgICAgYXdhaXQgYXhpb3MucHV0KGAke1VSTH0vJHtpZH1gLCB7IG5hbWUsIHN5bXB0b20xLCBzeW1wdG9tMiwgc3ltcHRvbTMsIHN5bXB0b200IH0pXHJcbiAgICAgICAgbXV0YXRlKFVSTClcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1zY3JlZW4gdy1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDx0aXRsZT5BZG1pblN5bXB0b208L3RpdGxlPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItZ3JlZW4tOTAwIGJnLWdyZWVuLTMwMCBmb250LWJvbGQgdGV4dC0zeGwgcC0yIHJvdW5kZWQtbGcgbXQtNVwiPuC4o+C4suC4ouC4geC4suC4o+C5guC4o+C4hOC4guC4reC4h+C5geC4oeC4p+C5g+C4meC4o+C4sOC4muC4mjwvYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWV2ZW5seSAgdy1mdWxsIGgtMy81IG92ZXJmbG93LWF1dG8gbXQtNSBcIj5cclxuICAgICAgICAgICAgICAgIHtwcmludFN5bXRvbShkYXRhLmRpc2Vhc2UpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyICBib3JkZXItNCBib3JkZXItZ3JlZW4tODAwIGJvcmRlci1kYXNoZWQgYmctZ3JlZW4tMjAwIHJvdW5kZWQteGwgdy0xLzIgaC0yLzQgZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgIHctZnVsbCBoLWZ1bGwgIG10LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ncmVlbi05MDAgYmctZ3JlZW4tMzAwIGZvbnQtYm9sZCB0ZXh0LTN4bCBwLTIgcm91bmRlZC1sZ1wiPuC5gOC4nuC4tOC5iOC4oeC5guC4o+C4hOC5gOC4guC5ieC4suC4quC4ueC5iOC4o+C4sOC4muC4mjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPuC4iuC4t+C5iOC4reC5guC4o+C4hCA6IDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbWQgc2hhZG93LW1kIG1sLTVcIiBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+4Lit4Liy4LiB4Liy4Lij4LiX4Li14LmIIDEgOiA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ibGFjayByb3VuZGVkLW1kIHNoYWRvdy1tZFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3ltdG9tMShlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm0tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT7guK3guLLguIHguLLguKPguJfguLXguYggMiA6IDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbWQgc2hhZG93LW1kXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRTeW10b20yKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPuC4reC4suC4geC4suC4o+C4l+C4teC5iCAzIDogPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItYmxhY2sgcm91bmRlZC1tZCBzaGFkb3ctbWRcIiBvbkNoYW5nZT17KGUpID0+IHNldFN5bXRvbTMoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+4Lit4Liy4LiB4Liy4Lij4LiX4Li14LmIIDQgOiA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ibGFjayByb3VuZGVkLW1kIHNoYWRvdy1tZFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3ltdG9tNChlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGwgdy0yOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFN5bXB0b20obmFtZSwgc3ltcHRvbTEsIHN5bXB0b20yLCBzeW1wdG9tMywgc3ltcHRvbTQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg4LiV4LiB4Lil4LiHIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LXNjcmVlbiAtbXQtOCc+XHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZG1pblN5bXB0b21cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgdG9rZW46IHJlcS5jb29raWVzLnRva2VuIHx8IFwiXCIgfSB9O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==