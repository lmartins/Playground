"use strict";

var //dom       = require('dom'),
    // ajax = require('ajax'),
    _ = require('lodash'),
    greetings = require('./greetings'),
    maps      = require('./maps');

maps.filters.init();

function $(a,b){
  return(b||document)['querySelector'+(b=/\:first$/,b.test(a)?'':'All')](a.replace(b,''));
}

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
// request.send();

var listItems = _.first($('li.active'));
listItems.classList.add('picked');
