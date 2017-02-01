#!/usr/bin/env node
let fs = require('fs')
require('shelljs/global')
let argv = require('yargs').argv
let pwd = process.cwd()
let str = process.argv[2]

let dir = `${__dirname}/../../backup`
let project = 'blender'
let projectDir = `${dir}/${project}`

const open = ()=>{
	let target = '~/Library/Application Support/Blender'
	cd(`${target}`)
	exec('open .')
}
const save = ()=>{
	cd(dir)
	rm('-r', project)
	mkdir(project)
	
	let life = `~/Library/Application Support`
	cd(life)
	rm('-r', './Blender/2.78/cache')
	rm('-r', './Blender/2.78/config/bookmarks.txt')
	rm('-r', './Blender/2.78/config/recent-files.txt')
	exec(`zip -r ${projectDir}/Blender.zip Blender`)
}
const restore = ()=>{
	let life = `~/Library/Application Support`
	rm('-r', `${life}/Blender`)
	cd(life)
	// exec(`mkdir Plugins`)
	exec(`unzip -o -d ./ ${projectDir}/Blender.zip`)
}

if (argv.o === project || argv.o === 'all') {
	console.log(`open ${project}...`)
	open()
	console.log('------ Done ------')
} else if (argv.s === project || argv.s === 'all') {
	console.log(`save ${project}...`)
	save()
	console.log('------ Done ------')
} else if (argv.r === project || argv.r === 'all') {
	console.log(`restore ${project}...`)
	restore()
	console.log('------ Done ------')
}