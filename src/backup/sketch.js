#!/usr/bin/env node
let fs = require('fs')
require('shelljs/global')
let argv = require('yargs').argv
let pwd = process.cwd()
let str = process.argv[2]

let dir = `${__dirname}/../../backup`
let project = 'sketch'
let projectDir = `${dir}/${project}`

const open = ()=>{
	let target = '~/Library/Application Support/com.bohemiancoding.sketch3/'
	cd(`${target}`)
	exec('open .')
}
const save = ()=>{
	cd(dir)
	rm('-r', project)
	mkdir(project)
	
	let life = `~/Library/Application Support/com.bohemiancoding.sketch3`
	cd(life)
	exec(`zip -r ${projectDir}/Plugins.zip Plugins`)
}
const restore = ()=>{
	let life = `~/Library/Application Support/com.bohemiancoding.sketch3`
	rm('-r', `${life}/Plugins`)
	cd(life)
	exec(`mkdir Plugins`)
	exec(`unzip -o -d ./ ${projectDir}/Plugins.zip`)
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