"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/github",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Layout = function(param) {\n    var children = param.children, title = param.title, _footer = param.footer, footer = _footer === void 0 ? true : _footer, _dark = param.dark, dark = _dark === void 0 ? false : _dark;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var handleRouteChange = function(url) {\n            console.log(url);\n            nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();\n        };\n        router.events.on('routeChangeStart', handleRouteChange);\n        router.events.on('routeChangeComplete', function() {\n            return nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();\n        });\n        return function() {\n            router.events.off('routeChangeStart', handleRouteChange);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({\n            'bg-dark': dark\n        }),\n        __source: {\n            fileName: \"/Users/ferparrios/Desktop/fazt/next-simple-portfolio/components/Layout.js\",\n            lineNumber: 26,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/ferparrios/Desktop/fazt/next-simple-portfolio/components/Layout.js\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                className: \"container py-4\",\n                __source: {\n                    fileName: \"/Users/ferparrios/Desktop/fazt/next-simple-portfolio/components/Layout.js\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    title && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: \"text-center\",\n                        __source: {\n                            fileName: \"/Users/ferparrios/Desktop/fazt/next-simple-portfolio/components/Layout.js\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: title\n                    }),\n                    children\n                ]\n            }),\n            footer && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"footer\", {\n                className: \"bg-dark text-light text-center\",\n                __source: {\n                    fileName: \"/Users/ferparrios/Desktop/fazt/next-simple-portfolio/components/Layout.js\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"container p-4\",\n                    __source: {\n                        fileName: \"/Users/ferparrios/Desktop/fazt/next-simple-portfolio/components/Layout.js\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                            __source: {\n                                fileName: \"/Users/ferparrios/Desktop/fazt/next-simple-portfolio/components/Layout.js\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            },\n                            __self: _this,\n                            children: \"\\xa9 Fernando Paredes Rios\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                            __source: {\n                                fileName: \"/Users/ferparrios/Desktop/fazt/next-simple-portfolio/components/Layout.js\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            },\n                            __self: _this,\n                            children: [\n                                \"2017 - \",\n                                new Date().getFullYear()\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            __source: {\n                                fileName: \"/Users/ferparrios/Desktop/fazt/next-simple-portfolio/components/Layout.js\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            },\n                            __self: _this,\n                            children: \"All rights reserved\"\n                        })\n                    ]\n                })\n            })\n        ]\n    }));\n};\n_s(Layout, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNJO0FBQ007QUFDTjtBQUNFOzs7QUFFbkMsR0FBSyxDQUFDSyxNQUFNLEdBQUcsUUFBUSxRQUE4QyxDQUFDO1FBQXBEQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsS0FBSyxTQUFMQSxLQUFLLGtCQUFFQyxNQUFNLEVBQU5BLE1BQU0sd0JBQUcsSUFBSSwwQkFBRUMsSUFBSSxFQUFKQSxJQUFJLHNCQUFHLEtBQUs7O0lBRTVELEdBQUssQ0FBQ0MsTUFBTSxHQUFHUixzREFBUztJQUV4QkQsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZixHQUFLLENBQUNVLGlCQUFpQixHQUFHQyxRQUFRLENBQVJBLEdBQUcsRUFBSSxDQUFDO1lBQ2hDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRztZQUNmVCxzREFBZTtRQUNqQixDQUFDO1FBRURPLE1BQU0sQ0FBQ00sTUFBTSxDQUFDQyxFQUFFLENBQUMsQ0FBa0IsbUJBQUVOLGlCQUFpQjtRQUN0REQsTUFBTSxDQUFDTSxNQUFNLENBQUNDLEVBQUUsQ0FBQyxDQUFxQixzQkFBRSxRQUFRO1lBQUZkLE1BQU0sQ0FBTkEscURBQWM7O1FBRTVELE1BQU0sQ0FBQyxRQUNYLEdBRGlCLENBQUM7WUFDWk8sTUFBTSxDQUFDTSxNQUFNLENBQUNHLEdBQUcsQ0FBQyxDQUFrQixtQkFBRVIsaUJBQWlCO1FBQ3pELENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTSx1RUFDSFMsQ0FBRztRQUFDQyxTQUFTLEVBQUVqQixpREFBVSxDQUFDLENBQUM7WUFBQyxDQUFTLFVBQUVLLElBQUk7UUFBQyxDQUFDOzs7Ozs7OztpRkFDM0NULCtDQUFNOzs7Ozs7OztrRkFDTnNCLENBQUk7Z0JBQUNELFNBQVMsRUFBQyxDQUFnQjs7Ozs7Ozs7b0JBRTVCZCxLQUFLLHlFQUNGZ0IsQ0FBRTt3QkFBQ0YsU0FBUyxFQUFDLENBQWE7Ozs7Ozs7a0NBQUVkLEtBQUs7O29CQUdyQ0QsUUFBUTs7O1lBSVRFLE1BQU0seUVBQ0hBLENBQU07Z0JBQUNhLFNBQVMsRUFBQyxDQUFnQzs7Ozs7OztnR0FDL0NELENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFlOzs7Ozs7Ozs2RkFDM0JFLENBQUU7Ozs7Ozs7c0NBQUMsQ0FBNEI7OzhGQUMvQkMsQ0FBQzs7Ozs7Ozs7Z0NBQUMsQ0FBTztnQ0FBQyxHQUFHLENBQUNDLElBQUksR0FBR0MsV0FBVzs7OzZGQUNoQ0YsQ0FBQzs7Ozs7OztzQ0FBQyxDQUFtQjs7Ozs7OztBQVFwQyxDQUFDO0dBNUNLbkIsTUFBTTs7UUFFS0gsa0RBQVM7OztLQUZwQkcsTUFBTTtBQThDWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzUxNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9OYXZiYXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcydcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCB0aXRsZSwgZm9vdGVyID0gdHJ1ZSwgZGFyayA9IGZhbHNlIH0pID0+IHtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSB1cmwgPT4ge1xuICAgICAgY29uc29sZS5sb2codXJsKVxuICAgICAgTlByb2dyZXNzLnN0YXJ0KClcbiAgICB9XG5cbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlUm91dGVDaGFuZ2UpXG4gICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyAnYmctZGFyayc6IGRhcmsgfSl9PlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIHB5LTRcIj5cbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlICYmIChcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPnt0aXRsZX08L2gxPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L21haW4+XG5cbiAgICAgIHtcbiAgICAgICAgZm9vdGVyICYmIChcbiAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLWRhcmsgdGV4dC1saWdodCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC00XCI+XG4gICAgICAgICAgICAgIDxoMT4mY29weTsgRmVybmFuZG8gUGFyZWRlcyBSaW9zPC9oMT5cbiAgICAgICAgICAgICAgPHA+MjAxNyAtIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9PC9wPlxuICAgICAgICAgICAgICA8cD5BbGwgcmlnaHRzIHJlc2VydmVkPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICA8L2Rpdj5cblxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwibmFtZXMiOlsiTmF2YmFyIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiTlByb2dyZXNzIiwiY2xhc3NOYW1lcyIsIkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJmb290ZXIiLCJkYXJrIiwicm91dGVyIiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwic3RhcnQiLCJldmVudHMiLCJvbiIsImRvbmUiLCJvZmYiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwiaDEiLCJwIiwiRGF0ZSIsImdldEZ1bGxZZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

});