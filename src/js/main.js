"use strict";

var //dom       = require('dom'),
    // ajax = require('ajax'),
    greetings = require('./greetings'),
    maps      = require('./maps');

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
