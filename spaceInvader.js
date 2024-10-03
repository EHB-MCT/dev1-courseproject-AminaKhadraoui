"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

function signature() {
	context.fillRect(0, 0, 300, 300);
	context.fillStyle = "#AF69EE";
	context.fillRect(25, 25, 50, 100);
	context.fillRect(225, 25, 50, 100);
	context.fillRect(25, 175, 50, 50);
	context.fillRect(225, 175, 50, 50);
	context.fillRect(25, 225, 250, 50);
}
signature();
