(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var read = [2.5, 4, 5];

function start() {
	TweenLite.defaultEase = Power1.easeOut;

	var tlSlider = new TimelineMax();
	tlSlider.add(createSlide("a"), 0);
	tlSlider.add(createSlide("b"), .2);

	var fadeTime = .5;

	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	// tl.from(".t1", fadeTime, {opacity: 0})
	tl.to([".t1", ".element_top"], .3, { opacity: 0 }, "+=" + read[0]);

	tl.from([".t2", ".element_bottom"], fadeTime, { opacity: 0 });

	tl.to(".t2", .3, { opacity: 0 }, "+=" + read[1]);
	tl.from(".t3", fadeTime, { opacity: 0 });

	tl.to(".t3", .3, { opacity: 0 }, "+=" + read[2]);

	tl.from(".hero", .3, { opacity: 0 });
	tl.from(".end_txt", .3, { opacity: 0 });
	tl.from(".cta", .3, { opacity: 0 }, "+=.3");
}

function createSlide(ab) {
	var tl = new TimelineMax();

	var speed_fast = .4;

	var easeFast = Power3.easeOut;
	var easeSlow = Linear.easeNone;

	tl.to(".phoneholder." + ab, speed_fast, { y: -900, ease: easeFast });

	tl.to(".phoneholder." + ab, read[0], { y: "+=70", ease: easeSlow });

	tl.to(".phoneholder." + ab, speed_fast, { y: -500, ease: easeFast });

	tl.to(".phoneholder." + ab, read[1], { y: "+=70", ease: easeSlow });

	tl.to(".phoneholder." + ab, speed_fast, { y: -100, ease: easeFast });

	tl.to(".phoneholder." + ab, read[2], { y: "+=70", ease: easeSlow });
	tl.to(".phoneholder." + ab, speed_fast, { opacity: 0, y: "+=300", ease: easeFast });

	return tl;
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
