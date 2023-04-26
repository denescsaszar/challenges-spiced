"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/CarRace/index.js":
/*!*************************************!*\
  !*** ./components/CarRace/index.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CarRace; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Winner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Winner */ \"./components/Winner/index.js\");\n/* harmony import */ var _CarRace_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CarRace.styled */ \"./components/CarRace/CarRace.styled.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/utils */ \"./utils/utils.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst finishLine = 200;\nfunction CarRace() {\n    _s();\n    const [cars, setCars] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_utils__WEBPACK_IMPORTED_MODULE_4__.initialCars);\n    function moveCar(clickedCar) {\n        const coveredDistance = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.getRandomDistance)();\n        console.log(\"clickedCar\", clickedCar);\n        console.log(\"coveredDistance\", coveredDistance);\n        setCars(cars.map((car)=>{\n            if (clickedCar.emoji === car.emoji) {\n                return {\n                    ...car,\n                    position: {\n                        x: car.position.x + coveredDistance,\n                        lastDistance: coveredDistance\n                    }\n                };\n            }\n            return car;\n        }));\n    }\n    const winner = cars.find((car)=>car.position.x >= finishLine);\n    console.log(\"winner\", winner);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: winner ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Winner__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            winner: winner,\n            onRestart: ()=>setCars(_utils_utils__WEBPACK_IMPORTED_MODULE_4__.initialCars)\n        }, void 0, false, {\n            fileName: \"/Users/macbookohnenamen/Desktop/spiced-bootcamp/challenges-spiced/react/twelve-react-immutable-state/react-immutable-state_car-race/components/CarRace/index.js\",\n            lineNumber: 43,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CarRace_styled__WEBPACK_IMPORTED_MODULE_3__.AllCarRoutes, {\n            finishLine: finishLine,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CarRace_styled__WEBPACK_IMPORTED_MODULE_3__.DistanceHeadline, {\n                    children: \"Last Distance\"\n                }, void 0, false, {\n                    fileName: \"/Users/macbookohnenamen/Desktop/spiced-bootcamp/challenges-spiced/react/twelve-react-immutable-state/react-immutable-state_car-race/components/CarRace/index.js\",\n                    lineNumber: 46,\n                    columnNumber: 11\n                }, this),\n                cars.map((car)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CarRace_styled__WEBPACK_IMPORTED_MODULE_3__.Track, {\n                                finishLine: finishLine,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CarRace_styled__WEBPACK_IMPORTED_MODULE_3__.CarButton, {\n                                    onClick: ()=>moveCar(car),\n                                    positionX: car.position.x,\n                                    lastDistance: car.position.lastDistance,\n                                    \"aria-label\": \"Move clicked car forward\",\n                                    children: car.emoji\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookohnenamen/Desktop/spiced-bootcamp/challenges-spiced/react/twelve-react-immutable-state/react-immutable-state_car-race/components/CarRace/index.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookohnenamen/Desktop/spiced-bootcamp/challenges-spiced/react/twelve-react-immutable-state/react-immutable-state_car-race/components/CarRace/index.js\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CarRace_styled__WEBPACK_IMPORTED_MODULE_3__.Distance, {\n                                children: car.position.lastDistance\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookohnenamen/Desktop/spiced-bootcamp/challenges-spiced/react/twelve-react-immutable-state/react-immutable-state_car-race/components/CarRace/index.js\",\n                                lineNumber: 59,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, car.emoji, true, {\n                        fileName: \"/Users/macbookohnenamen/Desktop/spiced-bootcamp/challenges-spiced/react/twelve-react-immutable-state/react-immutable-state_car-race/components/CarRace/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, this))\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/macbookohnenamen/Desktop/spiced-bootcamp/challenges-spiced/react/twelve-react-immutable-state/react-immutable-state_car-race/components/CarRace/index.js\",\n            lineNumber: 45,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(CarRace, \"KWUW6QF5k6PgVRuMkWJiqDuVI3k=\");\n_c = CarRace;\nvar _c;\n$RefreshReg$(_c, \"CarRace\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhclJhY2UvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMkM7QUFDWjtBQU9MO0FBQ3lDO0FBRW5FLE1BQU1VLGFBQWE7QUFFSixTQUFTQyxVQUFVOztJQUNoQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1osK0NBQVFBLENBQUNPLHFEQUFXQTtJQUU1QyxTQUFTTSxRQUFRQyxVQUFVLEVBQUU7UUFDM0IsTUFBTUMsa0JBQWtCUCwrREFBaUJBO1FBQ3pDUSxRQUFRQyxHQUFHLENBQUMsY0FBY0g7UUFDMUJFLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJGO1FBQy9CSCxRQUNFRCxLQUFLTyxHQUFHLENBQUMsQ0FBQ0MsTUFBUTtZQUNoQixJQUFJTCxXQUFXTSxLQUFLLEtBQUtELElBQUlDLEtBQUssRUFBRTtnQkFDbEMsT0FBTztvQkFDTCxHQUFHRCxHQUFHO29CQUNORSxVQUFVO3dCQUNSQyxHQUFHSCxJQUFJRSxRQUFRLENBQUNDLENBQUMsR0FBR1A7d0JBQ3BCUSxjQUFjUjtvQkFDaEI7Z0JBQ0Y7WUFDRixDQUFDO1lBQ0QsT0FBT0k7UUFDVDtJQUVKO0lBRUEsTUFBTUssU0FBU2IsS0FBS2MsSUFBSSxDQUFDLENBQUNOLE1BQVFBLElBQUlFLFFBQVEsQ0FBQ0MsQ0FBQyxJQUFJYjtJQUNwRE8sUUFBUUMsR0FBRyxDQUFDLFVBQVVPO0lBRXRCLHFCQUNFO2tCQUNHQSx1QkFDQyw4REFBQ3ZCLCtDQUFNQTtZQUFDdUIsUUFBUUE7WUFBUUUsV0FBVyxJQUFNZCxRQUFRTCxxREFBV0E7Ozs7O2lDQUU1RCw4REFBQ0oseURBQVlBO1lBQUNNLFlBQVlBOzs4QkFDeEIsOERBQUNMLDZEQUFnQkE7OEJBQUM7Ozs7OztnQkFDakJPLEtBQUtPLEdBQUcsQ0FBQyxDQUFDQyxvQkFDVCw4REFBQ3BCLDJDQUFRQTs7MENBQ1AsOERBQUNPLGtEQUFLQTtnQ0FBQ0csWUFBWUE7MENBQ2pCLDRFQUFDUCxzREFBU0E7b0NBQ1J5QixTQUFTLElBQU1kLFFBQVFNO29DQUN2QlMsV0FBV1QsSUFBSUUsUUFBUSxDQUFDQyxDQUFDO29DQUN6QkMsY0FBY0osSUFBSUUsUUFBUSxDQUFDRSxZQUFZO29DQUN2Q00sY0FBYTs4Q0FFWlYsSUFBSUMsS0FBSzs7Ozs7Ozs7Ozs7MENBR2QsOERBQUNmLHFEQUFRQTswQ0FBRWMsSUFBSUUsUUFBUSxDQUFDRSxZQUFZOzs7Ozs7O3VCQVh2QkosSUFBSUMsS0FBSzs7Ozs7Ozs7OztnQkFlN0I7O0FBR1AsQ0FBQztHQXBEdUJWO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2FyUmFjZS9pbmRleC5qcz81NDA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFdpbm5lciBmcm9tIFwiLi4vV2lubmVyXCI7XG5pbXBvcnQge1xuICBDYXJCdXR0b24sXG4gIEFsbENhclJvdXRlcyxcbiAgRGlzdGFuY2VIZWFkbGluZSxcbiAgRGlzdGFuY2UsXG4gIFRyYWNrLFxufSBmcm9tIFwiLi9DYXJSYWNlLnN0eWxlZFwiO1xuaW1wb3J0IHsgaW5pdGlhbENhcnMsIGdldFJhbmRvbURpc3RhbmNlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxzXCI7XG5cbmNvbnN0IGZpbmlzaExpbmUgPSAyMDA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhclJhY2UoKSB7XG4gIGNvbnN0IFtjYXJzLCBzZXRDYXJzXSA9IHVzZVN0YXRlKGluaXRpYWxDYXJzKTtcblxuICBmdW5jdGlvbiBtb3ZlQ2FyKGNsaWNrZWRDYXIpIHtcbiAgICBjb25zdCBjb3ZlcmVkRGlzdGFuY2UgPSBnZXRSYW5kb21EaXN0YW5jZSgpO1xuICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZENhclwiLCBjbGlja2VkQ2FyKTtcbiAgICBjb25zb2xlLmxvZyhcImNvdmVyZWREaXN0YW5jZVwiLCBjb3ZlcmVkRGlzdGFuY2UpO1xuICAgIHNldENhcnMoXG4gICAgICBjYXJzLm1hcCgoY2FyKSA9PiB7XG4gICAgICAgIGlmIChjbGlja2VkQ2FyLmVtb2ppID09PSBjYXIuZW1vamkpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uY2FyLFxuICAgICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgICAgeDogY2FyLnBvc2l0aW9uLnggKyBjb3ZlcmVkRGlzdGFuY2UsXG4gICAgICAgICAgICAgIGxhc3REaXN0YW5jZTogY292ZXJlZERpc3RhbmNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYXI7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBjb25zdCB3aW5uZXIgPSBjYXJzLmZpbmQoKGNhcikgPT4gY2FyLnBvc2l0aW9uLnggPj0gZmluaXNoTGluZSk7XG4gIGNvbnNvbGUubG9nKFwid2lubmVyXCIsIHdpbm5lcik7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3dpbm5lciA/IChcbiAgICAgICAgPFdpbm5lciB3aW5uZXI9e3dpbm5lcn0gb25SZXN0YXJ0PXsoKSA9PiBzZXRDYXJzKGluaXRpYWxDYXJzKX0gLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxBbGxDYXJSb3V0ZXMgZmluaXNoTGluZT17ZmluaXNoTGluZX0+XG4gICAgICAgICAgPERpc3RhbmNlSGVhZGxpbmU+TGFzdCBEaXN0YW5jZTwvRGlzdGFuY2VIZWFkbGluZT5cbiAgICAgICAgICB7Y2Fycy5tYXAoKGNhcikgPT4gKFxuICAgICAgICAgICAgPEZyYWdtZW50IGtleT17Y2FyLmVtb2ppfT5cbiAgICAgICAgICAgICAgPFRyYWNrIGZpbmlzaExpbmU9e2ZpbmlzaExpbmV9PlxuICAgICAgICAgICAgICAgIDxDYXJCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG1vdmVDYXIoY2FyKX1cbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uWD17Y2FyLnBvc2l0aW9uLnh9XG4gICAgICAgICAgICAgICAgICBsYXN0RGlzdGFuY2U9e2Nhci5wb3NpdGlvbi5sYXN0RGlzdGFuY2V9XG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtgTW92ZSBjbGlja2VkIGNhciBmb3J3YXJkYH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y2FyLmVtb2ppfVxuICAgICAgICAgICAgICAgIDwvQ2FyQnV0dG9uPlxuICAgICAgICAgICAgICA8L1RyYWNrPlxuICAgICAgICAgICAgICA8RGlzdGFuY2U+e2Nhci5wb3NpdGlvbi5sYXN0RGlzdGFuY2V9PC9EaXN0YW5jZT5cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQWxsQ2FyUm91dGVzPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJGcmFnbWVudCIsInVzZVN0YXRlIiwiV2lubmVyIiwiQ2FyQnV0dG9uIiwiQWxsQ2FyUm91dGVzIiwiRGlzdGFuY2VIZWFkbGluZSIsIkRpc3RhbmNlIiwiVHJhY2siLCJpbml0aWFsQ2FycyIsImdldFJhbmRvbURpc3RhbmNlIiwiZmluaXNoTGluZSIsIkNhclJhY2UiLCJjYXJzIiwic2V0Q2FycyIsIm1vdmVDYXIiLCJjbGlja2VkQ2FyIiwiY292ZXJlZERpc3RhbmNlIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImNhciIsImVtb2ppIiwicG9zaXRpb24iLCJ4IiwibGFzdERpc3RhbmNlIiwid2lubmVyIiwiZmluZCIsIm9uUmVzdGFydCIsIm9uQ2xpY2siLCJwb3NpdGlvblgiLCJhcmlhLWxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CarRace/index.js\n"));

/***/ })

});