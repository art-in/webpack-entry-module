/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// webpack-entry-module bootstrap (autogeneraged)

	// Extract path to entry module from script-tag
	// TODO: check attribute in script-tag of webpack bundle only, not just first one
	var scriptTag = document.querySelector('script');
	var entryModule = scriptTag.getAttribute('webpack-entry-module');
	if (!entryModule) throw Error('No entry module specified!');

	// We should explicitly require all modules,
	// so webpack can find them in text of this module and then bundle
	switch(entryModule) {
	case 'lib/helpers.js': __webpack_require__(1); break;
	case 'module1_sub.js': __webpack_require__(2); break;
	case 'module1.js': __webpack_require__(3); break;
	case 'module2_sub.js': __webpack_require__(4); break;
	case 'module2.js': __webpack_require__(5); break;
	case 'sub/module3.js': __webpack_require__(6); break;
	default: throw new Error('Unknown entry module: ' + entryModule);
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
		louder: function(str) {
			return str.toUpperCase();
		}
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = 'Text from sub-module1';

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var subModule = __webpack_require__(2);
	var helpers = __webpack_require__(1);

	document.write(helpers.louder('Text from module1'));
	document.write('<br>');
	document.write(subModule);


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = 'Text from sub-module2';

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var subModule = __webpack_require__(4);
	var helpers = __webpack_require__(1);

	document.write(helpers.louder('Text from module2'));
	document.write('<br>');
	document.write(subModule);


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var helpers = __webpack_require__(1);

	document.write(helpers.louder('Louder from shared helpers'));

/***/ }
/******/ ]);