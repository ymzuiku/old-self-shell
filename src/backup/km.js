#!/usr/bin/env node
let fs = require('fs')
require('shelljs/global')
let argv = require('yargs').argv
let pwd = process.cwd()
let str = process.argv

let dir = `${__dirname}/../../backup`
let project = 'km'
let projectDir = `${dir}/${project}`



const open = ()=>{
	let target = `~/Documents`
	cd(`${target}`)
	exec('open .')
}
const save = ()=>{
	cd(dir)
	rm('-r', project)
	mkdir(project)
	
	let life = `~/Documents`
	cd(life)
	exec(`zip -r ${projectDir}/km.zip km.kmsync`)
}
const restore = ()=>{
	let life = `~/Documents`
	rm('-r', `${life}/km.kmsync`)
	cd(life)
	exec(`unzip -o -d ./ ${projectDir}/km.zip`)
}

// if (argv.o === project || argv.o === 'all') {
// 	console.log(`open ${project}...`)
// 	open()
// 	console.log('------ Done ------')
// } else if (argv.s === project || argv.s === 'all') {
// 	console.log(`save ${project}...`)
// 	save()
// 	console.log('------ Done ------')
// } else if (argv.r === project || argv.r === 'all') {
// 	console.log(`restore ${project}...`)
// 	restore()
// 	console.log('------ Done ------')
// }

if(str[4]) {
	console.log('error')
} else if (str[2] === 'o' && (str[3] === project || str[3] === 'all')) {
	console.log(`open ${project}...`)
	open()
	console.log('------ Done ------')
} else if (str[2] === 's' && (str[3] === project || str[3] === 'all'))  {
	console.log(`save ${project}...`)
	save()
	console.log('------ Done ------')
} else if (str[2] === 'r' && (str[3] === project || str[3] === 'all'))  {
	console.log(`restore ${project}...`)
	restore()
	console.log('------ Done ------')
}