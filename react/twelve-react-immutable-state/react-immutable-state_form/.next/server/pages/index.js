"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Form/Form.styled.js":
/*!****************************************!*\
  !*** ./components/Form/Form.styled.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StyledForm\": () => (/* binding */ StyledForm),\n/* harmony export */   \"StyledInputContainer\": () => (/* binding */ StyledInputContainer)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_0___default().form.withConfig({\n    displayName: \"Form.styled__StyledForm\",\n    componentId: \"sc-5a75413c-0\"\n})`\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  align-items: flex-start;\n`;\nconst StyledInputContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({\n    displayName: \"Form.styled__StyledInputContainer\",\n    componentId: \"sc-5a75413c-1\"\n})`\n  display: flex;\n  gap: 0.5rem;\n  justify-content: space-between;\n  width: 100%;\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm0vRm9ybS5zdHlsZWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF1QztBQUVoQyxNQUFNQyxhQUFhRCx3RUFBVzs7O0VBQUEsQ0FBQzs7Ozs7QUFLdEMsQ0FBQyxDQUFDO0FBRUssTUFBTUcsdUJBQXVCSCx1RUFBVTs7O0VBQUEsQ0FBQzs7Ozs7QUFLL0MsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtaW1tdXRhYmxlLXN0YXRlX2Zvcm0vLi9jb21wb25lbnRzL0Zvcm0vRm9ybS5zdHlsZWQuanM/NWZhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkRm9ybSA9IHN0eWxlZC5mb3JtYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZElucHV0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIlN0eWxlZEZvcm0iLCJmb3JtIiwiU3R5bGVkSW5wdXRDb250YWluZXIiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Form/Form.styled.js\n");

/***/ }),

