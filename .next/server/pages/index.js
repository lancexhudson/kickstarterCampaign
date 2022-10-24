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

/***/ "./ethereum/build/CampaignFactory":
/*!****************************************!*\
  !*** ./ethereum/build/CampaignFactory ***!
  \****************************************/
/***/ (() => {



/***/ }),

/***/ "./ethereum/factory.js":
/*!*****************************!*\
  !*** ./ethereum/factory.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _build_CampaignFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build/CampaignFactory */ \"./ethereum/build/CampaignFactory\");\n/* harmony import */ var _build_CampaignFactory__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_build_CampaignFactory__WEBPACK_IMPORTED_MODULE_1__);\n\n// instance from web3.js (globally avail)\n\nconst instance = new _web3__WEBPACK_IMPORTED_MODULE_0__[\"default\"].eth.Contract((_build_CampaignFactory__WEBPACK_IMPORTED_MODULE_1___default().abi), \"0xB6A8ece75F656376c770cEF30d2F546558431ACD\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ldGhlcmV1bS9mYWN0b3J5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEI7QUFDMUIseUNBQXlDO0FBQ2E7QUFFdEQsTUFBTUUsUUFBUSxHQUFHLElBQUlGLDBEQUFpQixDQUN0Q0MsbUVBQW1CLEVBQUUsNENBQTRDLENBRWhFO0FBRUQsaUVBQWVDLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2tpY2tzdGFydC8uL2V0aGVyZXVtL2ZhY3RvcnkuanM/ZDI0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2ViMyBmcm9tICcuL3dlYjMnO1xuLy8gaW5zdGFuY2UgZnJvbSB3ZWIzLmpzIChnbG9iYWxseSBhdmFpbClcbmltcG9ydCBDYW1wYWlnbkZhY3RvcnkgZnJvbSAnLi9idWlsZC9DYW1wYWlnbkZhY3RvcnknO1xuXG5jb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcbkNhbXBhaWduRmFjdG9yeS5hYmksICcweEI2QThlY2U3NUY2NTYzNzZjNzcwY0VGMzBkMkY1NDY1NTg0MzFBQ0QnIFxuLy8gJ2NvbnRyYWN0IGluc3RhbmNlIGFkZHJlc3MgaGVyZSAtLSByZW1peCdcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyJdLCJuYW1lcyI6WyJ3ZWIzIiwiQ2FtcGFpZ25GYWN0b3J5IiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsImFiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./ethereum/factory.js\n");

/***/ }),

