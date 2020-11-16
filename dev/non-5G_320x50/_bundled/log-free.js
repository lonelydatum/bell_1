(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

var fadeTime = .5;

function init(data) {
	TweenLite.defaultEase = Power1.easeOut;

	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	var tlSlider = new TimelineMax();
	tlSlider.add(createSlide("a", data), 0);
	tlSlider.add(createSlide("b", data), .10);

	return tl;
}

function createSlide(ab, data) {
	var tl = new TimelineMax();

	var speed_fast = .5;
	var distance_short = 70;

	var easeFast = Power1.easeOut;
	var easeSlow = Linear.easeNone;

	for (var i = 0; i < 3; i++) {
		tl.to(".phoneholder." + ab, speed_fast, { y: data[i].y, ease: easeFast });
		tl.to(".phoneholder." + ab, data[i].read, { y: "+=" + distance_short, ease: easeSlow });
	}

	tl.to(".phoneholder." + ab, speed_fast, { opacity: 0, y: "+=300", ease: Power4.easeOut }, "+=0");

	return tl;
}

function txt(read) {
	TweenLite.defaultEase = Power1.easeOut;
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	tl.to(".t1", .3, { opacity: 0 }, "+=" + read[0]);

	tl.from([".t2"], fadeTime, { opacity: 0 });

	tl.to(".t2", .3, { opacity: 0 }, "+=" + read[1]);
	tl.from(".t3", fadeTime, { opacity: 0 });

	tl.add("t3-out", "+=" + read[2]);
	tl.to(".t3", .3, { opacity: 0 }, "t3-out");

	return tl;
}

exports.size = size;
exports.createSlide = createSlide;
exports.init = init;
exports.fadeTime = fadeTime;
exports.txt = txt;

},{}],2:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

function start() {

	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });
	tl.from(".hero", _commonJsCommonJs.fadeTime, { opacity: 0 }, .5);
	tl.from([".legal", ".t1"], _commonJsCommonJs.fadeTime, { opacity: 0 });
	tl.from(".cta", _commonJsCommonJs.fadeTime, { opacity: 0 }, "+=.3");
}

start();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
