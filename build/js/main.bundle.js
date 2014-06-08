/*!
 * JSTests
 * 0.1.0:1402258713252 [development build]
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var //dom       = require('dom'),
	    // ajax = require('ajax'),
	    greetings = __webpack_require__(1),
	    maps      = __webpack_require__(2);
	
	maps.filters.init();
	
	
	var request = new XMLHttpRequest();
	request.open('GET', '/my/url', true);
	var data;
	request.onload = function() {
	  if (this.status >= 200 && this.status < 400){
	    // Success!
	    data = JSON.parse(this.response);
	  } else {
	    // We reached our target server, but it returned an error
	    console.log("Error!");
	  }
	};
	
	request.onerror = function() {
	  // There was a connection error of some sort
	};
	
	request.send();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	  sayHelloinEnglish: function () {
	    return "Hello";
	  },
	
	  sayHelloInSpanish: function () {
	    return "Hola";
	  }
	};


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	module.exports = {
	
	  filters: {
	    init: function() {
	      console.log("Filters init");
	    }
	  }
	
	};


/***/ }
/******/ ])
//# sourceMappingURL=main.bundle.js.map