/***/ "./components/Form/index.js":
/*!**********************************!*\
  !*** ./components/Form/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Form)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Form_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form.styled */ \"./components/Form/Form.styled.js\");\n\n\n\nfunction Form() {\n    const [mountain, setMountain] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"Mount Everest\",\n        values: {\n            altitude: 8848,\n            mountainRange: \"Himalayas\"\n        }\n    });\n    function handleNameChange(event) {\n        setMountain({\n            ...mountain,\n            name: event.target.value\n        });\n    }\n    function handleAltitudeChange(event) {\n        setMountain({\n            ...mountain,\n            values: {\n                ...mountain.values,\n                altitude: event.target.value\n            }\n        });\n    }\n    function handleMountainRangeChange(event) {\n        setMountain({\n            ...mountain,\n            values: {\n                ...mountain.values,\n                mountainRange: event.target.value\n            }\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_styled__WEBPACK_IMPORTED_MODULE_2__.StyledForm, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_styled__WEBPACK_IMPORTED_MODULE_2__.StyledInputContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"name\",\n                        children: \"Name:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookohnenamen/Desktop/spiced-bootcamp/challenges-spiced/react/twelve-react-immutable-state/react-immutable-state_form/components/Form/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"name\",\n                        value: mountain.name,\n                        onChange: handleNameChange\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookohnenamen/Desktop/spiced-bootcamp/challenges-spiced/react/twelve-react-immutable-state/react-immutable-state_form/components/Form/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookohnenamen/Desktop/spiced-bootcamp/challenges-spiced/react/twelve-react-immutable-state/react-immutable-state_form/components/Form/index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_styled__WEBPACK_IMPORTED_MODULE_2__.StyledInputContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"altitude\",\n                        children: \"Altitude:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookohnenamen/Desktop/spiced-bootcamp/challenges-spiced/react/twelve-react-immutable-state/react-immutable-state_form/components/Form/index.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"altitude\",\n                        value: mountain.values.altitude,\n                        onChange: handleAltitudeChange\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookohnenamen/Desktop/spiced-bootcamp/challenges-spiced/react/twelve-react-immutable-state/react-immutable-state_form/components/Form/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookohnenamen/Desktop/spiced-bootcamp/challenges-spiced/react/twelve-react-immutable-state/react-immutable-state_form/components/Form/index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_styled__WEBPACK_IMPORTED_MODULE_2__.StyledInputContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"mountainRange\",\n                        children: \"Mountain Range:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookohnenamen/Desktop/spiced-bootcamp/challenges-spiced/react/twelve-react-immutable-state/react-immutable-state_form/components/Form/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"mountainRange\",\n                        value: mountain.values.mountainRange,\n                        onChange: handleMountainRangeChange\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookohnenamen/Desktop/spiced-bootcamp/challenges-spiced/react/twelve-react-immutable-state/react-immutable-state_form/components/Form/index.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookohnenamen/Desktop/spiced-bootcamp/challenges-spiced/react/twelve-react-immutable-state/react-immutable-state_form/components/Form/index.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"output\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        children: mountain.name\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookohnenamen/Desktop/spiced-bootcamp/challenges-spiced/react/twelve-react-immutable-state/react-immutable-state_form/components/Form/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    \" is \",\n                    mountain.values.altitude,\n                    \" meters high\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/macbookohnenamen/Desktop/spiced-bootcamp/challenges-spiced/react/twelve-react-immutable-state/react-immutable-state_form/components/Form/index.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    \"(and located in the \",\n                    mountain.values.mountainRange,\n                    \")\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookohnenamen/Desktop/spiced-bootcamp/challenges-spiced/react/twelve-react-immutable-state/react-immutable-state_form/components/Form/index.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookohnenamen/Desktop/spiced-bootcamp/challenges-spiced/react/twelve-react-immutable-state/react-immutable-state_form/components/Form/index.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm0vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBaUM7QUFDZ0M7QUFFbEQsU0FBU0csT0FBTztJQUM3QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUM7UUFDdkNNLE1BQU07UUFDTkMsUUFBUTtZQUNOQyxVQUFVO1lBQ1ZDLGVBQWU7UUFDakI7SUFDRjtJQUVBLFNBQVNDLGlCQUFpQkMsS0FBSyxFQUFFO1FBQy9CTixZQUFZO1lBQ1YsR0FBR0QsUUFBUTtZQUNYRSxNQUFNSyxNQUFNQyxNQUFNLENBQUNDLEtBQUs7UUFDMUI7SUFDRjtJQUVBLFNBQVNDLHFCQUFxQkgsS0FBSyxFQUFFO1FBQ25DTixZQUFZO1lBQ1YsR0FBR0QsUUFBUTtZQUNYRyxRQUFRO2dCQUNOLEdBQUdILFNBQVNHLE1BQU07Z0JBQ2xCQyxVQUFVRyxNQUFNQyxNQUFNLENBQUNDLEtBQUs7WUFDOUI7UUFDRjtJQUNGO0lBRUEsU0FBU0UsMEJBQTBCSixLQUFLLEVBQUU7UUFDeENOLFlBQVk7WUFDVixHQUFHRCxRQUFRO1lBQ1hHLFFBQVE7Z0JBQ04sR0FBR0gsU0FBU0csTUFBTTtnQkFDbEJFLGVBQWVFLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztZQUNuQztRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1osb0RBQVVBOzswQkFDVCw4REFBQ0MsOERBQW9CQTs7a0NBQ25CLDhEQUFDYzt3QkFBTUMsU0FBUTtrQ0FBTzs7Ozs7O2tDQUN0Qiw4REFBQ0M7d0JBQU1DLElBQUc7d0JBQU9OLE9BQU9ULFNBQVNFLElBQUk7d0JBQUVjLFVBQVVWOzs7Ozs7Ozs7Ozs7MEJBRW5ELDhEQUFDUiw4REFBb0JBOztrQ0FDbkIsOERBQUNjO3dCQUFNQyxTQUFRO2tDQUFXOzs7Ozs7a0NBQzFCLDhEQUFDQzt3QkFDQ0MsSUFBRzt3QkFDSE4sT0FBT1QsU0FBU0csTUFBTSxDQUFDQyxRQUFRO3dCQUMvQlksVUFBVU47Ozs7Ozs7Ozs7OzswQkFHZCw4REFBQ1osOERBQW9CQTs7a0NBQ25CLDhEQUFDYzt3QkFBTUMsU0FBUTtrQ0FBZ0I7Ozs7OztrQ0FDL0IsOERBQUNDO3dCQUNDQyxJQUFHO3dCQUNITixPQUFPVCxTQUFTRyxNQUFNLENBQUNFLGFBQWE7d0JBQ3BDVyxVQUFVTDs7Ozs7Ozs7Ozs7OzBCQUdkLDhEQUFDTTs7a0NBQ0MsOERBQUNDO2tDQUFHbEIsU0FBU0UsSUFBSTs7Ozs7O29CQUNoQjtvQkFDQUYsU0FBU0csTUFBTSxDQUFDQyxRQUFRO29CQUN4QjtrQ0FDRCw4REFBQ2U7Ozs7O29CQUFLO29CQUNlbkIsU0FBU0csTUFBTSxDQUFDRSxhQUFhO29CQUFDOzs7Ozs7Ozs7Ozs7O0FBSTNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1pbW11dGFibGUtc3RhdGVfZm9ybS8uL2NvbXBvbmVudHMvRm9ybS9pbmRleC5qcz82YzFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTdHlsZWRGb3JtLCBTdHlsZWRJbnB1dENvbnRhaW5lciB9IGZyb20gXCIuL0Zvcm0uc3R5bGVkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0oKSB7XG4gIGNvbnN0IFttb3VudGFpbiwgc2V0TW91bnRhaW5dID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6IFwiTW91bnQgRXZlcmVzdFwiLFxuICAgIHZhbHVlczoge1xuICAgICAgYWx0aXR1ZGU6IDg4NDgsXG4gICAgICBtb3VudGFpblJhbmdlOiBcIkhpbWFsYXlhc1wiLFxuICAgIH0sXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZU5hbWVDaGFuZ2UoZXZlbnQpIHtcbiAgICBzZXRNb3VudGFpbih7XG4gICAgICAuLi5tb3VudGFpbixcbiAgICAgIG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUFsdGl0dWRlQ2hhbmdlKGV2ZW50KSB7XG4gICAgc2V0TW91bnRhaW4oe1xuICAgICAgLi4ubW91bnRhaW4sXG4gICAgICB2YWx1ZXM6IHtcbiAgICAgICAgLi4ubW91bnRhaW4udmFsdWVzLFxuICAgICAgICBhbHRpdHVkZTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU1vdW50YWluUmFuZ2VDaGFuZ2UoZXZlbnQpIHtcbiAgICBzZXRNb3VudGFpbih7XG4gICAgICAuLi5tb3VudGFpbixcbiAgICAgIHZhbHVlczoge1xuICAgICAgICAuLi5tb3VudGFpbi52YWx1ZXMsXG4gICAgICAgIG1vdW50YWluUmFuZ2U6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRGb3JtPlxuICAgICAgPFN0eWxlZElucHV0Q29udGFpbmVyPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5OYW1lOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiB2YWx1ZT17bW91bnRhaW4ubmFtZX0gb25DaGFuZ2U9e2hhbmRsZU5hbWVDaGFuZ2V9IC8+XG4gICAgICA8L1N0eWxlZElucHV0Q29udGFpbmVyPlxuICAgICAgPFN0eWxlZElucHV0Q29udGFpbmVyPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFsdGl0dWRlXCI+QWx0aXR1ZGU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJhbHRpdHVkZVwiXG4gICAgICAgICAgdmFsdWU9e21vdW50YWluLnZhbHVlcy5hbHRpdHVkZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQWx0aXR1ZGVDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L1N0eWxlZElucHV0Q29udGFpbmVyPlxuICAgICAgPFN0eWxlZElucHV0Q29udGFpbmVyPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1vdW50YWluUmFuZ2VcIj5Nb3VudGFpbiBSYW5nZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cIm1vdW50YWluUmFuZ2VcIlxuICAgICAgICAgIHZhbHVlPXttb3VudGFpbi52YWx1ZXMubW91bnRhaW5SYW5nZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTW91bnRhaW5SYW5nZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvU3R5bGVkSW5wdXRDb250YWluZXI+XG4gICAgICA8b3V0cHV0PlxuICAgICAgICA8aT57bW91bnRhaW4ubmFtZX08L2k+XG4gICAgICAgIHtcIiBpcyBcIn1cbiAgICAgICAge21vdW50YWluLnZhbHVlcy5hbHRpdHVkZX1cbiAgICAgICAge1wiIG1ldGVycyBoaWdoXCJ9XG4gICAgICAgIDxiciAvPlxuICAgICAgICAoYW5kIGxvY2F0ZWQgaW4gdGhlIHttb3VudGFpbi52YWx1ZXMubW91bnRhaW5SYW5nZX0pXG4gICAgICA8L291dHB1dD5cbiAgICA8L1N0eWxlZEZvcm0+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJTdHlsZWRGb3JtIiwiU3R5bGVkSW5wdXRDb250YWluZXIiLCJGb3JtIiwibW91bnRhaW4iLCJzZXRNb3VudGFpbiIsIm5hbWUiLCJ2YWx1ZXMiLCJhbHRpdHVkZSIsIm1vdW50YWluUmFuZ2UiLCJoYW5kbGVOYW1lQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUFsdGl0dWRlQ2hhbmdlIiwiaGFuZGxlTW91bnRhaW5SYW5nZUNoYW5nZSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiaWQiLCJvbkNoYW5nZSIsIm91dHB1dCIsImkiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Form/index.js\n");

