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
        className: "flex flex-wrap border-4 border-double border-green-900 bg-green-300 w-5/12 h-2/5 m-5  rounded-xl shadow-md",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "h-full w-full break-all overflow-auto pl-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            children: "ID:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, _this), " ", index + 1, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: "font-bold",
            children: "\u0E0A\u0E37\u0E48\u0E2D\u0E42\u0E23\u0E04:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, _this), " ", item.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: "font-bold",
            children: "\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 1:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, _this), " ", item.symptom1, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: "font-bold",
            children: "\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 2:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, _this), " ", item.symptom2, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: "font-bold",
            children: "\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 3:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, _this), " ", item.symptom3, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: "font-bold",
            children: "\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 4:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, _this), " ", item.symptom4, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "flex justify-end w-full ",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
              onClick: function onClick() {
                return deleteSymptom(item.id);
              },
              className: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mr-5 mb-2 focus:outline-none",
              children: "Delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
              onClick: function onClick() {
                return updateSymptom(item.id);
              },
              className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-2 focus:outline-none",
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
    className: "flex fixed h-screen w-screen flex-col items-center",
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
      className: "flex flex-row justify-around border-2 border-black w-full h-3/5 mt-8",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "flex flex-wrap justify-evenly w-3/5 h-5/6 overflow-auto mt-8 border-4 border-green-800 border-dashed bg-green-200 rounded-xl ",
        children: printSymtom(data.disease)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "flex justify-center items-center border-4 border-green-800 border-dashed bg-green-200 rounded-xl w-1/4 h-5/6 mt-8 font-bold",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "flex flex-col justify-start items-center w-11/12",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "flex",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              className: "border-2 border-green-900 bg-green-300 font-bold text-3xl p-2 rounded-lg",
              children: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E42\u0E23\u0E04\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            className: "grid grid-cols-4 mt-8 w-full",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              children: "\u0E0A\u0E37\u0E48\u0E2D\u0E42\u0E23\u0E04 : "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
              type: "text",
              className: "grid col-span-3 pl-2 border-2 border-black rounded-md shadow-md focus:outline-none",
              onChange: function onChange(e) {
                return setName(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            className: "grid grid-cols-4 mt-2 w-full",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              children: "\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 1 : "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
              type: "text",
              className: "grid col-span-3 pl-2 border-2 border-black rounded-md shadow-md focus:outline-none",
              onChange: function onChange(e) {
                return setSymtom1(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            className: "grid grid-cols-4 mt-2 w-full",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              children: "\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 2 : "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
              type: "text",
              className: "grid col-span-3 pl-2 border-2 border-black rounded-md shadow-md focus:outline-none",
              onChange: function onChange(e) {
                return setSymtom2(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            className: "grid grid-cols-4 mt-2 w-full",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              children: "\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 3 : "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
              type: "text",
              className: "grid col-span-3 pl-2 border-2 border-black rounded-md shadow-md focus:outline-none",
              onChange: function onChange(e) {
                return setSymtom3(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            className: "grid grid-cols-4 mt-2 w-full",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              children: "\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 4 : "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
              type: "text",
              className: "grid col-span-3 pl-2 border-2 border-black rounded-md shadow-md focus:outline-none",
              onChange: function onChange(e) {
                return setSymtom4(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "flex justify-center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
              className: "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-28 mt-8 focus:outline-none",
              onClick: function onClick() {
                return addSymptom(name, symptom1, symptom2, symptom3, symptom4);
              },
              children: "\u0E15\u0E01\u0E25\u0E07!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "w-screen",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW5TeW1wdG9tLmpzIl0sIm5hbWVzIjpbIlVSTCIsImZldGNoZXIiLCJ1cmwiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiYWRtaW5TeW1wdG9tIiwidG9rZW4iLCJ1c2VTdGF0ZSIsImhlYWx0aHMiLCJzZXRIZWFsdGhzIiwiaGVhbHRoIiwic2V0SGVhbHRoIiwibmFtZSIsInNldE5hbWUiLCJzeW1wdG9tMSIsInNldFN5bXRvbTEiLCJzeW1wdG9tMiIsInNldFN5bXRvbTIiLCJzeW1wdG9tMyIsInNldFN5bXRvbTMiLCJzeW1wdG9tNCIsInNldFN5bXRvbTQiLCJ1c2VTV1IiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJwcmludFN5bXRvbSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImRlbGV0ZVN5bXB0b20iLCJpZCIsInVwZGF0ZVN5bXB0b20iLCJhZGRTeW1wdG9tIiwicG9zdCIsIm11dGF0ZSIsInB1dCIsImRpc2Vhc2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ3aXRoQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsR0FBRyxpQ0FBVDs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxHQUFEO0FBQUEsU0FBU0MsNENBQUssQ0FBQ0MsR0FBTixDQUFVRixHQUFWLEVBQWVHLElBQWYsQ0FBb0IsVUFBQUMsR0FBRztBQUFBLFdBQUlBLEdBQUcsQ0FBQ0MsSUFBUjtBQUFBLEdBQXZCLENBQVQ7QUFBQSxDQUFoQjs7QUFHQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFlO0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGtCQUVGQyxzREFBUSxDQUFDO0FBQ25DLGVBQVcsQ0FDUDtBQUNJLFlBQU0sQ0FEVjtBQUVJLGNBQVEsWUFG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RUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXNESCxDQTFJRDs7R0FBTWYsWTtVQXdCc0JpQiwyQzs7OztBQW9IYm1CLCtIQUFRLENBQUNwQyxZQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluU3ltcHRvbS45ZjZiYTc2OTUxNjhkZjkzZjQ1Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB1c2VTV1IsIHsgbXV0YXRlIH0gZnJvbSAnc3dyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vY29tcG9uZW50cy9BdXRoJ1xyXG5cclxuY29uc3QgVVJMID0gYGh0dHA6Ly9sb2NhbGhvc3QvYXBpL2Rpc2Vhc2VgXHJcbmNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBheGlvcy5nZXQodXJsKS50aGVuKHJlcyA9PiByZXMuZGF0YSlcclxuXHJcblxyXG5jb25zdCBhZG1pblN5bXB0b20gPSAoeyB0b2tlbiB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2hlYWx0aHMsIHNldEhlYWx0aHNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIFwiZGlzZWFzZVwiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIuC5guC4o+C4hOC4q+C4p+C4seC4lOC5geC4oeC4p1wiLFxyXG4gICAgICAgICAgICAgICAgXCJzeW1wdG9tMVwiOiBcIuC4reC4suC4geC4suC4o+C5gOC4i+C4t+C5iOC4reC4h+C4i+C4tuC4oVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzeW1wdG9tMlwiOiBcIuC4q+C4suC4ouC5g+C4iOC4peC4s+C4muC4suC4gSBcIixcclxuICAgICAgICAgICAgICAgIFwic3ltcHRvbTNcIjogXCLguKHguLXguYTguILguYkg4LmE4LitIOC4iOC4suC4oSDguKHguLXguJnguYnguLPguKHguLnguIFcIixcclxuICAgICAgICAgICAgICAgIFwic3ltcHRvbTRcIjogXCLguYDguJrguLfguYjguK3guK3guLLguKvguLLguKNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IFtoZWFsdGgsIHNldEhlYWx0aF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtzeW1wdG9tMSwgc2V0U3ltdG9tMV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtzeW1wdG9tMiwgc2V0U3ltdG9tMl0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtzeW1wdG9tMywgc2V0U3ltdG9tM10gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtzeW1wdG9tNCwgc2V0U3ltdG9tNF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihVUkwsIGZldGNoZXIpXHJcbiAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZygnSG9tZScsIGRhdGEpO1xyXG5cclxuICAgIGNvbnN0IHByaW50U3ltdG9tID0gKGhlYWx0aHMpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBoZWFsdGhzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgYm9yZGVyLTQgYm9yZGVyLWRvdWJsZSBib3JkZXItZ3JlZW4tOTAwIGJnLWdyZWVuLTMwMCB3LTUvMTIgaC0yLzUgbS01ICByb3VuZGVkLXhsIHNoYWRvdy1tZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBicmVhay1hbGwgb3ZlcmZsb3ctYXV0byBwbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPklEOjwvYT4ge2luZGV4ICsgMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZSA9ICdmb250LWJvbGQnPuC4iuC4t+C5iOC4reC5guC4o+C4hDo8L2E+IHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWUgPSAnZm9udC1ib2xkJz7guK3guLLguIHguLLguKPguJfguLXguYggMTo8L2E+IHtpdGVtLnN5bXB0b20xfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lID0gJ2ZvbnQtYm9sZCc+4Lit4Liy4LiB4Liy4Lij4LiX4Li14LmIIDI6PC9hPiB7aXRlbS5zeW1wdG9tMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZSA9ICdmb250LWJvbGQnPuC4reC4suC4geC4suC4o+C4l+C4teC5iCAzOjwvYT4ge2l0ZW0uc3ltcHRvbTN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWUgPSAnZm9udC1ib2xkJz7guK3guLLguIHguLLguKPguJfguLXguYggNDo8L2E+IHtpdGVtLnN5bXB0b200fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIHctZnVsbCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlU3ltcHRvbShpdGVtLmlkKX0gY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGwgbXItNSBtYi0yIGZvY3VzOm91dGxpbmUtbm9uZVwiPkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB1cGRhdGVTeW1wdG9tKGl0ZW0uaWQpfSBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsIG1iLTIgZm9jdXM6b3V0bGluZS1ub25lXCI+VXBkYXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBhZGRTeW1wdG9tID0gYXN5bmMgKG5hbWUsIHN5bXB0b20xLCBzeW1wdG9tMiwgc3ltcHRvbTMsIHN5bXB0b200KSA9PiB7XHJcblxyXG4gICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoVVJMLCB7IG5hbWUsIHN5bXB0b20xLCBzeW1wdG9tMiwgc3ltcHRvbTMsIHN5bXB0b200IH0pXHJcbiAgICAgICAgbXV0YXRlKFVSTClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWxldGVTeW1wdG9tID0gYXN5bmMgKGlkKSA9PiB7XHJcblxyXG4gICAgICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShgJHtVUkx9LyR7aWR9YClcclxuICAgICAgICBtdXRhdGUoVVJMKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVTeW1wdG9tID0gYXN5bmMgKGlkKSA9PiB7XHJcblxyXG4gICAgICAgIGF3YWl0IGF4aW9zLnB1dChgJHtVUkx9LyR7aWR9YCwgeyBuYW1lLCBzeW1wdG9tMSwgc3ltcHRvbTIsIHN5bXB0b20zLCBzeW1wdG9tNCB9KVxyXG4gICAgICAgIG11dGF0ZShVUkwpXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZpeGVkIGgtc2NyZWVuIHctc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8dGl0bGU+QWRtaW5TeW1wdG9tPC90aXRsZT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWdyZWVuLTkwMCBiZy1ncmVlbi0zMDAgZm9udC1ib2xkIHRleHQtM3hsIHAtMiByb3VuZGVkLWxnIG10LTVcIj7guKPguLLguKLguIHguLLguKPguYLguKPguITguILguK3guIfguYHguKHguKfguYPguJnguKPguLDguJrguJo8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGp1c3RpZnktYXJvdW5kIGJvcmRlci0yIGJvcmRlci1ibGFjayB3LWZ1bGwgaC0zLzUgbXQtOCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktZXZlbmx5IHctMy81IGgtNS82IG92ZXJmbG93LWF1dG8gbXQtOCBib3JkZXItNCBib3JkZXItZ3JlZW4tODAwIGJvcmRlci1kYXNoZWQgYmctZ3JlZW4tMjAwIHJvdW5kZWQteGwgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3ByaW50U3ltdG9tKGRhdGEuZGlzZWFzZSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYm9yZGVyLTQgYm9yZGVyLWdyZWVuLTgwMCBib3JkZXItZGFzaGVkIGJnLWdyZWVuLTIwMCByb3VuZGVkLXhsIHctMS80IGgtNS82IG10LTggZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIHctMTEvMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItZ3JlZW4tOTAwIGJnLWdyZWVuLTMwMCBmb250LWJvbGQgdGV4dC0zeGwgcC0yIHJvdW5kZWQtbGdcIj7guYDguJ7guLTguYjguKHguYLguKPguITguYDguILguYnguLLguKrguLnguYjguKPguLDguJrguJo8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IG10LTggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT7guIrguLfguYjguK3guYLguKPguIQgOiA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJncmlkIGNvbC1zcGFuLTMgcGwtMiBib3JkZXItMiBib3JkZXItYmxhY2sgcm91bmRlZC1tZCBzaGFkb3ctbWQgZm9jdXM6b3V0bGluZS1ub25lXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IG10LTIgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT7guK3guLLguIHguLLguKPguJfguLXguYggMSA6IDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImdyaWQgY29sLXNwYW4tMyBwbC0yIGJvcmRlci0yIGJvcmRlci1ibGFjayByb3VuZGVkLW1kIHNoYWRvdy1tZCBmb2N1czpvdXRsaW5lLW5vbmVcIiBvbkNoYW5nZT17KGUpID0+IHNldFN5bXRvbTEoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTQgbXQtMiB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPuC4reC4suC4geC4suC4o+C4l+C4teC5iCAyIDogPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZ3JpZCBjb2wtc3Bhbi0zIHBsLTIgYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbWQgc2hhZG93LW1kIGZvY3VzOm91dGxpbmUtbm9uZVwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3ltdG9tMihlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBtdC0yIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+4Lit4Liy4LiB4Liy4Lij4LiX4Li14LmIIDMgOiA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJncmlkIGNvbC1zcGFuLTMgcGwtMiBib3JkZXItMiBib3JkZXItYmxhY2sgcm91bmRlZC1tZCBzaGFkb3ctbWQgZm9jdXM6b3V0bGluZS1ub25lXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRTeW10b20zKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IG10LTIgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT7guK3guLLguIHguLLguKPguJfguLXguYggNCA6IDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImdyaWQgY29sLXNwYW4tMyBwbC0yIGJvcmRlci0yIGJvcmRlci1ibGFjayByb3VuZGVkLW1kIHNoYWRvdy1tZCBmb2N1czpvdXRsaW5lLW5vbmVcIiBvbkNoYW5nZT17KGUpID0+IHNldFN5bXRvbTQoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGwgdy0yOCBtdC04IGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkU3ltcHRvbShuYW1lLCBzeW1wdG9tMSwgc3ltcHRvbTIsIHN5bXB0b20zLCBzeW1wdG9tNClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOC4leC4geC4peC4hyFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1zY3JlZW4nPlxyXG4gICAgICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoYWRtaW5TeW1wdG9tKVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHJlcyB9KSB7XHJcbiAgICByZXR1cm4geyBwcm9wczogeyB0b2tlbjogcmVxLmNvb2tpZXMudG9rZW4gfHwgXCJcIiB9IH07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9