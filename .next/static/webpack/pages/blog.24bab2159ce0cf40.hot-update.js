"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile */ \"./profile.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined, _this1 = undefined, _this2 = undefined;\nvar PostCard = function(post) {\n    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"col-md-4\",\n        __source: {\n            fileName: \"/Users/ferparrios/Desktop/fazt/next-simple-portfolio/pages/blog.js\",\n            lineNumber: 5,\n            columnNumber: 3\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"card bg-dark\",\n            __source: {\n                fileName: \"/Users/ferparrios/Desktop/fazt/next-simple-portfolio/pages/blog.js\",\n                lineNumber: 6,\n                columnNumber: 5\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"overflow\",\n                    __source: {\n                        fileName: \"/Users/ferparrios/Desktop/fazt/next-simple-portfolio/pages/blog.js\",\n                        lineNumber: 7,\n                        columnNumber: 7\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        src: post.imageUrl,\n                        alt: \"\",\n                        __source: {\n                            fileName: \"/Users/ferparrios/Desktop/fazt/next-simple-portfolio/pages/blog.js\",\n                            lineNumber: 8,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"card-body\",\n                    __source: {\n                        fileName: \"/Users/ferparrios/Desktop/fazt/next-simple-portfolio/pages/blog.js\",\n                        lineNumber: 10,\n                        columnNumber: 7\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                            __source: {\n                                fileName: \"/Users/ferparrios/Desktop/fazt/next-simple-portfolio/pages/blog.js\",\n                                lineNumber: 11,\n                                columnNumber: 9\n                            },\n                            __self: _this,\n                            children: post.title\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            __source: {\n                                fileName: \"/Users/ferparrios/Desktop/fazt/next-simple-portfolio/pages/blog.js\",\n                                lineNumber: 12,\n                                columnNumber: 9\n                            },\n                            __self: _this,\n                            children: post.content\n                        })\n                    ]\n                })\n            ]\n        })\n    });\n};\n_c = PostCard;\nvar Blog = function() {\n    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        footer: false,\n        dark: true,\n        title: \"My Blog\",\n        __source: {\n            fileName: \"/Users/ferparrios/Desktop/fazt/next-simple-portfolio/pages/blog.js\",\n            lineNumber: 19,\n            columnNumber: 3\n        },\n        __self: _this2,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"row\",\n            __source: {\n                fileName: \"/Users/ferparrios/Desktop/fazt/next-simple-portfolio/pages/blog.js\",\n                lineNumber: 20,\n                columnNumber: 5\n            },\n            __self: _this2,\n            children: _profile__WEBPACK_IMPORTED_MODULE_2__.posts.map(function(post) {\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PostCard, {\n                    post: post,\n                    __source: {\n                        fileName: \"/Users/ferparrios/Desktop/fazt/next-simple-portfolio/pages/blog.js\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    },\n                    __self: _this1\n                });\n            })\n        })\n    });\n};\n_c1 = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c, _c1;\n$RefreshReg$(_c, \"PostCard\");\n$RefreshReg$(_c1, \"Blog\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUM7QUFDUDs7QUFFbEMsR0FBSyxDQUFDRSxRQUFRLEdBQUcsUUFBUSxDQUFQQyxJQUFJLEVBQUssQ0FBQzt5RUFDekJDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQVU7Ozs7Ozs7d0ZBQ3RCRCxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFjOzs7Ozs7OztxRkFDMUJELENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFVOzs7Ozs7O21HQUN0QkMsQ0FBRzt3QkFBQ0MsR0FBRyxFQUFFSixJQUFJLENBQUNLLFFBQVE7d0JBQUVDLEdBQUcsRUFBQyxDQUFFOzs7Ozs7Ozs7c0ZBRWhDTCxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBVzs7Ozs7Ozs7NkZBQ3ZCSyxDQUFFOzs7Ozs7O3NDQUFFUCxJQUFJLENBQUNRLEtBQUs7OzZGQUNkQyxDQUFDOzs7Ozs7O3NDQUFFVCxJQUFJLENBQUNVLE9BQU87Ozs7Ozs7QUFJeEIsQ0FBQztLQVpLWCxRQUFRO0FBY2QsR0FBSyxDQUFDWSxJQUFJLEdBQUcsUUFDYjtrQkFBRSxNQUFNLHdEQUFMZCwwREFBTTtRQUFDZSxNQUFNLEVBQUUsS0FBSztRQUFFQyxJQUFJO1FBQUNMLEtBQUssRUFBQyxDQUFTOzs7Ozs7O3VGQUN4Q1AsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBSzs7Ozs7OztzQkFFaEJKLCtDQUFTLENBQUNFLFFBQVEsQ0FBUkEsSUFBSTs4QkFDWixNQUFNLHdEQUFMRCxRQUFRO29CQUFDQyxJQUFJLEVBQUVBLElBQUk7Ozs7Ozs7Ozs7OztNQUx4QlcsSUFBSTtBQVlWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcz9jYmI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBwb3N0cyB9IGZyb20gJy4uL3Byb2ZpbGUnXG5cbmNvbnN0IFBvc3RDYXJkID0gKHBvc3QpID0+IHtcbiAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBiZy1kYXJrXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93XCI+XG4gICAgICAgIDxpbWcgc3JjPXtwb3N0LmltYWdlVXJsfSBhbHQ9XCJcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICA8aDE+e3Bvc3QudGl0bGV9PC9oMT5cbiAgICAgICAgPHA+e3Bvc3QuY29udGVudH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG59XG5cbmNvbnN0IEJsb2cgPSAoKSA9PiAoXG4gIDxMYXlvdXQgZm9vdGVyPXtmYWxzZX0gZGFyayB0aXRsZT1cIk15IEJsb2dcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAge1xuICAgICAgICBwb3N0cy5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgPFBvc3RDYXJkIHBvc3Q9e3Bvc3R9IC8+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgPC9kaXY+XG4gIDwvTGF5b3V0PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvZztcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJwb3N0cyIsIlBvc3RDYXJkIiwicG9zdCIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImltYWdlVXJsIiwiYWx0IiwiaDEiLCJ0aXRsZSIsInAiLCJjb250ZW50IiwiQmxvZyIsImZvb3RlciIsImRhcmsiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog.js\n");

/***/ })

});