/***/ }),

/***/ "./components/Layout/index.js":
/*!************************************!*\
  !*** ./components/Layout/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst StyledLayout = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({\n    displayName: \"Layout__StyledLayout\",\n    componentId: \"sc-6fd1dde7-0\"\n})`\n  width: min(100% - 32px, 352px);\n  margin: 0 auto;\n  padding: 32px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n`;\nfunction Layout({ children  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledLayout, {\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/macbookohnenamen/Desktop/spiced-bootcamp/challenges-spiced/react/twelve-react-immutable-state/react-immutable-state_form/components/Layout/index.js\",\n        lineNumber: 13,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQXVDO0FBRXZDLE1BQU1DLGVBQWVELHVFQUFVOzs7RUFBQSxDQUFDOzs7Ozs7O0FBT2hDLENBQUM7QUFFYyxTQUFTRyxPQUFPLEVBQUVDLFNBQVEsRUFBRSxFQUFFO0lBQzNDLHFCQUFPLDhEQUFDSDtrQkFBY0c7Ozs7OztBQUN4QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtaW1tdXRhYmxlLXN0YXRlX2Zvcm0vLi9jb21wb25lbnRzL0xheW91dC9pbmRleC5qcz9kNDFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IFN0eWxlZExheW91dCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiBtaW4oMTAwJSAtIDMycHgsIDM1MnB4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDMycHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIDxTdHlsZWRMYXlvdXQ+e2NoaWxkcmVufTwvU3R5bGVkTGF5b3V0Pjtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJTdHlsZWRMYXlvdXQiLCJkaXYiLCJMYXlvdXQiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout/index.js\");\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Form */ \"./components/Form/index.js\");\n\n\n\nfunction HomePage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Mountain Values\"\n            }, void 0, false, {\n                fileName: \"/Users/macbookohnenamen/Desktop/spiced-bootcamp/challenges-spiced/react/twelve-react-immutable-state/react-immutable-state_form/pages/index.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/macbookohnenamen/Desktop/spiced-bootcamp/challenges-spiced/react/twelve-react-immutable-state/react-immutable-state_form/pages/index.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookohnenamen/Desktop/spiced-bootcamp/challenges-spiced/react/twelve-react-immutable-state/react-immutable-state_form/pages/index.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTBDO0FBQ0o7QUFFdkIsU0FBU0UsV0FBVztJQUNqQyxxQkFDRSw4REFBQ0YsMERBQU1BOzswQkFDTCw4REFBQ0c7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0Ysd0RBQUlBOzs7Ozs7Ozs7OztBQUdYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1pbW11dGFibGUtc3RhdGVfZm9ybS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxoMT5Nb3VudGFpbiBWYWx1ZXM8L2gxPlxuICAgICAgPEZvcm0gLz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJGb3JtIiwiSG9tZVBhZ2UiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();