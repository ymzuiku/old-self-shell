#!/usr/bin/env node
let fs = require('fs')
require('shelljs/global')
let argv = require('yargs').argv
let pwd = process.cwd()
let str = process.argv[2]

let dir = `${__dirname}/../../backup`
let project = 'example'
let projectDir = `${dir}/${project}`


console.log(dir)

const open = ()=>{}
const save = ()=>{}
const restore = ()=>{}

if (argv.o === project || argv.o === 'all') {
	console.log(`open ${project}...`)
	open()
	console.log('------ Done ------')
} else if (argv.s === project || argv.s === 'all') {
	console.log(`save ${project}...`)
	save()
	console.log('------ Done ------')
} else if (argv.r === project || argv.s === 'all') {
	console.log(`restore ${project}...`)
	restore()
	console.log('------ Done ------')
}