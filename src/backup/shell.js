#!/usr/bin/env node
let fs = require('fs')
require('shelljs/global')
let argv = require('yargs').argv
let pwd = process.cwd()
let str = process.argv[2]

let dir = `${__dirname}/../../backup`
let project = 'shell'
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
	cd('~/')
	// exec(`zip -r ${projectDir}/Blender.zip Blender`)
	cp('-r', '.bash_profile', projectDir)
	cp('-r', '.gitconfig', projectDir)
}
const restore = ()=>{
	let life = `~/Library/Application Support`
	rm('-r', `~/.bash_profile`)
	rm('-r', `~/.gitconfig`)
	cd(`~/`)
	cp('-r', `${projectDir}/.bash_profile`, `~/.`)
	cp('-r', `${projectDir}/.gitconfig`, `~/.`)
}

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