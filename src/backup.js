#!/usr/bin/env node
let fs = require('fs')
require('shelljs/global')
let argv = require('yargs').argv
let pwd = process.cwd()
let str = process.argv[2]

// console.log(str)

const save_vscode = ()=>{
	console.log('save vscode')
}

const save_sketch = ()=>{
	console.log('save sketch')
}

const save_ps = ()=>{
	console.log('save ps')
}

const save_affinity = ()=>{
	console.log('save affinity')
}

const save_blender = ()=>{
	console.log('save blender')
}

const save_km = ()=>{
	console.log('save km')
}

const save_all = ()=>{
	save_vscode()
	save_ps()
	save_affinity()
	save_blender()
	save_km()
}

const restore_vscode = ()=>{
	console.log('restore vscode')
}

const restore_sketch = ()=>{
	console.log('restore sketch')
}

const restore_ps = ()=>{
	console.log('restore ps')
}

const restore_affinity = ()=>{
	console.log('restore affinity')
}

const restore_blender = ()=>{
	console.log('restore blender')
}

const restore_km = ()=>{
	console.log('restore km')
}

const restore_all = ()=>{
	restore_vscode()
	restore_sketch()
	restore_ps()
	restore_affinity()
	restore_blender()
	restore_km()
}

if (argv.s === 'vscode') {
	save_vscode()
} else if(argv.s === 'sketch') {
	save_sketch()
} else if (argv.s === 'ps') {
	save_ps()
} else if (argv.s === 'affinity') {
	save_affinity()
} else if (argv.s === 'blender') {
	save_blender()
} else if (argv.s === 'km') {
	save_km()
} else if (argv.s === 'all') {
	save_all()
} else if (argv.s === 'ls') {
	console.log('-s vscode, sketch, ps, affinity, blender, km, alfred')
}

if (argv.r === 'vscode') {
	restore_vscode()
} else if(argv.r === 'sketch') {
	restore_sketch()
} else if (argv.r === 'ps') {
	restore_ps()
} else if (argv.r === 'affinity') {
	restore_affinity()
} else if (argv.r === 'blender') {
	restore_blender()
} else if (argv.r === 'km') {
	restore_km()
} else if (argv.r === 'all') {
	restore_all()
} else if (argv.r === 'ls') {
	console.log('vscode, sketch, ps, affinity, blender, km, alfred')
}