/***/ "./ethereum/web3.js":
/*!**************************!*\
  !*** ./ethereum/web3.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ \"web3\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);\n\n// const web3 = new Web3(window.web3.currentProvider);\n// // assumes metamask has injected web3 instance on page\n// export default web3;\nlet web3;\nif (false) {} else {\n    // on the server *OR* the user is not running metamask\n    const provider = new (web3__WEBPACK_IMPORTED_MODULE_0___default().providers.HttpProvider)(\"https://rinkeby.infura.io/v3/${process.env.API.KEY}\");\n    web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (web3);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ldGhlcmV1bS93ZWIzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3QjtBQUV4QixzREFBc0Q7QUFDdEQseURBQXlEO0FBQ3pELHVCQUF1QjtBQUV2QixJQUFJQyxJQUFJO0FBRVIsSUFBSSxLQUF1RSxFQUFFLEVBSzVFLE1BQU07SUFDTCxzREFBc0Q7SUFDdEQsTUFBTUssUUFBUSxHQUFHLElBQUlOLG9FQUEyQixDQUM5QyxxREFBcUQsQ0FDdEQ7SUFDREMsSUFBSSxHQUFHLElBQUlELDZDQUFJLENBQUNNLFFBQVEsQ0FBQyxDQUFDO0FBQzVCLENBQUM7QUFFRCxpRUFBZUwsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2lja3N0YXJ0Ly4vZXRoZXJldW0vd2ViMy5qcz85NjdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuXG4vLyBjb25zdCB3ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcbi8vIC8vIGFzc3VtZXMgbWV0YW1hc2sgaGFzIGluamVjdGVkIHdlYjMgaW5zdGFuY2Ugb24gcGFnZVxuLy8gZXhwb3J0IGRlZmF1bHQgd2ViMztcblxubGV0IHdlYjM7XG4gXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIC8vIGluIHRoZSBicm93c2VyIGFuZCBtZXRhbWFzayBpcyBhdmFpbGFibGUgIFxuICAvLyBub2RlID4+IHR5cGVvZiB3aW5kb3dcbiAgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiIH0pO1xuICB3ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKTtcbn0gZWxzZSB7XG4gIC8vIG9uIHRoZSBzZXJ2ZXIgKk9SKiB0aGUgdXNlciBpcyBub3QgcnVubmluZyBtZXRhbWFza1xuICBjb25zdCBwcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoXG4gICAgXCJodHRwczovL3JpbmtlYnkuaW5mdXJhLmlvL3YzLyR7cHJvY2Vzcy5lbnYuQVBJLktFWX1cIlxuICApO1xuICB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpO1xufVxuIFxuZXhwb3J0IGRlZmF1bHQgd2ViMzsiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./ethereum/web3.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n\n\n\n\n// export default () => {\n// return <h1>This is the campaign home page!</h1>;\n// }; //functional component\nclass CampaignIndex extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    static async getInitialProps() {\n        const campaigns = await _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.getDeployedCampaigns().call();\n        return {\n            campaigns\n        };\n    // required by next - retrieves initial data without rendering component\n    }\n    renderCampaigns() {\n        const items = this.props.campaigns.map((address)=>{\n            return {\n                header: address,\n                description: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: \"View Campaign\"\n                }, void 0, false, {\n                    fileName: \"/Users/lance/Documents/git-workspace/kickstarterCampaign2.0/pages/index.js\",\n                    lineNumber: 21,\n                    columnNumber: 26\n                }, this),\n                fluid: true\n            };\n        });\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Group, {\n            item: items\n        }, void 0, false, {\n            fileName: \"/Users/lance/Documents/git-workspace/kickstarterCampaign2.0/pages/index.js\",\n            lineNumber: 27,\n            columnNumber: 12\n        }, this);\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: this.renderCampaigns()\n        }, void 0, false, {\n            fileName: \"/Users/lance/Documents/git-workspace/kickstarterCampaign2.0/pages/index.js\",\n            lineNumber: 31,\n            columnNumber: 12\n        }, this);\n    // prevents error message\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CampaignIndex); // necessary to keep next from throwing an error \n // npm run dev\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQXlDO0FBQ0E7QUFDQztBQUUxQyx5QkFBeUI7QUFDekIsbURBQW1EO0FBQ25ELDRCQUE0QjtBQUU1QixNQUFNSSxhQUFhLFNBQVNILDRDQUFTO2lCQUV4QkksZUFBZSxHQUFHO1FBQzNCLE1BQU1DLFNBQVMsR0FBRyxNQUFNSCxzRkFBb0MsRUFBRSxDQUFDTSxJQUFJLEVBQUU7UUFDckUsT0FBTztZQUFFSCxTQUFTO1NBQUUsQ0FBQztJQUNyQix3RUFBd0U7SUFDNUU7SUFFQUksZUFBZSxHQUFHO1FBQ2QsTUFBTUMsS0FBSyxHQUFHLElBQUksQ0FBQ0MsS0FBSyxDQUFDTixTQUFTLENBQUNPLEdBQUcsQ0FBQ0MsQ0FBQUEsT0FBTyxHQUFJO1lBQzlDLE9BQU87Z0JBQ0hDLE1BQU0sRUFBRUQsT0FBTztnQkFDZkUsV0FBVyxnQkFBRSw4REFBQ0MsR0FBQzs4QkFBQyxlQUFhOzs7Ozt3QkFBSTtnQkFDakNDLEtBQUssRUFBRSxJQUFJO2FBRWQsQ0FBQztRQUNOLENBQUMsQ0FBQztRQUVGLHFCQUFPLDhEQUFDaEIseURBQVU7WUFBQ2tCLElBQUksRUFBR1QsS0FBSzs7Ozs7Z0JBQUksQ0FBQztJQUN4QztJQUVBVSxNQUFNLEdBQUc7UUFDTCxxQkFBTyw4REFBQ0MsS0FBRztzQkFBRSxJQUFJLENBQUNaLGVBQWUsRUFBRTs7Ozs7Z0JBQU87SUFDMUMseUJBQXlCO0lBQzdCO0NBQ0M7QUFFRCxpRUFBZU4sYUFBYSxFQUFDLENBQzdCLGlEQUFpRDtDQUNqRCxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2lja3N0YXJ0Ly4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xuXG4vLyBleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4vLyByZXR1cm4gPGgxPlRoaXMgaXMgdGhlIGNhbXBhaWduIGhvbWUgcGFnZSE8L2gxPjtcbi8vIH07IC8vZnVuY3Rpb25hbCBjb21wb25lbnRcblxuY2xhc3MgQ2FtcGFpZ25JbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG5cbnN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgY29uc3QgY2FtcGFpZ25zID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpO1xuICAgIHJldHVybiB7IGNhbXBhaWducyB9O1xuICAgIC8vIHJlcXVpcmVkIGJ5IG5leHQgLSByZXRyaWV2ZXMgaW5pdGlhbCBkYXRhIHdpdGhvdXQgcmVuZGVyaW5nIGNvbXBvbmVudFxufVxuXG5yZW5kZXJDYW1wYWlnbnMoKSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLmNhbXBhaWducy5tYXAoYWRkcmVzcyA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZWFkZXI6IGFkZHJlc3MsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogPGE+VmlldyBDYW1wYWlnbjwvYT4sIFxuICAgICAgICAgICAgZmx1aWQ6IHRydWUgXG4gICAgICAgICAgICAvLyBmbHVpZCBmaWxscyB1cCB3aWR0aCBvZiBjb250YWluZXIgXG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbT0ge2l0ZW1zfSAvPjtcbn1cblxucmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2Pnt0aGlzLnJlbmRlckNhbXBhaWducygpfTwvZGl2PlxuICAgIC8vIHByZXZlbnRzIGVycm9yIG1lc3NhZ2Vcbn1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25JbmRleDtcbi8vIG5lY2Vzc2FyeSB0byBrZWVwIG5leHQgZnJvbSB0aHJvd2luZyBhbiBlcnJvciBcbi8vIG5wbSBydW4gZGV2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsImZhY3RvcnkiLCJDYW1wYWlnbkluZGV4IiwiZ2V0SW5pdGlhbFByb3BzIiwiY2FtcGFpZ25zIiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCIsInJlbmRlckNhbXBhaWducyIsIml0ZW1zIiwicHJvcHMiLCJtYXAiLCJhZGRyZXNzIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJhIiwiZmx1aWQiLCJHcm91cCIsIml0ZW0iLCJyZW5kZXIiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("semantic-ui-react");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("web3");

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