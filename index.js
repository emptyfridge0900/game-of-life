/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../pkg/game-of-life.js":
/*!******************************!*\
  !*** ../pkg/game-of-life.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Universe: () => (/* reexport safe */ _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_0__.Universe),\n/* harmony export */   __wbg_set_wasm: () => (/* reexport safe */ _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm),\n/* harmony export */   __wbindgen_throw: () => (/* reexport safe */ _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_throw)\n/* harmony export */ });\n/* harmony import */ var _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-of-life_bg.wasm */ \"../pkg/game-of-life_bg.wasm\");\n/* harmony import */ var _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-of-life_bg.js */ \"../pkg/game-of-life_bg.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);\n_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n(0,_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm)(_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_1__);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///../pkg/game-of-life.js?");

/***/ }),

/***/ "../pkg/game-of-life_bg.js":
/*!*********************************!*\
  !*** ../pkg/game-of-life_bg.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Universe: () => (/* binding */ Universe),\n/* harmony export */   __wbg_set_wasm: () => (/* binding */ __wbg_set_wasm),\n/* harmony export */   __wbindgen_throw: () => (/* binding */ __wbindgen_throw)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nlet wasm;\nfunction __wbg_set_wasm(val) {\n    wasm = val;\n}\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = null;\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nfunction _assertNum(n) {\n    if (typeof(n) !== 'number') throw new Error(`expected a number argument, found ${typeof(n)}`);\n}\n\nlet cachedInt32Memory0 = null;\n\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {\n        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);\n    }\n    return cachedInt32Memory0;\n}\n\nlet cachedUint32Memory0 = null;\n\nfunction getUint32Memory0() {\n    if (cachedUint32Memory0 === null || cachedUint32Memory0.byteLength === 0) {\n        cachedUint32Memory0 = new Uint32Array(wasm.memory.buffer);\n    }\n    return cachedUint32Memory0;\n}\n\nfunction getArrayU32FromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    return getUint32Memory0().subarray(ptr / 4, ptr / 4 + len);\n}\n\nconst UniverseFinalization = (typeof FinalizationRegistry === 'undefined')\n    ? { register: () => {}, unregister: () => {} }\n    : new FinalizationRegistry(ptr => wasm.__wbg_universe_free(ptr >>> 0));\n/**\n*/\nclass Universe {\n\n    __destroy_into_raw() {\n        const ptr = this.__wbg_ptr;\n        this.__wbg_ptr = 0;\n        UniverseFinalization.unregister(this);\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_universe_free(ptr);\n    }\n    /**\n    */\n    constructor() {\n        const ret = wasm.universe_new();\n        this.__wbg_ptr = ret >>> 0;\n        return this;\n    }\n    /**\n    */\n    tick() {\n        if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');\n        _assertNum(this.__wbg_ptr);\n        wasm.universe_tick(this.__wbg_ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');\n        _assertNum(this.__wbg_ptr);\n        const ret = wasm.universe_width(this.__wbg_ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    height() {\n        if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');\n        _assertNum(this.__wbg_ptr);\n        const ret = wasm.universe_height(this.__wbg_ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    cells() {\n        if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');\n        _assertNum(this.__wbg_ptr);\n        const ret = wasm.universe_cells(this.__wbg_ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} width\n    */\n    set_width(width) {\n        if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');\n        _assertNum(this.__wbg_ptr);\n        _assertNum(width);\n        wasm.universe_set_width(this.__wbg_ptr, width);\n    }\n    /**\n    * @param {number} height\n    */\n    set_height(height) {\n        if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');\n        _assertNum(this.__wbg_ptr);\n        _assertNum(height);\n        wasm.universe_set_height(this.__wbg_ptr, height);\n    }\n    /**\n    * @returns {Uint32Array}\n    */\n    get_cells() {\n        try {\n            if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');\n            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n            _assertNum(this.__wbg_ptr);\n            wasm.universe_get_cells(retptr, this.__wbg_ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            var v1 = getArrayU32FromWasm0(r0, r1).slice();\n            wasm.__wbindgen_free(r0, r1 * 4, 4);\n            return v1;\n        } finally {\n            wasm.__wbindgen_add_to_stack_pointer(16);\n        }\n    }\n    /**\n    * @param {number} row\n    * @param {number} col\n    */\n    set_cell(row, col) {\n        if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');\n        _assertNum(this.__wbg_ptr);\n        _assertNum(row);\n        _assertNum(col);\n        wasm.universe_set_cell(this.__wbg_ptr, row, col);\n    }\n    /**\n    * @param {number} row\n    * @param {number} column\n    */\n    toggle_cell(row, column) {\n        if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');\n        _assertNum(this.__wbg_ptr);\n        _assertNum(row);\n        _assertNum(column);\n        wasm.universe_toggle_cell(this.__wbg_ptr, row, column);\n    }\n}\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n\n//# sourceURL=webpack:///../pkg/game-of-life_bg.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pkg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pkg */ \"../pkg/game-of-life.js\");\n/* harmony import */ var _pkg_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pkg/game-of-life_bg.wasm */ \"../pkg/game-of-life_bg.wasm\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pkg__WEBPACK_IMPORTED_MODULE_0__, _pkg_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);\n([_pkg__WEBPACK_IMPORTED_MODULE_0__, _pkg_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst CELL_SIZE = 5; // px\nconst GRID_COLOR = \"#CCCCCC\";\nconst DEAD_COLOR = \"#FFFFFF\";\nconst ALIVE_COLOR = \"#000000\";\n\nconst universe = new _pkg__WEBPACK_IMPORTED_MODULE_0__.Universe();\nconst width = universe.width();\nconst height = universe.height();\n\nconst canvas = document.getElementById(\"game-of-life-canvas\");\ncanvas.addEventListener(\"click\", event => {\n  const boundingRect = canvas.getBoundingClientRect();\n\n  const scaleX = canvas.width / boundingRect.width;\n  const scaleY = canvas.height / boundingRect.height;\n\n  const canvasLeft = (event.clientX - boundingRect.left) * scaleX;\n  const canvasTop = (event.clientY - boundingRect.top) * scaleY;\n\n  const row = Math.min(Math.floor(canvasTop / (CELL_SIZE + 1)), height - 1);\n  const col = Math.min(Math.floor(canvasLeft / (CELL_SIZE + 1)), width - 1);\n\n  universe.toggle_cell(row, col);\n\n  drawGrid();\n  drawCells();\n});\ncanvas.height = (CELL_SIZE + 1) * height + 1;\ncanvas.width = (CELL_SIZE + 1) * width + 1;\n\nconst ctx = canvas.getContext('2d');\nconst drawGrid = () => {\n  ctx.beginPath();\n  ctx.strokeStyle = GRID_COLOR;\n\n  // Vertical lines.\n  for (let i = 0; i <= width; i++) {\n    ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);\n    ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);\n  }\n\n  // Horizontal lines.\n  for (let j = 0; j <= height; j++) {\n    ctx.moveTo(0,                           j * (CELL_SIZE + 1) + 1);\n    ctx.lineTo((CELL_SIZE + 1) * width + 1, j * (CELL_SIZE + 1) + 1);\n  }\n\n  ctx.stroke();\n};\nconst getIndex = (row, column) => {\n  return row * width + column;\n};\nconst bitIsSet = (n, arr) => {\n  const byte = Math.floor(n / 8);\n  const mask = 1 << (n % 8);\n  return (arr[byte] & mask) === mask;\n};\nconst drawCells = () => {\n  const cellsPtr = universe.cells();\n  const cells =new Uint8Array(_pkg_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.buffer, cellsPtr, width * height/8);\n\n  ctx.beginPath();\n\n  for (let row = 0; row < height; row++) {\n    for (let col = 0; col < width; col++) {\n      const idx = getIndex(row, col);\n\n      ctx.fillStyle = bitIsSet(idx, cells)\n        ? ALIVE_COLOR\n        : DEAD_COLOR;\n\n      ctx.fillRect(\n        col * (CELL_SIZE + 1) + 1,\n        row * (CELL_SIZE + 1) + 1,\n        CELL_SIZE,\n        CELL_SIZE\n      );\n    }\n  }\n\n  ctx.stroke();\n};\n\nlet animationId = null;\n\nconst renderLoop = () => {\n  universe.tick();\n\n  drawGrid();\n  drawCells();\n\n  animationId  = requestAnimationFrame(renderLoop);\n};\n\nconst isPaused = () => {\n  return animationId === null;\n};\n\nconst playPauseButton = document.getElementById(\"play-pause\");\n\nconst play = () => {\n  playPauseButton.textContent = \"⏸\";\n  renderLoop();\n};\n\nconst pause = () => {\n  playPauseButton.textContent = \"▶\";\n  cancelAnimationFrame(animationId);\n  animationId = null;\n};\n\nplayPauseButton.addEventListener(\"click\", event => {\n  if (isPaused()) {\n    play();\n  } else {\n    pause();\n  }\n});\n\n\n\ndrawGrid();\ndrawCells();\nplay();\n//requestAnimationFrame(renderLoop);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "../pkg/game-of-life_bg.wasm":
/*!***********************************!*\
  !*** ../pkg/game-of-life_bg.wasm ***!
  \***********************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./game-of-life_bg.js */ \"../pkg/game-of-life_bg.js\");\nmodule.exports = __webpack_require__.v(exports, module.id, \"25c37910f28fecb08fd8\", {\n\t\"./game-of-life_bg.js\": {\n\t\t\"__wbindgen_throw\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw\n\t}\n});\n\n//# sourceURL=webpack:///../pkg/game-of-life_bg.wasm?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/wasm loading */
/******/ 	(() => {
/******/ 		__webpack_require__.v = (exports, wasmModuleId, wasmModuleHash, importsObj) => {
/******/ 			var req = fetch(__webpack_require__.p + "" + wasmModuleHash + ".module.wasm");
/******/ 			var fallback = () => (req
/******/ 				.then((x) => (x.arrayBuffer()))
/******/ 				.then((bytes) => (WebAssembly.instantiate(bytes, importsObj)))
/******/ 				.then((res) => (Object.assign(exports, res.instance.exports))));
/******/ 			return req.then((res) => {
/******/ 				if (typeof WebAssembly.instantiateStreaming === "function") {
/******/ 					return WebAssembly.instantiateStreaming(res, importsObj)
/******/ 						.then(
/******/ 							(res) => (Object.assign(exports, res.instance.exports)),
/******/ 							(e) => {
/******/ 								if(res.headers.get("Content-Type") !== "application/wasm") {
/******/ 									console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
/******/ 									return fallback();
/******/ 								}
/******/ 								throw e;
/******/ 							}
/******/ 						);
/******/ 				}
/******/ 				return fallback();
/******/ 			});
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;